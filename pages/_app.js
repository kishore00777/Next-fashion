import Header from "@/Component/header";
import { Provider } from "react-redux";
import { store } from "../store/index";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}
