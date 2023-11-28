import Work from '../components/work'
import SEO from '../components/seo'

export default function WorkPage(){
  const nav_color = 'bg-white'
  const nav_color2 = 'bg-white'
  const about = 'ABOUT'


    return(
        <>
        <SEO pageTitle={'Work'} />
      <Work navColor={nav_color} navcolor2={nav_color2} footer={about} />
        </>
    )
}