'use client'

import { useEffect, useState } from "react";

// components
import About from "./components/home/about/About";
import Contact from "./components/home/contact/Contact";
import Facts from "./components/home/facts/Facts";
import Footer from "./components/home/footer/Footer";
import Header from "./components/home/header/Header";
import Homee from "./components/home/home/Homee.jsx"
import Services from "./components/home/servicess/Services";

export default function Home() {

  // up page button
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  useEffect(() => {
     const onPageScroll = () => {
       if (window.pageYOffset > 600) {
         setGoUp(true);
       } else {
         setGoUp(false);
       }
     };
     window.addEventListener("scroll", onPageScroll);
 
     return () => {
       window.removeEventListener("scroll", onPageScroll);
     };
   }, [])


  return (
    <div className="bg-forthly flex justify-center items-center" > 
    <div className="2xl:w-2000" >
      <Header />
      <Homee />

      <section style={{backgroundColor: "#010101"}}
              className="flex flex-col gap-44">
        <Services />
        <About />
      </section>

      <Facts />
      <Contact />

      {/* page up */}
      <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`} >^</div>

      <Footer />
      </div>
    </div>
  );
};