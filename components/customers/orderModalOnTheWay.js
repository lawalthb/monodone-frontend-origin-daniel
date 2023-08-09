import { Button, Form } from "react-bootstrap";
import styles from './customerdashboard.module.css'
import GeneralModal from "./modal";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import StarRateIcon from "@mui/icons-material/StarRate";
import PhoneIcon from "@mui/icons-material/Phone";
import Image from "next/image";

export default function OrderModalOnTheWay(props) {
    return (
        <GeneralModal
            size="lg"
            show={props.onTheWay}
            onHide={() => props.setOnTheWay(false)}
        >
            <Form className={styles.modal} style={{ padding: "50px"}}>
                <Form.Group className="mb-3">
                    <Form.Label style={{ fontWeight: "bold" }}>
                        #90 77676777676
                    </Form.Label>
                    <Form.Label style={{ float: "right" }}>
                        <Button
                        onClick={props.handleIssued}
                            style={{
                                background: "white",
                                color: "#FDB600",
                                borderRadius: "6px",
                                border: "1px solid #FDB600",
                                fontSize: "12px",
                            }}
                        >
                            In progress
                        </Button>
                    </Form.Label>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label style={{ fontSize: "12px" }}>
                        <TripOriginIcon style={{ fontSize: "12px", color: "#7CC427" }} />{" "}
                        On The Way
                    </Form.Label>
                </Form.Group>

                <Form.Group className="mt-2">
                    <Form.Label style={{ fontSize: "13px", fontWeight: "bold" }}>
                        GENERAL INFORMATION
                    </Form.Label>
                </Form.Group>
                <Form.Group className="mt-2">
                    <Form.Label style={{ fontSize: "13px", fontWeight: "bold" }}>
                        Delivery Information
                    </Form.Label>
                </Form.Group>
                <Form.Group
                    style={{ background: "#F9F9F9", padding: "9px" }}
                    className="mt-2"
                >
                    <Form.Label style={{ fontSize: "13px" }}>
                        <ul style={{ marginLeft: "-30px" }}>
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>
                                From:
                            </li>
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>
                                To:
                            </li>
                        </ul>
                    </Form.Label>
                    <Form.Label style={{ fontSize: "13px", float: "right" }}>
                        <ul>
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>
                                21 Alex Ekwueme Way, 900108 Abuja
                            </li>
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>
                                34 Lagos Street, Kaduna
                            </li>
                        </ul>
                    </Form.Label>
                </Form.Group>
                <Form.Group className="mt-2">
                    <Form.Label style={{ fontSize: "13px", fontWeight: "bold" }}>
                        Options of Parcel
                    </Form.Label>
                    <Form.Label
                        style={{ fontSize: "13px", color: "green", float: "right" }}
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
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>
                                Description:
                            </li>
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>
                                Weight, kg
                            </li>
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>
                                size, cm:
                            </li>
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>
                                Estimated Value:
                            </li>
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>Other:</li>
                        </ul>
                    </Form.Label>
                    <Form.Label style={{ fontSize: "13px", float: "right" }}>
                        <ul>
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>
                                Leggo Technic Tractor John
                            </li>
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>10</li>
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>
                                22 x 224 x 10
                            </li>
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>200.00</li>
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>
                                Fragile Product
                            </li>
                        </ul>
                    </Form.Label>
                </Form.Group>
                <Form.Group className="mt-2">
                    <Form.Label style={{ fontSize: "13px", fontWeight: "bold" }}>
                        Receiver
                    </Form.Label>
                    <Form.Label
                        style={{ fontSize: "13px", color: "green", float: "right" }}
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
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>
                                First Name:
                            </li>
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>
                                Last name:
                            </li>
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>
                                Phone Number
                            </li>
                        </ul>
                    </Form.Label>
                    <Form.Label style={{ fontSize: "13px", float: "right" }}>
                        <ul>
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>Name</li>
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>
                                Surname
                            </li>
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>
                                08093993772682
                            </li>
                        </ul>
                    </Form.Label>
                </Form.Group>
                <Form.Group className="mt-2">
                    <Form.Label style={{ fontSize: "13px", fontWeight: "bold" }}>
                        Data Information
                    </Form.Label>
                    <Form.Label
                        style={{ fontSize: "13px", color: "green", float: "right" }}
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
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>Date:</li>
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>
                                Expected To arrive:
                            </li>
                        </ul>
                    </Form.Label>
                    <Form.Label style={{ fontSize: "13px", float: "right" }}>
                        <ul>
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>
                                12, July 2022
                            </li>
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>
                                12, July 2022
                            </li>
                        </ul>
                    </Form.Label>
                </Form.Group>
                <Form.Group className="mt-2">
                    <Form.Label style={{ fontSize: "13px", fontWeight: "bold" }}>
                        <hr
                            style={{
                                marginTop: "1rem",
                                marginBottom: "1rem",
                                border: "0",
                                height: "2px",
                                borderTop: "1px solid rgba(0, 0, 0, 0.1)",
                            }}
                        />
                    </Form.Label>
                </Form.Group>
                <Form.Group
                    style={{ background: "#F9F9F9", padding: "9px" }}
                    className="mt-2"
                >
                    <Form.Label style={{ fontSize: "13px" }}>
                        <ul style={{ marginLeft: "-30px" }}>
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>
                                Delivery Price:
                            </li>
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>
                                Insurance:
                            </li>
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>
                                Total Delivery:
                            </li>
                        </ul>
                    </Form.Label>
                    <Form.Label style={{ fontSize: "13px", float: "right" }}>
                        <ul>
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>
                                #120.00
                            </li>
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>#80.00</li>
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>
                                #128.00
                            </li>
                        </ul>
                    </Form.Label>
                </Form.Group>
                <Form.Group className="mt-5">
                    <Form.Label style={{ fontSize: "13px", fontWeight: "Bold" }}>
                        Driver
                    </Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        <ul style={{ display: "flex", marginLeft: "-50px" }}>
                            <li>
                                <Image width={32} height={32} alt="User" src="/img/driver.png" className={styles.image} />
                            </li>
                            <ul style={{ marginTop: "6px", marginLeft: "-30px" }}>
                                <li style={{ fontSize: "10px", marginTop: "5px" }}>Stephan</li>
                                <li style={{ fontSize: "10px", marginTop: "2px" }}>
                                    <StarRateIcon
                                        style={{ color: "#FFC700", fontSize: "12px" }}
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
                            }}
                        />
                        <Image src="/img/message.png" width="32" height="29" alt="message"
                            style={{
                                background: "rgba(124, 196, 39, 0.15)",
                                marginTop: "13px",
                                padding: "7px",
                                marginLeft: "-55px"
                            }}
                        />
                    </Form.Label>
                </Form.Group>
            </Form>
        </GeneralModal>
    )
}
