import { generateRandomWeapon } from "./shopFunction";
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
  

export  function spin (heroSelection) {

    // Generate the weapon the player receives using the generateRandomWeapon function
    let generatedWeapon = generateRandomWeapon(heroSelection);

    // Parse the weapon Class data to be used for front end images
    let resultingType = generatedWeapon._type.replace(/\s/g, '');
    let resultingRarity = generatedWeapon._rarity + "Rarity";
    let resultingElement = generatedWeapon._element.toLowerCase();

    // Pass the data to a find function that locates the checks each image (string) URL to see if it includes the parsed data   
    // If data matches, return the appropriate image link as variable 
    let selectedTypeImage = weaponImages.find(image => image.includes(resultingType));
    let selectedRarityImage = rarityImages.find(image => image.includes(resultingRarity));
    let selectedElementImage = elementImages.find(image => image.includes(resultingElement));
    
    // Images for the equipment reel
    const equipmentReel = document.querySelector('#equipmentReel');

    // Selected equipment case -- 1st reel, middle slot 
    const selectedEquipmentSymbol =  equipmentReel.querySelector('.selected')
    selectedEquipmentSymbol.style.backgroundImage = `url('${selectedTypeImage}')`;

    // Top equipment case -- 1st reel, top slot
    const topEquipmentSymbol = equipmentReel.querySelector('.top');
    topEquipmentSymbol.style.backgroundImage = `url('${weaponImages[Math.floor(Math.random() * weaponImages.length)]}')`

    // Bottom equipment case -- 1st reel, bottom slot
    const bottomEquipmentSymbol = equipmentReel.querySelector('.bottom');
    bottomEquipmentSymbol.style.backgroundImage = `url('${weaponImages[Math.floor(Math.random() * weaponImages.length)]}')`
      
    
    // Images for the rarity reel
    const rarityReel = document.getElementById('rarityReel')

    // Selected rarity case -- 2nd reel, middle slot 
    const selectedRaritySymbol =  rarityReel.querySelector('.selected')
    selectedRaritySymbol.style.backgroundImage = `url('${selectedRarityImage}')`;

    // Top rarity case -- 2nd reel, top slot
    const topRaritySymbol = rarityReel.querySelector('.top');
    topRaritySymbol.style.backgroundImage = `url('${rarityImages[Math.floor(Math.random() * rarityImages.length)]}')`
 
    // Bottom rarity case -- 2nd reel, bottom slot
    const bottomRaritySymbol = rarityReel.querySelector('.bottom');
    bottomRaritySymbol.style.backgroundImage = `url('${rarityImages[Math.floor(Math.random() * rarityImages.length)]}')`
       

    // Images for the element reel
    const elementReel = document.getElementById('elementReel')

    // Selected element case -- 3rd reel, middle slot 
    const selectedElementSymbol =  elementReel.querySelector('.selected')
    selectedElementSymbol.style.backgroundImage = `url('${selectedElementImage}')`;

    // Top element case -- 3rd reel, top slot
    const topElementSymbol = elementReel.querySelector('.top');
    topElementSymbol.style.backgroundImage = `url('${elementImages[Math.floor(Math.random() * elementImages.length)]}')`
 
    // Bottom element case -- 3rd reel, bottom slot
    const bottomElementSymbol = elementReel.querySelector('.bottom');
    bottomElementSymbol.style.backgroundImage = `url('${elementImages[Math.floor(Math.random() * elementImages.length)]}')`

    
    return generatedWeapon;
  }

  export function openSlotMachineModal() {
    document.getElementById('slotMachineModal').style.display = 'block';
  }
  
  export function closeSlotMachineModal() {
    document.getElementById('slotMachineModal').style.display = 'none';
  }

