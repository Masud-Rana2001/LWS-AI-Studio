import {useContext} from 'react'
import ImageGeneratorContext from '../context/ImageGeneratorContext';



function useImageContext() {
  const { prompt, setPrompt,
    model, setModel,
    availableModels, setAvailableModels,
    width, setWidth,
     seed, setSeed,
    height, setHeight,
    isLoading,
    errorState,
    generatedImageUrls, setGeneratedImageUrls,
    generateImages,
    setAspectRatio} = useContext(ImageGeneratorContext);
  return {
     prompt, setPrompt,
    model, setModel,
    availableModels, setAvailableModels,
    width, setWidth,
    height, setHeight,
     seed, setSeed,
    isLoading,
    errorState,
    generatedImageUrls, setGeneratedImageUrls,
    generateImages,
    setAspectRatio
  }
}

export default useImageContext