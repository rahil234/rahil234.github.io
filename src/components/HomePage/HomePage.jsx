import React from "react";
import "./HomePage.css";
import Rahilsardarresume from "../../assets/cv/RahilSardar_RESUME.pdf"; // Import the CV file
// import imag from "../../assets/img/IMG_2334.png"

function Text() {
  // Function to handle download CV
  const handleDownloadCV = () => {
    // Initiating download by creating an anchor element
    const anchor = document.createElement("a");
    anchor.href = Rahilsardarresume; // Set the href to the imported CV file
    anchor.download = "RahilSardarRESUME.pdf"; // Set the download filename
    anchor.click(); // Simulate a click on the anchor element
  };

  return (
    <>
      <div id="text_container">
        <text id="hellotext">-HELLO</text>
        <text id="nametext">I'm <font color= "#ff013d">Rahil</font> Sardar</text>
        <text id="abouttext">
          This is Rahil Sardar Web Developer, UI/UX designer, and Embedded Engineer located in India, looking for working around the globe.
        </text>
        {/* Adding onClick event to trigger handleDownloadCV function */}
        <button id="download_btn" onClick={handleDownloadCV}>DOWNLOAD CV</button>
      </div>
    </>
  );
}

function HomePage() {
  return (
    <>
      <Text />
    </>
  );
}

export default HomePage;
