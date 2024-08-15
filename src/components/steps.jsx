import React from "react"
import imgDemo from '../../public/imgDemo.png'
const Steps = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id="steps" className="text-gray-600 body-font bg-greyStep">
  <div className="container px-5 py-24 mx-auto flex flex-wrap sm:py-5 sm:px-0">
    <div className="flex w-full md:flex-col lg:flex-row">
      <div className="lg:w-2/5 md:w-full lg:pr-10 md:py-6 flex flex-col">
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-celeste inline-flex items-center justify-center text-white relative z-10">
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
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
              STEP 1
            </h2>
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
              Consulta y Análisis
            </h2>
            <p className="leading-relaxed">
              En esta etapa, nos reunimos contigo para comprender la
              estética de tu comercio o emprendimiento, así como el público
              objetivo al que va dirigido. Realizamos un análisis detallado
              de tus necesidades y preferencias para desarrollar un diseño
              único y personalizado que refleje la identidad de tu marca.
            </p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-celeste inline-flex items-center justify-center text-white relative z-10">
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
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
              STEP 2
            </h2>
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
              Diseño y Demostración
            </h2>
            <p className="leading-relaxed">
              Basándonos en la información recopilada, creamos una
              demostración inicial de tu sitio web. Esta demostración te
              permitirá visualizar cómo se verá y funcionará tu página web.
              Evaluamos juntos los aspectos que necesitan cambios y
              realizamos ajustes según tus comentarios para asegurarnos de
              que el diseño final cumpla con tus expectativas y requisitos.
            </p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-celeste inline-flex items-center justify-center text-white relative z-10">
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
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
              STEP 3
            </h2>
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
              Integración de Redes Sociales y Llamados a la Acción
            </h2>
            <p className="leading-relaxed">
              Una vez que estemos satisfechos con el diseño, procedemos a
              integrar tus redes sociales en el sitio web.
              También trabajamos en la implementación efectiva de llamados a
              la acción (CTA) para guiar a los visitantes hacia las acciones
              deseadas, como realizar una compra, agendar un turno mediante instagram o whatsapp
               o contactar contigo.
            </p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-celeste inline-flex items-center justify-center text-white relative z-10">
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
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
              STEP 4
            </h2>
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
              Despliegue en la Nube
            </h2>
            <p className="leading-relaxed">
              Una vez completadas las etapas de diseño y desarrollo, subimos
              tu página web a la nube para garantizar el mayor alcance y
              disponibilidad posible. Utilizamos plataformas confiables y
              seguras para alojar tu sitio web, asegurando así una
              experiencia de usuario óptima y una disponibilidad constante.
            </p>
          </div>
        </div>
        <div className="flex relative">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-celeste inline-flex items-center justify-center text-white relative z-10">
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
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
              FINISH
            </h2>
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
              Entrega y Soporte Continuo
            </h2>
            <p className="leading-relaxed">
              Finalmente, entregamos tu página web completamente funcional y
              lista para su uso y te ofrecemos soporte continuo para cualquier
              consulta o ajuste adicional que puedas necesitar en el futuro.
              Con estos pasos nos comprometemos a ofrecerte un proceso transparente y efectivo
              para la creación de tu sitio web, garantizando resultados que
              superen tus expectativas y contribuyan al éxito de tu negocio
              en línea.
            </p>
          </div>
        </div>
      </div>
      <div className='w-full h-full lg:w-200px lg:200px'>
      <img
        className="w-full h-full object-cover object-center rounded-lg"
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
