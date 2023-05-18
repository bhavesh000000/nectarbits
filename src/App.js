import React, { lazy } from "react";
import Header from "./Components/Comman/Header/Header";
import Footer from "./Components/Comman/Footer/Footer";

import { Routes, Route } from "react-router-dom";
import Suspenseloader from "./Components/Loaders/Suspenseloader";

const Home = lazy(() => import( "./pages/Home/Home"));
const Services = lazy(() => import( "./pages/Services/Services"));
const ContactUs = lazy(() => import( "./pages/ContactUs/ContactUs"));
const FuleAppSolution = lazy(() => import( "./pages/FuleAppSolution/FuleAppSolution"));
const MobileDevelopment = lazy(() => import("./pages/MobileDevelopment/MobileDevelopment"));

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
