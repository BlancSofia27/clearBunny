import React from "react"
import imgDemo from "../assets/imgDemo.png"

const Steps = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      id="steps"
      className="text-gray-600 body-font bg-greyStep flex justify-center items-center"
    >
      <div className=" px-5 py-24 w-full flex justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Steps Container */}
          <div className="lg:w-2/5 md:w-full lg: md:py-6 md:px-4 flex flex-col items-center lg:items-start">
          <div className="mb-20">
            <h1 className="font-medium title-font xl:text-xl text-center xs:text-lg text-celeste my-4 tracking-wider" >
              Creamos la Landing Page Perfecta en 4 Sencillos Pasos
            </h1>
            <h3 className="font-medium title-font lg:text-lg text-center sm:text-sm text-gray-900 mb-1 tracking-wider"> En Clear Bunny, entendemos que una landing page efectiva es crucial
              para el éxito de tu negocio. Por eso, hemos perfeccionado un
              proceso de 4 pasos que garantiza resultados excepcionales. Te
              acompañaremos en cada fase para que puedas atraer a más clientes y
              aumentar tu alcance.Abajo te informamos los procesos.</h3>
              </div>
            {[
              {
                step: "STEP 1",
                title: "Consulta y Análisis",
                description:
                  "En esta etapa, nos reunimos con vos para comprender la estética de tu comercio o emprendimiento, así como el público objetivo al que va dirigido. Realizamos un análisis detallado de tus necesidades y preferencias para desarrollar un diseño único y personalizado que refleje la identidad de tu marca.",
                icon: (
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                ),
              },
              {
                step: "STEP 2",
                title: "Diseño y Demostración",
                description:
                  "Basándonos en la información recopilada, creamos una demostración inicial de tu sitio web. Esta demostración te permitirá visualizar cómo se verá y funcionará tu página web. Evaluamos juntos los aspectos que necesitan cambios y realizamos ajustes según tus comentarios para asegurarnos de que el diseño final cumpla con tus expectativas y requisitos.",
                icon: (
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                ),
              },
              {
                step: "STEP 3",
                title: "Integración de Redes Sociales y Llamados a la Acción",
                description:
                  "Una vez que estemos satisfechos con el diseño, procedemos a integrar tus redes sociales en el sitio web. También trabajamos en la implementación efectiva de llamados a la acción (CTA) para guiar a los visitantes hacia las acciones deseadas, como realizar una compra, agendar un turno mediante Instagram o WhatsApp o contactar con tu nogocio.",
                icon: (
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                ),
              },
              {
                step: "STEP 4",
                title: "Despliegue en la Nube",
                description:
                  "Una vez completadas las etapas de diseño y desarrollo, subimos tu página web a la nube para garantizar el mayor alcance y disponibilidad posible. Utilizamos plataformas confiables y seguras para alojar tu sitio web, asegurando así una experiencia de usuario óptima y una disponibilidad constante.",
                icon: (
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                ),
              },
              {
                step: "FINISH",
                title: "Entrega y Soporte Continuo",
                description:
                  "Finalmente, entregamos tu página web completamente funcional y lista para su uso y te ofrecemos soporte continuo para cualquier consulta o ajuste adicional que puedas necesitar en el futuro. Con estos pasos nos comprometemos a ofrecerte un proceso transparente y efectivo para la creación de tu sitio web, garantizando resultados que superen tus expectativas y contribuyan al éxito de tu negocio en línea.",
                icon: (
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                ),
              },
            ].map((step, index) => (
              <div
                key={index}
                className="relative pb-12 flex items-start w-full max-w-xl"
              >
                {index < 4 && (
                  <div className="absolute flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                )}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-celeste inline-flex items-center justify-center text-white relative z-10">
                  {step.icon}
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-xs sm:text-sm text-gray-900 mb-1 tracking-wider">
                    {step.step}
                  </h2>
                  <h2 className="font-medium title-font text-xs sm:text-sm text-gray-900 mb-1 tracking-wider">
                    {step.title}
                  </h2>
                  <p className="leading-relaxed text-xs sm:text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Image */}
          <div className="p-4 ">
            <img
              className="xl:h-[1500px] lg:w-[1000px] lg:h-[1300px] w-full h-auto object-cover object-center rounded-lg"
              src={imgDemo}
              alt="step"
            />
          </div>
        </div>
      </div>
    </section>
  )
})

Steps.displayName = "Steps"
export default Steps
