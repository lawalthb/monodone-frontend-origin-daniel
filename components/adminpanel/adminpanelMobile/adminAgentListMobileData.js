import Image from "next/image";
import { useState } from "react";
import { Form } from "react-bootstrap";

export default function AdminAgentListMobileData(props) {
    const [index, setIndex] = useState()
    return (
        <>
            <div
                key={props.idx} style={{
                    display: 'flex',
                    gap: "10px",
                    width: '100%',
                    marginTop: "10px",
                    padding: '10px'
                }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '10%'
                }}>
                    {index ? (
                        <Image
                            onClick={() => setIndex((prevState) => {
                                prevState = ""
                                return prevState
                            })}
                            style={{
                                width: "24px",
                                maxWidth: "100%",
                            }}
                            src="/img/up.png"
                            width="24"
                            height="24"
                            alt="badge"
                        />
                    ) : index === 0 ? (
                        <Image
                            onClick={() => setIndex((prevState) => {
                                prevState = ""
                                return prevState
                            })}
                            style={{
                                width: "24px",
                                maxWidth: "100%",
                            }}
                            src="/img/up.png"
                            width="24"
                            height="24"
                            alt="badge"
                        />
                    ) : (
                        <Image
                            onClick={() => setIndex((prevState) => {
                                prevState = props.idx
                                return prevState
                            })}
                            style={{
                                width: "24px",
                                maxWidth: "100%",
                            }}
                            src="/img/down.png"
                            width="24"
                            height="24"
                            alt="badge"
                        />
                    )}
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '35%'
                }}>
                    <Form.Label style={{
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "black",
                        marginBottom: "20px"
                        // borderBottom: '1px solid #E7E7E7'
                    }}>
                        Agent no
                    </Form.Label>
                    <Form.Label style={index === props.idx ? {
                        display: "block",
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "black",
                        marginBottom: "20px"
                        // borderBottom: '1px solid #E7E7E7'
                    } : {
                        display: 'none'
                    }}>
                        Date added
                    </Form.Label>
                    <Form.Label style={index === props.idx ? {
                        display: 'block',
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "black",
                        marginBottom: "20px",
                        // borderBottom: '1px solid #E7E7E7'
                    } : {
                        display: 'none'
                    }}>
                        Business name
                    </Form.Label>
                    <Form.Label style={index === props.idx ? {
                        display: "block",
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "black",
                        marginBottom: "10px"
                        // borderBottom: '1px solid #E7E7E7'
                    } : {
                        display: 'none'
                    }}>
                        Address
                    </Form.Label>
                    <Form.Label style={index === props.idx ? {
                        display: "block",
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "black",
                        marginBottom: "20px",
                        marginTop: "20px",
                        // borderBottom: '1px solid #E7E7E7'
                    } : {
                        display: "none"
                    }}>
                        Phone number
                    </Form.Label>
                    <Form.Label style={index === props.idx ? {
                        display: "block",
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "black",
                        marginBottom: "20px"
                        // borderBottom: '1px solid #E7E7E7'
                    } : {
                        display: 'none'
                    }}>
                        Weight
                    </Form.Label>
                    <Form.Label style={index === props.idx ? {
                        display: "block",
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "black",
                        marginBottom: "20px"
                        // borderBottom: '1px solid #E7E7E7'
                    } : {
                        display: "none"
                    }}>
                        Dimensions
                    </Form.Label>
                    <Form.Label style={index === props.idx ? {
                        display: 'block',
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "black",
                        marginBottom: "20px"
                        // borderBottom: '1px solid #E7E7E7'
                    } : {
                        display: "none"
                    }}>
                        Actions
                    </Form.Label>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '50%'
                }}>
                    <Form.Label style={{
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "black"
                    }}>
                        {props.data.agentNo}
                    </Form.Label>
                    <Form.Label style={index === props.idx ? {
                        display: "block",
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "black",
                        marginTop: '10px'
                        // borderBottom: '1px solid #E7E7E7'
                    } : {
                        display: "none"
                    }}>
                        {props.data.dateAdded}
                    </Form.Label>
                    <Form.Label style={index === props.idx ? {
                        display: "block",
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "black",
                        marginBottom: "20px",
                        marginTop: '10px'
                        // borderBottom: '1px solid #E7E7E7'
                    } : {
                        display: 'none'
                    }}>
                        {props.data.businessName}
                    </Form.Label>
                    <Form.Label style={index === props.idx ? {
                        display: 'block',
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "black",
                        marginBottom: "20px"
                        // borderBottom: '1px solid #E7E7E7'
                    } : {
                        display: 'none'
                    }}>
                        {props.data.address}
                    </Form.Label>
                    <Form.Label style={index === props.idx ? {
                        display: "block",
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "black",
                        marginBottom: "20px",
                        // marginTop: '10px'
                        // borderBottom: '1px solid #E7E7E7'
                    } : {
                        display: 'none'
                    }}>
                        {props.data.phoneNumber}
                    </Form.Label>
                    <Form.Label style={index === props.idx ? {
                        display: "block",
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "black",
                        marginBottom: "20px"
                        // borderBottom: '1px solid #E7E7E7'
                    } : {
                        display: 'none'
                    }}>
                        {props.data.weight}
                    </Form.Label>
                    <Form.Label style={index === props.idx ? {
                        display: "block",
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "black",
                        marginBottom: "20px"
                        // borderBottom: '1px solid #E7E7E7'
                    } : {
                        display: "none"
                    }}>
                        {props.data.dimensions}
                    </Form.Label>
                    <div style={index === props.idx ? {
                        display: "flex",
                        gap: "10px"
                    } : {
                        display: "none"
                    }}>
                        <Image
                            style={{
                                width: "24px",
                                maxWidth: "100%",
                            }}
                            src={props.data.action[0]}
                            width="24"
                            height="24"
                            alt="badge"
                        />
                        <Image
                            style={{
                                width: "24px",
                                maxWidth: "100%",
                            }}
                            src={props.data.action[1]}
                            width="24"
                            height="24"
                            alt="badge"
                        />
                        <Image
                            style={{
                                width: "24px",
                                maxWidth: "100%",
                            }}
                            src={props.data.action[2]}
                            width="24"
                            height="24"
                            alt="badge"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}