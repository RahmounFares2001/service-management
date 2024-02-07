import About from "./components/home/about/About";
import Header from "./components/home/header/Header";
import Homee from "./components/home/home/Homee.jsx"
import Services from "./components/home/servicess/Services";

export default function Home() {
  return (
    <div className="font-mono">
      <Header />
      <Homee />

      <section style={{backgroundColor: "#010101"}}>
        <Services />
        <About />

      </section>

      
    </div>
  );
}
