import React from "react";
import "../assets/styles/containers/page.css";
import Text from "../components/Text";

const Page = ({ header, className, children }) => {
  return (
    <main className={`page page-${className}`}>
      <Text txtData={{ type: "h1" }}>{header}</Text>
      {children}
    </main>
  );
};

export default Page;
