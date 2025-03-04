// App.js
import React, { useState } from "react";
import Navbar from "./components/Navbar";  // Correcto
import Content from "./components/Content";  // Cambié la importación a Content.js

const App = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen p-10 bg-[#0D0D1A] text-white flex flex-col items-center justify-center">
      {/* Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Content Section */}
      <Content activeTab={activeTab} />
    </div>
  );
};

export default App;
