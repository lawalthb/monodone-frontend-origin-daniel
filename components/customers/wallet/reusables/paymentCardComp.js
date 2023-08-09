import { Button, Form } from "react-bootstrap";

export default function PaymentCardComp(props) {
    return (
        <>
            <div style={props.style}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <Form.Label style={{
                        fontSize: '12px',
                        color: "#808080",
                        fontWeight: '400',
                    }}>
                        Payment card
                    </Form.Label>
                    <Form.Label style={{
                        fontSize: '14px',
                        color: "black",
                        fontWeight: '400',
                    }}>
                        MasterCard***8009
                    </Form.Label>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: 'center',
                }}>
                    <Button style={{
                        background: 'transparent',
                        border: '1px solid #7CC427',
                        height: '35px',
                        display: 'flex',
                        alignItems: 'flex-start'
                    }}>
                        <Form.Label
                            onClick={() => props.setChangeCard(true)}
                            style={{
                                fontSize: '12px',
                                color: "black",
                                fontWeight: '400',
                                cursor: 'pointer'
                            }}>
                            Change
                        </Form.Label>
                    </Button>
                </div>
            </div>
        </>
    )
}