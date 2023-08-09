import { useState } from "react";
import Image from "next/image";
import { Button, Form } from "react-bootstrap";
import GeneralModal from "./modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateSchedule(props) {
    const [startDate, setStartDate] = useState(new Date());
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle((prevState) => !prevState)
    }

    const times = startDate.toUTCString()
    const day = times.slice(0, 4)
    const dates = times.slice(5, 7)
    const month = times.slice(8, 11)
    const time = times.slice(17, 22)
    const dateCom = day + " " + dates + " " + month

    const handleCancelDate = () => {
        props.setDateDelivery(false)
        props.setParcelItem(true)
        props.setBulkOption(false)
    }

    const handleDone = () => {
        props.setDateDelivery(false)
        props.setParcelItem(true)
        props.setBulkOption(false)
        props.setChosenDate(dateCom + " " + "|" + " " + time)
    }

    return (
        <GeneralModal
            size="md"
            show={props.dateDelivery}
            onHide={() => props.setDateDelivery(false)}
            action={props.action}
            style={{ marginTop: "5%" }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "81px"
                }}
                className="container"
            >
                <h5
                    className="text-dark text-center"
                    style={{
                        color: "#151515", fontSize: "15px", fontWeight: "600",
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        lineHeight: "25px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "15px"
                    }}
                >
                    Schedule a delivery
                </h5>
                {toggle && (
                    <>
                        <li style={{ fontSize: "12px" }}>{dateCom}</li>
                        <li style={{ fontSize: "12px", marginBottom: "15px" }}>{time}</li>
                    </>
                )}
                {!toggle && (

                    <p style={{ marginTop: "15px", fontSize: "14px" }}>Now</p>
                )}
                <ul style={{ display: "flex", justifyContent: "space-around" }}>
                    <li
                        style={{
                            fontSize: "13px",
                            marginRight: "170px",
                            marginLeft: "-30px",
                        }}
                    >
                        <Image src="/img/date.png" alt="date" width="15" height="15"
                            style={{ marginLeft: "30px", cursor: "pointer" }} />
                        <Button style={{
                            background: "transparent",
                            color: "#151515",
                            border: 'none',
                            fontSize: "14px",
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "400",
                            marginLeft: "10px"
                        }}>Date and time</Button>
                        {/* <input
                            type="datetime-local"
                            placeholder="Date and time"
                            // onChange={(event) => props.setDate(event.target.value)}
                            // value={props.date}
                        /> */}
                    </li>
                    <li style={{ marginTop: "-5px" }}>
                        <Form.Check
                            style={{ fontSize: "20px", height: "30px" }}
                            type="switch"
                            id="custom-switch"
                            onChange={handleToggle}
                        />
                    </li>
                </ul>
                {toggle && (
                    <ul>
                        <DatePicker isCalendarOpen={true} selected={startDate} onChange=
                            {(date) => setStartDate(date)} />
                    </ul>
                )}
                <ul
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                        marginTop: "20px",
                        marginBottom: "80px"
                    }}
                >
                    <li>
                        <button
                            onClick={handleCancelDate}
                            style={{
                                padding: "5px",
                                borderRadius: "5px",
                                width: "150px",
                                borderColor: "green",
                                background: "white",
                                marginRight: "30px",
                                color: "#151515",
                                border: "1px solid #7CC427",
                                fontFamily: "Poppins",
                                fontStyle: "normal",
                                fontWeight: "600",
                                letterSpacing: "0.15em"
                            }}
                        >
                            Cancel
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={handleDone}
                            style={{
                                padding: "5px",
                                borderRadius: "5px",
                                width: "150px",
                                background: "#00902F",
                                color: "white",
                                border: "none",
                                fontFamily: "Poppins",
                                fontStyle: "normal",
                                fontWeight: "600",
                                letterSpacing: "0.15em"
                            }}
                        >
                            Done
                        </button>
                    </li>
                </ul>
            </div>
        </GeneralModal>
    )
}