import Image from "next/image";
import React from "react";

function Panel() {
  return (
    <div className="bg-[#11793D] mx-[24px] lg:mx-20 px-4 py-8 rounded-[36px] flex flex-col justify-center items-center gap-6 mb-10 lg:grid lg:grid-cols-2 lg:p-20 ">
      <div className="flex flex-col justify-center items-center gap-8 lg:items-start">
        <h2 className="text-[24px] font-bold text-[#ffffff] text-center">
          Una nueva manera de realizar tus trámites
        </h2>
        <hr className="h-[2px] bg-white border-0 w-[40%] text-center" />
        <p className=" text-[#fff] text-center text-[16px] lg:text-start ">
          Utiliza las ventajas de la comunicación y procesos digitales con el
          apoyo inmediato y constante de nuestros especialistas, disponibles por
          teléfono, chat y WhatsApp a tu conveniencia
        </p>
        <button className=" bg-white border border-[#fff] rounded-[25px] px-[32px] py-[14px] text-[#11793d] text-[16px] font-bold">
          Comienza ahora
        </button>
      </div>

      <div className="flex justify-center items-center">
        <Image
          src="/icon/panel.svg"
          alt="Trámites de personas"
          width={200}
          height={200}
          className="lg:w-[300px] lg:h-[300px]"
        />
      </div>
    </div>
  );
}

export default Panel;
