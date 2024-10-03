import Image from "next/image";
import Hero from "./component/herosection"
import Destination from "./component/destination";
import About from "./component/about"
import Galary from "./component/galary";
import Contact from "./component/contact-us"

export default function Home(){
  return(
    <div>
      <section>
        <Hero/>
      </section>
      <hr/>
      <section>
       <Destination/> 
      </section>
      <hr/>
      <section>
        <About/>
      </section>
      <hr/>
      <section>
        <Galary/>
      </section>
      <hr/>
      <section>
        <Contact/>
      </section>
    </div>
  )
}