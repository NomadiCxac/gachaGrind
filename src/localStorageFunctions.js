export function saveDataToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  
  export function getDataFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }