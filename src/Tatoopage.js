import "./App.css";
import { useState, useEffect } from "react";
import { query } from "./tattoo_fetch.tsx";
import Topbar from "./Topbar.js";
import { useLocation } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";

const TatooPage = ({ goToTattooPage }) => {
  const location = useLocation();
  const { formData } = location.state || { formData: {} };
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    console.log("Prompt: " + formData.tattooDesignPrompt);

    const fetchTattooImage = () => {
      query("Tattoo stencil of " + formData.tattooDesignPrompt)
        .then((response) => {
          const url = URL.createObjectURL(response);
          setImageUrl(url);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error occurred:", error);
          setLoading(false); // Stop loading even if there's an error
        });
    };

    fetchTattooImage();
  }, [formData.tattooDesignPrompt]);

  return (
    <div className="App">
      <Topbar />
      <div
        id="image-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        {loading ? (
          <div id="loading-bar" style={{ width: "50%" }}>
            <ProgressBar animated now={100} />
          </div>
        ) : (
          imageUrl && (
            <img
              id="tattoo-image"
              src={imageUrl}
              alt="Tattoo Design"
              style={{ display: "block", margin: "0 auto", width: "50%" }}
            />
          )
        )}
      </div>
      <button onClick={fetchTattooImage}>Fetch Tattoo Image</button>
    </div>
    
  );

};

export default TatooPage;
