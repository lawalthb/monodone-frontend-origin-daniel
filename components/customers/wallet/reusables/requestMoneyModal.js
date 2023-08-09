import { Form, Modal } from "react-bootstrap"
import GeneralModal from "../../modal"
import Image from "next/image"
import RequestMoneyContent from "./requestMoneyContent"

export default function RequestMoneyModal(props) {
    return (
        <>
            <GeneralModal
                size="lg"
                show={props.requestMoneyModal}
                onHide={() => {
                    props.setRequestMoneyModal(false)
                }}
                style={props.style}
            >
                <Modal.Body style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    padding: "0px 20px"
                }}>
                    <div
                        onClick={() => {
                            props.setRequestMoneyModal(false)
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
                            Request Money
                        </Form.Label>
                        <Image src="/img/walletsearchicon.png" width="19" height="19" alt="close" />
                    </div>
                    <Form.Label style={{
                        fontSize: '12px',
                        color: "black",
                        fontWeight: '500',
                        marginTop: '20px'
                    }}>
                        Recent
                    </Form.Label>
                    <RequestMoneyContent
                        imgSrc="/img/driver3.png"
                        name="Kalush"
                        setRequestMoneyFrom={props.setRequestMoneyFrom}
                        setRequestMoneyModal={props.setRequestMoneyModal}
                    />
                    <RequestMoneyContent
                        imgSrc="/img/walletprof.png"
                        name="Stephania"
                        setRequestMoneyFrom={props.setRequestMoneyFrom}
                        setRequestMoneyModal={props.setRequestMoneyModal}
                    />
                    <RequestMoneyContent
                        imgSrc="/img/driver.png"
                        name="Stephan"
                        setRequestMoneyFrom={props.setRequestMoneyFrom}
                        setRequestMoneyModal={props.setRequestMoneyModal}
                    />
                    <Form.Label style={{
                        fontSize: '12px',
                        color: "black",
                        fontWeight: '500',
                        marginTop: '20px'
                    }}>
                        A
                    </Form.Label>
                    <RequestMoneyContent
                        imgSrc="/img/walletprof.png"
                        name="Ayo"
                        setRequestMoneyFrom={props.setRequestMoneyFrom}
                        setRequestMoneyModal={props.setRequestMoneyModal}
                    />
                    <RequestMoneyContent
                        imgSrc="/img/driver2.png"
                        name="Adanna"
                        setRequestMoneyFrom={props.setRequestMoneyFrom}
                        setRequestMoneyModal={props.setRequestMoneyModal}
                    />
                    <Form.Label style={{
                        fontSize: '12px',
                        color: "black",
                        fontWeight: '500',
                        marginTop: '20px'
                    }}>
                        C
                    </Form.Label>
                    <RequestMoneyContent
                        imgSrc="/img/walletprof.png"
                        name="Chioma"
                        setRequestMoneyFrom={props.setRequestMoneyFrom}
                        setRequestMoneyModal={props.setRequestMoneyModal}
                    />
                    <RequestMoneyContent
                        imgSrc="/img/driver2.png"
                        name="Chiamaka"
                        setRequestMoneyFrom={props.setRequestMoneyFrom}
                        setRequestMoneyModal={props.setRequestMoneyModal}
                    />
                </Modal.Body>
            </GeneralModal>
        </>
    )
}