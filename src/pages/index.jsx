import About from "@/components/about";
import Category from "@/components/category";
import AskUs from "@/components/contact/askus";
import Hero from "@/components/hero";
import Layout from "@/components/layout";
import Process from "@/components/process";
import Featured from "@/components/property/featured";
import Testimonial from "@/components/testimonial";
import WhyChooseUs from "@/components/whychooseus";

const Home = () => {
  return (
    <>
      {/* Dream */}
      <Layout>
        <Hero />
        <Category />
        <Featured />
        <AskUs />
        <About />
        <WhyChooseUs />
        <Process />
        {/* <Testimonial /> */}
      </Layout>
    </>
  );
};
export default Home;
