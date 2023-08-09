import Image from "next/image";
import { useRouter } from "next/router";
import { Form } from "react-bootstrap";

export default function ClearingTopMobile(props) {
    const router = useRouter()
    return (
        <>
            <div style={{
                margin: 0,
                height: "72px",
                display: 'flex',
                justifyContent: "space-between",
                padding: "10px"
            }}>
                <div>
                    <Image
                        src="/img/success-logo.png"
                        width="30"
                        height="21"
                        alt="logo"
                    />
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                    <Image
                        src="/img/user.png"
                        width="24"
                        height="24"
                        alt="logo"
                    />
                    <Form.Label
                        style={{
                            fontSize: "12px",
                            color: "black",
                            fontWeight: "500",
                            marginLeft: "12px"
                        }}
                    >Kelechi Agu</Form.Label>
                    <Image
                        onClick={() => router.push("/customers/messages")}
                        style={{
                            cursor: "pointer",
                            marginLeft: "12px"
                        }}
                        src="/img/message1.png"
                        width="39"
                        height="32"
                        alt="message"
                    />
                    <Image
                        style={{
                            cursor: "pointer",
                            marginLeft: "12px",
                            marginTop: '6px'
                        }}
                        src="/img/hamburger1.png"
                        width="20"
                        height="12"
                        alt="logo"
                    />
                </div>
            </div>
            <div style={{
                
            }}>

            </div>
        </>
    )
}