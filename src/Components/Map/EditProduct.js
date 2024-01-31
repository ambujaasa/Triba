import React, { useState } from "react";
import "./AddProduct.css";
import { MdMenu } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import userprofile from "../icons/userprofile.png";
import { GoHomeFill } from "react-icons/go";
import nutrition1 from "../icons/nutrition1.png";
import nutrition from "../icons/nutrition.png";
import package2 from "../icons/package2.png";
import package1 from "../icons/package1.png";
import orderHistory from "../icons/orderHistory.png";
import orderHistory1 from "../icons/orderHistory1.png";
import { MdManageAccounts } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { BiCloudUpload } from "react-icons/bi";
import { HiOutlineChevronUpDown } from "react-icons/hi2";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { CgClose } from "react-icons/cg";
import { LuLogIn } from "react-icons/lu";
const EditProduct = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [isItemListVisible, setIsItemListVisible] = useState(false); //this is for icon action
  const [hoveredItem, setHoveredItem] = useState(null); // this is for sidebar hover effect to span
  const handleIconClick = () => {
    setIsItemListVisible(!isItemListVisible);
  };

  const handleItemClick = (item) => {
    setActiveItem((prevActiveItem) => (prevActiveItem === item ? null : item));
  };

  const isItemActive = (item) => activeItem === item;

  return (
    <div
      className="addproduct-section"
      style={{
        backgroundColor: "white",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        className="title-section"
        //style={{ boxShadow: "1px 0px 0px rgba(1, 1, 1, 0.2)" }}
        style={{
          boxShadow: "0px 4px 8px rgba(1, 1, 1, 0.3)",
          backgroundColor: "white",
        }}
      >
        <h1 style={{ color: "gray", textAlign: "center" }}>GFOKK</h1>
        <p style={{ fontSize: "12px", color: "grey", textAlign: "center" }}>
          @username
        </p>
      </div>

      {/*dashboard*/}
      <div
        className="dashboard-section"
        style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
      >
        <div className="dashboard-div">
          <MdMenu className="menuicon" size={30} />
          <h1 style={{ marginLeft: "20px" }}>Dashboard</h1>
        </div>

        <div class="search-container">
          <input type="text" className="search-input" placeholder="Search..." />
          <IoIosSearch className="search-icon" />
          <img
            src={userprofile}
            alt="userprofile"
            width="40px"
            height="auto"
            style={{
              marginLeft: "130px",
              alignItems: "center",
              marginTop: "-100px",
              marginBottom: "8px",
            }}
          />
        </div>
      </div>

      {/* back button */}
      <div
        style={{
          backgroundColor: "#e5e2e2",
          height: "300vh",
          width: "180vh",
          position: "absolute",
          left: "210px",
          top: "130px",
          boxShadow: "0 4px 8px rgba(1, 1, 1, 0.2)",
        }}
      >
        <div className="button-section">
          <div className="back-button">
            <button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MdOutlineKeyboardArrowLeft style={{ marginRight: "5px" }} />
              View GI Products
            </button>
          </div>
        </div>
        <div className="middle-section">
          <div style={{ borderBottom: "1px solid #e5e2e2" }}>
            <h4
              style={{
                padding: "10px",
                fontFamily: "sans-serif",
              }}
            >
              Edit GI Product
            </h4>
          </div>
          <form className="form-section">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "20px",
                padding: "10px",
              }}
            >
              <label style={{ fontWeight: "600" }}>Name</label>
              <input
                type="text"
                style={{
                  width: "450px",
                  height: "30px",
                  borderRadius: "5px",
                  border: "1px solid gray",
                  marginTop: "10px",
                }}
              />
              <label style={{ marginTop: "10px", fontWeight: "600" }}>
                Images
              </label>
              <input
                placeholder="Upload upto 5 Images"
                type="text"
                style={{
                  width: "440px",
                  height: "30px",
                  borderRadius: "5px",
                  border: "1px solid gray",
                  marginTop: "10px",
                  paddingLeft: "15px",
                  fontStyle: "italic",
                  fontSize: "12px",
                }}
              />
              <BiCloudUpload
                style={{
                  position: "absolute",
                  top: "16%",
                  paddingRight: "370px",
                  right: "10px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginLeft: "-20px",
                  //      marginRight: "-10px",
                }}
              >
                <div
                  className="input-container"
                  style={{ marginRight: "20px", marginLeft: "100px" }}
                >
                  <input
                    //className="input-div"
                    type="text"
                    value="Image1.png"
                    // placeholder="Image1.png"
                    style={{
                      width: "85px",
                      height: "25px",
                      left: "50px",
                      paddingRight: "10px",
                      //paddingLeft: "0px",
                      marginTop: "4px",
                      marginRight: "100px",
                      marginLeft: "-30px",
                      border: "0px solid grey",
                      backgroundColor: "aliceblue",
                      color: "blue",
                      borderRadius: "3px",
                      textAlign: "center",
                      position: "relative",

                      //padding: "1px",
                    }}
                  />
                  <CgClose className="close-icon" />
                </div>

                <div
                  className="input-container"
                  style={{ marginRight: "10px", marginLeft: "-80px" }}
                >
                  <input
                    //className="input-div"
                    type="text"
                    value="Image2.png"
                    //placeholder="Image2.png"
                    style={{
                      width: "85px",
                      height: "25px",
                      left: "50px",
                      paddingRight: "10px",
                      //paddingLeft: "0px",
                      marginTop: "4px",
                      marginRight: "100px",
                      marginLeft: "-30px",
                      border: "0px solid grey",
                      backgroundColor: "aliceblue",
                      color: "blue",
                      borderRadius: "3px",
                      textAlign: "center",
                      position: "relative",

                      //padding: "1px",
                    }}
                  />
                  <CgClose
                    className="close-icon"
                    style={{ marginLeft: "105px" }}
                  />
                </div>

                <div
                  className="input-container"
                  style={{ marginRight: "10px", marginLeft: "-70px" }}
                >
                  <input
                    //className="input-div"
                    type="text"
                    value="Image3.png"
                    //  placeholder="Image3.png"
                    style={{
                      width: "85px",
                      height: "25px",
                      left: "50px",
                      paddingRight: "10px",
                      //paddingLeft: "0px",
                      marginTop: "4px",
                      marginRight: "100px",
                      marginLeft: "-30px",
                      border: "0px solid grey",
                      backgroundColor: "aliceblue",
                      color: "blue",
                      borderRadius: "3px",
                      textAlign: "center",
                      position: "relative",

                      //padding: "1px",
                    }}
                  />
                  <CgClose className="close-icon" style={{ left: "310px" }} />
                </div>
                <div
                  className="input-container"
                  style={{ marginRight: "10px", marginLeft: "-60px" }}
                >
                  <input
                    //className="input-div"
                    type="text"
                    value="Image4.png"
                    //placeholder="Image4.png"
                    style={{
                      width: "85px",
                      height: "25px",
                      left: "50px",
                      paddingRight: "10px",
                      //paddingLeft: "0px",
                      marginTop: "4px",
                      marginRight: "100px",
                      marginLeft: "-30px",
                      border: "0px solid grey",
                      backgroundColor: "aliceblue",
                      color: "blue",
                      borderRadius: "3px",
                      textAlign: "center",
                      position: "relative",

                      //padding: "1px",
                    }}
                  />
                  <CgClose className="close-icon" style={{ left: "425px" }} />
                </div>

                <div
                  className="input-container"
                  style={{ marginRight: "310px", marginLeft: "-50px" }}
                >
                  <input
                    //className="input-div"
                    type="text"
                    value="Image5.png"
                    //placeholder="Image5.png"
                    style={{
                      width: "85px",
                      height: "25px",
                      left: "-400px",
                      paddingRight: "10px",
                      marginTop: "35px",
                      marginRight: "100px",
                      marginLeft: "-30px",
                      border: "0px solid grey",
                      backgroundColor: "aliceblue",
                      color: "blue",
                      borderRadius: "3px",
                      textAlign: "center",
                      position: "relative",

                      //padding: "1px",
                    }}
                  />
                  <CgClose
                    className="close-icon"
                    style={{ left: "100px", marginTop: "40px" }}
                  />
                </div>
              </div>
              <label style={{ marginTop: "10px", fontWeight: "600" }}>
                Category
              </label>
              <input
                type="text"
                value="Select..."
                style={{
                  width: "450px",
                  height: "30px",
                  borderRadius: "5px",
                  border: "1px solid gray",
                  marginTop: "10px",
                  paddingLeft: "10px",
                }}
              />
              <HiOutlineChevronUpDown
                style={{
                  position: "absolute",
                  top: "26.7%",
                  right: "10px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  paddingRight: "370px",
                }}
                onClick={handleIconClick}
              />
              {/*{isItemListVisible && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    top: "64%",
                    right: "200px",
                    transform: "translateY(-50%)",
                    background: "#fff",
                    padding: "10px",
                    border: "1px solid #ccc",
                  }}
                >
                  <p>Item - 1</p>
                  <p>Item - 2</p>
                  <p>Item - 3</p>
                  <p>Item - 4</p>
                  <p>Item - 5</p>
                  <p>Item - 6</p>
                  <p>Item Selected - 1</p>
                </div>
                )}*/}
              <label style={{ marginTop: "10px", fontWeight: "600" }}>
                Type
              </label>
              <input
                type="text"
                value="Select..."
                style={{
                  width: "450px",
                  height: "30px",
                  borderRadius: "5px",
                  border: "1px solid gray",
                  marginTop: "10px",
                  paddingLeft: "10px",
                }}
              />
              <HiOutlineChevronUpDown
                style={{
                  position: "absolute",
                  top: "32.6%",
                  right: "10px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  paddingRight: "370px",
                }}
              />
              <label style={{ marginTop: "10px", fontWeight: "600" }}>
                Price
              </label>
              <input
                type="text"
                style={{
                  width: "460px",
                  height: "30px",
                  borderRadius: "5px",
                  border: "1px solid gray",
                  marginTop: "10px",
                }}
              />
              <LiaRupeeSignSolid
                style={{
                  position: "absolute",
                  top: "38.2%",
                  left: "30px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              />
              <label style={{ marginTop: "10px", fontWeight: "600" }}>
                Inventory
              </label>
              <input
                type="text"
                style={{
                  width: "460px",
                  height: "30px",
                  borderRadius: "5px",
                  border: "1px solid gray",
                  marginTop: "10px",
                }}
              />
              <HiOutlineChevronUpDown
                style={{
                  position: "absolute",
                  top: "44.2%",
                  right: "10px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  paddingRight: "370px",
                }}
              />

              <label style={{ marginTop: "10px", fontWeight: "600" }}>
                Volume
              </label>
              <input
                type="text"
                style={{
                  width: "460px",
                  height: "30px",
                  borderRadius: "5px",
                  border: "1px solid gray",
                  marginTop: "10px",
                }}
              />
              <HiOutlineChevronUpDown
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "10px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  paddingRight: "370px",
                }}
              />

              <label style={{ marginTop: "10px", fontWeight: "600" }}>
                Variation
              </label>
              <input
                type="text"
                style={{
                  width: "460px",
                  height: "30px",
                  borderRadius: "5px",
                  border: "1px solid gray",
                  marginTop: "10px",
                }}
              />

              <label style={{ marginTop: "10px", fontWeight: "600" }}>
                Origin Location
              </label>
              <input
                type="text"
                style={{
                  width: "460px",
                  height: "30px",
                  borderRadius: "5px",
                  border: "1px solid gray",
                  marginTop: "10px",
                }}
              />

              <label
                style={{
                  marginTop: "10px",
                  fontWeight: "600",
                  position: "relative",
                }}
              >
                Materials Used
              </label>
              <label
                style={{
                  position: "absolute",
                  top: "64%",
                  left: "40%",
                  color: "#e5e2e2",
                  fontFamily: "sans-serif",
                }}
              >
                use(,) to step,tags
              </label>
              <input
                type="text"
                style={{
                  width: "460px",
                  height: "30px",
                  borderRadius: "5px",
                  border: "1px solid gray",
                  marginTop: "10px",
                }}
              />

              <label
                style={{
                  marginTop: "10px",
                  fontWeight: "600",
                  position: "relative",
                }}
              >
                Description
              </label>
              <textarea
                type="text"
                placeholder="Enter product description"
                style={{
                  width: "450px",
                  height: "80px",
                  borderRadius: "5px",
                  border: "1px solid gray",
                  marginTop: "10px",
                  paddingLeft: "15px",
                  paddingTop: "5px",
                }}
              />
              <label
                style={{
                  position: "absolute",
                  top: "79.5%",
                  left: "40%",
                  color: "#e5e2e2",
                  fontFamily: "sans-serif",
                }}
              >
                max 2000 characters
              </label>
              <label
                style={{
                  position: "absolute",
                  top: "82%",
                  left: "40%",
                  color: "#e5e2e2",
                  fontFamily: "sans-serif",
                }}
              >
                use(,) to step,tags
              </label>

              <label
                style={{
                  marginTop: "30px",
                  fontWeight: "600",
                  position: "relative",
                }}
              >
                SEO Keywords
              </label>
              <input
                type="text"
                style={{
                  width: "470px",
                  height: "30px",
                  borderRadius: "5px",
                  border: "1px solid gray",
                  marginTop: "10px",
                }}
              />

              <hr style={{ marginTop: "20px", width: "800px" }}></hr>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: "680px",
                  marginTop: "20px",
                  padding: "3px",
                  justifyContent: "space-between",
                  gap: "8px",
                }}
              >
                <button
                  type="button"
                  style={{
                    backgroundColor: "white",
                    color: "gray",
                    border: "1px solid gray",
                    padding: "2px",
                    borderRadius: "5px",
                    fontSize: "12px",
                    height: "26px",
                    width: "100px",
                  }}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  style={{
                    backgroundColor: "steelblue",
                    fontSize: "10px",
                    height: "26px",
                    width: "250px",
                    textAlign: "center",

                    color: "white",
                    border: "1px solid gray",
                    //padding: "1px",
                    borderRadius: "5px",
                    transition: "background-color 0.3s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "blue")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "steelblue")
                  }
                >
                  Update Product
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* sidebar */}
      <div
        class="sidebar"
        style={{
          boxShadow: "0px -4px 8px rgba(1, 1, 1, 0.2)",
          backgroundColor: "white",
        }}
      >
        <div
          className={`sidebar-item ${isItemActive("Home") ? "active" : ""}`}
          onClick={() => handleItemClick("Home")}
          style={{
            background: isItemActive("Home") ? "lightblue" : "",
            borderBottomRightRadius: "40px",
            borderTopRightRadius: "15px",
            width: "170px",
            height: "0px",
            position: "relative",
            top: "10px",
          }}
        >
          {/* Small box with dark blue color */}
          {isItemActive("Home") && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "0",
                transform: "translateY(-50%)",
                width: "10px",
                height: "50px",
                // background: "blue",
                background: "rgb(57, 138, 204)",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
              }}
            />
          )}
          <GoHomeFill
            style={{
              color: isItemActive("Home") ? "blue" : "gray",
              width: "20px",
              height: "20px",
              marginLeft: "3px",
            }}
          />
          <span
            style={{
              color: isItemActive("Home") ? "blue" : "gray",
              marginLeft: "6px",
              transition: "color 0.3s ease", // Add transition for the color change
              /*color:
                hoveredItem === "Navigation to Home" ||
                isItemActive("Navigation to Home")
                  ? "lightblue"
                  : "gray",
            }}
            onMouseOver={() => setHoveredItem("Navigation to Home")}
            onMouseOut={() => setHoveredItem(null)}*/
            }}
          >
            Home
          </span>
        </div>

        <div
          className={`sidebar-item ${
            isItemActive("GI Products") ? "active" : ""
          }`}
          onClick={() => handleItemClick("GI Products")}
          style={{
            background: isItemActive("GI Products") ? "lightblue" : "",
            borderBottomRightRadius: "40px",
            borderTopRightRadius: "15px",
            width: "170px",
            height: "0px",
            position: "relative",
          }}
        >
          {/* Small box with dark blue color */}
          {isItemActive("GI Products") && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "0",
                transform: "translateY(-50%)",
                width: "10px",
                height: "50px",
                // background: "blue",
                background: "rgb(57, 138, 204)",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
              }}
            />
          )}
          <img
            className="nutrition"
            // src={nutrition1}
            // src={isItemActive ? "nutrition1" : "nutrition"}
            src={isItemActive("GI Products") ? nutrition : nutrition1}
            style={{
              color: isItemActive("GI Products") ? "blue" : "gray",
              width: "20px",
              height: "20px",
            }}
          />
          <span
            style={{
              color: isItemActive("GI Products") ? "blue" : "gray",
              marginLeft: "6px",
              transition: "color 0.3s ease", // Add transition for the color change
              /*color:
                hoveredItem === "GI Products" || isItemActive("GI Products")
                  ? "lightblue"
                  : "gray",
            }}
            onMouseOver={() => setHoveredItem("GI Products")}
          onMouseOut={() => setHoveredItem(null)}*/
            }}
          >
            GI Products
          </span>
        </div>

        <div
          className={`sidebar-item ${
            isItemActive("Order Management") ? "active" : ""
          }`}
          onClick={() => handleItemClick("Order Management")}
          style={{
            background: isItemActive("Order Management") ? "lightblue" : "",
            borderBottomRightRadius: "40px",
            borderTopRightRadius: "15px",
            width: "170px",
            height: "0px",
            position: "relative",
          }}
        >
          {/* Small box with dark blue color */}
          {isItemActive("Order Management") && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "0",
                transform: "translateY(-50%)",
                width: "10px",
                height: "50px",
                //background: "blue",
                background: "rgb(57, 138, 204)",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
              }}
            />
          )}
          <img
            //src={package2}
            src={isItemActive("Order Management") ? package1 : package2}
            alt="package2"
            style={{
              color: isItemActive("Order Management") ? "blue" : "gray",
              width: "20px",
              height: "20px",
            }}
          />
          <span
            style={{
              color: isItemActive("Order Management") ? "blue" : "gray",
              marginLeft: "6px",
              transition: "color 0.3s ease", // Add transition for the color change
              /*    color:
                hoveredItem === " Order Management" ||
                isItemActive(" Order Management")
                  ? "lightblue"
                  : "gray",
            }}
            onMouseOver={() => setHoveredItem(" Order Management")}
            onMouseOut={() => setHoveredItem(null)}*/
            }}
          >
            Order Management
          </span>
        </div>

        <div
          className={`sidebar-item ${
            isItemActive("Order History") ? "active" : ""
          }`}
          onClick={() => handleItemClick("Order History")}
          style={{
            background: isItemActive("Order History") ? "lightblue" : "",
            borderBottomRightRadius: "40px",
            borderTopRightRadius: "15px",
            width: "170px",
            height: "0px",
            position: "relative",
          }}
        >
          {/* Small box with dark blue color */}
          {isItemActive("Order History") && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "0",
                transform: "translateY(-50%)",
                width: "10px",
                height: "50px",
                //background: "blue",
                background: "rgb(57, 138, 204)",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
              }}
            />
          )}
          <img
            //  src={orderHistory}
            src={isItemActive("Order History") ? orderHistory1 : orderHistory}
            alt="orderHistory"
            style={{
              color: isItemActive("Order History") ? "blue" : "gray",
              width: "20px",
              height: "20px",
            }}
          />
          <span
            style={{
              color: isItemActive("Order History") ? "blue" : "gray",
              marginLeft: "6px",
              transition: "color 0.3s ease", // Add transition for the color change
              /*    color:
                hoveredItem === " Order History" ||
                isItemActive(" Order History")
                  ? "lightblue"
                  : "gray",
            }}
            onMouseOver={() => setHoveredItem(" Order History")}
            onMouseOut={() => setHoveredItem(null)}*/
            }}
          >
            Order History
          </span>
        </div>

        <div
          className={`sidebar-item ${
            isItemActive("Account Settings") ? "active" : ""
          }`}
          onClick={() => handleItemClick("Account Settings")}
          style={{
            background: isItemActive("Account Settings") ? "lightblue" : "",
            borderBottomRightRadius: "40px",
            borderTopRightRadius: "15px",
            width: "170px",
            height: "0px",
            position: "relative",
          }}
        >
          {/* Small box with dark blue color */}
          {isItemActive("Account Settings") && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "0",
                transform: "translateY(-50%)",
                width: "10px",
                height: "50px",
                //background: "blue",
                background: "rgb(57, 138, 204)",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
              }}
            />
          )}
          <MdManageAccounts
            style={{
              color: isItemActive("Account Settings") ? "blue" : "gray",
              width: "20px",
              height: "20px",
            }}
          />
          <span
            style={{
              color: isItemActive("Account Settings") ? "blue" : "gray",
              marginLeft: "6px",
              transition: "color 0.3s ease", // Add transition for the color change
              /*color:
                hoveredItem === " Account Settings" ||
                isItemActive(" Account Settings")
                  ? "lightblue"
                  : "gray",
            }}
            onMouseOver={() => setHoveredItem(" Account Settings")}
            onMouseOut={() => setHoveredItem(null)}*/
            }}
          >
            Account Settings
          </span>
        </div>

        <div>
          <hr
            style={{
              //marginTop: "5px",
              borderBottom: "1px solid black",
              marginLeft: "15px",
              marginRight: "15px",
            }}
          ></hr>
        </div>

        <div
          className={`sidebar-item ${
            isItemActive("Navigation to Home") ? "active" : ""
          }`}
          onClick={() => handleItemClick("Navigation to Home")}
          style={{
            background: isItemActive("Navigation to Home") ? "lightblue" : "",
            borderBottomRightRadius: "40px",
            borderTopRightRadius: "15px",
            width: "170px",
            height: "00px",
            position: "relative",
            //top: "10px",
          }}
        >
          {/* Small box with dark blue color */}
          {isItemActive("Navigation to Home") && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "0",
                transform: "translateY(-50%)",
                width: "10px",
                height: "50px",
                //background: "blue",
                background: "rgb(57, 138, 204)",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
              }}
            />
          )}

          <FaLocationDot
            style={{
              color: isItemActive("Navigation to Home") ? "blue" : "gray",
              width: "20px",
              height: "20px",
            }}
          />
          <span
            style={{
              color: isItemActive("Navigation to Home") ? "blue" : "gray",
              marginLeft: "6px",
            }}
          >
            Navigate to Home
          </span>
          <MdKeyboardArrowRight
            style={{
              color: isItemActive("Navigation to Home") ? "blue" : "gray",
              width: "20px",
              height: "20px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
