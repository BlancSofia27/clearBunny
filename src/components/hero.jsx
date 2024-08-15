
import mollyHero from '../../public/molly1.png'
export default function Hero() {
  return (
    <section className="text-gray-600 body-font bg-whitee rounded-bl-[25px]">
      <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
        <div className="flex justify-center items-center lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 sm:mb-2">
          <img
            className="object-cover object-center rounded-xl"
            alt="hero"
            src={mollyHero}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center sm:mb-4 lg:p-10">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-celeste">
            Clear Bunny 
            <br className=" lg:inline-block" />
            Webs simples, resultados eficientes
          </h1>
          <p className="mb-8 leading-relaxed">
            Tu aliado para crear landing pages efectivas y visualmente
            atractivas. Convierte visitantes en clientes con facilidad
          </p>
          <div className="flex justify-center">
            <button className="inline-flex font-regular text-white bg-celeste border-0 py-2 px-6 focus:outline-none rounded text-lg transition duration-1000 ease-in-out transform hover: hover:bg-white hover:text-celeste">
              Contactar a un asesor
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
