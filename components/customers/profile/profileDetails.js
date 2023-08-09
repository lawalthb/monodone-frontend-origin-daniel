import Image from "next/image";
import { useState, useRef } from "react";
import { Form } from "react-bootstrap";
import GeneralModal from "../modal";
import InlineEdit from "./inlineEdit";

export default function ProfileDetails(props) {
    const [isEditing, setIsEditing] = useState(false)
    const [firstName, setFirstname] = useState("Adaora")
    const [lastName, setLastname] = useState("Daberechi")
    const [phone, setPhone] = useState("+234 588 4774 74")
    const [email, setEmail] = useState("daberechi@gmail.com")
    const [profilePic, setProfilePic] = useState("")
    const [personalInfo, setPersonalInfo] = useState(false)
    const hiddenFileInput = useRef(null)

    console.log("personal info", personalInfo)

    const handleClick = (event) => {
        hiddenFileInput.current.click()
    }

    const handleFileChange = (event) => {
        let reader = new FileReader()
        reader.onload = (e) => {
            setProfilePic(e.target.result)
        };
        reader.readAsDataURL(event.target.files[0]);
    }

    return (
        <>
            <GeneralModal
                size="md"
                show={props.profileDetails}
                onHide={() => props.setProfileDetails(false)}
                style={{
                    marginTop: "2%"
                }}
            >
                <div style={{
                    display: "flex",
                    flexDirection: 'column',
                    padding: "20px"
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}>
                        <Form.Label
                            onClick={personalInfo ? () => {
                                props.setCustomerProfile(false); props.setProfileDetails(true);
                                setIsEditing(true); setPersonalInfo(false)
                            } :
                                isEditing ? () => {
                                    props.setCustomerProfile(false); props.setProfileDetails(true);
                                    setIsEditing(false); setPersonalInfo(false)
                                } :
                                    () => { props.setCustomerProfile(true); props.setProfileDetails(false) }}
                            style={{
                                fontFamily: 'Poppins',
                                fontStyle: "normal",
                                fontWeight: "600",
                                fontSize: "16px",
                                lineHeight: "28px",
                                color: "black",
                                cursor: 'pointer'
                            }}>
                            {"<"}
                        </Form.Label>
                        <Form.Label style={{
                            fontFamily: 'Poppins',
                            fontStyle: "normal",
                            fontWeight: "600",
                            fontSize: "14px",
                            lineHeight: "28px",
                            color: "#4E4C4C"
                        }}>
                            {personalInfo ? "Personal Information" : "Profile"}
                        </Form.Label>
                        <Form.Label
                            onClick={isEditing ? () => setPersonalInfo(true) : () => setIsEditing(true)}
                            style={{
                                fontFamily: 'Poppins',
                                fontStyle: "normal",
                                fontWeight: "600",
                                fontSize: "13px",
                                lineHeight: "28px",
                                color: "#00902F",
                                cursor: 'pointer'
                            }}>
                            {personalInfo ? "" : isEditing ? "Done" : "Edit"}
                        </Form.Label>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: "center",
                        alignItems: 'center',
                        flexDirection: 'column',
                        marginTop: "30px"
                    }}>
                        {profilePic ? (
                            <Image style={{
                                borderRadius: "50%"
                            }} src={profilePic} alt='avatar' width="200" height="200" />
                        ) : (
                            <Image src="/img/Avatar.png" alt='avatar' width="200" height="200" />
                        )}
                        {isEditing ? (
                            <>
                                <Form.Label
                                    onClick={handleClick}
                                    style={{
                                        fontFamily: 'Poppins',
                                        fontStyle: "normal",
                                        fontWeight: "600",
                                        fontSize: "16px",
                                        lineHeight: "28px",
                                        color: "#00902F",
                                        marginTop: '20px',
                                        cursor: 'pointer'
                                    }}>
                                    Change Profile Picture
                                </Form.Label>
                                <input type="file" ref={hiddenFileInput} onChange={handleFileChange}
                                    style={{
                                        display: "none"
                                    }} />
                            </>
                        ) : (
                            <input style={{
                                fontFamily: 'Poppins',
                                fontStyle: "normal",
                                fontWeight: "600",
                                fontSize: "16px",
                                lineHeight: "28px",
                                color: "black",
                                marginTop: "17px",
                                textAlign: "center",
                                border: '0'
                            }} type="text" value="Adaora Daberechi" />
                        )}
                    </div>
                    {personalInfo ? (
                        <>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginTop: "30px"
                            }}>
                                <Form.Label style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: "normal",
                                    fontWeight: "400",
                                    fontSize: "12px",
                                    lineHeight: "28px",
                                    color: "black",
                                    marginTop: "20px"
                                }}>
                                    Name
                                </Form.Label>
                                <input style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: "normal",
                                    fontWeight: "500",
                                    fontSize: "14px",
                                    lineHeight: "28px",
                                    color: "black",
                                    border: "1px solid #E7E7E7",
                                    padding: "0 6px"
                                }} type="text" value={firstName + " " + lastName} />
                                <Form.Label style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: "normal",
                                    fontWeight: "400",
                                    fontSize: "12px",
                                    lineHeight: "28px",
                                    color: "black",
                                    marginTop: "20px"
                                }}>
                                    Phone
                                </Form.Label>
                                <input style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: "normal",
                                    fontWeight: "500",
                                    fontSize: "14px",
                                    lineHeight: "28px",
                                    color: "black",
                                    border: "1px solid #E7E7E7",
                                    padding: "0 6px"
                                }} type="text" value={phone} />
                                <Form.Label style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: "normal",
                                    fontWeight: "400",
                                    fontSize: "12px",
                                    lineHeight: "28px",
                                    color: "black",
                                    marginTop: "20px"
                                }}>
                                    Email
                                </Form.Label>
                                <input style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: "normal",
                                    fontWeight: "500",
                                    fontSize: "14px",
                                    lineHeight: "28px",
                                    color: "black",
                                    border: "1px solid #E7E7E7",
                                    padding: "0 6px"
                                }} type="text" value={email} />
                                <div style={{
                                    marginTop: "40px",
                                    background: "rgba(124, 196, 39, 0.15)",
                                    width: "100%",
                                    display: "flex",
                                    padding: " 12px 10px",
                                    borderRadius: '7px'
                                }}>
                                    <Image src="/img/mail.png" alt='mail' width="20" height="16" />
                                    <Form.Label style={{
                                        marginLeft: '10px',
                                        color: "#151515"
                                    }}>
                                        Check your inbox and verofy your email
                                    </Form.Label>
                                </div>
                            </div>
                        </>
                    ) : isEditing ? (
                        <>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginTop: "30px"
                            }}>
                                <Form.Label style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: "normal",
                                    fontWeight: "400",
                                    fontSize: "12px",
                                    lineHeight: "28px",
                                    color: "black",
                                    marginTop: "20px"
                                }}>
                                    First name
                                </Form.Label>
                                <InlineEdit value={firstName} setValue={setFirstname} />
                            </div>
                            <hr style={{
                                marginTop: '-1px'
                            }} />
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginTop: "30px"
                            }}>
                                <Form.Label style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: "normal",
                                    fontWeight: "400",
                                    fontSize: "12px",
                                    lineHeight: "28px",
                                    color: "black",
                                    marginTop: "-20px"
                                }}>
                                    Last name
                                </Form.Label>
                                <InlineEdit value={lastName} setValue={setLastname} />
                            </div>
                            <hr style={{
                                marginTop: '-1px'
                            }} />
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginTop: "30px"
                            }}>
                                <Form.Label style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: "normal",
                                    fontWeight: "400",
                                    fontSize: "12px",
                                    lineHeight: "28px",
                                    color: "black",
                                    marginTop: "-20px"
                                }}>
                                    Phone
                                </Form.Label>
                                <InlineEdit value={phone} setValue={setPhone} />
                            </div>
                            <hr style={{
                                marginTop: '-1px'
                            }} />
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginTop: "30px"
                            }}>
                                <Form.Label style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: "normal",
                                    fontWeight: "400",
                                    fontSize: "12px",
                                    lineHeight: "28px",
                                    color: "black",
                                    marginTop: "-20px"
                                }}>
                                    Email
                                </Form.Label>
                                <InlineEdit value={email} setValue={setEmail} />
                            </div>
                            <div style={{
                                display: 'flex',
                                marginTop: "30px"
                            }}>
                                <Image
                                    style={{
                                        cursor: 'pointer'
                                    }} src="/img/delete.png" alt='avatar' width="18" height="20" />
                                <Form.Label style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: "normal",
                                    fontWeight: "400",
                                    fontSize: "12px",
                                    lineHeight: "28px",
                                    color: "black",
                                    marginLeft: '10px',
                                    cursor: 'pointer'
                                }}>
                                    Delete account
                                </Form.Label>
                            </div>
                        </>
                    ) : (
                        <>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginTop: "30px"
                            }}>
                                <Form.Label style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: "normal",
                                    fontWeight: "400",
                                    fontSize: "12px",
                                    lineHeight: "28px",
                                    color: "black",
                                    marginTop: "20px"
                                }}>
                                    Phone
                                </Form.Label>
                                <input style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: "normal",
                                    fontWeight: "400",
                                    fontSize: "12px",
                                    lineHeight: "28px",
                                    color: "black",
                                    border: '0'
                                }} type="text" value="+234 677 993 33" />
                            </div>
                            <hr style={{
                                marginTop: '-1px'
                            }} />
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginTop: "30px"
                            }}>
                                <Form.Label style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: "normal",
                                    fontWeight: "400",
                                    fontSize: "12px",
                                    lineHeight: "28px",
                                    color: "black",
                                    marginTop: "-20px"
                                }}>
                                    Email
                                </Form.Label>
                                <input style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: "normal",
                                    fontWeight: "400",
                                    fontSize: "12px",
                                    lineHeight: "28px",
                                    color: "black",
                                    border: '0'
                                }} type="text" value="dabarechi@gmail.com" />
                            </div>
                            <hr style={{
                                marginTop: '-1px'
                            }} />
                        </>
                    )}
                </div>

            </GeneralModal>
        </>
    )
}