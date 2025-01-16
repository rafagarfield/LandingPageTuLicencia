import Image from "next/image";
import React from "react";

function Panel() {
  return (
    <div className="bg-[#11793D] mx-[24px] p-4 rounded-[36px] flex flex-col justify-center items-center gap-6">
      <h2 className="text-[24px] font-bold text-[#ffffff] text-center">
        Una nueva manera de realizar tus trámites
      </h2>
      <hr className="h-[2px] bg-white border-0 w-[50%] text-center" />
      <p className=" text-[#fff] text-center text-[16px] ">
        Utiliza las ventajas de la comunicación y procesos digitales con el
        apoyo inmediato y constante de nuestros especialistas, disponibles por
        teléfono, chat y WhatsApp a tu conveniencia
      </p>
      <button className=" bg-white border border-[#fff] rounded-[25px] px-[32px] py-[14px] text-[#11793d] text-[16px] font-bold">
        Comienza ahora
      </button>
      <div>
        <Image
          src="/icon/panel.svg"
          alt="Trámites de personas"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}

export default Panel;
