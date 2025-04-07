import BlogDetails from "@/components/blog/details";
import Breadcrumb from "@/components/hero/breadcrump";
import Layout from "@/components/layout";
import Link from "next/link";

const BlogDetailsPage = () => {
  return (
    <Layout>
      <Breadcrumb />
      <BlogDetails />
    </Layout>
  );
};
export default BlogDetailsPage;
