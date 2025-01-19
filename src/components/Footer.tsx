import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="mx-6 lg:p-14">
        <div className="lg:flex lg:flex-row lg:gap-8 ">
      <div className="flex flex-col gap-4 mb-3 lg:justify-start lg:items-start lg:w-[20%]">
        <div>
          <Image
            src="/icon/logoFooter.svg"
            alt="logo footer"
            width={150}
            height={150}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[14px] font-semibold text-[#717171]">
            Olvídate de las filas y esperas
          </p>
          <p className="text-[14px]  text-[#717171]">
            Dirección: 1452 Av. Manuel Fernández Juncos, San Juan, Puerto Rico,
            00909
          </p>
        </div>

        <div>
          <div className="flex flex-row gap-4 ">
            <Image
              src="/icon/linkedin.svg"
              alt="linkedin"
              width={30}
              height={30}
            />
            <Image
              src="/icon/instagram.svg"
              alt="Instagram"
              width={30}
              height={30}
            />
            <Image
              src="/icon/facebook.svg"
              alt="Facebook"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:flex lg:flex-row lg:gap-10 lg:w-[80%] lg:justify-center ">
        
          <div className="flex flex-col gap-3">
            <h3 className="text-[#11793d] text-[20px] font-bold">INICIO</h3>
            <a href="" className="text-[#717171] text-[14px]">
              Quienes somos
            </a>
            <a href="" className="text-[#717171] text-[14px]">
              Nuestros Servicios
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-[#11793d] text-[20px] font-bold">POLÍTICAS</h3>
            <a href="" className="text-[#717171] text-[14px]">
              Política de privacidad
            </a>
            <a href="" className="text-[#717171] text-[14px]">
              Términos y Condiciones
            </a>
          </div>
        

        
          <div className="flex flex-col gap-3">
            <h3 className="text-[#11793d] text-[20px] font-bold">
              ¿CÓMO FUNCIONA?
            </h3>
            <a href="" className="text-[#717171] text-[14px]">
              Nuestros procesos
            </a>
            <a href="" className="text-[#717171] text-[14px]">
              Acceder a su cuenta
            </a>
            <a href="" className="text-[#717171] text-[14px]">
              Registrarse
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-[#11793d] text-[20px] font-bold">
              CONTÁCTENOS
            </h3>
            <a href="" className="text-[#717171] text-[14px]">
              (787) 710-7426
            </a>
            
            <a href="" className="text-[#717171] text-[14px]">
              info@tulicenciapr.com
            </a>
          </div>
        
      </div>
    </div>

    <div className="text-[#717171] text-[14px] flex flex-col gap-2 mt-5 lg:flex-row lg:justify-between lg:pr-30">
        <p >
          © 2024 Todos los derechos reservados.
        </p>
        <p >Diseño y Desarrollo por Online Healt</p>
  
    </div>
    </div>
    
  );
}

export default Footer;
