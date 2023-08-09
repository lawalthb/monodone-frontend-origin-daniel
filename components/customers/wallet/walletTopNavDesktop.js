import Image from "next/image";
import { Form } from "react-bootstrap";

export default function WalletTopNavDesktop(props) {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    height: '62px',
                    borderBottom: "1px solid #E7E7E7"
                }}
            >
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: 'center',
                    background: 'linear-gradient(90deg, #00902F 0%, #7CC427 99.69%)',
                    width: '20%',
                    height: '100%'
                }}>
                    <Form.Label style={{
                        fontSize: '16px',
                        color: "white",
                        fontWeight: 'bold'
                    }}>
                        Monodome
                    </Form.Label>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '20px',
                }}>
                    <Image style={{
                        marginTop: "20px"
                    }} src="/img/wallethamburger.png" width="26" height="26" alt="hamburger" />
                    <Image style={{
                        marginTop: "20px"
                    }} src="/img/walletprofile.png" width="26" height="26" alt="hamburger" />
                    <Form.Label style={{
                        fontSize: '11px',
                        color: "black",
                        marginTop: "20px"
                    }}>
                        Agent
                    </Form.Label>
                    <Form.Label style={{
                        fontSize: '11px',
                        color: "black",
                        marginTop: "20px"
                    }}>
                        Office #34
                    </Form.Label>
                    <Form.Label style={{
                        fontSize: '11px',
                        color: "black",
                        marginTop: "20px"
                    }}>
                        {"|"}
                    </Form.Label>
                    <Form.Label style={{
                        fontSize: '11px',
                        color: "black",
                        marginTop: "20px"
                    }}>
                        to 30kg
                    </Form.Label>
                    <div>{" "}</div>
                    <div></div>
                </div>
            </div>
        </>
    )
}