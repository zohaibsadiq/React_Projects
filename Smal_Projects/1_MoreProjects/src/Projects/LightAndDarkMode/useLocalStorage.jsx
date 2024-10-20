import { useEffect, useState } from 'react';

export default function useLocalStorage( key, defaultValue ) {
    console.log(`First time the key is ${key} and defaultvalue is ${defaultValue}`)
  const [value, setValue] = useState(() => {
    let currentValue;
    try {
      currentValue = JSON.parse(localStorage.getItem(key)) || defaultValue;
    } catch (error) {
      currentValue = defaultValue;
    }
    console.log(`First time the current value is ${currentValue}`)
    return currentValue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return [value, setValue];
}
