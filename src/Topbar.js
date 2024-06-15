import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Topbar.css";

function Topbar({ goToHomePage }) {
  return (
    <>
      <Navbar
        style={{ position: "fixed", width: "100%", backgroundColor: "#333" }}
      >
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Navbar.Brand>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                alt=""
                src="/tattoo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              <span onClick={goToHomePage} className="brand-name">
                <a href="/" onClick={goToHomePage} className="brand-name">
                  Tattoo Generator
                </a>
              </span>
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Topbar;
