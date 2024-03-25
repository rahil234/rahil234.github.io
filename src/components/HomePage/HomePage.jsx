import React from "react";
import "./HomePage.css";
import Rahilsardarresume from "../../assets/cv/RahilSardar_RESUME.pdf"; // Import the CV file
// import imag from "../../assets/img/IMG_2858.png";

function Text() {
  const handleDownloadCV = () => {
    const anchor = document.createElement("a");
    anchor.href = Rahilsardarresume;
    anchor.download = "Rahil_Sardar_RESUME.pdf";
    anchor.click();
  };

  return (
    <div id="text_container">
      <span id="hellotext">-HELLO</span>
      <span id="nametext">
        I'm <font color="#ff013d">Rahil</font> Sardar
      </span>
      <span id="abouttext">
        This is Rahil Sardar Web Developer, UI/UX designer, and Embedded
        Engineer located in India, looking for working around the globe.
      </span>
      <button id="download_btn" onClick={handleDownloadCV}>
        DOWNLOAD CV
      </button>
    </div>
  );
}

// function Photo() {
//   return (
//     <div className="ph_container">
//       <img id="ph1" src={imag} alt="person imag" />
//     </div>
//   );
// }

function HomePage() {
  return (
    <div className="main_conaine">
      {/* <Photo /> */}
      <Text />
    </div>
  );
}

export default HomePage;
