import { Link } from "react-router";
import useLazyLoad from "../hook/useLazyLoad";

const VRTour = () => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText("0162653108");
  };

  const [sectionRef, isVisible] = useLazyLoad({
    rootMargin: "0px 0px -100px 0px",
  });

  const slideFromTopAnimation = `
    transition-all duration-1000 ease-out delay-200
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-36"}
  `;

  return (
    <section
      className="flex flex-col items-center py-24 text-white px-4"
      ref={sectionRef as React.RefObject<HTMLDivElement>}
    >
      <h1 className="font-light text-3xl sm:text-4xl lg:text-5xl text-accent mb-4 text-center">
        SHOW UNIT READY FOR VIEWING
      </h1>
      <div className="border-b-2 mt-2 border-accent w-24 sm:w-32 mb-12 pb-4"></div>
      <Link
        className="text-3xl font-bold border-2 rounded-full border-white px-8 py-4 hover:border-accent hover:text-accent hover:shadow-2xl hover:shadow-accent duration-500 hover:-translate-y-2"
        target="_blank"
        to="https://vr.properly.com.my/mosaicusj1/"
      >
        360° VR Tour
      </Link>
      <span className={`${slideFromTopAnimation} mt-12`}>
        <p className="text-3xl text-center">
          For more information or actual site viewing please call{" "}
          <span
            className="font-bold cursor-pointer duration-500 hover:text-accent hover:underline"
            onClick={copyToClipboard}
          >
            +6016-265 3108
          </span>
        </p>
      </span>
    </section>
  );
};

export default VRTour;
