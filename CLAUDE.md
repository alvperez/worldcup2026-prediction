# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page, static prediction game for the 2026 FIFA World Cup. Pure HTML/CSS/JS — no build step, no package manager, no tests. Hosted on GitHub Pages. UI strings are in Spanish.

Persistence is unusual: submissions are POSTed as a single JSON blob to a Google Form, whose responses spreadsheet is published as CSV; the leaderboard tab fetches and parses that CSV on every render.

## Running locally

There is no build. Either open `index.html` directly, or serve the folder:

```
python3 -m http.server 8000
```

Scripts must load in this order (already wired in `index.html`): `third_place_table.js` → `results.js` → `app.js`.

## Forking for your own pool

The README points users at four constants at the top of `app.js:6-11`:

- `DATA_SRC` — openfootball `worldcup.json` base URL (fixtures + group composition)
- `LEADERBOARD_CSV_URL` — your Google Sheet "publish to web → CSV" URL
- `FORM_ID`, `ENTRY_ID` — your Google Form id and the single text field's `entry.NNN` id

The form has exactly one field; the entire prediction payload is `JSON.stringify`-ed into it (see `buildPayload` / `confirmSubmitPrediction`).

## Architecture

### Files

- `index.html` — two tabs (`#tab-predict`, `#tab-leaderboard`), modals for group results, prediction viewer, name entry, scoring help, and toast/confetti containers.
- `app.js` (~3.4k lines) — everything: data load, state, rendering, scoring, submission, leaderboard. Sections are loosely delimited by `// ---- … ----` banners.
- `results.js` — defines global `RESULTS` (real tournament outcomes used to score every submission). `results-empty.js` is the pre-tournament template; only one of the two is loaded at a time via `index.html`. **`results-empty.js` is the file currently loaded by `index.html`** and is being filled in live as the real tournament progresses — add new match results there, not in `results.js`.
- `third_place_table.js` — FIFA's official lookup table mapping the alphabetical 8-letter combination of qualifying group-3rd-place teams (`TP_TABLE` keyed by e.g. `"ABCDEFGH"`) to the 8 round-of-32 best-thirds slot assignments (`TP_COLUMNS = [79,85,81,74,82,77,87,80]`).

### Data flow

1. `init()` → `loadData()` fetches openfootball JSON and derives `TEAMS_BY_GROUP`, the official `GROUP_MATCHES_BY_GROUP` schedule, and the hard-coded `KO_TREE` (matches 73–104 with `winner_of` / `loser_of` / `runner_up` / `third_place` slot references).
2. User picks mutate the global `state` object (`app.js:406`): `groups` (ordered standings), `groupMatches` (scores), `thirdPlace` (8 best-3rd qualifiers), `matchTeams` (resolved bracket slot occupants), `knockoutResults` (winner per match num), `awards`. Saved to `localStorage` under `wc2026_picks` with a version key (`wc2026_version`) — bumping `LOCAL_STORAGE_VERSION` wipes stale picks on next load.
3. `renderAll()` is the master re-render: `buildTPAllocation` → `computeMatchTeams` → `renderGroups` / `renderThirdPlace` / `renderBracket` / `renderAwardSelects` / `loadLeaderboard`.
4. `buildPayload()` produces the JSON blob; `confirmSubmitPrediction()` POSTs it (no-cors) to the Google Form.
5. `loadLeaderboard()` fetches the published CSV, parses each row's JSON, calls `scorePrediction(prediction, RESULTS)`, sorts, and renders. Clicking an entry opens a read-only review of their bracket via `renderPredictionReview` / `renderKnockoutBracket(reviewState, …)`.

### Bracket resolution

The bracket is not stored as concrete teams — it's stored as **slot references**. `computeMatchTeams()` walks `KO_TREE` resolving each `slot` (`winner`/`runner_up`/`third_place`/`winner_of`/`loser_of`) into actual team names using current `state`. The "best thirds" path goes through `buildTPAllocation()`, which uses the user's `state.thirdPlace` order, sorts the 8 qualifying groups alphabetically into a `TP_TABLE` key, and assigns each team to the right R32 match via `TP_COLUMNS`. Whenever group standings change, `cleanupKnockoutAfterGroupChange()` invalidates any downstream `knockoutResults` that reference teams no longer present.

### Scoring

Configurable via the `puntuaciones` object at the top of `app.js`. `scorePrediction(prediction, results)` is the single entry point used by both the leaderboard and any review UI; it scores group positions (1st/2nd/3rd), each group match (exact score vs. correct outcome), the knockout progression (`getKnockoutScoreBreakdown` — per-round points for every predicted team that actually reached that round in `results`), and the two top-3 award lists. Group-stage 3rd-place qualification is **intentionally not scored separately** — it's already captured by knockout points if the team reaches R32.

## Gotchas

- **Recording a group result: the match key is alphabetical, but `home`/`away` follow the real fixture — do not conflate them.** A group match key is `[teamA, teamB].sort().join('__')` (`groupMatchKey`, `app.js:636`), so the key is **always alphabetical** (e.g. `Paraguay__USA`, P before U) and tells you *nothing* about who is home. The `{ home, away }` values map to the fixture's `team1`/`team2`, i.e. the **actual home/away teams** from openfootball (`app.js:706-715`: `home`→`team1` goals, `away`→`team2` goals). So when adding a result, put the **real home team's goals in `home`** and the away team's in `away`, regardless of which name comes first in the key. Concretely: USA hosted Paraguay and won 4–1, so the entry is `"Paraguay__USA": { home: 4, away: 1 }` (USA=home=4, Paraguay=away=1) — *not* `{ home: 1, away: 4 }`. Getting this backwards scores the match in reverse (this exact mistake happened once; see PR #4). If unsure who is home, check the fixture's `team1`/`team2` order in the openfootball `worldcup.json` (`DATA_SRC`).
- `TEAMS_BY_GROUP`, `GROUP_NAMES`, `GROUP_MATCHES_BY_GROUP`, `KO_TREE`, `BRACKET_R32`, `LOADED` are mutable globals populated by `loadData()`. Nothing works until the openfootball fetch succeeds.
- `state` is a top-level `let` — there is no module system. Two `parseCSV` definitions exist in `app.js` (one near line 2140, one near line 3212); JS keeps the last. Don't be surprised by duplicates and dead code — per the README, "I have not really read most of this code."
- Country names must match the keys in `FLAG_CODE` (`app.js:42`) for flags to render; openfootball spellings (e.g. `Curaçao`, `Bosnia & Herzegovina`, `DR Congo`) are what's expected.
- `AWARD_PLAYERS` (`app.js:57`) is a hand-curated list keyed by `country`; awards dropdowns filter on whether that country is still alive in the user's prediction.
- The form submit is fire-and-forget (`mode: 'no-cors'`) — success/failure cannot be read from the response; the UI just shows a toast. Submissions take a few seconds to surface in the published CSV.
