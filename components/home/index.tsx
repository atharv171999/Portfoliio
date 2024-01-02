import HomePage from './home'
import Header from '../../layout/header'
// import { useState } from "react";
// import Link from "next/link";

export default function Home({navColor, navcolor2}: any){
//     const [open, setOpen] = useState(false);
//   const [color, setColor] = useState(false);

    return(
        <>
         {/* <nav>
      <div className={` flex flex-row ${navColor}  `}>
        <div
          className={` w-[65%]  px-[40px] ${navColor} py-[37px] lg:px-32 lg:py-9 font-[REFAULT] text-[16px]  sm:text-[30px] text-[#ccf381]
               `}
        >
          <Link href="/">Atharv</Link>
        </div>
        <div
          onClick={() => setOpen(true)}
          className={` w-[35%] bg-[#4831d4] ${navcolor2} flex flex-col justify-center space-y-4 items-end  px-[40px] py-[37px] lg:px-32 lg:py-9 cursor-pointer `}
        >
          <div className=" w-[50px]  sm:w-[4rem] border-2   border-[#ccf381]  sm:border-[#4831d4] "></div>
          <div className=" w-[30px]  sm:w-[2.5rem] border-2 border-[#ccf381] sm:border-[#4831d4] "></div>
        </div>
      </div>

      <div
        className={` z-10 shadow-md border  absolute sm:right-3 lg:right-24 bg-white rounded-sm w-full h-[858px] sm:w-[18rem] sm:h-[25rem] md:w-[20rem] md:h-[27rem] lg:w-[20rem] lg:h-[27rem] xl:w-[22rem] xl:h-[27rem] transition-all duration-500 ease-in  ${
          open ? " top-0 sm:top-3  " : " top-[-1080px] sm:top-[-490px] "
        } `}
      >
        <div className=" flex flex-row justify-between px-10 pt-8 sm:pt-0 sm:justify-end items-center ">
          <div
            className={` sm:hidden md:mt-9 font-[REFAULT]  text-[20px] ${
              color ? "text-[#4831d4]" : "text-[#ccf381]"
            } `}
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
              onClick={() => setColor(false)}
              className={` hover:font-bold text-gray-700 cursor-pointer py-5 `}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={() => setColor(true)}
              className={`hover:font-bold text-gray-700 cursor-pointer py-5 `}
            >
              <Link href="/work">Work</Link>
            </li>
            <li
              onClick={() => setColor(true)}
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
            <li className=" cursor-pointer "><a href="https://github.com/">GH</a></li>
            <li className=" cursor-pointer "><a href="https://www.linkedin.com/feed/">LN</a></li>
          </ul>
        </div>
      </div>
    </nav> */}
        <Header navColor={navColor} navcolor2={navcolor2} />
        <HomePage/>
        </>

    )
}