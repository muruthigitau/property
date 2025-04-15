import Breadcrumb from "@/components/hero/breadcrump";
import Layout from "@/components/layout";
import { useParams } from "react-router-dom";
import ShopSingle from "@/components/property/single";
import shopData from "@/data/shopData";

const ShopDetailPage = () => {
  const { id } = useParams();

  if (!id) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-lg font-semibold text-gray-600 animate-pulse">
          Loading shop details...
        </p>
      </div>
    );
  }

  const shop = shopData  
    .flatMap((item) => item.shops)
    .find((shop) => shop.slug === id);

  return (
    <Layout>
      {shop ? (
        <>
          <Breadcrumb image="/images/banner/service.png" title={shop.name} />
          <ShopSingle shop={shop} />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-[50vh] bg-gray-100">
          <p className="text-2xl font-bold text-red-500">Shop not found</p>
          <p className="mt-2 text-gray-600">
            The shop you are looking for does not exist or has been removed.
          </p>
        </div>
      )}
    </Layout>
  );
};

export default ShopDetailPage;
