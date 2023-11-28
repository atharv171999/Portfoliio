import HomePage from './home'
import Header from '../../layout/header'

export default function Home({navColor, navcolor2}: any){

    return(
        <>
        <Header navColor={navColor} navcolor2={navcolor2} />
        <HomePage/>
        </>

    )
}