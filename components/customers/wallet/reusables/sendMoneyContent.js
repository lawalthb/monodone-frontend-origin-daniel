import Image from "next/image";
import { Form } from "react-bootstrap";

export default function SendMoneyContent(props) {
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: '10px'
            }}>
                <div style={{
                    display: 'flex',
                    gap: "10px"
                }}>
                    <Image style={{
                        maxWidth: '100%',
                        width: "46px",
                        borderRadius: '50%'
                    }} src={props.imgSrc} width="46" height="46" alt="hamburger" />
                    <Form.Label style={{
                        fontSize: '12px',
                        color: "black",
                        fontWeight: '400',
                        marginTop: "11px"
                    }}>
                        {props.name}
                    </Form.Label>
                </div>
                <div style={{
                    display: 'flex',
                    gap: "10px",
                    marginTop: '5px'
                }}>
                    <Image
                        onClick={() => {
                            props.setSendMoneyModal(false)
                            props.setSendAnotherUser(true)
                        }}
                        style={{
                            maxWidth: '100%',
                            width: "7px",
                            cursor: 'pointer',
                            marginTop: '7px'
                        }} src="/img/walletgt.png" width="7" height="13" alt="backarrow" />
                </div>
            </div>
        </>
    )
}