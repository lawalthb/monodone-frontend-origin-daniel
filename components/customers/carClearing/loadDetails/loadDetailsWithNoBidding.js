import Image from "next/image";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import StarRateIcon from "@mui/icons-material/StarRate";
import PhoneIcon from "@mui/icons-material/Phone";
import CircleIcon from "@mui/icons-material/Circle";
import GeneralModal from "../../modal";
import styles from '../.././customerdashboard.module.css'
import PopoverComp from "./popover";

export default function LoadDetailsWithNoBidding(props) {
    const [noBidding, setNoBidding] = useState(true)
    return (
        <GeneralModal
            size="lg"
            show={props.loadDetailsWithNoBidding}
            onHide={() => props.setLoadDetailsWithNoBidding(false)}
        >
            <Form className={styles.modal} style={{ padding: "50px" }}>
                <Form.Group className="mb-3">
                    <Form.Label style={{ fontWeight: "600", color: "#151515", fontSize: "14px" }}>
                        # 20 4002 8668 0998
                    </Form.Label>
                    <Form.Label style={{ float: "right" }}
                        onClick={props.loadDetailsWaitingForAgentNoBidding ? props.handleLoadDetailDeliveryInProgress :
                            props.loadDetailsDeliveryInProgress ? props.handleLoadDetailsDelivered: props.handleLoadDetailWaitingAgentNoBidding}>
                        {props.loadDetailsDelivered ? (
                            <Button
                                style={{
                                    background: "white",
                                    color: "#6FCF97",
                                    borderRadius: "6px",
                                    border: "1px solid #6FCF97",
                                    fontSize: "12px",
                                }}
                            >
                                Completed
                            </Button>
                        ) : (
                            <Button
                                style={{
                                    background: "white",
                                    color: "#FDB600",
                                    borderRadius: "6px",
                                    border: "1px solid #FDB600",
                                    fontSize: "12px",
                                }}
                            >
                                In Progress
                            </Button>
                        )}
                    </Form.Label>
                </Form.Group>
                {noBidding && props.loadDetailsWaitingForAgentNoBidding ? (
                    <Form.Group className="mb-3">
                        <Form.Label style={{ fontSize: "12px" }}>
                            <TripOriginIcon style={{ fontSize: "12px", color: "#FFC700" }} />{" "}
                            Waiting for agent
                        </Form.Label>
                    </Form.Group>
                ) : noBidding && props.loadDetailsDeliveryInProgress ? (
                    <Form.Group className="mb-3">
                        <Form.Label style={{ fontSize: "12px" }}>
                            <TripOriginIcon style={{ fontSize: "12px", color: "#7CC427" }} />{" "}
                            Delivery In progress
                        </Form.Label>
                    </Form.Group>
                ) : noBidding && props.loadDetailsDelivered ? (
                    <Form.Group className="mb-3">
                        <Form.Label style={{ fontSize: "12px" }}>
                            <CircleIcon style={{ fontSize: "12px", color: "#151515" }} /> Delivered
                        </Form.Label>
                    </Form.Group>
                ) : (
                    <Form.Group className="mb-3">
                        <Form.Label style={{ fontSize: "12px" }}>
                            <TripOriginIcon style={{ fontSize: "12px", color: "#FFC700" }} />{" "}
                            Searching For agent
                        </Form.Label>
                    </Form.Group>
                )}

                <Form.Group className="mb-3">
                    <Form.Label style={{ fontSize: "14px", fontWeight: "500", color: "#151515" }}>
                        GENERAL INFORMATION
                    </Form.Label>
                </Form.Group>
                <Form.Group className="mt-2">
                    <Form.Label style={{ fontSize: "13px", fontWeight: "400", color: "#151515" }}>
                        Clearing Information
                    </Form.Label>
                    <Form.Label
                        style={{ fontSize: "13px", color: "#00902F", float: "right", fontweight: "400" }}
                    >
                        Edit
                    </Form.Label>
                </Form.Group>
                <Form.Group
                    style={{ background: "#F9F9F9", padding: "9px" }}
                    className="mt-2"
                >
                    <Form.Label style={{ fontSize: "13px" }}>
                        <ul style={{ marginLeft: "-30px" }}>
                            <li style={{
                                marginBottom: "10px", fontSize: "10px",
                                color: "#495059", fontWeight: '500'
                            }}>
                                From:
                            </li>
                            <li style={{
                                marginBottom: "10px", fontSize: "10px",
                                color: "#495059", fontWeight: '500'
                            }}>
                                To:
                            </li>
                        </ul>
                    </Form.Label>
                    <Form.Label style={{ fontSize: "13px", float: "right" }}>
                        <ul>
                            <li style={{
                                marginBottom: "10px", fontSize: "10px",
                                color: "#495059", fontWeight: '500'
                            }}>
                                London, UK
                            </li>
                            <li style={{
                                marginBottom: "10px", fontSize: "10px",
                                color: "#495059", fontWeight: '500'
                            }}>
                                Lagos, Nigeria
                            </li>
                        </ul>
                    </Form.Label>
                </Form.Group>
                <Form.Group className="mt-2">
                    <Form.Label style={{ fontSize: "13px", fontWeight: "400", color: "#151515" }}>
                        Option of Parcel
                    </Form.Label>
                    <Form.Label
                        style={{ fontSize: "13px", color: "#00902F", float: "right", fontweight: "400" }}
                    >
                        Edit
                    </Form.Label>
                </Form.Group>
                <Form.Group
                    style={{ background: "#F9F9F9", padding: "9px" }}
                    className="mt-2"
                >
                    <Form.Label style={{ fontSize: "13px" }}>
                        <ul style={{ marginLeft: "-30px" }}>
                            <li style={{
                                marginBottom: "10px", fontSize: "10px",
                                color: "#495059", fontWeight: '500'
                            }}>
                                Description:
                            </li>
                            <li style={{
                                marginBottom: "10px", fontSize: "10px",
                                color: "#495059", fontWeight: '500'
                            }}>
                                Car type:
                            </li>
                            <li style={{
                                marginBottom: "10px", fontSize: "10px",
                                color: "#495059", fontWeight: '500'
                            }}>
                                Car model:
                            </li>
                            <li style={{
                                marginBottom: "10px", fontSize: "10px",
                                color: "#495059", fontWeight: '500'
                            }}>
                                Car year:
                            </li>
                            <li style={{
                                marginBottom: "10px", fontSize: "10px",
                                color: "#495059", fontWeight: '500'
                            }}>
                                Car value:
                            </li>
                            <li style={{
                                marginBottom: "10px", fontSize: "10px",
                                color: "#495059", fontWeight: '500'
                            }}>
                                Estimated cost:
                            </li>
                        </ul>
                    </Form.Label>
                    <Form.Label style={{ fontSize: "13px", float: "right" }}>
                        <ul>
                            <li style={{
                                marginBottom: "10px", fontSize: "10px",
                                color: "#495059", fontWeight: '500'
                            }}>
                                Red 2020 Gwagon
                            </li>
                            <li style={{
                                marginBottom: "10px", fontSize: "10px",
                                color: "#495059", fontWeight: '500'
                            }}>
                                Mercedez Benz
                            </li>
                            <li style={{
                                marginBottom: "10px", fontSize: "10px",
                                color: "#495059", fontWeight: '500'
                            }}>
                                Gwagon
                            </li>
                            <li style={{
                                marginBottom: "10px", fontSize: "10px",
                                color: "#495059", fontWeight: '500'
                            }}>
                                2020 Gwagon
                            </li>
                            <li style={{
                                marginBottom: "10px", fontSize: "10px",
                                color: "#495059", fontWeight: '500'
                            }}>
                                $3.4m
                            </li>
                            <li style={{
                                marginBottom: "10px", fontSize: "10px",
                                color: "#495059", fontWeight: '600'
                            }}>
                                #145,000
                            </li>
                        </ul>
                    </Form.Label>
                </Form.Group>
                <Form.Group className="mt-2">
                    <Form.Label style={{ fontSize: "13px", fontWeight: "400", color: "#151515" }}>
                        Receiver
                    </Form.Label>
                    <Form.Label
                        style={{ fontSize: "13px", color: "#00902F", float: "right", fontweight: "400" }}
                    >
                        Edit
                    </Form.Label>
                </Form.Group>
                <Form.Group
                    style={{ background: "#F9F9F9", padding: "9px" }}
                    className="mt-2"
                >
                    <Form.Label style={{ fontSize: "13px" }}>
                        <ul style={{ marginLeft: "-30px" }}>
                            <li style={{
                                marginBottom: "10px", fontSize: "10px",
                                color: "#495059", fontWeight: '500'
                            }}>
                                First name:
                            </li>
                            <li style={{
                                marginBottom: "10px", fontSize: "10px",
                                color: "#495059", fontWeight: '500'
                            }}>
                                Last name:
                            </li>
                            <li style={{
                                marginBottom: "10px", fontSize: "10px",
                                color: "#495059", fontWeight: '500'
                            }}>
                                Phone number:
                            </li>
                        </ul>
                    </Form.Label>
                    <Form.Label style={{ fontSize: "13px", float: "right" }}>
                        <ul>
                            <li style={{
                                marginBottom: "10px", fontSize: "10px",
                                color: "#495059", fontWeight: '500'
                            }}>
                                name
                            </li>
                            <li style={{
                                marginBottom: "10px", fontSize: "10px",
                                color: "#495059", fontWeight: '500'
                            }}>
                                surname
                            </li>
                            <li style={{
                                marginBottom: "10px", fontSize: "10px",
                                color: "#495059", fontWeight: '500'
                            }}>
                                +234 890020 828829
                            </li>
                        </ul>
                    </Form.Label>
                </Form.Group>
                <Form.Group className="mt-2">
                    <Form.Label style={{ fontSize: "13px", fontWeight: "400", color: "#151515" }}>
                        Data Information
                    </Form.Label>
                </Form.Group>
                <Form.Group
                    style={{ background: "#F9F9F9", padding: "9px" }}
                    className="mt-2"
                >
                    <Form.Label style={{ fontSize: "13px" }}>
                        <ul style={{ marginLeft: "-30px" }}>
                            <li style={{
                                marginBottom: "10px", fontSize: "10px",
                                color: "#495059", fontWeight: '500'
                            }}>
                                Date:
                            </li>
                            <li style={{
                                marginBottom: "10px", fontSize: "10px",
                                color: "#495059", fontWeight: '500'
                            }}>
                                Expected to arrive:
                            </li>
                        </ul>
                    </Form.Label>
                    <Form.Label style={{ fontSize: "13px", float: "right" }}>
                        <ul>
                            <li style={{
                                marginBottom: "10px", fontSize: "10px",
                                color: "#495059", fontWeight: '500'
                            }}>
                                19 July 2022
                            </li>
                            <li style={{
                                marginBottom: "10px", fontSize: "10px",
                                color: "#495059", fontWeight: '500'
                            }}>
                                22 July 2022
                            </li>
                        </ul>
                    </Form.Label>
                </Form.Group>
                <Form.Group className="mt-2">
                    <Form.Label style={{ fontSize: "13px", fontWeight: "400", color: "#151515" }}>
                        Live Tracking
                    </Form.Label>
                </Form.Group>
                <Form.Group style={{ display: "flex", justifyContent: "space-between", gap: "3px" }}>
                    <Image src="/img/track.png" width="630" height="140" alt="track" />
                </Form.Group>
                <Form.Group style={{ marginTop: "20px" }}>
                    <Form.Label style={{
                        fontSize: "13px", fontWeight: "400", color: "#151515",
                    }}>
                        Clearing cost
                    </Form.Label>
                    <Form.Label
                        style={{ fontSize: "13px", color: "#151515", float: "right", fontweight: "400" }}
                    >
                        #130,000
                    </Form.Label>
                </Form.Group>
                {noBidding && props.loadDetailsWaitingForAgent ? (
                    <>
                        <Form.Group style={{ marginTop: "20px" }}>
                            <Form.Label style={{ fontSize: "13px", fontWeight: "400", color: "#151515" }}>
                                Car Clearing Agent
                            </Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                <ul style={{ display: "flex", marginLeft: "-50px" }}>
                                    <li>
                                        <Image width={32} height={32} alt="User" src="/img/driver.png" className={styles.image} />
                                    </li>
                                    <ul style={{ marginTop: "6px", marginLeft: "-30px" }}>
                                        <li style={{ fontSize: "11px", marginTop: "5px" }}>Stephan</li>
                                        <li style={{ fontSize: "15px", marginTop: "2px" }}>
                                            <StarRateIcon
                                                style={{ color: "#FFC700", fontSize: "15px" }}
                                            />
                                            4.6
                                        </li>
                                    </ul>
                                </ul>
                            </Form.Label>
                        </Form.Group>
                    </>
                ) : noBidding && props.loadDetailsDeliveryInProgress ? (
                    <>
                        <Form.Group style={{ marginTop: "20px" }}>
                            <Form.Label style={{ fontSize: "13px", fontWeight: "400", color: "#151515" }}>
                                Car Clearing Agent
                            </Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                <ul style={{ display: "flex", marginLeft: "-50px" }}>
                                    <li>
                                        <Image width={32} height={32} alt="User" src="/img/driver.png" className={styles.image} />
                                    </li>
                                    <ul style={{ marginTop: "6px", marginLeft: "-30px" }}>
                                        <li style={{ fontSize: "11px", marginTop: "5px" }}>Stephan</li>
                                        <li style={{ fontSize: "15px", marginTop: "2px" }}>
                                            <StarRateIcon
                                                style={{ color: "#FFC700", fontSize: "15px" }}
                                            />
                                            4.6
                                        </li>
                                    </ul>
                                </ul>
                            </Form.Label>
                            <Form.Label style={{ fontSize: "13px", float: "right" }}>
                                <PhoneIcon
                                    style={{
                                        background: "rgba(124, 196, 39, 0.15)",
                                        color: "#00902F",
                                        padding: "5px",
                                        marginRight: "80px",
                                        marginTop: "16px",
                                        fontSize: "30px"
                                    }}
                                />
                                <Image src="/img/message.png" width="32" height="29" alt="message"
                                    style={{
                                        background: "rgba(124, 196, 39, 0.15)",
                                        marginTop: "10px",
                                        padding: "7px",
                                        marginLeft: "-55px"
                                    }}
                                />
                            </Form.Label>
                        </Form.Group>
                    </>
                ) : noBidding && props.loadDetailsDelivered ? (
                    <>
                        <Form.Group style={{ marginTop: "20px" }}>
                            <Form.Label style={{ fontSize: "13px", fontWeight: "400", color: "#151515" }}>
                                Car Clearing Agent
                            </Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <PopoverComp handleCustomerAgentProfile={props.handleCustomerAgentProfile}>
                                <Form.Label
                                    style={{ cursor: 'pointer' }}>
                                    <ul style={{ display: "flex", marginLeft: "-50px" }}>
                                        <li>
                                            <Image width={32} height={32} alt="User" src="/img/driver.png" className={styles.image} />
                                        </li>
                                        <ul style={{ marginTop: "6px", marginLeft: "-30px" }}>
                                            <li style={{ fontSize: "11px", marginTop: "5px" }}>Stephan</li>
                                            <li style={{ fontSize: "15px", marginTop: "2px" }}>
                                                <StarRateIcon
                                                    style={{ color: "#FFC700", fontSize: "15px" }}
                                                />
                                                4.6
                                            </li>
                                        </ul>
                                    </ul>
                                </Form.Label>
                            </PopoverComp>
                            <Form.Label style={{ fontSize: "13px", float: "right" }}>
                                <PhoneIcon
                                    style={{
                                        background: "rgba(124, 196, 39, 0.15)",
                                        color: "#00902F",
                                        padding: "5px",
                                        marginRight: "80px",
                                        marginTop: "16px",
                                        fontSize: "30px"
                                    }}
                                />
                                <Image
                                    onClick={props.handleMessages}
                                    src="/img/message.png" width="32" height="29" alt="message"
                                    style={{
                                        background: "rgba(124, 196, 39, 0.15)",
                                        marginTop: "10px",
                                        padding: "7px",
                                        marginLeft: "-55px",
                                        cursor: 'pointer'
                                    }}
                                />
                            </Form.Label>
                        </Form.Group>
                    </>
                ) : ""}
                <Form.Group
                    className="mt-5"
                    style={{
                        display: "flex", justifyContent: "center", alignItems: "center",
                        margin: "auto"
                    }}
                >
                    <Button
                        onClick={props.handleCancelBulkModal}
                        style={{
                            marginRight: "10px",
                            background: "white",
                            color: "#00902F",
                            border: "none",
                            fontSize: "11px",
                        }}
                    >
                        Cancel Order
                    </Button>
                </Form.Group>
            </Form>
        </GeneralModal>
    )
}