class Weapon {
    constructor(name, type, classRestriction, rarity, stats, id) {
        this._name = name;
        this._type = type;
        this._classRestriction = classRestriction;
        this._rarity = rarity;
        this._stats = stats;
        this._id = id;
    }
}

// class HeroTypeWeaponList {
//     constructor(heroType, arrayOfWeapons) {
//         this._heroType = heroType;
//         this.arrayOfWeapons = arrayOfWeapons;
//     }
// }

const rogueWeaponList = [
    new Weapon("Dagger", "Dagger", "Rogue", null, null, null),
    new Weapon("Dual Blades", "Dual Blades", "Rogue", null, null, null),
    new Weapon("Bow", "Bow", "Rogue", null, null, null),
    new Weapon("Throwing Knives", "Throwing Knives", "Rogue", null, null, null),
    new Weapon("Claw Weapons", "Claw Weapons", "Rogue", null, null, null),
    new Weapon("Crossbow", "Crossbow", "Rogue", null, null, null),
    new Weapon("Rapier", "Rapier", "Rogue", null, null, null),
    new Weapon("Blowgun", "Blowgun", "Rogue", null, null, null),
    new Weapon("Chakrams", "Chakrams", "Rogue", null, null, null),
    new Weapon("Garrote", "Garrote", "Rogue", null, null, null)
];

const warriorWeaponList = [
    new Weapon("Greatsword", "Greatsword", "Warrior", null, null, null),
    new Weapon("Sword and Shield", "Sword and Shield", "Warrior", null, null, null),
    new Weapon("Warhammer", "Warhammer", "Warrior", null, null, null),
    new Weapon("Polearm", "Polearm", "Warrior", null, null, null),
    new Weapon("Axe", "Axe", "Warrior", null, null, null),
    new Weapon("Mace", "Mace", "Warrior", null, null, null),
    new Weapon("Dual-Wielding Axes", "Dual-Wielding Axes", "Warrior", null, null, null),
    new Weapon("Greataxe", "Greataxe", "Warrior", null, null, null),
    new Weapon("Flail", "Flail", "Warrior", null, null, null),
    new Weapon("War Gauntlets", "War Gauntlets", "Warrior", null, null, null)
];

const priestWeaponList = [
    new Weapon("Staff", "Staff", "Priest", null, null, null),
    new Weapon("Mace and Shield", "Mace and Shield", "Priest", null, null, null),
    new Weapon("Holy Wand", "Holy Wand", "Priest", null, null, null),
    new Weapon("Tome", "Tome", "Priest", null, null, null),
    new Weapon("Holy Hammer", "Holy Hammer", "Priest", null, null, null),
    new Weapon("Ankh", "Ankh", "Priest", null, null, null),
    new Weapon("Holy Bow", "Holy Bow", "Priest", null, null, null),
    new Weapon("Sacred Chalice", "Sacred Chalice", "Priest", null, null, null),
    new Weapon("Prayer Beads", "Prayer Beads", "Priest", null, null, null),
    new Weapon("Holy Scythe", "Holy Scythe", "Priest", null, null, null)
];

const sorcererWeaponList = [
    new Weapon("Staff", "Staff", "Sorcerer", null, null, null),
    new Weapon("Spellbook", "Spellbook", "Sorcerer", null, null, null),
    new Weapon("Elemental Wand", "Elemental Wand", "Sorcerer", null, null, null),
    new Weapon("Crystal Orb", "Crystal Orb", "Sorcerer", null, null, null),
    new Weapon("Runeblade", "Runeblade", "Sorcerer", null, null, null),
    new Weapon("Arcane Gauntlets", "Arcane Gauntlets", "Sorcerer", null, null, null),
    new Weapon("Enchanted Bow", "Enchanted Bow", "Sorcerer", null, null, null),
    new Weapon("Scepter", "Scepter", "Sorcerer", null, null, null),
    new Weapon("Arcane Dagger", "Arcane Dagger", "Sorcerer", null, null, null),
    new Weapon("Graviton Staff", "Graviton Staff", "Sorcerer", null, null, null)
];

// const rogueWeaponArray = new HeroTypeWeaponList("Rogue", rogueWeaponList);
// const warriorWeaponArray = new HeroTypeWeaponList("Warrior", warriorWeaponList);
// const priestWeaponArray = new HeroTypeWeaponList("Priest", priestWeaponList);
// const sorcererWeaponArray = new HeroTypeWeaponList("Sorcerer", sorcererWeaponList);

export { rogueWeaponList, warriorWeaponList, priestWeaponList, sorcererWeaponList };