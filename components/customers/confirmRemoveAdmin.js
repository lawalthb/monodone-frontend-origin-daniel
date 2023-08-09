import { Button, Form, Modal } from "react-bootstrap";
import GeneralModal from "./modal";
import CircleIcon from "@mui/icons-material/Circle";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import styles from './customerdashboard.module.css'
import Image from "next/image";

export default function ConfirmRemoveAdmin(props) {
    return (
        <GeneralModal
            size="sm"
            show={props.confirmRemoveAdmin}
            onHide={() => props.setConfirmRemoveAdmin(false)}
            style={{ marginTop: "3%"}}
        >
            <Modal.Body>
                <Modal.Header
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "auto",
                        fontWeight: "bold",
                        background: "#F44336",
                    }}
                >
                    <Form.Label style={{ fontSize: "15px", color: "white" }}>
                        Remove Admin
                    </Form.Label>
                </Modal.Header>
                <Form className={styles.modal}>
                    <Form.Group
                        className="mb-3"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "86px",
                        }}
                    >
                        <CircleIcon
                            style={{
                                width: "100px",
                                height: "100px",
                                color: "#F44336",
                                marginTop: "40px",
                                marginLeft: "-30px",
                            }}
                        />{" "}
                        <Image style={{
                            marginLeft: "-60px",
                            marginTop: "33px",
                        }} src="/img/cancel.png" alt="cancel" width="20" height="20" />
                        {/* style={{
                                fontSize: "30px",
                                marginLeft: "-63px",
                                marginTop: "30px",
                                color: "white",
                            }} */}

                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "auto",
                        }}
                    >
                        <Form.Label
                            style={{
                                margin: "auto",
                                marginTop: "40px",
                                textAlign: "center",
                            }}
                        >
                            Are you sure you want to remove this user from this role?
                        </Form.Label>
                    </Form.Group>
                    <div className={styles.flex_between}>
                        <Button
                            onClick={() => props.handleCancelRemoveAdmin(false)}
                            style={{
                                background: "white",
                                border: "1px solid #F44336",
                                color: "#F44336",
                            }}
                            className={styles.basis}
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={() => props.handleRemovalSuccess()}
                            style={{
                                background: "#F44336",
                                border: "none",
                                color: "white",
                            }}
                            className={styles.basis}
                        >
                            Done
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </GeneralModal>
    )
}