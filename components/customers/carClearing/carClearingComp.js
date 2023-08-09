import Image from "next/image";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { cars } from  "../cars/cars"
import { models } from "../cars/models";
import { cities } from "../cities/cities";
import { countries } from "../countries/countries";


export default function CarClearing({
    carClearingDetails,
    handleClearingCost,
    carClearingError,
    setCarClearingDetails,
    isChecked,
    handleOnClick,
    handleUploadContainerShipment,
    setIsCarClearingParcel
}) {
    const handleOnChange = (e) => {
        const { name, value } = e.target
        setCarClearingDetails({
            [name]: value
        })
    }

    function normalizedData(array) {
        return array.filter((item, index) => array.indexOf(item) === index)
    }
    const carModels = models.map((model) => model.make.name)

    return (
        <>
            <Form>
                <div style={{ display: "flex", justifyContent: 'center', alignItems: "center", margin: "auto" }}>
                    {carClearingError ? (<span style={{
                        color: "red",
                        fontSize: "11px",
                        fontStyle: "italic",
                        marginBottom: '10px'
                    }}>All Fields are required</span>) : ""}
                </div>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <div style={{ width: '70%', marginRight: "20px" }}>
                        <Form.Label style={{ color: "#151515", fontSize: "14px", fontWeight: '400' }}>
                            Depature country
                        </Form.Label>
                        <Form.Group>
                            <Form.Select style={{ color: "#343F42", width: "100%" }} required
                                name="departureCountry"
                                value={carClearingDetails.departureCountry}
                                onChange={handleOnChange} >
                                <option value="">Select Country</option>
                                {countries.map((country, idx) => (
                                    <option key={idx} value={country}>{country}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Label style={{ color: "#151515", marginTop: "20px", fontSize: "14px", fontWeight: '400' }}>
                            Car Type
                        </Form.Label>
                        <Form.Group>
                            <Form.Select style={{ color: "#343F42" }} required
                                name="carType"
                                value={carClearingDetails.carType}
                                onChange={handleOnChange} >
                                <option value="">Select Car type</option>
                                {cars.map((car, idx) => (
                                    <option key={idx} value={car.name}>{car.name}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Label style={{ color: "#151515", marginTop: "20px", fontSize: "14px", fontWeight: '400' }}>
                            Upload Documents
                        </Form.Label>
                        <Form.Group>
                            <Form.Select style={{
                                color: "#343F42", width: "100%",
                                marginTop: "5px"
                            }}
                                name="uploadDoc"
                                onClick={() => {
                                    handleUploadContainerShipment();
                                    setIsCarClearingParcel(true)
                                }}
                            >
                                <option value={carClearingDetails?.uploadDoc}>
                                    {carClearingDetails?.uploadDoc}
                                </option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <div style={{ width: '80%' }}>
                        <Form.Label style={{ color: "#151515", fontSize: "14px", fontWeight: '400' }}>
                            Destination country
                        </Form.Label>
                        <Form.Group>
                            <Form.Select style={{ color: "#343F42" }} required
                                name="destinationCountry"
                                value={carClearingDetails.destinationCountry}
                                onChange={handleOnChange}
                            >
                                <option value="">Select Country</option>
                                {countries.map((country, idx) => (
                                    <option key={idx} value={country}>{country}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Label style={{ color: "#151515", marginTop: "20px", fontSize: "14px", fontWeight: '400' }} required name="model">
                            Car Model
                        </Form.Label>
                        <Form.Group>
                            <Form.Select style={{ color: "#343F42" }}
                                name="carModel"
                                value={carClearingDetails.carModel}
                                onChange={handleOnChange}
                            >
                                <option value="">Select model</option>
                                {normalizedData(carModels).map((model, idx) => (
                                    <option key={idx} value={model}>{model}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Label style={{ color: "#151515", marginTop: "20px", fontSize: "14px", fontWeight: '400' }}>
                            Car value
                        </Form.Label>
                        <Form.Group>
                            <Form.Select style={{ color: "#343F42" }}
                                name="carValue"
                                value={carClearingDetails.carValue}
                                onChange={handleOnChange}
                            >
                                <option value="">Select car value</option>
                                <option value="3.4">$3.4m</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Form.Label style={{ color: "#151515", marginTop: "20px", fontSize: "14px", fontWeight: '400' }}>
                        Year of the car
                    </Form.Label>
                    <Form.Group>
                        <Form.Select style={{ color: "#343F42" }}
                            name="yearOfCar"
                            value={carClearingDetails.yearOfCar}
                            onChange={handleOnChange}
                        >
                            <option value="">Select year</option>
                            <option value="2022 Gwagon">2022 Gwagon</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Label style={{ color: "#151515", marginTop: "20px", fontSize: "14px", fontWeight: '400' }}>
                        Comment
                    </Form.Label>
                    <textarea rows="3" col="3" name="comment" value={carClearingDetails.comment}
                        onChange={handleOnChange} />
                </div>
                {isChecked ? (
                    <>
                        <div style={{ display: "flex", justifyContent: 'space-between', marginTop: "20px" }}>
                            <Form.Label style={{ color: "#151515", fontSize: "14px", fontWeight: '600' }}>
                                Final Delivery
                            </Form.Label>
                            <Form.Check style={{ marginRight: "30%" }} type="switch" onClick={handleOnClick}
                                readOnly checked={isChecked} />
                        </div>
                        <div style={{
                            display: "flex", justifyContent: 'space-between', marginTop: "20px",
                            marginBottom: "10px"
                        }}>
                            <div style={{ width: '70%', marginRight: "20px" }}>
                                <Form.Label style={{ color: "#151515", fontSize: "14px", fontWeight: '400' }}>
                                    Delivery From
                                </Form.Label>
                                <Form.Group>
                                    <Form.Select style={{ color: "#343F42", width: "100%" }} required
                                        name="deliveryFrom"
                                        value={carClearingDetails.deliveryFrom}
                                        onChange={handleOnChange} >
                                        <option value="">Select City</option>
                                        {cities.map((city, idx) => (
                                            <option key={idx} value={city}>{city}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <div style={{ width: '70%', marginRight: "20px" }}>
                                <Form.Label style={{ color: "#151515", fontSize: "14px", fontWeight: '400' }}>
                                    Delivery To
                                </Form.Label>
                                <Form.Group>
                                    <Form.Select style={{ color: "#343F42", width: "100%" }} required
                                        name="deliveryTo"
                                        value={carClearingDetails.deliveryTo}
                                        onChange={handleOnChange} >
                                        <option value="">Select City</option>
                                        {cities.map((city, idx) => (
                                            <option key={idx} value={city}>{city}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </div>
                        </div>
                        <Form.Label style={{ color: "#151515", fontSize: "14px", fontWeight: '400' }}>
                            Receiver Information
                        </Form.Label>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div style={{ marginRight: "20px", width: "100%" }}>
                                <Form.Label style={{ color: "#151515" }}>
                                    Full name
                                </Form.Label>
                                <Form.Group>
                                    <input style={{ padding: "5px", width: "100%" }} type="text" placeholder="Vivian Akpa"
                                        name="fullName" value={carClearingDetails.fullName}
                                        onChange={handleOnChange} />
                                </Form.Group>
                            </div>
                            <div style={{ width: "100%" }}>
                                <Form.Label style={{ color: "#151515" }}>
                                    phone number
                                </Form.Label>
                                <Form.Group>
                                    <input style={{ padding: "5px", width: "100%" }} type="text" placeholder="0803382726"
                                        name="phoneNumber" value={carClearingDetails.phoneNumber}
                                        onChange={handleOnChange} />
                                </Form.Group>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: 'column', marginTop: "20px" }}>
                            <div style={{ marginRight: "20px", width: "100%" }}>
                                <Form.Label style={{ color: "#151515" }}>
                                    Address
                                </Form.Label>
                                <Form.Group style={{ display: "flex", justifyContent: "space-between" }}>
                                    <input style={{ padding: "5px", width: "30%" }} type="text" placeholder="Zip code"
                                        name="zipCode" value={carClearingDetails.zipCode}
                                        onChange={handleOnChange} />
                                    <input style={{ padding: "5px", width: "30%" }} type="text" placeholder="City"
                                        name="city" value={carClearingDetails.city}
                                        onChange={handleOnChange} />
                                    <input style={{ padding: "5px", width: "30%" }} type="text" placeholder="Street"
                                        name="street" value={carClearingDetails.street}
                                        onChange={handleOnChange} />
                                </Form.Group>
                            </div>
                        </div>
                        <div style={{
                            display: "flex", flexDirection: "column", marginTop: "20px",
                            marginBottom: "40px"
                        }}>
                            <Form.Label style={{ color: "#151515", fontSize: "14px", fontWeight: '400' }}>
                                Additional Infomation
                            </Form.Label>
                            <textarea rows="3" col="3" name="additionalInfo" value={carClearingDetails.additionalInfo}
                                onChange={handleOnChange} />
                        </div>
                    </>
                ) : (
                    <>
                        <Form.Label style={{ color: "#151515", marginTop: "20px", fontSize: "14px", fontWeight: '400' }}>
                            Receiver Information
                        </Form.Label>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div style={{ marginRight: "20px", width: "100%" }}>
                                <Form.Label style={{ color: "#151515" }}>
                                    Full name
                                </Form.Label>
                                <Form.Group>
                                    <input style={{ padding: "5px", width: "100%" }} type="text" placeholder="Vivian Akpa"
                                        name="fullName" value={carClearingDetails.fullName}
                                        onChange={handleOnChange} />
                                </Form.Group>
                            </div>
                            <div style={{ width: "100%" }}>
                                <Form.Label style={{ color: "#151515" }}>
                                    phone number
                                </Form.Label>
                                <Form.Group>
                                    <input style={{ padding: "5px", width: "100%" }} type="text" placeholder="0803382726"
                                        name="phoneNumber" value={carClearingDetails.phoneNumber}
                                        onChange={handleOnChange} />
                                </Form.Group>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: 'column', marginTop: "20px" }}>
                            <div style={{ marginRight: "20px", width: "100%" }}>
                                <Form.Label style={{ color: "#151515" }}>
                                    Address
                                </Form.Label>
                                <Form.Group style={{ display: "flex", justifyContent: "space-between" }}>
                                    <input style={{ padding: "5px", width: "30%" }} type="text" placeholder="Zip code"
                                        name="zipCode" value={carClearingDetails.zipCode}
                                        onChange={handleOnChange} />
                                    <input style={{ padding: "5px", width: "30%" }} type="text" placeholder="City"
                                        name="city" value={carClearingDetails.city}
                                        onChange={handleOnChange} />
                                    <input style={{ padding: "5px", width: "30%" }} type="text" placeholder="Street"
                                        name="street" value={carClearingDetails.street}
                                        onChange={handleOnChange} />
                                </Form.Group>
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: 'space-between', marginTop: "20px" }}>
                            <Form.Label style={{ color: "#151515", fontSize: "14px", fontWeight: '600' }}>
                                Final Delivery
                            </Form.Label>
                            <Form.Check style={{ marginRight: "30%" }} type="switch" onClick={handleOnClick}
                                readOnly checked={isChecked} />
                        </div>
                    </>
                )}
                <div style={{ display: "flex", justifyContent: 'space-between', marginTop: "20px" }}>
                    <Button
                        onClick={handleClearingCost}
                        style={{
                            boxSizing: "border-box",
                            width: "45%",
                            height: "40px",
                            background: "#FFFFFF",
                            border: "1px solid #7CC427",
                            bordeRadius: "6px",
                            flex: "none",
                            order: "0",
                            flexGrow: "0",
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "space-between"
                        }}><Image style={{ marginTop: "6x" }} src="/img/calc.png" alt="calc" width="18" height="15" />
                        <Form.Label style={{
                            fontFamily: 'Poppins',
                            fontStyle: "normal",
                            fontWeight: "600",
                            fontSize: "16px",
                            lineHeight: "24px",
                            display: "flex",
                            alignItems: "center",
                            textAlign: "center",
                            letterSpacing: "0.15em",
                            color: "#151515",
                            display: "flex",
                            alignItems: 'center',
                            justifyContent: "center",
                            marginRight: "20%"
                        }}>Calculate cost</Form.Label>
                    </Button>
                    <Button style={{
                        boxSizing: "border-box",
                        width: "45%",
                        height: "40px",
                        background: "#00902F",
                        bordeRadius: "6px",
                        flex: "none",
                        order: "0",
                        flexGrow: "0",
                        border: "none"
                    }}>Post Load</Button>
                </div>
            </Form>
        </>
    )
}