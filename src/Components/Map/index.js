import React, { useState } from "react";
import MapView from "./Map";
import { FaSearch, FaUser } from "react-icons/fa";
import { MdOutlineFilterAlt } from "react-icons/md";
import { GrCart } from "react-icons/gr";
import userprofile from "../icons/userprofile.png";
//link section
import accountcircle from "../icons/accountcircle.png";
import accountcircle1 from "../icons/accountcircle1.png";
import contactsupport from "../icons/contactsupport.png";
import contactsupport1 from "../icons/contactsupport1.png";
import shield from "../icons/shield.png";
import shield1 from "../icons/shield1.png";

import psychiatry from "../icons/psychiatry.png"; //sidesection
import psychiatryColor from "../icons/psychiatryColor.png"; //sidesection hover

//link section after hover
import location from "../icons/location.png";
import locationOn from "../icons/locationOn.png";
import { FaTshirt } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import { MdAddToPhotos } from "react-icons/md";
import "./index.css";
import Login from "../Map/Login";

const MapComponent = function (props) {
  return (
    <div className="map-wrapper">
      <MapView />
      <SearchControl />
      <LinksSection />
      <ShortcutBtnGroup />
    </div>
  );
};

const SearchControl = (props) => {
  const [showLoginPage, setShowLoginPage] = useState(false);

  const handleUserButtonClick = (e) => {
    // Prevent the default behavior of the click event
    e.preventDefault();

    // Toggle the showLoginPage state
    setShowLoginPage(!showLoginPage);
  };

  // Apply a different class based on the showLoginPage state
  const userButtonClass = showLoginPage ? "user-button clicked" : "user-button";

  return (
    <div className="search-div">
      <div className="search-section">
        <div className="title">GFOKK</div>

        <div className="input-div">
          <div className="search-icon">
            <FaSearch />
          </div>
          <input
            className="input-search"
            type={"text"}
            placeholder="Search for Restuarant"
          />
        </div>

        <div className="filter-btn">
          <MdOutlineFilterAlt />
        </div>
      </div>

      <div
        style={{
          position: "relative",
          left: "130px",
          width: "100px",
          height: "20px",
          right: "10px",
        }}
      >
        <MdAddToPhotos fontSize="20px" />

        <p style={{ fontSize: "13px" }}>Add Product</p>
      </div>

      <div className="cart-button">
        <GrCart />
      </div>

      {/*<div className="user-button">
        <FaUser />
      </div>*/}

      <div className={userButtonClass}>
        {/*//onClick={handleUserButtonClick}*/}
        {/*<FaUser />*/}
        <img src={userprofile} width="42px" height="42px" />
        {/* {showLoginPage && <Login />}*/}
      </div>
    </div>
  );
};

