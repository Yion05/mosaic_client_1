import { layoutImage } from "../data/componentData";

const LayoutMap = () => {
  return (
    <section className=" text-white py-16 md:py-24">
      <div className="flex flex-col items-center">
        <div className="text-center flex flex-col items-center mb-12 px-4">
          <h1 className="font-light text-3xl sm:text-4xl lg:text-5xl text-accent">
            Master Storey Plan
          </h1>
          <div className="border-b-2 mt-4 border-accent w-24 sm:w-56"></div>
        </div>

        <div className="w-full max-w-5xl px-4">
          <img
            src="/assets/layout_2.webp"
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
    </section>
  );
};

export default LayoutMap;
