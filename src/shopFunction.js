// Assuming the code for the Weapon class, HeroTypeWeaponList class, and weaponLists for each class is already defined.
import { rogueWeaponList, warriorWeaponList, priestWeaponList, sorcererWeaponList } from "./weaponList.js"
// Simulating an item being pulled from a chest based on player's class and rarity probabilities
export default function pullItemFromChest(playerClass, pity) {
    let weaponList;

    switch (playerClass) {
        case "Rogue":
            weaponList = rogueWeaponList;
            break;
        case "Priest":
            weaponList = priestWeaponList; 
            break;
        case "Warrior":
            weaponList = warriorWeaponList;
            break;
        case "Sorcerer":
            weaponList = sorcererWeaponList;
            break;
        default:
            console.log("Invalid player class.");
            return null;
    }

    // Consider constant rarity object for scaling purposes
    const rarityProbabilities = [
        { rarity: "Normal", chance: 40 },
        { rarity: "Uncommon", chance: 30 },
        { rarity: "Rare", chance: 15 },
        { rarity: "Epic", chance: 10 },
        { rarity: "Legendary", chance: 5 },
    ];

    let totalChance = 0;
    for (const rarityData of rarityProbabilities) {
        totalChance += rarityData.chance;
    }

    let randomChance = Math.random() * totalChance;
    let rarity = null;

    for (const rarityData of rarityProbabilities) {
        randomChance -= rarityData.chance;
        if (randomChance <= 0) {
            rarity = rarityData.rarity;
            break;
        }
    }

    const randomIndex = Math.floor(Math.random() * weaponList.length);
    const randomWeapon = weaponList[randomIndex];

    // Assign random properties to the weapon
    randomWeapon._name = "Divine Staff"; // Example property
    randomWeapon._rarity = rarity; // Assigning the determined rarity

    // If the pulled item is legendary, reset the pity counter
    if (rarity === "Legendary") {
        pity = 0;
    } else {
        pity++; // Increment the pity counter if a legendary item was not pulled
    }

    // Guarantee a legendary item if the pity counter reaches 100
    if (pity >= 100) {
        randomWeapon._rarity = "Legendary";
        pity = 0; // Reset the pity counter
    }

    randomWeapon._stats = {
        attack: 150,
        intellect: 50,
        stamina: 80,
    }; // Example property

    return { item: randomWeapon, pity };
}
