import Image from "next/image";
import { Form } from "react-bootstrap";
import Media from "@/utils/media";

export default function RequestInboxContent(props) {
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
                    <Form.Label 
                    onClick={() => props.setRequestMoneyModal(true)}
                    style={{
                        fontSize: '12px',
                        color: "black",
                        fontWeight: '400',
                        marginTop: "11px",
                        cursor: "pointer"
                    }}>
                        {props.statement}
                    </Form.Label>
                    <Form.Label style={{
                        fontSize: '12px',
                        color: "white",
                        fontWeight: '400',
                        background: "linear-gradient(90deg, #00902F 0%, #7CC427 99.69%)",
                        padding: "4px 7px",
                        borderRadius: '5px',
                        height:'26px',
                        marginTop: "6px",
                        textAlign: "center"
                    }}>
                        {props.amount}
                    </Form.Label>
                </div>
            </div>
        </>
    )
}