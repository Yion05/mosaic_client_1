import { useEffect, useState } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import type { slideTemplate } from "../types/types";

export const SlideTemplate = ({ slideFolder, slideData, maxWidth }: slideTemplate) => {
  const widthMap = {
    1: "max-w-xl",
    2: "max-w-7xl"
  }

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const totalSlides = slideData.length;

  const autoslide_inter = 25000; // value default by ms, so for example, 1000 = 1 second here

  const goToPrevious = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, autoslide_inter);

    return () => clearInterval(timer);
  }, [totalSlides]);

  const translateValue = `-${currentSlide * 20}%`;

  return (
    <div className={`relative mx-auto my-8 ${widthMap[maxWidth]}`}>
      <div
        className={`relative rounded-xl overflow-hidden shadow-2xl`}
      >
        <div
          className="h-full flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${totalSlides * 100}%`,
            transform: `translateX(${translateValue})`,
          }}
        >
          {slideData.map((content, index) => (
            <img
              key={index}
              src={`/assets/${slideFolder}/${content}`}
              alt={`Slide ${index + 1}`}
              style={{
                width: `${100 / totalSlides}%`,
                height: `100%`,
                objectFit: "cover",
              }}
              className="flex-shrink-0"
            />
          ))}
        </div>
        <IoMdArrowDropleft
          onClick={goToPrevious}
          className={`text-5xl text-white/80 hover:text-white absolute left-4 z-20 cursor-pointer top-1/2 -translate-y-1/2 transition drop-shadow-lg`}
        />

        <IoMdArrowDropright
          onClick={goToNext}
          className={`text-5xl text-white/80 hover:text-white absolute right-4 z-20 cursor-pointer top-1/2 -translate-y-1/2 transition drop-shadow-lg`}
        />
        <div className="absolute bottom-4 w-full flex justify-center z-30 gap-2">
          {slideData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white border-2 border-accent"
                  : "bg-black/70 hover:bg-black/90"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
