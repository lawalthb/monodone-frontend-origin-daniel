import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import GeneralModal from "../modal";


export default function SuggestPriceModal(props) {
    const handleOnChange = (e) => {
        const { name, value } = e.target
        props.setSuggestPriceData({
            [name]: value
        })
    }
    return (
        <GeneralModal
            size="738px"
            show={props.suggestPrice}
            onHide={() => props.setSuggestPrice(false)}
            style={{ marginTop: "5%" }}
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
                        Suggest a Price
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
                        Input a price that is a ok for you
                    </Form.Label>
                </div>
                <div style={{ display: "flex", justifyContent: 'center', alignItems: "center", margin: "auto" }}>
                    {props.suggestPriceError ? (<span style={{
                        color: "red",
                        fontSize: "11px",
                        fontStyle: "italic",
                        marginBottom: '10px'
                    }}>All Fields are required</span>) : ""}
                </div>

                <div style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}>
                    <Form.Label style={{
                        fontFamily: 'Poppins',
                        fontStyle: "normal",
                        fontSize: "12px",
                        color: '#151515',
                        letterSpacing: "0.02em",
                        marginBottom: '5px',
                    }}>
                        Car Clearing cost
                    </Form.Label>
                    <input type="text" width="100%" name="carClearingCost"
                        value={props.suggestPriceData.carClearingCost}
                        onChange={handleOnChange} />
                    {props.isChecked && (
                        <>
                            <Form.Label style={{
                                fontFamily: 'Poppins',
                                fontStyle: "normal",
                                fontSize: "12px",
                                color: '#151515',
                                letterSpacing: "0.02em",
                                marginBottom: '10px',
                                marginTop: "10px"
                            }}>
                                Car Delivery cost
                            </Form.Label>
                            <input type="text" width="100%" name="carDeliveryCost"
                                value={props.suggestPriceData.carDeliveryCost}
                                onChange={handleOnChange} />
                        </>

                    )}
                    <Form.Label style={{
                        fontFamily: 'Poppins',
                        fontStyle: "normal",
                        fontSize: "12px",
                        color: '#151515',
                        letterSpacing: "0.02em",
                        marginBottom: '5px',
                        marginTop: "10px"
                    }}>
                        Total Cost
                    </Form.Label>
                    <input type="text" width="100%" name="carTotalCost"
                        value={props.suggestPriceData.carTotalCost}
                        onChange={handleOnChange} />
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: '20px' }}>
                    <Button
                        onClick={props.handlePostLoad}
                        style={{
                            boxSizing: "border-box",
                            width: "50%",
                            height: "40px",
                            background: "#00902F",
                            bordeRadius: "6px",
                            flex: "none",
                            order: "0",
                            flexGrow: "0",
                            border: "none",
                            fontSize: "12px",
                        }}>
                        Post Load
                    </Button>
                </div>
            </Modal.Body>
        </GeneralModal>
    )
}