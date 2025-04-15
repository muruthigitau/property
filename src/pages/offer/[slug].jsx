// src/pages/OfferDetailPage.js
import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "@/components/hero/breadcrump";
import Layout from "@/components/layout";
import mallOffers from "@/data/mallOffers";
import OfferSingle from "@/components/offer/Single";

const OfferDetailPage = () => {
  const { slug } = useParams();
  const offer = mallOffers.find((offer) => offer.slug === slug);

  if (!slug) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-lg font-semibold text-gray-600 animate-pulse">
          Loading offer details...
        </p>
      </div>
    );
  }

  return (
    <Layout>
      {offer ? (
        <>
          <Breadcrumb image="/images/banner/offer.png" title={offer.name} />
          <OfferSingle offer={offer} />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-[50vh] bg-gray-100">
          <p className="text-2xl font-bold text-red-500">Offer not found</p>
          <p className="mt-2 text-gray-600">
            The offer you are looking for does not exist or has been removed.
          </p>
        </div>
      )}
    </Layout>
  );
};

export default OfferDetailPage;
