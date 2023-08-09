import Image from "next/image"
import { useMediaQuery } from "react-responsive";
import { Form, Modal } from "react-bootstrap"
import GeneralModal from "../../customers/modal"
import BtnComp from "./btnComp"

export default function AddValueModal(props) {
    const isMobile = useMediaQuery({
        query: "(max-width: 709px)",
    });
    const isTabAndDesktop = useMediaQuery({
        query: "(min-width: 710px)",
    });

    return (
        <>
            <GeneralModal
                size="md"
                show={props.addValue}
                onHide={() => {
                    props.setAddValue(false)
                }}
                style={props.style}
            >
                <Modal.Body style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    padding: "0px 20px"
                }}>
                    <div
                        onClick={() => {
                            props.setAddValue(false)
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
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Form.Label style={{
                            fontSize: "16px",
                            color: "black",
                            fontWeight: 600
                        }}>
                            Add Value
                        </Form.Label>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: "20px",
                        width: '100%',
                        gap: '10px'
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: "column",
                            width: '48%'
                        }}>
                            <Form.Label style={{
                                fontSize: "10px",
                                color: "black",
                                fontWeight: 500
                            }}>
                                Car value - Min ($)
                            </Form.Label>
                            <input
                                style={{
                                    border: "1px solid #E7E7E7",
                                    width: "100%",
                                    paddingLeft: "10px",
                                    fontSize: "10px",
                                }} type="text" placeholder="" />
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: "column",
                            width: '48%'
                        }}>
                            <Form.Label style={{
                                fontSize: "10px",
                                color: "black",
                                fontWeight: 500
                            }}>
                                Car value - Max ($)
                            </Form.Label>
                            <input
                                style={{
                                    border: "1px solid #E7E7E7",
                                    width: "100%",
                                    paddingLeft: "10px",
                                    fontSize: "10px",
                                }} type="text" placeholder="" />
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: "column",
                        width: '100%',
                        marginTop: '10px'
                    }}>
                        <Form.Label style={{
                            fontSize: "10px",
                            color: "black",
                            fontWeight: 500
                        }}>
                            Price for 3.4 (#)
                        </Form.Label>
                        <input
                            style={{
                                border: "1px solid #E7E7E7",
                                width: "100%",
                                paddingLeft: "10px",
                                fontSize: "10px",
                            }} type="text" placeholder="120.00" />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: "column",
                        width: '100%',
                        marginTop: '10px'
                    }}>
                        <Form.Label style={{
                            fontSize: "10px",
                            color: "black",
                            fontWeight: 500
                        }}>
                            Price for 3.4-5.8 (#)
                        </Form.Label>
                        <input
                            style={{
                                border: "1px solid #E7E7E7",
                                width: "100%",
                                paddingLeft: "10px",
                                fontSize: "10px",
                            }} type="text" placeholder="120.00" />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: "column",
                        width: '100%',
                        marginTop: '10px'
                    }}>
                        <Form.Label style={{
                            fontSize: "10px",
                            color: "black",
                            fontWeight: 500
                        }}>
                            Price for 5.8-10 (#)
                        </Form.Label>
                        <input
                            style={{
                                border: "1px solid #E7E7E7",
                                width: "100%",
                                paddingLeft: "10px",
                                fontSize: "10px",
                            }} type="text" placeholder="120.00" />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: "column",
                        width: '100%',
                        marginTop: '10px'
                    }}>
                        <Form.Label style={{
                            fontSize: "10px",
                            color: "black",
                            fontWeight: 500
                        }}>
                            Price for 10-30 (#)
                        </Form.Label>
                        <input
                            style={{
                                border: "1px solid #E7E7E7",
                                width: "100%",
                                paddingLeft: "10px",
                                fontSize: "10px",
                            }} type="text" placeholder="120.00" />
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',
                        marginTop: "20px"
                    }}>
                        <BtnComp
                            onClick={() => props.setAddValue(false)}
                            style={isMobile ? {
                                background: "#00902F",
                                border: "none",
                                padding: "7px",
                                color: "white",
                                width: '100%'
                            } : {
                                background: "#00902F",
                                border: "none",
                                padding: "7px",
                                color: "white",
                                width: '50%'
                            }}>
                            Save
                        </BtnComp>
                    </div>
                </Modal.Body>
            </GeneralModal>
        </>
    )
}