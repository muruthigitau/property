import MainAbout from "@/components/aboutus/about";
import Agents from "@/components/agents";
import Gallery from "@/components/gallery";
import Breadcrumb from "@/components/hero/breadcrump";
import Layout from "@/components/layout";
import Partners from "@/components/patners";
import Process from "@/components/process";
import Testimonial from "@/components/testimonial";
import Link from "next/link";

const AboutPage = () => {
  return (
    <Layout>
      <Breadcrumb />
      <MainAbout />
      <Process />
      <Gallery />
      <Testimonial />
      <Partners />
      <Agents />
    </Layout>
  );
};
export default AboutPage;
