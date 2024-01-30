import React, { useState } from "react";
import "./Login.css";
import { LuLogIn } from "react-icons/lu";
import Buyer from "./Buyer";

const Login = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div>
      {!isClicked ? (
        <div className="login-div" onClick={handleClick}>
          {/* Your login/signup content */}
          <LuLogIn
            size={20}
            style={{ marginRight: "15px", marginLeft: "10px" }}
          />
          <div style={{ marginRight: "10px" }}>Login/Signup</div>
        </div>
      ) : (
        <Buyer />
      )}
    </div>
  );
};
export default Login;

/* return (
    <div className="login-section">
      <div className="login-div">
        <LuLogIn
          size={20}
          style={{ marginRight: "15px", marginLeft: "10px" }}
        />
        <div style={{ marginRight: "10px" }}>Login/Signup</div>
      </div>
    </div>
  );
};*/
