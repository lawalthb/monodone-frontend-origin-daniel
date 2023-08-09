import Image from "next/image"
import { Button, Form, Modal } from "react-bootstrap"
import GeneralModal from "../../modal"
import AmountComp from "./amountComp"
import Media from "@/utils/media"

export default function RequestMoneyFrom(props) {
    const { mobile, tabletAndDesktop} = Media();

    return (
        <>
            <GeneralModal
                size="lg"
                show={props.requestMoneyFrom}
                onHide={() => {
                    props.setRequestMoneyFrom(false)
                }}
                style={props.style}
            >
                <Modal.Body style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    padding: "0px 20px",
                    marginBottom: '100px'
                }}>
                    <div
                        onClick={() => {
                            props.setRequestMoneyFrom(false)
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
                        justifyContent: "space-between",
                        width: "100%",
                        marginTop: "20px"
                    }}>
                        <Image style={{
                            maxWidth: '100%',
                            width: "7px",
                        }} src="/img/walletlt.png" width="7" height="13" alt="backarrow" />
                        <Form.Label style={{
                            fontSize: '16px',
                            color: "black",
                            fontWeight: '500',
                        }}>
                            Request money from
                        </Form.Label>
                        <div></div>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: "center",
                        alignItems: 'center',
                        marginTop: "20px",
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: "center",
                            alignItems: 'center',
                            borderRadius: "50%",
                            border: "1px solid #00902F",
                            width: "100px",
                            height: "100px",
                        }}>
                            <Image style={{
                                maxWidth: '100%',
                                width: "90px",
                                borderRadius: '50%'
                            }} src="/img/driver.png" width="90" height="90" alt="backarrow" />
                        </div>
                        <Form.Label style={{
                            fontSize: '16px',
                            color: "black",
                            fontWeight: '500',
                            marginTop: "10px"
                        }}>
                            Stephan
                        </Form.Label>
                        <div style={{
                            display: 'flex',
                            gap: "5px",
                            marginTop: "-15px"
                        }}>
                            <Form.Label style={{
                                fontSize: '16px',
                                color: "#00902F",
                                fontWeight: '600',
                                marginTop: "10px"
                            }}>
                                #
                            </Form.Label>
                            <Form.Label style={{
                                fontSize: '16px',
                                color: "black",
                                fontWeight: '500',
                                marginTop: "10px"
                            }}>
                                100
                            </Form.Label>
                        </div>
                    </div>
                    <AmountComp
                        amount={props.amount}
                        setAmount={props.setAmount}
                    />
                    <textarea
                        placeholder="Please send me money"
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
                            width: '50%',
                            height: '72px',
                            border: '1px solid #D1D1D1',
                            borderRadius: '5px',
                            margin: '5px auto',
                            background: '#F9F9F9',
                            padding: '5px',
                        }}>

                    </textarea>
                    <div style={{
                        display: 'flex',
                        justifyContent: "center",
                        alignItems: 'center',
                        marginTop: "20px",
                        gap: '10px'
                    }}>
                        <Button
                            onClick={() => {
                                props.setRequestMoneyFrom(false)
                                props.setWalletSuccessModal(true)
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
                                width: '50%',
                                background: "#00902F",
                                border: 'none',
                                argin: '5px auto',
                                fontSize: '13px',
                                height: "40px"
                            }}>
                            {`SEND REQUEST FOR ${props.amount.split(" ")[1]}`}
                        </Button>
                    </div>
                </Modal.Body>
            </GeneralModal>
        </>
    )
}