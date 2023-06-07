export const itemPossibleElements = [
    "Steel",
    "Abyss",
    "Zephyr",
    "Lunar",
    "Solar",
    "Gaia",
    "Aether",
    "Corrode",
    "Inferno",
    "Gaia",
    "Volt",
    "Mist",
]

export const itemPossibleRarity = {
    normal: {rarity: "Normal", chance: 40},
    uncommon: { rarity: "Uncommon", chance: 30 },
    rare: { rarity: "Rare", chance: 15 },
    epic: { rarity: "Epic", chance: 10 },
    legendary:  { rarity: "Legendary", chance: 5 },
}


export const itemPossibleStats = {
    normal: {
      damage: { min: 5, max: 10 },
      strength: { min: 1, max: 5 },
      dexterity: { min: 1, max: 5 },
      intelligence: { min: 1, max: 5 },
      constitution: { min: 1, max: 5 },
      critDamage: { min: 10, max: 20 },
      critChance: { min: 0.005, max: 0.02 }
    },
    uncommon: {
      damage: { min: 7.5, max: 15 },
      strength: { min: 1.5, max: 7.5 },
      dexterity: { min: 1.5, max: 7.5 },
      intelligence: { min: 1.5, max: 7.5 },
      constitution: { min: 1.5, max: 7.5 },
      critDamage: { min: 15, max: 30 },
      critChance: { min: 0.0075, max: 0.03 }
    },
    rare: {
      damage: { min: 15, max: 30 },
      strength: { min: 3, max: 15 },
      dexterity: { min: 3, max: 15 },
      intelligence: { min: 3, max: 15 },
      constitution: { min: 3, max: 15 },
      critDamage: { min: 30, max: 60 },
      critChance: { min: 0.015, max: 0.06 }
    },
    epic: {
      damage: { min: 25, max: 50 },
      strength: { min: 5, max: 25 },
      dexterity: { min: 5, max: 25 },
      intelligence: { min: 5, max: 25 },
      constitution: { min: 5, max: 25 },
      critDamage: { min: 50, max: 100 },
      critChance: { min: 0.025, max: 0.1 }
    },
    legendary: {
      damage: { min: 50, max: 100 },
      strength: { min: 10, max: 50 },
      dexterity: { min: 10, max: 50 },
      intelligence: { min: 10, max: 50 },
      constitution: { min: 10, max: 50 },
      critDamage: { min: 100, max: 200 },
      critChance: { min: 0.05, max: 0.2 }
    }
  };

  export const itemPrefixNames = {
    normal: [
      "Ordinary", "Common", "Plain", "Regular", "Basic"
    ],
    uncommon: [
      "Uncommon", "Rare", "Special", "Distinctive", "Exceptional"
    ],
    rare: [
      "Rare", "Precious", "Exquisite", "Magnificent", "Elite"
    ],
    epic: [
      "Epic", "Grand", "Illustrious", "Transcendent", "Majestic"
    ],
    legendary: [
      "Legendary", "Ultimate", "Eternal", "Invincible", "Godlike"
    ]
  };

  export const itemPossibleSuffix = {
    Steel: "of War",
    Abyss: "of Wailing",
    Zephyr: "of Howling",
    Lunar: "of Moonlight",
    Solar: "of Sunlight",
    Terra: "of Tectonic",
    Aether: "of Gravity",
    Corrode: "of Poison",
    Inferno: "of Burning",
    Gaia: "of Nature",
    Volt: "of Shocking",
    Mist: "of Freezing"
  };