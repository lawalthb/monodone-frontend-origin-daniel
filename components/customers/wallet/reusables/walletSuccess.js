import { Button, Form, Modal } from "react-bootstrap"
import GeneralModal from "../../modal"
import Image from "next/image"

export default function WalletSuccess(props) {
    return (
        <>
            <GeneralModal
                size="md"
                show={props.walletSuccess}
                onHide={() => {
                    props.setWalletSuccess(false)
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
                            props.setWalletSuccess(false)
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
                        marginTop: "40px",
                    }}>
                        <Form.Label style={{
                            fontSize: '16px',
                            color: "black",
                            fontWeight: '600',
                        }}>
                            {props.caption}
                        </Form.Label>
                        <Form.Label style={{
                            fontSize: '11px',
                            color: "black",
                            fontWeight: '400',
                            textAlign: "center"
                        }}>
                            {props.message}
                        </Form.Label>
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
                            onClick={props.handleClick}
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
                                {props.btnLabel}
                            </Form.Label>
                        </Button>
                    </div>
                </Modal.Body>
            </GeneralModal>
        </>
    )
}