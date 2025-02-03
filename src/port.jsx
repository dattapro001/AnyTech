import { motion } from "framer-motion";
import { useState } from "react";
import ctaMobileWaveLines from "./image/backgrounds/ctaMobileWaveLines.svg"; 
import WaveLinesDesktop1 from "./image/backgrounds/WaveLinesDesktop1.svg";
import carouselImage1 from "./image/frames/carousel-image-frame-1.svg"; 
import manWithTab from "./image/human/man-with-tab.jpg"; 
import WaveLinesDesktop2 from "./image/backgrounds/WaveLinesDesktop2.svg"; 
import { Menu, X } from "lucide-react"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      <HeroSection />
      <ContentSectionOne />
      <ContentSectionTwo />
      <ContentSectionThree />
      <Footer />
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: 50, opacity: 2 }}
      animate={{ y: -10, opacity: 5 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 w-full bg-white shadow-md p-6 flex justify-between items-center z-50"
    >
     
      <div className="text-blue-500 text-xl font-bold">AnyTech</div>

     
      <div className="hidden md:flex space-x-10 items-center font-bold">
        <NavItem text="Solution" />
        <NavItem text="Service" />
        <NavItem text="About Us" />
        <NavItem text="en" />
      </div>

    
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="hidden md:flex px-10 py-2 border border-blue-500 text-blue-500 bg-gray-100 rounded-lg 
                   items-center transition hover:bg-blue-500 hover:text-white font-bold"
      >
        Contact Us <span className="ml-2 text-xl">&gt;</span>
      </motion.button>

   
      <button 
        className="md:hidden focus:outline-none text-blue-500 text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>


      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 left-0 w-full bg-white shadow-md py-4 flex flex-col items-center space-y-4 md:hidden"
        >
          <NavItem text="Solution" onClick={() => setIsOpen(false)} />
          <NavItem text="Service" onClick={() => setIsOpen(false)} />
          <NavItem text="About Us" onClick={() => setIsOpen(false)} />
          <NavItem text="en" onClick={() => setIsOpen(false)} />
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-10 py-2 border border-blue-500 text-blue-500 bg-gray-100 rounded-lg 
                      items-center transition hover:bg-blue-500 hover:text-white font-bold"
          >
            Contact Us
          </motion.button>
        </motion.div>
      )}
    </motion.nav>
  );
}

function NavItem({ text, onClick }) {
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      href="#"
      className="text-black text-lg cursor-pointer hover:text-blue-500"
      onClick={onClick}
    >
      {text}
    </motion.a>
  );
}



