const traits = [
  {
    name: "Bastion",
    emblem: "assets/emblems/bastion.svg",
    description:
      "Bastion champions gain Armor and Magic Resist. This is increased by 100% for the first 10 seconds of combat.",
    scaling: [
      ["2", "+20 Defense"],
      ["4", "+45 Defense"],
      ["6", "+90 Defense"],
      ["8", "+180 Defense"],
    ],
    crafting: true,
  },
  {
    name: "Bruiser",
    emblem: "assets/emblems/bruiser.svg",
    description: "Your units gain 100 Health. Bruisers get even more.",
    scaling: [
      ["2", "+15%"],
      ["4", "+40%"],
      ["6", "+85%"],
    ],
    crafting: true,
  },
  {
    name: "Challenger",
    emblem: "public/assets/emblems/challenger.svg",
    description:
      "Challengers gain bonus Attack Speed. When their target dies, Challengers dash to a new target and increase their Attack Speed bonus by 50% for 2.5 seconds.",
    scaling: [
      ["2", "30%"],
      ["4", "55%"],
      ["6", "80%"],
      ["8", "110%"],
    ],
    crafting: true,
  },
  {
    name: "Darkin",
    emblem: "public/assets/emblems/darkin.svg",
    description:
      "When Aatrox or the holder of the Darkin Blade dies, the Darkin Blade is equipped to the nearest ally champion, granting them 500 Health and 20% Omnivamp. After being equipped to a champion for 4 seconds, Aatrox will revive upon their death instead.",
    scaling: [["1", "Bonus Effect"]],
    crafting: false,
  },
  {
    name: "Deadeye",
    emblem: "public/assets/emblems/deadeye.svg",
    description:
      "Innate: gain Bonus Range. Every 3 seconds, Deadeyes attack the enemy with the highest percent Health and deal bonus damage.",
    scaling: [
      ["2", "+20% damage"],
      ["4", "+44% damage"],
      ["6", "+100% damage"],
    ],
    crafting: true,
  },
  {
    name: "Demacia",
    emblem: "public/assets/emblems/demacia.svg",
    description:
      "During planning phase, your strongest Demacians become Elite and equip a random Radiant Item for the next combat. Elites grant Armor and Magic Resist to themselves and adjacent allies, but this does not stack. Radiant items are upgraded versions of completed items.",
    scaling: [
      ["3", "1 Elite, +10 , +10"],
      ["5", "2 Elites, +10 , +10"],
      ["7", "3 Elites, +20 , +20"],
      ["9", "5 Elites, +30 , +30"],
    ],
    crafting: true,
  },
  {
    name: "Empress",
    emblem: "public/assets/emblems/empress.svg",
    description:
      "When Bel'Veth kills an enemy, they leave behind Void Coral that she will consume. The first Coral increases her max Health by 50%, while further Coral heals her 20% max Health. When a Void Coral is consumed, she deals 10% max Health as magic damage to enemies within 2 hexes.",
    scaling: ["1", "Bonus Effect"],
    crafting: false,
  },
  {
    name: "Freljord",
    emblem: "public/assets/emblems/freljord.svg",
    description:
      "After 5 seconds, an ice storm strikes the battlefield. Enemies take a percentage of their maximum Health as true damage and gain debuffs for 15 seconds. Sunder: Reduce Armor. Shred: Reduce Magic Resist. Mana Reave: Increase max Mana until the next cast",
    scaling: [
      ["2", "5% Health, enemies are 40% Sundered and Shredded"],
      ["3", "12% Health, enemies are also 50% Mana Reaved"],
      ["4", "20% Health, enemies are also stunned for 1.5 seconds"],
    ],
    crafting: true,
  },
  {
    name: "Gunner",
    emblem: "public/assets/emblems/gunner.svg",
    description:
      "When Gunner champions attack, they gain bonus Attack Damage, up to 8 stacks.",
    scaling: [
      ["2", "5% Attack Damage per stack"],
      ["4", "10% Attack Damage per stack"],
      ["6", "16% Attack Damage per stack"],
    ],
    crafting: false,
  },
  {
    name: "Invoker",
    emblem: "public/assets/emblems/invoker.svg",
    description: "Allies restore Mana every 3 seconds.",
    scaling: [
      ["2", "5 Mana per all allies"],
      ["4", "And 10 additional Mana for Invokers"],
      ["6", "10 Mana for all allies and 15 additional Mana for Invokers"],
    ],
    crafting: true,
  },
  {
    name: "Ionia",
    emblem: "public/assets/emblems/ionia.svg",
    description:
      "Every 4 seconds, your strongest Ionians are enlightened to their spirit form and gain 20 Mana. Each Ionian has a unique bonus within their ability, which doubles when in spirit form.",
    scaling: [
      ["3", "100% Ionian bonus, 1 enlightened"],
      ["6", "200% Ionian bonus, 2 enlightened"],
      ["9", "300% Ionian bonus, 3 enlightened"],
    ],
    crafting: true,
  },
  {
    name: "Juggernaut",
    emblem: "public/assets/emblems/juggernaut.svg",
    description:
      "Juggernaut champions take less damage as their Health decreases.",
    scaling: [
      ["2", "10% to 20% damage reduction"],
      ["4", "20% to 34% damage reduction"],
      ["6", "30% to 50% damage reduction"],
    ],
    crafting: true,
  },

  {
    name: "Multicaster",
    emblem: "public/assets/emblems/multicaster.svg",
    description:
      "Multicasters cast their Ability multiple times. Bonus casts have 50% reduced effectiveness.",
    scaling: [
      ["2", "1 extra cast"],
      ["4", "2 extra casts"],
    ],
    crafting: false,
  },
  {
    name: "Noxus",
    emblem: "public/assets/emblems/noxus.svg",
    description:
      "Noxus units gain Health, Ability Power and Attack Damage. This is increased by 10% for each different opponent that either you have conquered in combat or is dead.",
    scaling: [
      ["3", "175 Health, 15 AP, 15% AD"],
      ["6", "375 Health, 30 AP, 30% AD"],
      ["9", "550 Health, 55 AP, 55% AD"],
    ],
    crafting: true,
  },
  {
    name: "Piltover",
    emblem: "public/assets/emblems/piltover.svg",
    description:
      "Gain the T-Hex. Every time you lose a player combat, the T-Hex gains Charges. Winning converts the Charges to Power for the T-Hex. You may also sell the T-Hex if it has any Power, resetting the T-Hex and converting its Power to loot.",
    scaling: [
      ["3", "Gain the T-Hex."],
      ["6", "Each loss counts as 2 losses instead. Winning grants bonus loot."],
    ],
    crafting: false,
  },
  {
    name: "Redeemer",
    emblem: "public/assets/emblems/redeemer.svg",
    description:
      "Whenever an ally gains a Shield, grant them 7% stacking Attack Speed for the rest of combat.",
    scaling: ["1", "Bonus Effect"],
    crafting: false,
  },
  {
    name: "Rogue",
    emblem: "public/assets/emblems/rogue.svg",
    description:
      "(2) The first time Rogues fall below %Health they briefly become untargetable and dash towards an enemy within 4 hexes, preferring backliners. (4) Additionally, attacking an enemy for the first time causes that enemy to bleed over 5 seconds.",
    scaling: [
      ["2", "below 50%"],
      ["4", "Apply additional Bleed dealing 50% of the enemy max health."],
    ],
    crafting: true,
  },
  {
    name: "Shadow Isles",
    emblem: "public/assets/emblems/shadow-isles.svg",
    description:
      "After dealing or receiving damage 8 times, Shadow Isles units gain a Shield for 8 seconds and become Spectral for the rest of combat. Spectral units gain Mana every second.",
    scaling: [
      ["2", "40% Shield, 10 Mana"],
      ["4", "70% Shield, 15 Mana"],
      ["6", "100% Shield, 20 Mana"],
    ],
    crafting: true,
  },
  {
    name: "Shurima",
    emblem: "public/assets/emblems/shurima.svg",
    description:
      "Every 4 seconds, Shuriman heal 7% max Health. After 8 seconds, select Shuriman ascend and gain 20% max Health and 50% Attack Speed.",
    scaling: [
      ["3", "The strongest Shuriman ascends"],
      ["5", "All Shuriman ascend"],
      ["7", "ALSO ascend at the start of combat"],
      ["9", "+50% Ascension bonus"],
    ],
    crafting: true,
  },
  {
    name: "Slayer",
    emblem: "public/assets/emblems/slayer.svg",
    description:
      "Slayers gain 15% omnivamp. Additionally, Slayers deal bonus damage, doubled against units below 60% health.",
    scaling: [
      ["2", "+5% bonus damage"],
      ["3", "+10% bonus damage"],
      ["4", "+25% bonus damage"],
      ["5", "+35% bonus damage"],
      ["6", "+50% bonus damage"],
    ],
    crafting: true,
  },
  {
    name: "Sorcerer",
    emblem: "public/assets/emblems/sorcerer.svg",
    description:
      "When Sorcerers help kill an enemy, they trigger an arcane shock that deals a percent of the enemy's maximum Health to other enemies. Sorcerers also gain bonus Ability Power.",
    scaling: [
      ["2", "25 Ability Power; shock 1 enemy for 10% Health"],
      ["4", "45 Ability Power; shock 1 enemy for 15% Health"],
      ["6", "75 Ability Power; shock 2 enemies for 15% Health"],
      ["8", "111 Ability Power; shock 2 enemies for 20% Health"],
    ],
    crafting: true,
  },
  {
    name: "Strategist",
    emblem: "public/assets/emblems/strategist.svg",
    description:
      "Combat Start: Allies in the front 2 rows gain a shield for 8 seconds. Allies in the back 2 rows gain Ability Power.",
    scaling: [
      ["2", "200 shield; 20 Ability Power"],
      ["3", "350 shield; 30 Ability Power"],
      ["4", "400 shield; 40 Ability Power"],
      ["5", "550 shield; 55 Ability Power"],
    ],
    crafting: false,
  },
  {
    name: "Targon",
    emblem: "public/assets/emblems/targon.svg",
    description: "Your healing and shielding is increased.",
    scaling: [
      ["2", "18% increased healing and shielding"],
      ["3", "25% increased healing and shielding"],
      ["4", "34% increased healing and shielding"],
    ],
    crafting: true,
  },
  {
    name: "Technogenius",
    emblem: "public/assets/emblems/technogenius.svg",
    description:
      "Gain a placeable Apex Turret with 3 upgrade slots. Upgrades to the Apex Turret will show up in your shop for 6 gold. You may only have 1 Apex Turret.",
    scaling: [["1", "Bonus Effect"]],
    crafting: false,
  },
  {
    name: "Void",
    emblem: "public/assets/emblems/void.svg",
    description:
      "Get a placeable void egg. At the start of combat, it hatches into an unspeakable horror and knocks up adjacent enemies. Each Void star level increases the horror's Health and Ability Power by 25%.",
    scaling: [
      ["3", "Void Remora"],
      ["6", "Rift Herald"],
      ["8", "Baron Nashor"],
    ],
    crafting: true,
  },
  {
    name: "Wanderer",
    emblem: "public/assets/emblems/wanderer.svg",
    description:
      "Ryze's spell changes depending on the Region Portal players voted for at the start of the game.",
    scaling: [["1", "Bonus Effect"]],
    crafting: false,
  },
  {
    name: "Yordle",
    emblem: "public/assets/emblems/yordle.svg",
    description:
      "Allies gain 10% Attack Speed per star level. Yordles can become 4 star, gaining a wacky spell upgrade! Ties in items are broken by the Yordle fielded most recently.",
    scaling: [
      [
        "3",
        "If you have three 3-star champions, your strongest 3-star Yordle champion becomes 4-star",
      ],
      ["5", "Two 3-star Yordle champions can now become 4-star"],
    ],
    crafting: true,
  },
  {
    name: "Zaun",
    emblem: "public/assets/emblems/zaun.svg",
    description:
      "Zaun champions create random chem-mods that only they can use. Champions can be modded once, and mods can only be removed by selling the champion.",
    scaling: [
      ["2", "Gain 1 chem-mod"],
      ["4", "Gain 2 chem-mods"],
      ["6", "Gain 3 chem-mods and Overcharge mods"],
    ],
    crafting: true,
  },
];

export default traits;
