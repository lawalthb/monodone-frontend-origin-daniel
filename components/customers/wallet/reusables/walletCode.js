import Image from "next/image"
import { Button, Form, Modal } from "react-bootstrap"
import GeneralModal from "../../modal"

export default function WalletCode(props) {
    return (
        <>
            <GeneralModal
                size="md"
                show={props.walletCode}
                onHide={() => {
                    props.setWalletCode(false)
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
                            props.setWalletCode(false)
                        }}
                        style={{
                            position: "absolute",
                            top: "-1rem",
                            right: '-0.8rem',
                            cursor: "pointer"
                        }}>
                        <Image src="/img/close.png" width="14" height="14" alt="close" />
                    </div>
                    <p>
                        To transfer the sum of #163.00 to Nancy Chidinma,input your 4-digit code
                    </p>
                    <input style={{
                        borderBottom: "1px solid #A6A6A6",
                        borderTop: "none",
                        borderRight: "none",
                        borderLeft: 'none'
                    }} type="tex" placeholder='4356' />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: "center",
                        alignItems: 'center',
                        marginTop: "20px",
                    }}>
                        <Button
                            onClick={() => {
                                props.setWalletCode(false)
                                props.setWalletSuccessModal(true)
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