import Footer from "../components/footer";
import "../styles/index.css";
import "../styles/typography.css";
import { AnimateSharedLayout } from "framer-motion";
import MessengerCustomerChat from "react-messenger-customer-chat";

function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <MessengerCustomerChat pageId='110322431433744' appId='487501769175392' />
      <Component {...pageProps} />
      <Footer />
    </AnimateSharedLayout>
  );
}

export default MyApp;
