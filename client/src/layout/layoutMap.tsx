import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { layoutImage } from "../data/componentData";
import { FaTimes } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

interface ImageModalProps {
  imageUrl: string;
  onClose: () => void;
}

const ImageModal = ({ imageUrl, onClose }: ImageModalProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-70 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        ref={contentRef}
        className="relative w-11/12 h-fit max-w-4xl max-h-screen p-4 bg-white rounded-lg shadow-2xl"
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
          <TransformComponent wrapperClass="w-full h-full">
            <img
              src={imageUrl}
              alt="Zoomable Layout Image"
              className="w-full h-full object-contain"
            />
          </TransformComponent>
        </TransformWrapper>
      </div>
    </div>
  );
};

const LayoutMap = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imagePath: string) => {
    setSelectedImage(imagePath);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const masterPlanPath = "/assets/layout_2.webp";

  return (
    <section className=" text-white py-16 md:py-24">
      <div className="flex flex-col items-center">
        <div className="text-center flex flex-col items-center mb-12 px-4">
          <h1 className="font-light text-3xl sm:text-4xl lg:text-5xl text-accent">
            Master Storey Plan
          </h1>
          <div className="border-b-2 mt-4 border-accent w-24 sm:w-56"></div>
        </div>

        <div
          className="w-full max-w-5xl px-4 cursor-pointer"
          onClick={() => openModal(masterPlanPath)}
        >
          <img
            src={masterPlanPath}
            alt="MasterStoreyPlan"
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>
      </div>

      <div className="flex flex-col items-center pt-16 md:pt-24 mt-12">
        <div className="text-center flex flex-col items-center mb-12 px-4">
          <h1 className="font-light text-3xl sm:text-4xl lg:text-5xl text-accent">
            Layout Plan
          </h1>
          <div className="border-b-2 mt-4 border-accent w-24 sm:w-56"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl gap-8">
          {layoutImage.map((image, index) => (
            <div
              key={index}
              onClick={() => openModal(`/assets/layout_image/${image}`)}
              className="rounded-lg overflow-hidden cursor-pointer transition duration-300 hover:scale-[1.01] hover:shadow-xl"
            >
              <img
                src={`/assets/layout_image/${image}`}
                alt={`Layout image ${index + 1}`}
                className="w-full h-auto object-cover"
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

export default LayoutMap;
