import Image from "next/image";
import { Button, Col, Form, Row } from "react-bootstrap";
import StarRateIcon from "@mui/icons-material/StarRate";
import GeneralModal from "./modal";
import styles from './customerdashboard.module.css'
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function OrderModal(props) {
    return (
        <GeneralModal
            size="lg"
            show={props.orderModal}
            onHide={() => props.setOrderModal(false)}
        >
            <Form className={styles.modal} style={{ padding: "50px" }}>
                <Form.Group className="mb-3">
                    <Form.Label style={{ fontWeight: "bold", color: "#151515", fontSize: "15px" }}>
                        #90 77676777676
                    </Form.Label>
                    <Form.Label style={{ float: "right" }}>
                        <Button
                            style={{
                                background: "white",
                                color: "#FDB600",
                                borderRadius: "6px",
                                border: "1px solid #FDB600",
                                fontSize: "12px",
                            }}
                        >
                            Pending
                        </Button>
                    </Form.Label>
                </Form.Group>
                <Form.Group className="mt-5">
                    <Form.Label style={{ fontSize: "12px" }}>
                        <ul style={{ marginLeft: "-30px" }}>
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>
                                DELIVER FROM
                            </li>
                            <li style={{ fontSize: "10px" }}>
                                21 Alex Ekwueme way, Jabi 900108, Abuja
                            </li>
                        </ul>
                    </Form.Label>
                    <Form.Label style={{ fontSize: "12px", float: "right" }}>
                        <ul style={{ marginLeft: "-30px" }}>
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>
                                DELIVER TO
                            </li>
                            <li style={{ fontSize: "10px" }}>34 Lagos Street, Kaduna</li>
                        </ul>
                    </Form.Label>
                </Form.Group>

                <Form.Group className="mt-2">
                    <Form.Label style={{ fontSize: "13px", fontWeight: "bold" }}>
                        GENERAL INFORMATION
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
                {props.isBulkDelivery && (
                    <><Form.Group className="mt-2">
                        <Form.Label style={{ fontSize: "13px", fontWeight: "bold" }}>
                            Options of Parcel
                        </Form.Label>
                    </Form.Group><Form.Group style={{ padding: "9px" }} className="mt-2">
                            <div style={{ marginTop: "20px" }}>
                                <Row
                                    style={{
                                        display: "flex",
                                        alignContent: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Col
                                        style={{
                                            width: "200px",
                                            height: "200px",
                                            border: "1px solid lightgreen",
                                            borderRadius: "5px",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignContent: "center",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            marginBottom: "20px",
                                            marginRight: "20px",
                                        }}
                                        xs={12}
                                        md={4}
                                    >
                                        <Image
                                            src="/img/parcel.png"
                                            alt="upload"
                                            width={200}
                                            height={200} />
                                    </Col>
                                    <Col
                                        style={{
                                            width: "200px",
                                            height: "200px",
                                            border: "1px solid lightgreen",
                                            borderRadius: "5px",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignContent: "center",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            marginBottom: "20px",
                                            marginRight: "20px",
                                        }}
                                        xs={12}
                                        md={4}
                                    >
                                        <Image
                                            src="/img/parcel.png"
                                            alt="upload"
                                            width={200}
                                            height={200} />
                                    </Col>
                                    <Col
                                        style={{
                                            width: "200px",
                                            height: "200px",
                                            border: "1px solid lightgreen",
                                            borderRadius: "5px",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignContent: "center",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            marginBottom: "20px",
                                        }}
                                        xs={12}
                                        md={4}
                                    >
                                        <Image
                                            src="/img/parcel.png"
                                            alt="upload"
                                            width={200}
                                            height={200} />
                                    </Col>
                                </Row>
                            </div>
                        </Form.Group><Form.Group className="mt-2">
                            <Form.Label style={{ fontSize: "13px", fontWeight: "bold" }}>
                                Receiver
                            </Form.Label>
                            <Form.Label
                                style={{ fontSize: "13px", color: "green", float: "right" }}
                            >
                                Edit
                            </Form.Label>
                        </Form.Group><Form.Group
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
                        </Form.Group></>
                )}
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
                            {props.isBulkDelivery && (
                                <li style={{ marginBottom: "10px", fontSize: "10px" }}>
                                    Prepaid:
                                </li>
                            )}
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>
                                Total Delivery Price:
                            </li>
                            {props.isBulkDelivery && (
                                <li style={{ marginBottom: "10px", fontSize: "10px" }}>
                                    To be paid:
                                </li>
                            )}
                        </ul>
                    </Form.Label>
                    <Form.Label style={{ fontSize: "13px", float: "right" }}>
                        <ul>
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>
                                #120.00
                            </li>
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>#8.00</li>
                            {props.isBulkDelivery && (
                                <li
                                    style={{ marginBottom: "10px", fontSize: "10px", color: "red" }}
                                >
                                    # -36.00
                                </li>
                            )}
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>
                                #128.00
                            </li>
                            {props.isBulkDelivery && (
                                <li style={{ marginBottom: "10px", fontSize: "10px" }}>#92.00</li>
                            )}
                        </ul>
                    </Form.Label>
                </Form.Group>
                {props.isBulkDelivery && (
                    <>
                        <Form.Group className="mt-5">
                            <Form.Label style={{ fontSize: "13px", fontWeight: "Bold" }}>
                                Driver
                            </Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                <ul
                                    style={{ display: "flex", marginLeft: "-50px" }}
                                >
                                    <li>
                                        <Image width={32} height={32} alt="User" src="/img/user.png" className={styles.image} />
                                    </li>
                                    <ul style={{ marginLeft: "-30px" }}>
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
                            <Form.Label
                                style={{
                                    fontSize: "12px",
                                    color: "black",
                                    float: "right",
                                    marginTop: "8px",
                                }}
                            >
                                <span
                                    style={{
                                        background:
                                            "linear-gradient(90deg, #00902F 0%, #7CC427 99.69%)",
                                        color: "white",
                                        padding: "7px",
                                        borderRadius: "5px",
                                    }}
                                >
                                    + #36
                                </span>{" "}
                                # 163.00
                            </Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                <ul
                                    style={{ display: "flex", marginLeft: "-50px" }}
                                >
                                    <li>
                                        <Image width={32} height={32} alt="User" src="/img/user.png" className={styles.image} />
                                    </li>
                                    <ul style={{ marginLeft: "-30px" }}>
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
                            <Form.Label
                                style={{
                                    fontSize: "12px",
                                    color: "black",
                                    float: "right",
                                    marginTop: "8px",
                                }}
                            >
                                <span
                                    style={{
                                        background:
                                            "linear-gradient(90deg, #00902F 0%, #7CC427 99.69%)",
                                        color: "white",
                                        padding: "7px",
                                        borderRadius: "5px",
                                    }}
                                >
                                    + #36
                                </span>{" "}
                                # 163.00
                            </Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                <ul
                                    style={{ display: "flex", marginLeft: "-50px" }}
                                >
                                    <li>
                                        <Image width={32} height={32} alt="User" src="/img/user.png" className={styles.image} />
                                    </li>
                                    <ul style={{ marginLeft: "-30px" }}>
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
                            <Form.Label
                                style={{
                                    fontSize: "12px",
                                    color: "black",
                                    float: "right",
                                    marginTop: "8px",
                                }}
                            >
                                <span
                                    style={{
                                        background: "#FFC700",
                                        color: "white",
                                        padding: "7px",
                                        borderRadius: "5px",
                                    }}
                                >
                                    + #36
                                </span>{" "}
                                # 163.00
                            </Form.Label>
                        </Form.Group>

                    </>
                )}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        padding: "10px 7px",
                        background: "rgba(124, 196, 39, 0.15)",
                        marginTop: "20px",
                        fontSize: "10px",
                        marginLeft: "5px",
                        width: "100%",
                    }}
                    className="bar success pl-4 price_checking"
                >
                    <i className="ico ml-3 mr-3">
                        <ErrorOutlineIcon style={{ color: "green" }} />
                    </i>
                    After checking, the price size may change
                </div>
                <Form.Group className="mt-5" style={{ marginLeft: "-70px" }}>
                    <Form.Label
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Button
                            onClick={props.showSearchingForDriver}
                            style={{
                                marginRight: "10px",
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                background: "white",
                                color: "white",
                                border: "none",
                                fontSize: "9px",
                                background: "#00902F",
                                width: "40%",
                            }}
                        >
                            PAY #128.00
                        </Button>
                        <Button
                            onClick={props.handleCancelModal}
                            style={{
                                marginRight: "10px",
                                background: "white",
                                color: "#00902F",
                                border: "none",
                                fontSize: "9px",
                            }}
                        >
                            Cancel Order
                        </Button>
                    </Form.Label>
                </Form.Group>
            </Form>
        </GeneralModal>
    )
}