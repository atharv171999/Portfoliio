import { useState } from "react";

export default function HomePage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section>
        <div className=" relative -top-32 flex flex-col sm:flex-row  ">
          <div className=" relative sm:w-[65%] bg-[#4831d4] pt-32 sm:pt-0  ">
            <article className=" w-[85%] lg:w-[39rem] mx-auto mt-[30px] sm:mt-[15rem] ">
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
            <div className=" absolute hidden mt-44 right-[-6rem] bottom-[6rem] lg:top-20 mx-auto sm:block  ">
              <div className=" relative w-[12rem] mb-20  mx-auto h-[12rem] border-2 border-white ">
                <div className=" absolute w-[12rem] top-8 left-8 mx-auto h-[12rem] border-2 border-white "></div>
              </div>
            </div>
          </div>
          <div className=" sm:w-[35%] bg-[#ccf381]">
            <div className=" mt-14 w-[80%] mx-auto sm:hidden  ">
              <div className=" relative w-[12rem] mb-20  mx-auto h-[12rem] border-2 border-white ">
                <div className=" absolute w-[12rem] top-8 left-8 mx-auto h-[12rem] border-2 border-white "></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
