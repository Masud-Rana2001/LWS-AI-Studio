
import {useState,useEffect} from 'react';

const useLocalStorage = (storageKey,defaultValue) => {
  const [value, setValue] = useState(JSON.parse(localStorage.getItem(storageKey)) ?? defaultValue);
  useEffect(() => {
    localStorage.setItem(storageKey,JSON.stringify(value))
  },[value,storageKey])
  return [
    value,
    setValue
  ]
};

export default useLocalStorage;





































// import {useState,useEffect} from 'react';










// const useLocalStorage = (itemName) => {
//   const initialDownloaded = () => {
//     const downloaded = localStorage.getItem(itemName);
//     return downloaded ? JSON.parse(downloaded) : []
//   };
//   const [items, setItems] = useState(initialDownloaded);
//   console.log(items)
//   const handleAdd = (url) => {
//     const newObj = {
//       url:url,
//       isSelected:true
//     }
//     setItems(prevItems => {
//       const found = prevItems.find(item => item.url === url);
//       if (found) {
//         alert("Already downloaded");
//         return prevItems
//       }
//       return [...prevItems,newObj]
//     })
   
//   };

//   useEffect(() => {
//     localStorage.setItem(itemName,JSON.stringify(items))
//   },[items,itemName])

//   return {
//     items,
//     handleAdd
//   }
// };

// export default useLocalStorage;