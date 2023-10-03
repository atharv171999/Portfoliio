import Link from 'next/link'
import Image from 'next/image'
import TicTac from '../public/tictacss.png'
import MicroPage from '../public/micross.png'
import Gamex from '../public/gamexss.png'
import Movie from '../public/moviess.png'
import ToDo from '../public/todoss.png'
import { useState } from "react";
import Port from '../public/portss.png'


export default function WorkPage(){
    const [open, setOpen] = useState(false);
    return(
        <>
        <nav>
          <div className=" flex flex-row  ">
            <div className={` w-[65%]  px-[40px] bg-white py-[37px] lg:px-32 lg:py-9 font-[REFAULT] text-[16px] text-[#4831d4] sm:text-[30px]
                 `}>Atharv</div>
            <div onClick={() => setOpen(true)} className=" w-[35%] bg-white flex flex-col justify-center space-y-4 items-end  px-[40px] py-[37px] lg:px-32 lg:py-9 " >
            <div className=" w-[50px]  sm:w-[4rem] border-2 border-[#4831d4] "></div>
              <div className=" w-[30px]  sm:w-[2.5rem] border-2 border-[#4831d4] "></div>
            </div>
          </div>

          <div
            className={` z-10 shadow-md border  absolute sm:right-3 lg:right-24 bg-white rounded-sm w-full h-[858px] sm:w-[18rem] sm:h-[25rem] md:w-[20rem] md:h-[27rem] lg:w-[20rem] lg:h-[27rem] xl:w-[22rem] xl:h-[27rem] transition-all duration-500 ease-in  ${
              open ? " top-0 sm:top-3  " : " top-[-1080px] sm:top-[-490px] "
            } `}
          >
            <div className=" flex flex-row justify-between px-10 pt-8 sm:pt-0 sm:justify-end items-center ">
              <div
                className={` sm:hidden md:mt-9 font-[REFAULT]  text-[20px] `}
              >
                ATHARV
              </div>
              <div
                onClick={() => setOpen(false)}
                className={`text-right  sm:mt-9 cursor-pointer  `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
              </div>
            </div>
            <div className=" pl-12 lg:pl-16 pt-20 sm:pt-0  ">
              <ul className=" text-xl sm:text-sm md:text-xl font-semibold ">
                <li
                  className={` hover:font-bold text-gray-700 cursor-pointer py-5 `}
                >
                  <Link href="/">Home</Link>
                </li>
                <li
                  className={`hover:font-bold text-gray-700 cursor-pointer py-5 `}
                >
                  <Link href="/work">Work</Link>
                </li>
                <li
                  className={`hover:font-bold text-gray-700 cursor-pointer py-5 `}
                >
                  <Link href="/about">About</Link>
                </li>
                <li className=" hover:font-bold text-gray-700 cursor-pointer py-5 ">
                  <Link href="https://drive.google.com/file/d/1hi_QtDAUxACMMf0UqOQUiHZEBmZ4XhsZ/view?usp=drive_link">
                    Resume
                  </Link>
                </li>
              </ul>
            </div>
            <hr className="w-[60%] border my-4 mx-auto" />
            <div className="  ">
              <ul className=" flex flex-row justify-center gap-x-4 ">
                <li className=" cursor-pointer ">GH</li>
                <li className=" cursor-pointer ">LN</li>
              </ul>
            </div>
          </div>


        </nav>
        <section onClick={()=> setOpen(false)}>
                <div className=" text-center text-5xl font-serif ">
                    <h1><span className=" font-bold text-gray-600" >/</span><span className=" font-semibold text-gray-800">work</span> <span className=" font-bold text-gray-600">.</span> </h1>
                </div>
            <div className=" flex flex-wrap justify-center gap-8 mt-14 ">
                
<div className="max-w-sm  bg-gray-100 border rounded-t-lg  shadow-sm hover:shadow-lg hover:relative hover:bottom-1  ">
    <Image className=' rounded-lg' src={Gamex} alt='' width={500} height={500} />
    <div className="p-5  ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800">Gamex</h5>
        <a href="https://atharv171999.github.io/Game-web/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Deployment
             <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

<div className="max-w-sm bg-gray-100 border rounded-t-lg shadow-sm hover:shadow-lg hover:relative hover:bottom-1">
        <Image className=' rounded-lg' src={TicTac} width={500} height={500} alt='' />
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800">Tic Tac Toe</h5>
        </a>
        <a href="https://3tic-tac-toe-game.surge.sh/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Deployment
             <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

<div className="max-w-sm bg-gray-100 border rounded-t-lg shadow-sm hover:shadow-lg hover:relative hover:bottom-1">
<Image className=' rounded-lg' src={MicroPage} alt='' width={500} height={500} />
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800">Microsoft Landing Page</h5>
        </a>
        <a href="https://atharv171999.github.io/Microsoft-page/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Deployment
             <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

<div className="max-w-sm bg-gray-100 border rounded-t-lg shadow-sm hover:shadow-lg hover:relative hover:bottom-1">
<Image className=' rounded-lg' src={ToDo} alt='' width={500} height={500} />
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800">To Do List</h5>
        </a>
        <a href="https://atharv171999.github.io/ToDoList/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Deployment
             <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

<div className="max-w-sm bg-gray-100 border rounded-t-lg shadow-sm hover:shadow-lg hover:relative hover:bottom-1">
<Image className=' rounded-lg' src={Movie} alt='' width={500} height={500} />
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800">Movie Library</h5>
        </a>
        <a href="https://atharv171999.github.io/Movie_lib/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Deployment
             <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

<div className="max-w-sm bg-gray-100 border rounded-t-lg shadow-sm hover:shadow-lg hover:relative hover:bottom-1">
<Image className=' rounded-lg' src={Port} alt='' width={500} height={500} />
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800">Atharv</h5>
        </a>
        <a href="https://portfoliio-sepia.vercel.app/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Deployment
             <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>


            </div>
        </section>
        <footer>
        <div className=" bg-[#3d155f] text-[#badd76] mt-28 ">
            <div className=" w-[80%] mx-auto flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 py-24 items-start sm:items-center ">
                <div className="flex flex-col gap-4 w-1/2 ">
                    <div className="  font-semibold text-xl ">
                    <h1>CONTACT</h1>
                    </div>
                    <div className=" text-md ">
                    <div className="  ">
                    <h3>Address</h3>
                    <p>Harendra nagar, upper kalabarh Kotdwara, Uttarakhand</p>
                    </div>
                    <div>
                        <h3>Phone</h3>
                        <p>8433153139</p>
                    </div>
                    <div>
                        <h3>Email</h3>
                        <p>charu.messi.ab@gmail.com</p>
                    </div>
                    </div>
                </div>
                <div className=" flex flex-col w-1/2 gap-4 text-lg font-semibold ">
                <h3> <Link href='/'>HOME</Link> </h3> 
                    <h3> <Link href='/about' >ABOUT</Link> </h3>
                    <h3><Link href='https://drive.google.com/file/d/1hi_QtDAUxACMMf0UqOQUiHZEBmZ4XhsZ/view?usp=drive_link'>Resume</Link></h3> 
                </div>
            </div>
            <hr className="w-[80%] mx-auto bg-[#badd76] " />
            <div className=" w-[80%] mx-auto flex flex-col sm:flex-row justify-between py-12 ">
                <div><h2>©ATHARV BHandari 2023</h2></div>
                <div className=" flex flex-row gap-x-4">
                    <h3>GITHUB</h3>
                    <h3>LINKDIN</h3>
                </div>
            </div>
        </div>
      </footer>
        </>
    )
}