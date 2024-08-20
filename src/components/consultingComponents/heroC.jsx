import React from 'react';
import doc from '../../assets/consulting/doc.png';
import con1 from '../../assets/consulting/con1.jpg';
import con5 from '../../assets/consulting/con5.jpg';
import con3 from '../../assets/consulting/con3.jpg';
import beforeLips from '../../assets/consulting/beforeLips.jpg';
import afterLips from '../../assets/consulting/afterLips.jpg';
import relleno from '../../assets/consulting/relleno.mp4';
import perfilado from '../../assets/consulting/perfiladoVideo.mp4';
import BeforeAfterSlider from './before';

const HeroC = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id='heroC' className="text-gray-600 body-font bg-roseeC">
      <div className="container px-2 py-12 mx-auto flex flex-col items-center">
        <div className="flex w-full mb-10 flex-wrap items-center justify-center">
          <div className="md:p-1 p-1 w-full md:w-2/5">
            <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src={doc} />
          </div>
          <div className="md:w-1/2 w-full flex flex-col items-center justify-center text-center md:text-left">
            <h1 className="lg:pl-6 sm:text-4xl text-3xl font-medium title-font text-gray-900 lg:w-full mb-4">
              Doctora Angeles Hermansson
            </h1>
            <p className="lg:pl-6 lg:w-full mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.
              Franzen you probably heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap md:-m-1 -m-0.5 justify-center">
          <div className="flex flex-wrap w-full lg:w-1/2 justify-center">
            <div className="md:p-1 p-0.5 w-1/2">
              <img alt="gallery" className="w-full h-60 md:h-80 object-cover object-center block" src={con5} />
            </div>
            <div className="md:p-1 p-0.5 w-1/2">
              <video
                className="w-full h-60 md:h-80 object-cover object-center block"
                src={perfilado}
                autoPlay
                loop
                muted
              />
            </div>
            <div className="md:p-1 p-0.5 w-full">
              <div className="relative w-full h-60 md:h-96 lg:h-80">
                <BeforeAfterSlider
                  className="absolute top-0 left-0 w-full h-full"
                  beforeImage={beforeLips}
                  afterImage={afterLips}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-full lg:w-1/2 justify-center">
            <div className="md:p-1 p-0.5 w-full">
              <img alt="gallery" className="w-full h-60 md:h-80 object-cover object-center block" src={con3} />
            </div>
            <div className="md:p-1 p-0.5 w-1/2">
              <video
                className="w-full h-60 md:h-80 object-cover"
                src={relleno}
                autoPlay
                loop
                muted
              />
            </div>
            <div className="md:p-1 p-0.5 w-1/2">
              <img alt="gallery" className="w-full h-60 md:h-80 object-cover object-center block" src={con1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroC.displayName = 'HeroC';
export default HeroC;


