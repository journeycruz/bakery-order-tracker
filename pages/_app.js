import Footer from "../components/footer";
import "../styles/index.css";
import "../styles/typography.css";
import { AnimateSharedLayout } from "framer-motion"

function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <Component {...pageProps} />
      <Footer />
    </AnimateSharedLayout>
  );
}

export default MyApp;
