import Image from "next/image"
import { Button, Form, Modal } from "react-bootstrap"
import GeneralModal from "../../modal"
import AmountComp from "./amountComp"
import Media from "@/utils/media";

export default function SendACard(props) {
    const { mobile, tabletAndDesktop} = Media();

    return (
        <GeneralModal
            size="md"
            show={props.sendToYourCard}
            onHide={() => {
                props.setSendToYourCard(false)
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
                        props.setSendToYourCard(false)
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
                        Send to a card
                    </Form.Label>
                    <Form.Label style={{
                        fontSize: '12px',
                        color: "black",
                        fontWeight: '400',
                        marginTop: '10px'
                    }}>
                        Total balance # 34 138.00
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
                            100.00
                        </Form.Label>
                    </div>
                    <Form.Label style={{
                        fontSize: '12px',
                        color: "black",
                        fontWeight: '400',
                        marginTop: '10px'
                    }}>
                        To Mastercard****8009
                    </Form.Label>
                </div>
                <AmountComp
                    amount={props.amount}
                    setAmount={props.setAmount}
                />

                <div style={{
                    display: 'flex',
                    justifyContent: "center",
                    alignItems: 'center',
                    marginTop: "20px",
                    gap: '10px'
                }}>
                    <Button
                        onClick={() => {
                            props.setSendToYourCard(false)
                            props.setWalletCode(true)
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
                            width: '87%',
                            background: "#00902F",
                            border: 'none',
                            argin: '5px auto',
                            fontSize: '13px',
                            height: "40px"
                        }}>
                        WITHDRAW
                    </Button>
                </div>
            </Modal.Body>
        </GeneralModal>
    )
}