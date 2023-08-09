import Image from "next/image";
import { Button, Form, Modal } from "react-bootstrap";
import GeneralModal from "../customers/modal";
import Media from "@/utils/media";

export default function DeleteClearing(props) {
    const { mobile, tabletAndDesktop} = Media();
    return (
        <GeneralModal
            size="738px"
            show={props.deleteClearing}
            onHide={() => props.setDeleteClearing(false)}
            style={{ marginTop: "5%" }}
        >
            <Modal.Body style={{ padding: "40px 20px" }}>
                <div
                    onClick={() => props.setDeleteClearing(false)}
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
                        Delete Laod
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
                        Are you sure you want to delete this load
                    </Form.Label>
                </div>
                {mobile && (
                    <div style={{
                        display: "flex", justifyContent: 'space-between',
                        marginTop: '40px', marginBottom: "10px"
                    }}>
                        <Button
                            onClick={props.handleUploadSuccessModal}
                            style={{
                                boxSizing: "border-box",
                                width: "49%",
                                height: "40px",
                                background: "#00902F",
                                bordeRadius: "6px",
                                flex: "none",
                                order: "0",
                                flexGrow: "0",
                                border: "none",
                                fontSize: "12px",
                                fontFamily: 'Poppins',
                                fontStyle: "normal",
                                fontWeight: 500,
                                letteSpacing: "0.15em"
                            }}>
                            Yes, Continue
                        </Button>
                        <Button
                            onClick={() => props.setDeleteClearing(false)}
                            style={{
                                boxSizing: "border-box",
                                width: "49%",
                                height: "40px",
                                background: "#EB5757",
                                bordeRadius: "6px",
                                flex: "none",
                                order: "0",
                                flexGrow: "0",
                                border: "none",
                                fontSize: "12px",
                                fontFamily: 'Poppins',
                                fontStyle: "normal",
                                fontWeight: 500,
                                letteSpacing: "0.15em"
                            }}>
                            No, Cancel
                        </Button>
                    </div>
                )}
                {tabletAndDesktop && (
                    <div style={{
                        display: "flex", justifyContent: 'space-around',
                        marginTop: '40px', marginBottom: "10px"
                    }}>
                        <Button
                            onClick={props.handleUploadSuccessModal}
                            style={{
                                boxSizing: "border-box",
                                width: "45%",
                                height: "40px",
                                background: "#00902F",
                                bordeRadius: "6px",
                                flex: "none",
                                order: "0",
                                flexGrow: "0",
                                border: "none",
                                fontSize: "12px",
                                fontFamily: 'Poppins',
                                fontStyle: "normal",
                                fontWeight: 500,
                                letteSpacing: "0.15em"
                            }}>
                            Yes, Continue
                        </Button>
                        <Button
                            onClick={() => props.setDeleteClearing(false)}
                            style={{
                                boxSizing: "border-box",
                                width: "45%",
                                height: "40px",
                                background: "#EB5757",
                                bordeRadius: "6px",
                                flex: "none",
                                order: "0",
                                flexGrow: "0",
                                border: "none",
                                fontSize: "12px",
                                fontFamily: 'Poppins',
                                fontStyle: "normal",
                                fontWeight: 500,
                                letteSpacing: "0.15em"
                            }}>
                            No, Cancel
                        </Button>
                    </div>
                )}
            </Modal.Body>
        </GeneralModal>
    )
}