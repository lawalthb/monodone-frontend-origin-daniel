import Image from "next/image"
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap"
import GeneralModal from "../../modal"
import AmountComp from "./amountComp"
import TopupFirstpart from "./topupFirstpart";
import TopupSecondPart from "./topupSecondPart";

export default function Topup(props) {
    const [noCash] = useState(false)
    const [waitingForConfirmation, setWaitingForConfirmation] = useState(false)
    const [topupConfirmed, setTopupConfirmed] = useState(false)
    const [barcodeTopup, setBarcodeTopup] = useState(false)

    return (
        <>
            <GeneralModal
                size="md"
                show={props.topup}
                onHide={() => {
                    props.setTopup(false)
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
                            props.setTopup(false)
                        }}
                        style={{
                            position: "absolute",
                            top: "-1rem",
                            right: '-0.8rem',
                            cursor: "pointer"
                        }}>
                        <Image src="/img/close.png" width="14" height="14" alt="close" />
                    </div>
                    {noCash ? (
                        <>
                            <TopupFirstpart />
                            <TopupSecondPart
                                noCash={noCash}
                            />
                        </>
                    ) : waitingForConfirmation ? (
                        <>
                            <TopupFirstpart />
                            <TopupSecondPart
                                waitingForConfirmation={waitingForConfirmation}
                                setTopupConfirmed={setTopupConfirmed}
                            />
                        </>
                    ) : topupConfirmed ? (
                        <>
                            <TopupFirstpart />
                            <TopupSecondPart
                                topupConfirmed={topupConfirmed}
                                setTopupConfirmed={setTopupConfirmed}
                                barcodeTopup={barcodeTopup}
                                setBarcodeTopup={setBarcodeTopup}
                            />
                        </>
                    ) : (
                        <>
                            <TopupFirstpart />
                            <AmountComp
                                amount={props.amount}
                                setAmount={props.setAmount}
                            />
                            <TopupSecondPart
                                setTopup={props.setTopup}
                                setWaitingForConfirmation={setWaitingForConfirmation}
                                waitingForConfirmation={waitingForConfirmation}
                                setTopupConfirmed={setTopupConfirmed}
                            />
                        </>
                    )}
                </Modal.Body>
            </GeneralModal >
        </>
    )
}