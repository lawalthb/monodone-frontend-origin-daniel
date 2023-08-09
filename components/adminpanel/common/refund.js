import Image from "next/image"
import { Button, Form, Modal } from "react-bootstrap"
import GeneralModal from "../../customers/modal"

export default function Refund(props) {
    return (
        <>
            <GeneralModal
                size="md"
                show={props.refund}
                onHide={() => {
                    props.setRefund(false)
                }}
                style={props.style}
            >
                <Modal.Body style={{
                    display: "flex",
                    flexDirection: 'column'
                }}>
                    <div
                        onClick={() => {
                            props.setRefund(false)
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
                        Refunds
                    </div>
                    <div style={{
                        display: "flex",
                        marginTop: "20px"
                    }}>
                        <Form.Check type="radio" id={`default-radio`} />
                        <Form.Label style={{
                            fontFamily: 'Poppins',
                            fontStyle: "normal",
                            color: "#808080",
                            fontSize: "12px",
                            marginTop: "4px",
                            marginLeft: "10px"
                        }}>
                            Full amount of #278.00
                        </Form.Label>
                    </div>
                    <div style={{
                        display: "flex",
                        marginTop: "20px"
                    }}>
                        <Form.Check type="radio" id={`default-radio`} />
                        <Form.Label style={{
                            fontFamily: 'Poppins',
                            fontStyle: "normal",
                            color: "#808080",
                            fontSize: "12px",
                            marginTop: "4px",
                            marginLeft: "10px"
                        }}>
                            Partial amount
                        </Form.Label>
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',
                        marginTop: "20px"
                    }}>
                        <Button
                            onClick={() => props.setRefund(false)}
                            style={{
                                background: "#00902F",
                                border: "none",
                                padding: "7px",
                                color: "white",
                                width: '50%'
                            }}>
                            Refund
                        </Button>
                    </div>
                </Modal.Body>
            </GeneralModal>
        </>
    )
}