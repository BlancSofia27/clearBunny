import logobarber from "../assets/barberShop/logoBarber.png"
import { useRef } from "react"
import Services from "../components/barberShopComponents/services"
import HeroB from "../components/barberShopComponents/heroB"
import Map from "../components/barberShopComponents/map.jsx"
import FooterB from "../components/barberShopComponents/footer.jsx"
import Staff from "../components/barberShopComponents/staff.jsx"
export default function BarberShop() {
  const servicesRef = useRef(null)
  const mapRef = useRef(null)
  const footerBRef = useRef(null)
  const staffRef = useRef(null)
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToMap = () => {
    mapRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToFooterB = () => {
    footerBRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToStaff = () => {
    staffRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="">
      <header className="text-gray-600 body-font">
        <div className=" mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900">
            <div className="w-20 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={logobarber}
                alt="logo del barberShop"
              />
            </div>
            <span className="px-3 text-xl">Barber Shop</span>
          </a>
          <nav className="p-2 border-l  border-gray-400	flex flex-wrap items-center text-base justify-center">
            <a
              onClick={scrollToServices}
              className="p-2 hover:text-gray-900 cursor-pointer"
            >
              Servicios
            </a>
            <a
              onClick={scrollToMap}
              className="p-2 hover:text-gray-900 cursor-pointer"
            >
              Nuestra Ubicacion
            </a>
            <a
              onClick={scrollToFooterB}
              className="p-2 hover:text-gray-900 cursor-pointer"
            >
              Agenda tu cita
            </a>
            <a onClick={scrollToStaff} className="p-2 hover:text-gray-900 cursor-pointer">
              Nuestros Profesionales
            </a> 
          </nav>
          

          
        </div>
      </header>
      <HeroB />
      <Services ref={servicesRef} id="services" />
      <Staff ref={staffRef} id="staff" />
      <Map ref={mapRef} id="map" />
      <FooterB ref={footerBRef} id='footerB'/>
      {/* <Hero />
      // <map ref={mapRef} id="map" /> */}
    </div>
  )
}
