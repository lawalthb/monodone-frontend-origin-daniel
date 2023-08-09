import Image from "next/image";
import { Button, Form, Modal } from "react-bootstrap";
import GeneralModal from "../../customers/modal";

export default function EditModal(props) {
    return (
        <>
            <GeneralModal
                size="md"
                show={props.editModal}
                onHide={() => {
                    props.setEditModal(false)
                    props.handleClearData()
                }}
                style={props.style}
            >
                <Modal.Body style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%'
                }}>
                    <div
                        onClick={() => {
                            props.setEditModal(false)
                            props.handleClearData()
                        }}
                        style={{
                            position: "absolute",
                            top: "-1rem",
                            right: '-0.8rem',
                            cursor: "pointer"
                        }}>
                        <Image src="/img/close.png" width="14" height="14" alt="close" />
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontFamily: 'Poppins',
                        fontStyle: "normal",
                        fontWeight: 600,
                    }}>
                        {props.caption}
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: 'space-between',
                        marginTop: "20px"
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: "48%"
                        }}>
                            <Form.Label style={{
                                fontFamily: 'Poppins',
                                fontStyle: "normal",
                                color: "#808080",
                                fontSize: "12px"
                            }}>
                                {(props.isLoadBoardManagement
                                    || props.isOrders
                                    || props.isLoadboardManagement
                                    || props.isOrders) ?
                                    "Sender" :
                                    "First name"
                                }
                            </Form.Label>
                            {(props.isLoadBoardManagement
                                || props.isOrders
                                || props.isLoadboardManagement
                                || props.isOrders) ?
                                <input style={{
                                    border: "1px solid #E7E7E7",
                                    width: "100%",
                                    paddingLeft: "10px",
                                    fontSize: "12px"
                                }} type="text" placeholder="Alex Ekwueme" />
                                :
                                <input style={{
                                    border: "1px solid #E7E7E7",
                                    width: "100%",
                                    paddingLeft: "10px",
                                    fontSize: "12px"
                                }} type="text" defaultValue={props.firstName}
                                    onChange={props.onChangeFirstName} />
                            }
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: "48%"
                        }}>
                            <Form.Label style={{
                                fontFamily: 'Poppins',
                                fontStyle: "normal",
                                color: "#808080",
                                fontSize: "12px"
                            }}>
                                {(props.isLoadBoardManagement
                                    || props.isOrders
                                    || props.isLoadboardManagement
                                    || props.isOrders) ?
                                    "Recipient" :
                                    "Last name"
                                }
                            </Form.Label>
                            {(props.isLoadBoardManagement
                                || props.isOrders
                                || props.isLoadboardManagement
                                || props.isOrders) ?
                                <input style={{
                                    border: "1px solid #E7E7E7",
                                    width: "100%",
                                    paddingLeft: "10px",
                                    fontSize: "12px"
                                }} type="text" placeholder="Alex Ekwueme" />
                                :
                                <input style={{
                                    border: "1px solid #E7E7E7",
                                    width: "100%",
                                    paddingLeft: "10px",
                                    fontSize: "12px"
                                }} type="text" defaultValue={props.lastName}
                                    onChange={props.onChangeLastName} />
                            }
                        </div>
                    </div>
                    <Form.Label style={{
                        fontFamily: 'Poppins',
                        fontStyle: "normal",
                        color: "#808080",
                        fontSize: "12px",
                        marginTop: "10px"
                    }}>
                        {(props.isLoadBoardManagement
                            || props.isOrders
                            || props.isLoadboardManagement
                            || props.isOrders) ?
                            "From" :
                            "Address"
                        }
                    </Form.Label>
                    {(props.isLoadBoardManagement
                        || props.isOrders
                        || props.isLoadboardManagement
                        || props.isOrders) ?
                        <input style={{
                            border: "1px solid #E7E7E7",
                            width: "100%",
                            paddingLeft: "10px",
                            fontSize: "12px"
                        }} type="text" placeholder="21 Alex Ekwueme Way, Jaabi" />
                        :
                        <input style={{
                            border: "1px solid #E7E7E7",
                            width: "100%",
                            paddingLeft: "10px",
                            fontSize: "12px"
                        }} type="text" defaultValue={props.address}
                            onChange={props.onChangeAddress} />
                    }

                    <Form.Label style={{
                        fontFamily: 'Poppins',
                        fontStyle: "normal",
                        color: "#808080",
                        fontSize: "12px",
                        marginTop: "10px"
                    }}>
                        {(props.isLoadBoardManagement
                            || props.isOrders
                            || props.isLoadboardManagement
                            || props.isOrders) ?
                            "To" :
                            "Phone Number"
                        }
                    </Form.Label>
                    {(props.isLoadBoardManagement
                        || props.isOrders
                        || props.isLoadboardManagement
                        || props.isOrders) ?
                        <input style={{
                            border: "1px solid #E7E7E7",
                            width: "100%",
                            paddingLeft: "10px",
                            fontSize: "12px"
                        }} type="text" placeholder="21 Alex Ekwueme Way, Jaabi" />
                        :
                        <input style={{
                            border: "1px solid #E7E7E7",
                            width: "100%",
                            paddingLeft: "10px",
                            fontSize: "12px"
                        }} type="text" defaultValue={props.phoneNumber}
                            onChange={props.onChangePhoneNumber} />
                    }
                    {(props.isLoadBoardManagement
                        || props.isOrders
                        || props.isLoadboardManagement
                        || props.isOrders) && (
                            <>
                                <Form.Label style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: "normal",
                                    color: "#808080",
                                    fontSize: "12px",
                                    marginTop: "10px"
                                }}>
                                    Status
                                </Form.Label>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}>
                                        <div style={{
                                            display: "flex"
                                        }}>
                                            <Form.Check type="radio" id={`default-radio`} />
                                            <Form.Label style={{
                                                fontFamily: 'Poppins',
                                                fontStyle: "normal",
                                                color: "#808080",
                                                fontSize: "12px",
                                                marginTop: "4px",
                                                marginLeft: "10px"
                                            }}>
                                                Created
                                            </Form.Label>
                                        </div>
                                        <div style={{
                                            display: "flex"
                                        }}>
                                            <Form.Check type="radio" />
                                            <Form.Label style={{
                                                fontFamily: 'Poppins',
                                                fontStyle: "normal",
                                                color: "#808080",
                                                fontSize: "12px",
                                                marginTop: "4px",
                                                marginLeft: "10px"
                                            }}>
                                                Waiting
                                            </Form.Label>
                                        </div>
                                        <div style={{
                                            display: "flex"
                                        }}>
                                            <Form.Check type="radio" />
                                            <Form.Label style={{
                                                fontFamily: 'Poppins',
                                                fontStyle: "normal",
                                                color: "#808080",
                                                fontSize: "12px",
                                                marginTop: "4px",
                                                marginLeft: "10px"
                                            }}>
                                                On the way
                                            </Form.Label>
                                        </div>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}>
                                        <div style={{
                                            display: "flex"
                                        }}>
                                            <Form.Check type="radio" id={`default-radio`} />
                                            <Form.Label style={{
                                                fontFamily: 'Poppins',
                                                fontStyle: "normal",
                                                color: "#808080",
                                                fontSize: "12px",
                                                marginTop: "4px",
                                                marginLeft: "10px"
                                            }}>
                                                Arrived
                                            </Form.Label>
                                        </div>
                                        <div style={{
                                            display: "flex"
                                        }}>
                                            <Form.Check type="radio" />
                                            <Form.Label style={{
                                                fontFamily: 'Poppins',
                                                fontStyle: "normal",
                                                color: "#808080",
                                                fontSize: "12px",
                                                marginTop: "4px",
                                                marginLeft: "10px"
                                            }}>
                                                Issued
                                            </Form.Label>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    {props.isDriversManagement && (
                        <>
                            <Form.Label style={{
                                fontFamily: 'Poppins',
                                fontStyle: "normal",
                                color: "#808080",
                                fontSize: "12px",
                                marginTop: "10px"
                            }}>
                                Type vehicle
                            </Form.Label>
                            <select style={{
                                width: '100%',
                                padding: '8px',
                                border: "1px solid #E7E7E7"
                            }}
                                onChange={props.onChangeVehicleType}
                            >
                                <option defaultValue={props.vehicleType}>{props.vehicleType}</option>
                                {props.vehicleTypes.map((dt, idx) => (
                                    <option key={idx} value={dt}>{dt}</option>
                                ))}
                            </select>
                        </>
                    )}
                    {(props.isCustomers || props.isBrokersManagement
                        || props.isEmployeesManagement
                        || props.isEmployeeManagement) && (
                            <>
                                <Form.Label style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: "normal",
                                    color: "#808080",
                                    fontSize: "12px",
                                    marginTop: "10px"
                                }}>
                                    Email
                                </Form.Label>
                                <input style={{
                                    border: "1px solid #E7E7E7",
                                    width: "100%",
                                    paddingLeft: "10px",
                                    fontSize: "12px"
                                }} type="text" defaultValue={props.editEmail}
                                    onChange={props.onChangeEditEmail} />
                            </>
                        )}
                    {(props.isEmployeesManagement
                        || props.isEmployeeManagement) && (
                            <>
                                <Form.Label style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: "normal",
                                    color: "#808080",
                                    fontSize: "12px",
                                    marginTop: "10px"
                                }}>
                                    Department
                                </Form.Label>
                                <input style={{
                                    border: "1px solid #E7E7E7",
                                    width: "100%",
                                    paddingLeft: "10px",
                                    fontSize: "12px"
                                }} type="text" defaultValue={props.editDept}
                                    onChange={props.onChangeEditDept} />
                                <Form.Label style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: "normal",
                                    color: "#808080",
                                    fontSize: "12px",
                                    marginTop: "10px"
                                }}>
                                    Upload documents
                                </Form.Label>
                                <select style={{
                                    width: '100%',
                                    padding: '8px',
                                    border: "1px solid #E7E7E7"
                                }}>
                                    <option defaultValue={"Dock receipt"}>Dock receipt</option>
                                </select>
                                <Form.Label style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: "normal",
                                    color: "#808080",
                                    fontSize: "12px",
                                    marginTop: "10px"
                                }}>
                                    Salary
                                </Form.Label>
                                <input style={{
                                    border: "1px solid #E7E7E7",
                                    width: "100%",
                                    paddingLeft: "10px",
                                    fontSize: "12px"
                                }} type="text" defaultValue={"#200,000"} />
                            </>
                        )}
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',
                        marginTop: "20px"
                    }}>
                        <Button
                            onClick={props.handleEdit}
                            style={{
                                background: "#00902F",
                                border: "none",
                                padding: "7px",
                                color: "white",
                                width: '50%'
                            }}>
                            {(props.isLoadBoardManagement
                                || props.isOrders
                                || props.isLoadboardManagement) ? "Ok" : "Save"}
                        </Button>
                    </div>
                </Modal.Body>
            </GeneralModal>
        </>
    )
}