import champions from "./champions";
import traits from "./traits.js";

const comps = [
  {
    name: "Bastion Sorcerer Lux",
    champions: [
      {
        name: "Lux",
        items: ["gunblade", "jg"],
        traits: ["Demacia", "Sorcerer"],
        scaling: [],
      },
      {
        name: "Jarvan IV",
        items: ["vow", "warmog", "spark"],
        traits: ["Demacia", "Strategist"],
        scaling: [],
      },
      {
        name: "Ahri",
        items: [],
        traits: ["Ionia", "Sorcerer"],
        scaling: [],
      },
      {
        name: "Shen",
        items: [],
        traits: ["Ionia", "Bastion", "Invoker"],
        scaling: [],
      },
      {
        name: "Taric",
        items: [],
        traits: ["Targon", "Sorcerer", "Bastion"],
        scaling: [],
      },
      {
        name: "Poppy",
        items: [],
        traits: ["Yordle", "Demacia", "Bastion"],
        scaling: [],
      },
      {
        name: "Kassadin",
        items: [],
        traits: ["Void", "Bastion"],
        scaling: [],
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
        scaling: [],
      },
      {
        name: "Sona",
        items: ["shojin", "morello"],
        traits: ["Demacia", "Multicaster"],
        scaling: [],
      },
      {
        name: "Jarvan IV",
        items: ["vow", "warmog"],
        traits: ["Demacia", "Strategist"],
        scaling: [],
      },
      {
        name: "Shen",
        items: ["demacia"],
        traits: ["Ionia", "Bastion", "Invoker"],
        scaling: [],
      },
      {
        name: "Kayle",
        items: [],
        traits: ["Demacia", "Slayer"],
        scaling: [],
      },
      {
        name: "Swain",
        items: [],
        traits: ["Noxus", "Strategist", "Sorcerer"],
        scaling: [],
      },
      {
        name: "Galio",
        items: [],
        traits: ["Demacia", "Invoker"],
        scaling: [],
      },
      {
        name: "Poppy",
        items: [],
        traits: [],
        scaling: [],
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
        scaling: [],
      },
      {
        name: "Jayce",
        items: ["zeke", "zeke"],
        traits: ["Piltover", "Gunner"],
        scaling: [],
      },
      {
        name: "Sejuani",
        items: ["vow", "warmog", "sunfire"],
        traits: ["Freljord", "Bruiser"],
        scaling: [],
      },
      {
        name: "Jinx",
        items: [],
        traits: ["Zaun", "Gunner"],
        scaling: [],
      },
      {
        name: "Senna",
        items: [],
        traits: ["Shadow Isles", "Gunner", "Redeemer"],
        scaling: [],
      },
      {
        name: "Shen",
        items: [],
        traits: ["Ionia", "Bastion", "Invoker"],
        scaling: [],
      },
      {
        name: "Sion",
        items: [],
        traits: ["Noxus", "Bruisers"],
        scaling: [],
      },
      {
        name: "Lissandra",
        items: [],
        traits: ["Freljord", "Invoker"],
        scaling: [],
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
        scaling: [],
      },
      {
        name: "Jarvan IV",
        items: ["vow", "warmog", "sunfire"],
        traits: ["Demacia", "Strategist"],
        scaling: [],
      },
      {
        name: "Akshan",
        items: [],
        traits: ["Shurima", "Deadeye"],
        scaling: [],
      },
      {
        name: "Nasus",
        items: [],
        traits: ["Shurima", "Juggernaut"],
        scaling: [],
      },
      {
        name: "Taliyah",
        items: [],
        traits: ["Shurima", "Multicaster"],
        scaling: [],
      },
      {
        name: "Cassiopeia",
        items: [],
        traits: ["Noxus", "Shurima", "Invoker"],
        scaling: [],
      },
      {
        name: "Renekton",
        items: [],
        traits: ["Shurima", "Bruiser"],
        scaling: [],
      },
      {
        name: "K'Sante",
        items: [],
        traits: ["Shurima", "Bastion"],
        scaling: [],
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
        scaling: [],
      },
      {
        name: "Sejuani",
        items: ["vow", "warmog", "sunfire"],
        traits: ["Demacia", "Sorcerer"],
        scaling: [],
      },
      {
        name: "Ashe",
        items: [],
        traits: ["Demacia", "Sorcerer"],
        scaling: [],
      },
      {
        name: "Lissandra",
        items: [],
        traits: ["Demacia", "Sorcerer"],
        scaling: [],
      },
      {
        name: "Shen",
        items: [],
        traits: ["Demacia", "Sorcerer"],
        scaling: [],
      },
      {
        name: "Taric",
        items: [],
        traits: ["Demacia", "Sorcerer"],
        scaling: [],
      },
      {
        name: "Sion",
        items: [],
        traits: ["Demacia", "Sorcerer"],
        scaling: [],
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
        scaling: [],
      },
      {
        name: "Urgot",
        items: ["bt", "titans", "titans"],
        traits: ["Demacia", "Sorcerer"],
        scaling: [],
      },
      {
        name: "Sejuani",
        items: ["vow", "warmog", "sunfire"],
        traits: ["Demacia", "Sorcerer"],
        scaling: [],
      },
      {
        name: "Ashe",
        items: [],
        traits: ["Demacia", "Sorcerer"],
        scaling: [],
      },
      {
        name: "Lissandra",
        items: [],
        traits: ["Demacia", "Sorcerer"],
        scaling: [],
      },
      {
        name: "Ekko",
        items: [],
        traits: ["Demacia", "Sorcerer"],
        scaling: [],
      },
      {
        name: "Sion",
        items: [],
        traits: ["Ionia", "Sorcerer"],
        scaling: [],
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
];

function countTraits(champions) {
  let traitCounts = {};

  champions.forEach((champion) => {
    champion.traits.forEach((trait) => {
      if (!traitCounts[trait]) {
        traitCounts[trait] = 1;
      } else {
        traitCounts[trait]++;
      }
    });
  });

  return traitCounts;
}

function getTraitTiers(traitCounts) {
  let traitTiers = {};

  Object.entries(traitCounts).forEach(([trait, count]) => {
    if (traits[trait]) {
      const tiers = traits[trait].scaling.filter((num) => num <= count);
      if (tiers.length) traitTiers[trait] = tiers;
    }
  });

  return traitTiers;
}

// Map over comps, replacing each champion's traits with the ones from champions.js and adding traitCounts and traitTiers
const compsWithTraits = comps.map((comp) => {
  // Replace champion traits with those from champions.js
  const championsWithTraits = comp.champions.map((champion) => {
    const championData = champions.find(
      (champ) => champ.name === champion.name
    );
    return {
      ...champion,
      traits: championData ? championData.traits : [],
    };
  });

  // Count traits and get tiers
  const traitCounts = countTraits(championsWithTraits);
  const traitTiers = getTraitTiers(traitCounts);

  return {
    ...comp,
    champions: championsWithTraits,
    traitCounts,
    traitTiers,
  };
});

export default compsWithTraits;
