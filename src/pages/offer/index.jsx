import Breadcrumb from "@/components/hero/breadcrump";
import Layout from "@/components/layout";
import MallOffers from "@/components/offer";

const OfferList = () => {
  return (
    <Layout>
      <Breadcrumb image="/images/banner/offer.png" title="Offers" />
      <MallOffers />
    </Layout>
  );
};
export default OfferList;
