import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <div id="magic-cursor" style={{ opacity: 0, visibility: "hidden" }}>
        <div
          id="ball"
          style={{
            opacity: 0.5,
            borderWidth: "2px",
            height: "34px",
            width: "34px",
            transform: "translate(-50%, -50%) translate(10px, 437px)",
          }}
        ></div>
      </div>
    </>
  );
}