const LinksSection = () => {
  const [isClicked, setIsClicked] = useState(false); //this if for home
  const [position, setPosition] = useState(0); //this is for home
  const [walletClicked, setWalletClicked] = useState(false); //this is about us
  const [walletPosition, setWalletPosition] = useState(0); //this is about us

  const [menuClicked, setMenuClicked] = useState(false); //this is for security
  const [menuPosition, setMenuPosition] = useState(0); //this is for security

  const [privacyClicked, setPrivacyClicked] = useState(false); //privacy
  const [privacyPosition, setPrivacyPosition] = useState(0); //privacy

  //this is for home
  const handleClick = () => {
    setIsClicked(!isClicked);
    setPosition(isClicked ? 0 : -10);
    // Reset other images
    setWalletClicked(false);
    setWalletPosition(0);
    setMenuClicked(false);
    setMenuPosition(0);
    setPrivacyClicked(false);
    setPrivacyPosition(0);
  };

  //about us img
  const handleWalletClick = () => {
    setWalletClicked(!walletClicked);
    setWalletPosition(walletClicked ? 0 : -10);

    setIsClicked(false);
    setPosition(0);
    setMenuClicked(false);
    setMenuPosition(0);
    setPrivacyClicked(false);
    setPrivacyPosition(0);
  };

  //this is for security
  const handleMenuClick = () => {
    setMenuClicked(!menuClicked);
    setMenuPosition(menuClicked ? 0 : -10);
    // Reset other images
    setIsClicked(false);
    setPosition(0);
    setWalletClicked(false);
    setWalletPosition(0);
    setPrivacyClicked(false);
    setPrivacyPosition(0);
  };

  //this for privacy
  const handlePrivacyClick = () => {
    setPrivacyClicked(!privacyClicked);
    setPrivacyPosition(privacyPosition ? 0 : -10);
    // Reset other images
    setIsClicked(false);
    setPosition(0);
    setWalletClicked(false);
    setWalletPosition(0);
    setMenuClicked(false);
    setMenuPosition(0);
  };

  return (
    <div className="tos-section">
      <div className="icon-container">
        {isClicked && (
          <hr
            className="hide-line"
            style={{
              width: "40px",
              color: "white",
              position: "absolute",
              top: "-8px",
              marginLeft: "10px",
              borderTop: "1px solid white",
            }}
          ></hr>
        )}
        <img
          src={isClicked ? locationOn : location}
          //src={menuhome}
          //className="tos-link"
          className={`tos-link ${isClicked ? "white-icon" : ""}`}
          id="myDIV"
          alt="location"
          style={{
            // width: "60px",
            //height: "60px",
            width: "20px", // Adjust the width based on isClicked
            height: "20px",
            padding: "0%",
            position: "relative",
            transition: "top 0.3s ease",
            top: `${position}px`,
            //  marginRight: "10px",
            marginLeft: "20px",
          }}
          onClick={handleClick}
        />
        {isClicked && (
          <div
            style={{
              position: "absolute",
              fontSize: "10px",
              marginTop: "25px",
              marginLeft: "16px",
              textAlign: "center",
            }}
            className="hide"
          >
            Home
          </div>
        )}

        {walletClicked && (
          <hr
            className="hide-line"
            style={{
              width: "40px",
              color: "white",
              position: "absolute",
              top: "-8px",
              marginLeft: "70px",
              borderTop: "1px solid white",
            }}
          ></hr>
        )}

        <img
          src={walletClicked ? accountcircle1 : accountcircle}
          // src={menuwallet}
          //className="tos-link"
          className={`tos-link ${walletClicked ? "white-icon" : ""}`}
          id="myDIV"
          alt="menuwallet"
          style={{
            width: "20px",
            height: "20px",
            position: "relative",
            transition: "top 0.3s ease",
            top: `${walletPosition}px`,
            marginLeft: "-10px",
          }}
          onClick={handleWalletClick}
        />
        {/* <HiOutlineUserCircle className="tos-link" id="myDIV" />*/}
        {walletClicked && (
          <div
            className="hide"
            style={{
              position: "absolute",
              fontSize: "10px",
              marginTop: "25px",
              marginLeft: "70px",
              textAlign: "center",
            }}
          >
            About Us
          </div>
        )}

        {/*<MdOutlineContactSupport className="tos-link" id="myDIV" />*/}

        {menuClicked && (
          <hr
            className="hide-line"
            style={{
              width: "40px",
              color: "white",
              position: "absolute",
              top: "-8px",
              marginLeft: "134px",
              borderTop: "1px solid white",
            }}
          ></hr>
        )}
        <img
          src={menuClicked ? contactsupport1 : contactsupport}
          //src={menuanalysis}
          //className="tos-link"
          className={`tos-link ${menuClicked ? "white-icon" : ""}`}
          id="myDIV"
          alt="menuanalysis"
          style={{
            width: "20px",
            height: "20px",
            position: "relative",
            transition: "top 0.3s ease",
            top: `${menuPosition}px`,
            marginLeft: "-10px",
          }}
          onClick={handleMenuClick}
        />
        {menuClicked && (
          <div
            style={{
              position: "absolute",
              fontSize: "10px",
              marginTop: "25px",
              marginLeft: "140px",
              textAlign: "center",
            }}
            className="hide"
          >
            Support
          </div>
        )}

        {privacyClicked && (
          <hr
            className="hide-line"
            style={{
              width: "40px",
              color: "white",
              position: "absolute",
              top: "-8px",
              marginLeft: "200px",
              borderTop: "1px solid white",
            }}
          ></hr>
        )}

        <img
          src={privacyClicked ? shield1 : shield}
          //src={menuprofile}
          style={{
            width: "20px",
            height: "20px",
            position: "relative",
            transition: "top 0.3s ease",
            top: `${privacyPosition}px`,
            right: "15px",
          }}
          //src={shield_locked}
          //src={shield}
          alt="shield"
          id="myDIV"
          //className="tos-link"
          className={`tos-link ${privacyClicked ? "white-icon" : ""}`}
          onClick={handlePrivacyClick}
        />
        {privacyClicked && (
          <div
            style={{
              position: "absolute",
              fontSize: "10px",
              marginTop: "25px",
              marginLeft: "205px",
              textAlign: "center",
            }}
            className="hide"
          >
            Privacy
          </div>
        )}
      </div>
    </div>
  );
};

const ShortcutBtnGroup = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  return (
    <div
      className={`btn-aside-section ${isHovered ? "hovered" : ""}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="btn-group">
        <div className="btn-item">
          <img
            src={isHovered ? psychiatryColor : psychiatry}
            //src={psychiatry}
            //src={Agriculture}
            alt="agriculture"
            width="25px"
            className="short-image"
            id="agriculture"
          />
          <div className="short-hide">Agriculture</div>
        </div>

        <div className="btn-item">
          <FaTshirt size="25px" className="short-image" id="textiles" />
          <div className="short-hide">Textiles and Handloom</div>
        </div>

        <div className="btn-item">
          <IoFastFood size="25px" className="short-image" id="food" />
          <div className="short-hide">Food Products</div>
        </div>

        <div className="btn-item">
          <VaccinesIcon size="25px" className="short-image" id="medicine" />
          <div className="short-hide">Medicine</div>
        </div>
      </div>
    </div>
  );
};
export default MapComponent;
