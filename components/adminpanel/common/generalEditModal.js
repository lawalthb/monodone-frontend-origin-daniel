import Image from "next/image";
import { Form, Modal } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import GeneralModal from "../../customers/modal";
import BtnComp from "./btnComp";

export default function GeneralEditModal(props) {
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
                show={props.generalEdit}
                onHide={() => {
                    props.setGeneralEdit(false)
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
                            props.setGeneralEdit(false)
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
                            fontSize: "14px",
                            color: "black",
                            fontWeight: 600
                        }}>
                            {props.caption}
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
                                {props.firstData}
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
                                {props.secondData}
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
                        justifyContent: 'space-between',
                        width: '100%',
                        gap: '10px'
                    }}>
                        <div style={{
                            display: "flex",
                            gap: "5px"
                        }}>
                            <Form.Label style={{
                                fontSize: "10px",
                                fontWeight: 500
                            }}>
                                {props.thirdData}
                            </Form.Label>
                            <Form.Label style={{
                                fontSize: "10px",
                                color: "black",
                                fontWeight: 500
                            }}>
                                {props.forthData}
                            </Form.Label>
                        </div>
                        <div style={{
                            display: "flex",
                            gap: "5px"
                        }}>
                            <Form.Label style={{
                                fontSize: "10px",
                                fontWeight: 500
                            }}>
                               {props.fifthData}
                            </Form.Label>
                            <Form.Label style={{
                                fontSize: "10px",
                                color: "black",
                                fontWeight: 500
                            }}>
                                {props.sixthData}
                            </Form.Label>
                        </div>
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',
                        marginTop: "20px"
                    }}>
                        <BtnComp
                            onClick={() => props.setGeneralEdit(false)}
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
                            {props.btnData}
                        </BtnComp>
                    </div>
                </Modal.Body>
            </GeneralModal>
        </>
    )
}