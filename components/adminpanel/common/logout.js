import Image from "next/image"
import { Button, Form, Modal } from "react-bootstrap"
import GeneralModal from "../../customers/modal"

export default function Logout(props) {
    return (
        <>
            <GeneralModal
                size="md"
                show={props.logout}
                onHide={() => {
                    props.setLogout(false)
                }}
                style={props.style}
            >
                <Modal.Body style={{
                    display: "flex",
                    flexDirection: 'column'
                }}>
                    <div
                        onClick={() => {
                            props.setLogout(false)
                        }}
                        style={{
                            position: "absolute",
                            top: "-1rem",
                            right: '-0.8rem',
                            cursor: "pointer"
                        }}>
                        <Image src="/img/close.png" width="14" height="14" alt="close" />
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: "center",
                        alignContent: 'center',
                        fontWeight: '600',
                        fontSize: "19px"
                    }}>
                        Log out
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: "center",
                        alignContent: 'center',
                        fontWeight: '400',
                        fontSize: "12px",
                        marginTop: '10px'
                    }}>
                        Are you sure you want to log out?
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "20px",
                        gap: "10px"
                    }}>
                        <Button
                            // onClick={() => props.setRefund(false)}
                            style={{
                                background: "#00902F",
                                border: "none",
                                padding: "7px",
                                width: '45%',
                                display: "flex",
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '10px'
                            }}>
                            <Image
                                style={{
                                    width: "13px",
                                    maxWidth: "100%",
                                }}
                                src="/img/logout1.png"
                                width="13"
                                height="13"
                                alt="badge"
                            />
                            <Form.Label style={{
                                color: 'white',
                                marginTop: '4px'
                            }}>Log out</Form.Label>
                        </Button>
                        <Button
                            // onClick={() => props.setRefund(false)}
                            style={{
                                background: "#F20808",
                                border: "none",
                                padding: "7px",
                                width: '45%',
                                display: "flex",
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '10px'
                            }}>
                            <Image
                                style={{
                                    width: "10px",
                                    maxWidth: "100%",
                                }}
                                src="/img/cancellogout.png"
                                width="10"
                                height="10"
                                alt="badge"
                            />
                            <Form.Label style={{
                                color: 'white',
                                marginTop: '5px'
                            }}>Cancel</Form.Label>
                        </Button>
                    </div>
                </Modal.Body>
            </GeneralModal>
        </>
    )
}