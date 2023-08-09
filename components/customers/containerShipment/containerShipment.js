import Image from "next/image";
import { Button, Form } from "react-bootstrap";
import { cities } from "../cities/cities";
import { countries } from "../countries/countries";
import Media from "@/utils/media";

const containerHeight = [
    "40ft",
    "30ft",
    "20ft",
    "50ft"
]

export default function ContainerShipment(props) {
    const { mobile, tabletAndDesktop} = Media();
    const handleOnChange = (e) => {
        const { name, value } = e.target
        props.setContainerShipmentData({
            [name]: value
        })
    }

    return (
        <>
            {mobile && (
                <div style={{
                    display: "flex",
                    flexDirection: 'column',
                    marginTop: '10px'
                }}>
                    <Form.Label style={{
                        fontSize: "14px",
                        fontWeight: '500',
                        color: 'black'
                    }}>Departure Country</Form.Label>
                    <Form.Group>
                        <Form.Select style={{ color: "#343F42", width: "100%" }} required
                            name="departureCountry"
                            value={props.containerShipmentData?.departureCountry}
                            onChange={handleOnChange}
                        >
                            <option value="Nigeria">Nigeria</option>
                            {countries.map((country, idx) => (
                                <option key={idx} value={country}>{country}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Label style={{
                        fontSize: "14px",
                        fontWeight: '500',
                        color: 'black',
                        marginTop: '10px'
                    }}>Container Height</Form.Label>
                    <Form.Group>
                        <Form.Select style={{
                            color: "#343F42", width: "100%",
                            marginTop: "5px"
                        }} required
                            name="containerHeight"
                            value={props.containerShipmentData?.containerHeight}
                            onChange={handleOnChange}
                        >
                            <option value="40ft">40ft</option>
                            {containerHeight.map((container, idx) => (
                                <option key={idx} value={container}>{container}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Label style={{
                        fontSize: "14px",
                        fontWeight: '500',
                        color: 'black',
                        marginTop: '10px'
                    }}>Upload Document</Form.Label>
                    <Form.Group>
                        <Form.Select style={{
                            color: "#343F42", width: "100%",
                            marginTop: "5px"
                        }} required
                            name="uploadDocuments"
                            onClick={() => {
                                props.handleUploadContainerShipment();
                                props.setIsContainerShipmentUpload(true)
                            }}
                        >
                            <option value={props.containerShipmentData?.uploadDocuments}>
                                {props.containerShipmentData?.uploadDocuments}
                            </option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Label style={{
                        fontSize: "14px",
                        fontWeight: '500',
                        color: 'black',
                        marginTop: '10px'
                    }}>Destination Country</Form.Label>
                    <Form.Group>
                        <Form.Select style={{ color: "#343F42", width: "100%" }} required
                            name="destinationCountry"
                            value={props.containerShipmentData?.destinationCountry}
                            onChange={handleOnChange}
                        >
                            <option value="Poland">Poland</option>
                            {countries.map((country, idx) => (
                                <option key={idx} value={country}>{country}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Label style={{
                        fontSize: "14px",
                        fontWeight: '500',
                        color: 'black',
                        marginTop: '10px'
                    }}>Container carrier</Form.Label>
                    <Form.Group>
                        <Form.Select style={{
                            color: "#343F42", width: "100%",
                            marginTop: "5px"
                        }} required
                            name="containerCarrier"
                            value={props.containerShipmentData?.containerCarrier}
                            onChange={handleOnChange}
                        >
                            <option value="Grimaidi">Grimaidi</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Label style={{
                        fontSize: "14px",
                        fontWeight: '500',
                        color: 'black',
                        marginTop: '10px'
                    }}>Container value</Form.Label>
                    <Form.Group>
                        <Form.Select style={{
                            color: "#343F42", width: "100%",
                            marginTop: "5px"
                        }} required
                            name="containerValue"
                            value={props.containerShipmentData?.containerValue}
                            onChange={handleOnChange}
                        >
                            <option value="$3.4m">$3.4m</option>
                            <option value="$4.0">$4.0</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Label style={{
                        fontSize: "14px",
                        fontWeight: '500',
                        color: 'black',
                        marginTop: '10px'
                    }}>Describe the container content</Form.Label>
                    <textarea rows="3" style={{
                        width: '100%',
                        borderRadius: "6px",
                        border: "1px solid gray"
                    }}
                        name="containerContent"
                        onChange={handleOnChange}
                        value={props.containerShipmentData?.containerContent}
                    />
                    <div style={{
                        display: "flex", justifyContent: 'space-between',
                        marginTop: '20px'
                    }}>
                        <Form.Label style={{
                            color: "#151515", fontSize: "14px",
                            fontWeight: '500'
                        }}>
                            Final Delivery
                        </Form.Label>
                        <Form.Check style={{ marginRight: "30%" }} type="switch"
                            onClick={props.handleOnClick}
                            readOnly
                            checked={props.isChecked}
                        />
                    </div>
                    {props.isChecked && (
                        <>
                            <div style={{
                                display: "flex", flexDirection: 'column', marginTop: "20px",
                                marginBottom: "10px"
                            }}>
                                <Form.Label style={{ color: "#151515", fontSize: "14px", fontWeight: '400' }}>
                                    Delivery From
                                </Form.Label>
                                <Form.Group>
                                    <Form.Select style={{ color: "#343F42", width: "100%" }} required
                                        name="deliveryFrom"
                                        value={props.containerShipmentData?.deliveryFrom}
                                        onChange={handleOnChange} >
                                        <option value="">Select City</option>
                                        {cities.map((city, idx) => (
                                            <option key={idx} value={city}>{city}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                                <Form.Label style={{
                                    color: "#151515", fontSize: "14px",
                                    fontWeight: '400', marginTop: "13px"
                                }}>
                                    Delivery To
                                </Form.Label>
                                <Form.Group>
                                    <Form.Select style={{ color: "#343F42", width: "100%" }} required
                                        name="deliveryTo"
                                        value={props.containerShipmentData?.deliveryTo}
                                        onChange={handleOnChange} >
                                        <option value="">Select City</option>
                                        {cities.map((city, idx) => (
                                            <option key={idx} value={city}>{city}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <Form.Label style={{
                                color: "#151515", fontSize: "14px", fontWeight: '500',
                                marginTop: "13px"
                            }}>
                                Receiver Information
                            </Form.Label>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <Form.Label style={{ color: "#151515" }}>
                                    Full name
                                </Form.Label>
                                <Form.Group>
                                    <input style={{
                                        padding: "5px", width: "100%",
                                        borderRadius: "6px", border: " 1px solid gray"
                                    }} type="text" placeholder="Vivian Akpa"
                                        name="fullName" value={props.containerShipmentData?.fullName}
                                        onChange={handleOnChange} />
                                </Form.Group>
                                <Form.Label style={{ color: "#151515", marginTop: "13px" }}>
                                    phone number
                                </Form.Label>
                                <Form.Group>
                                    <input style={{
                                        padding: "5px", width: "100%",
                                        borderRadius: "6px", border: " 1px solid gray"
                                    }} type="text" placeholder="0803382726"
                                        name="phoneNumber" value={props.containerShipmentData?.phoneNumber}
                                        onChange={handleOnChange} />
                                </Form.Group>
                            </div>
                            <div style={{ display: "flex", flexDirection: 'column', marginTop: "20px" }}>
                                <Form.Label style={{ color: "#151515" }}>
                                    Address
                                </Form.Label>
                                <input style={{
                                    padding: "5px", width: "100%", marginBottom: "10px",
                                    borderRadius: "6px", border: " 1px solid gray"
                                }} type="text" placeholder="Zip code"
                                    name="zipCode" value={props.containerShipmentData?.zipCode}
                                    onChange={handleOnChange} />
                                <input style={{
                                    padding: "5px", width: "100%", marginBottom: "10px",
                                    borderRadius: "6px", border: " 1px solid gray"
                                }} type="text" placeholder="City"
                                    name="city" value={props.containerShipmentData?.city}
                                    onChange={handleOnChange} />
                                <input style={{
                                    padding: "5px", width: "100%", marginBottom: "10px",
                                    borderRadius: "6px", border: " 1px solid gray"
                                }} type="text" placeholder="Street"
                                    name="street" value={props.containerShipmentData?.street}
                                    onChange={handleOnChange} />
                            </div>
                            <div style={{
                                display: "flex", flexDirection: "column", marginTop: "20px",
                                marginBottom: "40px"
                            }}>
                                <Form.Label style={{ color: "#151515", fontSize: "14px", fontWeight: '400' }}>
                                    Additional Infomation
                                </Form.Label>
                                <textarea rows="3" col="3" name="additionalInfo"
                                    value={props.containerShipmentData?.additionalInfo}
                                    style={{
                                        width: '100%',
                                        borderRadius: "6px",
                                        border: "1px solid gray",
                                        padding: "7px"
                                    }}
                                    onChange={handleOnChange} />
                            </div>
                        </>)}
                    <div style={{ display: "flex", justifyContent: 'space-between', marginTop: "20px" }}>
                        <Button
                            onClick={props.handleContainerClearingCost}
                            style={{
                                boxSizing: "border-box",
                                width: "50%",
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
                            }}><Image style={{ marginTop: "6px" }} src="/img/calc.png" alt="calc" width="14" height="12" />
                            <Form.Label style={{
                                fontFamily: 'Poppins',
                                fontStyle: "normal",
                                fontWeight: "600",
                                fontSize: "10px",
                                lineHeight: "24px",
                                display: "flex",
                                alignItems: "center",
                                textAlign: "center",
                                letterSpacing: "0.15em",
                                color: "#151515",
                                display: "flex",
                                alignItems: 'center',
                                justifyContent: "center"
                            }}>Calculate cost</Form.Label>
                        </Button>
                        <Button style={{
                            boxSizing: "border-box",
                            width: "45%",
                            fontSize: "12px",
                            height: "40px",
                            background: "#00902F",
                            bordeRadius: "6px",
                            flex: "none",
                            order: "0",
                            flexGrow: "0",
                            border: "none"
                        }}>Post Load</Button>
                    </div>
                </div>
            )}
            {tabletAndDesktop && (
                <>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "2px",
                        marginTop: '10px',
                        width: '100%'
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: 'column',
                            width: "48%"
                        }}>
                            <Form.Label style={{
                                fontSize: "14px",
                                fontWeight: '500',
                                color: 'black'
                            }}>Departure Country</Form.Label>
                            <Form.Group>
                                <Form.Select style={{ color: "#343F42", width: "100%" }} required
                                    name="departureCountry"
                                    value={props.containerShipmentData?.departureCountry}
                                    onChange={handleOnChange}
                                >
                                    <option value="Nigeria">Nigeria</option>
                                    {countries.map((country, idx) => (
                                        <option key={idx} value={country}>{country}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                            <Form.Label style={{
                                fontSize: "14px",
                                fontWeight: '500',
                                color: 'black'
                            }}>Container Height</Form.Label>
                            <Form.Group>
                                <Form.Select style={{
                                    color: "#343F42", width: "100%",
                                    marginTop: "5px"
                                }} required
                                    name="containerHeight"
                                    value={props.containerShipmentData?.containerHeight}
                                    onChange={handleOnChange}
                                >
                                    <option value="40ft">40ft</option>
                                    {containerHeight.map((container, idx) => (
                                        <option key={idx} value={container}>{container}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                            <Form.Label style={{
                                fontSize: "14px",
                                fontWeight: '500',
                                color: 'black'
                            }}>Upload Document</Form.Label>
                            <Form.Group>
                                <Form.Select style={{
                                    color: "#343F42", width: "100%",
                                    marginTop: "5px"
                                }}
                                    name="uploadDocuments"
                                    onClick={() => {
                                        props.handleUploadContainerShipment();
                                        props.setIsContainerShipmentUpload(true)
                                    }}
                                >
                                    <option value={props.containerShipmentData?.uploadDocuments}>
                                        {props.containerShipmentData?.uploadDocuments}
                                    </option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: 'column',
                            width: "48%"
                        }}>
                            <Form.Label style={{
                                fontSize: "14px",
                                fontWeight: '500',
                                color: 'black'
                            }}>Destination Country</Form.Label>
                            <Form.Group>
                                <Form.Select style={{ color: "#343F42", width: "100%" }} required
                                    name="destinationCountry"
                                    value={props.containerShipmentData?.destinationCountry}
                                    onChange={handleOnChange}
                                >
                                    <option value="Poland">Poland</option>
                                    {countries.map((country, idx) => (
                                        <option key={idx} value={country}>{country}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                            <Form.Label style={{
                                fontSize: "14px",
                                fontWeight: '500',
                                color: 'black'
                            }}>Container carrier</Form.Label>
                            <Form.Group>
                                <Form.Select style={{
                                    color: "#343F42", width: "100%",
                                    marginTop: "5px"
                                }} required
                                    name="containerCarrier"
                                    value={props.containerShipmentData?.containerCarrier}
                                    onChange={handleOnChange}
                                >
                                    <option value="Grimaldi">Grimaldi</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Label style={{
                                fontSize: "14px",
                                fontWeight: '500',
                                color: 'black'
                            }}>Container value</Form.Label>
                            <Form.Group>
                                <Form.Select style={{
                                    color: "#343F42", width: "100%",
                                    marginTop: "5px"
                                }} required
                                    name="containerValue"
                                    value={props.containerShipmentData?.containerValue}
                                    onChange={handleOnChange}
                                >
                                    <option value="$3.4m">$3.4m</option>
                                    <option value="$4.0">$4.0</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                    </div>
                    <div style={{
                        marginTop: '10px',
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        <Form.Label style={{
                            fontSize: "14px",
                            fontWeight: '500',
                            color: 'black'
                        }}>Describe the container content</Form.Label>
                        <textarea rows="3" style={{
                            width: '100%',
                            borderRadius: "6px",
                            border: "1px solid gray",
                            padding: "7px"
                        }} name="containerContent"
                            onChange={handleOnChange}
                            value={props.containerShipmentData?.containerContent}
                        />
                    </div>
                    <div style={{
                        marginTop: '20px',
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        <div style={{
                            display: "flex", justifyContent: 'space-between',
                        }}>
                            <Form.Label style={{
                                color: "#151515", fontSize: "14px",
                                fontWeight: '500'
                            }}>
                                Final Delivery
                            </Form.Label>
                            <Form.Check style={{ marginRight: "30%" }} type="switch"
                                onClick={props.handleOnClick}
                                readOnly
                                checked={props.isChecked}
                            />
                        </div>
                    </div>
                    {props.isChecked && (
                        <>
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
                                            value={props.containerShipmentData?.deliveryFrom}
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
                                            value={props.containerShipmentData?.deliveryTo}
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
                                            name="fullName" value={props.containerShipmentData?.fullName}
                                            onChange={handleOnChange} />
                                    </Form.Group>
                                </div>
                                <div style={{ width: "100%" }}>
                                    <Form.Label style={{ color: "#151515" }}>
                                        phone number
                                    </Form.Label>
                                    <Form.Group>
                                        <input style={{ padding: "5px", width: "100%" }} type="text" placeholder="0803382726"
                                            name="phoneNumber" value={props.containerShipmentData?.phoneNumber}
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
                                            name="zipCode" value={props.containerShipmentData?.zipCode}
                                            onChange={handleOnChange} />
                                        <input style={{ padding: "5px", width: "30%" }} type="text" placeholder="City"
                                            name="city" value={props.containerShipmentData?.city}
                                            onChange={handleOnChange} />
                                        <input style={{ padding: "5px", width: "30%" }} type="text" placeholder="Street"
                                            name="street" value={props.containerShipmentData?.street}
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
                                <textarea rows="3" col="3" name="additionalInfo"
                                    value={props.containerShipmentData?.additionalInfo}
                                    style={{
                                        width: '100%',
                                        borderRadius: "6px",
                                        border: "1px solid gray",
                                        padding: "7px"
                                    }}
                                    onChange={handleOnChange} />
                            </div>
                        </>)}
                    <div style={{ display: "flex", justifyContent: 'space-between', marginTop: "20px" }}>
                        <Button
                            onClick={props.handleContainerClearingCost}
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
                            }}><Image style={{ marginTop: "6px" }} src="/img/calc.png" alt="calc" width="18" height="15" />
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
                </>
            )}
        </>
    )
}