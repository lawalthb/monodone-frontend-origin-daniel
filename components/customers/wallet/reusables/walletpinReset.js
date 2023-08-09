import Image from "next/image"
import { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import GeneralModal from "../../modal"

export default function WalletpinReset(props) {
    const [resetWalletPin, setResetWalletPin] = useState(false)
    return (
        <>
            <GeneralModal
                size="md"
                show={props.walletpinReset}
                onHide={() => {
                    props.setWalletpinReset(false)
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
                            props.setWalletpinReset(false)
                        }}
                        style={{
                            position: "absolute",
                            top: "-1rem",
                            right: '-0.8rem',
                            cursor: "pointer"
                        }}>
                        <Image src="/img/close.png" width="14" height="14" alt="close" />
                    </div>
                    <Image
                        onClick={() => {
                            props.setWalletpinReset(false)
                            props.setWalletSettings(true)
                        }}
                        src="/img/backarrow.png" width="15" height="15" alt="arrow" />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: "center",
                        alignItems: 'center',
                        marginTop: "20px",
                    }}>

                        <Form.Label style={{
                            fontSize: '14px',
                            color: "black",
                            fontWeight: '600',
                            marginTop: "30px"
                        }}>
                            {resetWalletPin ? "Reset Wallet Pin" : "Enter OTP"}
                        </Form.Label>
                        <Form.Label style={{
                            fontSize: '12px',
                            color: "black",
                            fontWeight: '400',
                            marginTop: "10px",
                            textAlign: 'center'
                        }}>
                            {resetWalletPin ? "Kindly input a new pin to reset your wallet pin" :
                                "We sent an OTP code to your number, input to continue with wallet pin set up"}
                        </Form.Label>
                        <div style={{
                            display: 'flex',
                            justifyContent: "space-between",
                            gap: "5px"
                        }}>
                            <input style={{
                                height: '70px',
                                width: "50px",
                                border: "1px solid #E7E7E7",
                                padding: "6px",
                                textAlign: 'center'
                            }} type="text" />
                            <input style={{
                                height: '70px',
                                width: "50px",
                                border: "1px solid #E7E7E7",
                                padding: "6px",
                                textAlign: 'center'
                            }} type="text" />
                            <input style={{
                                height: '70px',
                                width: "50px",
                                border: "1px solid #E7E7E7",
                                padding: "6px",
                                textAlign: 'center'
                            }} type="text" />
                            <input style={{
                                height: '70px',
                                width: "50px",
                                border: "1px solid #E7E7E7",
                                padding: "6px",
                                textAlign: 'center'
                            }} type="text" />
                        </div>
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
                            onClick={resetWalletPin ?
                                () => {
                                    props.setWalletSuccess(true)
                                    props.setWalletpinReset(false)
                                } :
                                () => {
                                    setResetWalletPin(true)
                                }}
                            style={{
                                display: 'flex',
                                justifyContent: "center",
                                alignItems: 'center',
                                width: '100%',
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
                                {resetWalletPin ? "Continue" : "Confirm"}
                            </Form.Label>
                        </Button>
                    </div>
                </Modal.Body>
            </GeneralModal>
        </>
    )
}