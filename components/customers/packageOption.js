import { useEffect, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CalculateIcon from "@mui/icons-material/Calculate";
import styles from './customerdashboard.module.css'

const initialState = {
    description: "",
    zip_code: "",
    city: "",
    street: "",
    house_no: "",
    amount: 0,
    total: ""
}

export default function PackageOption(props) {
    const [data, setData] = useState(initialState)
    const [isInsurance, setIsInsurance] = useState(false)
    const [isFragile, setIsFragile] = useState(false)
    console.log(isInsurance, isFragile)

    const handleIsInsurance = () => {
        setIsInsurance((prevState) => !prevState)
    }
    const handleIsFragile = () => {
        setIsFragile((prevState) => !prevState)
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setData({
            ...data, [name]: value
        })
    }
    const calculateTotal = () => {
        // setTotal(parseInt(amount) + 8);
        setData((prevState) => {
            const result = parseInt(prevState.amount) + 8
            return {
                ...prevState,
                total: result
            }

        })
    };

    const handleBulkOption = () => {
        props.setPackageData((prevState) => {
            prevState = data
            return prevState
        })
        props.setBulkOption(true)
        props.setPackageOption(false)
    }
    return (
        <div className="tab-content mt-4" id="myTabContent">
            <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
            >
                <div style={{ display: "flex" }} className="form-group">
                    <label
                        style={{
                            fontSize: "12px",
                            color: "#151515",
                            marginRight: "30px",
                            marginTop: "3px",
                        }}
                        htmlFor="sender"
                    >
                        Document (Envelop A4)
                    </label>
                    <Form.Check type="switch" id="custom-switch" />
                </div>
                <div className="form-group mt-4">
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
                        value={data?.description}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="row mt-3">
                    <div className="form-group col-lg-3">
                        <label htmlFor="address">Weight, lbs</label>
                        <input
                            style={{ border: "1px solid #DCDCDC" }}
                            type="text"
                            className="form-control"
                            id="zip_code"
                            placeholder="0.05"
                            name="zip_code"
                            value={data?.zip_code}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group col-lg-3">
                        <label htmlFor="address">Size</label>
                        <input
                            style={{ border: "1px solid #DCDCDC" }}
                            type="text"
                            className="form-control"
                            placeholder="Width, cm"
                            id="city"
                            name="city"
                            value={data?.city}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group col-lg-3">
                        <label htmlFor=""></label>
                        <input
                            style={{ border: "1px solid #DCDCDC" }}
                            type="text"
                            className="form-control"
                            placeholder="Length, cm"
                            id="street"
                            name="street"
                            value={data?.street}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group col-lg-3">
                        <label htmlFor=""></label>
                        <input
                            style={{ border: "1px solid #DCDCDC" }}
                            type="text"
                            className="form-control"
                            placeholder="Height, cm"
                            id="house_no"
                            name="house_no"
                            value={data?.house_no}
                            onChange={handleChange}
                        />
                    </div>
                </div>
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
                    width: "50%",
                }}
                className="bar success pl-4 price_checking"
            >
                <i className="ico ml-3 mr-3">
                    <ErrorOutlineIcon style={{ color: "green" }} />
                </i>
                After checking, the price size may change
            </div>
            <div
                style={{ display: "flex", marginTop: "20px" }}
                className="form-group"
            >
                <label
                    style={{
                        fontSize: "12px",
                        color: "#151515",
                        marginRight: "60px",
                        marginTop: "3px",
                    }}
                    htmlFor="sender"
                >
                    Insurance
                </label>
                <Form.Check type="switch" id="custom-switch" onClick={handleIsInsurance} />
            </div>
            <div className="form-group col-lg-3">
                <label htmlFor=""></label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Estimated value, 200"
                    id="house_no"
                    name="amount"
                    value={data?.amount}
                    onChange={handleChange}
                />
            </div>
            <div
                className={
                    `${data?.total}`
                        ? `${styles.packageCostDisplay}`
                        : `${styles.packageCost}`
                }
            >
                <div>
                    <hr
                        style={{
                            background: "gray",
                            color: "gray",
                            borderColor: "gray",
                            height: "2px",
                            width: "40%",
                            marginTop: "17px",
                        }}
                    />
                </div>
                <div
                    className="delivery-price"
                    style={{ display: "flex", marginTop: "20px" }}
                >
                    <ul
                        style={{ marginRight: "auto", marginLeft: "-30px" }}
                    >
                        <li style={{ color: "#808080", fontSize: "16px" }}>
                            Delivery Price:
                        </li>
                        <li
                            style={{
                                color: "#808080",
                                fontSize: "16px",
                            }}
                        >
                            Insurance:
                        </li>
                        <li style={{ marginTop: "-3px" }}>
                            Total Delivery Price:
                        </li>
                    </ul>
                    <ul>
                        <li style={{ textAlign: "right" }}>
                            <input
                                value={`#${data?.amount}`}
                                disabled
                                style={{
                                    background: "transparent",
                                    padding: "5px",
                                    textAlign: "right",
                                    border: "none",
                                }}
                            />
                        </li>
                        <li
                            style={{ textAlign: "right", marginTop: "-20px" }}
                        >
                            <input
                                value={"#" + 8}
                                disabled
                                style={{
                                    background: "transparent",
                                    padding: "5px",
                                    textAlign: "right",
                                    border: "none",
                                }}
                            />
                        </li>
                        <li
                            style={{ textAlign: "right", marginTop: "-17px" }}
                        >
                            <input
                                value={`#${data?.total}`}
                                disabled
                                style={{
                                    background: "transparent",
                                    padding: "5px",
                                    textAlign: "right",
                                    border: "none",
                                }}
                            />
                        </li>
                    </ul>
                </div>
                <div>
                    <hr
                        style={{
                            background: "gray",
                            color: "gray",
                            borderColor: "gray",
                            height: "2px",
                            width: "40%",
                            marginTop: "12px",
                        }}
                    />
                </div>
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
                <Form.Check type="switch" id="custom-switch" onClick={handleIsFragile} />
            </div>
            <div className="mt-5 row justify-content-between">
                <button
                    disabled={Math.sign(data?.amount) !== 1}
                    onClick={calculateTotal}
                    className="btn col-lg-5 col-sm-12 btn_package"
                    style={{
                        background: "#FFFFFF",
                        borderColor: "#7CC427",
                        width: "250px",
                        height: "40px",
                        color: "#151515",
                    }}
                >
                    <CalculateIcon
                        style={{ color: "#CAE0B0", marginRight: "20px" }}
                    />{" "}
                    Calculate cost
                </button>
                <button
                    onClick={handleBulkOption}
                    disabled={!data?.total || (!isInsurance && !isFragile)}
                    style={{
                        background: `${data?.total}` ? "#00902F" : "gray",
                        color: "white",
                        width: "250px",
                        border: "none",
                    }}
                    className="btn  bg-gray col-lg-5 col-sm-12"
                >
                    <Form.Label style={{ color: "white" }}>
                        Next
                    </Form.Label>
                </button>
            </div>
        </div>
    )
}