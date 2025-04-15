import Breadcrumb from "@/components/hero/breadcrump";
import Layout from "@/components/layout";
import Property from "@/components/property";
import { useParams } from "react-router-dom";
import shopData from "@/data/shopData";

const ShopPage = () => {
  const { slug } = useParams();

  if (!slug) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-lg font-semibold text-gray-600 animate-pulse">
          Loading shop details...
        </p>
      </div>
    );
  }

  const category = shopData.find((item) => item.slug === slug);

  return (
    <Layout>
      {category ? (
        <>
        
        <Breadcrumb image="/images/banner/service.png" />
        <Property category={category} />
        </>) : (
        <div className="flex flex-col items-center justify-center h-[50vh] bg-gray-100">
          <p className="text-2xl font-bold text-red-500">Category not found</p>
          <p className="mt-2 text-gray-600">
            The category you are looking for does not exist or has been removed.
          </p>
        </div>
      )}
    </Layout>
  );
};
export default ShopPage;
