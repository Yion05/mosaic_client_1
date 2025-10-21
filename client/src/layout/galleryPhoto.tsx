import { galleryMap } from "../data/componentData";

const Gallery = () => {
  return (
    <section className="flex flex-col items-center py-16">
      <h1 className="font-light text-3xl sm:text-4xl lg:text-5xl text-accent mb-4">
        Gallery Photo
      </h1>
      <div className="border-b-2 mt-4 border-accent w-24 sm:w-56 mb-12"></div>
      <div className=" w-full px-4 sm:px-8">
        <div className="grid grid-cols-3 gap-1 md:gap-2">
          {galleryMap.map((image, index) => (
            <div
              key={index}
              className="w-full aspect-video overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={`/assets/${image}`}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition duration-300 hover:scale-[1.05]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
