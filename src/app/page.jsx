
// components
import About from "./components/home/about/About";
import Contact from "./components/home/contact/Contact";
import Facts from "./components/home/facts/Facts";
import Footer from "./components/home/footer/Footer";
import Header from "./components/home/header/Header";
import Homee from "./components/home/home/Homee.jsx"
import Services from "./components/home/servicess/Services";

export default function Home() {
  return (
    <div> 
      <Header />
      <Homee />

      <section style={{backgroundColor: "#010101"}}
              className="flex flex-col gap-44">
        <Services />
        <About />
      </section>

      <Facts />
      <Contact />

      <Footer />
    </div>
  );
}
