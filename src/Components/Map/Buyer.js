import React from "react";
import "./Buyer.css";
import settingsAccountBox from "../icons/settingsAccountBox.png";

const Buyer = () => {
  return (
    <div className="buyer-section">
      <h1>Buyer</h1>
      <div>
        <img src={settingsAccountBox} alt="settingsAccountBox" />
      </div>
      <div>Account Settings</div>
    </div>
  );
};

export default Buyer;
