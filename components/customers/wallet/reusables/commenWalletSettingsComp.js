import Image from "next/image";
import { Form } from "react-bootstrap";

export default function CommonWalletSettingsComp(props) {
    return (
        <>
            <div
                onClick={props.handleClick}
                style={props.clicked ? {
                    display: 'flex',
                    justifyContent: "flex-start",
                    padding: '15px 8px',
                    width: '100%',
                    height: '60px',
                    gap: '10px',
                    borderBottom: '1px solid #E7E7E7',
                    background: 'rgba(124, 196, 39, 0.1)',
                    cursor: 'pointer'
                } : {
                    display: 'flex',
                    justifyContent: "flex-start",
                    padding: '15px 8px',
                    width: '100%',
                    height: '60px',
                    gap: '10px',
                    borderBottom: '1px solid #E7E7E7',
                    cursor: 'pointer' 
                }}>
                <Image style={props.style}
                    src={props.imgSrc} width={props.imgWidth} height={props.imgHeight} alt="settings" />
                <Form.Label style={{
                    fontSize: '14px',
                    color: "black",
                    fontWeight: '500',
                }}>
                    {props.caption}
                </Form.Label>
            </div>
        </>
    )
}