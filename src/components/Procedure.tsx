import Image from 'next/image';
import React from 'react';

function Procedure() {
  return (
    <div className='mb-10'>
      <div className='flex flex-col justify-center items-center gap-4 '>
        <h2 className='text-[#11793D] text-[24px] font-bold '  >¿Estás Listo?</h2>
        <p className='text-[#717171] text-[20px] text-center'>Selecciona el servicio que necesitas</p>
      </div>
      <div className='flex flex-col gap-2 justify-center items-center p-2'>
        {/* Trámites de personas */}
        <div className='flex flex-col justify-center items-center'>
          <div >
            <Image
              src="/icon/personProcedure.svg"
              alt="Trámites de personas"
              width={200}
              height={200}
            />
          </div>
          <button className='px-[20px] py-[10px] lg:px-[32px] lg:py-[14px] border-[1px] border-[#1A7261] rounded-[25px] text-[#1A7261] text-center text-[16px] font-medium whitespace-nowrap '>Trámites de personas</button>
        </div>
        {/* Trámites de vehículos */}
        <div className='flex flex-col justify-center items-center'>
          <div >
            <Image
              src="/icon/carProcedure.svg"
              alt="Trámites de vehículos"
              width={200}
              height={200}
            />
          </div>
          <button className='px-[20px] py-[10px] lg:px-[32px] lg:py-[14px] border-[1px] border-[#1A7261] rounded-[25px] text-[#1A7261] text-center text-[16px] font-medium whitespace-nowrap min-w-[150px]'>Trámites de vehículos</button>
        </div>
      </div>
    </div>
  );
}

export default Procedure;
