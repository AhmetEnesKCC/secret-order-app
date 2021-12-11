import "tailwindcss/tailwind.css";
import "semantic-ui-css/semantic.min.css";
import "../styles/global.css";
import "../styles/skeleton-loading.css";
import { useEffect } from "react";
import { Provider as NotificationProvider } from "../hooks/useNotification";
import Header from "../components/header";
import Layout from "../components/layout";

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
