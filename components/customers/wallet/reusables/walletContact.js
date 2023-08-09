import Image from "next/image"
import { Modal, Form, Button } from "react-bootstrap"
import GeneralModal from "../../modal"

export default function WalletContact(props) {
    return (
        <>
            <GeneralModal
                size="md"
                show={props.walletContact}
                onHide={() => {
                    props.setWalletContact(false)
                }}
                style={props.style}
            >
                <Modal.Body style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    padding: "0px 20px",
                    marginBottom: '20px'
                }}>
                    <div
                        onClick={() => {
                            props.setWalletContact(false)
                        }}
                        style={{
                            position: "absolute",
                            top: "-1rem",
                            right: '-0.8rem',
                            cursor: "pointer"
                        }}>
                        <Image src="/img/close.png" width="14" height="14" alt="close" />
                    </div>
                    <Image
                        onClick={() => {
                            props.setWalletContact(false)
                            props.setWalletSettings(true)
                        }}
                        src="/img/backarrow.png" width="15" height="15" alt="arrow" />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: "center",
                        alignItems: 'center',
                        marginTop: "20px",
                    }}>

                        <Form.Label style={{
                            fontSize: '14px',
                            color: "black",
                            fontWeight: '600',
                            marginTop: "30px"
                        }}>
                            Ask for support
                        </Form.Label>
                        <Form.Label style={{
                            fontSize: '12px',
                            color: "black",
                            fontWeight: '400',
                            marginTop: "10px",
                            textAlign: 'center'
                        }}>
                            For any inquiry concerning the wallet, contact the support team
                            for help.
                        </Form.Label>
                    </div>
                    <Form.Label style={{
                        fontSize: '12px',
                        color: "black",
                        fontWeight: '500',
                        marginTop: "10px",
                    }}>
                        First name
                    </Form.Label>
                    <input style={{
                        padding: '10px',
                        width: "100%",
                        border: '1px solid #E7E7E7',
                        fontSize: "12px"
                    }} type="text" placeholder="Kelechi Afor" />
                    <Form.Label style={{
                        fontSize: '12px',
                        color: "black",
                        fonFtWeight: '500',
                        marginTop: "10px",
                    }}>
                        Email address
                    </Form.Label>
                    <input style={{
                        padding: '10px',
                        width: "100%",
                        border: '1px solid #E7E7E7',
                        fontSize: "12px"
                    }} type="text" placeholder="kcafor@gmail.com" />
                    <Form.Label style={{
                        fontSize: '12px',
                        color: "black",
                        fonFtWeight: '500',
                        marginTop: "10px",
                    }}>
                        Comment
                    </Form.Label>
                    <textarea rows="4" style={{
                        width: "100%",
                        border: '1px solid #E7E7E7',
                    }} />
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '30px',
                        paddingRight: '30px',
                        paddingLeft: '30px'
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: "center",
                            alignItems: 'center'
                        }}>
                            <Image src="/img/walletmail.png" width="56" height="56" alt="mail" />
                            <Form.Label style={{
                                fontSize: '12px',
                                color: "#00902F",
                                fonFtWeight: '500',
                                marginTop: "10px",
                            }}>
                                Email
                            </Form.Label>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: "center",
                            alignItems: 'center'
                        }}>
                            <Image src="/img/walletphone.png" width="56" height="56" alt="phone" />
                            <Form.Label style={{
                                fontSize: '12px',
                                color: "black",
                                fonFtWeight: '500',
                                marginTop: "10px",
                            }}>
                                Phone call
                            </Form.Label>
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: "center",
                        alignItems: 'center',
                        marginTop: "20px",
                        gap: '10px'
                    }}>
                        <Button
                            onClick={() => {
                                props.setWalletSuccess(true)
                                props.setWalletContact(false)
                            }}
                            style={{
                                display: 'flex',
                                justifyContent: "center",
                                alignItems: 'center',
                                width: '100%',
                                background: "#00902F",
                                border: 'none',
                                margin: '5px auto',
                                fontSize: '13px',
                                height: "40px"
                            }}>
                            <Form.Label style={{
                                fontSize: '13px',
                                color: "white",
                                fontWeight: '400',
                                marginTop: "10px",
                            }}>
                                Send Message
                            </Form.Label>
                        </Button>
                    </div>
                </Modal.Body>
            </GeneralModal>
        </>
    )
}