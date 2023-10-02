import '@/styles/globals.css'
// import  '../Fonts/REFAULT.woff'
import type { AppProps } from 'next/app'
import Link from 'next/link'

import { useState } from "react";
export default function App({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false)

  const change = () => {
    setColor(true)
    setOpen(false)
  }

  return <>
  <header>
        <nav className=" relative z-10 ">
          <div className=" px-[40px] py-[37px] lg:px-32 lg:py-9  flex justify-between items-center ">
          <div className={` font-[REFAULT] text-[16px]  sm:text-[30px] ${color? 'text-[#4831d4]': 'text-[#ccf381]'} `}  >
              ATHARV
            </div>
          <div
              onClick={() => setOpen(true)}
              className="  flex flex-col items-end  text-[30px] space-y-4 "
              >
              <div className=" w-[50px]  sm:w-[4rem] border-2   border-[#ccf381]  sm:border-[#4831d4] "></div>
              <div className=" w-[30px]  sm:w-[2.5rem] border-2 border-[#ccf381] sm:border-[#4831d4] "></div>
            </div>
              </div>
            <div
              className={` shadow-md border  absolute sm:right-3 lg:right-24 bg-white rounded-sm w-full h-[858px] sm:w-[18rem] sm:h-[25rem] md:w-[20rem] md:h-[27rem] lg:w-[20rem] lg:h-[27rem] xl:w-[22rem] xl:h-[27rem] transition-all duration-500 ease-in  ${
                open ? " top-0 sm:top-3  " : " top-[-1080px] sm:top-[-490px] "
              } `}
            >
              <div className=" flex flex-row justify-between px-10 sm:justify-end items-center ">
                <div className= {`mt-14 sm:hidden md:mt-9 font-[REFAULT]  text-[20px] ${color? 'text-[#4831d4]': 'text-[#ccf381]'} `} >ATHARV</div>
                <div
                  onClick={() => setOpen(false)}
                  className={`text-right mt-12 sm:mt-9 cursor-pointer  `}
                >
                  close
                </div>
              </div>
              <div className=" pl-12 lg:pl-16 pt-20 sm:pt-10 ">
                <ul className=" text-xl sm:text-sm md:text-xl font-semibold ">
                  <li onClick={()=> setColor(false)} className={` hover:font-bold text-gray-700 cursor-pointer py-5 `}><Link href='/'>Home</Link></li>
                  <li onClick={()=> setColor(true)} className={`hover:font-bold text-gray-700 cursor-pointer py-5 `}><Link href='/work' >Work</Link></li>
                  <li className=" hover:font-bold text-gray-700 cursor-pointer py-5 "><Link href='/about' >About</Link></li>
                </ul>
              </div>
              <hr className='w-[60%] my-4 mx-auto' />
              <div className="  ">
                <ul className=" flex flex-row justify-center gap-x-4 " >
                  <li className=' cursor-pointer ' >GH</li>
                  <li className=' cursor-pointer ' >LN</li>
                </ul>
              </div>
            </div>
        </nav>
      </header>
   <Component {...pageProps} />
  </>
  
}
