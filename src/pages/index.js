import About from "@/components/about";
import Posts from "@/components/blog/posts";
import AskUs from "@/components/contact/askus";
import Hero from "@/components/hero";
import Layout from "@/components/layout";
import Process from "@/components/process";
import Featured from "@/components/property/featured";
import PropertyMap from "@/components/property/map";
import PropertyType from "@/components/property/type";
import Testimonial from "@/components/testimonial";
import WhyChooseUs from "@/components/whychooseus";
import Link from "next/link";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <PropertyType />
      <Featured />
      <About />
      <Process />
      <WhyChooseUs />
      <AskUs />
      <PropertyMap />
      <Posts />
      <Testimonial />
    </Layout>
  );
};
export default Home;
