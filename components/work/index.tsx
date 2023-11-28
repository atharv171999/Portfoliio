import Header from "@/layout/header";
import Footer from "@/layout/footer";
import WorkPage from "./work"
export default function Work({navColor, navcolor2, footer}: any){
    return(
        <>
        <Header navColor={navColor} navcolor2={navcolor2} />
        <WorkPage/>
        <Footer footer={footer} />
        </>
    )
}