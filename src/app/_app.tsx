// _app.tsx
import "../styles/globals.css";
import BackgroundMusic from "./components/BackgroundMusic";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <BackgroundMusic />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
