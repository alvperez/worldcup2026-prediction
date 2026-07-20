const RESULTS = {
  groups: {
    A: ["Mexico", "South Africa", "South Korea", "Czech Republic"],
    B: ["Switzerland", "Canada", "Bosnia & Herzegovina", "Qatar"],
    C: ["Brazil", "Morocco", "Scotland", "Haiti"],
    D: ["USA", "Australia", "Paraguay", "Turkey"],
    E: ["Germany", "Ivory Coast", "Ecuador", "Curaçao"],
    F: ["Netherlands", "Japan", "Sweden", "Tunisia"],
    G: ["Belgium", "Egypt", "Iran", "New Zealand"],
    H: ["Spain", "Cape Verde", "Uruguay", "Saudi Arabia"],
    I: ["France", "Norway", "Senegal", "Iraq"],
    J: ["Argentina", "Austria", "Algeria", "Jordan"],
    K: ["Colombia", "Portugal", "DR Congo", "Uzbekistan"],
    L: ["England", "Croatia", "Ghana", "Panama"]
  },
  thirdPlace: [],
  groupMatches: {
    A: {
      "Mexico__South Africa": { home: 2, away: 0 },
      "South Korea__Czech Republic": { home: 2, away: 1 },
      "Czech Republic__South Africa": { home: 1, away: 1 },
      "Mexico__South Korea": { home: 1, away: 0 },
      "South Africa__South Korea": { home: 1, away: 0 },
      "Czech Republic__Mexico": { home: 0, away: 3 }
    },
    B: {
      "Canada__Bosnia & Herzegovina": { home: 1, away: 1 },
      "Qatar__Switzerland": { home: 1, away: 1 },
      "Bosnia & Herzegovina__Switzerland": { home: 4, away: 1 },
      "Canada__Qatar": { home: 6, away: 0 },
      "Canada__Switzerland": { home: 2, away: 1 },
      "Bosnia & Herzegovina__Qatar": { home: 3, away: 1 }
    },
    C: {
      "Brazil__Morocco": { home: 1, away: 1 },
      "Haiti__Scotland": { home: 0, away: 1 },
      "Morocco__Scotland": { home: 0, away: 1 },
      "Brazil__Haiti": { home: 3, away: 0 },
      "Haiti__Morocco": { home: 4, away: 2 },
      "Brazil__Scotland": { home: 0, away: 3 }
    },
    D: {
      "Paraguay__USA": { home: 4, away: 1 },
      "Australia__Turkey": { home: 2, away: 0 },
      "Australia__USA": { home: 2, away: 0 },
      "Paraguay__Turkey": { home: 0, away: 1 },
      "Australia__Paraguay": { home: 0, away: 0 },
      "Turkey__USA": { home: 3, away: 2 }
    },
    E: {
      "Curaçao__Germany": { home: 7, away: 1 },
      "Ecuador__Ivory Coast": { home: 1, away: 0 },
      "Germany__Ivory Coast": { home: 2, away: 1 },
      "Curaçao__Ecuador": { home: 0, away: 0 },
      "Curaçao__Ivory Coast": { home: 0, away: 2 },
      "Ecuador__Germany": { home: 2, away: 1 }
    },
    F: {
      "Japan__Netherlands": { home: 2, away: 2 },
      "Sweden__Tunisia": { home: 5, away: 1 },
      "Netherlands__Sweden": { home: 5, away: 1 },
      "Japan__Tunisia": { home: 0, away: 4 },
      "Japan__Sweden": { home: 1, away: 1 },
      "Netherlands__Tunisia": { home: 1, away: 3 }
    },
    G: {
      "Belgium__Egypt": { home: 1, away: 1 },
      "Iran__New Zealand": { home: 2, away: 2 },
      "Belgium__Iran": { home: 0, away: 0 },
      "Egypt__New Zealand": { home: 1, away: 3 },
      "Egypt__Iran": { home: 1, away: 1 },
      "Belgium__New Zealand": { home: 1, away: 5 }
    },
    H: {
      "Cape Verde__Spain": { home: 0, away: 0 },
      "Saudi Arabia__Uruguay": { home: 1, away: 1 },
      "Saudi Arabia__Spain": { home: 4, away: 0 },
      "Cape Verde__Uruguay": { home: 2, away: 2 },
      "Cape Verde__Saudi Arabia": { home: 0, away: 0 },
      "Spain__Uruguay": { home: 0, away: 1 }
    },
    I: {
      "France__Senegal": { home: 3, away: 1 },
      "Iraq__Norway": { home: 1, away: 4 },
      "France__Iraq": { home: 3, away: 0 },
      "Norway__Senegal": { home: 3, away: 2 },
      "France__Norway": { home: 1, away: 4 },
      "Iraq__Senegal": { home: 5, away: 0 }
    },
    J: {
      "Algeria__Argentina": { home: 3, away: 0 },
      "Austria__Jordan": { home: 3, away: 1 },
      "Argentina__Austria": { home: 2, away: 0 },
      "Algeria__Jordan": { home: 1, away: 2 },
      "Algeria__Austria": { home: 3, away: 3 },
      "Argentina__Jordan": { home: 1, away: 3 }
    },
    K: {
      "DR Congo__Portugal": { home: 1, away: 1 },
      "Colombia__Uzbekistan": { home: 1, away: 3 },
      "Portugal__Uzbekistan": { home: 5, away: 0 },
      "Colombia__DR Congo": { home: 1, away: 0 },
      "Colombia__Portugal": { home: 0, away: 0 },
      "DR Congo__Uzbekistan": { home: 3, away: 1 }
    },
    L: {
      "Croatia__England": { home: 4, away: 2 },
      "Ghana__Panama": { home: 1, away: 0 },
      "England__Ghana": { home: 0, away: 0 },
      "Croatia__Panama": { home: 0, away: 1 },
      "England__Panama": { home: 0, away: 2 },
      "Croatia__Ghana": { home: 2, away: 1 }
    }
  },

  knockout: {
    round32: [],
    round16: [],
    quarterfinals: [],
    semifinals: [],

    champion: "",
    runnerUp: "",
    finalists: [],

    thirdPlaceWinner: "",
    final: "",
    thirdPlace: "",

    matches: {
      round32: [
        {
          match: 73,
          team1: "South Africa",
          team2: "Canada",
          winner: "Canada"
        },
        {
          match: 74,
          team1: "Germany",
          team2: "Paraguay",
          winner: "Paraguay"
        },
        {
          match: 75,
          team1: "Netherlands",
          team2: "Morocco",
          winner: "Morocco"
        },
        {
          match: 76,
          team1: "Brazil",
          team2: "Japan",
          winner: "Brazil"
        },
        {
          match: 77,
          team1: "France",
          team2: "Sweden",
          winner: "France"
        },
        {
          match: 78,
          team1: "Ivory Coast",
          team2: "Norway",
          winner: "Norway"
        },
        {
          match: 79,
          team1: "Mexico",
          team2: "Ecuador",
          winner: "Mexico"
        },
        {
          match: 80,
          team1: "England",
          team2: "DR Congo",
          winner: "England"
        },
        {
          match: 81,
          team1: "USA",
          team2: "Bosnia & Herzegovina",
          winner: "USA"
        },
        {
          match: 82,
          team1: "Belgium",
          team2: "Senegal",
          winner: "Belgium"
        },
        {
          match: 83,
          team1: "Portugal",
          team2: "Croatia",
          winner: "Portugal"
        },
        {
          match: 84,
          team1: "Spain",
          team2: "Austria",
          winner: "Spain"
        },
        {
          match: 85,
          team1: "Switzerland",
          team2: "Algeria",
          winner: "Switzerland"
        },
        {
          match: 86,
          team1: "Argentina",
          team2: "Cape Verde",
          winner: "Argentina"
        },
        {
          match: 87,
          team1: "Colombia",
          team2: "Ghana",
          winner: "Colombia"
        },
        {
          match: 88,
          team1: "Australia",
          team2: "Egypt",
          winner: "Egypt"
        }
      ],

      round16: [
        {
          match: 89,
          team1: "Canada",
          team2: "Morocco",
          winner: "Morocco"
        },
        {
          match: 90,
          team1: "Paraguay",
          team2: "France",
          winner: "France"
        },
        {
          match: 91,
          team1: "Brazil",
          team2: "Norway",
          winner: "Norway"
        },
        {
          match: 92,
          team1: "Mexico",
          team2: "England",
          winner: "England"
        },
        {
          match: 93,
          team1: "Portugal",
          team2: "Spain",
          winner: "Spain"
        },
        {
          match: 94,
          team1: "USA",
          team2: "Belgium",
          winner: "Belgium"
        },
        {
          match: 95,
          team1: "Argentina",
          team2: "Egypt",
          winner: "Argentina"
        },
        {
          match: 96,
          team1: "Switzerland",
          team2: "Colombia",
          winner: "Switzerland"
        }
      ],

      quarterfinals: [
        {
          match: 97,
          team1: "Morocco",
          team2: "France",
          winner: "France"
        },
        {
          match: 98,
          team1: "Spain",
          team2: "Belgium",
          winner: "Spain"
        },
        {
          match: 99,
          team1: "Norway",
          team2: "England",
          winner: "England"
        },
        {
          match: 100,
          team1: "Argentina",
          team2: "Switzerland",
          winner: "Argentina"
        }
      ],

      semifinals: [
        {
          match: 101,
          team1: "France",
          team2: "Spain",
          winner: "Spain"
        },
        {
          match: 102,
          team1: "England",
          team2: "Argentina",
          winner: "Argentina"
        }
      ],

      thirdPlace: [
        {
          match: 103,
          team1: "France",
          team2: "England",
          winner: "England"
        }
      ],

      final: [
        {
          match: 104,
          team1: "Spain",
          team2: "Argentina",
          winner: "Spain"
        }
      ]
    }
  },

  semifinalists: ["France", "Spain", "England", "Argentina"],
  finalists: ["Spain", "Argentina"],

  champion: "Spain",
  runnerUp: "Argentina",
  thirdPlaceWinner: "England",

  awards: {
    goldenBoot: ["Kylian Mbappé", "Lionel Messi", "Jude Bellingham"],
    goldenBall: ["Rodri", "Lionel Messi", "Kylian Mbappé"]
  }
};