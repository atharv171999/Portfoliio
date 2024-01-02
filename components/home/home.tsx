import Image from 'next/image'
import Photo from '../../public/photoss.png'


export default function Home(){
    return(
      
        <section >
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
    )
}