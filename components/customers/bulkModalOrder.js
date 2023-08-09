import { Button, Col, Form, Row } from "react-bootstrap";
import GeneralModal from "./modal";
import Image from "next/image";
import styles from './customerdashboard.module.css'
import StarRateIcon from "@mui/icons-material/StarRate";
import PhoneIcon from "@mui/icons-material/Phone";

export default function BulkModalOrder(props) {
    return (
        <GeneralModal
            size="lg"
            show={props.bulkModalOrder}
            onHide={() => props.setBulkModalOrder(false)}
        >
            <Form className={styles.modal} style={{ padding: "50px" }}>
                <Form.Group className="mb-3">
                    <Form.Label style={{ fontWeight: "bold" }}>
                        #90 77676777676
                    </Form.Label>
                    <Form.Label style={{ float: "right" }}
                        onClick={props.bulkFinalState && props.handleCompleteBulkOrder}>
                        <Button
                            style={{
                                background: "white",
                                color: "#FDB600",
                                borderRadius: "6px",
                                border: "1px solid #FDB600",
                                fontSize: "12px",
                            }}
                        >
                            {props.bulkFinalState ? "In Progress" :
                                "Pending"
                            }
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
                <Form.Group className="mt-2">
                    <Form.Label style={{ fontSize: "13px", fontWeight: "bold" }}>
                        Options of Parcel
                    </Form.Label>
                </Form.Group>
                <Form.Group style={{ padding: "9px" }} className="mt-2">
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
                                    height={200}
                                />
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
                                    height={200}
                                />
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
                                    height={200}
                                />
                            </Col>
                        </Row>
                    </div>
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
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>Date Pick up:</li>
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
                    className=""
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
                                Total Delivery Price:
                            </li>
                        </ul>
                    </Form.Label>
                    <Form.Label style={{ fontSize: "13px", float: "right" }}>
                        <ul>
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>
                                #120.00
                            </li>
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>#8.00</li>
                            <li style={{ marginBottom: "10px", fontSize: "10px" }}>
                                #128.00
                            </li>
                        </ul>
                    </Form.Label>
                </Form.Group>
                {props.increaseOffer && (
                    <Form.Group
                        style={{ background: "#F9F9F9", padding: "9px" }}
                        className="mt-2"
                    >
                        <Form.Label style={{ fontSize: "13px" }}>
                            <ul style={{ marginLeft: "-30px" }}>
                                <li style={{ marginBottom: "10px", fontSize: "10px" }}>
                                    Partial Payment:
                                </li>
                            </ul>
                        </Form.Label>
                        <Form.Label style={{ fontSize: "13px", float: "right" }}>
                            <ul>
                                <li style={{ marginBottom: "10px", fontSize: "10px" }}>
                                    #36.00
                                </li>
                            </ul>
                        </Form.Label>
                    </Form.Group>
                )}
                {props.prepared && (
                    <Form.Group
                        style={{ background: "#F9F9F9", padding: "9px" }}
                        className="mt-2"
                    >
                        <Form.Label style={{ fontSize: "13px" }}>
                            <ul style={{ marginLeft: "-30px" }}>
                                <li style={{ marginBottom: "10px", fontSize: "10px" }}>
                                    Prepared
                                </li>
                                <li style={{ marginBottom: "10px", fontSize: "10px" }}>
                                    To be paid (?)
                                </li>
                            </ul>
                        </Form.Label>
                        <Form.Label style={{ fontSize: "13px", float: "right" }}>
                            <ul>
                                <li style={{ marginBottom: "10px", fontSize: "10px", color: "red" }}>
                                    # -36.00
                                </li>
                                <li style={{ marginBottom: "10px", fontSize: "10px" }}>
                                    # 92.00
                                </li>
                            </ul>
                        </Form.Label>
                    </Form.Group>
                )}
                {props.completeBulkOrder ? (
                    <Form.Group>
                        <Image style={{
                            display: "flex",
                            justifyContent: 'center', alignItems: "center", margin: '30px auto'
                        }} src="/img/bulk.png" alt="bulk" width="480" height="518" />
                        <Form.Group className="mt-5">
                            <Form.Label style={{ fontSize: "13px", fontWeight: "Bold" }}>
                                Driver
                            </Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                <ul style={{ display: "flex", marginLeft: "-50px" }}>
                                    <li>
                                        <Image alt="User" width={32} height={32} src="/img/driver.png" className={styles.image} />
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
                    </Form.Group>
                ) : (
                    <>
                        <Form.Group
                            className="mt-4"
                            style={props.listDrivers ? { display: "none" } : { background: "#F9F9F9", padding: "9px" }}
                        >
                            <Form.Label style={{ fontSize: "13px" }}>
                                <ul style={{ marginLeft: "-30px" }}>
                                    <li style={{ marginRight: '30px', fontweight: "600" }}>
                                        <Form.Label>Partial Payment (30%)</Form.Label>
                                    </li>
                                </ul>
                            </Form.Label>
                            <Form.Label style={{ fontSize: "13px", float: "right" }}>
                                <ul>
                                    <li>
                                        <Form.Check type="switch" id="custom-switch" />
                                    </li>
                                </ul>
                            </Form.Label>
                            <div></div>
                            <div></div>
                        </Form.Group>
                        {props.listDrivers && (
                            <>
                                <Form.Group className="mt-5">
                                    <Form.Label style={{ fontSize: "13px", fontWeight: "Bold" }}>
                                        Drivers bid
                                    </Form.Label>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>
                                        <ul
                                            style={{ display: "flex", marginLeft: "-50px" }}
                                        >
                                            <li>
                                                <Image alt="User" width={32} height={32} src="/img/driver3.png" className={styles.image} />
                                            </li>
                                            <ul style={{ marginLeft: "-30px" }}>
                                                <li style={{ fontSize: "10px", marginTop: "5px" }}>Kalush</li>
                                                <li style={{ fontSize: "10px", marginTop: "2px" }}>
                                                    <StarRateIcon
                                                        style={{ color: "#FFC700", fontSize: "12px" }} />
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
                                                background: "linear-gradient(90deg, #00902F 0%, #7CC427 99.69%)",
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
                                                <Image alt="User" width={32} height={32} src="/img/driver2.png" className={styles.image} />
                                            </li>
                                            <ul style={{ marginLeft: "-30px" }}>
                                                <li style={{ fontSize: "10px", marginTop: "5px" }}>Kalush</li>
                                                <li style={{ fontSize: "10px", marginTop: "2px" }}>
                                                    <StarRateIcon
                                                        style={{ color: "#FFC700", fontSize: "12px" }} />
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
                                                background: "linear-gradient(90deg, #00902F 0%, #7CC427 99.69%)",
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
                                <Form.Group style={props.bulkFinalState ? { display: "flex", justifyContent: "space-between" } : ""}>
                                    <Form.Label>
                                        <ul
                                            style={{ display: "flex", marginLeft: "-50px" }}
                                        >
                                            <li>
                                                <Image alt="User" width={32} height={32} src="/img/driver.png" className={styles.image} />
                                            </li>
                                            <ul style={{ marginLeft: "-30px" }}>
                                                <li style={{ fontSize: "10px", marginTop: "5px" }}>Kalush</li>
                                                <li style={{ fontSize: "10px", marginTop: "2px" }}>
                                                    <StarRateIcon
                                                        style={{ color: "#FFC700", fontSize: "12px" }} />
                                                    4.6
                                                </li>
                                            </ul>
                                        </ul>
                                    </Form.Label>
                                    {props.bulkFinalState && (
                                        <Image style={{ marginTop: "13px", marginLeft: "auto" }} src="/img/Union.png" alt="union" width="16" height="16" />
                                    )}
                                    <Form.Label
                                        style={{
                                            fontSize: "12px",
                                            color: "black",
                                            float: "right",
                                            marginTop: "8px",
                                            marginLeft: "10px"
                                        }}
                                    >
                                        <span
                                            style={props.bulkFinalState ? {
                                                background: "#FFC700",
                                                color: "white",
                                                padding: "7px",
                                                borderRadius: "5px",

                                            } : {
                                                background: "linear-gradient(90deg, #00902F 0%, #7CC427 99.69%)",
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
                        <Form.Group
                            className="mt-5"
                            style={props.listDrivers ? { display: "flex", justifyContent: "center" }
                                : { display: "flex", justifyContent: "flex-end" }}
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
                            {props.listDrivers ? "" : (
                                <Button
                                    onClick={
                                        props.increaseOffer ?
                                            props.handlePrepared : props.prepared ? props.handleListDrivers :
                                                props.handleBulkModalSearch
                                    }
                                    style={props.increaseOffer ? {
                                        marginRight: "10px",
                                        background: "white",
                                        color: "white",
                                        border: "none",
                                        fontSize: "9px",
                                        background: "#00902F",
                                        width: "40%",
                                        height: "40px",
                                        fontFamily: 'Poppins',
                                        fontStyle: "normal",
                                        fontWeight: "200",
                                        fontSize: "14px",
                                        lineHeight: "24px",
                                        textAlign: "center",
                                        letterSpacing: "0.15em",
                                        textTransform: "uppercase",
                                        color: "#FFFFFF",
                                        flex: "none",
                                        order: 1,
                                        flexGrow: 0,
                                        padding: '6px'
                                    } : props.prepared ? {
                                        marginRight: "10px",
                                        background: "white",
                                        color: "white",
                                        border: "1px solid #00902F",
                                        fontSize: "9px",
                                        background: "transparent",
                                        width: "40%",
                                        height: "40px",
                                        fontFamily: 'Poppins',
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "14px",
                                        lineHeight: "24px",
                                        textAlign: "center",
                                        letterSpacing: "0.15em",
                                        textTransform: "uppercase",
                                        color: "#151515",
                                        flex: "none",
                                        order: 1,
                                        flexGrow: 0,
                                        padding: '6px'
                                    } : props.listDrivers ? { display: "none" } : {
                                        marginRight: "10px",
                                        background: "white",
                                        color: "white",
                                        border: "none",
                                        fontSize: "9px",
                                        background: "#00902F",
                                        width: "40%",
                                        height: "40px",
                                        fontFamily: 'Poppins',
                                        fontStyle: "normal",
                                        fontWeight: "200",
                                        fontSize: "14px",
                                        lineHeight: "24px",
                                        textAlign: "center",
                                        letterSpacing: "0.15em",
                                        textTransform: "uppercase",
                                        color: "#FFFFFF",
                                        flex: "none",
                                        order: 1,
                                        flexGrow: 0,
                                        padding: '6px'
                                    }}
                                >
                                    {props.increaseOffer ? "PAY #128.00" : props.prepared ? "INCREASE OFFER" : "PAY #128.00"}
                                </Button>
                            )}
                        </Form.Group>
                    </>
                )}
            </Form>
        </GeneralModal>
    )
}