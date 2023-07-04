const items = [
  {
    id: "archangels",
    name: "Archangel's Staff",
    components: ["tear", "rod"],
    icon: "/assets/items/archangels-staff.webp",
    description:
      "Grant 20 bonus Ability Power. Combat start: Grant 10 Ability Power every 5 seconds.",
  },
  {
    id: "bt",
    name: "Bloothirster",
    components: ["sword", "cloak"],
    icon: "/assets/items/bloodthirster.webp",
    description:
      "Damage heals the holder for 20% of the damage dealt. Once per combat at 40% Health, gain a 25% maximum Health shield that lasts up to 5 seconds.",
  },
  {
    id: "blue",
    name: "Blue Buff",
    components: ["tear", "tear"],
    icon: "/assets/items/blue-buff.webp",
    description:
      "Abilities cost 10 less mana to cast. If the holder gets at least 1 takedown within 3 seconds of casting, gain 10 Mana. Unique - Only one per champion",
  },
  {
    id: "bramble",
    name: "Bramble Vest",
    components: ["vest", "vest"],
    icon: "/assets/items/bramble-vest.webp",
    description:
      "Grants 30 Armor. Negates 75% bonus damage from incoming critical strikes. On being hit by an attack, deal 75/100/150★ magic damage to all nearby enemies (once every 2.5 seconds).",
  },
  {
    id: "chalice",
    name: "Chalice of Power",
    components: ["tear", "cloak"],
    icon: "/assets/items/chalice-of-power.webp",
    description:
      "Combat start: Grant 30 Ability Power to the holder and allies within 1 hex in the same row. Aura item",
  },
  {
    id: "challenger",
    name: "Challenger Emblem",
    components: ["spatula", "bow"],
    icon: "/assets/items/challengeremblem.webp",
    description: "The holder gains the Challenger trait.",
  },
  {
    id: "deathblade",
    name: "Deathblade",
    components: ["sword", "sword"],
    icon: "/assets/items/deathblade.webp",
    description: "Grant 66% bonus Attack Damage.",
  },
  {
    id: "demacia",
    name: "Demacia Emblem",
    components: ["spatula", "cloak"],
    icon: "/assets/items/demaciaemblem.webp",
    description: "The holder gains the Demacia trait.",
  },
  {
    id: "dragon",
    name: "Dragon's Claw",
    components: ["cloak", "cloak"],
    icon: "/assets/items/dragons-claw.webp",
    description:
      "Grant 30 bonus Magic Resist. Every 2 seconds, regenerate 4% maximum Health.",
  },
  {
    id: "edge",
    name: "Edge of Night",
    components: ["sword", "vest"],
    icon: "/assets/items/edge-of-night.webp",
    description:
      "Unique: Once per combat: At 60% Health, the holder briefly becomes untargetable and sheds negative effects. Then they gain 15% bonus Attack Speed.",
  },
  {
    id: "gargoyle",
    name: "Gargoyle Stoneplate",
    components: ["vest", "cloak"],
    icon: "/assets/items/gargoyle-stoneplate.webp",
    description:
      "Start with 30 Armor & Magic Restistance. Gain +13 Armor and +13 Magic Resist for each enemy targeting the holder.",
  },
  {
    id: "giant",
    name: "Giant Slayer",
    components: ["sword", "bow"],
    icon: "/assets/items/giant-slayer.webp",
    description:
      "Grant 15% bonus Attack Damage and 15 bonus Ability Power. Abilities and attacks deal 30% more damage to enemies with more than 1600 maximum Health.",
  },
  {
    id: "guardbreaker",
    name: "Guardbreaker",
    components: ["glove", "belt"],
    icon: "/assets/items/guardbreaker.webp",
    description:
      "Grant 15% bonus Attack Damage and 15 bonus Ability Power. Abilities and attacks deal 30% more damage to shielded enemies.",
  },
  {
    id: "rageblade",
    name: "Guinsoo's Rageblade",
    components: ["bow", "rod"],
    icon: "/assets/items/guinsoos-rageblade.webp",
    description: "Attacks grant +5% bonus Attack Speed. This effect stacks!",
  },
  {
    id: "hoj",
    name: "Hand of Justice",
    components: ["glove", "tear"],
    icon: "/assets/items/hand-of-justice.webp",
    description:
      "Grant 2 effects: +15% Attack Damage and 15 Ability Power, Attacks and Abilities heal for 15% of damage dealt. Each round, randomly increase 1 of these effects by 30%.",
  },
  {
    id: "gunblade",
    name: "Hextech Gunblade",
    components: ["sword", "rod"],
    icon: "/assets/items/hextech-gunblade.webp",
    description:
      "Grant 22% Omnivamp. Damage heals the lowest percent Health ally for the same amount.",
  },
  {
    id: "ie",
    name: "Infinity Edge",
    components: ["sword", "glove"],
    icon: "/assets/items/infinity-edge.webp",
    description:
      "Unique: Grants 20% bonus Attack Damage and 15% Critical Strike Chance. Damage from an Ability can critically strike.",
  },
  {
    id: "ionia",
    name: "Ionia Emblem",
    components: ["spatula", "sword"],
    icon: "/assets/items/ioniaemblem.webp",
    description: "The holder gains the Ionia trait",
  },
  {
    id: "spark",
    name: "Ionic Spark",
    components: ["rod", "cloak"],
    icon: "/assets/items/ionic-spark.webp",
    description:
      "Enemies within 2 hexes have 50% reduced Magic Resist. When they cast an Ability, they are zapped for magic damage equal to 185% of their maximum Mana.",
  },
  {
    id: "jg",
    name: "Jeweled Gauntlet",
    components: ["glove", "rod"],
    icon: "/assets/items/jeweled-gauntlet.webp",
    description:
      "Grant 15 bonus Ability Power and 15% Critical Strike Chance. Damage from an Ability can critically strike.",
  },
  {
    id: "juggernaut",
    name: "Juggernaut Emblem",
    components: ["spatula", "vest"],
    icon: "/assets/items/juggernautemblem.webp",
    description: "The holder gains the Juggernaut trait.",
  },
  {
    id: "whisper",
    name: "Last Whisper",
    components: ["glove", "bow"],
    icon: "/assets/items/last-whisper.webp",
    description:
      "Unique: Grant 10% bonus Attack Damage. Dealing physical damage from an attack or Ability reduces the target's Armor by 50% for 5 seconds. This effect does not stack.",
  },
  {
    id: "locket",
    name: "Locket of the Iron Solari",
    components: ["vest", "rod"],
    icon: "/assets/items/locket-of-the-iron-solari.webp",
    description:
      "Combat start: Shield the holder and allies within 2 hexes in the same row for 300/350/400★ over 15 seconds.",
  },
  {
    id: "morello",
    name: "Morellonomicon",
    components: ["belt", "rod"],
    icon: "/assets/items/morellonomicon.webp",
    description:
      "Unique: Grant 10 bonus Ability Power. Magic or true damage from an Ability burns the holder's target, dealing 10% of the target's maximum Health as true damage over 10 seconds and reducing healing by 30% for the duration of the burn.",
  },
  {
    id: "noxus",
    name: "Noxus Emblem",
    components: ["spatula", "belt"],
    icon: "/assets/items/noxusemblem.webp",
    description: "The holder gains the Noxus Emblem trait.",
  },
  {
    id: "vow",
    name: "Protector's Vow",
    components: ["vest", "tear"],
    icon: "/assets/items/protectors-vow.webp",
    description:
      "Grant 45 bonus starting Mana. Once per combat: At 40% Health, gain a 25% maximum Health shield that lasts up to 5 seconds and 35 Armor and 35 Magic Resist for the rest of combat.",
  },
  {
    id: "quicksilver",
    name: "Quicksilver",
    components: ["glove", "cloak"],
    icon: "/assets/items/quicksilver.webp",
    description:
      "Unique: Grants 20% bonus Attack Speed. Combat start: immune to crowd control for 15 seconds.",
  },
  {
    id: "rabadon",
    name: "Rabadon's Deathcap",
    components: ["rod", "rod"],
    icon: "/assets/items/rabadons-deathcap.webp",
    description: "Grant 70 bonus Ability Power.",
  },
  {
    id: "firecannon",
    name: "Rapid Firecannon",
    components: ["bow", "bow"],
    icon: "/assets/items/rapid-firecannon.webp",
    description:
      "Grant 15% bonus Attack Speed and 1 Attack Range. Attacks cannot miss.",
  },
  {
    id: "redemption",
    name: "Redemption",
    components: ["belt", "tear"],
    icon: "/assets/items/redemption.webp",
    description:
      "Heal adjacent allies for 15% of their missing Health every 5 seconds. Affected allies take 25% less multi-target damage for 5 seconds (damage reduction does not stack).",
  },
  {
    id: "runaans",
    name: "Runaan's Hurricane",
    components: ["bow", "cloak"],
    icon: "/assets/items/runaans-hurricane.webp",
    description:
      "Grants 20% bonus Attack Damage. Attacks fire a bolt at a nearby enemy, dealing 50% Attack Damage as physical damage",
  },
  {
    id: "shroud",
    name: "Shroud of Stillness",
    components: ["vest", "glove"],
    icon: "/assets/items/shroud-of-stillness.webp",
    description:
      "Unique: Combat start: Shoot a beam that delays the first cast of affected enemies by 35%.",
  },
  {
    id: "shurima",
    name: "Shurima Emblem",
    components: ["spatula", "rod"],
    icon: "/assets/items/shurimaemblem.webp",
    description: "The holder gains the Shurima trait.",
  },
  {
    id: "slayer",
    name: "Slayer Emblem",
    components: ["spatula", "glove"],
    icon: "/assets/items/slayeremblem.webp",
    description: "The holder gains the Shurima trait.",
  },
  {
    id: "sorcerer",
    name: "Sorcerer Emblem",
    components: ["spatula", "tear"],
    icon: "/assets/items/sorcereremblem.webp",
    description: "The holder gains the Shurima trait.",
  },
  {
    id: "shojin",
    name: "Spear of Shojin",
    components: ["sword", "tear"],
    icon: "/assets/items/spear-of-shojin2.webp",
    description: "Attacks restore 5 additional Mana.",
  },
  {
    id: "shiv",
    name: "Statikk Shiv",
    components: ["bow", "tear"],
    icon: "/assets/items/statikk-shiv.webp",
    description:
      "Grants 15 bonus Ability Power. Every 3rd attack unleashes chain lightning that bounces to 4 enemies, dealing 30 magic damage and reducing their Magic Resist by 50% for 5 seconds. [Direct damage item] Shred: reduce Magic Resist",
  },
  {
    id: "sunfire",
    name: "Sunfire Cape",
    components: ["vest", "belt"],
    icon: "/assets/items/sunfire-cape.webp",
    description:
      "Unique: Grant 250 bonus Health. Every 2 seconds, an enemy within 2 hexes is burned for 10% of their maximum Health as true damage over 10 seconds, and reducing healing by 30% for the duration",
  },
  {
    id: "crown",
    name: "Tactician's Crown",
    components: ["spatula", "spatula"],
    icon: "/assets/items/tacticians-crown.webp",
    description: "The holder's team gains 1 maximum team size.",
  },
  {
    id: "tg",
    name: "Thief's Gloves",
    components: ["glove", "glove"],
    icon: "/assets/items/thiefs-gloves.webp",
    description:
      "Each round: equip 2 random items. Improves with player level! Consumes 3 item slots.",
  },
  {
    id: "titans",
    name: "Titan's Resolve",
    components: ["vest", "bow"],
    icon: "/assets/items/titans-resolve.webp",
    description:
      "Grants 2% Attack Damage and 2 Ability Power when attacking or taking damage, stacking up to 25 times. At full stacks, grant 25 Armor and 25 Magic Resist.",
  },
  {
    id: "warmog",
    name: "Warmog's Armor",
    components: ["belt", "belt"],
    icon: "/assets/items/warmogs-armor.webp",
    description: "Grants 500 bonus Health.",
  },
  {
    id: "zeke",
    name: "Zeke's Herald",
    components: ["belt", "sword"],
    icon: "/assets/items/zekes-herald.webp",
    description:
      "Combat start: Grant 20% Attack Speed to the holder and allies within 1 hex in the same row. [Aura item]",
  },
  {
    id: "zephyr",
    name: "Zephyr",
    components: ["belt", "cloak"],
    icon: "/assets/items/zephyr.webp",
    description:
      "Unique: Grant 15% bonus Attack Speed. Combat start: summon a whirlwind on the opposite side of the arena that removes the closest enemy from combat for 5 seconds.",
  },
  {
    id: "zzrot",
    name: "Zz'Rot Portal",
    components: ["belt", "rod"],
    icon: "/assets/items/zzrot-portal.webp",
    description:
      "Combat start: Taunt all enemies that are in range to attack the holder. On death, a Voidspawn arises, taunting nearby enemies. Voidspawns that arise from summoned units are 25% effective.",
  },
];

export default items;
