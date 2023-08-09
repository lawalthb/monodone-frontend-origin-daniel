import Image from "next/image";
import { Form } from "react-bootstrap";
import GeneralModal from "../modal";

export default function Aboutapp(props) {
    return (
        <>
            <GeneralModal
                size="md"
                show={props.aboutApp}
                onHide={() => props.setAboutApp(false)}
                style={{
                    marginTop: "2%"
                }}
            >
                <div style={{
                    display: 'flex',
                    flexDirection: "column",
                    padding: "40px"
                }}>
                    <div
                        onClick={() => props.setAboutApp(false)}
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: '10px',
                            cursor: "pointer"
                        }}>
                        <Image src="/img/close.png" width="17" height="17" alt="close" />
                    </div>
                    <Form.Group style={{
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: "center",
                        color: '#000000'
                    }}>
                        About App
                    </Form.Group>
                    <Form.Group style={{
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: "center"
                    }}>
                        <Form.Label style={{
                            fontSize: '12px',
                            textAlign: 'center',
                            color: '#000000',
                            marginTop: "10px"
                        }}>
                            Monodome - lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        </Form.Label>
                    </Form.Group>
                    <Form.Group style={{
                        marginTop: "30px"
                    }}>
                        <Form.Select style={{
                            padding: '10px'
                        }}>
                            <option value="">Terms & Condition</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group style={{
                        marginTop: "30px"
                    }}>
                        <Form.Select style={{
                            padding: '10px'
                        }}>
                            <option value="">Privacy Policy</option>
                        </Form.Select>
                    </Form.Group>
                </div>
            </GeneralModal>
        </>
    )
}