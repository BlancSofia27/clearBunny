import React from "react"
import staff1 from "../../assets/barberShop/staff1.png";
import staff2 from "../../assets/barberShop/staff2.png";
import staff3 from "../../assets/barberShop/staff3.png";
// Aquí podrías importar tu SVG como un componente React, o simplemente insertarlo directamente en el JSX

const Staff = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id="staff" className="text-gray-600 body-font">
      <div className="container px-5 pt-8 pb-24 mx-auto">
        {/* Icono SVG */}
        <div className="flex justify-center mb-4">
          <svg
            fill="#000000"
            width="100px"
            height="100px"
            viewBox="-3 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>group</title>
            <path d="M20.906 20.75c1.313 0.719 2.063 2 1.969 3.281-0.063 0.781-0.094 0.813-1.094 0.938-0.625 0.094-4.563 0.125-8.625 0.125-4.594 0-9.406-0.094-9.75-0.188-1.375-0.344-0.625-2.844 1.188-4.031 1.406-0.906 4.281-2.281 5.063-2.438 1.063-0.219 1.188-0.875 0-3-0.281-0.469-0.594-1.906-0.625-3.406-0.031-2.438 0.438-4.094 2.563-4.906 0.438-0.156 0.875-0.219 1.281-0.219 1.406 0 2.719 0.781 3.25 1.938 0.781 1.531 0.469 5.625-0.344 7.094-0.938 1.656-0.844 2.188 0.188 2.469 0.688 0.188 2.813 1.188 4.938 2.344zM3.906 19.813c-0.5 0.344-0.969 0.781-1.344 1.219-1.188 0-2.094-0.031-2.188-0.063-0.781-0.188-0.344-1.625 0.688-2.25 0.781-0.5 2.375-1.281 2.813-1.375 0.563-0.125 0.688-0.469 0-1.656-0.156-0.25-0.344-1.063-0.344-1.906-0.031-1.375 0.25-2.313 1.438-2.719 1-0.375 2.125 0.094 2.531 0.938 0.406 0.875 0.188 3.125-0.25 3.938-0.5 0.969-0.406 1.219 0.156 1.375 0.125 0.031 0.375 0.156 0.719 0.313-1.375 0.563-3.25 1.594-4.219 2.188zM24.469 18.625c0.75 0.406 1.156 1.094 1.094 1.813-0.031 0.438-0.031 0.469-0.594 0.531-0.156 0.031-0.875 0.063-1.813 0.063-0.406-0.531-0.969-1.031-1.656-1.375-1.281-0.75-2.844-1.563-4-2.063 0.313-0.125 0.594-0.219 0.719-0.25 0.594-0.125 0.688-0.469 0-1.656-0.125-0.25-0.344-1.063-0.344-1.906-0.031-1.375 0.219-2.313 1.406-2.719 1.031-0.375 2.156 0.094 2.531 0.938 0.406 0.875 0.25 3.125-0.188 3.938-0.5 0.969-0.438 1.219 0.094 1.375 0.375 0.125 1.563 0.688 2.75 1.313z"></path>
          </svg>
        </div>

        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Conoce nuestro Staff
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Agenda tu turno con el profesional que se adapte a tus preferencias{" "}
          </p>
        </div>

        <div className="flex flex-wrap -m-2">
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={staff3}
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Lucas Acosta
                </h2>
                <p className="text-gray-500">
                  <a
                    href="https://wa.me/whatsapp_number?text=Hola,%20me%20gustaría%20agendar%20un%20turno%20con%20Lucas"
                    className="text-marronB hover:text-blue-700 transition-colors duration-300"
                  >
                    Agendar
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={staff1}
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Federico Beyke
                </h2>
                <p className="text-gray-500">
                  <a
                    href="https://wa.me/whatsapp_number?text=Hola,%20me%20gustaría%20agendar%20un%20turno%20con%20Fede"
                    className="text-marronB hover:text-blue-700 transition-colors duration-300"
                  >
                    Agendar
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={staff2}
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  German Borsotti
                </h2>
                <p className="text-gray-500">
                  <a
                    href="https://wa.me/whatsapp_number?text=Hola,%20me%20gustaría%20agendar%20un%20turno%20con%20German"
                    className="text-marronB hover:text-blue-700 transition-colors duration-300"
                  >
                    Agendar
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

Staff.displayName = "Staff"
export default Staff
