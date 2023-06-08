import React, { lazy } from "react";
import Header from "./Components/Comman/Header/Header";
import Footer from "./Components/Comman/Footer/Footer";

import { Routes, Route } from "react-router-dom";
import Suspenseloader from "./Components/Loaders/Suspenseloader";
const Home = lazy(() => import( "./pages/Home/Home"));
const Services = lazy(() => import( "./pages/Services/software-development-services"));
const ContactUs = lazy(() => import( "./pages/ContactUs/contact-us"));
const FuleAppSolution = lazy(() => import( "./pages/FuleAppSolution/fule-app-solution"));
const MobileDevelopment = lazy(() => import("./pages/MobileDevelopment/mobile-app-development"));
const ReactNative = lazy(() => import("./pages/ReactNative/ReactNative"));
const HireSoftware = lazy(() => import("./pages/HireResources/hire-software-developers"));
const Solutions = lazy(() => import("./pages/Solutions/software-development-solutions"));
const Thankyou = lazy(() => import("./pages/Thankyou/Thankyou"));

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
          <Route path="/reactnative" element={<ReactNative />} />
          <Route path="/hiresoftware" element={<HireSoftware />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/thankyou" element={<Thankyou />} />
          
          
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
