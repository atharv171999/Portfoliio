import Link from 'next/link'
import { useState } from "react";


export default function AboutPage() {
  const [open, setOpen] = useState(false);


  return (
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
        <section onClick={()=> setOpen(false)} >

    <div className=" text-center text-5xl font-serif ">
                    <h1><span className=" font-bold text-gray-600" >/</span><span className=" font-semibold text-gray-800">about</span> <span className=" font-bold text-gray-600">.</span> </h1>
                </div>
            <div className=" flex flex-wrap justify-center gap-8 mt-14 "></div>
      <article>
        <div className=" w-[80%] mx-auto px-5 justify-center mt-10 ">
          <div>
            <h1>
              <span className=" text-gray-700 text-5xl font-bold">
                I&apos;m Atharv Bhandari.
              </span>
              <br />
              <span className=" text-gray-500 text-3xl font-semibold ">
                A frontend devloper.
              </span>
            </h1>
          </div>
          <div className="flex flex-col mt-16 gap-y-10 pl-6 ">
            <div className="flex flex-col gap-y-4">
              <div className=" text-gray-700 text-2xl font-bold">
                <h2>EDUCATION</h2>
              </div>
              <div className="flex flex-col gap-y-4 font-thin text-xl text-gray-500 ">
              <div className="flex flex-row gap-x-4">
                <div>2018-2022</div>
                <div>BACHELOR OF COMMERCE</div>
              </div>
              <div className="flex flex-row gap-x-4">
                <div>2016-2018</div>
                <div>
                  SENIOR SECONDARY (XII) (COMMERCE) D.A.V PUBLIC SCHOOL (CBSC
                  Board)
                </div>
              </div>
              <div className="flex flex-row gap-x-4">
                <div>2014-2016</div>
                <div>SECONDARY (X) DAV PUBLIC SCHOOL (CBSC Board)</div>
              </div>
              </div>
            </div>
            <hr className="border" />
            <div className="flex flex-col gap-y-4">
              <div className=" text-gray-700 text-2xl font-bold">
                <h2>TECHNICAL SKILLS</h2>
              </div>
              <div className=" font-thin flex flex-row gap-x-4 text-xl text-gray-500 ">
                <div>LANGUAGE:</div>
                <div>
                  JAVA, HTML, JAVASCRIPT, REACTJS, NEXTJS, CSS, TAILWINDCSS
                </div>
              </div>
            </div>
                <hr className=" border" />
            <div className="flex flex-col gap-y-4" >
              <div className=" text-gray-700 text-2xl font-bold">
                <h2>EXTRA-CURRICULARA ACTIVITIES</h2>
              </div>
              <div className=" font-thin flex flex-row gap-x-4 text-xl text-gray-500">
                <div>NATIONAL CADDET CORPS:</div>
                <div className=" font-thin flex flex-row gap-x-4 text-xl text-gray-500">BASIC MILITARY SERVICE IS GIVEN IN SMALL ARMS AND PARADES. SELECTED FOR NATIONAL CAPM IN SHOOTING. NCC&apos;A&apos; CERTIFICATE HOLDER.</div>
              </div>
              <div className=" font-thin flex flex-row gap-x-16 text-xl text-gray-500">
                <div >MUSIC:</div>
                <div>I LOVE LISTENING AND SINGING MUSIC. I HAVE ALSO DONE PRABHAKAR IN TABLA. IT IS A 6YEAR COURSE DEGREE IN FIELD OF MUSIC.</div>
              </div>
              <div className=" font-thin flex flex-row gap-x-14 text-xl text-gray-500">
                <div>
                    SPORTS:
                </div>
                <div >PLAYING FOOTBALL IS ONE OF MY HOBBIES. REPRESENTED THE UNIVERSITY FOOTBALL TEAM AS A CAPTAIN IN VARIOUS EVENTS AND SECURED 1st POSITION IN STATE LEVEL UNIVERSITY TOURNAMENT.</div>
              </div>
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </article>
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
                    <h3> <Link href='/work' >WORK</Link> </h3> 
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
  );
}
