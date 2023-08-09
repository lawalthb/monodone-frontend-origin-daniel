import Image from "next/image"
import { Button, Form, Modal } from "react-bootstrap"
import GeneralModal from "../../modal"

export default function WalletSuccessModal(props) {
    return (
        <>
            <GeneralModal
                size="md"
                show={props.walletSuccessModal}
                onHide={() => {
                    props.setWalletSuccessModal(false)
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
                            props.setWalletSuccessModal(false)
                        }}
                        style={{
                            position: "absolute",
                            top: "-1rem",
                            right: '-0.8rem',
                            cursor: "pointer"
                        }}>
                        <Image src="/img/close.png" width="14" height="14" alt="close" />
                    </div>
                    <Form.Label style={{
                        color: "#00902F",
                        fontSize: "12px",
                    }}>
                        monodome
                    </Form.Label>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: "center",
                        alignItems: 'center',
                        marginTop: "20px",
                    }}>
                        <Form.Label style={{
                            fontSize: '17px',
                            color: "black",
                            fontWeight: '600',
                        }}>
                            Success
                        </Form.Label>
                        <Form.Label style={{
                            fontSize: '12px',
                            color: "black",
                            fontWeight: '400',
                        }}>
                            Your request has been sent
                        </Form.Label>
                        <Image style={{
                            maxWidth: '100%',
                            width: "250px",
                            marginTop: "20px"
                        }} src="/img/success-thick.png"
                            width="250"
                            height="250"
                            alt="success" />
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: "center",
                        alignItems: 'center',
                        marginTop: "20px",
                        gap: '10px'
                    }}>
                        <Button
                            onClick={() => props.setWalletSuccessModal(false)}
                            style={{
                                display: 'flex',
                                justifyContent: "center",
                                alignItems: 'center',
                                width: '100%',
                                background: "#00902F",
                                border: 'none',
                                argin: '5px auto',
                                fontSize: '13px'
                            }}>
                            Done
                        </Button>
                    </div>
                </Modal.Body>
            </GeneralModal>
        </>
    )
}