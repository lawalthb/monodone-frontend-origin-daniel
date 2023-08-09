import Image from "next/image"
import { Button, Form, Modal } from "react-bootstrap"
import GeneralModal from "../../customers/modal"
import { useMediaQuery } from "react-responsive";

export default function BlogModal(props) {
    const isMobile = useMediaQuery({
        query: "(max-width: 709px)",
    });
    const isTabAndDesktop = useMediaQuery({
        query: "(min-width: 710px)",
    });
    return (
        <>
            <GeneralModal
                size="lg"
                show={props.blogModal}
                onHide={() => {
                    props.setBlogModal(false)
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
                            props.setBlogModal(false)
                        }}
                        style={{
                            position: "absolute",
                            top: "-1rem",
                            right: '-0.8rem',
                            cursor: "pointer"
                        }}>
                        <Image src="/img/close.png" width="14" height="14" alt="close" />
                    </div>
                    {(props.blogData.blogDocument || []).map((url, idx) => (
                        <div
                            key={idx}
                            style={{
                                display: "flex",
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: "20px"
                            }}>
                                {isMobile ? (
                                    <Image style={{
                                        width: '300px',
                                        maxWidth: '100%'
                                    }} src={url[0]} width="300" height="160" alt="close" />
                                ) : (
                                    <Image style={{
                                        width: '800px',
                                        maxWidth: '100%'
                                    }} src={url[0]} width="700" height="400" alt="close" />
                                )}
                        </div>
                    ))}
                    <Form.Label style={{
                        fontSize: '16px',
                        fontWeight: '600',
                        color: 'black',
                        marginTop: "10px"
                    }}>
                        Compiled Insights On How To Start A Transport Business
                    </Form.Label>
                    <p style={{
                        textAlign: "justify",
                        fontSize: "11px",
                        color: 'black'
                    }}>
                        {props.blogData.blogMessage}
                    </p>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        marginTop: "20px",
                        gap: '20px'
                    }}>
                        <Button
                            onClick={() => {
                                props.setBlogModal(false)
                            }}
                            style={{
                                background: "#00902F",
                                border: "none",
                                padding: "7px",
                                color: "white",
                                width: '30%'
                            }}>
                            Accept
                        </Button>
                        <Button
                            onClick={() => {
                                props.setBlogModal(false)
                            }}
                            style={{
                                background: "transparent",
                                border: "none",
                                padding: "7px",
                                color: "black",
                                width: '30%',
                                border: '1px solid #00902F'
                            }}>
                            Reject
                        </Button>
                    </div>
                </Modal.Body>
            </GeneralModal>
        </>
    )
}