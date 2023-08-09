import Image from "next/image"
import { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import GeneralModal from "../../modal"

export default function WalletDelete(props) {
    const [deleteWallet, setDeleteWallet] = useState(false)

    return (
        <>
            <GeneralModal
                size="md"
                show={props.walletDelete}
                onHide={() => {
                    props.setWalletDelete(false)
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
                            props.setWalletDelete(false)
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
                        {deleteWallet && (
                            <Form.Label style={{
                                fontSize: '14px',
                                color: "black",
                                fontWeight: '600',
                                marginTop: "30px"
                            }}>
                                Success
                            </Form.Label>
                        )}
                        <Form.Label style={{
                            fontSize: '12px',
                            color: "black",
                            fontWeight: '400',
                            marginTop: "10px",
                            textAlign: 'center'
                        }}>
                            {deleteWallet ? "This account has been deleted successfully" :
                                "Are you sure you want to delete this account? You might not be able to recover this account once deleted."}

                        </Form.Label>
                    </div>
                    {deleteWallet ? (
                        <>
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
                                        props.setWalletDelete(false)
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
                                        Continue
                                    </Form.Label>
                                </Button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div style={{
                                display: 'flex',
                                justifyContent: "space-between",
                                marginTop: "20px",
                            }}>
                                <Button
                                    onClick={() => {
                                        setDeleteWallet(true)
                                    }}
                                    style={{
                                        display: 'flex',
                                        justifyContent: "center",
                                        alignItems: 'center',
                                        width: '48%',
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
                                        Yes, continue
                                    </Form.Label>
                                </Button>
                                <Button
                                    onClick={() => {
                                        props.setWalletDelete(false)
                                    }}
                                    style={{
                                        display: 'flex',
                                        justifyContent: "center",
                                        alignItems: 'center',
                                        width: '48%',
                                        background: "#F20808",
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
                                        No, cancel
                                    </Form.Label>
                                </Button>
                            </div>
                        </>
                    )}
                </Modal.Body>
            </GeneralModal>
        </>
    )
}