function HeroSection() {
  return (
    <section className="h-screen flex items-center justify-start relative overflow-hidden px-6">
      <motion.img
        src={ctaMobileWaveLines}
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        alt="Background"
        initial={{ opacity: 0, scale: 1.1, y: 5 }}
        animate={{ opacity: 1, scale: 1, y: [5, 0, 5] }}
        transition={{ duration: 4, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
      />
      
      <motion.img
        src={WaveLinesDesktop1}
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        alt="Background"
        initial={{ opacity: 0, scale: 1.1, x: -5 }}
        animate={{ opacity: 1, scale: 1, x: [-5, 0, -5] }}
        transition={{ duration: 4, ease: "easeOut", repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
      />

      <motion.img
        src={WaveLinesDesktop2}
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        alt="Background"
        initial={{ opacity: 0, scale: 1.1, y: -5 }}
        animate={{ opacity: 1, scale: 1, y: [-5, 0, -5] }}
        transition={{ duration: 5, ease: "easeOut", repeat: Infinity, repeatType: "reverse", delay: 0.6 }}
      />

      <motion.div
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
         className="text-left max-w-[80%] md:max-w-3xl pl-8 md:pl-28"
      >
        <h1 className="font-bold text-2xl md:text-6xl lg:text-7xl whitespace-nowrap">
         Embrace the<br></br> future of finance
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600 font-bold ">
        Reimagine financial services with AnyTech’s open platform, distributed banking solution that powers transformation.
      </p>

      <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-4 py-2 border border-blue-500 text-white bg-gray-100 rounded-lg 
                     flex items-center transition hover:bg-blue-500 hover:text-white bg-orange-500 text-2xl font-bold"
        >
            Reach Out to Us <span className="ml-2 text-xl">&gt;</span>

        </motion.button>
      </motion.div>
    </section>
  );
}




function ContentSectionOne() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-11 ml-10 py-12">
    
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 pr-6 mt-6 md:mt-0"
      >
        <h5 className="font-bold text-blue-500">POWERING THE FUTURE OF FINANCE</h5>
        <p className="mt-2 text-black-600 text-6xl font-semibold">Uncovering new <br></br>ways to delight customers</p>
        
        <h6 className="font-bold text-blue-900 mt-7">AnyTech is revolutionising financial technology by introducing<br></br> innovative and real-time transaction
           account processing capabilities,<br></br> specifically designed for retail financial services.</h6>
        <p className="mt-7 text-blue-900">Our modern approach surpasses traditional banking 
          and card processing<br></br> systems, empowering you with the most advanced technology for lasting<br></br> success.</p>
      </motion.div>

      <div className="w-full md:w-1/2 flex items-center justify-center relative">
        <motion.img
          src={carouselImage1} 
          alt="Background"
          initial={{ opacity: 0, scale: 1.1, y: -5 }}
          animate={{ opacity: 1, scale: 1, y: [-5, 0, -5] }}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-xl opacity-60"  
        /> 
        <motion.img
          src={manWithTab}  
          alt="Foreground"
          className="relative z-10 w-3/4 h-auto rounded-xl shadow-md" 
        />
        <motion.img
          src={WaveLinesDesktop2}
          className="absolute top-0 z-20 left-0 w-full h-full object-cover opacity-30 overflow-hidden"
          alt="Background"
          initial={{ opacity: 0, scale: 1.1, y: -5 }}
          animate={{ opacity: 1, scale: 1, y: [-5, 0, -5] }}
          transition={{ duration: 5, ease: "easeOut", repeat: Infinity, repeatType: "reverse", delay: 0.6 }}
        />
      </div>
    </section>
  );
}


function ContentSectionTwo() {
  return (
    <section className="container md:mb-[128px] text-center">
      <header className="space-y-xs md:space-y-sm">
        <h6 className="uppercase text-blue-600 font-Montserrat text-res-head-6 lg:text-head-6">
          OUR PHILOSOPHY
        </h6>
        <h2 className="whitespace-pre-line font-Montserrat text-blue-text text-res-head-2 lg:text-head-2">
          Human-centred innovation
        </h2>
      </header>

    
      <figure className="py-[32px]">
        <img
          src="https://cdn.sanity.io/images/6jywt20u/production/2d90adc3456764f98e38ce40b5ea7d7f52fd4ce1-2206x727.png"
          alt="Human-centred innovation"
          className="w-full h-auto md:h-full block" 
          loading="lazy"
        />
      </figure>

  
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        <div className="flex flex-col items-start text-start max-w-xs">
          <img
            src="https://cdn.sanity.io/images/6jywt20u/production/28029da89383a59e47420ee46b7e4c364051b45f-50x50.svg"
            alt="Full suite solutions"
            className="w-12 h-12"
          />
          <h3 className="mt-4 text-lg font-bold">Full-suite solutions</h3>
          <p className="text-sm text-gray-600">
            Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.
          </p>
        </div>

 
        <div className="flex flex-col items-start text-start max-w-xs">
          <img
            srcSet="https://cdn.sanity.io/images/6jywt20u/production/36c4da4283252fda5dce13c46ea3e06a5312218c-50x51.png?w=50&auto=format 50w"
            src="https://cdn.sanity.io/images/6jywt20u/production/36c4da4283252fda5dce13c46ea3e06a5312218c-50x51.png?auto=format"
            width="50"
            height="51"
            sizes="50px"
            alt="Simplify the complex"
            className="lg:h-[50px] lg:w-[50px] h-[32px] w-[32px]"
            loading="lazy"
          />
          <h3 className="mt-4 text-lg font-bold">Simplify the complex</h3>
          <p className="text-sm text-gray-600">
            Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.
          </p>
        </div>

     
        <div className="flex flex-col items-start text-start max-w-xs">
          <img
            srcSet="https://cdn.sanity.io/images/6jywt20u/production/1966d94a29ffe1673fd510327ba0eb409f82b680-50x50.svg?w=50&auto=format 50w"
            src="https://cdn.sanity.io/images/6jywt20u/production/1966d94a29ffe1673fd510327ba0eb409f82b680-50x50.svg?auto=format"
            width="50"
            height="50"
            sizes="50px"
            alt="Cutting-edge tech"
            className="lg:h-[50px] lg:w-[50px] h-[32px] w-[32px]"
            loading="lazy"
          />
          <h3 className="mt-4 text-lg font-bold">Cutting-edge tech</h3>
          <p className="text-sm text-gray-600">
            We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContentSectionThree() {
  return (
    <section className="py-8">
      <div className="flex-wrap space-x-4 justify-center items-center lg:flex hidden py-[32px]">
        {["Customer focused", "Agile and adaptable", "Compliance ready", "Secure and safe"].map((text, index) => (
          <button
            key={index}
            className={`lg:text-body-p0 text-res-body-p0 !font-semibold xl:px-[48px] md:px-[38px] px-[28px] py-[6px] xl:py-[8px] rounded-[200px] transition-colors duration-300 ${
              text === "Compliance ready" ? "bg-blue-highlight text-blue-main" : "text-blue-main hover:bg-[#F5FAFF]"
            }`}
          >
            {text}
          </button>
        ))}
      </div>

      <div className="relative max-w-5xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
        >

          {[1, 2, 3, 4].map((index) => (
            <SwiperSlide key={index}>
              <article className="grid lg:grid-cols-2 grid-cols-1 md:gap-[32px] lg:p-[64px] rounded-[20px] p-[24px] lg:h-[550px] bg-white shadow-lg">
                <section className="lg:space-y-md space-y-sm">
                  <header className="lg:space-y-md space-y-xs">
                    <h6 className="text-blue-main font-Montserrat text-res-head-6 lg:text-head-6 uppercase">
                      Customer Focused
                    </h6>
                    <h3 className="text-blue-text text-res-head-3 lg:text-head-3 font-Montserrat">
                      Purpose-built financial services
                    </h3>
                  </header>
                  <div className="text-body-1">
                    <p>
                      <strong>
                        Elevate customer experience and achieve agile financial product innovation with the world’s
                        first, consumer-centric, real-time transaction account processing and credit limit system.
                      </strong>
                    </p>
                    <p className="mt-2">
                      Experience the advantages of integrated retail financial services technology and real-time analysis
                      of transactional behavior.
                    </p>
                  </div>
                </section>

                <figure className="h-[350px] md:h-[425px]">
                  <img
                    src="https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?auto=format"
                    alt="Customer Focused"
                    className="h-full w-full object-cover rounded-[16px]"
                    loading="lazy"
                  />
                </figure>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}



function Footer() {
  return (
    <footer className="bg-gray-800 text-white flex justify-between p-4">
      <p className="text-start">&copy;2023 All rights reserved. Any Technology Pte Ltd.</p>
      <p className="text-end">Privacy Policy </p>
    </footer>
  );
}


