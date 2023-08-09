import Image from "next/image";
import { useState } from "react";
import { Form } from "react-bootstrap";

export default function CustomerSpecializedShipmentMobile(props) {
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
                        Load Type
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
                        Container Type
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
                        Sender&apos;s name
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
                        Delivery From
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
                        Delivery To
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
                        Status
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
                        {props.data.loadType}
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
                        {props.data.containerType}
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
                        {props.data.name}
                    </Form.Label>
                    <Form.Label style={index === props.idx ? {
                        display: 'block',
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "black",
                        marginBottom: "20px",
                        marginTop: "10px"
                        // borderBottom: '1px solid #E7E7E7'
                    } : {
                        display: 'none'
                    }}>
                        {props.data.deliverFrom}
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
                        {props.data.deliverTo}
                    </Form.Label>
                    <Form.Label style={index === props.idx ? props.data.userType === "Pending" ? {
                                fontSize: "12px",
                                fontWeight: '500',
                                width: 'fit-content',
                                color: "#FFC700",
                                background: "rgba(255, 199, 0, 0.2)",
                                borderRadius: '100px',
                                padding: '2px 10px',
                                // marginTop: "10px"
                            } : props.data.userType === "Completed" ? {
                                fontSize: "12px",
                                fontWeight: '500',
                                width: 'fit-content',
                                color: "#7CC427",
                                background: "rgba(124, 196, 39, 0.2)",
                                borderRadius: '100px',
                                padding: '2px 10px',
                                // marginTop: "10px"
                            } : props.data.userType === "Failed" ? {
                                fontSize: "12px",
                                fontWeight: '500',
                                width: 'fit-content',
                                color: "#F20808",
                                background: "rgba(242, 8, 8, 0.2)",
                                borderRadius: '100px',
                                padding: '2px 10px',
                                // marginTop: "10px"
                            } : {} : {
                                display: 'none'
                            }}>
                        {props.data.userType}
                    </Form.Label>
                    <Form.Label style={index === props.idx ? {
                        display: "block",
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "black",
                        marginBottom: "20px",
                        // marginTop: "10px"
                        // borderBottom: '1px solid #E7E7E7'
                    } : {
                        display: "none"
                    }}>
                        {props.data.dimensions}
                    </Form.Label>
                    <div style={index === props.idx ? {
                        display: "flex",
                        gap: "10px",
                        fontWeight: "600",
                        fontSize: '16px'
                    } : {
                        display: "none"
                    }}>
                        ...
                    </div>
                </div>
            </div>
        </>
    )
}