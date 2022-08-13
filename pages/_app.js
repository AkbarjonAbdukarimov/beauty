// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
import "./MainContent.css";
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
