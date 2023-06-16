import importAllImages from "./imageHandler";

const weaponImages = importAllImages(
    require.context('./images/weapons', false, /\.(png)$/)
  );
  
  const armourImages = importAllImages(
    require.context('./images/armour', false, /\.(png)$/)
  );
  
  const elementImages = importAllImages(
    require.context('./images/elements', false, /\.(png)$/)
  );
  
  const rarityImages = importAllImages(
    require.context('./images/rarities', false, /\.(png)$/)
  )

export function getWeaponImage (weapon) {
    let weaponImageUrl = weaponImages.find(image => image.includes(weapon));
    return weaponImageUrl;
}

export function getArmourImage (armour) {
    let armourImageUrl = armourImages.find(image => image.includes(armour));
    return armourImageUrl;
}

export function getRarityImage (rarity) {
    let rarityImageUrl = rarityImages.find(image => image.includes(rarity));
    return rarityImageUrl;
}

export function getElementImage (element) {
    let elementImageUrl = elementImages.find(image => image.includes(element));
    return elementImageUrl;
}


