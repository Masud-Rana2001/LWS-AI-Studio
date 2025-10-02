import LocalStorageContext from '../context/LocalStorageContext.js';
import useLocalStorage from '../hooks/useLocalStorage.jsx';


 const LocalStorageProvider = ({ children }) => {

  const [downloaded, setDownloaded] = useLocalStorage("downloadedItems",[])

  const addToDownload = (url) => {
    const exists = downloaded.find(d => d.url === url);
    if (!exists) {
      setDownloaded([
        ...downloaded,
        {
          url,
          isDownload: true,
          
        }
      ])
    }
   };

   return (<LocalStorageContext.Provider value={{ downloaded, addToDownload }}>
    {children}
  </LocalStorageContext.Provider>)
}


export default LocalStorageProvider