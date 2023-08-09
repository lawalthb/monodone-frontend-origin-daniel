import Image from "next/image";
import { Form } from "react-bootstrap";

export default function PriceSettingsManagementComp(props) {
    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                width: '100%'
            }}>
                <div>
                    <Form.Label
                        style={{
                            color: "black",
                            fontWeight: "600",
                            fontSize: "18px",
                            fontFamily: 'Poppins',
                            fontStyle: "normal"
                        }}>
                        Price Settings
                    </Form.Label>
                </div>
                <input style={{
                    background: "#FFFFFF",
                    padding: '9px 16px 10px',
                    borderRadius: "5px",
                    border: "1px solid #E7E7E7"
                }} type="text" placeholder="search" />
            </div>
            <hr />
        </>
    )
}