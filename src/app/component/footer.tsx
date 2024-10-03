import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
  <div>

      <div className='bg-blue-950 text-white text-xl pt-5 flex justify-center'>
          <div className="w-full ml-8 mb-4 ">
            <h3 className='text-2xl mb-8 align-text-top'>Contact us</h3>
            <p className='mb-4'>Email.info@example.com</p>
            <p className='mb-4'>phone:121 56556 565557</p>
            <p className='mb-4'>Address:your address 123 street</p>
          </div>
          <div  className="mr-8 ">
                    <h3>Quick Links</h3>
                    <ul className="flex gap-x-12 text-2xl text-center ">
                        <li>
                            <Link href="/">home</Link>
                        </li>
                        <li>
                        <Link href="/">About</Link>
                        </li>
                        <li>
                        <Link href="/">services</Link>
                        </li> 
                        <li>
                        <Link href="/">contact</Link>
                        </li>
                    </ul>
                </div>
               
         </div>
                <div className='flex justify-center bg-blue-950 h-10 p-8 text-slate-400'>
                    <p className='text-2xl mb-5'> 8copy; 2023 your company.All rights reserved</p>
                 </div>
         
    </div>
  )
}
export default Footer