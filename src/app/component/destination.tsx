import Image from 'next/image'
import React from 'react'
import image1 from "../public/sydney-opera-house.png"
import paris1 from "../public/paris1.jpg"
import america from "../public/south amarica.jpg"

export default function Destination() {
  return (
  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 ">

     <h1 className="text-6xl font-bold p-2 text-center font-serif text-blue-900 underline">Destination</h1><br/>
   <div className='flex-row'>
      <div className='flex-col lg-flex-row mx-10 md:mx-20 lg:mx-52 rounded-lg'>
       <Image src={image1} alt="" width={1000} height={1000} className='mx-auto mb-9'></Image>
      </div>
     <div className=''>
        <div className='mx-1'>
         <h2 className='text-2xl font-bold text-center'>Sydney</h2>
         <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique placeat deserunt exercitationem qui nisi debitis distinctio, excepturi aliquam quaerat est ex quibusdam amet, cumque eos in aspernatur sit, neque aut.
         Repellendus debitis eaque officia totam explicabo tempore veritatis sint voluptatum vitae eius neque porro ut, beatae sequi dolorem, quaerat doloribus voluptas vel, assumenda qui excepturi nemo quam? Incidunt, dignissimos atque....</p>
        </div><br/>
        <div className="flex justify-center">
             <button className=" text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-2xl font-semibold text-xl w-60 ">read more</button>
       </div>
     </div><br/>
     <div className='flex-col lg-flex-row mx-10 md:mx-20 lg:mx-52 rounded-lg'>
       <Image src={paris1} alt="" width={1000} height={1000} className='mx-auto mb-9'></Image>
     </div>
      <div className=''>
        <div className='mx-1'>
         <h2 className='text-2xl font-bold text-center'>Paris</h2>
         <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quidem veniam velit dolore ratione maiores optio numquam qui consectetur, odio, sit atque facilis repellat omnis impedit nobis ipsam reprehenderit voluptatum!
         Nam dolorum repellendus repudiandae dolorem sint! Eaque, nisi quo nesciunt recusandae facilis fugit magni fuga repellat eos, maxime quia asperiores qui sint, aliquid iusto sapiente reprehenderit laudantium aliquam sit adipisci....</p>
        </div><br/>
        <div className="flex justify-center">
             <button className=" text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-2xl font-semibold text-xl w-60 ">read more</button>
         </div>
      </div><br/>
        <div className='flex-col lg-flex-row mx-10 md:mx-20 lg:mx-52 rounded-lg'>
         <Image src={america} alt="" width={1000} height={1000} className='mx-auto mb-9'></Image>
        </div>
    
       <div className=''>
       <div className='mx-2'>
        <h2 className='text-2xl font-bold text-center'>South America</h2>
      
        <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam culpa incidunt, voluptate optio sit eveniet nihil odit nesciunt minima repellendus eaque ipsum expedita fugiat dolorum iure dolorem quasi mollitia vitae.
        Quam animi esse omnis, veniam fugiat similique dicta qui accusamus nobis blanditiis hic, ea alias quos quia neque fugit minima nemo consectetur reiciendis quas? Repellat, ut? Maiores quos neque aut.</p>
       </div><br/>
       <div className="flex justify-center">
             <button className=" text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-2xl font-semibold text-xl w-60 ">read more</button>
        </div><br/>
 
      
      </div>
   </div>
  </div>

  )
}
