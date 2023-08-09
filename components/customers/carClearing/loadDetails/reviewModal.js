import Image from "next/image";
import { Button, Form, Modal } from "react-bootstrap";
import GeneralModal from "../../modal";


export default function ReviewModal(props) {
    return (
        <GeneralModal
            size="738px"
            show={props.reviewModal}
            onHide={() => props.setReviewModal(false)}
            style={{ marginTop: "5%" }}
        >
            <Modal.Body style={{ padding: "40px 40px" }}>
                <div
                    onClick={() => props.setReviewModal(false)}
                    style={{
                        position: "absolute",
                        top: "10px",
                        right: '10px',
                        cursor: "pointer"
                    }}>
                    <Image src="/img/close.png" width="17" height="17" alt="close" />
                </div>
                <div style={{ display: "flex", flexDirection: "column", }}>
                    <Form.Label style={{
                        fontFamily: 'Poppins',
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "14px",
                        color: '#414141',
                        letterSpacing: "0.02em",
                        marginBottom: '20px',
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',

                    }}>
                        Success!
                    </Form.Label>
                    <Form.Label style={{
                        fontFamily: 'Poppins',
                        fontStyle: "normal",
                        textAlign: "center",
                        fontSize: "12px",
                        color: '#151515',
                        letterSpacing: "0.02em",
                        marginBottom: '20px',
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center'
                    }}>
                        Your review has been submitted successfully
                    </Form.Label>
                </div>
                <div style={{
                    display: "flex", justifyContent: "center", alignItems: "center",
                    marginTop: '40px', marginBottom: "40px"
                }}>
                    <Button
                        onClick={() => props.setReviewModal(false)}
                        style={{
                            boxSizing: "border-box",
                            width: "100%",
                            height: "40px",
                            background: "#00902F",
                            bordeRadius: "6px",
                            flex: "none",
                            order: "0",
                            flexGrow: "0",
                            border: "none",
                            fontSize: "12px",
                        }}>
                        Go to Dashboard
                    </Button>
                </div>
            </Modal.Body>
        </GeneralModal>
    )
}