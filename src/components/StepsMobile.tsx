import React from "react";
import Image from "next/image";
import "./styles/featuresStyles.css";
import SwiperSlider from "./SwiperSlider";

function StepsMobile() {
  return (
    <div className="w-full block lg:hidden">
      <div className="flex justify-center items-center pt-4">
        <Image
          src="/icon/person1.svg"
          alt="Purple Background"
          width={100}
          height={100}
          className=""
        />
      </div>

      <div className="  flex gap-5 flex-col md:mx-20 bg-[#509920] mx-5 border p-5 border-[#ffffff] rounded-[14px] ">
        <h2 className="text-[20px] font-bold leading-8 text-white text-center">
          Conoce cómo funciona
        </h2>
        <div>
          <SwiperSlider />
        </div>
      </div>
    </div>
  );
}

export default StepsMobile;
