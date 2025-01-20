import Image from "next/image";
import hero from "../..//public/Images/header.png";
const Hero = () => {
  return (
    <section className="hero-main z-10 lg:h-[80vh] h-auto my-auto overflow-hidden bg-[#C6FFD4]  rounded-b-[30px]  ">
      <div className="container lg:max-w-screen-xl max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-20 py-8 h-full">
          <div className="flex flex-col gap-8 justify-center text-center lg:text-start order-2 lg:order-1">
            <h1 className="text-[#11793D] lg:text-[44px] text-[30px] font-bold lg:leading-[42px] leading-[28px]">
              Olvídate de las filas y esperas
            </h1>
            <p className="text-[#115B23] lg:text-[20px] text-[18px] text-pretty">
              Realiza el trámite para renovar tu licencia, realizar un traspaso
              de vehículo y mucho más desde la comodidad de tu hogar.
            </p>
            <div className="relative z-10">
              <a
                href="#services"
                className="button lg:[#5AAB30] lg:text-white border border-solid lg:border-[#5AAB30] lg:text-[20px] text-[18px] font-[700] mx-auto lg:mx-0 bg-[#5AAB30] border-[#5AAB30] text-white
                hover:text-white hover:bg-[#5AAB30] hover:border-[#5AAB30] mb-[25px] px-[32px] py-[14px] rounded-[25px] !z-[9999] relative "
              >
                Comienza ahora
              </a>
            </div>
          </div>

          <div className=" flex lg:justify-end lg:mt-[.5rem] mt-[0rem] lg:items-center items-center justify-center lg:h-full h-full order-1 lg:order-2">
            <Image
              src={hero}
              width={500}
              height={500}
              alt="Hero Image"
              className="lg:!ml-auto !ml-[0rem] lg:w-[90%] w-[88%] flotar-hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
