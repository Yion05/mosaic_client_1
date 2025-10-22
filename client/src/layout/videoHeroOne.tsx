import ReactPlayer from "react-player";
import useLazyLoad from "../hook/useLazyLoad";

const VideoHeroOne = () => {
  const [sectionRef, isVisible] = useLazyLoad({
    rootMargin: "0px 0px -100px 0px",
  });

  const fadeAnimation = `
    transition-opacity duration-1000 ease-out
    ${isVisible ? "opacity-100" : "opacity-0"}
  `;

  const videoURL = "https://youtu.be/Ys7cve5T1mM";

  return (
    <section className={`relative bg-[url(/assets/bg_1.jpg)] bg-cover bg-center flex items-center justify-center py-20`} ref={sectionRef as React.RefObject<HTMLDivElement>}>
      <div className="mx-auto px-4 max-w-6xl w-full">
        <div className={`relative pt-[60%] rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition duration-500 ${fadeAnimation}`}>
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
