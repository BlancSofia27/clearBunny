import React from 'react';
import inv1 from '../assets/1.png'
import inv2 from '../assets/2.png'
import inv3 from '../assets/3.png'
import inv4 from '../assets/4.png'
import inv5 from '../assets/5.png'
import inv6 from '../assets/6.png'

const Content1 = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id="content" className="text-gray-600 body-font w-full">
  <div className="w-full px-5 py-5 mx-auto font-regular">
    <div className="xs:mb-5 text-center mb-20 sm:mb-5 sm:py-6">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 lg:text-xl">
        En la actualidad una landing Page es crucial para tu negocio o emprendimiento.
      </h1>
      <p className="text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
        Por eso abajo de dejamos una lista de aspectos clave.
      </p>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-celeste inline-flex"></div>
      </div>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 sm:w-1/2 md:w-1/2 lg:w-1/3 flex">
        <div className="flex flex-col text-center items-center bg-greyStep bg-opacity-45 rounded-lg p-4 w-full">
          <img className="w-1/4 rounded-full " src={inv1} alt="" />
          <div className="flex-grow">
            <h2 className="text-gray-900 text-xl title-font font-medium my-4">Identidad de Marca Clara</h2>
            <p className="leading-relaxed text-sm">
              Una landing page dedicada permite que tu marca se destaque y tenga una presencia en línea distintiva. Puedes personalizar el diseño y el contenido para reflejar la identidad visual.
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 sm:w-1/2 md:w-1/2 lg:w-1/3 flex">
        <div className="flex flex-col text-center items-center bg-greyStep bg-opacity-45 rounded-lg p-4 w-full">
          <img className="w-1/4 rounded-full " src={inv2} alt="" />
          <div className="flex-grow">
            <h2 className="text-gray-900 text-xl title-font font-medium my-4">Optimización de ventas</h2>
            <p className="leading-relaxed text-sm">
              Al dirigir el tráfico a tu landing page, puedes capturar consumidores específicos y calificados para tu negocio. Puedes diseñar formularios de contacto o suscripción que se alineen con los productos o servicios lo que te permite construir una lista de clientes potenciales interesados en lo que ofreces.
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 sm:w-1/2 md:w-1/2 lg:w-1/3 flex">
        <div className="flex flex-col text-center items-center bg-greyStep bg-opacity-45 rounded-lg p-4 w-full">
          <img className="w-1/4 rounded-full " src={inv3} alt="" />
          <div className="flex-grow">
            <h2 className="flex items-center justify-center text-gray-900 text-xl title-font font-medium my-4">Llamada a la acción</h2>
            <p className="leading-relaxed text-sm">
              Entendemos que una landing page efectiva va más allá del aspecto visual. Nos enfocamos en la optimización para conversaciones, implementando estrategias probadas para maximizar y ayudar a nuestros clientes a alcanzar sus objetivos comerciales.
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 sm:w-1/2 md:w-1/2 lg:w-1/3 flex">
        <div className="flex flex-col text-center items-center bg-greyStep bg-opacity-45 rounded-lg p-4 w-full">
          <img className="w-1/4 rounded-full" src={inv4} alt="" />
          <div className="flex-grow">
            <h2 className="text-gray-900 text-xl title-font font-medium my-4">Enfoque en la Experiencia del Usuario</h2>
            <p className="leading-relaxed text-sm">
              Reconocemos la importancia de ofrecer una experiencia del usuario excepcional en cada interacción en línea. Por lo tanto, nos esforzamos por diseñar landing pages intuitivas, fáciles de navegar y centradas en las necesidades y expectativas de los visitantes, lo que aumenta la probabilidad de que los clientes potenciales tomen medidas.
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 sm:w-1/2 md:w-1/2 lg:w-1/3 flex">
        <div className="flex flex-col text-center items-center bg-greyStep bg-opacity-45 rounded-lg p-4 w-full">
          <img className="w-1/4 rounded-full" src={inv5} alt="" />
          <div className="flex-grow">
            <h2 className="flex items-center justify-center text-gray-900 text-xl title-font font-medium my-4">Accesibilidad Global</h2>
            <p className="leading-relaxed text-sm">
              Al tener una landing page en línea, vas a llegar a clientes potenciales en todo el mundo las 24 horas del día, los 7 días de la semana. Esto amplía tu alcance y te permite llegar a una audiencia más amplia sin límites geográficos, lo que puede aumentar las oportunidades de negocio y ventas.
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 sm:w-1/2 md:w-1/2 lg:w-1/3 flex">
        <div className="flex flex-col text-center items-center bg-greyStep bg-opacity-45 rounded-lg p-4 w-full">
          <img className="w-1/4 rounded-full" src={inv6} alt="" />
          <div className="flex-grow">
            <h2 className="flex items-center justify-center text-gray-900 text-xl title-font font-medium my-4">Costo-Efectividad</h2>
            <p className="leading-relaxed text-sm">
              En comparación con otras formas de publicidad y marketing, crear y mantener una landing page es relativamente económico. Puedes utilizar herramientas y plataformas de diseño web asequibles para construir tu landing page, lo que te permite promocionar los productos y servicios de manera rentable y con un alto potencial de retorno de la inversión.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  

  
  );
});

Content1.displayName = 'Content1';
export default Content1;


