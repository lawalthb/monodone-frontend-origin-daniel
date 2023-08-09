import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { Form, OverlayTrigger, Popover } from "react-bootstrap";
import { BiRadioCircle } from "react-icons/bi";
import styles from '../customers/customerdashboard.module.css'

const data = [
    "Upload document",
    "View Order details",
    "Update status",
    "Delete Load"
]

export default function ClearingContentDetails(props) {
    const router = useRouter()
    const target = useRef(null);
    return (
        <>
            <div style={props.isClearingContent ? {
                display: "block"
            } : props.isClearingContent2 ? {
                display: "block"
            } : props.isClearingContent3 ? {
                display: "block"
            } : props.isClearingContent4 ? {
                display: "block"
            } : props.isClearingContent5 ? {
                display: "block"
            } : {
                display: "none"
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: 'space-between',
                    width: "100%",
                    marginBottom: '20px',
                    borderBottom: "1px solid #E7E7E7"
                }}>
                    <div style={{
                        width: "50%",
                        display: "flex",
                        marginLeft: "20px"
                    }}>
                        <Form.Label style={{
                            marginLeft: "7px",
                            color: "black",
                            fontWeight: 500,
                            marginTop: '3px'
                        }}>Sender&apos;s name</Form.Label>

                    </div>
                    <div style={{
                        width: "50%",
                        display: "flex"
                    }}>
                        <Form.Label style={{
                            marginLeft: "7px",
                            color: "black",
                            fontWeight: 500,
                            marginTop: '3px'
                        }}>
                            Nancy Chidinma
                        </Form.Label>
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: 'space-between',
                    width: "100%",
                    marginBottom: '20px',
                    borderBottom: "1px solid #E7E7E7"
                }}>
                    <div style={{
                        width: "50%",
                        display: "flex",
                        marginLeft: "20px"
                    }}>
                        <Form.Label style={{
                            marginLeft: "7px",
                            color: "black",
                            fontWeight: 500,
                            marginTop: '3px'
                        }}>Departure coutry</Form.Label>

                    </div>
                    <div style={{
                        width: "50%",
                        display: "flex"
                    }}>
                        <Form.Label style={{
                            marginLeft: "7px",
                            color: "black",
                            fontWeight: 500,
                            marginTop: '3px'
                        }}>
                            USA
                        </Form.Label>
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: 'space-between',
                    width: "100%",
                    marginBottom: '20px',
                    borderBottom: "1px solid #E7E7E7"
                }}>
                    <div style={{
                        width: "50%",
                        display: "flex",
                        marginLeft: "20px"
                    }}>
                        <Form.Label style={{
                            marginLeft: "7px",
                            color: "black",
                            fontWeight: 500,
                            marginTop: '3px'
                        }}>Destination coutry</Form.Label>

                    </div>
                    <div style={{
                        width: "50%",
                        display: "flex"
                    }}>
                        <Form.Label style={{
                            marginLeft: "7px",
                            color: "black",
                            fontWeight: 500,
                            marginTop: '3px'
                        }}>
                            Nigeria
                        </Form.Label>
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: 'space-between',
                    width: "100%",
                    marginBottom: '20px',
                    borderBottom: "1px solid #E7E7E7"
                }}>
                    <div style={{
                        width: "50%",
                        display: "flex",
                        marginLeft: "20px"
                    }}>
                        <Form.Label style={{
                            marginLeft: "7px",
                            color: "black",
                            fontWeight: 500,
                            marginTop: '3px'
                        }}>Status</Form.Label>

                    </div>
                    <div style={{
                        width: "50%",
                        display: "flex"
                    }}>
                        <Form.Label style={{
                            marginLeft: "7px",
                            color: "#FFC700",
                            fontWeight: 600,
                            marginTop: '3px'
                        }}>
                            Clearin in Progress
                        </Form.Label>
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: 'space-between',
                    width: "100%",
                    marginBottom: '20px',
                    borderBottom: "1px solid #E7E7E7"
                }}>
                    <div style={{
                        width: "50%",
                        display: "flex",
                        marginLeft: "20px"
                    }}>
                        <Form.Label style={{
                            marginLeft: "7px",
                            color: "black",
                            fontWeight: 500,
                            marginTop: '3px'
                        }}>Actions</Form.Label>

                    </div>
                    <div style={{
                        width: "50%",
                        display: "flex"
                    }}>
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
                                            <span className="ml-2">{data[0]}</span>
                                        </div>
                                        <div
                                            onClick={() => router.push("/clearingforwarding/orderdetails")}
                                            className={`mt-2 ${styles.hov}`}
                                        >
                                            <BiRadioCircle />
                                            <span className="ml-2">{data[1]}</span>
                                        </div>
                                        <div
                                            onClick={props.handleUpdateStatus}
                                            className={`mt-2 ${styles.hov}`}
                                        >
                                            <BiRadioCircle />
                                            <span className="ml-2">{data[2]}</span>
                                        </div>
                                        <div
                                            onClick={props.handleDeleteLoad}
                                            className={`mt-2 ${styles.hov}`}
                                        >
                                            <BiRadioCircle />
                                            <span className="ml-2">{data[3]}</span>
                                        </div>
                                    </Popover.Body>
                                </Popover>
                            }>
                            <span ref={target}>
                                <Image
                                    style={{
                                        marginLeft: '7px'
                                    }}
                                    src="/img/ellipses.png"
                                    width="20"
                                    height="5"
                                    alt="arrow"
                                />
                                {/* <FaEllipsisH
                                                id="ellipsis1"
                                                type="button"
                                            /> */}
                            </span>
                        </OverlayTrigger>

                    </div>
                </div>
            </div>
        </>
    )
}