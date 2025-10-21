import { SlideTemplate } from "../components/slide";
import { benefitSlide, imageSlide } from "../data/componentData";

export const ImageSlide = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-light text-3xl sm:text-4xl lg:text-5xl text-accent">
        Explore
      </h1>
      <div className="border-b-2 mt-4 border-accent w-24 sm:w-56"></div>
      <SlideTemplate
        slideFolder="slide_1"
        slideData={imageSlide}
      ></SlideTemplate>
    </div>
  );
};


export const BenefitSlide = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-light text-3xl sm:text-4xl lg:text-5xl text-accent">
        Additional
      </h1>
      <div className="border-b-2 mt-4 border-accent w-24 sm:w-56"></div>
      <SlideTemplate
        slideFolder="slide_2"
        slideData={benefitSlide}
      ></SlideTemplate>
    </div>
  );
};

