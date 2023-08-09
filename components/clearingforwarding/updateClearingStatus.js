import Image from "next/image";
import { Button, Form, Modal } from "react-bootstrap";
import GeneralModal from "../customers/modal";

export default function UpdateClearingStatus(props) {
    console.log(props.updateStatus)
    return (
        <GeneralModal
            size="738px"
            show={props.updateClearingStatus}
            onHide={() => props.setUpdateClearingStatus(false)}
        >
            <Modal.Body style={{ padding: "40px 40px" }}>
                <div
                    onClick={() => props.setUpdateClearingStatus(false)}
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
                        fontSize: "18px",
                        color: '#151515',
                        letterSpacing: "0.02em",
                        marginBottom: '20px',
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',

                    }}>
                        Update Status
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
                        Type the update, the customer will automatically be updated
                    </Form.Label>
                </div>
                <div style={{
                    display: "flex",
                    marginTop: '20px',
                    flexDirection: "column"
                }}>
                    <Form.Label style={{
                        fontFamily: 'Poppins',
                        fontStyle: "normal",
                        fontSize: "12px",
                        color: '#151515',
                        letterSpacing: "0.02em",
                        fontWeight: "600"
                    }}>
                        Write the update here
                    </Form.Label>
                    <textarea
                        name="updateStatus"
                        value={props.updateStatus}
                        onChange={(event) => props.setUpdateStatus(event.target.value)}
                        rows="3" style={{
                            width: "100%",
                            border: "1px solid #E7E7E7",
                            padding: '10px',
                            fontSize: "12px"
                        }} />
                </div>
                <div style={{
                    display: "flex", justifyContent: "center", alignItems: "center",
                    marginTop: '40px', marginBottom: "40px"
                }}>
                    <Button
                        onClick={() => props.handleUpdateClearingStatus(false)}
                        style={{
                            boxSizing: "border-box",
                            width: "70%",
                            height: "40px",
                            background: "#00902F",
                            bordeRadius: "6px",
                            flex: "none",
                            order: "0",
                            flexGrow: "0",
                            border: "none",
                            fontSize: "14px",
                        }}>
                        Update Status
                    </Button>
                </div>
            </Modal.Body>
        </GeneralModal>
    )
}