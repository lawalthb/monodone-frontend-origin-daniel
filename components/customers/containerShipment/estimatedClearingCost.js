import Image from "next/image";
import { Button, Form } from "react-bootstrap";
import GeneralModal from "../modal";
import Media from "@/utils/media";

export default function EstimatedClearingCost(props) {
    const { mobile, tabletAndDesktop} = Media();

    return (
        <>
            {mobile && (
                <GeneralModal
                    size="sm"
                    show={props.estimatedClearingCost}
                    onHide={() => props.setEstimatedClearingCost(false)}
                >
                    <div
                        onClick={() => props.setEstimatedClearingCost(false)}
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: '10px',
                            cursor: "pointer"
                        }}>
                        <Image src="/img/close.png" width="17" height="17" alt="close" />
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "20px 10px"
                    }}>
                        <Form.Group style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: 'center',
                            alignItems: "center"
                        }}>
                            <Form.Label style={{
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                fontWeight: "600",
                                fontSize: "15px",
                                color: "#414141"
                            }}>
                                Estimated Clearing Cost
                            </Form.Label>
                            <Form.Label style={{
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                color: "#414141",
                                textAlign: "center",
                                marginTop: '10px'
                            }}>
                                This is just as an estimated cost for your cargo, this price might change
                                after creating shipment
                            </Form.Label>
                        </Form.Group>
                        <Form.Group style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: 'center',
                            alignItems: "center",
                            marginTop: '20px',
                        }}>
                            <Image src={props.containerShipmentData.containerImage ?
                                props.containerShipmentData.containerImage : "/img/containership.png"} width="300" height="255" alt="container" />
                        </Form.Group>
                        <Form.Group style={{
                            display: "flex",
                            justifyContent: "space-between"
                        }}>
                            <Form.Label style={{
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                color: "#414141",
                                marginTop: '10px'
                            }}>
                                Quantity: 10
                            </Form.Label>
                            <Form.Label style={{
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                color: "#414141",
                                marginTop: '10px'
                            }}>
                                Weight: 10kg
                            </Form.Label>
                        </Form.Group>
                        <Form.Group style={{
                            display: "flex",
                            justifyContent: 'space-between'
                        }}>
                            <Form.Label style={{
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                color: "#414141",
                                marginTop: '10px'
                            }}>
                                Container Clearing Cost
                            </Form.Label>
                            <Form.Label style={{
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                color: "#414141",
                                marginTop: '10px',
                                color: "#00902F",
                                fontWeight: "600"
                            }}>
                                #145,000
                            </Form.Label>
                        </Form.Group>
                        {props.isChecked && (
                            <Form.Group style={{
                                display: "flex",
                                justifyContent: 'space-between'
                            }}>
                                <Form.Label style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    color: "#414141",
                                    marginTop: '10px'
                                }}>
                                    Delivery Cost
                                </Form.Label>
                                <Form.Label style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    color: "#414141",
                                    marginTop: '10px',
                                    color: "#00902F",
                                    fontWeight: "600"
                                }}>
                                    #50,000
                                </Form.Label>
                            </Form.Group>
                        )}
                        <Form.Group style={{
                            display: "flex",
                            justifyContent: 'space-between'
                        }}>
                            <Form.Label style={{
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                color: "#414141",
                                marginTop: '10px'
                            }}>
                                Total
                            </Form.Label>
                            <Form.Label style={{
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                color: "#414141",
                                marginTop: '10px',
                                color: "#00902F",
                                fontWeight: "600"
                            }}>
                                #145,000
                            </Form.Label>
                        </Form.Group>
                        <Form.Group style={{
                            display: "flex",
                            justifyContent: 'space-between'
                        }}>
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
                                border: "none",
                                marginTop: "20px"
                            }}>Make Payment</Button>
                            <Button
                                onClick={props.handleSuggestPrice}
                                style={{
                                    boxSizing: "border-box",
                                    width: "45%",
                                    fontSize: "12px",
                                    height: "40px",
                                    background: "transparent",
                                    bordeRadius: "6px",
                                    flex: "none",
                                    order: "0",
                                    flexGrow: "0",
                                    border: "1px solid #00902F",
                                    marginTop: "20px",
                                    color: "black",
                                    fontWeight: "600"
                                }}>Suggest a price</Button>
                        </Form.Group>
                    </div>
                </GeneralModal>
            )}
            {tabletAndDesktop && (
                <GeneralModal
                    size="md"
                    show={props.estimatedClearingCost}
                    onHide={() => props.setEstimatedClearingCost(false)}
                >
                    <div
                        onClick={() => props.setEstimatedClearingCost(false)}
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: '10px',
                            cursor: "pointer"
                        }}>
                        <Image src="/img/close.png" width="17" height="17" alt="close" />
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "20px 10px"
                    }}>
                        <Form.Group style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: 'center',
                            alignItems: "center"
                        }}>
                            <Form.Label style={{
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                fontWeight: "600",
                                fontSize: "15px",
                                color: "#414141"
                            }}>
                                Estimated Clearing Cost
                            </Form.Label>
                            <Form.Label style={{
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                color: "#414141",
                                textAlign: "center",
                                marginTop: '10px'
                            }}>
                                This is just as an estimated cost for your cargo, this price might change
                                after creating shipment
                            </Form.Label>
                        </Form.Group>
                        <Form.Group style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: 'center',
                            alignItems: "center",
                            marginTop: '20px'
                        }}>
                            <Image src={props.containerShipmentData.containerImage ?
                                props.containerShipmentData.containerImage : "/img/containership.png"} width="435" height="255" alt="container" />
                        </Form.Group>
                        <Form.Group style={{
                            display: "flex",
                            justifyContent: "space-between"
                        }}>
                            <Form.Label style={{
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                color: "#414141",
                                marginTop: '10px'
                            }}>
                                Quantity: 10
                            </Form.Label>
                            <Form.Label style={{
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                color: "#414141",
                                marginTop: '10px'
                            }}>
                                Weight: 10kg
                            </Form.Label>
                        </Form.Group>
                        <Form.Group style={{
                            display: "flex",
                            justifyContent: 'space-between'
                        }}>
                            <Form.Label style={{
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                color: "#414141",
                                marginTop: '10px'
                            }}>
                                Container Clearing Cost
                            </Form.Label>
                            <Form.Label style={{
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                color: "#414141",
                                marginTop: '10px',
                                color: "#00902F",
                                fontWeight: "600"
                            }}>
                                #145,000
                            </Form.Label>
                        </Form.Group>
                        {props.isChecked && (
                            <Form.Group style={{
                                display: "flex",
                                justifyContent: 'space-between'
                            }}>
                                <Form.Label style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    color: "#414141",
                                    marginTop: '10px'
                                }}>
                                    Delivery Cost
                                </Form.Label>
                                <Form.Label style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    color: "#414141",
                                    marginTop: '10px',
                                    color: "#00902F",
                                    fontWeight: "600"
                                }}>
                                    #50,000
                                </Form.Label>
                            </Form.Group>
                        )}
                        <Form.Group style={{
                            display: "flex",
                            justifyContent: 'space-between'
                        }}>
                            <Form.Label style={{
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                color: "#414141",
                                marginTop: '10px'
                            }}>
                                Total
                            </Form.Label>
                            <Form.Label style={{
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                color: "#414141",
                                marginTop: '10px',
                                color: "#00902F",
                                fontWeight: "600"
                            }}>
                                #145,000
                            </Form.Label>
                        </Form.Group>
                        <Form.Group style={{
                            display: "flex",
                            justifyContent: 'space-between'
                        }}>
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
                                border: "none",
                                marginTop: "20px"
                            }}>Make Payment</Button>
                            <Button
                                onClick={props.handleSuggestPrice}
                                style={{
                                    boxSizing: "border-box",
                                    width: "45%",
                                    fontSize: "12px",
                                    height: "40px",
                                    background: "transparent",
                                    bordeRadius: "6px",
                                    flex: "none",
                                    order: "0",
                                    flexGrow: "0",
                                    border: "1px solid #00902F",
                                    marginTop: "20px",
                                    color: "black",
                                    fontWeight: "600"
                                }}>Suggest a price</Button>
                        </Form.Group>
                    </div>
                </GeneralModal>
            )}
        </>
    )
}