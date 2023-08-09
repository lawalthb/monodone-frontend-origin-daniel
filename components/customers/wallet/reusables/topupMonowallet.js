import Image from "next/image"
import { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import GeneralModal from "../../modal"
import PaymentCardComp from "./paymentCardComp"

export default function TopupMonowallet(props) {
    const [agent, setAgent] = useState(false)
    return (
        <>
            <GeneralModal
                size="md"
                show={props.topupMonowallet}
                onHide={() => {
                    props.setTopupMonowallet(false)
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
                            props.setTopupMonowallet(false)
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
                        marginTop: "30px",
                    }}>
                        <Form.Label style={{
                            fontSize: '13px',
                            color: "black",
                            fontWeight: '600',
                            marginTop: "10px",
                        }}>
                            Top up Monowallet
                        </Form.Label>
                    </div>
                    <Form.Label style={{
                        fontSize: '13px',
                        color: "black",
                        fontWeight: '400',
                        marginTop: "10px",
                    }}>
                        Pickup Location
                    </Form.Label>
                    <PaymentCardComp
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '9px',
                            width: '100%',
                            height: '60px',
                            border: '1px solid #A6A6A6',
                            marginTop: '10px',
                            borderRadius: '5px'
                        }}
                    />
                    <select
                        onChange={(event) => setAgent(event.target.value)}
                        style={{
                            marginTop: '10px',
                            padding: '20px',
                            border: '1px solid #D1D1D1',
                            borderRadius: '5px'
                        }}>
                        <option value="">Agent</option>
                        <option value="mono agent">Mono agent</option>
                        <option value="mono agent">Mono agent</option>
                        <option value="mono agent">Mono agent</option>
                    </select>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: "center",
                        alignItems: 'center',
                        marginTop: "20px",
                    }}>
                        <Button
                            disabled={!agent}
                            onClick={() => {
                                props.setTopupMonowallet(false)
                                props.setTopup(true)
                            }}
                            style={agent ? {
                                display: 'flex',
                                justifyContent: "center",
                                alignItems: 'center',
                                width: '100%',
                                background: "#00902F",
                                border: 'none',
                                margin: '5px auto',
                                fontSize: '13px',
                                height: "40px"
                            } : {
                                display: 'flex',
                                justifyContent: "center",
                                alignItems: 'center',
                                width: '100%',
                                background: "#D1D1D1",
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
                                TOP UP
                            </Form.Label>
                        </Button>
                    </div>
                </Modal.Body>
            </GeneralModal>
        </>
    )
}