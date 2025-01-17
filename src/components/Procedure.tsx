import Image from "next/image";
import React from "react";

function Procedure() {
  return (
   
    <div className="mb-10">
      <div className="flex flex-col justify-center items-center gap-4 ">
        <h2 className="text-[#11793D] text-[24px] font-bold ">¿Estás Listo?</h2>
        <p className="text-[#717171] text-[20px] text-center">
          Selecciona el servicio que necesitas
        </p>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row  gap-4 lg:gap-[150px]  justify-center items-center">
          <div className="lg:w-[300px] flex justify-center items-center">
            <Image
              src="/icon/personProcedure.svg"
              alt="Trámites de personas"
              width={200}
              height={200}
            />
          </div>
          <div className=" lg:w-[300px] flex justify-center items-center">
            <Image
              src="/icon/carProcedure.svg"
              alt="Trámites de Vehiculos"
              width={200}
              height={200}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:gap-[150px] lg:flex-row  p-4   ">
          <button className="px-[20px] py-[10px]   border-[1px] border-[#1A7261] rounded-[25px] text-[#1A7261] text-center text-[16px] font-medium w-[240px] lg:w-[300px]">
            Trámites de personas
          </button>
          <button className="px-[20px] py-[10px]   border-[1px] border-[#1A7261] rounded-[25px] text-[#1A7261] text-center text-[16px] font-medium w-[240px] lg:w-[300px]  ">
            Trámites de vehículos
          </button>
        </div>
      </div>
    </div>
  );
}

export default Procedure;
