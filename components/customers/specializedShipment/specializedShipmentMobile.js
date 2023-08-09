import Image from "next/image";
import { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { cities } from "../cities/cities";

export default function SpecializedShipmentMobile(props) {
    const hiddenFileInput = useRef(null)

    const handleClick = (event) => {
        hiddenFileInput.current.click()
    }

    const handleFileChange = (event) => {
        let reader = new FileReader();
        reader.onload = (e) => {
            props.setSpecializedData((prevState) => {
                const newState = {
                    ...prevState,
                    containerImage: e.target.result
                }
                return newState
            })
        };
        reader.readAsDataURL(event.target.files[0]);
    }
    console.log("specialized data", props.specializedData)
    const handleOnChange = (event) => {
        const { name, value } = event.target
        props.setSpecializedData({
            ...props.specializedData,
            [name]: value
        })
    }
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "10px",
                width: "100%"
            }}>
                <Form.Label style={{
                    fontSize: '14px',
                    fontWeight: "500",
                    color: "black"
                }}>
                    Delivery From:
                </Form.Label>
                <Form.Select style={{ color: "#343F42", width: "100%" }} required
                    name="deliveryFrom"
                    value={props.specializedData.deliveryFrom}
                    onChange={handleOnChange}
                >
                    <option value={props.specializedData.deliveryFrom}>
                        {props.specializedData.deliveryFrom}
                    </option>
                    {cities.map((city, idx) => (
                        <option key={idx} value={city}>{city}</option>
                    ))}

                </Form.Select>
                <Form.Label style={{
                    fontSize: '14px',
                    fontWeight: "500",
                    color: "black",
                    marginTop: "10px"
                }}>
                    Delivery To:
                </Form.Label>
                <Form.Select style={{ color: "#343F42", width: "100%" }} required
                    name="deliveryTo"
                    value={props.specializedData.deliveryTo}
                    onChange={handleOnChange}
                >
                    <option value={props.specializedData.deliveryTo}>
                        {props.specializedData.deliveryTo}
                    </option>
                    {cities.map((city, idx) => (
                        <option key={idx} value={city}>{city}</option>
                    ))}

                </Form.Select>
                <div style={{
                    display: 'flex',
                    marginTop: "20px",
                    width: "100%",
                    flexDirection: 'column'
                }}>
                    <Form.Label style={{
                        fontSize: '14px',
                        fontWeight: "500",
                        color: "black"
                    }}>
                        Describe your load:
                    </Form.Label>
                    <textarea
                        name="loadDescription"
                        value={props.specializedData.loadDescription}
                        onChange={handleOnChange} style={{
                            width: "100%",
                            borderRadius: "6px",
                            border: '1px solid gray'
                        }} rows="5" />
                </div>
                <div style={{
                    display: 'flex',
                    marginTop: "20px",
                    width: "100%",
                    flexDirection: 'column'
                }}>
                    <Form.Label style={{
                        fontSize: '14px',
                        fontWeight: "500",
                        color: "black"
                    }}>
                        Picture of the load:
                    </Form.Label>
                    {props.specializedData.containerImage && (
                        <Form.Group>
                            <Image style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: "20px"
                            }} src={props.specializedData.containerImage} width="200" height="200" alt="pic" />
                        </Form.Group>
                    )}
                    <Form.Group style={{
                        display: 'flex',
                        flexDirection: "column",
                        width: "100%"
                    }}>
                        <Button
                            onClick={handleClick}
                            style={{
                                boxSizing: "border-box",
                                width: "50%",
                                height: "40px",
                                background: "transparent",
                                bordeRadius: "6px",
                                flex: "none",
                                order: "0",
                                flexGrow: "0",
                                border: "none",
                                fontSize: "12px",
                                color: "#7CC427",
                                border: '1px solid #7CC427',
                                display: 'flex',
                                justifyContent: 'space-between',
                                paddingTop: '10px',

                            }}>
                            <div></div>
                            <div></div>
                            <Image src="/img/upload1.png" width="10" height="10" alt="upload" />
                            <Form.Label style={{
                                color: "#7CC427",
                                marginTop: "-3px"
                            }}>
                                Choose File
                            </Form.Label>
                            <div></div>
                            <div></div>
                        </Button>
                        {!props.specializedData.containerImage && (
                            <input style={{
                                marginLeft: "7px",
                                border: 'none',
                                fontSize: '12px'
                            }} type="text" placeholder="No picture chosen" />
                        )}
                        <input type="file"
                            ref={hiddenFileInput} onChange={handleFileChange}
                            style={{
                                display: "none"
                            }} />
                    </Form.Group>
                </div>
                <Form.Group
                    style={{
                        display: 'flex',
                        justifyContent: "center",
                        alignItems: 'center',
                        marginTop: '20px'
                    }}>
                    <Button
                        onClick={props.handleSpecializedShipRequest}
                        style={{
                            boxSizing: "border-box",
                            width: "100%",
                            height: "40px",
                            background: "#00902F",
                            bordeRadius: "4px",
                            flex: "none",
                            order: "0",
                            flexGrow: "0",
                            border: "none",
                            fontSize: "12px",
                        }}>
                        Submit Request
                    </Button>
                </Form.Group>
            </div>
        </>
    )
}