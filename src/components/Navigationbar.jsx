import "./Navigationbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/icons/green-logo.svg";
import { Link } from "react-router-dom";
import search from "../assets/icons/search.svg";
import ScrollToTop from "./ScrollToTop";

export const Navigationbar = () => {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <Navbar expand="lg" sticky="top" className="navbar">
        <Container fluid className="section">
          <Link to={"/"} className="section-logo">
            <img src={logo} alt="logo" className="logo" />
            <span className="span-logo">EasyVeg</span>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-navs">
              <Link to={"/"}>Home</Link>
              <Link to={"/why"}>Why</Link>
              <Link to={"/byIngredient"}>By Ingredient</Link>
              <Link to={"/search"}>
                <img
                  className="search-icon-navbar"
                  src={search}
                  alt="search icon"
                />
                <span className="search-span">Search Recipes</span>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
