// components/Content.js
import React from "react";
import Home from "./Home";
import Portfolio from "./Portafolio";
import Contact from "./Contact";

const Content = ({ activeTab }) => {
  return (
    <div className="w-full max-w-4xl text-center">
      {activeTab === "home" && <Home />}
      {activeTab === "portfolio" && <Portfolio />}
      {activeTab === "contact" && <Contact />}
    </div>
  );
};

export default Content;
