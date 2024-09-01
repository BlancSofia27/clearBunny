
import mollyHero from '../assets/molly1.png'
export default function Hero() {
  return (
    <section className="text-gray-600 body-font bg-whitee rounded-bl-[25px]">
      <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
        <div className="flex justify-center items-center lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 sm:mb-2">
          <img
            className="xl:w-[360px] object-cover object-center rounded-xl"
            alt="hero"
            src={mollyHero}
          />
        </div>
        <div className="xs:bg-opacity-5 xs:p-4 xs:mb-5  lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center sm:mb-4 lg:p-10 bg-zinc-700 bg-opacity-35 rounded-sm shadow-xl  justify-center">
          <h1 className=" xs:text-white title-font sm:text-4xl text-3xl mb-4 font-medium text-celeste">
            Clear Bunny 
            <br className=" lg:inline-block " />
            Webs simples, resultados eficientes.
          </h1>
          <p className="mb-2 leading-relaxed text-white">
            Tu aliado para crear landing pages efectivas y visualmente
            atractivas, Convierte visitantes en clientes con facilidad.
          </p>
          <div className="flex justify-center">
            <a className="xs:text-sm inline-flex font-regular text-white bg-celeste border-0 py-2 px-6 my-4 focus:outline-none rounded text-lg transition duration-1000 ease-in-out transform hover: hover:bg-white hover:text-celeste"
            href="https://wa.me/+5491166941550?text=Hola%2C%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios."

            >
              Contactar a un asesor
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
