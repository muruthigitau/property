import Breadcrumb from "@/components/hero/breadcrump";
import Layout from "@/components/layout";
import Property from "@/components/property";
import Link from "next/link";

const PropertyPage = () => {
  return (
    <Layout>
      <Breadcrumb />
      <Property />
    </Layout>
  );
};
export default PropertyPage;
