import Image from "next/image";
import { Button, Form, Modal } from "react-bootstrap";
import GeneralModal from "../customers/modal";
import Media from "@/utils/media";


export default function ClearingUploadSuccess(props) {
    const { mobile, tabletAndDesktop} = Media();

    return (
        <GeneralModal
            size="738px"
            show={props.clearingUploadSuccess}
            onHide={() => props.setClearingUploadSuccess(false)}
        >
            <Modal.Body style={{ padding: "40px 40px" }}>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: 'center',
                    marginBottom: "20px"
                }}>
                    <Image src="/img/success-logo.png" width="70" height="30" alt="fail" />
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
                        Successful!
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
                        {props.uploadSuccessMessage}
                    </Form.Label>
                </div>
                {mobile && (
                    <div style={{
                        display: "flex", justifyContent: "center", alignItems: "center",
                        marginTop: '40px', marginBottom: "40px"
                    }}>
                        <Image src="/img/success-thick.png" width="200" height="200" alt="success" />
                    </div>
                )}
                {tabletAndDesktop && (
                    <div style={{
                        display: "flex", justifyContent: "center", alignItems: "center",
                        marginTop: '40px', marginBottom: "40px"
                    }}>
                        <Image src="/img/success-thick.png" width="400" height="400" alt="success" />
                    </div>
                )}
                <div style={{
                    display: "flex", justifyContent: "center", alignItems: "center",
                    marginTop: '40px', marginBottom: "40px"
                }}>
                    <Button
                        onClick={() => props.setClearingUploadSuccess(false)}
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
                            fontSize: "14px",
                        }}>
                        Ok
                    </Button>
                </div>
            </Modal.Body>
        </GeneralModal>
    )
}