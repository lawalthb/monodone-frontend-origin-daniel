import Image from "next/image";
import { Form } from "react-bootstrap";

export default function StatDivDesktop(props) {
    return (
        <>
            <div style={{
                width: '25%',
                height: "80px",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1)",
                transition: "0.3s",
                display: 'flex',
                justifyContent: "space-between",
                background: 'white',
                padding: "12px 30px"
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <Form.Label style={{
                        fontSize: "9px",
                        color: "#A6A6A6"
                    }}>
                        {props.statName}
                    </Form.Label>
                    <Form.Label style={{
                        fontSize: "16px",
                        color: "black",
                        fontWeight: '600',
                    }}>
                        {props.statValue}
                    </Form.Label>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: "7px"
                }}>
                    <Image
                        style={{
                            width: "40px",
                            maxWidth: "100%",
                        }}
                        src={props.statImg}
                        width="40"
                        height="40"
                        alt="profile"
                    />
                </div>
            </div>
        </>
    )
}