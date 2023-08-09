import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import AdminLoginFormMobile from "../adminpanelMobile/adminLoginFormMobile";
import NoSsr from "@/components/utils/NoSsr";
import styles from "./adminlogin.module.css";

export default function AdminLoginLayout(props) {
  const router = useRouter();
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [otpNumberError, setOtpNumberError] = useState("");
  const [emailAddressError, setEmailAddressError] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    props.setAdminData({
      ...props.adminData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log("clicked submit");
    // if (props.useEmail) {
    // }
    if (props.useEmail) {
      if (!props.adminData.username) {
        setUsernameError("User name is required");
      }
      if (!props.adminData.password) {
        setPasswordError("Password is required");
      }
      if (!props.adminData.emailAddress) {
        setEmailAddressError("Email address is required");
      }
      if (!props.adminData.otpNumber) {
        setOtpNumberError("One time password is required");
      }
      if (
        props.adminData.username &&
        props.adminData.password &&
        props.adminData.emailAddress &&
        props.adminData.otpNumber
      ) {
        setIsValid(true);
      }
    }
    if (props.usePhone) {
      if (!props.adminData.username) {
        setUsernameError("User name is required");
      }
      if (!props.adminData.password) {
        setPasswordError("Password is required");
      }
      if (!props.adminData.phoneNumber) {
        setPhoneNumberError("Phone number is required");
      }
      if (!props.adminData.otpNumber) {
        setOtpNumberError("One time password is required");
      }
      if (
        props.adminData.username &&
        props.adminData.password &&
        props.adminData.phoneNumber &&
        props.adminData.otpNumber
      ) {
        setIsValid(true);
      }
    }
    if (isValid) {
      props.setIsAdmin((prevState) => !prevState);
    }
  };

  const isMobile = useMediaQuery({
    query: "(max-width: 709px)",
  });
  const isTabAndDesktop = useMediaQuery({
    query: "(min-width: 710px)",
  });

  useEffect(() => {
    if (props.useEmail) {
      props.setUsePhone(false);
    } else {
      props.setUsePhone(true);
    }
  }, [props]);

  return (
    <NoSsr>
      <>
        {isMobile && (
          <>
            <AdminLoginFormMobile
              adminData={props.adminData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              usernameError={usernameError}
              setUsernameError={setUsernameError}
              passwordError={passwordError}
              setPasswordError={setPasswordError}
              phoneNumberError={phoneNumberError}
              setPhoneNumberError={setPhoneNumberError}
              otpNumberError={otpNumberError}
              setOtpNumberError={setOtpNumberError}
              emailAddressError={emailAddressError}
              setEmailAddressError={setEmailAddressError}
              isValid={isValid}
              setIsValid={setIsValid}
              useEmail={props.useEmail}
              setUsePhone={props.setUsePhone}
              setAdminData={props.setAdminData}
              usePhone={props.usePhone}
              setUseEmail={props.setUseEmail}
            />
          </>
        )}
        {isTabAndDesktop && (
          <>
            <div
              className={styles.adminloginbg}
              style={{
                margin: 0,
                display: "flex",
                width: "100%",
                height: '100%',
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "25%",
                  // height: "850px",
                  height: '100%',
                }}
              >
                <div
                  style={{
                    marginTop: "60px",
                    marginLeft: "30px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Form.Label
                    style={{
                      color: "white",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    monodome
                  </Form.Label>
                  <Form.Label
                    style={{
                      color: "white",
                      fontSize: "11px",
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      marginTop: "-7px",
                    }}
                  >
                    Admin Panel
                  </Form.Label>
                  <Form.Label
                    style={{
                      color: "white",
                      fontWeight: "600",
                      fontSize: "16px",
                      marginTop: "28rem",
                    }}
                  >
                    Welcome admin
                  </Form.Label>
                  <Form.Label
                    style={{
                      color: "white",
                      fontSize: "11px",
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      marginTop: "-7px",
                      width: "50%",
                    }}
                  >
                    Please login for further work in the system
                  </Form.Label>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "75%",
                  background: "white",
                  // height: "850px",
                  height: '100%',
                  minHeight: "100vh"
                }}
              >
                <div
                  style={{
                    display: "block",
                    position: "absolute",
                    top: "-20px"
                  }}
                  className="ripple_container"
                >
                  <div className="ripple-static">
                    <Image
                      style={{
                        width: "40px",
                        maxWidth: "100%",
                      }}
                      src="/img/success-logo.png"
                      width="40"
                      height="30"
                      alt="ellipse"
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "-140px",
                    }}   
                    className="ripple"             
                  >
                    <div className="ripple-green">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div className="ripple-blue">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "8.5em",
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  Log In
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "12px",
                    color: "#808080",
                  }}
                >
                  Fill in the fields below to login
                </div>
                <div
                  style={{
                    display: "flex",
                    marginTop: "30px",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "25%",
                    }}
                  ></div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "50%",
                    }}
                  >
                    <Form.Label
                      style={{
                        color: "black",
                        fontSize: "11px",
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                      }}
                    >
                      User name
                    </Form.Label>
                    <input
                      style={{
                        padding: "7px",
                        width: "100%",
                        border: "1px solid #E7E7E7",
                        borderRadius: "5px",
                        marginTop: "-6px"
                      }}
                      type="text"
                      name="username"
                      defaultValue={props.adminData.username}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                    {usernameError && (
                      <>
                        <span
                          style={{
                            color: "red",
                            fontSize: "11px",
                            fontStyle: "italic",
                          }}
                        >
                          {usernameError}
                        </span>
                      </>
                    )}
                    <Form.Label
                      style={{
                        color: "black",
                        fontSize: "11px",
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        marginTop: "10px",
                      }}
                    >
                      Password{" "}
                      <span
                        style={{
                          color: "red",
                          fontWeight: "bold",
                        }}
                      >
                        {"*"}
                      </span>
                    </Form.Label>
                    <input
                      style={{
                        padding: "7px",
                        width: "100%",
                        border: "1px solid #E7E7E7",
                        borderRadius: "5px",
                        marginTop: "-6px"
                      }}
                      type="password"
                      name="password"
                      defaultValue={props.adminData.password}
                      onChange={handleChange}
                    />
                    {passwordError && (
                      <>
                        <span
                          style={{
                            color: "red",
                            fontSize: "11px",
                            fontStyle: "italic",
                          }}
                        >
                          {passwordError}
                        </span>
                      </>
                    )}
                    {props.usePhone && (
                      <div
                        onClick={() => {
                          props.setUseEmail(true);
                          props.setUsePhone(false);
                          props.setAdminData({
                            ...props.adminData,
                            phoneNumber: "",
                          });
                        }}
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          color: "#00902F",
                          fontSize: "13px",
                          fontWeight: "500",
                          marginTop: "3px",
                          cursor: "pointer",
                        }}
                      >
                        Use email address
                      </div>
                    )}
                    {props.useEmail && (
                      <div
                        onClick={() => {
                          props.setUsePhone(true);
                          props.setUseEmail(false);
                          props.setAdminData({
                            ...props.adminData,
                            emailAddress: "",
                          });
                        }}
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          color: "#00902F",
                          fontSize: "13px",
                          fontWeight: "500",
                          marginTop: "3px",
                          cursor: "pointer",
                        }}
                      >
                        Use phone number
                      </div>
                    )}
                    {props.usePhone && (
                      <>
                        <Form.Label
                          style={{
                            color: "black",
                            fontSize: "11px",
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            marginTop: "10px",
                          }}
                        >
                          Phone number{" "}
                          <span
                            style={{
                              color: "red",
                              fontWeight: "bold",
                            }}
                          >
                            {"*"}
                          </span>
                        </Form.Label>
                        <input
                          style={{
                            padding: "7px",
                            width: "100%",
                            border: "1px solid #E7E7E7",
                            borderRadius: "5px",
                            marginTop: "-6px"
                          }}
                          type="text"
                          name="phoneNumber"
                          defaultValue={props.adminData.phoneNumber}
                          onChange={handleChange}
                          placeholder="+ ()"
                        />
                        {phoneNumberError && (
                          <>
                            <span
                              style={{
                                color: "red",
                                fontSize: "11px",
                                fontStyle: "italic",
                              }}
                            >
                              {phoneNumberError}
                            </span>
                          </>
                        )}
                      </>
                    )}
                    {props.useEmail && (
                      <>
                        <Form.Label
                          style={{
                            color: "black",
                            fontSize: "11px",
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            marginTop: "10px",
                          }}
                        >
                          Email address{" "}
                          <span
                            style={{
                              color: "red",
                              fontWeight: "bold",
                            }}
                          >
                            {"*"}
                          </span>
                        </Form.Label>
                        <input
                          style={{
                            padding: "7px",
                            width: "100%",
                            border: "1px solid #E7E7E7",
                            borderRadius: "5px",
                            marginTop: "-6px"
                          }}
                          type="text"
                          name="emailAddress"
                          defaultValue={props.adminData.emailAddress}
                          onChange={handleChange}
                          placeholder="your email address"
                        />
                        {emailAddressError && (
                          <>
                            <span
                              style={{
                                color: "red",
                                fontSize: "11px",
                                fontStyle: "italic",
                              }}
                            >
                              {emailAddressError}
                            </span>
                          </>
                        )}
                      </>
                    )}

                    <Form.Label
                      style={{
                        color: "black",
                        fontSize: "11px",
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        marginTop: "10px",
                      }}
                    >
                      OTP-number{" "}
                      <span
                        style={{
                          color: "red",
                          fontWeight: "bold",
                        }}
                      >
                        {"*"}
                      </span>
                    </Form.Label>
                    <input
                      style={{
                        padding: "7px",
                        width: "100%",
                        border: "1px solid #E7E7E7",
                        borderRadius: "5px",
                        marginTop: "-6px"
                      }}
                      type="number"
                      name="otpNumber"
                      defaultValue={props.adminData.otpNumber}
                      onChange={handleChange}
                      placeholder="--- ---"
                    />
                    {otpNumberError && (
                      <>
                        <span
                          style={{
                            color: "red",
                            fontSize: "11px",
                            fontStyle: "italic",
                          }}
                        >
                          {otpNumberError}
                        </span>
                      </>
                    )}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        color: "#00902F",
                        fontSize: "13px",
                        fontWeight: "500",
                        marginTop: "3px",
                      }}
                    >
                      Send code
                    </div>
                    <Button
                      onClick={handleSubmit}
                      style={{
                        padding: "7px",
                        marginTop: "30px",
                        background: "#00902F",                        
                        border: "none",
                      }}
                    >
                      Sign in
                    </Button>
                    <Form.Label
                      style={{
                        textAlign: "center",
                        marginTop: "8px",
                      }}
                    >
                      &#169; 2022 monodom. All rights reserved
                    </Form.Label>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    </NoSsr>
  );
}
