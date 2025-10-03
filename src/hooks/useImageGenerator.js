import { useState, useEffect } from 'react';

// API ENDPOINT 
const IMAGE_MODEL_URL = 'https://image.pollinations.ai/models';
const IMAGE_GENERATER_URL = (encodedPrompt, model, width, height, seed) =>
  `https://image.pollinations.ai/prompt/${encodedPrompt}?model=${model}&width=${width}&height=${height}&seed=${seed}`;






// helper function → retry system
const fetchWithRetry = async (url, retries = 3, delay = 2000) => {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `Request failed with status ${res.status}`);
      }
      return res.url; 
    } catch (err) {
      if (i < retries - 1) {
        console.warn(`Retrying... (${i + 1}/${retries})`);
        await new Promise(r => setTimeout(r, delay));
      } else {
        throw err; 
      }
    }
  }
};










const useImageGenerator = () => {
  // Input states 
  const [prompt, setPrompt] = useState('');
  const [availableModels, setAvailableModels] = useState([]);
  const [model, setModel] = useState("flux");
  const [width, setWidth] = useState(1024);
  const [height, setHeight] = useState(1024);
  const [seed, setSeed] = useState(0);

  // UI State 
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState(null);
  const [generatedImageUrls, setGeneratedImageUrls] = useState([]);

 
  // Load Model
  useEffect(() => {
    const fetchModels = async () => {
      try {
        const response = await fetch(IMAGE_MODEL_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const modelList = await response.json();
        setAvailableModels(modelList);
      } catch (error) {
        console.error("Error fetching image models:", error);
        setErrorState("Failed to load models. Please try again.");
      }
    };
    fetchModels();
  }, []);


    const setAspectRatio = (ratio) => {
      if (ratio === '1:1') { setWidth(1024); setHeight(1024); }
      else if (ratio === '16:9') { setWidth(1280); setHeight(720); }
      else if (ratio === '4:3') { setWidth(1024); setHeight(768); }
      else if (ratio === '3:2') { setWidth(1200); setHeight(800); }
    };

  // Generate Images
  const generateImages = async (prompt, model, width, height, seed=Math.round(Math.random()*77777777)) => {
    setIsLoading(true);
    setErrorState(null);

    //clear previous generated images
    setGeneratedImageUrls([])

    const numOfImgs = 9;
    
    
    try {
      const newImages = []

    for (let i = 0; i < numOfImgs; i++) {
      const encodedPrompt = encodeURIComponent(prompt);
      const imgSeed = seed + i;
      const imageUrl = IMAGE_GENERATER_URL(encodedPrompt, model, width, height, imgSeed);

      const url = await fetchWithRetry(imageUrl, 3, 2000); 
      newImages.push(url)
      await new Promise(r => setTimeout(r, 1000));
    }
    setGeneratedImageUrls(newImages);
    
      
      
    } catch (error) {
      console.error("Image generation failed:", error.message);
      setErrorState(`Generation failed: ${error.message}. Note: API has a rate limit (1 req / 1 sec).`);
    } finally {
      setIsLoading(false);
    }
  };

  // 🔑 return those items from the hook 
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
  };
};

export default useImageGenerator;
