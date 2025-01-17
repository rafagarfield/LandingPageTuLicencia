import Image from "next/image";
import React from "react";

function About() {
  return (
    <div className="m-[30px]   lg:flex lg:gap-32 lg:mx-[30px] ">
      {/* <div className="flex justify-center ">
        <Image
          src="/icon/about.svg"
          alt="hero"
          className="w-full h-auto object-cover mx-auto"
        />
      </div> */}

      <div className="flex justify-center w-full lg:w-max">
        <Image
          src="/icon/about.svg"
          alt="hero"
          width={0} // Esto es obligatorio pero se ignorará al usar style
          height={0} // Esto también
          style={{ width: "100%", height: "auto" }} // Aquí defines 100% del ancho y alto automático
          className="object-cover lg:object-fill "
        />
      </div>

      <div className=" flex flex-col gap-[16px]    lg:py-20 h-full">
        <h2 className="text-[#115B23] text-[30px] text-center text-pretty font-bold  lg:text-start  ">
          Acercamos el gobierno a los ciudadanos
        </h2>
        <p className="text-[#717171] text-center text-[17px] text-pretty lg:[20px]  lg:text-start lg:w-[601px]">
          No más días perdidos en largas filas ni tener que regresar porque
          olvidaste un documento. Gestionamos tus trámites desde la solicitud
          hasta la entrega de licencias y permisos, te ayudamos con las deudas o
          gravámenes y hasta negociamos planes de pago. Nos encargamos de todo.
        </p>
      </div>
    </div>
  );
}

export default About;
