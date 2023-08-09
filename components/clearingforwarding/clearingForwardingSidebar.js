import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

export default function ClearingForwardingSidebar(props) {
    useEffect(() => {
        props.setIsOrder(true)
    }, [props])

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "40px",
            padding: "10px 20px"
        }}>
            <Form.Group
                onClick={props.handleIsBroadcast}
                style={props.isBroadcast ? {
                    display: 'flex',
                    marginBottom: "20px",
                    paddingLeft: "10px",
                    marginLeft: "-10px",
                    borderLeft: "2px solid white"
                } : {
                    display: 'flex',
                    marginBottom: "20px",
                }}>
                <Image style={{
                    cursor: "pointer"
                }} src="/img/home.png" width="16" height='17' alt="home" />
                <Form.Label style={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "white",
                    marginLeft: '20px',
                    cursor: "pointer"
                }}><Link style={{ textDecoration: 'none', color: 'inherit'}} href='/clearingforwarding'>Broadcast</Link></Form.Label>
            </Form.Group>
            <Form.Group
                onClick={props.handleIsOrder}
                style={props.isOrder ? {
                    display: 'flex',
                    marginBottom: "20px",
                    paddingLeft: "10px",
                    marginLeft: "-10px",
                    borderLeft: "2px solid white"
                } : {
                    display: 'flex',
                    marginBottom: "20px",
                }}>
                <Image style={{
                    cursor: "pointer"
                }} src="/img/shopping-bag.png" width="18" height='20' alt="shopping" />
                <Form.Label style={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "white",
                    marginLeft: '20px',
                    cursor: "pointer"
                }}><Link style={{ textDecoration: 'none', color: 'inherit'}} href='/clearingforwarding/orders'>Orders</Link></Form.Label>
            </Form.Group>
            <Form.Group
                // onClick={props.handleIsWallet}
                style={props.isWallet ? {
                    display: 'flex',
                    marginBottom: "20px",
                    paddingLeft: "10px",
                    marginLeft: "-10px",
                    borderLeft: "2px solid white"
                } : {
                    display: 'flex',
                    marginBottom: "20px",
                }}>
                <Image style={{
                    cursor: "pointer"
                }} src="/img/wallet1.png" width="20" height='14' alt="shopping" />
                <Form.Label style={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "white",
                    marginLeft: '20px',
                    cursor: "pointer"
                }}><Link style={{
                    textDecoration: 'none',
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "white",
                    cursor: "pointer" }} href="/customers/wallet" target="__blank">Wallet</Link></Form.Label>
            </Form.Group>
            <Form.Group
                onClick={props.handleIsSettings}
                style={props.isSettings ? {
                    display: 'flex',
                    marginBottom: "20px",
                    paddingLeft: "10px",
                    marginLeft: "-10px",
                    borderLeft: "2px solid white"
                } : {
                    display: 'flex',
                    marginBottom: "20px",
                }}>
                <Image style={{
                    cursor: "pointer"
                }} src="/img/settings.png" width="20" height='20' alt="shopping" />
                <Form.Label style={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "white",
                    marginLeft: '20px',
                    cursor: "pointer"
                }}><Link style={{ textDecoration: 'none', color: 'inherit'}} href='/clearingforwarding/settings'>Settings</Link></Form.Label>
            </Form.Group>
            <Form.Group style={{
                display: 'flex',
                marginTop: "300px",
                borderTop: "1px solid white",
                width: '50%',
                paddingTop: "20px"
            }}>
                <Image style={{
                    cursor: "pointer"
                }} src="/img/logout1.png" width="20" height='20' alt="shopping" />
                <Form.Label style={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "white",
                    marginLeft: '20px',
                    cursor: "pointer"
                }}>Logout</Form.Label>
            </Form.Group>
        </div>
    )
}