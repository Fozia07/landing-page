import Image from 'next/image'
import React from 'react'
import tourist from "../public/tourist.jpg"

function About() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full p-11 pr-10">
      <div className="w-full sm:w-2/5 md:w-4/5 flex items-center justify-between">

        <div className="grid grid-cols-2 rounded-lg" >
            <Image src={tourist} alt=""  width={2000} height={2000} className="pt-20 pl-30 rounded-3xl"></Image>
        </div>
         
         <div className=" border-none text-lg sm:text-lg md:text-xl mb-11 mr-11 " >
            <h2 className="text-6xl font-semibold ml-9 mb-9 mt-6 font-serif text-blue-900 ">About us</h2>
            <h3 className='mb-4 ml-9  font-bold text-3xl text-slate-700'>Unveil Prime <br/>Desitination With Us</h3>
             <p className='text-justify w-2/5 ml-9  text-base' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti a natus eveniet ab officia! Commodi esse obcaecati ipsum dolores aperiam facere, minima adipisci voluptatem corporis, quae non rerum saepe dolor!
             Labore architecto optio laboriosam impedit eveniet in aperiam. Esse repellat saepe quaerat debitis a temporibus tenetur aliquam nulla, expedita neque itaque quis, molestiae beatae delectus sapiente veritatis consequatur in at.
             Minus, rerum explicabo. Quidem culpa unde quisquam delectus nobis provident quo porro placeat quam quasi? Voluptate similique magnam dolorem ut odio quos distinctio sed? Rem asperiores magnam tenetur consectetur nam.</p>
         </div>
      </div>
    </div>
  )
}

export default About