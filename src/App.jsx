import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from './components/navigation'; 
import { Header } from "./components/header";
import Artist from './components/artist';
import { About } from "./components/about";
import { Contact } from "./components/contact";
import Signup from "./components/signup";
import Login from "./components/login";
import Aboutus from "./components/Aboutus";
import Connect from "./components/connect";
import Create from "./components/create";
import MySpace from "./components/myspace";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import Dashboard from "./components/Dashboard";
import AfterLogin from "./components/AfterLogin";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home landingPageData={landingPageData} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/create" element={<Create />} />
          <Route path="/myspace" element={<MySpace />} />
          <Route path="/dashbaord" element={<Dashboard />} />
          <Route path="/afterlogin" element={<AfterLogin />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

const Home = ({ landingPageData }) => (
  <>
    <Header data={landingPageData.Header} />
    <About data={landingPageData.About} />
    <Artist data={landingPageData.Artist} />
    <Contact data={landingPageData.Contact} />
  </>
);

export default App;
