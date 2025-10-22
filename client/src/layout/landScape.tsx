import useLazyLoad from "../hook/useLazyLoad";

const Landscape = () => {
  const [sectionRef, isVisible] = useLazyLoad({
    rootMargin: "0px 0px -100px 0px",
  });

  const fadeAnimation = `
    transition-opacity duration-1000 ease-out
    ${isVisible ? "opacity-100" : "opacity-0"}
  `;

  return (
    <section ref={sectionRef as React.RefObject<HTMLDivElement>} className={`${fadeAnimation}`}>
         <img src="/assets/layout_1.webp" alt="layout_image" loading="lazy"/>;
    </section>
  )
};

export default Landscape;
