import React from "react";
import Link from "../components/Link";

const Links = () => {
  return (
    <div className="links">
      <div className="links-sm">
        <Link linkData={{ to: "/", txt: "Primary Link" }} />
      </div>
    </div>
  );
};

export default Links;
