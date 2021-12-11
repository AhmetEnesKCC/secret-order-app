import React, { useEffect } from "react";
import Footer from "./footer";
import Header from "./header";
import Head from "next/head";

const Layout = (props) => {
  useEffect(() => {
    console.log(props.children.props);
  }, []);

  return (
    <div className="w-screen h-screen">
      <Header {...props.children.props.header} />
      <div className="w-full lg:w-screen">
        {React.cloneElement(props.children, {
          notification_props: props.notification_props,
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
