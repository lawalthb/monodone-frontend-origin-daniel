import Image from "next/image";
import { Form } from "react-bootstrap";

export default function TopupFirstpart(props) {
    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: 'center',
                marginTop: "20px",
            }}>
                <Image style={{
                    width: '100px',
                    maxWidth: "100%"
                }} src="/img/topup.png" width="100" height="100" alt="close" />
                <Form.Label style={{
                    fontSize: '13px',
                    color: "black",
                    fontWeight: '600',
                    marginTop: "10px",
                }}>
                    Top up
                </Form.Label>
                <Form.Label style={{
                    fontSize: '11px',
                    color: "black",
                    fontWeight: '400',
                    marginTop: "10px",
                }}>
                    26 July 2022 | 11:59 PM
                </Form.Label>
                <Form.Label style={{
                    fontSize: '11px',
                    color: "black",
                    fontWeight: '400',
                    marginTop: "20px",
                }}>
                    From Mastercard
                </Form.Label>
                <div style={{
                    display: 'flex',
                    gap: '5px'
                }}>
                    <Form.Label style={{
                        fontSize: '14px',
                        color: "#00902F",
                        fontWeight: '600',
                    }}>
                        #
                    </Form.Label>
                    <Form.Label style={{
                        fontSize: '14px',
                        color: "black",
                        fontWeight: '600',
                    }}>
                        100
                    </Form.Label>
                </div>
            </div>
        </>
    )
}