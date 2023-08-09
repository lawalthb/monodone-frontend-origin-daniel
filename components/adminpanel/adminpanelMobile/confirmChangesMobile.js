import Image from "next/image";
import { Button, Form, Modal } from "react-bootstrap"
import GeneralModal from "../../customers/modal"

export default function ConfirmChangesMobile(props) {
    return (
        <>
            <GeneralModal
                size="md"
                show={props.confirmChangesMobile}
                onHide={() => {
                    props.setConnfirmChangesMobile(false)
                }}
                style={{
                    marginTop: '50%'
                }}
            >
                <Modal.Body style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: '10px'
                }}>
                    <Image
                        onClick={() => {
                            props.setConnfirmChangesMobile((prevState) => !prevState);
                        }}
                        style={{
                            cursor: "pointer",
                            margin: '6px 0px 0px 5px',
                            position: "absolute",
                            right: '-2px',
                            top: "-20px"
                        }}
                        src="/img/close.png"
                        width="12"
                        height="12"
                        alt="close"
                    />
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "20px",
                        gap: "5px"
                    }}>
                        <Form.Label style={{
                            fontSize: "14px",
                            fontWeight: "600",
                            textAlign: "center",
                            color: "#303133",
                        }}>
                            Confirm changes
                        </Form.Label>
                        <Form.Label style={{
                            fontSize: "11px",
                            fontWeight: "400",
                            textAlign: "center",
                            color: "#808080",
                        }}>
                            {`Agent ${props.agentNumber} wants to change phone number`}
                        </Form.Label>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <span style={{
                                color: "#303133",
                                fontWeight: "600",
                                marginRight: "10px",
                                fontSize: "11px",
                            }}>07378137738</span>
                            <span style={{
                                marginRight: "10px"
                            }}>to</span>
                            <span style={{
                                color: "#303133",
                                fontWeight: "600",
                                fontSize: "11px",
                            }}>73820039321</span>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: "10px"
                        }}>
                            <Button
                                onClick={() => {
                                    props.setIsAgentRequest(false);
                                    props.setIsAgentManagement(false);
                                    props.setAgentList(true)
                                    props.setConnfirmChangesMobile(false)
                                }}
                                style={{
                                    display: 'flex',
                                    padding: '3px',
                                    background: "#00902F",
                                    border: "none",
                                    width: "48%",
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: "10px"
                                }}>
                                <Form.Label style={{
                                    fontSize: "18px",
                                    color: "white",
                                    fontWeight: '500',
                                    textAlign: "center",
                                    marginTop: '2px'
                                }}>
                                    {"+"}
                                </Form.Label>
                                <Form.Label style={{
                                    fontSize: "12px",
                                    color: "white",
                                    fontWeight: '500',
                                    textAlign: "center",
                                    marginTop: '2px'
                                }}>
                                    Confirm
                                </Form.Label>
                            </Button>
                            <Button style={{
                                display: 'flex',
                                padding: '3px',
                                background: "#F20808",
                                border: "none",
                                width: "48%",
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: "10px"
                            }}>
                                <Image
                                    style={{
                                        marginTop: "-3px"
                                    }}
                                    src="/img/reject.png"
                                    width="13"
                                    height="13"
                                    alt="close" />
                                <Form.Label style={{
                                    fontSize: "12px",
                                    color: "white",
                                    fontWeight: '500',
                                    textAlign: "center",
                                    marginTop: '2px'
                                }}>
                                    Reject
                                </Form.Label>
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </GeneralModal>
        </>
    )
}