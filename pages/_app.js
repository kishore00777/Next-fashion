import { Provider } from "react-redux";
import { store } from "../store/index";
import "@/styles/globals.css";
import { AppBar } from "@mui/material";
import Header from "@/Component/header";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      {/* <SearchBar /> */}
      <Component {...pageProps} />
    </Provider>
  );
}
