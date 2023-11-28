import AboutPage from "./about";
import Header from '../../layout/header'
import Footer from '../../layout/footer'

export default function About({navColor, navcolor2, footer}: any){
    

    return(
        <>
        <Header navColor={navColor} navcolor2={navcolor2}  />
        <AboutPage/>
        <Footer footer={footer} />
        </>
    )
}