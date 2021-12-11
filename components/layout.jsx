import React, { useEffect } from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = (props) => {
  useEffect(() => {
    console.log(props.children.props);
  }, []);

  return (
    <>
      <Header {...props.children.props.header} />
      <main className="w-screen">
        {React.cloneElement(props.children, {
          notification_props: props.notification_props,
        })}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
