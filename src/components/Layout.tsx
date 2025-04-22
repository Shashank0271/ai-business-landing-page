import React, { useEffect } from "react";
import Footer from "./elements/Footer";
import Navbar from "./elements/Navbar";

interface LayoutProps {
  title: string;
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <Navbar />
      <div className=" flex flex-col gap-y-20 md:gap-y-32">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
