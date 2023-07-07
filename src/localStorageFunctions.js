export function saveDataToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  
  export function getDataFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    try {
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error(`Error parsing JSON data from localStorage for key '${key}':`, error);
      return null;
    }
  }