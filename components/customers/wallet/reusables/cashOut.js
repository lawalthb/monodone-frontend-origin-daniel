import Image from "next/image";
import { useState } from "react";
import GeneralModal from "../../modal";
import { Button, Form, Modal } from "react-bootstrap";
import AmountComp from "./amountComp";
import CommonCashoutComp from "./commonCashoutComp";

export default function CashOut(props) {
    const [officeNumber, setOfficeNumber] = useState("")
    const [send, setSend] = useState(false)
    const [enoughCash, setEnoughCash] = useState(false)
    const [confirmCashOrder, setConfirmCashOrder] = useState(false)
    const [cashoutSuccessful, setCashoutSuccessful] = useState(false)

    return (
        <>
            <GeneralModal
                size="md"
                show={props.cashout}
                onHide={() => {
                    props.setCashout(false)
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
                            props.setCashout(false)
                        }}
                        style={{
                            position: "absolute",
                            top: "-1rem",
                            right: '-0.8rem',
                            cursor: "pointer"
                        }}>
                        <Image src="/img/close.png" width="14" height="14" alt="close" />
                    </div>
                    {send ? (
                        <>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: "center",
                                alignItems: 'center',
                                marginTop: "40px",
                            }}>
                                <CommonCashoutComp />
                            </div>
                            <AmountComp
                                amount={props.amount}
                                setAmount={props.setAmount}
                            />
                        </>
                    ) : enoughCash ? (
                        <>
                            <CommonCashoutComp
                                enoughCash={enoughCash}
                                imgSrc="/img/cardinfo.png"
                                style={{
                                    maxWidth: '100%',
                                    width: "20px",
                                    margin: "3px 8px"
                                }}
                                imgWidth="20"
                                imgHeight="20"
                                msg="Waiting for confirmation by the agent"
                                caption1="Office"
                                caption2="Kaduna, 21 Alex Ekwueme way, Office #34"
                            />
                        </>
                    ) : confirmCashOrder ? (
                        <>
                            <CommonCashoutComp
                                enoughCash={confirmCashOrder}
                                imgSrc="/img/cashoutcamera.png"
                                style={{
                                    maxWidth: '100%',
                                    width: "22px",
                                    margin: "3px 8px"
                                }}
                                imgWidth="22"
                                imgHeight="14"
                                msg="Cash order confirmed. Please contact the office"
                                caption1="Office"
                                caption2="Kaduna, 21 Alex Ekwueme way, Office #34"
                            />
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: "center",
                                alignItems: 'center',
                                marginTop: "20px",
                            }}>
                                <Image style={{
                                    width: "370px",
                                    maxWidth: '100%'
                                }} src="/img/cashoutbarcode.png" width="370" height="170" alt="close" />
                                <Form.Label style={{
                                    fontSize: '14px',
                                    color: "black",
                                    fontWeight: '500',
                                    marginTop: '20px'
                                }}>
                                    286 680 363
                                </Form.Label>
                            </div>
                        </>
                    ) : cashoutSuccessful ? (
                        <>
                            <CommonCashoutComp
                                caption1="Account balance"
                                caption2="#3 128.00"
                                cashoutSuccessful={cashoutSuccessful}
                            />
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
                                <Form.Label style={{
                                    fontSize: '14px',
                                    color: "black",
                                    fontWeight: '500',
                                }}>
                                    Offices
                                </Form.Label>
                            </div>
                            <Form.Label style={{
                                fontSize: '12px',
                                color: "black",
                                fontWeight: '500',
                            }}>
                                Pickup location
                            </Form.Label>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    marginTop: "20px",
                                    width: '100%',
                                    height: '62px',
                                    background: '#F9F9F9',
                                    border: '1px solid #D1D1D1',
                                    borderRadius: '6px',
                                    padding: '5px'
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
                                            City
                                        </Form.Label>
                                    </div>
                                    <input style={{
                                        border: 'none',
                                        padding: "7px",
                                        fontSize: "13px",
                                        fontWeight: "bold",
                                        background: '#F9F9F9'
                                    }} type="text" placeholder={"Kaduna"} />
                                </div>
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    marginTop: "20px",
                                    width: '100%',
                                    height: '72px',
                                    background: '#F9F9F9',
                                    border: '1px solid #D1D1D1',
                                    borderRadius: '6px',
                                    padding: '5px'
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
                                            City
                                        </Form.Label>
                                    </div>
                                    <select
                                        onChange={(event) => setOfficeNumber(event.target.value)}
                                        style={{
                                            padding: '15px',
                                            background: '#F9F9F9',
                                            border: '1px solid #D1D1D1',
                                            fontSize: '14px',
                                            borderRadius: '7px',
                                            marginTop: "-10px",
                                            border: "none",
                                            width: '100%'
                                        }}>
                                        <option value="">office number</option>
                                        <option value="Offiice #34">Offiice #34</option>
                                        <option value="Offiice #34">Offiice #34</option>
                                        <option value="Offiice #34">Offiice #34</option>
                                    </select>
                                </div>
                            </div>
                        </>
                    )}
                    <div style={{
                        display: 'flex',
                        justifyContent: "center",
                        alignItems: 'center',
                        marginTop: "60px",
                    }}>
                        <Button
                            disabled={!officeNumber}
                            onClick={
                                cashoutSuccessful ?
                                    () => props.setCashout(false) :
                                    confirmCashOrder ?
                                        () => {
                                            setCashoutSuccessful(true)
                                            setConfirmCashOrder(false)
                                            setEnoughCash(false)
                                            setSend(false)
                                        } :
                                        enoughCash ?
                                            () => {
                                                setConfirmCashOrder(true)
                                                setEnoughCash(false)
                                                setSend(false)
                                                setCashoutSuccessful(false)
                                            } : send ?
                                                () => {
                                                    setEnoughCash(true)
                                                    setSend(false)
                                                    setConfirmCashOrder(false)
                                                    setCashoutSuccessful(false)
                                                } :
                                                () => {
                                                    setSend(true)
                                                    setConfirmCashOrder(false)
                                                    setEnoughCash(false)
                                                    setCashoutSuccessful(false)
                                                }}
                            style={officeNumber ? {
                                display: 'flex',
                                justifyContent: "center",
                                alignItems: 'center',
                                width: '100%',
                                background: "#00902F",
                                border: 'none',
                                argin: '5px auto',
                                fontSize: '13px',
                                height: "40px",
                                color: 'white',
                                cursor: 'pointer'
                            } : {
                                display: 'flex',
                                justifyContent: "center",
                                alignItems: 'center',
                                width: '100%',
                                background: "#D1D1D1",
                                border: 'none',
                                argin: '5px auto',
                                fontSize: '13px',
                                height: "40px",
                                color: 'white',
                                cursor: 'pointer'
                            }}>
                            {cashoutSuccessful ? "FINISH" :
                                (confirmCashOrder || enoughCash || send) ? "DONE" : "SEND # 163.00"}
                        </Button>
                    </div>
                </Modal.Body >
            </GeneralModal >
        </>
    )
}