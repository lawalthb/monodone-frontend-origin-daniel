import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import GeneralModal from "./modal";
import styles from './customerdashboard.module.css'

export default function AssignAdminModal(props) {
    const [role, setRole] = useState("")
    const [dept, setDept] = useState("")
    const [staffName, setStaffName] = useState("")

    return (
        <GeneralModal
            size="md"
            show={props.assignAdmin}
            onHide={() => props.setAssignAdmin(false)}
        >
            <>
                <Modal.Header
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "auto",
                        fontWeight: "bold",
                        background: "#00902F",
                    }}
                >
                    <Form.Label style={{ fontSize: "20px", color: "white" }}>
                        Assign Admin
                    </Form.Label>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-4 mt-4">
                        <Form.Label style={{ fontSize: "14px", color: "#343F42" }}>
                            Staff&apos;s Name
                        </Form.Label>
                        <Form.Control type="text" style={{ color: "#343F42" }} name="staffName"
                            required value={staffName} onChange={(event) => setStaffName(event.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-5">
                        <Form.Label style={{ fontSize: "14px", color: "#343F42" }}>
                            Department
                        </Form.Label>
                        <Form.Select style={{ color: "#343F42" }}
                            required name="department" value={dept} onChange={(event) => setDept(event.target.value)}>
                            <option value="">Select Department</option>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                            <option value="staff">Staff</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-5">
                        <Form.Label style={{ fontSize: "14px", color: "#343F42" }}>
                            Roles
                        </Form.Label>
                        <Form.Select size="lg" style={{ color: "#343F42" }}
                            required name="role" value={role} onChange={(event) => setRole(event.target.value)}>
                            <option value="">Select Role</option>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                            <option value="agent">Agent</option>
                        </Form.Select>
                    </Form.Group>
                    <div className={styles.flex_between}>
                        <Button
                            onClick={() => props.setAssignAdmin(false)}
                            style={{
                                background: "white",
                                border: "1px solid #00902F",
                                color: "#00902F",
                            }}
                            className={styles.basis}
                        >
                            Cancel
                        </Button>
                        <Button
                            disabled={!role || !staffName || !dept}
                            onClick={props.handleConfirmAssignAdmin}
                            style={{
                                background: "#00902F",
                                border: "1px solid #00902F",
                                color: "white",
                            }}
                            className={styles.basis}
                        >
                            Done
                        </Button>
                    </div>
                </Modal.Body>
            </>
        </GeneralModal>
    )
}