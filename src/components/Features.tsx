import Image from "next/image";
import "./styles/featuresStyles.css";
import Cards from "./Card";
import SwiperSlider from "./SwiperSlider";
const Features = () => {
  return (
    
      <div className="relative flex justify-center items-center w-full lg:h-[1000px] h-[520px] bg-[url('/icon/purple.svg')] bg-cover bg-custom-position-mobile md:bg-custom-position-lg lg:bg-custom-position-lg  bg-no-repeat waveContainer waveContainerMobile mb-16">
        <Image
          src="/icon/car.svg"
          alt="Purple Background"
          width={150}
          height={150}
          className="carIcon "
        />

<div className="w-full ">
      <div className="flex justify-center items-center pt-4">
      <Image
          src="/icon/person1.svg"
          alt="Purple Background"
          width={100}
          height={100}
          className=""
        />
      </div>
        

        <div className="  flex gap-5 flex-col bg-[#509920] mx-5 border p-5 border-[#ffffff] rounded-[14px] ">
          <h2 className="text-[20px] font-bold leading-8 text-white text-center">
            Conoce cómo funciona
          </h2>
          <div>
            <SwiperSlider />
          </div>
        </div>
      </div>
      </div>
      
   
  );
};

export default Features;
