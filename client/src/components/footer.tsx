import { FaPhone, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black py-12 px-4 sm:px-8 md:px-12 lg:px-24 flex flex-col items-center text-center gap-12">
      <section className="grid grid-cols-2 items-center gap-12">
        <a
          href={"tel:0162653108"}
          className="bg-accent flex items-center gap-4 px-4 py-2 rounded-2xl justify-center text-2xl hover:bg-accent/70 duration-500 hover:-translate-y-2"
        >
          <FaPhone></FaPhone>
          <p className="font-semibold">Call</p>
        </a>
        <a
          href={"https://wa.link/0k7h33"}
          target="_blank"
          className="text-white bg-green-500 flex items-center gap-4 px-4 py-2 rounded-2xl justify-center text-2xl hover:bg-green-500/70 duration-500 hover:-translate-y-2"
        >
          <FaWhatsapp></FaWhatsapp>
          <p className="font-semibold">Whatsapp</p>
        </a>
      </section>
      <section className="text-white">
        <p className="max-w-7xl text-sm">
          Disclaimer: Any sketches, illustrations, renderings, images, pictures,
          amenities, food services, unit finishes, plans, specifications, art
          and/or visuals shown and featured in this website including the
          interior design concepts, colour schemes and suggested furnishings in
          the completed unit/development are artist’s impression only and shall
          not be taken as a representation of fact. Whilst every reasonable care
          has been taken in providing this information the developer shall not
          be held responsible for any inaccuracy and changes as may be required
          by the authorities
        </p>
      </section>
      <section className="text-white text-lg">
        <p>
          SUBANG USJ1 MOSAIC RESIDENCE PROJECT {new Date().getFullYear()} © All
          Rights Reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
