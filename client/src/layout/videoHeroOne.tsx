import ReactPlayer from "react-player";

const VideoHeroOne = () => {
  const videoURL = "https://youtu.be/Ys7cve5T1mM";

  return (
    <section className="relative bg-[url(/assets/bg_1.jpg)] bg-cover bg-center flex items-center justify-center py-10">
      <div className="mx-auto px-4 max-w-6xl w-full">
        <div className="relative pt-[60%] rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition duration-500">
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
    </section>
  );
};

export default VideoHeroOne;
