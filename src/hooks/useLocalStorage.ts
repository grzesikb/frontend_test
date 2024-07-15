// import { useState } from "react";

// export default function useLocalStorage(key: any, initialValue: any) {
//   const [storedValue, setStoredValue] = useState(() => {
//     try {
//       const item = window.localStorage.getItem(key);
//       return item ? JSON.parse(item) : initialValue;
//     } catch (error) {
//       console.log(error);
//       return initialValue;
//     }
//   });

//   const setValue = (value: any) => {
//     try {
//       const valueToStore =
//         value instanceof Function ? value(storedValue) : value;
//       setStoredValue(valueToStore);
//       window.localStorage.setItem(key, JSON.stringify(valueToStore));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const removeValue = () => {
//     try {
//       window.localStorage.removeItem(key);
//       setStoredValue(initialValue);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return [storedValue, setValue, removeValue];
// }

import { useState } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  const removeLocalStorage = () => {
    if (typeof window !== "undefined") {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.error(`Error removing key "${key}" from localStorage:`, error);
      }
    }
  };

  return [storedValue, setValue, removeLocalStorage] as const;
}

export default useLocalStorage;
