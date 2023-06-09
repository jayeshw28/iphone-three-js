import React from "react";

function SoundSection() {
  const handleLearnMore = () => {
    const element = document.querySelector(".display-section");
    window.scrollTo({
      top: element?.getBoundingClientRect().top + window.pageYOffset,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="sound-section wrapper">
      <div className="body">
        <div className="sound-section-content content">
          <h2 className="title">New Sound System</h2>
          <p className="text">Feel the Base.</p>
          <span className="description">
            Build-in Stereo speaker deliver 3D sound via <br /> Dolby Atmos™️
          </span>
          <ul className="links">
            <li>
              <button className="button">Buy</button>
            </li>
            <li>
              <a className="link" onClick={handleLearnMore}>
                Learn more
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SoundSection;

// 1 3 6 8 11 12
