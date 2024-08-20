import React from "react";
import barber1 from "../../assets/barberShop/1.png";
import barber2 from "../../assets/barberShop/2.png";
import barber3 from "../../assets/barberShop/3.png";
import barber4 from "../../assets/barberShop/4.png";
import barber5 from "../../assets/barberShop/5.png";
import barber6 from "../../assets/barberShop/6.png";

const Services = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id="services" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Nuestros Servicios
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            En Blind Barber, ofrecemos una variedad de servicios diseñados para
            hacerte lucir y sentirte mejor. Nuestro equipo de barberos expertos
            está dedicado a proporcionar una experiencia excepcional, utilizando
            técnicas modernas y productos de alta calidad.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative group">
              <img
                alt="Color"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={barber1}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h2 className="tracking-widest text-sm title-font font-medium text-marronB mb-1">
                  Color
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  $40 USD
                </h1>
                <p className="leading-relaxed">
                  Dale a tu cabello un toque de color vibrante y moderno con nuestros servicios de coloración profesional.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative group">
              <img
                alt="Afeitado tradicional"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={barber2}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h2 className="tracking-widest text-sm title-font font-medium text-marronB mb-1">
                  Afeitado Tradicional
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  $25 USD
                </h1>
                <p className="leading-relaxed">
                  Experimenta un afeitado clásico con toallas calientes y navaja recta para un acabado suave y perfecto.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative group">
              <img
                alt="Tratamiento de Barba"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={barber3}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h2 className="tracking-widest text-sm title-font font-medium text-marronB mb-1">
                  Tratamiento de Barba
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  $30 USD
                </h1>
                <p className="leading-relaxed">
                  Mantén tu barba en perfectas condiciones con nuestro tratamiento completo que incluye recorte y acondicionamiento.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative group">
              <img
                alt="Corte de Cabello"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={barber4}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h2 className="tracking-widest text-sm title-font font-medium text-marronB mb-1">
                  Corte de Cabello
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  $35 USD
                </h1>
                <p className="leading-relaxed">
                  Consigue el look perfecto con nuestros cortes de cabello personalizados para cada estilo y personalidad.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative group">
              <img
                alt="Peinado"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={barber5}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h2 className="tracking-widest text-sm title-font font-medium text-marronB mb-1">
                  Peinado
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  $20 USD
                </h1>
                <p className="leading-relaxed">
                  Completa tu visita con un peinado profesional que te hará destacar en cualquier ocasión.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative group">
              <img
                alt="Masaje Capilar"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={barber6}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h2 className="tracking-widest text-sm title-font font-medium text-marronB mb-1">
                  Masaje Capilar
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  $15 USD
                </h1>
                <p className="leading-relaxed">
                  Relájate con un masaje capilar que revitaliza tu cuero cabelludo y mejora la circulación sanguínea.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Services.displayName = "Services";
export default Services;


