import { useEffect, useState } from "react";
import { Form,  Navbar } from "react-bootstrap";
import GeneralModal from "./modal";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";

export default function AddNewParcel(props) {
    const [address1, setAddress1] = useState(false)
    const [office1, setOffice1] = useState(false)
    const [address2, setAddress2] = useState(false)
    const [office2, setOffice2] = useState(false)

    useEffect(() => {
        setAddress1(true)
        setAddress2(true)
        setOffice1(false)
        setOffice2(false)
    }, [])

    const handleAddress1 = () => {
        setAddress1(true)
        setOffice1(false)
    }
    const handleOffice1 = () => {
        setOffice1(true)
        setAddress1(false)
    }
    const handleAddress2 = () => {
        setAddress2(true)
        setOffice2(false)
    }
    const handleOffice2 = () => {
        setOffice2(true)
        setAddress2(false)
    }

    const handleNext = () => {
        let addressOne
        let addressTwo
        let officeOne
        let officeTwo
        if (address1) {
            const enteredSendersName1 = props.sendersName1.current.value
            const enteredPhoneNumber1 = props.phoneNumber1.current.value
            const enteredAddress1 = props.address1.current.value
            const enteredCity1 = props.city1.current.value
            const enteredStreet1 = props.street1.current.value
            const enteredNumber1 = props.number1.current.value
            const enteredApartment1 = props.apartment1.current.value

            const addressOneData = {
                name1: enteredSendersName1,
                phone1: enteredPhoneNumber1,
                address1: enteredAddress1,
                city1: enteredCity1,
                street1: enteredStreet1,
                number1: enteredNumber1,
                apartment1: enteredApartment1
            }
            addressOne = addressOneData
        }
        if (office1) {
            const enteredSendersName2 = props.sendersName2.current.value
            const enteredPhoneNumber2 = props.phoneNumber2.current.value
            const enteredAddress2 = props.address2.current.value
            const enteredCity2 = props.city2.current.value
            const enteredStreet2 = props.street2.current.value
            const enteredNumber2 = props.number2.current.value
            const enteredApartment2 = props.apartment2.current.value

            const officeOneData = {
                name2: enteredSendersName2,
                phone2: enteredPhoneNumber2,
                address2: enteredAddress2,
                city2: enteredCity2,
                street2: enteredStreet2,
                number2: enteredNumber2,
                apartment2: enteredApartment2
            }
            officeOne = officeOneData
        }
        if (address2) {
            const enteredReceiversName1 = props.receiversName1.current.value
            const enteredPhoneNumber3 = props.phoneNumber3.current.value
            const enteredAddress3 = props.address3.current.value
            const enteredCity3 = props.city3.current.value
            const enteredStreet3 = props.street3.current.value
            const enteredNumber3 = props.number3.current.value
            const enteredApartment3 = props.apartment3.current.value

            const addressTwoData = {
                name3: enteredReceiversName1,
                phone3: enteredPhoneNumber3,
                address3: enteredAddress3,
                city3: enteredCity3,
                street3: enteredStreet3,
                number3: enteredNumber3,
                apartment3: enteredApartment3
            }
            addressTwo = addressTwoData
        }
        if (office2) {
            const enteredReceiversName2 = props.receiversName2.current.value
            const enteredPhoneNumber4 = props.phoneNumber4.current.value
            const enteredAddress4 = props.address4.current.value
            const enteredCity4 = props.city4.current.value
            const enteredStreet4 = props.street4.current.value
            const enteredNumber4 = props.number4.current.value
            const enteredApartment4 = props.apartment4.current.value

            const officeTwoData = {
                name4: enteredReceiversName2,
                phone4: enteredPhoneNumber4,
                address4: enteredAddress4,
                city4: enteredCity4,
                street4: enteredStreet4,
                number4: enteredNumber4,
                apartment4: enteredApartment4
            }
            officeTwo = officeTwoData
        }

        if (address1 && address2) {
            props.setParcelData((prevState) => {
                const data = []
                data.push(addressOne)
                data.push(addressTwo)
                prevState = data
                return prevState
            })
        }

        if (office1 && address2) {
            props.setParcelData((prevState) => {
                const data = []
                data.push(officeOne)
                data.push(addressTwo)
                prevState = data
                return prevState
            })
        }

        if (address1 && office2) {
            props.setParcelData((prevState) => {
                const data = []
                data.push(addressOne)
                data.push(officeTwo)
                prevState = data
                return prevState
            })
        }

        if (office1 && office2) {
            props.setParcelData((prevState) => {
                const data = []
                data.push(officeOne)
                data.push(officeTwo)
                prevState = data
                return prevState
            })
        }

        props.setLocationModal(true)
        props.setAddParcel(false)

    }
    return (
        <GeneralModal
            size="lg"
            show={props.addParcel}
            onHide={() => props.setAddParcel(false)}
            setAddParcel={props.setAddParcel}
            action={props.action}>
            <div className="container">
                <div className="row mt-4 mb-5 pl-4 pr-4">
                    <h6 style={{ fontWeight: "bold" }} className="text-dark text-uppercase">Deliver from:</h6>
                    <ul className="nav mt-2">
                        <Navbar bg="transpa" variant="dark">
                            <div className="">
                                <div
                                    onClick={handleAddress1}
                                    style={address1 ? {
                                        color: "#A6A6A6",
                                        fontFamily: "Poppins",
                                        borderBottom: "2px solid #00902F",
                                        cursor: 'pointer'
                                    } : {
                                        color: "#A6A6A6",
                                        fontFamily: "Poppins",
                                        cursor: 'pointer'
                                    }}>
                                    ADDRESS
                                </div>
                                <div
                                    onClick={handleOffice1}
                                    style={office1 ? {
                                        color: "#A6A6A6",
                                        fontFamily: "Poppins",
                                        borderBottom: "2px solid #00902F",
                                        cursor: 'pointer'
                                    } : {
                                        color: "#A6A6A6",
                                        fontFamily: "Poppins",
                                        cursor: 'pointer'
                                    }}>OFFICE</div>
                            </div>
                        </Navbar>
                    </ul>
                    {address1 && (
                        <div className="address1">
                            {address1 && (
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        padding: "7px",
                                        background: "#E0F1CB",
                                        marginTop: "20px",
                                        fontSize: "10px",
                                        width: "70%",
                                    }}
                                    className="bar success pl-4 office_instruction"
                                >
                                    <ReportGmailerrorredIcon
                                        style={{ color: "green", marginRight: "10px", marginLeft: "10px" }}
                                    />
                                    If you aren’t sending the parcel from the office, then payment
                                    is possible only by card
                                </div>
                            )}
                            <div className="tab-content mt-3" id="myTabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="home"
                                    role="tabpanel"
                                    aria-labelledby="home-tab"
                                >
                                    <div className="row">
                                        <div className="form-group col-6">
                                            <label htmlFor="sender"
                                                style={{
                                                    fontWeight: "400",
                                                    color: "#262626",
                                                    fontFamily: "Poppins",
                                                    fontStyle: "normal"
                                                }}>Sender’s Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="sender"
                                                name="sender"
                                                required
                                                ref={props.sendersName1}
                                            />
                                        </div>
                                        <div className="form-group col-6">
                                            <label htmlFor="phone"
                                                style={{
                                                    fontWeight: "400",
                                                    color: "#262626",
                                                    fontFamily: "Poppins",
                                                    fontStyle: "normal"
                                                }}>Phone Number</label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                placeholder="+ ()"
                                                id="phone"
                                                name="phone"
                                                required
                                                ref={props.phoneNumber1}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="form-group col-lg-2">
                                            <label htmlFor="address"
                                                style={{
                                                    fontWeight: "400",
                                                    color: "#262626",
                                                    fontFamily: "Poppins",
                                                    fontStyle: "normal"
                                                }}>Address</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="zip_code"
                                                placeholder="Zip Code"
                                                name="zip_code"
                                                required
                                                ref={props.address1}
                                            />
                                        </div>
                                        <div className="form-group col-lg-2">
                                            <label htmlFor="address"></label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="City"
                                                id="city"
                                                name="city"
                                                required
                                                ref={props.city1}
                                            />
                                        </div>
                                        <div className="form-group col-lg-3">
                                            <label htmlFor=""></label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Street"
                                                id="street"
                                                name="street"
                                                required
                                                ref={props.street1}
                                            />
                                        </div>
                                        <div className="form-group col-lg-2">
                                            <label htmlFor=""></label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Number"
                                                id="house_no"
                                                name="house_no"
                                                required
                                                ref={props.number1}
                                            />
                                        </div>
                                        <div className="form-group col-lg-3">
                                            <label htmlFor=""></label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Apartment"
                                                id="apartment"
                                                name="apartment"
                                                required
                                                ref={props.apartment1}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {office1 && (
                        <div className="address1">
                            <div className="tab-content mt-3" id="myTabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="home"
                                    role="tabpanel"
                                    aria-labelledby="home-tab"
                                >
                                    <div className="row">
                                        <div className="form-group col-6">
                                            <label htmlFor="sender"
                                                style={{
                                                    fontWeight: "400",
                                                    color: "#262626",
                                                    fontFamily: "Poppins",
                                                    fontStyle: "normal"
                                                }}>Sender’s Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="sender"
                                                name="sender"
                                                required
                                                ref={props.sendersName2}
                                            />
                                        </div>
                                        <div className="form-group col-6">
                                            <label htmlFor="phone"
                                                style={{
                                                    fontWeight: "400",
                                                    color: "#262626",
                                                    fontFamily: "Poppins",
                                                    fontStyle: "normal"
                                                }}>Phone Number</label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                placeholder="+ ()"
                                                id="phone"
                                                name="phone"
                                                required
                                                ref={props.phoneNumber2}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="form-group col-lg-2">
                                            <label htmlFor="address"
                                                style={{
                                                    fontWeight: "400",
                                                    color: "#262626",
                                                    fontFamily: "Poppins",
                                                    fontStyle: "normal"
                                                }}>Address</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="zip_code"
                                                placeholder="Zip Code"
                                                name="zip_code"
                                                required
                                                ref={props.address2}
                                            />
                                        </div>
                                        <div className="form-group col-lg-2">
                                            <label htmlFor="address"></label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="City"
                                                id="city"
                                                name="city"
                                                required
                                                ref={props.city2}
                                            />
                                        </div>
                                        <div className="form-group col-lg-3">
                                            <label htmlFor=""></label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Street"
                                                id="street"
                                                name="street"
                                                required
                                                ref={props.street2}
                                            />
                                        </div>
                                        <div className="form-group col-lg-2">
                                            <label htmlFor=""></label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Number"
                                                id="house_no"
                                                name="house_no"
                                                required
                                                ref={props.number2}
                                            />
                                        </div>
                                        <div className="form-group col-lg-3">
                                            <label htmlFor=""></label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Apartment"
                                                id="apartment"
                                                name="apartment"
                                                required
                                                ref={props.apartment2}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="row mt-5">
                    <h6 style={{ fontWeight: "bold" }} className="text-dark text-uppercase">Deliver To:</h6>
                    <>
                        <ul className="nav mt-2" id="myTab" role="tablist">
                            <Navbar bg="transpa" variant="dark">
                                <div className="">
                                    <div onClick={handleAddress2}
                                        style={address2 ? {
                                            color: "#A6A6A6",
                                            fontFamily: "Poppins",
                                            borderBottom: "2px solid #00902F",
                                            cursor: 'pointer'
                                        } : {
                                            color: "#A6A6A6",
                                            fontFamily: "Poppins",
                                            cursor: 'pointer'
                                        }}>
                                        ADDRESS
                                    </div>
                                    <div onClick={handleOffice2}
                                        style={office2 ? {
                                            color: "#A6A6A6",
                                            fontFamily: "Poppins",
                                            borderBottom: "2px solid #00902F",
                                            cursor: 'pointer'
                                        } : {
                                            color: "#A6A6A6",
                                            fontFamily: "Poppins",
                                            cursor: 'pointer'
                                        }}>OFFICE</div>
                                </div>
                            </Navbar>
                        </ul>
                    </>
                    <div id="address2" className="tab-content pt-3">
                        {address2 && (
                            <div
                                className="tab-pane fade show active"
                                id="home_1"
                                role="tabpanel"
                                aria-labelledby="home-tab"
                            >
                                <div className="row">
                                    <div className="form-group col-6">
                                        <label htmlFor="sender"
                                            style={{
                                                fontWeight: "400",
                                                color: "#262626",
                                                fontFamily: "Poppins",
                                                fontStyle: "normal"
                                            }}>Receiver’s Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="sender"
                                            name="sender"
                                            required
                                            ref={props.receiversName1}
                                        />
                                    </div>
                                    <div className="form-group col-6">
                                        <label htmlFor="phone"
                                            style={{
                                                fontWeight: "400",
                                                color: "#262626",
                                                fontFamily: "Poppins",
                                                fontStyle: "normal"
                                            }}>Phone Number</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            placeholder="+ ()"
                                            id="phone"
                                            name="phone"
                                            required
                                            ref={props.phoneNumber3}
                                        />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="form-group col-lg-2">
                                        <label htmlFor="address"
                                            style={{
                                                fontWeight: "400",
                                                color: "#262626",
                                                fontFamily: "Poppins",
                                                fontStyle: "normal"
                                            }}>Address</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="zip_code"
                                            placeholder="Zip Code"
                                            name="zip_code"
                                            required
                                            ref={props.address3}
                                        />
                                    </div>
                                    <div className="form-group col-lg-2">
                                        <label htmlFor="address"></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="City"
                                            id="city"
                                            name="city"
                                            required
                                            ref={props.city3}
                                        />
                                    </div>
                                    <div className="form-group col-lg-3">
                                        <label htmlFor=""></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Street"
                                            id="street"
                                            name="street"
                                            required
                                            ref={props.street3}
                                        />
                                    </div>
                                    <div className="form-group col-lg-2">
                                        <label htmlFor=""></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Number"
                                            id="house_no"
                                            name="house_no"
                                            required
                                            ref={props.number3}
                                        />
                                    </div>
                                    <div className="form-group col-lg-3">
                                        <label htmlFor=""></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Apartment"
                                            id="apartment"
                                            name="apartment"
                                            required
                                            ref={props.apartment3}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                        {office2 && (
                            <div
                                className="tab-pane fade show active"
                                id="home_1"
                                role="tabpanel"
                                aria-labelledby="home-tab"
                            >
                                <div className="row">
                                    <div className="form-group col-6">
                                        <label htmlFor="sender"
                                            style={{
                                                fontWeight: "400",
                                                color: "#262626",
                                                fontFamily: "Poppins",
                                                fontStyle: "normal"
                                            }}>Receiver’s Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="sender"
                                            name="sender"
                                            required
                                            ref={props.receiversName2}
                                        />
                                    </div>
                                    <div className="form-group col-6">
                                        <label htmlFor="phone"
                                            style={{
                                                fontWeight: "400",
                                                color: "#262626",
                                                fontFamily: "Poppins",
                                                fontStyle: "normal"
                                            }}>Phone Number</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            placeholder="+ ()"
                                            id="phone"
                                            name="phone"
                                            required
                                            ref={props.phoneNumber4}
                                        />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="form-group col-lg-2">
                                        <label htmlFor="address"
                                            style={{
                                                fontWeight: "400",
                                                color: "#262626",
                                                fontFamily: "Poppins",
                                                fontStyle: "normal"
                                            }}>Address</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="zip_code"
                                            placeholder="Zip Code"
                                            name="zip_code"
                                            required
                                            ref={props.address4}
                                        />
                                    </div>
                                    <div className="form-group col-lg-2">
                                        <label htmlFor="address"></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="City"
                                            id="city"
                                            name="city"
                                            required
                                            ref={props.city4}
                                        />
                                    </div>
                                    <div className="form-group col-lg-3">
                                        <label htmlFor=""></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Street"
                                            id="street"
                                            name="street"
                                            required
                                            ref={props.street4}
                                        />
                                    </div>
                                    <div className="form-group col-lg-2">
                                        <label htmlFor=""></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Number"
                                            id="house_no"
                                            name="house_no"
                                            required
                                            ref={props.number4}
                                        />
                                    </div>
                                    <div className="form-group col-lg-3">
                                        <label htmlFor=""></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Apartment"
                                            id="apartment"
                                            name="apartment"
                                            required
                                            ref={props.apartment4}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div style={{ marginBottom: "70px" }} className="mt-5">
                <button
                    // disabled={(address1 && address2 && (
                    //     !props.sendersName1.length ||
                    //     !props.phoneNumber1.length ||
                    //     !props.address1.length ||
                    //     !props.city1.length ||
                    //     !props.street1.length ||
                    //     !props.number1.length ||
                    //     !props.apartment1.length ||
                    //     !props.receiversName1.length ||
                    //     !props.phoneNumber3.length ||
                    //     !props.address3.length ||
                    //     !props.city3.length ||
                    //     !props.street3.length ||
                    //     !props.number3.length ||
                    //     !props.apartment3.length
                    // )) || (office1 && address2 && (!props.sendersName2.length ||
                    //     !props.phoneNumber2.length ||
                    //     !props.address2.length ||
                    //     !props.city2.length ||
                    //     !props.street2.length ||
                    //     !props.number2.length ||
                    //     !props.apartment2.length ||
                    //     !props.receiversName1.length ||
                    //     !props.phoneNumber3.length ||
                    //     !props.address3.length ||
                    //     !props.city3.length ||
                    //     !props.street3.length ||
                    //     !props.number3.length ||
                    //     !props.apartment3.length)) || (address1 && office2 && (
                    //         !props.sendersName1.length ||
                    //         !props.phoneNumber1.length ||
                    //         !props.address1.length ||
                    //         !props.city1.length ||
                    //         !props.street1.length ||
                    //         !props.number1.length ||
                    //         !props.apartment1.length ||
                    //         !props.receiversName2.length ||
                    //         !props.phoneNumber4.length ||
                    //         !props.address4.length ||
                    //         !props.city4.length ||
                    //         !props.street4.length ||
                    //         !props.number4.length ||
                    //         !props.apartment4.length
                    //     )) || (office1 && office2 && (
                    //         !props.sendersName2.length ||
                    //         !props.phoneNumber2.length ||
                    //         !props.address2.length ||
                    //         !props.city2.length ||
                    //         !props.street2.length ||
                    //         !props.number2.length ||
                    //         !props.apartment2.length ||
                    //         !props.receiversName2.length ||
                    //         !props.phoneNumber4.length ||
                    //         !props.address4.length ||
                    //         !props.city4.length ||
                    //         !props.street4.length ||
                    //         !props.number4.length ||
                    //         !props.apartment4.length
                    //     ))}
                    style={{
                        background: "#00902F"
                    }}
                    onClick={handleNext}
                    className="btn w-100"
                >
                    <Form.Label style={{
                        fontFamily: 'Poppins',
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "14px",
                        lineHeight: "21px",
                        color: "#FFFFFF"
                    }}>Next</Form.Label>
                </button>
            </div>
        </GeneralModal>
    )
}