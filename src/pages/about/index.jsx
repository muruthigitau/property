import AboutUs from "@/components/about";
import CEOtestimonials from "@/components/about/Testimonial";
import MainAbout from "@/components/aboutus/about";
import Agents from "@/components/agents";
import Gallery from "@/components/gallery";
import Breadcrumb from "@/components/hero/breadcrump";
import Layout from "@/components/layout";
// import Partners from "@/components/patners";
import Process from "@/components/process";
import Testimonial from "@/components/testimonial";
import WhyChooseUs from "@/components/whychooseus";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <Layout>
      <Breadcrumb image="/images/banner/about.png" />
      {/* <MainAbout /> */}
        <CEOtestimonials />
        <AboutUs />
        <WhyChooseUs />
      <Process />
      {/* <Gallery /> */}
      <Testimonial />
      {/* <Partners /> */}
      {/* <Agents /> */}
    </Layout>
  );
};
export default AboutPage;
