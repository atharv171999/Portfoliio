import Link from 'next/link'

export default function Footer({footer}: any){
    return(
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
                    <h3> <Link href='/work' >{footer}</Link> </h3> 
                    <h3><Link href='https://drive.google.com/file/d/1hi_QtDAUxACMMf0UqOQUiHZEBmZ4XhsZ/view?usp=drive_link'>Resume</Link></h3> 
                </div>
            </div>
            <hr className="w-[80%] mx-auto bg-[#badd76] " />
            <div className=" w-[80%] mx-auto flex flex-col sm:flex-row justify-between py-12 ">
                <div><h2>©ATHARV BHandari 2023</h2></div>
                <div className=" flex flex-row gap-x-4">
                    
                    
                    <h3><a href="https://github.com/">GITHUB</a></h3>
                    <h3><a href="https://www.linkedin.com/feed/">LINKDIN</a></h3>
                </div>
            </div>
        </div>
      </footer>
    )
}