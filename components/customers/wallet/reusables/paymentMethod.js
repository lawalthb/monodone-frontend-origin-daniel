import Image from "next/image"
import { useEffect, useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import GeneralModal from "../../modal"

export default function PaymentMethod(props) {
    const [fromMonowallet, setFromMonowallet] = useState(false)
    const [fromMastercard, setFromMastercard] = useState(false)

    const handleFromMonowallet = () => {
        setFromMonowallet(true)
        setFromMastercard(false)
    }

    const handleFromMastercard = () => {
        setFromMastercard(true)
        setFromMonowallet(false)
    }

    useEffect(() => {
        if (fromMonowallet) {
            setFromMastercard(false)
        } else {
            setFromMastercard(true)
        }
    }, [setFromMastercard, fromMonowallet])

    return (
        <>
            <GeneralModal
                size="md"
                show={props.paymentMethod}
                onHide={() => {
                    props.setPaymentMethod(false)
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
                            fontSize: '14px',
                            color: "black",
                            fontWeight: '500',
                        }}>
                            Choose a payment method
                        </Form.Label>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: "space-between",
                        marginTop: "20px",
                    }}>
                        <Form.Label
                            onClick={handleFromMonowallet}
                            style={{
                                fontSize: '12px',
                                color: "black",
                                fontWeight: '400',
                            }}>
                            From Monowallet
                        </Form.Label>
                        <Image
                            onClick={handleFromMonowallet}
                            src={fromMonowallet ? "/img/checkedradio.png" : "/img/uncheckedradio.png"}
                            width="19"
                            height="19"
                            alt="radio"
                        />
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: "space-between",
                        marginTop: "20px",
                    }}>
                        <Form.Label
                            onClick={handleFromMastercard}
                            style={{
                                fontSize: '12px',
                                color: "black",
                                fontWeight: '400',
                            }}>
                            From MasterCard***8009
                        </Form.Label>
                        <Image
                            onClick={handleFromMastercard}
                            src={fromMastercard ? "/img/checkedradio.png" : "/img/uncheckedradio.png"}
                            width="19"
                            height="19"
                            alt="radio"
                        />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: "center",
                        alignItems: 'center',
                        marginTop: "20px",
                    }}>
                        <Button
                            onClick={() => {
                                props.setPaymentMethod(false)
                                props.setWalletCode(true)
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
                                SEND # 163.00
                            </Form.Label>
                        </Button>
                    </div>
                </Modal.Body>
            </GeneralModal>
        </>
    )
}