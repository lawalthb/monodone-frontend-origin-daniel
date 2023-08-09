import Image from "next/image";
import { useRef } from 'react'
import { Button, Form, Modal } from "react-bootstrap";
import { carDocuments } from "../cars/carDocuments";
import GeneralModal from "../modal";

export default function UploadDocument(props) {
    const hiddenFileInput = useRef(null)

    const handleClick = (event) => {
        hiddenFileInput.current.click()
    }

    const handleFileChange = (event) => {
        const fileUploaded = event.target.files[0]
        let reader = new FileReader();
        if (props.isContainerShipmentUpload) {
            reader.onload = (e) => {
                props.setContainerShipmentData((prevState) => {
                    const newState = {
                        ...prevState,
                        containerImage: e.target.result
                    }
                    return newState
                })
                props.handleUploadSuccessModal()
            };
            reader.readAsDataURL(event.target.files[0]);
        }
        if (props.isCarClearingParcel) {
            reader.onload = (e) => {
                props.setCarClearingDetails((prevState) => {
                    const newState = {
                        ...prevState,
                        containerImage: e.target.result
                    }
                    return newState
                })
                props.handleUploadSuccessModal()
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    const handleOnChange = (e) => {
        if (props.isContainerShipmentUpload) {
            props.setContainerShipmentData((prevState) => {
                const newState = {
                    ...prevState,
                    uploadDocuments: e.target.value
                }
                return newState
            })
        }
        if (props.isCarClearingParcel) {
            props.setCarClearingDetails((prevState) => {
                const newState = {
                    ...prevState,
                    uploadDoc: e.target.value
                }
                return newState
            })
        }
    }

    return (
        <GeneralModal
            size="738px"
            show={props.uploadDocument}
            onHide={() => props.setUploadDocument(false)}
            style={{ marginTop: "5%" }}
        >
            <Modal.Body style={{ padding: "40px 40px" }}>
                <div
                    onClick={() => props.handleCloseUploadDocument(false)}
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
                        fontSize: "16px",
                        color: '#414141',
                        letterSpacing: "0.02em",
                        marginBottom: '20px',
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',

                    }}>
                        Upload Documents
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
                        Select the document you want to upload
                    </Form.Label>
                </div>
                <div style={{ marginTop: '30px' }}>
                    <Form.Label style={{ color: "#151515", fontSize: "12px", fontWeight: '400' }}>
                        Car clearing documents
                    </Form.Label>
                    <Form.Group>
                        <Form.Select style={{ color: "#343F42", width: "100%" }} required
                            name="uploadDoc"
                            value={props.isCarClearingParcel ? props.carClearingDetails.uploadDoc :
                                props.containerShipmentData?.uploadDocuments}
                            onChange={handleOnChange} >
                            {carDocuments.map((doc, idx) => (
                                <option key={idx} value={doc}>{doc}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </div>
                <div style={{
                    display: "flex", justifyContent: "center", alignItems: "center",
                    marginTop: '40px', marginBottom: "40px"
                }}>
                    <Button
                        onClick={handleClick}
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
                            fontSize: "12px",
                        }}>
                        Upload
                    </Button>
                    <input type="file" ref={hiddenFileInput} onChange={handleFileChange}
                        style={{
                            display: "none"
                        }} />
                </div>
            </Modal.Body>
        </GeneralModal>
    )
}