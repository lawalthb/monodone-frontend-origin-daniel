import Image from "next/image"
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap"
import GeneralModal from "../../modal"

export default function WalletpinCreate(props) {
    const [walletPinSetup, setWalletPinSetup] = useState(false)
    const [confirmWalletPin, setConfirmWalletPin] = useState(false)
    const [enterOTP, setEnterOTP] = useState(false)

    return (
        <>
            <GeneralModal
                size="md"
                show={props.walletpinCreate}
                onHide={() => {
                    props.setWalletpinCreate(false)
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
                            props.setWalletpinCreate(false)
                        }}
                        style={{
                            position: "absolute",
                            top: "-1rem",
                            right: '-0.8rem',
                            cursor: "pointer"
                        }}>
                        <Image src="/img/close.png" width="14" height="14" alt="close" />
                    </div>
                    {(walletPinSetup || confirmWalletPin || enterOTP) ? (
                        <>
                            {(confirmWalletPin || enterOTP) && (
                                <Image
                                    onClick={
                                        enterOTP ?
                                            () => {
                                                setConfirmWalletPin(true)
                                                setEnterOTP(false)
                                                setWalletPinSetup(false)
                                            } : confirmWalletPin ?
                                                () => {
                                                    setConfirmWalletPin(false)
                                                    setWalletPinSetup(true)
                                                } : undefined}
                                    src="/img/backarrow.png" width="15" height="15" alt="arrow" />
                            )}
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
                                    {enterOTP ? "Enter OTP" : confirmWalletPin ?
                                        "Confirm Wallet Pin Set up" : "Wallet Pin Set Up"}
                                </Form.Label>
                                <Form.Label style={{
                                    fontSize: '12px',
                                    color: "black",
                                    fontWeight: '400',
                                    marginTop: "10px",
                                    textAlign: 'center'
                                }}>
                                    {enterOTP ? "We sent an OTP code to your number, input to continue with wallet pin set up" :
                                        "Input a unique code for your transaction through your wallet"}
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
                        </>
                    ) : (
                        <>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: "center",
                                alignItems: 'center',
                                marginTop: "20px",
                            }}>
                                <Image style={{
                                    maxWidth: '40px',
                                    width: "40px"
                                }} src="/img/walletsettingcreate.png" width="40" height="36" alt="pin" />
                                <Form.Label style={{
                                    fontSize: '14px',
                                    color: "black",
                                    fontWeight: '600',
                                    marginTop: "30px"
                                }}>
                                    Create Wallet Pin
                                </Form.Label>
                                <Form.Label style={{
                                    fontSize: '12px',
                                    color: "black",
                                    fontWeight: '400',
                                    marginTop: "10px",
                                    textAlign: 'center'
                                }}>
                                    You have confirm all transactions carried out in
                                    your wallet to avoid fraud
                                </Form.Label>
                            </div>
                        </>
                    )}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: "center",
                        alignItems: 'center',
                        marginTop: "20px",
                        gap: '10px'
                    }}>
                        <Button
                            onClick={
                                enterOTP ?
                                    () => {
                                        props.setWalletSuccess(true)
                                        props.setWalletpinCreate(false)
                                    } :
                                    confirmWalletPin ?
                                        () => {
                                            setEnterOTP(true)
                                            setConfirmWalletPin(false)
                                            setWalletPinSetup(false)
                                        } :
                                        walletPinSetup ?
                                            () => {
                                                setConfirmWalletPin(true)
                                                setWalletPinSetup(false)
                                                setEnterOTP(false)
                                            } : () => {
                                                setWalletPinSetup(true)
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
                                {(confirmWalletPin || enterOTP) ? "Confirm" :
                                    walletPinSetup ? "Continue" : "Create Wallet Pin"}
                            </Form.Label>
                        </Button>
                    </div>
                </Modal.Body>
            </GeneralModal>
        </>
    )
}