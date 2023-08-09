import Image from "next/image";
import { Button, Form, Modal } from "react-bootstrap";
import GeneralModal from "../modal";

export default function IncompleteDocUpload(props) {
    <GeneralModal
        size="738px"
        show={props.incompleteDoc}
        onHide={() => props.setIncompleteDoc(false)}
        style={{ marginTop: "5%" }}
    >
        <Modal.Body style={{ padding: "40px 40px" }}>
            <div
                onClick={() => props.setPostLoadFailure(false)}
                style={{
                    position: "absolute",
                    top: "10px",
                    right: '10px',
                    cursor: "pointer"
                }}>
                <Image src="/img/close.png" width="17" height="17" alt="close" />
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: 'center',
                marginBottom: "20px"
            }}>
                <Image src="/img/fail.png" width="56" height="56" alt="fail" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", }}>
                <Form.Label style={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    color: '#151515',
                    letterSpacing: "0.02em",
                    marginBottom: '20px',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: 'center',

                }}>
                    Incomplete Upload
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
                    Sorry, your document was not uploaded due to some error. Try again later
                </Form.Label>
            </div>
            <div style={{
                display: "flex", justifyContent: "center", alignItems: "center",
                marginTop: '40px', marginBottom: "40px"
            }}>
                <Button
                    // onClick={props.handlePostLoad}
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
                    Try Again
                </Button>
            </div>
        </Modal.Body>
    </GeneralModal>
}