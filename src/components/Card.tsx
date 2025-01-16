import React from 'react'

function Card() {
  return (
    
    <div className=" flex flex-col gap-2 px-5 p-[20px]">
    <div className="flex flex-row gap-6  items-center">
      <h3 className="text-[18px]  text-[#115B23] font-bold">
        Selecciona el trámite
      </h3>
      <img src="/icon/money.svg" alt="Step 1" />
    </div>
    <p className="text-[#717171] text-[16px] pb-6 ">
      Ingresa tus datos y realiza el pago del trámite seleccionado incluyendo
      los sellos.
    </p>
  </div>

  )
}

export default Card
