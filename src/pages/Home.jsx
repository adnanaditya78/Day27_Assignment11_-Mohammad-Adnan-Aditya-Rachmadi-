import React from "react";
import Book from "../components/Book";
import Navbar from "../components/Navbar";
import Packages from "../components/Packages";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="content">
          <h5>Welcome To World</h5>
          <h1>
            Visit <span className="changecontent"></span>
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae,
            nisi.
          </p>
          <a href="#book">Book Place</a>
        </div>
      </div>

      <Book />
      <Packages />
      <Services />
      <Gallery />
      <About />
      <Footer />
    </>
  );
};

export default Home;
