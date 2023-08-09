import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import GeneralModal from "./modal";

export default function Location(props) {
    return (
        <GeneralModal
            size="md"
            show={props.locationModal}
            onHide={() => props.setLocationModal(false)}
            // setLocationModal={props.setLocationModal}
            action={props.action}
        >
            <Modal.Body>
                <Image
                    src={"/img/location.png"}
                    width={"400"}
                    height={"300"}
                    alt={"location"}
                />
                <div className="container">
                    <div className="modal-header" style={{ marginLeft: "-15px" }}>
                        <h5
                            className="text-dark text-center"
                            style={{ color: "#151515", fontWeight: "700px" }}
                        >
                            Delivery locations
                        </h5>
                    </div>
                    <div className="row">
                        <div className="form-group col-12">
                            <div style={{ display: "flex" }}>
                                <input
                                    type={"radio"}
                                    name="deliverFrom"
                                    onClick={() => props.handleDeliverFrom()}
                                    value={props.deliverFrom}
                                    checked={props.deliverFrom}
                                    style={{ color: "green" }}
                                />
                                <label
                                    htmlFor="fname"
                                    style={{
                                        fontSize: "13px",
                                        marginLeft: "12px",
                                        marginTop: "3px",
                                        color: "#808080",
                                    }}
                                >
                                    Deliver From <br />{" "}
                                    <Form.Label
                                        style={{ fontSize: "14px", fontWeight: "bold" }}
                                    >
                                        21 Alex Ekwueme Way, Jabi 900108, Abuja
                                    </Form.Label>
                                </label>
                            </div>
                        </div>

                        <div
                            style={{ marginTop: "30px" }}
                            className="form-group col-12"
                        >
                            <div style={{ display: "flex" }}>
                                <input
                                    type={"radio"}
                                    name="deliverTo"
                                    onChange={() => props.handleDeliverTo()}
                                    value={props.deliverTo}
                                    checked={props.deliverTo}
                                />
                                <label
                                    htmlFor="fname"
                                    style={{
                                        fontSize: "13px",
                                        marginLeft: "12px",
                                        marginTop: "3px",
                                        color: "#808080",
                                    }}
                                >
                                    Deliver To <br />{" "}
                                    <Form.Label
                                        style={{ fontSize: "14px", fontWeight: "bold" }}
                                    >
                                        Office #4, Zaria Road, 800283, Kaduna
                                    </Form.Label>
                                </label>
                            </div>
                        </div>
                    </div>

                    <Link href="#" onClick={() => props.handleParcelItem()}>
                        <button className="btn btn-success d-block w-50 mx-auto mt-4">
                            Next
                        </button>
                    </Link>
                </div>
            </Modal.Body>
        </GeneralModal>
    )
}