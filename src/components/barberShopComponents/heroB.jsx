import React from "react"
import header from "../../../public/barberShop/headerB.jpg"

const HeroB = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id="heroB">
      <div className="relative w-full h-96">
        <img
          src={header}
          alt="HeroB Background"
          className="absolute inset-0 w-full h-full object-cover animate-fadeIn"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Blind Barber Shop</h1>
          <p className="mt-4 text-xl md:text-2xl">Tu imagen, nuestra pasión.</p>
        </div>
      </div>
    </section>
  )
})

HeroB.displayName = "HeroB"
export default HeroB
