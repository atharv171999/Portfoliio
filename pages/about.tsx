import About from '../components/about'
import SEO from '../components/seo'

export default function AboutPage() {
  const nav_color = 'bg-white'
  const nav_color2 = 'bg-white'
  const footer = 'WORK'

  return (
    <>
    <SEO pageTitle={'About'} />
      <About navColor={nav_color} navcolor2={nav_color2} footer={footer} />
    </>
  );
}
