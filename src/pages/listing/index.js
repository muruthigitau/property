import Breadcrumb from "@/components/hero/breadcrump";
import Layout from "@/components/layout";
import Listing from "@/components/property/listing";
import Link from "next/link";

const PropertyListing = ({}) => {
  return (
    <Layout>
      <Breadcrumb />
      <Listing />
    </Layout>
  );
};
export default PropertyListing;
