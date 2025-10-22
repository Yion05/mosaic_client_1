import useLazyLoad from "../hook/useLazyLoad";

const HeroDescriptionOne = () => {
  const [sectionRef, isVisible] = useLazyLoad({
    rootMargin: "0px 0px -100px 0px",
  });

  const slideFromTopAnimation = `
    transition-all duration-1000 ease-out delay-200
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
  `;

  return (
    <section className="bg-black py-16 md:py-24 w-full px-4" ref={sectionRef as React.RefObject<HTMLDivElement>} >
      <div className={`text-center flex flex-col items-center ${slideFromTopAnimation}`}>
        <h1 className="text-accent font-normal text-3xl md:text-4xl mb-6 md:mb-8 leading-snug">
          Welcome to Mosaic, an exclusive service apartment in USJ 1, Subang
          Jaya.
        </h1>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl font-medium">
          From well-thought-out amenities to shared spaces, everything invites
          you to unwind and embrace a balanced lifestyle. Whether it’s relaxing
          or mingling with loved ones, find your balance within spaces designed
          for leisure and connection. It’s all about unwinding, living in the
          now, and finding joy in the little moments that make life big.
        </p>
      </div>
    </section>
  );
};

export default HeroDescriptionOne;
