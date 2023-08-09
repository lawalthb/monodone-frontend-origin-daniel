import Image from "next/image";
import { Form } from "react-bootstrap";
import Media from "@/utils/media";

export default function PaymentHistory(props) {
    const { mobile, tabletAndDesktop} = Media();

    return (
        <>
            <div style={mobile ? {
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: '20px'
            } : {
                display: 'flex',
                justifyContent: 'space-between',
                width: '90%',
                marginTop: '20px'
            }}>
                <div style={{
                    display: 'flex',
                    gap: "10px"
                }}>
                    <Image style={{
                        maxWidth: '100%',
                        width: "46px"
                    }} src="/img/walletavatar.png" width="46" height="46" alt="hamburger" />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <Form.Label style={{
                            fontSize: '12px',
                            color: "black",
                            fontWeight: '400',
                        }}>
                            {props.paymentType}
                        </Form.Label>
                        <Form.Label style={{
                            fontSize: '10px',
                            color: "#808080",
                            fontWeight: '400',
                        }}>
                            {props.status}
                        </Form.Label>
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: 'center'
                }}>
                    <Form.Label style={props.status === "Approved" ? {
                        fontSize: '12px',
                        color: "#00902F",
                        fontWeight: '400',
                    } : props.status === "Rejection" ? {
                        fontSize: '12px',
                        color: "#F20808",
                        fontWeight: '400',
                    } : props.status === "Pending" ? {
                        fontSize: '12px',
                        color: "#D1D1D1",
                        fontWeight: '400',
                    } : {
                        fontSize: '12px',
                        color: "black",
                        fontWeight: '400',
                    }}>
                        {props.amount}
                    </Form.Label>
                </div>
            </div>
        </>
    )
}