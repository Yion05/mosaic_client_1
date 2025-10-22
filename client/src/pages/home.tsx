import HeroDescriptionOne from "../layout/descriptionCard";
import Gallery from "../layout/galleryPhoto";
import Landscape from "../layout/landScape";
import LayoutMap from "../layout/layoutMap";
import LocationCard from "../layout/locationCard";
import VideoHeroOne from "../layout/videoHeroOne";
import VRTour from "../layout/vrTourCard";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="w-full" id="home">
        <VideoHeroOne></VideoHeroOne>
      </div>
      <div className="w-full">
        <HeroDescriptionOne></HeroDescriptionOne>
      </div>
      <div className="">
        <LocationCard></LocationCard>
      </div>
      <div className="overflow-hidden bg-black py-12">
        <Landscape></Landscape>
      </div>
      <div className="overflow-hidden">
        <LayoutMap></LayoutMap>
      </div>
      <div className="w-full bg-black py-12">
        <Gallery></Gallery>
      </div>
      <div className="w-full bg-black">
        <VRTour></VRTour>
      </div>
    </section>
  );
};

export default Home;
