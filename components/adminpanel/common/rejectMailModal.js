import Image from "next/image"
import { Button, Form, Modal } from "react-bootstrap"
import GeneralModal from "../../customers/modal"

export default function RejectMailModal(props) {
    return (
        <>
            <GeneralModal
                size="md"
                show={props.rejectModal}
                onHide={() => {
                    props.setRejectModal(false)
                }}
                style={props.style}
            >
                <Modal.Body style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%'
                }}>
                    <div
                        onClick={() => {
                            props.setSpcializedModal(false)
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
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: "10px"
                    }}>
                        <Form.Label style={{
                            fontSize: '14px',
                            fontWeight: '500',
                            color: 'black',
                        }}>
                            Rejection Mail
                        </Form.Label>
                    </div>
                    <Form.Label style={{
                        fontFamily: 'Poppins',
                        fontStyle: "normal",
                        color: "black",
                        fontSize: "12px",
                        marginTop: "10px"
                    }}>
                        Email address
                    </Form.Label>
                    <input style={{
                        border: "1px solid #E7E7E7",
                        width: "100%",
                        paddingLeft: "10px",
                        fontSize: "12px",
                        color: "black"
                    }} type="text"
                        placeholder="alexekwueme899989@gmail.com" />
                    <Form.Label style={{
                        fontFamily: 'Poppins',
                        fontStyle: "normal",
                        color: "black",
                        fontSize: "12px",
                        marginTop: "10px"
                    }}>
                        Reasons for the reject
                    </Form.Label>
                    <textarea rows={"3"} cols="100%" style={{
                        border: "1px solid #E7E7E7",
                        borderRadius: '6px'
                    }} />
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',
                        marginTop: "20px"
                    }}>
                        <Button
                            onClick={() => props.setRejectModal(false)}
                            style={{
                                background: "#00902F",
                                border: "none",
                                padding: "7px",
                                color: "white",
                                width: '80%'
                            }}>
                                Send mail
                            </Button>
                    </div>
                </Modal.Body>
            </GeneralModal>
        </>
    )
}