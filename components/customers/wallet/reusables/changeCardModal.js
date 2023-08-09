import Image from "next/image";
import { useState } from "react";
import GeneralModal from "../../modal";
import { Button, Form, Modal } from "react-bootstrap";
import Media from "@/utils/media";

export default function ChangeCardModal(props) {
    const [addNewCard, setAddNewcard] = useState(false)
    const { mobile, tabletAndDesktop} = Media();

    return (
        <>
            <GeneralModal
                size="md"
                show={props.changeCard}
                onHide={() => {
                    props.setChangeCard(false)
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
                            props.setChangeCard(false)
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
                            {addNewCard ? "Add New Card" : "Change Card"}
                        </Form.Label>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: "center",
                        alignItems: 'center',
                    }}>
                        <div style={mobile ? {
                            display: 'flex',
                            flexDirection: 'column',
                            marginTop: "20px",
                            width: '100%',
                            height: '72px',
                            background: '#F9F9F9',
                            border: '1px solid #D1D1D1',
                            borderRadius: '6px',
                            padding: '8px'
                        } : {
                            display: 'flex',
                            flexDirection: 'column',
                            marginTop: "20px",
                            width: '70%',
                            height: '72px',
                            background: '#F9F9F9',
                            border: '1px solid #D1D1D1',
                            borderRadius: '6px',
                            padding: '8px'
                        }}>
                            <div style={{
                                display: 'flex',
                                gap: "5px"
                            }}>
                                <Image src="/img/cardsign.png" width="16" height="12" alt="card" />
                                <Form.Label style={{
                                    fontSize: '11px',
                                    color: "#A6A6A6",
                                    fontWeight: '400',
                                }}>
                                    Card number
                                </Form.Label>
                            </div>
                            <input style={{
                                border: 'none',
                                padding: "7px",
                                fontSize: "13px",
                                fontWeight: "bold",
                                background: '#F9F9F9'
                            }} type="text" placeholder={addNewCard ? "" : "4040 2020 3434 5656 46"} />
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: "center",
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <div style={mobile ? {
                            display: 'flex',
                            flexDirection: 'column',
                            marginTop: "20px",
                            width: '48%',
                            height: '72px',
                            background: '#F9F9F9',
                            border: '1px solid #D1D1D1',
                            borderRadius: '6px',
                            padding: '8px'
                        } : {
                            display: 'flex',
                            flexDirection: 'column',
                            marginTop: "20px",
                            width: '33%',
                            height: '72px',
                            background: '#F9F9F9',
                            border: '1px solid #D1D1D1',
                            borderRadius: '6px',
                            padding: '8px'
                        }}>
                            <div style={{
                                display: 'flex',
                                gap: "5px"
                            }}>
                                <Form.Label style={{
                                    fontSize: '11px',
                                    color: "#A6A6A6",
                                    fontWeight: '400',
                                }}>
                                    Expiry date
                                </Form.Label>
                            </div>
                            <input style={{
                                border: 'none',
                                padding: "7px",
                                fontSize: "13px",
                                fontWeight: "bold",
                                background: '#F9F9F9'
                            }} type="text" placeholder={addNewCard ? "" : "MM/YY"} />
                        </div>
                        <div style={mobile ? {
                            display: 'flex',
                            flexDirection: 'column',
                            marginTop: "20px",
                            width: '48%',
                            height: '72px',
                            background: '#F9F9F9',
                            border: '1px solid #D1D1D1',
                            borderRadius: '6px',
                            padding: '8px'
                        } : {
                            display: 'flex',
                            flexDirection: 'column',
                            marginTop: "20px",
                            width: '33%',
                            height: '72px',
                            background: '#F9F9F9',
                            border: '1px solid #D1D1D1',
                            borderRadius: '6px',
                            padding: '8px'
                        }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}>
                                <Form.Label style={{
                                    fontSize: '11px',
                                    color: "#A6A6A6",
                                    fontWeight: '400',
                                }}>
                                    Security code
                                </Form.Label>
                                <Image src="/img/cardinfo.png" width="14" height="14" alt="card" />
                            </div>
                            <input style={{
                                border: 'none',
                                padding: "7px",
                                fontSize: "13px",
                                fontWeight: "bold",
                                background: '#F9F9F9'
                            }} type="text" placeholder={addNewCard ? "" : "**6"} />
                        </div>
                    </div>
                    <Form.Label style={{
                        fontSize: '11px',
                        color: "black",
                        textAlign: 'center',
                        fontWeight: '400',
                        marginTop: "20px"
                    }}>
                        Your payment info will be stored securely
                    </Form.Label>
                    <div style={{
                        display: 'flex',
                        justifyContent: "center",
                        alignItems: 'center',
                        marginTop: "30px",
                        gap: '10px'
                    }}>
                        <Button
                            onClick={addNewCard ?
                                () => {
                                    props.setChangeCard(false)
                                    setAddNewcard(false)
                                }
                                :
                                () => {
                                    setAddNewcard(true)
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
                                width: '70%',
                                background: "#00902F",
                                border: 'none',
                                argin: '5px auto',
                                fontSize: '13px',
                                height: "40px"
                            }}>
                            {addNewCard ? "ADD CARD" : "CHANGE CARD"}
                        </Button>
                    </div>
                    {!addNewCard && (
                        <div style={{
                            display: 'flex',
                            justifyContent: "center",
                            alignItems: 'center',
                            marginTop: "30px",
                            gap: '10px'
                        }}>
                            <Button
                                onClick={() => {
                                    props.setChangeCard(false)
                                }}
                                style={mobile ? {
                                    display: 'flex',
                                    justifyContent: "center",
                                    alignItems: 'center',
                                    width: '100%',
                                    background: "transparent",
                                    border: 'none',
                                    argin: '5px auto',
                                    fontSize: '13px',
                                    height: "40px",
                                    color: '#00902F'
                                } : {
                                    display: 'flex',
                                    justifyContent: "center",
                                    alignItems: 'center',
                                    width: '70%',
                                    background: "transparent",
                                    border: 'none',
                                    argin: '5px auto',
                                    fontSize: '13px',
                                    height: "40px",
                                    color: '#00902F'
                                }}>
                                Delete card
                            </Button>
                        </div>
                    )}
                </Modal.Body>
            </GeneralModal>
        </>

    )
}