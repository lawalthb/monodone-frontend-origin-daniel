import Image from "next/image"
import { Button, Form, Modal } from "react-bootstrap"
import GeneralModal from "../../modal"
import Media from "@/utils/media";

export default function SendMoney(props) {
    const { mobile, tabletAndDesktop} = Media();

    return (
        <>
            <GeneralModal
                size="md"
                show={props.sendMoney}
                onHide={() => {
                    props.setSendMoney(false)
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
                            props.setSendMoney(false)
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
                            }} src="/img/driver.png" width="90" height="90" alt="pic" />
                        </div>
                        <Form.Label style={{
                            fontSize: '16px',
                            color: "black",
                            fontWeight: '600',
                            marginTop: "10px",
                        }}>
                            Stephan
                        </Form.Label>
                        <Form.Label style={{
                            fontSize: '12px',
                            color: "gray",
                            fontWeight: '400',
                            marginTop: "10px",
                        }}>
                            Hello! Send me some money please
                        </Form.Label>
                        <Form.Label style={{
                            fontSize: '10px',
                            color: "gray",
                            fontWeight: '400',
                            marginTop: "10px",
                        }}>
                            This user request money from you
                        </Form.Label>
                        <div style={{
                            display: 'flex',
                            gap: '5px'
                        }}>
                            <Form.Label style={{
                                fontSize: '16px',
                                color: "#00902F",
                                fontWeight: '600',
                                marginTop: "10px",
                            }}>
                                #
                            </Form.Label>
                            <Form.Label style={{
                                fontSize: '16px',
                                color: "black",
                                fontWeight: '600',
                                marginTop: "10px",
                            }}>
                                163.00
                            </Form.Label>
                        </div>
                        <textarea
                            placeholder="Take the money"
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
                        flexDirection: 'column',
                        justifyContent: "center",
                        alignItems: 'center',
                        marginTop: "20px",
                        gap: '10px'
                    }}>
                        <Button
                            onClick={() => {
                                props.setPaymentMethod(true)
                                props.setSendMoney(false)
                            }}
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
                                SEND # 163.00
                            </Form.Label>
                        </Button>
                        <Button
                            onClick={() => {
                                props.setSendMoney(false)
                            }}
                            style={mobile ? {
                                display: 'flex',
                                justifyContent: "center",
                                alignItems: 'center',
                                width: '100%',
                                background: "transparent",
                                border: '1px solid #00902F',
                                argin: '5px auto',
                                fontSize: '13px',
                                height: "40px"
                            } : {
                                display: 'flex',
                                justifyContent: "center",
                                alignItems: 'center',
                                width: '70%',
                                background: "transparent",
                                border: '1px solid #00902F',
                                margin: '5px auto',
                                fontSize: '13px',
                                height: "40px"
                            }}>
                            <Form.Label style={{
                                fontSize: '13px',
                                color: "black",
                                fontWeight: '400',
                                marginTop: "10px",
                            }}>
                                REJECT REQUEST
                            </Form.Label>
                        </Button>
                    </div>
                </Modal.Body>
            </GeneralModal>
        </>
    )
}