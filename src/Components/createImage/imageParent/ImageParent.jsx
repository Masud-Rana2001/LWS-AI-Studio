import React from 'react'
import ImageCard from './ImageCard'
import useImageContext from '../../../hooks/useImageContext'
import Loading from '../../Loading'
import ErrorComponent from '../../ErrorComponent';
import EmptyState from '../../EmptyState';

function ImageParent() {
  const { generatedImageUrls,isLoading ,errorState} = useImageContext();
  
  return (
    <div>
      <h3 className="text-zinc-200 mb-4 font-bold text-lg">Result</h3>
      {errorState && (<ErrorComponent message={errorState.error} />)}
      {!isLoading && !errorState && generatedImageUrls.length === 0 && (<EmptyState type="empty-img" title="No Images Yet" text="Enter a creative prompt and generate your first set of AI images ✨"/>)}
      {
        !errorState && (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {
          !isLoading  ? (
          generatedImageUrls?.map((imgUrl,index) => (
            <ImageCard key={index} imgUrl={imgUrl} index={index } />
          ))
          )  : ( 
              Array.from({ length: 9 }).map((_, index) => (
                <div
                  key={index}
                 className="w-full h-48 flex items-center justify-center bg-white/20 rounded-xl"
                >
                  <Loading/>      
              </div>
          )))}
      </div>)}
    </div>
  )
}

export default ImageParent