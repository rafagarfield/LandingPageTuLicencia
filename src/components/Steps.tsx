import Image from "next/image";
import React from "react";

function Steps() {
  return (
    <div className="w-full justify-center items-center hidden lg:flex flex-col lg:mt-[-100px] ">
        <div>
            <Image
              src="/icon/person1.svg"
              alt="Step 1"
              width={200}
              height={200}
            />
  
        </div>
        
        <div className="relative  flex justify-center items-center gap-6 p-10  bg-[#509920]  rounded-[43px] w-[80%]  h-[380px] ">
        <h2 className="text-[#fff] text-[24px] font-bold">Cónoce como funciona</h2>

      <div className=" top-[-100px] left-[6.5rem] CardFeatureLeft absolute flex flex-col gap-2 px-8 py-6 bg-white  rounded-[18px] w-[361px]">
        <div className="flex flex-row gap-6  items-center">
          <h3 className="text-[24px]  text-[#115B23] font-bold">
            Selecciona el trámite
          </h3>
          <img src="/icon/money.svg" alt="Step 1" />
        </div>
        <p className="text-[#717171] text-[18px] pb-6 ">
          Ingresa tus datos y realiza el pago del trámite seleccionado
          incluyendo los sellos.
        </p>
      </div>

      <div className=" top-[-100px] right-[6.5rem] CardFeatureRight absolute flex flex-col gap-2 px-8 py-6 bg-white  rounded-[18px]  w-[361px]">
        <div className="flex flex-row gap-6  items-center">
          <h3 className="text-[24px]  text-[#115B23] font-bold">
            Selecciona el trámite
          </h3>
          <img src="/icon/money.svg" alt="Step 1" />
        </div>
        <p className="text-[#717171] text-[18px] pb-6 ">
          Ingresa tus datos y realiza el pago del trámite seleccionado
          incluyendo los sellos.
        </p>
      </div>

      <div className="bottom-[-100px] left-[6.5rem] CardFeatureLeft absolute flex flex-col gap-2 px-8 py-6 bg-white  rounded-[18px]  w-[361px]">
        <div className="flex flex-row gap-6  items-center">
          <h3 className="text-[24px]  text-[#115B23] font-bold">
            Selecciona el trámite
          </h3>
          <img src="/icon/money.svg" alt="Step 1" />
        </div>
        <p className="text-[#717171] text-[18px] pb-6 ">
          Ingresa tus datos y realiza el pago del trámite seleccionado
          incluyendo los sellos.
        </p>
      </div>

      <div className="bottom-[-100px] right-[6.5rem] CardFeatureRight absolute flex flex-col gap-2 px-8 py-6 bg-white  rounded-[18px] w-[361px]">
        <div className="flex flex-row gap-6  items-center">
          <h3 className="text-[24px]  text-[#115B23] font-bold">
            Selecciona el trámite
          </h3>
          <img src="/icon/money.svg" alt="Step 1" />
        </div>
        <p className="text-[#717171] text-[18px] pb-6 ">
          Ingresa tus datos y realiza el pago del trámite seleccionado
          incluyendo los sellos.
        </p>
      </div>

    </div>
    </div>
    
  );
}

export default Steps;
