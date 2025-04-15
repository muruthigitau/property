import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; // create this file as shown above

// Import all the pages
import HomePage from "./pages/index.jsx";
import AboutPage from "./pages/about/index.jsx";
import NotFoundPage from "./pages/404.jsx";
import BlogIndexPage from "./pages/blog/index.jsx";
import BlogPostPage from "./pages/blog/[slug].jsx";
import ContactPage from "./pages/contact/index.jsx";
import ListingPage from "./pages/listing/index.jsx";
import ShopPage from "./pages/shop/[slug]";
import ShopDetailPage from "./pages/shop/[id]";
import OfferList from "./pages/offer";
import OfferDetailPage from "./pages/offer/[slug]";
import Gallery from "./components/gallery";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogIndexPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/offer" element={<OfferList />} />
        <Route path="/offer/:slug" element={<OfferDetailPage />} />
        <Route path="/shop" element={<ListingPage />} /> 
        <Route path="/gallery" element={<Gallery />} /> 
        <Route path="/shop/:slug" element={<ShopPage />} />
        <Route path="/shops/:id" element={<ShopDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
