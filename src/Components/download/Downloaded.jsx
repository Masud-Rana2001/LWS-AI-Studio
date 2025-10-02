import {useContext} from 'react'
import LocalStorageContext from '../../context/LocalStorageContext'
import DownloadImageCard from './DownloadImageCard'
import EmptyState from '../EmptyState';

function Downloaded() {

  const { downloaded } = useContext(LocalStorageContext);
  return (
    <div>
      <div className="container mx-auto px-4 py-8 max-w-6xl">

  {/* Main Content */}
  <main className="relative z-10">
    {/* Welcome Message */}
    <h2 className="text-4xl font-bold mb-8">
      Downloaded <span className="text-2xl">👋</span>
    </h2>
    {/* Image Presets Section */}
          <div>
            {downloaded.length === 0 && (
                    (<EmptyState type="empty-download" title="No Downloads  Yet" text="Your downloaded images will appear here. Generate and download an image to get started."/>)
                )}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {
                downloaded.length > 0 && (
                  downloaded.map(img => (<DownloadImageCard key={ img.url} url={img.url} />))
                ) 
              }
      </div>
    </div>
  </main>
</div>

    </div>
  )
}

export default Downloaded