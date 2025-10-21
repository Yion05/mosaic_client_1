import ReactPlayer from "react-player";

const VideoHeroOne = () => {
  const videoURL = "https://youtu.be/Ys7cve5T1mM";

  return (
    <section className="bg-[url(/assets/bg_1.jpg)] bg-cover bg-center flex items-center">
      <div className="mx-auto px-4 grid md:grid-cols-2 gap-12 items-center md:px-36">
        <div className="text-white order-2 md:order-1">
          <img src="/assets/front_1.jpg" alt="front_image" />
        </div>

        <div className="order-1 md:order-2">
          <div className="relative pt-[56.25%] rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition duration-500">
            <ReactPlayer
              className="absolute top-0 left-0"
              src={videoURL}
              loop={true}
              controls={true}
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHeroOne;
