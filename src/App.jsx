import { ToastContainer } from 'react-toastify';

import Page from "./Page";
import { ImageGeneratorProvider } from "./provider/ImageGeneratorProvider";
import LocalStorageProvider from "./provider/LocalStorageProvider";



const App = () => {
  return (
    <>
      <ToastContainer />
      <LocalStorageProvider>
      <ImageGeneratorProvider>
        <Page/>
      </ImageGeneratorProvider>
    </LocalStorageProvider>
      
    </>
  );
};

export default App;




