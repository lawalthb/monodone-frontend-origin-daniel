import Image from "next/image"
import { Button, Form, Modal } from "react-bootstrap"
import GeneralModal from "../../modal"

export default function IncompleteTransaction(props) {
    return (
        <>
            <GeneralModal
                size="md"
                show={props.incompleteTransaction}
                onHide={() => {
                    props.setIncompleteTransaction(false)
                }}
                style={props.style}
            >
                <Modal.Body style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    padding: "20px",
                    marginBottom: '20px'
                }}>
                    <div
                        onClick={() => {
                            props.setIncompleteTransaction(false)
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
                        flexDirection: 'column',
                        justifyContent: "center",
                        alignItems: 'center',
                        marginTop: "20px",
                    }}>
                        <Image style={{
                            width: "50px",
                            maxWidth: "100%"
                        }} src="/img/walletwarning.png" width="50" height="50" alt="close" />
                        <Form.Label style={{
                            fontSize: '13px',
                            color: "black",
                            fontWeight: '500',
                            marginTop: "20px",
                        }}>
                            Incomplete Transaction
                        </Form.Label>
                        <p style={{
                            fontSize: "11px"
                        }}>
                            Sorry, your transaction could not be completed due to network problems
                        </p>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: "center",
                        alignItems: 'center',
                        marginTop: "20px",
                    }}>
                        <Button
                            onClick={() => props.setIncompleteTransaction(false)}
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
                                TRY AGAIN
                            </Form.Label>
                        </Button>
                    </div>
                </Modal.Body>
            </GeneralModal>
        </>
    )
}