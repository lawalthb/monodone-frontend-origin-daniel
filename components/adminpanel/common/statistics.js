import Image from "next/image"
import { Button, Form, Modal } from "react-bootstrap"
import GeneralModal from "../../customers/modal"

export default function Statistics(props) {
    return (
        <>
            <GeneralModal
                size="lg"
                show={props.statistics}
                onHide={() => {
                    props.setStatistics(false)
                }}
                style={props.style}
            >
                <Modal.Body style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: "100%"
                }}>
                    <div
                        onClick={() => {
                            props.setStatistics(false)
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
                        justifyContent: "center",
                        alignContent: 'center',
                        fontWeight: '600',
                        fontSize: "16px"
                    }}>
                        {props.caption}
                    </div>
                    <div style={{
                        width: "100%",
                        padding: "20px 10px",
                        border: "1px solid #E7E7E7",
                        display: 'flex',
                        justifyContent: 'center',
                        alignContent: "center"
                    }}>
                        {props.isDriversManagement ? (
                            <Image
                                style={{
                                    width: "300px",
                                    maxWidth: "100%",
                                }}
                                src="/img/mobilestat.png"
                                width="300"
                                height="400"
                                alt="stat"
                            />
                        ) : (
                            <Image
                                style={{
                                    width: "650px",
                                    maxWidth: "100%",
                                }}
                                src="/img/statprofile.png"
                                width="650"
                                height="370"
                                alt="stat"
                            />
                        )}
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: "center",
                        marginTop: "20px",
                        gap: '20px'
                    }}>
                        <Button
                            onClick={props.handleStatistics}
                            style={props.isDriversManagement ? {
                                background: "#00902F",
                                border: "none",
                                padding: "7px",
                                color: "white",
                                width: '80%'
                            } : {
                                background: "#00902F",
                                border: "none",
                                padding: "7px",
                                color: "white",
                                width: '30%'
                            }}>
                            Ok
                        </Button>
                    </div>
                </Modal.Body>
            </GeneralModal>
        </>
    )
}