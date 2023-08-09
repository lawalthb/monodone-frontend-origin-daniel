import Image from "next/image";
import { Button, Form, Modal } from "react-bootstrap";
import GeneralModal from "../modal";

export default function ClearingCost(props) {
    return (
        <GeneralModal
            size="738px"
            show={props.cleaingCost}
            onHide={() => props.setClearingCost(false)}
        >
            <Modal.Body>
                <div style={{ display: "flex", flexDirection: "column", }}>
                    <Form.Label style={{
                        fontFamily: 'Poppins',
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "14px",
                        color: '#414141',
                        letterSpacing: "0.02em",
                        marginBottom: '20px',
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',
                        marginTop: '20px'
                    }}>
                        Estimated Clearing Cost
                    </Form.Label>
                    <Form.Label style={{
                        fontFamily: 'Poppins',
                        fontStyle: "normal",
                        textAlign: "center",
                        fontSize: "12px",
                        color: 'rgba(38, 38, 38, 0.8)',
                        letterSpacing: "0.02em",
                        marginBottom: '20px',
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center'
                    }}>
                        This is just an estimated cost for your cargo, this price might change after
                        after creating shipment
                    </Form.Label>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: 'center',
                    marginRight: 'auto'
                }}>
                    <Image src="/img/car-preview.png" alt="car" width="518" height="344" />
                </div>
                <div>
                    <Form.Group style={{ display: "flex", justifyContent: "space-between", marginBottom: '20px' }}>
                        <Form.Label style={{
                            fontFamily: 'Poppins',
                            fontStyle: "normal",
                            textAlign: "center",
                            fontSize: "12px",
                            color: 'rgba(38, 38, 38, 0.8)',
                            letterSpacing: "0.02em",
                            marginBottom: '20px',
                            display: "flex",
                            justifyContent: "center",
                            alignItems: 'center'
                        }}>
                            Quantity: 10
                        </Form.Label>
                        <Form.Label style={{
                            fontFamily: 'Poppins',
                            fontStyle: "normal",
                            textAlign: "center",
                            fontSize: "12px",
                            color: 'rgba(38, 38, 38, 0.8)',
                            letterSpacing: "0.02em",
                            marginBottom: '20px',
                            display: "flex",
                            justifyContent: "center",
                            alignItems: 'center'
                        }}>
                            Weight: 10kg
                        </Form.Label>
                    </Form.Group>
                    <Form.Group style={{ display: "flex", justifyContent: "space-between" }}>
                        <Form.Label style={{
                            fontFamily: 'Poppins',
                            fontStyle: "normal",
                            textAlign: "center",
                            fontSize: "12px",
                            color: 'rgba(38, 38, 38, 0.8)',
                            letterSpacing: "0.02em",
                            marginBottom: '20px',
                            display: "flex",
                            justifyContent: "center",
                            alignItems: 'center'
                        }}>
                            Car Clearing cost
                        </Form.Label>
                        <Form.Label style={{
                            fontFamily: 'Poppins',
                            fontStyle: "normal",
                            textAlign: "center",
                            fontSize: "12px",
                            color: "#00902F",
                            letterSpacing: "0.02em",
                            marginBottom: '20px',
                            display: "flex",
                            justifyContent: "center",
                            alignItems: 'center',
                            fontWeight: "600"
                        }}>
                            #145,000
                        </Form.Label>
                    </Form.Group>
                    {props.isChecked && (
                        <Form.Group style={{ display: "flex", justifyContent: "space-between" }}>
                            <Form.Label style={{
                                fontFamily: 'Poppins',
                                fontStyle: "normal",
                                textAlign: "center",
                                fontSize: "12px",
                                color: 'rgba(38, 38, 38, 0.8)',
                                letterSpacing: "0.02em",
                                marginBottom: '20px',
                                display: "flex",
                                justifyContent: "center",
                                alignItems: 'center'
                            }}>
                                Car Delivery Cost
                            </Form.Label>
                            <Form.Label style={{
                                fontFamily: 'Poppins',
                                fontStyle: "normal",
                                textAlign: "center",
                                fontSize: "12px",
                                color: "#00902F",
                                letterSpacing: "0.02em",
                                marginBottom: '20px',
                                display: "flex",
                                justifyContent: "center",
                                alignItems: 'center',
                                fontWeight: "600"
                            }}>
                                #50,000
                            </Form.Label>
                        </Form.Group>
                    )}
                    <Form.Group style={{ display: "flex", justifyContent: "space-between" }}>
                        <Form.Label style={{
                            fontFamily: 'Poppins',
                            fontStyle: "normal",
                            textAlign: "center",
                            fontSize: "12px",
                            color: 'rgba(38, 38, 38, 0.8)',
                            letterSpacing: "0.02em",
                            marginBottom: '20px',
                            display: "flex",
                            justifyContent: "center",
                            alignItems: 'center'
                        }}>
                            Total Cost
                        </Form.Label>
                        <Form.Label style={{
                            fontFamily: 'Poppins',
                            fontStyle: "normal",
                            textAlign: "center",
                            fontSize: "12px",
                            color: "#00902F",
                            letterSpacing: "0.02em",
                            marginBottom: '20px',
                            display: "flex",
                            justifyContent: "center",
                            alignItems: 'center',
                            fontWeight: "600"
                        }}>
                            #145,000
                        </Form.Label>
                    </Form.Group>
                </div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginTop: "20px" }}>
                    <Button style={{
                        boxSizing: "border-box",
                        width: "45%",
                        height: "40px",
                        background: "#00902F",
                        bordeRadius: "6px",
                        flex: "none",
                        order: "0",
                        flexGrow: "0",
                        border: "none",
                        fontSize: "12px",
                    }}>
                        Make Payment
                    </Button>
                    <Button
                        onClick={props.handleSuggestPrice}
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
                            justifyContent: "space-between",
                        }}>
                        <Form.Label style={{
                            fontFamily: 'Poppins',
                            fontStyle: "normal",
                            fontWeight: "600",
                            fontSize: "12px",
                            lineHeight: "24px",
                            display: "flex",
                            alignItems: "center",
                            textAlign: "center",
                            letterSpacing: "0.15em",
                            color: "#151515",
                            display: "flex",
                            alignItems: 'center',
                            justifyContent: "center",
                            marginLeft: "10%"
                        }}>Suggest a Price
                        </Form.Label>
                    </Button>

                </div>
            </Modal.Body>
        </GeneralModal>
    )
}