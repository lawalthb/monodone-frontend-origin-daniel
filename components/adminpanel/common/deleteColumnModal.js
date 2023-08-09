import Image from "next/image"
import { Form, Modal } from "react-bootstrap"
import GeneralModal from "../../customers/modal"
import BtnComp from "./btnComp"

export default function DeleteColumnModal(props) {
    return (
        <>
            <GeneralModal
                size="md"
                show={props.deleteColumn}
                onHide={() => {
                    props.setDeleteColumn(false)
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
                            props.setDeleteColumn(false)
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
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Form.Label style={{
                            fontSize: "16px",
                            color: "black",
                            fontWeight: 600
                        }}>
                            Delete column
                        </Form.Label>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Form.Label style={{
                            fontSize: "10px",
                            color: "black",
                            fontWeight: 400,
                            textAlign: 'center'
                        }}>
                            Are you sure you want to delete this column? You will <br /> not be able to restore
                            it
                        </Form.Label>
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "20px",
                        gap: '10px'
                    }}>
                        <BtnComp
                            onClick={() => props.setDeleteColumn(false)}
                            style={{
                                background: "#00902F",
                                border: "none",
                                padding: "7px",
                                color: "white",
                                width: '48%',
                                display: 'flex',
                                justifyContent: "center",
                                gap: '10px'
                            }}>
                            <Image style={{
                                marginTop: '6px'
                            }} src="/img/delcolumn.png" width="12" height="13" alt="del" />
                            <Form.Label style={{
                                fontSize: "12px",
                                color: "white",
                                marginTop: '5px'
                            }}>
                                Delete
                            </Form.Label>
                        </BtnComp>
                        <BtnComp
                            onClick={() => props.setDeleteColumn(false)}
                            style={{
                                background: "red",
                                border: "none",
                                padding: "7px",
                                color: "white",
                                width: '48%',
                                display: 'flex',
                                justifyContent: "center",
                                gap: '10px'
                            }}>
                            <Image style={{
                                marginTop: '7px'
                            }} src="/img/columncancel.png" width="10" height="10" alt="cancel" />
                            <Form.Label style={{
                                fontSize: "12px",
                                color: "white",
                                marginTop: '5px'
                            }}>
                                Cancel
                            </Form.Label>
                        </BtnComp>
                    </div>
                </Modal.Body>
            </GeneralModal>
        </>
    )
}