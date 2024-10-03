import Image from "next/image";
import background from "../public/title.jpg"
export default function Hero(){
    return(
  <div  className="bg-gradient-to-r from-cyan-500 to-blue-500 ">
   <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
           <Image className="lg:w-2/10 md:w-3/10 w-5/10  mb-10 object-cover object-center rounded opacity-75" alt="hero" src={background}></Image>
       <div className="text-center lg:w-2/3 w-full">
           <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-white">Explore the beauty of the world with us</h1>
            <p className="mb-8 leading-relaxed text-cyan-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique necessitatibus beatae impedit est aut autem, id voluptatibus ipsum totam quisquam odio et nulla fuga architecto facilis ducimus at dolor incidunt!</p>
           <div className="flex justify-center ">
             <button className=" text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-2xl font-medium text-2xl w-1/4">join us</button>
            </div> 
       </div>
    </div>
 </section>
</div>

             
             
      
    
          
    )
}