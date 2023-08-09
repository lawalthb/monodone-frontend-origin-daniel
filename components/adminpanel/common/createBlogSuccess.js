import Image from "next/image"
import { Button, Form, Modal } from "react-bootstrap"
import GeneralModal from "../../customers/modal"

export default function CreateBlogSuccess(props) {
    return (
        <>
            <GeneralModal
                size="md"
                show={props.createBlogSuccess}
                onHide={() => {
                    props.setCreateBlogSuccess(false)
                }}
                style={props.style}
            >
            <Modal.Body style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
            }}>
                <div
                    onClick={() => {
                        props.setCreateBlogSuccess(false)
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
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: "10px"
                }}>
                    <Image
                        src="/img/success-logo.png"
                        width="30"
                        height="21"
                        alt="logo"
                    />
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: "10px"
                }}>
                    <Form.Label style={{
                        fontSize: '16px',
                        fontWeight: '600',
                        color: 'black',
                    }}>
                        Successful!
                    </Form.Label>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: "10px"
                }}>
                    <Form.Label style={{
                        fontSize: '12px',
                        fontWeight: '40',
                        color: 'black',
                    }}>
                        Your blog has been uploaded successfully.
                    </Form.Label>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: "10px"
                }}>
                    <Image
                        src="/img/success-thick.png"
                        width="300"
                        height="300"
                        alt="logo"
                    />
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: 'center',
                    marginTop: "30px"
                }}>
                    <Button
                        onClick={() => props.setCreateBlogSuccess(false)}
                        style={{
                            background: "#00902F",
                            border: "none",
                            padding: "7px",
                            color: "white",
                            width: '100%',
                            fontSize: "10px"
                        }}>
                        Ok
                    </Button>
                </div>
            </Modal.Body>
        </GeneralModal >
        </>
    )
}