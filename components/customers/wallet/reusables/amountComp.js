import { useEffect } from "react"
import { Form } from "react-bootstrap"

const amounts = [
    "+ #100",
    "+ #500",
    "+ #1000",
    "+ #1500"
]
export default function AmountComp(props) {
    useEffect(() => {
        props.setAmount("+ #100")
    }, [props])

    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: "center",
                alignItems: 'center',
                marginTop: "20px",
                gap: '10px'
            }}>
                {amounts.map((amt, idx) => (
                    <div
                        key={idx}
                        onClick={() => props.setAmount(amt)}
                        style={props.amount === amt ? {
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: "center",
                            alignItems: 'center',
                            width: "77px",
                            height: "40px",
                            border: "1px solid #00902F",
                            borderRadius: '5px',
                            cursor: 'pointer'
                        } : {
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: "center",
                            alignItems: 'center',
                            width: "77px",
                            height: "40px",
                            border: "1px solid gray",
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}>
                        <Form.Label style={{
                            fontSize: '12px',
                            color: 'black'
                        }}>
                            {amt}
                        </Form.Label>
                    </div>
                ))}
            </div>
        </>
    )
}