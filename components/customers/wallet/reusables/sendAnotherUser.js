import Image from "next/image"
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap"
import GeneralModal from "../../modal"
import Media from "@/utils/media";

export default function SendAnotherUser(props) {
    const { mobile, tabletAndDesktop} = Media();
    const [send, setSend] = useState(false)

    return (
        <>
            <GeneralModal
                size="md"
                show={props.sendAnotherUser}
                onHide={() => {
                    props.setSendAnotherUser(false)
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
                            props.setSendAnotherUser(false)
                        }}
                        style={{
                            position: "absolute",
                            top: "-0.5rem",
                            right: '-0.3rem',
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
                        <Form.Label style={{
                            fontSize: '16px',
                            color: "black",
                            fontWeight: '500',
                        }}>
                            Send money
                        </Form.Label>
                        <div style={{
                            display: 'flex',
                            justifyContent: "center",
                            alignItems: 'center',
                            borderRadius: "50%",
                            border: "1px solid #00902F",
                            width: "100px",
                            height: "100px",
                            marginTop: "10px",
                        }}>
                            <Image style={{
                                maxWidth: '100%',
                                width: "90px",
                                borderRadius: '50%'
                            }} src="/img/driver2.png" width="90" height="90" alt="pic" />
                        </div>
                        <Form.Label style={{
                            fontSize: '14px',
                            color: "black",
                            fontWeight: '600',
                            marginTop: "10px",
                        }}>
                            Chinara
                        </Form.Label>
                        <Form.Label style={{
                            fontSize: '11px',
                            color: "black",
                            fontWeight: '400',
                        }}>
                            26 July 2022 | 11:59 PM
                        </Form.Label>
                        <Form.Label style={{
                            fontSize: '14px',
                            color: "black",
                            fontWeight: '600',
                            marginTop: "5px",
                        }}>
                            {`Balance: ${send ? "-# 150.00" : "#2, 250.00"}`}
                        </Form.Label>
                        <Form.Group style={mobile ? {
                                width: '100%',                                
                            } : {
                                width: '70%',
                            }}>
                            <Form.Label style={{
                                marginBottom: '3px',
                                fontSize: '14px'
                            }}>Amount</Form.Label>
                            <Form.Control style={mobile ? {
                                display: 'flex',
                                justifyContent: "center",
                                alignItems: 'center',
                                border: '1px solid #D1D1D1',
                                borderRadius: '5px',
                                margin: '0 auto 10px',
                                background: '#F9F9F9',
                                padding: '5px',
                            } : {
                                display: 'flex',
                                justifyContent: "center",
                                alignItems: 'center',
                                border: '1px solid #D1D1D1',
                                borderRadius: '5px',
                                margin: '0 auto 10px',
                                background: '#F9F9F9',
                                padding: '5px',
                            }}  
                                placeholder="100"
                            />
                        </Form.Group>
                        <textarea
                            placeholder="Comment!"
                            style={mobile ? {
                                display: 'flex',
                                justifyContent: "center",
                                alignItems: 'center',
                                width: '100%',
                                height: '72px',
                                border: '1px solid #D1D1D1',
                                borderRadius: '5px',
                                margin: '5px auto',
                                background: '#F9F9F9',
                                padding: '5px',
                            } : {
                                display: 'flex',
                                justifyContent: "center",
                                alignItems: 'center',
                                width: '70%',
                                height: '72px',
                                border: '1px solid #D1D1D1',
                                borderRadius: '5px',
                                margin: '5px auto',
                                background: '#F9F9F9',
                                padding: '5px',
                            }}>

                        </textarea>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: "center",
                        alignItems: 'center',
                        marginTop: "30px",
                        gap: '10px'
                    }}>
                        <Button
                            onClick={send ? () =>
                                props.setSendAnotherUser(false) :
                                () => setSend(true)
                            }
                            style={mobile ? {
                                display: 'flex',
                                justifyContent: "center",
                                alignItems: 'center',
                                width: '100%',
                                background: "#00902F",
                                border: 'none',
                                argin: '5px auto',
                                fontSize: '13px',
                                height: "40px"
                            } : {
                                display: 'flex',
                                justifyContent: "center",
                                alignItems: 'center',
                                width: '70%',
                                background: "#00902F",
                                border: 'none',
                                argin: '5px auto',
                                fontSize: '13px',
                                height: "40px"
                            }}>
                            {send ? "DONE" : "SEND"}
                        </Button>
                    </div>
                </Modal.Body>
            </GeneralModal>
        </>
    )
}