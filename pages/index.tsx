import SEO from "../components/seo";
import Home from "../components/home";

export default function HomePage() {
  const nav_color = 'bg-[#4831d4]'
  const nav_color2 = 'sm:bg-[#ccf381]'

  return (
    <>
      <SEO pageTitle={"Home"} />
      <Home navColor={nav_color} navcolor2={nav_color2} />
    </>
  );
}
