const RESULTS = {
  groups: {
    A: ["Mexico", "South Africa", "South Korea", "Czech Republic"],
    B: ["Switzerland", "Canada", "Bosnia & Herzegovina", "Qatar"],
    C: ["Brazil", "Morocco", "Scotland", "Haiti"],
    E: ["Ecuador", "Curaçao", "Ivory Coast", "Germany"]
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
      "Paraguay__Turkey": { home: 0, away: 1 }
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
      "Japan__Tunisia": { home: 0, away: 4 }
    },
    G: {
      "Belgium__Egypt": { home: 1, away: 1 },
      "Iran__New Zealand": { home: 2, away: 2 },
      "Belgium__Iran": { home: 0, away: 0 },
      "Egypt__New Zealand": { home: 1, away: 3 }
    },
    H: {
      "Cape Verde__Spain": { home: 0, away: 0 },
      "Saudi Arabia__Uruguay": { home: 1, away: 1 },
      "Saudi Arabia__Spain": { home: 4, away: 0 },
      "Cape Verde__Uruguay": { home: 2, away: 2 }
    },
    I: {
      "France__Senegal": { home: 3, away: 1 },
      "Iraq__Norway": { home: 1, away: 4 },
      "France__Iraq": { home: 3, away: 0 },
      "Norway__Senegal": { home: 3, away: 2 }
    },
    J: {
      "Algeria__Argentina": { home: 3, away: 0 },
      "Austria__Jordan": { home: 3, away: 1 },
      "Argentina__Austria": { home: 2, away: 0 },
      "Algeria__Jordan": { home: 1, away: 2 }
    },
    K: {
      "DR Congo__Portugal": { home: 1, away: 1 },
      "Colombia__Uzbekistan": { home: 1, away: 3 },
      "Portugal__Uzbekistan": { home: 5, away: 0 },
      "Colombia__DR Congo": { home: 1, away: 0 }
    },
    L: {
      "Croatia__England": { home: 4, away: 2 },
      "Ghana__Panama": { home: 1, away: 0 },
      "England__Ghana": { home: 0, away: 0 },
      "Croatia__Panama": { home: 0, away: 1 }
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
        // {
        //   match: 73,
        //   team1: "",
        //   team2: "",
        //   winner: ""
        // }
      ],

      round16: [
        // {
        //   match: 89,
        //   team1: "",
        //   team2: "",
        //   winner: ""
        // }
      ],

      quarterfinals: [
        // {
        //   match: 97,
        //   team1: "",
        //   team2: "",
        //   winner: ""
        // }
      ],

      semifinals: [
        // {
        //   match: 101,
        //   team1: "",
        //   team2: "",
        //   winner: ""
        // }
      ],

      thirdPlace: [
        // {
        //   match: 103,
        //   team1: "",
        //   team2: "",
        //   winner: ""
        // }
      ],

      final: [
        // {
        //   match: 104,
        //   team1: "",
        //   team2: "",
        //   winner: ""
        // }
      ]
    }
  },

  semifinalists: [],
  finalists: [],

  champion: "",
  runnerUp: "",
  thirdPlaceWinner: "",

  awards: {
    goldenBoot: [],
    goldenBall: []
  }
};