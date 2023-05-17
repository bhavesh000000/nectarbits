import React from "react";
import Header from "./Components/Comman/Header/Header";
import Footer from "./Components/Comman/Footer/Footer";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import ContactUs from "./pages/ContactUs/ContactUs";

import Layout from "./Layout/Layout";
import FuleAppSolution from "./pages/FuleAppSolution/FuleAppSolution";
import MobileDevelopment from "./pages/MobileDevelopment/MobileDevelopment";

function App() {
  return (
    <div className="App">
      <Header />

      {/* <Home />
        <Services /> */}

      <Routes>
        {/* <Route element={<Layout hideHeaderPaths={["/contactus"]} />}> */}

          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/fulesolution" element={<FuleAppSolution />} />
          <Route path="/mobiledevelopment" element={<MobileDevelopment />} />
          
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
