import { AppProps } from "../node_modules/next/app";
import '@shared/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
