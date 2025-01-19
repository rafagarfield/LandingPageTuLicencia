import React from 'react'

function Question() {
  return (
    <div className='flex flex-col gap-4 mb-10'>
        <h2 className='text-[24px] font-bold text-[#11793D] text-center'>Preguntas frecuentes</h2>
      <div className='flex flex-row justify-center items-center gap-4'>
        <button className='px-10 py-2 text-[16px] font-medium rounded-[28px] text-[#115B23] border border-[#115B23]'>General</button>
        <button className='px-10 py-2 text-[16px] font-medium rounded-[28px] text-[#115B23] border border-[#115B23]'>Proceso</button>
        {/* <button className='px-10 py-2 text-[16px] font-medium rounded-[28px] text-[#115B23] border border-[#115B23]'>Tiempo</button>
        <button className='px-10 py-2 text-[16px] font-medium rounded-[28px] text-[#115B23] border border-[#115B23]'>Costos</button> */}
      </div>

      <div>
        
      </div>
    </div>
  )
}

export default Question
