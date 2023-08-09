import Image from "next/image";
import { Form } from "react-bootstrap";

export default function WebDivs(props) {
    return (
        <div
            key={props.idx}
            style={{
                width: '100%',
                height: "80px",
                boxShadow: "4px 4px 8px 0 rgba(0, 0, 0, 0.2)",
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
                    fontSize: "11px",
                    color: "#A6A6A6"
                }}>
                    {props.header}
                </Form.Label>
                <Form.Label style={{
                    fontSize: "16px",
                    color: "black",
                    fontWeight: '600',
                }}>
                    {props.value}
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
                    src="/img/profile3.png"
                    width="40"
                    height="40"
                    alt="profile"
                />
            </div>
        </div>
    )
}