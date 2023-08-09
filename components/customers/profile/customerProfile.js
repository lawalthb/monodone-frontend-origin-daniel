import Image from "next/image";
import { Button, Form } from "react-bootstrap";
import GeneralModal from "../modal";

export default function CustomerProfile(props) {
    return (
        <>
            <GeneralModal
                size="md"
                show={props.customerProfile}
                onHide={() => props.setCustomerProfile(false)}
                style={{
                    marginTop: "2%"
                }}
            >
                <div style={{
                    display: "flex",
                    flexDirection: 'column',
                    padding: "20px"
                }}>
                    <div
                        onClick={props.handleProfileDetails}
                        style={{
                            display: 'flex'
                        }}>
                        <Image style={{
                            cursor: 'pointer'
                        }} src="/img/prof.png" width="19" height="20" alt="profile" />
                        <Form.Label style={{
                            marginLeft: '10px',
                            fontWeight: '500',
                            fontSize: '14px',
                            color: "black",
                            cursor: 'pointer'
                        }}>Profile</Form.Label>
                    </div>
                    <hr />
                    <div style={{
                        display: 'flex'
                    }}>
                        <Image
                            style={{
                                cursor: 'pointer'
                            }} src="/img/wallet.png" width="19" height="20" alt="profile" />
                        <Form.Label style={{
                            marginLeft: '10px',
                            fontWeight: '500',
                            fontSize: '14px',
                            color: "black",
                            cursor: 'pointer'
                        }}>My Wallet</Form.Label>
                    </div>
                    <hr />
                    <div style={{
                        display: 'flex'
                    }}>
                        <Image
                            style={{
                                cursor: 'pointer'
                            }} src="/img/support.png" width="19" height="20" alt="profile" />
                        <Form.Label style={{
                            marginLeft: '10px',
                            fontWeight: '500',
                            fontSize: '14px',
                            color: "black",
                            cursor: 'pointer'
                        }}>Support</Form.Label>
                    </div>
                    <hr />
                    <div
                    onClick={props.handleAboutApp}
                     style={{
                        display: 'flex'
                    }}>
                        <Image
                            style={{
                                cursor: 'pointer'
                            }} src="/img/about-app.png" width="19" height="20" alt="profile" />
                        <Form.Label style={{
                            marginLeft: '10px',
                            fontWeight: '500',
                            fontSize: '14px',
                            color: "black",
                            cursor: 'pointer'
                        }}>About App</Form.Label>
                    </div>
                    <hr />
                    <hr style={{
                        marginTop: "5rem"
                    }} />
                    <Button
                        // onClick={props.handleSpecializedShipRequest}
                        style={{
                            boxSizing: "border-box",
                            width: "100%",
                            height: "40px",
                            background: "transparent",
                            bordeRadius: "4px",
                            flex: "none",
                            order: "0",
                            flexGrow: "0",
                            border: "none",
                            border: "1px solid #7CC427",
                            display: "flex",
                            justifyContent: 'space-between',
                            letterSpacing: "0.15em",
                            marginTop: "20px"
                        }}>
                        <Image src="/img/become-driver.png" width="19" height="20" alt="driver" />
                        <Form.Label style={{
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: "500",
                            fontSize: "14px",
                            lineHeight: "24px",
                            color: 'black',
                            alignItems: "center",
                            textAlign: "center",
                        }}>
                            BECOME A DRIVER
                        </Form.Label>
                        <div></div>
                    </Button>
                    <Button
                        // onClick={props.handleSpecializedShipRequest}
                        style={{
                            boxSizing: "border-box",
                            width: "100%",
                            height: "40px",
                            background: "transparent",
                            bordeRadius: "4px",
                            flex: "none",
                            order: "0",
                            flexGrow: "0",
                            border: "none",
                            border: "1px solid #7CC427",
                            display: "flex",
                            justifyContent: 'space-between',
                            letterSpacing: "0.15em",
                            marginTop: "20px",
                            marginBottom: "20px"
                        }}>
                        <Image src="/img/become-agent.png" width="19" height="20" alt="agent" />
                        <Form.Label style={{
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: "500",
                            fontSize: "14px",
                            lineHeight: "24px",
                            color: 'black',
                            alignItems: "center",
                            textAlign: "center",
                        }}>
                            BECOME AN AGENT
                        </Form.Label>
                        <div></div>
                    </Button>
                </div>
            </GeneralModal>
        </>
    )
}