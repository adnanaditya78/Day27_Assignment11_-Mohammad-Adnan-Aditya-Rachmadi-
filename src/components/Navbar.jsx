import React from "react";
import { Link } from "react-router-dom";

const NavbarItem = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Book",
    path: "#book",
  },
  {
    name: "Packages",
    path: "#packages",
  },
  {
    name: "Services",
    path: "#services",
  },
  {
    name: "Gallery",
    path: "#gallery",
  },
  {
    name: "About",
    path: "#about",
  },
];

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" id="navbar">
      <div className="container">
        <a className="navbar-brand" id="logo">
          <span>Travel</span>loger
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span>
            <i className="fa-solid fa-bars"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav me-auto">
            {NavbarItem.map((item) => (
              <li key={item.name} className="nav-item">
                <a href={item.path} className="nav-link active">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="text"
              placeholder="Search"
            />
            <button className="btn btn-primary" type="button">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
