import { Provider } from "react-redux";
import { store } from "../store/index";
import "@/styles/globals.css";
import { AppBar } from "@mui/material";
import Header from "@/Component/header";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      />
      <Header />
      {/* <SearchBar /> */}
      <Script
        strategy="lazyOnload"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0"
        nonce="your_nonce"
      />
      <Component {...pageProps} />
    </Provider>
  );
}
