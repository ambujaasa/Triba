import React, { useState } from "react";
import "./ProductInfo.css";
import "./AddProduct.css";
import { MdMenu } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import userprofile from "../icons/userprofile.png";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import nutrition1 from "../icons/nutrition1.png";
import nutrition from "../icons/nutrition.png";
import package2 from "../icons/package2.png";
import package1 from "../icons/package1.png";
import orderHistory from "../icons/orderHistory.png";
import orderHistory1 from "../icons/orderHistory1.png";
import { FaLocationDot } from "react-icons/fa6";
import { MdManageAccounts } from "react-icons/md";
import edit from "../icons/edit.png";
import edit1 from "../icons/edit1.png";
import delete1 from "../icons/delete1.png";
import delete2 from "../icons/delete2.png";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import "./DeleteConfirmationModal.css";
import { useNavigate } from "react-router-dom";
import ImageCarousel from "../Map/ImageCarousel";

const ProductInfo = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [isItemListVisible, setIsItemListVisible] = useState(false); //this is for icon action
  // const [hoveredItem, setHoveredItem] = useState(null); // this is for sidebar hover effect to span
  //const [isHovered, setIsHovered] = useState(false); //this is for edit and delete image
  const [isEditHovered, setIsEditHovered] = useState(false);
  const [isDeleteHovered, setIsDeleteHovered] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); //deletemodal form

  const navigate = useNavigate();
  const handleEditClick = () => {
    navigate("/editproduct");
  };

  const handleButtonClick = () => {
    navigate("/addproduct");
  };
  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    setIsDeleteModalOpen(false);
  };

  const handleDeleteModalClose = () => {
    setIsDeleteModalOpen(false);
  };
  /* end deletemodel*/

  const handleEditMouseEnter = () => {
    setIsEditHovered(true);
  };

  const handleEditMouseLeave = () => {
    setIsEditHovered(false);
  };

  const handleDeleteMouseEnter = () => {
    setIsDeleteHovered(true);
  };

  const handleDeleteMouseLeave = () => {
    setIsDeleteHovered(false);
  };
  //const handleMouseEnter = () => {
  //setIsHovered(true);
  //};

  // const handleMouseLeave = () => {
  // setIsHovered(false);
  //};

  //const handleIconClick = () => {
  //setIsItemListVisible(!isItemListVisible);
  //};

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
        //backgroundColor: isDeleteModalOpen ? "#f8f8f8" : "white",

        //backgroundColor: isDeleteModalOpen ? "blurwhite" : "white",
      }}
    >
      <div
        className="title-section"
        //style={{ boxShadow: "1px 0px 0px rgba(1, 1, 1, 0.2)" }}
        style={{
          boxShadow: "0px 8px rgba(1, 1, 1, 0.3)",
          backgroundColor: "white",
          //backgroundColor: isDeleteModalOpen ? "#f8f8f8" : "white",
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
        style={{ boxShadow: "0px 8px rgba(0, 0, 0, 0.2)" }}
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
          //backgroundColor: isDeleteModalOpen ? "#f8f8f8" : "#e5e5e5",
          height: "300vh",
          width: "82%",
          position: "absolute",
          left: "249px",
          top: "130px",
          boxShadow: "0 4px 8px rgba(1, 1, 1, 0.2)",
        }}
      >
        <div
          className="button-section"
          style={{
            display: "flex",
            justifyContent: "space-between",

            //backgroundColor: isDeleteModalOpen ? "#f8f8f8" : "white",
          }}
        >
          <div className="back-button" onClick={handleButtonClick}>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "80px",
                height: "30px",
                position: "relative",
              }}
            >
              <MdOutlineKeyboardArrowLeft style={{ marginRight: "5px" }} />
              Back
            </button>
          </div>

          {/* edit and delete img*/}
          <>
            <div
              className={`image-wrapper ${isEditHovered ? "hovered" : ""}`}
              onMouseEnter={handleEditMouseEnter}
              onMouseLeave={handleEditMouseLeave}
              onClick={handleEditClick}
            >
              <img
                src={edit}
                alt={edit}
                className={`edit-image ${isEditHovered ? "hidden" : ""}`}
              />
              {isEditHovered && (
                <img src={edit1} alt={edit1} className="hover-image" />
              )}
            </div>

            <div
              className={`delete-image-wrapper ${
                isDeleteHovered ? "hovered" : ""
              }`}
              onMouseEnter={handleDeleteMouseEnter}
              onMouseLeave={handleDeleteMouseLeave}
              onClick={handleDeleteClick}
            >
              <img
                src={delete2}
                alt={delete2}
                className={`delete-image ${isDeleteHovered ? "hidden" : ""}`}
              />
              {isDeleteHovered && (
                <img
                  src={delete1}
                  alt={delete1}
                  className="delete-hover-image"
                />
              )}
            </div>
          </>
        </div>

        <div
          className="middle-section"
          style={{
            height: "150vh",

            //backgroundColor: isDeleteModalOpen ? "blur(8px)" : "white",
          }}
        >
          <div>
            <p
              style={{
                padding: "10px",
                fontFamily: "sans-serif",
                color: "grey",
                marginLeft: "60px",
                marginTop: "10px",
              }}
            >
              Product Images
            </p>
          </div>

          {/* image -carousal*/}

          <div className="icon-carousal">
            <ImageCarousel />
            {isDeleteModalOpen && (
              <DeleteConfirmationModal
                onClose={handleDeleteModalClose}
                onDeleteConfirm={handleDeleteConfirm}
              />
            )}
          </div>
          {/*<Iconcorousal />
            {isDeleteModalOpen && (
              <DeleteConfirmationModal
                onClose={handleDeleteModalClose}
                onDeleteConfirm={handleDeleteConfirm}
              />
            )}*/}

          <div className="product-info">
            <div className="first-list-item">
              <li>Product Name:</li>
              <li>Category:</li>
              <li>Price:</li>
              <li>Type:</li>
              <li>Inventory:</li>
              <li>Volume:</li>
              <li>Variation:</li>
            </div>

            <div className="second-list-item">
              <li>Orange</li>
              <li>Food Items</li>
              <li>0000/-</li>
              <li>Type Name</li>
              <li>240</li>
              <li>100ML</li>
              <li>Color Name</li>
            </div>

            {/*second div */}
            <div className="second-main-div">
              <div className="third-list-item">
                <li className="single-line-item">Origin Location:</li>
                <li style={{ marginTop: "-20px" }}>Description:</li>
                <p className="paragraph">
                  An orange is a fruit of various citrus species in the family
                  Rutaceae ; it primarily refers to Citrus sinensis.
                </p>
                <li>Materials Used:</li>
                <p className="paragraph">mat1,mat2,mat3</p>
                <li>SEO Keywords:</li>
                <p className="paragraph">key1,key2,key3</p>
              </div>

              <div className="fourth-list-item">
                <li
                  className="single-line-item"
                  style={{ marginLeft: "-135px" }}
                >
                  Location Name
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* sidebar */}
      <div
        class="sidebar"
        style={{
          boxShadow: "0px -4px 8px rgba(1, 1, 1, 0.2)",
          backgroundColor: "white",
          height: "177vh",
          backgroundColor: isDeleteModalOpen ? "#f8f8f8" : "white",
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
              /* color:
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
            alt="nutrition"
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
              /*  color:
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
              /*color:
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
            //src={orderHistory}
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
              /*  color:
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
              /*  color:
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

export default ProductInfo;
