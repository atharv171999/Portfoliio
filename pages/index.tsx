import { useState } from "react";
import Photo from '../public/photoss.png'
import Image from 'next/image'
import Link from "next/link"

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);


  return (
    <>
        <nav>
          <div className=" flex flex-row  ">
            <div className={` w-[65%]  px-[40px] bg-[#4831d4] py-[37px] lg:px-32 lg:py-9 font-[REFAULT] text-[16px]  sm:text-[30px] ${
              color ? "text-[#4831d4]" : "text-[#ccf381]"} `}>Atharv</div>
            <div onClick={() => setOpen(true)} className=" w-[35%] bg-[#4831d4] sm:bg-[#ccf381] flex flex-col justify-center space-y-4 items-end  px-[40px] py-[37px] lg:px-32 lg:py-9 " >
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
                <li className=" cursor-pointer ">GH</li>
                <li className=" cursor-pointer ">LN</li>
              </ul>
            </div>
          </div>


        </nav>
      <section onClick={()=> setOpen(false)} className=" ">
        <div className=" flex flex-col sm:flex-row  ">
          <div className=" relative sm:w-[65%] bg-[#4831d4] pt-20 sm:pb-[5.4rem] sm:pt-0  ">
            <article className=" w-[85%] lg:w-[39rem] mx-auto  sm:mt-[8rem] ">
              <div className=" w-[85%]   flex flex-col text-left space-y-6 sm:space-y-10 ">
                <div>
                  <h1 className=" text-[#ccf381] -tracking-[3px] text-5xl lg:text-[4rem] font-bold ">
                    Frontend <br /> Developer.
                  </h1>
                </div>
                <div>
                  <p className=" text-white -tracking-[1px] text-xl lg:text-[1.5rem] ">
                    I like to craft solid and scalable frontend products with
                    great user experiences.
                  </p>
                </div>
              </div>
              <div>
                <ul className=" text-[#ccf381] flex flex-row justify-between mt-20 text-xs lg:text-[1rem] mb-14 ">
                  <li className=" w-[45%] ">
                    Highly skilled at progressive enhancement, design systems
                    &amp; UI Engineering.
                  </li>
                  <li className=" w-[45%] ">
                    Proven experience building successful products for clients
                    across several countries.
                  </li>
                </ul>
              </div>
            </article>
            <div className=" absolute hidden  sm:right-[-5rem] sm:bottom-[16rem] lg:top-[8rem] lg:-right-44 mx-auto sm:block  ">
              <div className=" shadow-xl relative w-[12rem] h-[12rem] sm:top-14 sm:left-16 lg:top-0 lg:left-0  lg:w-[17rem]  mx-auto lg:h-[17rem] border-2 border-white ">
                <div className=" hover:-top-10 hover:-left-9 w-[12rem] sm:-top-9 sm:-left-9  absolute lg:w-[17rem] lg:-top-9 lg:-left-8 mx-auto h-[15rem] ">
                <Image className="  shadow-xl" src={Photo} width={500} height={500} alt="" ></Image>
                </div>
              </div>
            </div>
          </div>
          <div className=" sm:w-[35%] bg-[#ccf381]">
            <div className=" sm:hidden py-28  ">
              <div className=" relative   w-[12rem] left-8  mx-auto h-[12rem] border-2 border-white ">
                <div className=" absolute w-[12rem] -top-9 -left-8 mx-auto h-[12rem] border-2 border-white ">
                <Image className="  shadow-xl" src={Photo} width={500} height={500} alt="" ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
