import "tailwindcss/tailwind.css";
import "semantic-ui-css/semantic.min.css";
import "../styles/global.css";
import { Provider as NotificationProvider } from "../hooks/useNotification";
import Layout from "../components/layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NotificationProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NotificationProvider>
    </>
  );
}

export default MyApp;
