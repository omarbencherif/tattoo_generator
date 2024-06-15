import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "@fontsource/roboto"; // Defaults to weight 400

const LandingPage = ({ goToSecondPage }) => {
  const [formData, setFormData] = useState({
    tattooDesignPrompt: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formdata is:" + formData);
    navigate("/tattoo", { state: { formData } });
  };

  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#edeff2", // Set the background color to #242424
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#0d0d0d", // Set the text color to dark grey
            textShadow: "1px 1px 1px rgba(255, 255, 255, 0.1)", // Add a light shadow to the title text
          }}
        >
          <div
            style={{
              width: "100%",
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src="tattoo.png" alt="Tattoo" style={{ maxWidth: "50px" }} />{" "}
            <h1 style={{ fontFamily: "Roboto" }}> AI Tattoo Generator</h1>
          </div>{" "}
          <h2
            style={{
              fontFamily: "Roboto",
              fontStyle: "italic",
              fontSize: "12pt",
              width: "100%",
            }}
          >
            This website uses AI to generate tattoo stencils based on the prompt
            given to it.
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="tattooDesignPrompt"
              name="tattooDesignPrompt"
              autocomplete="off" // Add the autocomplete attribute and set it to "off"
              value={formData.tattooDesignPrompt}
              onChange={handleChange}
              placeholder="Enter your Tattoo Design Prompt..."
              style={{
                width: "100%",
                marginTop: "10px",
                textAlign: "center",
                borderRadius: "7px",
                fontSize: "15px", // Add the borderRadius property to make the edges rounded
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              display: "block",
              margin: "15px auto",
              fontSize: "15px",
              padding: "5px 10px",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LandingPage;
