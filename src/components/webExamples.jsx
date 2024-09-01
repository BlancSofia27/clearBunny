import React from "react"
import agencia from "../assets/agenciaWeb.jpeg"
import barberia from "../assets/barberiaWeb.jpeg"
import consultorio from "../assets/consultorioWeb.jpeg"
const WebExamples = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id="webExamples" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto sm:py-2 lg:py-11 xl:py-24">
        <div className="flex flex-wrap -m-4 font-regular">
          <div className="p-4 md:w-1/3">
            <div className="shadow-2xl h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden group">
              <img
                className="blog-img lg:h-48 md:h-36 w-full object-cover object-center transition-filter duration-300 ease-in-out"
                src={agencia}
                alt="blog"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORIA
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Agencia
                </h1>
                <p className="leading-relaxed mb-3">
                  Ideal para la venta de packs para agencias.
                </p>
                <div className="flex items-center flex-wrap">
                  <a
                    className="text-celeste inline-flex items-center md:mb-2 lg:mb-0"
                    href="/Landing/Tourism"
                  >
                    Visitar
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  
                  
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="shadow-2xl h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden group">
              <img
                className="blog-img lg:h-48 md:h-36 w-full object-cover object-center transition-filter duration-300 ease-in-out"
                src={barberia}
                alt="blog"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORIA
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Barberia y Salon de peluqueria
                </h1>
                <p className="leading-relaxed mb-3">
                  Diseñada para presentar servicios y un staff de trabajo.
                </p>
                <div className="flex items-center flex-wrap">
                  <a
                    className="text-celeste inline-flex items-center md:mb-2 lg:mb-0"
                    href="/Landing/BarberShop"
                  >
                    Visitar
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                 
                 
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="shadow-2xl h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden group">
              <img
                className="blog-img lg:h-48 md:h-36 w-full object-cover object-center transition-filter duration-300 ease-in-out"
                src={consultorio}
                alt="blog"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORIA
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Consultorio medico o estetica
                </h1>
                <p className="leading-relaxed mb-3">
                  Lista para exihibir los mejores trabajos y destacar un perfil.
                </p>
                <div className="flex items-center flex-wrap ">
                  <a
                    className="text-celeste inline-flex items-center md:mb-2 lg:mb-0"
                    href="Landing/Consulting"
                  >
                    Visitar
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                 
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

WebExamples.displayName = "WebExamples"
export default WebExamples
