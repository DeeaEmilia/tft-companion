import champions from "./champions";

const comps = [
  {
    name: "Bastion Sorcerer Lux",
    champions: [
      {
        name: "Lux",
        items: ["gunblade", "jg"],
        traits: ["Demacia", "Sorcerer"],
      },
      {
        name: "Jarvan IV",
        items: ["vow", "warmog", "spark"],
        traits: ["Demacia", "Strategist"],
      },
      {
        name: "Ahri",
        items: [],
        traits: ["Ionia", "Sorcerer"],
      },
      {
        name: "Shen",
        items: [],
        traits: ["Ionia", "Bastion", "Invoker"],
      },
      {
        name: "Taric",
        items: [],
        traits: ["Targon", "Sorcerer", "Bastion"],
      },
      {
        name: "Poppy",
        items: [],
        traits: ["Yordle", "Demacia", "Bastion"],
      },
      {
        name: "Kassadin",
        items: [],
        traits: ["Void", "Bastion"],
      },
    ],
    playstyle: "Fast 7/8",
    augments: [],
    notes: [""],
    conditions: ["AP Items"],
    legend: [""],
    tier: "A",
    tierImage: "/assets/tier/a-tier.svg",
  },
  {
    name: "7 Demacia Lux",
    champions: [
      {
        name: "Lux",
        items: ["gunblade", "jg"],
        traits: ["Demacia", "Sorcerer"],
      },
      {
        name: "Sona",
        items: ["shojin", "morello"],
        traits: ["Demacia", "Multicaster"],
      },
      {
        name: "Jarvan IV",
        items: ["vow", "warmog"],
        traits: ["Demacia", "Strategist"],
      },
      {
        name: "Shen",
        items: ["demacia"],
        traits: ["Ionia", "Bastion", "Invoker"],
      },
      {
        name: "Kayle",
        items: [],
        traits: ["Demacia", "Slayer"],
      },
      {
        name: "Swain",
        items: [],
        traits: ["Noxus", "Strategist", "Sorcerer"],
      },
      {
        name: "Galio",
        items: [],
        traits: ["Demacia", "Invoker"],
      },
      {
        name: "Poppy",
        items: [],
        traits: [],
      },
    ],
    playstyle: "Fast 7/8",
    augments: [
      "Petricide Shackles",
      "Demacia heart/crest/crown",
      "Jeweled Lotus",
      "Ascension",
      "Martyr",
      "Battle Ready",
      "Magic wand",
      "Know your Enemy",
      "Sorcerer heart/crest/crown",
      "Infusion",
    ],
    notes: ["No demacia +1 -> drop Shen for Garen or play Bastion Sorc Lux"],
    conditions: ["Demacia +1"],
    legend: ["Veigar"],
    tier: "B",
    tierImage: "/assets/tier/b-tier.svg",
  },

  {
    name: "4 Gunner Zeri",
    champions: [
      {
        name: "Zeri",
        items: ["whisper", "rageblade", "ie"],
        traits: ["Zaun", "Gunner"],
      },
      {
        name: "Jayce",
        items: ["zeke", "zeke"],
        traits: ["Piltover", "Gunner"],
      },
      {
        name: "Sejuani",
        items: ["vow", "warmog", "sunfire"],
        traits: ["Freljord", "Bruiser"],
      },
      {
        name: "Jinx",
        items: [],
        traits: ["Zaun", "Gunner"],
      },
      {
        name: "Senna",
        items: [],
        traits: ["Shadow Isles", "Gunner", "Redeemer"],
      },
      {
        name: "Shen",
        items: [],
        traits: ["Ionia", "Bastion", "Invoker"],
      },
      {
        name: "Sion",
        items: [],
        traits: ["Noxus", "Bruisers"],
      },
      {
        name: "Lissandra",
        items: [],
        traits: ["Freljord", "Invoker"],
      },
    ],
    playstyle: "Fast 7/8",
    augments: [
      "Glacial Breeze",
      "Harmacist",
      "Teaming Up",
      "Dueling Gunners",
      "Pandora's Items",
      "You have my Bow",
      "Cybernetic Leech",
      "You have my Sword",
      "Gunner heart/crest/crown",
      "Pumping Up",
    ],
    notes: [
      "Easy to flex between this and Freljord Aphelios",
      "Can drop Jayce for more frontline",
    ],
    conditions: ["AD items"],
    legend: ["Twisted Fate", "Master Yi"],
    tier: ["S"],
    tierImage: "/assets/tier/s-tier.svg",
  },
  {
    name: "Shurima Azir",
    champions: [
      {
        name: "Azir",
        items: ["rageblade", "shiv", "gunblade"],
        traits: ["Shurima", "Strategist"],
      },
      {
        name: "Jarvan IV",
        items: ["vow", "warmog", "sunfire"],
        traits: ["Demacia", "Strategist"],
      },
      {
        name: "Akshan",
        items: [],
        traits: ["Shurima", "Deadeye"],
      },
      {
        name: "Nasus",
        items: [],
        traits: ["Shurima", "Juggernaut"],
      },
      {
        name: "Taliyah",
        items: [],
        traits: ["Shurima", "Multicaster"],
      },
      {
        name: "Cassiopeia",
        items: [],
        traits: ["Noxus", "Shurima", "Invoker"],
      },
      {
        name: "Renekton",
        items: [],
        traits: ["Shurima", "Bruiser"],
      },
      {
        name: "K'Sante",
        items: [],
        traits: ["Shurima", "Bastion"],
      },
    ],
    playstyle: "Fast 7/8",
    augments: [],
    notes: [""],
    conditions: ["Rageblade"],
    legend: [""],
    tier: "A-",
    tierImage: "/assets/tier/a-minus-tier.svg",
  },
  {
    name: "Freljord Aphelios",
    champions: [
      {
        name: "Aphelios",
        items: ["rageblade", "deathblade", "giant"],
        traits: ["Demacia", "Sorcerer"],
      },
      {
        name: "Sejuani",
        items: ["vow", "warmog", "sunfire"],
        traits: ["Demacia", "Sorcerer"],
      },
      {
        name: "Ashe",
        items: [],
        traits: ["Demacia", "Sorcerer"],
      },
      {
        name: "Lissandra",
        items: [],
        traits: ["Demacia", "Sorcerer"],
      },
      {
        name: "Shen",
        items: [],
        traits: ["Demacia", "Sorcerer"],
      },
      {
        name: "Taric",
        items: [],
        traits: ["Demacia", "Sorcerer"],
      },
      {
        name: "Sion",
        items: [],
        traits: ["Demacia", "Sorcerer"],
      },
    ],
    playstyle: "Fast 7/8",
    augments: [],
    notes: [""],
    conditions: ["Rageblade"],
    legend: [""],
    tier: "S",
    tierImage: "/assets/tier/s-tier.svg",
  },
  {
    name: "Deadeye Aphelios + Urgot Deadeye",
    champions: [
      {
        name: "Aphelios",
        items: ["rageblade", "deathblade", "giant"],
        traits: ["Demacia", "Sorcerer"],
      },
      {
        name: "Urgot",
        items: ["bt", "titans", "titans"],
        traits: ["Demacia", "Sorcerer"],
      },
      {
        name: "Sejuani",
        items: ["vow", "warmog", "sunfire"],
        traits: ["Demacia", "Sorcerer"],
      },
      {
        name: "Ashe",
        items: [],
        traits: ["Demacia", "Sorcerer"],
      },
      {
        name: "Lissandra",
        items: [],
        traits: ["Demacia", "Sorcerer"],
      },
      {
        name: "Ekko",
        items: [],
        traits: ["Demacia", "Sorcerer"],
      },
      {
        name: "Sion",
        items: [],
        traits: ["Ionia", "Sorcerer"],
      },
    ],
    playstyle: "Fast 7/8",
    augments: [],
    notes: [""],
    conditions: ["Rageblade + BT"],
    legend: [""],
    tier: "S",
    tierImage: "/assets/tier/s-tier.svg",
  },

  // {
  //     name: '',
  //     champions: [
  //         {
  //             name: '',
  //             items: [''],
  //         },
  //         {
  //             name: '',
  //             items: [''],
  //         },
  //         {
  //             name: '',
  //             items: [],
  //         },
  //         {
  //             name: '',
  //             items: [''],
  //         },
  //         {
  //             name: '',
  //             items: [''],
  //         },
  //         {
  //             name: '',
  //             items: [],
  //         },
  //         {
  //             name: '',
  //             items: [],
  //         },
  //     ],
  //     playstyle: '',
  //     augments: [],
  //     notes: [''],
  //     conditions: [''],
  //     legend: [''],
  // },

  //...other comps
];

// Map over comps, replacing each champion's traits with the ones from champions.js
const compsWithTraits = comps.map((comp) => ({
  ...comp,
  champions: comp.champions.map((champion) => {
    const championData = champions.find(
      (champ) => champ.name === champion.name
    );
    return {
      ...champion,
      traits: championData ? championData.traits : [],
    };
  }),
}));

export default compsWithTraits;
