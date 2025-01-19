"use client"
import React, { useState } from "react";

function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<"general" | "proceso" | "tiempo" | "costos">("general");
  const [openDetail, setOpenDetail] = useState<number | null>(null);

  const categories = [
    { id: "general", label: "General" },
    { id: "proceso", label: "Proceso" },
    { id: "tiempo", label: "Tiempo" },
    { id: "costos", label: "Costos" },
  ];

  const faqs: Record<"general" | "proceso" | "tiempo" | "costos", { question: string; answer: string }[]> = {
    general: [
      {
        question: "¿En cuánto tiempo recibo mi licencia?",
        answer:
          "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu.",
      },
      {
        question: "¿Puedo recibir el examen médico “online”?",
        answer:
          "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu.",
      },
      {
        question: "¿Puedo recibir el examen médico “online”?",
        answer:
          "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu.",
      },
      {
        question: "¿Puedo recibir el examen médico “online”?",
        answer:
          "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu.",
      }

    ],
    proceso: [
      {
        question: "¿Cómo es el proceso para obtener la licencia?",
        answer:
          "El proceso incluye llenar un formulario, realizar un examen médico y presentar documentación requerida.",
      },
    ],
    tiempo: [
      {
        question: "¿Cuánto dura el trámite?",
        answer:
          "El trámite tiene un tiempo estimado de 7 días hábiles dependiendo de la localidad.",
      },
    ],
    costos: [
      {
        question: "¿Cuáles son los costos del trámite?",
        answer: "El costo varía según el tipo de licencia. Consulte más detalles en nuestra web.",
      },
    ],
  };

  const toggleDetail = (index: number) => {
    setOpenDetail(openDetail === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto my-8 p-4 ">
      <h2 className='text-[24px] font-bold text-[#11793D] text-center mb-8'>Preguntas frecuentes</h2>
      {/* Categorías */}

      {/* <div className="flex gap-4 justify-center mb-6 ">
        {categories.map((category) => (
          
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id as "general" | "proceso" | "tiempo" | "costos")}
            className={`px-10 py-2 text-[16px] font-medium rounded-[28px] lg:hidden md:hidden ${
              activeCategory === category.id
                ? "bg-[#115B23] text-white"
                : "bg-white text-[#115B23] border border-[#115B23]"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div> */}

      <div className=" gap-4 justify-center mb-6 hidden  lg:flex md:flex  ">
        {categories.map((category) => (
          
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id as "general" | "proceso" | "tiempo" | "costos")}
            className={`px-10 py-2 text-[16px] font-medium rounded-[28px]  ${
              activeCategory === category.id
                ? "bg-[#115B23] text-white"
                : "bg-white text-[#115B23] border border-[#115B23]"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Preguntas y Respuestas */}
      <div className="space-y-4">
        {faqs[activeCategory]?.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm">
            <div
              className="flex justify-between items-center p-4 cursor-pointer "
              onClick={() => toggleDetail(index)}
            >
              <h3 className="font-medium ">{faq.question}</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transition-transform ${
                  openDetail === index ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {openDetail === index && (
              <div className="p-4 text-gray-600  ">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQSection;
