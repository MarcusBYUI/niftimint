import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import "./header.css";
import LOGO_ONE from "./logo.png";
import Hamburger from "hamburger-react";
import Discord from "./discord.png";
import Facebook from "./facebook.png";
import Insta from "./insta.webp";
import Twitter from "./twitter.png";
const Header = () => {
  const [imgAddress, setImage] = useState(LOGO_ONE);
  const [isOpen, setOpen] = useState(true);

  return (
    <>
      <div className="footer">
        <div className="social_buttons">
          <span>Copyright @ NiFTigam</span>
          <div className="social_buttons_container">
            <img src={Discord} height="40px" width="40px" />
            <img src={Facebook} height="40px" width="40px" />
            <img src={Insta} height="40px" width="40px" />
            <img src={Twitter} height="40px" width="40px" />
          </div>
        </div>
      </div>
      <div className={`slider ${isOpen && "open"}`}>
        <span>Home</span>
        <span>WhitePapers</span>
        <span>Niftinomics</span>
        <span>Certik</span>
        <span>Roadmap</span>
        <span>MintNifti</span>
        <span>StakeNifti</span>
      </div>
      <div className="NavBar">
        <div className="container">
          <div className="navbar_wrapper">
            {/* <h3>NIFTI</h3> */}
            <img src={imgAddress} width="80px" height="70px" />
            {/* <button onClick={connect}>
          {" "}
          {address === 0 ? "Connect" : `${address.slice(0, 8)}....`}{" "}
        </button> */}
            <div className="menu_buttons">
              <span>Home</span>
              <span>WhitePapers</span>
              <span>Niftinomics</span>
              <span>Certik</span>
              <span>Roadmap</span>
              <span>MintNifti</span>
              <span>StakeNifti</span>
            </div>
            <Hamburger
              className="burger_menu"
              toggled={isOpen}
              size={25}
              color="#FFFFFF"
              toggle={setOpen}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
