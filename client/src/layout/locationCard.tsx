import { locationData } from "../data/componentData";
import { BenefitSlide, ImageSlide } from "./sliderCard";

const LocationCard = () => {
  return (
    <section className="bg-black flex flex-col items-center py-8">
      <span>
        <img src="/assets/location_1.webp" alt="location_image" />
      </span>
      <span className="hover:scale-105 transform duration-500 py-12">
        <img src="/assets/location_2.webp" alt="location_path" />
      </span>
      <span className="flex flex-col md:flex-row gap-12 items-start px-4 md:px-12">
        <div className="flex flex-col space-y-6 w-full md:w-2/5">
          <img
            src="/assets/life_easier_text.webp"
            alt="Life's Easier when everything a stop away"
            className="w-full h-auto"
          />

          <span className="grid grid-cols-2 gap-4 text-center mx:py-12 lg:px-20 my-24">
            {locationData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="bg-secondary flex items-center justify-center gap-3 py-2 rounded-2xl hover:scale-105 hover:bg-primary hover:text-white duration-300"
                >
                  <IconComponent className="md:text-3xl" />
                  <p className="text-xs md:text-sm font-semibold text-nowrap">{item.title}</p>
                </div>
              );
            })}
          </span>
          <img
            src="/assets/location_shorten.webp"
            alt="location_shorten USJ7"
            className="w-full h-auto mt-4"
          />
          <p className="text-sm text-gray-300 leading-relaxed">
            Experience the pinnacle of convenient transit at the BRT's South
            Quay station. This hub is brilliantly designed for effortless
            travel—You can get to Sunway, Monash and even Taylor University
            easily. Only few stops to Sunway Pyramid. Looking property for your
            kids in University? No fret.
          </p>
        </div>

        <div className="w-full md:w-2/3">
          <img
            src="/assets/location_3.webp"
            alt="location_image2"
            className="w-full h-full object-cover rounded-xl shadow-2xl"
          />
        </div>
      </span>
      <ImageSlide></ImageSlide>
      <BenefitSlide></BenefitSlide>
    </section>
  );
};

export default LocationCard;
