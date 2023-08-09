import { useState } from "react";
import { useRouter } from 'next/router'
import Image from "next/image";
import Link from "next/link";
import { Col, Form, Row } from "react-bootstrap";
import styles from './customerdashboard.module.css'

export default function BulkOption(props) {
    const router = useRouter()
    const [amount, setAmount] = useState("");
    const [total, setTotal] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedFile2, setSelectedFile2] = useState(null);
    const [selectedFile3, setSelectedFile3] = useState(null);
    const [date, setDate] = useState("");
    const [isEstimate, setIsEstimate] = useState(false)
    const [isNext, setIsNext] = useState(false)
    const [isFragile, setIsFragile] = useState(true)
    const [isInsurance, setIsInsurance] = useState(false)
    const [description, setDescription] = useState("")
    const [vehicle, setVehicle] = useState("")
    // console.log(description)
    // console.log(vehicle)
    // console.log(selectedFile)
    // console.log(selectedFile2)
    // console.log(selectedFile3)
    // console.log(props.chosenDate)
    // console.log(amount)
    // console.log(total)

    const calculateTotal = () => {
        setTotal(parseInt(amount) + 8);
    };

    const handleIsInsurance = () => {
        setIsInsurance((prevState) => !prevState)
        setIsEstimate((prevState) => !prevState)
        if (!isInsurance) {
            setAmount("")
            setTotal("")
        }
    }
    const handleIsFragile = () => {
        setIsFragile((prevState) => !prevState)
    }

    const onFileChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                setSelectedFile(e.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    const onFileChange2 = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                setSelectedFile2(e.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    const onFileChange3 = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                setSelectedFile3(e.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    const handleNext = async () => {
        props.setLoading(true)
        if (props.loading) {
            props.setLoadingModal(true)
        } else {
            props.setLoadingModal(false)
        }
        const bulkOptionData = {
            description: description,
            vehicle: vehicle,
            selectedFile1: selectedFile,
            selectedFile2: selectedFile2,
            selectedFile3: selectedFile3,
            chosenDate: props.chosenDate,
            amount: amount,
            insurance: 8,
            total: total
        }
        const parcelData = props.parcelData
        const packageData = props.packageData

        // props.setBulkOptionData(bulkOptionData)
        const enteredData = {
            parcelData: parcelData,
            packageData: packageData,
            bulkOptionData: bulkOptionData,
            deliverTo: props.deliverTo,
            deliverFrom: props.deliverFrom
        }

        props.setCustomerData((prevState) => [...prevState, enteredData])

        // const response = await fetch('/api/customer/new-customer-data', {
        //     method: "POST",
        //     body: JSON.stringify(enteredData),
        //     headers: { "Content-Type": "application/json" },
        // })
        // const data = await response.json()
        props.setLoading(false)
        router.push("/customers")
        props.setParcelItem(false)
    }

    return (
        <div className="p-3">
            <div className="row mt-1 mb-4">
                <div className="tab-content" id="myTabContent">
                    <div
                        className="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                    >
                        <div className="form-group mt-1">
                            <label
                                style={{
                                    fontSize: "12px",
                                    color: "#262626",
                                }}
                                htmlFor="sender"
                            >
                                Description
                            </label>
                            <textarea
                                type="text"
                                className="form-control"
                                row="50"
                                id="sender"
                                name="description"
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                            ></textarea>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                    >
                        <div className="form-group mt-1">
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "9px" }}>
                                <label
                                    style={{
                                        fontSize: "12px",
                                        color: "#262626",
                                        marginTop: "15px",
                                    }}
                                    htmlFor="sender"
                                >
                                    Vehicle
                                </label>
                                <label
                                    style={{
                                        fontSize: "12px",
                                        color: "#262626",
                                        marginTop: "15px",
                                        marginLeft: "auto"
                                    }}
                                    htmlFor="sender"
                                >
                                    Schedule
                                </label>
                            </div>
                            <div
                                className="delivery-price"
                                style={{ display: "flex" }}
                            >
                                <ul style={{ marginRight: "auto", marginLeft: "-30px" }}>
                                    <li style={{ color: "#808080", fontSize: "16px" }}>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Vehicle"
                                            id="house_no"
                                            name="vehicle"
                                            value={vehicle}
                                            onChange={(event) => setVehicle(event.target.value)}
                                        />
                                    </li>
                                </ul>
                                <ul>
                                    <button
                                        style={{
                                            border: "none",
                                            padding: "8px",
                                            borderRadius: "5px",
                                            color: "#00902F",
                                            fontSize: "12px",
                                        }}
                                        onClick={() => props.handleDate()}
                                    >
                                        {props.chosenDate ? props.chosenDate : "Schedule date and time"}
                                    </button>
                                </ul>
                            </div>
                        </div>
                        <div className="form-group mt-1">
                            <label
                                style={{
                                    fontSize: "12px",
                                    color: "#262626",
                                    marginTop: "15px",
                                }}
                                htmlFor="sender"
                            >
                                Photos
                            </label>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                padding: "7px",
                                background: "#E0F1CB",
                                marginTop: "20px",
                                fontSize: "10px",
                                marginLeft: "5px",
                                width: "100%",
                            }}
                            className="bar success pl-4 office_instruction"
                        >
                            <i className="ico ml-3 mr-3">&#10004;</i>
                            Take 3 photos of the cargo and attach them
                        </div>
                        <div style={{ marginTop: "20px" }}>
                            <Row
                                style={{
                                    display: "flex",
                                    alignContent: "center",
                                    justifyContent: "space-around",
                                }}
                            >
                                <Col
                                    style={{
                                        width: "190px",
                                        height: "190px",
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
                                    {selectedFile ? (
                                        <Image
                                            id="target"
                                            src={selectedFile}
                                            width="180"
                                            height="180"
                                            alt="image1"
                                        />
                                    ) : (
                                        <>
                                            <Image
                                                src="/img/upload.png"
                                                alt="upload"
                                                width="50"
                                                height="50"
                                            />
                                            <input
                                                type="file"
                                                onChange={onFileChange}
                                                style={{
                                                    fontSize: "12px",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    marginLeft: "auto",
                                                    marginTop: "20px",
                                                }}
                                            />
                                        </>
                                    )}
                                </Col>
                                <Col
                                    style={{
                                        width: "190px",
                                        height: "190px",
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
                                    {selectedFile2 ? (
                                        <Image
                                            id="target"
                                            src={selectedFile2}
                                            width="180"
                                            height="180"
                                            alt="image2"
                                        />
                                    ) : (
                                        <>
                                            <Image
                                                src="/img/upload.png"
                                                alt="upload"
                                                width="50"
                                                height="50"
                                            />
                                            <input
                                                type="file"
                                                onChange={onFileChange2}
                                                style={{
                                                    fontSize: "12px",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    marginLeft: "auto",
                                                    marginTop: "20px",
                                                }}
                                            />
                                        </>
                                    )}
                                </Col>
                                <Col
                                    style={{
                                        width: "190px",
                                        height: "190px",
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
                                    {selectedFile3 ? (
                                        <Image
                                            id="target"
                                            src={selectedFile3}
                                            width="180"
                                            height="180"
                                            alt="image3"
                                        />
                                    ) : (
                                        <>
                                            <Image
                                                src="/img/upload.png"
                                                alt="upload"
                                                width="50"
                                                height="50"
                                            />
                                            <input
                                                type="file"
                                                onChange={onFileChange3}
                                                style={{
                                                    fontSize: "12px",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    marginLeft: "auto",
                                                    marginTop: "20px",
                                                }}
                                            />
                                        </>
                                    )}
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div
                            style={{
                                display: "flex",
                                marginTop: "20px",
                                marginRight: "30px",
                            }}
                            className="form-group"
                        >
                            <label
                                style={{
                                    fontSize: "12px",
                                    color: "#151515",
                                    marginRight: "30px",
                                    marginTop: "3px",
                                }}
                                htmlFor="sender"
                            >
                                Insurance
                            </label>
                            <Form.Check type="switch" id="custom-switch" onChange={handleIsInsurance}
                                style={{ marginLeft: '30px' }} />
                        </div>
                        <div
                            style={{ display: "flex", marginTop: "20px" }}
                            className="form-group"
                        >
                            <label
                                style={{
                                    fontSize: "12px",
                                    color: "#151515",
                                    marginRight: "30px",
                                    marginTop: "3px",
                                }}
                                htmlFor="sender"
                            >
                                Fragile product
                            </label>
                            <Form.Check type="switch" id="custom-switch" checked={isFragile}
                                onChange={handleIsFragile}
                                style={{ marginLeft: '30px' }} />
                        </div>
                    </div>
                </div>
            </div>
            {isEstimate && (
                <div>
                    <label htmlFor=""></label>
                    <input
                        style={{
                            marginTop: "-50px", padding: "20px", width: "150px",
                            border: "1px solid #808080", borderRadius: "5px"
                        }}
                        type="text"
                        placeholder="Estimated value, 200"
                        id="house_no"
                        name="house_no"
                        value={amount}
                        onChange={(event) => setAmount(event.target.value)}
                    />
                </div>

            )}
            <div
                className={
                    (total && isEstimate) ? `${styles.packageCostDisplay}` : `${styles.packageCost}`
                }
            >
                <div
                    className="delivery-price"
                    style={{ display: "flex", marginTop: "20px" }}
                >
                    <ul style={{ marginRight: "auto", marginLeft: "-30px" }}>
                        <li style={{
                            color: "#808080", fontSize: "16px",
                            fontFamily: 'Poppins',
                            fontStyle: "normal",
                            fontWeight: "400",
                            color: "#808080"
                        }}>
                            Delivery Price:
                        </li>
                        <li
                            style={{
                                color: "#808080",
                                fontSize: "16px",
                                fontFamily: 'Poppins',
                                fontStyle: "normal",
                                fontWeight: "400",
                                color: "#808080"
                            }}
                        >
                            Insurance:
                        </li>
                        <li style={{
                            marginTop: "-3px", fontFamily: 'Poppins',
                            fontStyle: "normal",
                            fontWeight: "400"
                        }}>Total Delivery Price:</li>
                    </ul>
                    <ul>
                        <li style={{ textAlign: "right" }}>
                            <input
                                value={`# ${amount}.00`}
                                disabled
                                style={{
                                    background: "transparent",
                                    padding: "5px",
                                    textAlign: "right",
                                    border: "none",
                                    color: "#151515",
                                    fontFamily: 'Poppins',
                                    fontStyle: "normal",
                                    fontWeight: "400"
                                }}
                            />
                        </li>
                        <li style={{ textAlign: "right", marginTop: "-20px" }}>
                            <input
                                value={"#" + " " + 8 + ".00"}
                                disabled
                                style={{
                                    background: "transparent",
                                    padding: "5px",
                                    textAlign: "right",
                                    border: "none",
                                    color: "#151515",
                                    fontFamily: 'Poppins',
                                    fontStyle: "normal",
                                    fontWeight: "400"
                                }}
                            />
                        </li>
                        <li style={{ textAlign: "right", marginTop: "-17px" }}>
                            <input
                                value={`# ${total}.00`}
                                disabled
                                style={{
                                    background: "transparent",
                                    padding: "5px",
                                    textAlign: "right",
                                    border: "none",
                                    color: "#151515",
                                    fontFamily: 'Poppins',
                                    fontStyle: "normal",
                                    fontWeight: "400"
                                }}
                            />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-5 row justify-content-between">
                <button
                    disabled={!isEstimate || Math.sign(amount) !== 1}
                    onClick={calculateTotal}
                    className="btn col-lg-5 col-sm-12 btn_package"
                    style={{
                        background: "#FFFFFF",
                        borderColor: "#7CC427",
                        width: "343px",
                        height: "40px",
                        color: "#151515",
                    }}
                >
                    Calculate cost
                </button>
                <button
                    disabled={!props.chosenDate}
                    onClick={handleNext}
                    style={props.chosenDate ? { background: "#00902F", color: "black", width: "343px", height: "40px" } :
                        { background: "#A6A6A6", color: "black", width: "343px", height: "40px" }
                    }
                    className="btn col-lg-5 col-sm-12"
                >
                    <Form.Label style={{ color: "white" }}>Next</Form.Label>
                </button>
            </div>
        </div>
    )
}