import Image from "next/image"
import { Button, Form, Modal } from "react-bootstrap"
import GeneralModal from "../../customers/modal"

export default function HideLoad(props) {
    return (
        <>
            <GeneralModal
                size="md"
                show={props.hideLoad}
                onHide={() => {
                    props.setHideLoad(false)
                }}
                style={props.style}
            >
                <Modal.Body style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                }}>
                    <div
                        onClick={() => {
                            props.setHideLoad(false)
                        }}
                        style={{
                            position: "absolute",
                            top: "-1rem",
                            right: '-0.8rem',
                            cursor: "pointer"
                        }}>
                        <Image src="/img/close.png" width="14" height="14" alt="close" />
                    </div>
                    <Form.Label style={{
                        fontSize: '13px',
                        fontWeight: '400',
                        color: 'black',
                    }}>
                        Load type
                    </Form.Label>
                    <input style={{
                        border: "1px solid #E7E7E7",
                        width: "100%",
                        paddingLeft: "10px",
                        fontSize: "12px"
                    }} type="text" placeholder="Document" />
                    <Form.Label style={{
                        fontSize: '13px',
                        fontWeight: '400',
                        color: 'black',
                    }}>
                        Posting date
                    </Form.Label>
                    <input style={{
                        border: "1px solid #E7E7E7",
                        width: "100%",
                        paddingLeft: "10px",
                        fontSize: "12px"
                    }} type="text" placeholder="24/12/2022" />
                    <Form.Label style={{
                        fontSize: '13px',
                        fontWeight: '400',
                        color: 'black',
                    }}>
                        Posted by
                    </Form.Label>
                    <input style={{
                        border: "1px solid #E7E7E7",
                        width: "100%",
                        paddingLeft: "10px",
                        fontSize: "12px"
                    }} type="text" placeholder="Kelechi Afor" />
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "20px"
                    }}>
                        <Button
                            onClick={() => props.setHideLoad(false)}
                            style={{
                                background: "#00902F",
                                border: "none",
                                padding: "7px",
                                color: "white",
                                width: '48%'
                            }}>
                            Hide Load
                        </Button>
                        <Button
                            onClick={() => props.setHideLoad(false)}
                            style={{
                                background: "#F20808",
                                border: "none",
                                padding: "7px",
                                color: "white",
                                width: '48%'
                            }}>
                            Cancel
                        </Button>
                    </div>
                </Modal.Body>
            </GeneralModal>
        </>
    )
}