import { Form } from "react-bootstrap";

export default function StatisticsManagementComp(props) {
    return (
        <>
        <div style={{
                display: "flex",
                justifyContent: "space-between",
                width: '100%'
            }}>
                <Form.Label
                    style={{
                        color: "black",
                        fontWeight: "600",
                        fontSize: "18px",
                        fontFamily: 'Poppins',
                        fontStyle: "normal"
                    }}>
                    Statistics
                </Form.Label>
            </div>
        </>
    )
}