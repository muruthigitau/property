import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Jivux - Real Estate HTML Template</title>
        {/* <!-- Favicon Icon --> */}
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="images/favicon.png"
        />
        {/* <!-- Google Fonts css--> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* <!-- Bootstrap css --> */}
        <link href="css/bootstrap.min.css" rel="stylesheet" media="screen" />
        {/* <!-- SlickNav css --> */}
        <link href="css/slicknav.min.css" rel="stylesheet" />
        {/* <!-- Swiper css --> */}
        <link rel="stylesheet" href="css/swiper-bundle.min.css" />
        {/* <!-- Font Awesome icon css--> */}
        <link href="css/all.min.css" rel="stylesheet" media="screen" />
        {/* <!-- Animated css --> */}
        <link href="css/animate.css" rel="stylesheet" />
        {/* <!-- Magnific css --> */}
        <link href="css/magnific-popup.css" rel="stylesheet" />
        {/* <!-- Main custom css --> */}
        <link href="css/custom.css" rel="stylesheet" media="screen" />
        {/* Preloading jQuery if needed early */}
        <Script src="js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />

        {/* External Scripts */}
        <Script src="js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="js/validator.min.js" strategy="afterInteractive" />
        <Script src="js/jquery.slicknav.js" strategy="lazyOnload" />
        <Script src="js/swiper-bundle.min.js" strategy="lazyOnload" />
        <Script src="js/jquery.waypoints.min.js" strategy="lazyOnload" />
        <Script src="js/jquery.counterup.min.js" strategy="lazyOnload" />
        <Script src="js/jquery.magnific-popup.min.js" strategy="lazyOnload" />
        <Script src="js/SmoothScroll.js" strategy="lazyOnload" />
        <Script src="js/parallaxie.js" strategy="lazyOnload" />
        <Script src="js/gsap.min.js" strategy="lazyOnload" />
        <Script src="js/magiccursor.js" strategy="lazyOnload" />
        <Script src="js/splitType.js" strategy="lazyOnload" />
        <Script src="js/ScrollTrigger.min.js" strategy="lazyOnload" />
        <Script src="js/jquery.mb.YTPlayer.min.js" strategy="lazyOnload" />
        <Script src="js/function.js" strategy="afterInteractive" />
        <script src="js/wow.js" async></script>
      </body>
    </Html>
  );
}
