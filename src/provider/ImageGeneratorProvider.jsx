import React from 'react';

import ImageGeneratorContext from '../context/ImageGeneratorContext';
import useImageGenerator from '../hooks/useImageGenerator';




export const ImageGeneratorProvider = ({ children }) => {
  const generator = useImageGenerator();
  
  return (<ImageGeneratorContext.Provider value={generator}>
    {children}
  </ImageGeneratorContext.Provider>)
}