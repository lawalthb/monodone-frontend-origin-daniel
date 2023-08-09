import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineUser } from "react-icons/ai";
import { BiListUl } from "react-icons/bi";
import s from "./customer.module.scss";
import { Form } from "react-bootstrap";
import Media from "@/utils/media";

export default function CustomerTopNav(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const { mobile, tabletAndDesktop} = Media();

  const handleOnClick = () => {
    setDropdown((prevState) => !prevState);
  };

  const profileRef = useRef();
  useEffect(() => {
    const profileHandler = (event) => {
      if (
        dropdown &&
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", profileHandler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", profileHandler);
    };
  }, [dropdown]);

  const ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (navbarOpen && ref.current && !ref.current.contains(event.target)) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
    };
  }, [navbarOpen]);


  return (
    <>
      {mobile && (
        <Container
          ref={ref}
          style={{
            margin: "0px 0px 10px 0px",
            background: "white",
            padding: "12px 20px",
            display: "flex",
            position: "relative",
          }}
        >
          <Image
            src="/img/success-logo.png"
            width="30"
            height="21"
            alt="logo"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "auto",
            }}
          >
            <Image
              style={{
                marginRight: "15px",
              }}
              src="/img/user.png"
              width="24"
              height="24"
              alt="filter"
            />
            <Form.Label style={{
                marginRight: "25px",
                marginTop: "3px",
                color: "black",
                fontWeight: "500"
              }}>
              Admin_777
            </Form.Label>
            {navbarOpen ? (
              <Image
                onClick={() => setNavbarOpen((prev) => !prev)}
                src="/img/close.png"
                width="16"
                height="13"
                alt="close"
              />
            ) : (
              <Image
              style={{
                marginTop: "5px",
              }}
                onClick={() => setNavbarOpen((prev) => !prev)}
                src="/img/mobileham.png"
                width="16"
                height="13"
                alt="filter"
              />
            )}
            <div
              style={
                navbarOpen
                  ? {
                      display: "block",
                      position: "absolute",
                      top: "40px",
                      left: "0px",
                      width: "60%",
                      zIndex: 9,
                      boxShadow:
                        "0 10px 15px -3px rgb(46 41 51 / 8%), 0 4px 6px -2px rgb(71 63 79 / 16%)",
                      transform: "translateX(0px)",
                      transition: "transform ease-in-out 0.2s",
                      background: "white",
                      color: "#00902F",
                      borderRadius: "7px",
                      height: "50vh",
                    }
                  : {
                      display: "none",
                    }
              }
            >
              <ul
                style={{
                  padding: "10px 20px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <li
                  onClick={() => {
                    props.handleIsPackage();
                    setNavbarOpen(false);
                  }}
                  style={{
                    marginBottom: "20px",
                    cursor: "pointer",
                  }}
                >
                  Package
                </li>
                <li
                  onClick={() => {
                    props.handleIsBulkDelivery();
                    setNavbarOpen(false);
                  }}
                  style={{
                    marginBottom: "20px",
                    cursor: "pointer",
                  }}
                >
                  Bulk Delivery
                </li>
                <li
                  onClick={() => {
                    props.handleIsCarClearing();
                    setNavbarOpen(false);
                    props.handleCarClearingOption();
                  }}
                  style={{
                    marginBottom: "20px",
                    cursor: "pointer",
                  }}
                >
                  Car Clearing
                </li>
                <li
                  onClick={() => {
                    props.handleIsContainerShipment();
                    setNavbarOpen(false);
                    props.handleContainerShipment();
                  }}
                  style={{
                    marginBottom: "20px",
                    cursor: "pointer",
                  }}
                >
                  Container Shipment
                </li>
                <li
                  onClick={() => {
                    props.handleIsSpecializedShipment();
                    setNavbarOpen(false);
                    props.handleSpecializedShipment();
                  }}
                  style={{
                    marginBottom: "20px",
                    cursor: "pointer",
                  }}
                >
                  Specialized Shipment
                </li>
              </ul>
            </div>
          </div>
        </Container>
      )}
      {tabletAndDesktop && (
        <Navbar
          // expand="lg"
          className={`shadow-sm bg-white ${s.navcomp}`}
          sticky="top"
        >
          <div className={`py-3 text-center ${s.icon}`} id="icon">
            <h4>monodome</h4>
          </div>
          <Container ref={profileRef}>
            <div></div>
            <div></div>
            <div></div>
            <Navbar.Text className=" d-flex justify-content-end mx-2">
              <Navbar.Text className="d-flex align-items-center justify-content-center">
                {dropdown && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      background: "white",
                      padding: "10px",
                      borderRadius: "5px",
                      width: "100px",
                      position: "absolute",
                      top: "50px",
                      right: "11rem",
                      boxSizing: "border-box",
                      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                      padding: "16px",
                    }}
                  >
                    <div
                      onClick={() => {
                        setDropdown(false);
                        props.handleCustomerProfile();
                      }}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "7px",
                        cursor: "pointer",
                      }}
                    >
                      <Image
                        style={{
                          cursor: "pointer",
                        }}
                        src="/img/profile.png"
                        width="14"
                        height="14"
                        alt="profile"
                      />
                      <Form.Label
                        style={{
                          color: "black",
                          marginLeft: "-5px",
                          cursor: "pointer",
                          fontSize: "13px",
                        }}
                      >
                        Profile
                      </Form.Label>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        cursor: "pointer",
                      }}
                    >
                      <Image
                        style={{
                          cursor: "pointer",
                        }}
                        src="/img/logout.png"
                        width="14"
                        height="14"
                        alt="profile"
                      />
                      <Form.Label
                        style={{
                          color: "black",
                          cursor: "pointer",
                        }}
                      >
                        Log out
                      </Form.Label>
                    </div>
                  </div>
                )}
                <Image
                  style={{
                    position: "absolute",
                    top: "15px",
                    right: "18rem",
                  }}
                  src="/img/online-indicator.png"
                  width="12"
                  height="12"
                  alt="indicator"
                />
                <Image
                  style={{
                    position: "absolute",
                    top: "15px",
                    right: "13.5rem",
                  }}
                  src="/img/online-indicator.png"
                  width="12"
                  height="12"
                  alt="indicator"
                />
                <span className="px-3 notfication-icon">
                  <BiListUl
                    style={{
                      color: "#333333",
                      width: "26px",
                      height: "26px",
                      backround: "transparent",
                    }}
                  />
                </span>
                <span className="ml-3 px-3">
                  <span className="img-circle p-1">
                    <AiOutlineUser
                      onClick={handleOnClick}
                      style={{
                        background: "#E7E7E7",
                        width: "26px",
                        height: "26px",
                        borderRadius: "50%",
                      }}
                    />
                  </span>
                </span>
                <span className="ml-3 border-end px-3">Nancy</span>
                <span className="ml-3 px-3">User</span>
              </Navbar.Text>
            </Navbar.Text>
          </Container>
        </Navbar>
      )}
    </>
  );
}
