import Breadcrumb from "@/components/hero/breadcrump";
import Layout from "@/components/layout";
import Listing from "@/components/property/listing";
import { Link } from "react-router-dom";

const PropertyListing = ({}) => {
  return (
    <Layout>
      <Breadcrumb image="/images/banner/service.png" title="Shopping & Ammenities" />
      <Listing />
    </Layout>
  );
};
export default PropertyListing;
