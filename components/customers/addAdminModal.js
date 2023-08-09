import Image from "next/image";
import { Button, Form, Modal } from "react-bootstrap";
import GeneralModal from "./modal";
import styles from './customerdashboard.module.css'

export default function AddAdminModal(props) {
    return (
        <GeneralModal
            size="sm"
            show={props.addAdminModal}
            onHide={() => props.setAddAdminModal(false)}
            style={{ marginTop: "3%"}}
        >
            <Modal.Body>
                <Modal.Header
                    style={{
                        fontWeight: "bold",
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "auto",
                        background: "#00902F",
                        color: "white",
                    }}
                >
                    Add Admin
                </Modal.Header>
                <Form.Group
                    className="mb-4 mt-4"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "auto",
                    }}
                >
                    <Image
                        src="/img/confirmImg.png"
                        alt="confirmImg"
                        width={100}
                        height={100}
                    />
                </Form.Group>
                <Form.Group
                    className="mb-4 mt-4"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "auto",
                    }}
                >
                    <Form.Label>
                        Are you sure you want to add Chiamaka Okafor as admin
                    </Form.Label>
                </Form.Group>
                <Form.Group className="mb-4 mt-4">
                    <div className={styles.flex_between}>
                        <Button
                            onClick={props.cancelAddAdminModal}
                            style={{
                                background: "white",
                                border: "1px solid #00902F",
                                color: "green",
                            }}
                            className={styles.basis}
                        >
                            Cancel
                        </Button>
                        <Button
                            style={{
                                background: "#00902F",
                                border: "1px solid green",
                                color: "white",
                            }}
                            className={styles.basis}
                            onClick={() => props.handleAddAdminSuccess()}
                        >
                            Done
                        </Button>
                    </div>
                </Form.Group>
            </Modal.Body>
        </GeneralModal>
    )
}