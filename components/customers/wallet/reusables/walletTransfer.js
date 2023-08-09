import Image from "next/image"
import { Button, Form, Modal } from "react-bootstrap"
import GeneralModal from "../../modal"
import Media from "@/utils/media";

export default function WalletTransfer(props) {
    const { mobile, tabletAndDesktop} = Media();

    return (
        <>
            <GeneralModal
                size="md"
                show={props.walletTransfer}
                onHide={() => {
                    props.setWalletTransfer(false)
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
                            props.setWalletTransfer(false)
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
                            props.setWalletTransfer(false)
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
                            Set Transfer limit
                        </Form.Label>
                        <Form.Label style={{
                            fontSize: '12px',
                            color: "black",
                            fontWeight: '400',
                            marginTop: "10px",
                            textAlign: 'center'
                        }}>
                            Set a transfer limit to your wallet for every transaction
                        </Form.Label>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: "20px",
                        width: '100%',
                        gap: '10px'
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '49%'
                        }}>
                            <Form.Label style={mobile ? {
                                fontSize: '10px',
                                color: "black",
                                fontWeight: '400',
                            } : {
                                fontSize: '12px',
                                color: "black",
                                fontWeight: '400',
                            }}>
                                Minimum transfer range
                            </Form.Label>
                            <input style={{
                                padding: '10px',
                                border: '1px solid #A6A6A6',
                                fontSize: '12px'
                            }} type="text" placeholder="#20,000" />
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '49%'
                        }}>
                            <Form.Label style={mobile ? {
                                fontSize: '10px',
                                color: "black",
                                fontWeight: '400',
                            } : {
                                fontSize: '12px',
                                color: "black",
                                fontWeight: '400',
                            }}>
                                Maximum transfer range
                            </Form.Label>
                            <input style={{
                                padding: '10px',
                                border: '1px solid #A6A6A6',
                                fontSize: '12px'
                            }} type="text" placeholder="#100,000" />
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
                            onClick={() => {
                                props.setWalletSuccess(true)
                                props.setWalletTransfer(false)
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
                                Save
                            </Form.Label>
                        </Button>
                    </div>
                </Modal.Body>
            </GeneralModal>
        </>
    )
}