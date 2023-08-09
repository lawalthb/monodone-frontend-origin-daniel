import Image from "next/image"
import { Button, Form, Modal } from "react-bootstrap"
import GeneralModal from "../../customers/modal"

export default function InvoiceModal(props) {
    return (
        <>
            <GeneralModal
                size="sm"
                show={props.generateInvoice}
                onHide={() => {
                    props.setGenerateInvoice(false)
                }}
                style={props.style}
            >
                <Modal.Body style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    padding: 0
                }}>
                    <div
                        onClick={() => {
                            props.setGenerateInvoice(false)
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
                        justifyContent: 'space-between',
                        marginTop: "10px"
                    }}>
                        <Image src="/img/invoice-logo.png" width="60" height="60" alt="close" />
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: "10px"
                        }}>
                            <Form.Label style={{
                                fontSize: '20px',
                                fontWeight: '600',
                                color: 'black',
                                marginLeft: "auto"
                            }}>
                                Invoice
                            </Form.Label>
                            <Form.Label style={{
                                fontSize: '12px',
                                fontWeight: '400',
                                color: 'black',
                                marginLeft: "auto"
                            }}>
                                #00001
                            </Form.Label>
                            <Form.Label style={{
                                fontSize: '12px',
                                fontWeight: '400',
                                color: 'black',
                                marginLeft: "auto"
                            }}>
                                Issued on: 09/01/2023
                            </Form.Label>
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: "column",
                        marginTop: "20px"
                    }}>
                        <div style={{
                            display: "flex",
                            justifyContent: 'space-between',
                        }}>
                            <Form.Label style={{
                                fontSize: '12px',
                                fontWeight: '400',
                            }}>
                                Order Number:
                            </Form.Label>
                            <Form.Label style={{
                                fontSize: '12px',
                                fontWeight: '600',
                                color: "black"
                            }}>
                                #2323 773737 737373
                            </Form.Label>
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: "column",
                        width: '100%',
                        marginTop: '20px',
                        padding: "0px 30px"
                    }}>
                        <div style={{
                            display: "flex",
                            gap: '5px'
                        }}>
                            <Image
                                style={{
                                    width: "18px",
                                    maxWidth: "100%",
                                    marginTop: '-10px',
                                    marginLeft: '-20px'
                                }}
                                src="/img/specpoint.png"
                                width="18"
                                height="160"
                                alt="ulphostery"
                            />
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>

                                <Form.Label style={{
                                    fontSize: '12px',
                                    fontWeight: '400',
                                    color: 'black'
                                }}>
                                    From:
                                </Form.Label>
                                <Form.Label style={{
                                    fontSize: '12px',
                                    fontWeight: '600',
                                    color: 'black'
                                }}>
                                    21 Alex Ekwueme Way, Jaabi 900108, Abuja
                                </Form.Label>
                                <Form.Label style={{
                                    fontSize: '12px',
                                    fontWeight: '400',
                                    color: 'black',
                                }}>
                                    14 July 2022
                                </Form.Label>
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginTop: '-50px'
                        }}>
                            <Form.Label style={{
                                fontSize: '12px',
                                fontWeight: '400',
                                color: 'black'
                            }}>
                                To:
                            </Form.Label>
                            <Form.Label style={{
                                fontSize: '12px',
                                fontWeight: '600',
                                color: 'black'
                            }}>
                                21 Alex Ekwueme Way, Jaabi 900108, Abuja
                            </Form.Label>
                            <Form.Label style={{
                                fontSize: '12px',
                                fontWeight: '400',
                                color: 'black',
                            }}>
                                14 July 2022
                            </Form.Label>
                        </div>
                    </div>
                    <hr />
                    <Form.Label style={{
                        fontSize: '11px',
                        fontWeight: '400',
                        color: 'black',
                        marginTop: '-10px'
                    }}>
                        Package description, for example furniture
                    </Form.Label>
                    <hr style={{
                        marginTop: '-3px'
                    }} />
                    <div style={{
                        display: 'flex'
                    }}>
                        <Form.Label style={{
                            fontSize: '11px',
                            fontWeight: '400',
                            color: 'black',
                            marginTop: '-10px'
                        }}>
                            Fragile Product
                        </Form.Label>
                    </div>
                    <hr style={{
                        marginTop: '-3px'
                    }} />
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}>
                        <Form.Label style={{
                            fontSize: '11px',
                            fontWeight: '400',
                            color: 'black',
                            marginTop: '-10px'
                        }}>
                            Sender:
                        </Form.Label>
                        <Form.Label style={{
                            fontSize: '11px',
                            fontWeight: '400',
                            color: 'black',
                            marginTop: '-10px'
                        }}>
                            Adaora Daberechi
                        </Form.Label>
                    </div>
                    <hr style={{
                        marginTop: '-3px'
                    }} />
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}>
                        <Form.Label style={{
                            fontSize: '11px',
                            fontWeight: '400',
                            color: 'black',
                            marginTop: '-10px'
                        }}>
                            Receiver:
                        </Form.Label>
                        <Form.Label style={{
                            fontSize: '11px',
                            fontWeight: '400',
                            color: 'black',
                            marginTop: '-10px'
                        }}>
                            Alex Daberechi
                        </Form.Label>
                    </div>
                    <hr style={{
                        marginTop: '-3px'
                    }} />
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}>
                        <Form.Label style={{
                            fontSize: '11px',
                            fontWeight: '400',
                            color: 'black',
                            marginTop: '-10px'
                        }}>
                            Delivery Price:
                        </Form.Label>
                        <Form.Label style={{
                            fontSize: '11px',
                            fontWeight: '600',
                            color: 'black',
                            marginTop: '-10px'
                        }}>
                            #128.00
                        </Form.Label>
                    </div>
                    <hr style={{
                        marginTop: '-3px'
                    }} />
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        marginTop: "20px",
                        gap: '20px'
                    }}>
                        <Button
                            onClick={() => props.setGenerateInvoice(false)}
                            style={{
                                background: "#00902F",
                                border: "none",
                                padding: "7px",
                                color: "white",
                                width: '100%',
                            }}>
                            Send to Email
                        </Button>
                    </div>
                </Modal.Body>
            </GeneralModal>
        </>
    )
}