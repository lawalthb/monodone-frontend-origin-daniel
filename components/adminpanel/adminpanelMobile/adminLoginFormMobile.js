import Image from "next/image";
import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";

export default function AdminLoginFormMobile(props) {
    useEffect(() => {
        if (props.useEmail) {
            props.setUsePhone(false);
        } else {
            props.setUsePhone(true);
        }
    }, [props]);
    
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                margin: "0",
                width: '100%',
                padding: "30px 20px",
                background: 'white',
                height: "800px",
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Image
                        src="/img/success-logo.png"
                        width="30"
                        height="21"
                        alt="logo"
                    />
                    <Image
                        style={{
                            marginRight: "15px",
                        }}
                        src="/img/mobileham.png"
                        width="16"
                        height="13"
                        alt="filter"
                    />
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: "30px"
                }}>
                    <Image
                        style={{
                            width: "178px",
                            maxWidth: "100%",
                        }}
                        src="/img/agentselipse.png"
                        width="178"
                        height="178"
                        alt="ellipse"
                    />
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "40px",
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "black"
                    }}
                >
                    Welcome admin
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
                        flexDirection: "column",
                        width: "100%",
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
                        }}
                        type="text"
                        name="username"
                        defaultValue={props.adminData.username}
                        onChange={props.handleChange}
                        autoComplete="off"
                    />
                    {props.usernameError && (
                        <>
                            <span
                                style={{
                                    color: "red",
                                    fontSize: "11px",
                                    fontStyle: "italic",
                                }}
                            >
                                {props.usernameError}
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
                        }}
                        type="password"
                        name="password"
                        defaultValue={props.adminData.password}
                        onChange={props.handleChange}
                    />
                    {props.passwordError && (
                        <>
                            <span
                                style={{
                                    color: "red",
                                    fontSize: "11px",
                                    fontStyle: "italic",
                                }}
                            >
                                {props.passwordError}
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
                                marginTop: "10px",
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
                                marginTop: "10px",
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
                                }}
                                type="text"
                                name="phoneNumber"
                                defaultValue={props.adminData.phoneNumber}
                                onChange={props.handleChange}
                                placeholder="+ ()"
                            />
                            {props.phoneNumberError && (
                                <>
                                    <span
                                        style={{
                                            color: "red",
                                            fontSize: "11px",
                                            fontStyle: "italic",
                                        }}
                                    >
                                        {props.phoneNumberError}
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
                                }}
                                type="text"
                                name="emailAddress"
                                defaultValue={props.adminData.emailAddress}
                                onChange={props.handleChange}
                                placeholder="your email address"
                            />
                            {props.emailAddressError && (
                                <>
                                    <span
                                        style={{
                                            color: "red",
                                            fontSize: "11px",
                                            fontStyle: "italic",
                                        }}
                                    >
                                        {props.emailAddressError}
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
                        }}
                        type="text"
                        name="otpNumber"
                        defaultValue={props.adminData.otpNumber}
                        onChange={props.handleChange}
                        placeholder="--- ---"
                    />
                    {props.otpNumberError && (
                        <>
                            <span
                                style={{
                                    color: "red",
                                    fontSize: "11px",
                                    fontStyle: "italic",
                                }}
                            >
                                {props.otpNumberError}
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
                            marginTop: "10px",
                        }}
                    >
                        Send code
                    </div>
                    <Button
                        onClick={props.handleSubmit}
                        style={{
                            marginTop: "30px",
                            background: "#00902F",
                            fontSize: "13px",
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
        </>
    )
}