import { useEffect, useRef, useState } from "react";
import { galleryMap } from "../data/componentData";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { FaTimes } from "react-icons/fa";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imagePath: string) => {
    setSelectedImage(imagePath);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="flex flex-col items-center py-16">
      <h1 className="font-light text-3xl sm:text-4xl lg:text-5xl text-accent mb-4">
        Gallery Photo
      </h1>
      <div className="border-b-2 mt-4 border-accent w-24 sm:w-56 mb-12"></div>
      
      <div className="w-full px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2">
          {galleryMap.map((image, index) => (
            <div
              key={index}
              onClick={() => openModal(`/assets/${image}`)} 
              className="w-full aspect-video overflow-hidden rounded-lg shadow-md cursor-pointer group"
            >
              <img
                src={`/assets/${image}`}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition duration-300 group-hover:scale-[1.05]"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <ImageModal imageUrl={selectedImage} onClose={closeModal} />
      )}
    </section>
  );
};
interface ImageModalProps {
  imageUrl: string;
  onClose: () => void;
}

const ImageModal = ({ imageUrl, onClose }: ImageModalProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-70 transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        ref={contentRef}
        className="relative w-11/12 h-fit max-w-4xl max-h-screen p-4 bg-black rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()} 
      >
        
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-accent duration-500 cursor-pointer hover:text-black rounded-full p-2 z-50 transition"
          aria-label="Close image gallery"
        >
          <FaTimes className="text-xl" />
        </button>

        <TransformWrapper 
            initialScale={1} 
            minScale={0.5} 
            maxScale={4} 
            limitToBounds={false}
        >
          <TransformComponent
            wrapperClass="w-full h-full"
          >
            <img 
              src={imageUrl} 
              alt="Zoomable Gallery Image" 
              className="w-full h-full object-contain" 
            />
          </TransformComponent>
        </TransformWrapper>
        
      </div>
    </div>
  );
};

export default Gallery;
