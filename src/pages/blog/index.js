import Blog from "@/components/blog";
import Breadcrumb from "@/components/hero/breadcrump";
import Layout from "@/components/layout";
import Link from "next/link";

const BlogPage = () => {
  return (
    <Layout>
      <Breadcrumb />
      <Blog />
    </Layout>
  );
};
export default BlogPage;
