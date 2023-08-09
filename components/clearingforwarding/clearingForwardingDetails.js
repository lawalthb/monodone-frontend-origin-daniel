import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { Form, OverlayTrigger, Popover } from "react-bootstrap";
import { BiRadioCircle } from "react-icons/bi";
import { FaEllipsisH } from "react-icons/fa";
import styles from '../customers/customerdashboard.module.css'

export default function ClearingFowardingDetails(props) {
    const router = useRouter()
    const target = useRef(null);
    return (
        <>
            {props.isOrder && (
                <div style={{
                    display: 'flex',
                    flexDirection: "column",
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: "space-between",
                        gap: "2px",
                        background: "#FFFFFF",
                        padding: "20px 10px"
                    }}>
                        <Form.Label style={{
                            fontSize: "14px",
                            fontWeight: "500",
                            color: "black",
                            width: "50px"
                        }}></Form.Label>
                        <Form.Label style={{
                            fontSize: "14px",
                            fontWeight: "500",
                            color: "black",
                            width: "200px"
                        }}>Sender&apos;s Name</Form.Label>
                        <Form.Label style={{
                            fontSize: "14px",
                            fontWeight: "500",
                            color: "black",
                            width: "200px",
                            marginLeft: "-10px"
                        }}>Load type</Form.Label>
                        <Form.Label style={{
                            fontSize: "14px",
                            fontWeight: "500",
                            color: "black",
                            width: "200px",
                            marginLeft: "-10px"
                        }}>Departure country</Form.Label>
                        <Form.Label style={{
                            fontSize: "14px",
                            fontWeight: "500",
                            color: "black",
                            width: "200px",
                            marginRight: "6px"
                        }}>Destination country</Form.Label>
                        <Form.Label style={{
                            fontSize: "14px",
                            fontWeight: "500",
                            color: "black",
                            width: "200px",
                            marginRight: "40px"
                        }}>Status</Form.Label>
                        <Form.Label style={{
                            fontSize: "14px",
                            fontWeight: "500",
                            color: "black",
                            width: "200px",
                            marginRight: "-50px"
                        }}>Action</Form.Label>
                    </div>
                    {props.clearingForwardingData.map((data, idx) => {
                        return (
                            <div
                                key={idx}
                                style={{
                                    display: 'flex',
                                    justifyContent: "flex-start",
                                    gap: "1px",
                                    borderBottom: "1px solid #E7E7E7"
                                }}>
                                <>
                                    <div style={{
                                        width: "50px",
                                        padding: "10px 0px"
                                    }}>
                                        <Image src={data.id} width="40" height="42" alt={data.name} />
                                    </div>
                                    <Form.Label style={{
                                        fontSize: "12px",
                                        fontWeight: "400",
                                        color: "black",
                                        width: "200px",
                                        padding: "20px 0px"
                                    }}>
                                        {data.name}
                                    </Form.Label>
                                    <Form.Label style={{
                                        fontSize: "12px",
                                        fontWeight: "400",
                                        color: "black",
                                        width: "200px",
                                        marginLeft: "-50px",
                                        padding: "20px 0px"
                                    }}>
                                        {data.loadType}
                                    </Form.Label>
                                    <Form.Label style={{
                                        fontSize: "12px",
                                        fontWeight: "400",
                                        color: "black",
                                        width: "200px",
                                        marginLeft: "-35px",
                                        padding: "20px 0px"
                                    }}>
                                        {data.departureCountry}
                                    </Form.Label>
                                    <Form.Label style={{
                                        fontSize: "12px",
                                        fontWeight: "400",
                                        color: "black",
                                        width: "200px",
                                        marginLeft: "-35px",
                                        padding: "20px 0px"
                                    }}>
                                        {data.destinationCountry}
                                    </Form.Label>
                                    <Form.Label style={data.status === "Cleared" ? {
                                        fontSize: "12px",
                                        fontWeight: "400",
                                        color: "green",
                                        width: "150px",
                                        marginLeft: "-38px",
                                        padding: "5px",
                                        height: "30px",
                                        background: "white",
                                        borderRadius: "6px",
                                        border: "1px solid green",
                                        marginTop: "20px",
                                        cursor: "pointer",
                                        textAlign: 'center'
                                    } : {
                                        fontSize: "12px",
                                        fontWeight: "400",
                                        width: "150px",
                                        marginLeft: "-38px",
                                        padding: "5px",
                                        height: "30px",
                                        background: "white",
                                        color: "yellow",
                                        borderRadius: "6px",
                                        border: "1px solid yellow",
                                        marginTop: "20px",
                                        cursor: "pointer",
                                        textAlign: 'center'
                                    }}>
                                        {data.status}
                                    </Form.Label>
                                    <OverlayTrigger
                                        trigger="click"
                                        placement="bottom"
                                        rootClose
                                        overlay={
                                            <Popover id={`popover-positioned-bottom`}
                                                style={{
                                                    marginTop: "-40px"
                                                }}>
                                                <Popover.Body>
                                                    <div
                                                        onClick={props.handleUploadDocument}
                                                        className={styles.hov}
                                                    >
                                                        <BiRadioCircle />
                                                        <span className="ml-2">{data.action[0]}</span>
                                                    </div>
                                                    <div
                                                        onClick={() => router.push("/clearingforwarding/orderdetails")}
                                                        className={`mt-2 ${styles.hov}`}
                                                    >
                                                        <BiRadioCircle />
                                                        <span className="ml-2">{data.action[1]}</span>
                                                    </div>
                                                    <div
                                                        onClick={props.handleUpdateStatus}
                                                        className={`mt-2 ${styles.hov}`}
                                                    >
                                                        <BiRadioCircle />
                                                        <span className="ml-2">{data.action[2]}</span>
                                                    </div>
                                                    <div
                                                    onClick={props.handleDeleteLoad}
                                                        className={`mt-2 ${styles.hov}`}
                                                    >
                                                        <BiRadioCircle />
                                                        <span className="ml-2">{data.action[3]}</span>
                                                    </div>
                                                </Popover.Body>
                                            </Popover>
                                        }>
                                        <span style={{
                                            padding: "20px 0px",
                                            marginLeft: "60px"
                                        }} ref={target}>
                                            <FaEllipsisH
                                                id="ellipsis1"
                                                type="button"
                                            />
                                        </span>
                                    </OverlayTrigger>
                                </>
                            </div>

                        )
                    })}
                </div>
            )}
        </>
    )
}