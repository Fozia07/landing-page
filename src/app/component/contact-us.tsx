import React from 'react'

export default function Contact() {
  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 m-0p-0 min-h-[100vh] '>
        

     <div className="flex justify-center items-center flex-col">
            <h1 className="text-blue-900 text-6xl font-bold mt-28 mb-10">Contact us</h1>
           <div className="bg-blue-300 w-2/5 p-6 rounded-xl shadow-xl ">
             <form className="mx-auto">
                <div className='my-3 mx-auto'>
                   <input type='text' className='w-full mt-2 p-4 outline-none border-none rounded-xl'placeholder='Enter your name'/>
                </div>
                <div className='my-3 mx-auto'>
                   <input type='number' className='w-full mt-2 p-4 outline-none border-none rounded-xl'placeholder='Phone no'/>
                </div>
                <div className='my-3 mx-auto'>
                   <input type='text' className='w-full mt-2 p-4 outline-none border-none rounded-xl'placeholder='Email'/>
                </div>
                <div className='my-3 mx-auto'>
                   <textarea className='w-full  h-36 mt-2 p-4 outline-none border-none rounded-xl'placeholder='type text'/>
                </div>
                <div className="flex justify-center">
                    <button type='submit' className="w-full text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-2xl font-semibold text-xl w-60 ">submit</button>
              </div>

             </form>
        
          </div>
     </div>
</div>
  )
}
