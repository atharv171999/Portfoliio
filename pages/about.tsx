import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
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
                    <h3>RESUME</h3> 
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
