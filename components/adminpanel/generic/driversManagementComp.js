import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";

export default function DriversManagementComp(props) {
    const ref = useRef()

    const handleIsDriversManagement = () => {
        props.setIsDriversManagement(true)
        props.setIsDriversRequest(false)
    }
    const handleIsDriversRequest = () => {
        props.setIsDriversRequest(true)
        props.setIsDriversManagement(false)
    }

    useEffect(() => {
        if (props.isDriversRequest) {
            props.setIsDriversManagement(false)
        } else {
            props.setIsDriversManagement(true)
        }
    }, [props])

    useEffect(() => {
        function moderatedRates() {
            const newData = []
            const agentRates = props.adminAgentData.map((dt) => dt.rate)
            const agentRatesSet = new Set(agentRates)
            for (let i of agentRatesSet) {
                newData.push(i)
            }
            props.setRates(newData)
        }
        function moderatedDates() {
            const newData = []
            const agentDates = props.adminAgentData.map((dt) => dt.dateAdded)
            const agentDatesSet = new Set(agentDates)
            for (let item of agentDatesSet) {
                newData.push(item)
            }
            props.setDates(newData)
        }
        function moderatedVehicleTypes() {
            const newData = []
            const agentVehicleTypes = props.adminAgentData.map((dt) => dt.vehicleType)
            const agentVehicleTypeSet = new Set(agentVehicleTypes)
            for (let item of agentVehicleTypeSet) {
                newData.push(item)
            }
            props.setVehicleTypes(newData)
        }
        moderatedVehicleTypes()
        moderatedDates()
        moderatedRates()
    }, [props])
    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                width: '100%'
            }}>
                <Form.Label
                    style={{
                        color: "black",
                        fontWeight: "600",
                        fontSize: "18px",
                        fontFamily: 'Poppins',
                        fontStyle: "normal"
                    }}>
                    Drivers
                </Form.Label>
                <input style={{
                    background: "#FFFFFF",
                    padding: '9px 16px 10px',
                    borderRadius: "5px",
                    border: "1px solid #E7E7E7"
                }} type="text" placeholder="search" />
            </div>
            <div style={{
                display: 'flex',
                marginTop: "30px"
            }}>
                <Form.Label
                    onClick={handleIsDriversManagement}
                    style={props.isDriversManagement ? {
                        fontSize: "13px",
                        color: "#00902F",
                        fontFamily: 'Poppins',
                        fontStyle: "normal",
                        fontWeight: "600",
                        borderBottom: '2px solid #00902F'
                    } : {
                        fontSize: "13px",
                        color: "#A6A6A6",
                        fontFamily: 'Poppins',
                        fontStyle: "normal",
                        fontWeight: "500"
                    }}>DRIVERS MANAGEMENT</Form.Label>
                <Form.Label
                    onClick={handleIsDriversRequest}
                    style={props.isDriversRequest ? {
                        fontSize: "13px",
                        color: "#00902F",
                        fontFamily: 'Poppins',
                        fontStyle: "normal",
                        fontWeight: "600",
                        marginLeft: '20px',
                        borderBottom: '2px solid #00902F'
                    } : {
                        fontSize: "13px",
                        color: "#A6A6A6",
                        fontFamily: 'Poppins',
                        fontStyle: "normal",
                        fontWeight: "500",
                        marginLeft: '20px'
                    }}>DRIVERS REQUEST</Form.Label>
                <Image
                    style={{
                        width: "18px",
                        maxWidth: "100%",
                        marginLeft: '10px'
                    }}
                    src="/img/badgeagent.png"
                    width="18"
                    height="18"
                    alt="badge"
                />
            </div>
            <hr style={{
                marginTop: '-10px'
            }} />
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: "10px",
            }}>
                <div style={{
                    display: 'flex',
                    gap: '4px'
                }}>
                    <input style={{
                        padding: '5px',
                        width: "120px",
                        border: "1px solid #E7E7E7"
                    }} type="text" placeholder="Date"
                        ref={ref}
                        onFocus={() => (ref.current.type = "date")}
                        onBlur={() => (ref.current.type = "text")}
                    />
                    {props.isDriversManagement && (
                        <>
                            <select style={{
                                width: '86px',
                                padding: '8px',
                                border: "1px solid #E7E7E7"
                            }}>
                                <option>City</option>
                            </select>
                            <select style={{
                                width: '86px',
                                padding: '8px',
                                border: "1px solid #E7E7E7"
                            }}
                                onChange={(event) => props.setRate(event.target.value)}
                            >
                                <option value="">Rate</option>
                                {props.rates.map((rt, idx) => (
                                    <option key={idx} value={rt}>{rt}</option>
                                ))}
                            </select>
                            <select style={{
                                width: '110px',
                                padding: '8px',
                                border: "1px solid #E7E7E7"
                            }}
                                onChange={(event) => props.setVehicleType(event.target.value)}
                            >
                                <option value="">Type vehicle</option>
                                {props.vehicleTypes.map((vt, idx) => (
                                    <option key={idx} value={vt}>{vt}</option>
                                ))}
                            </select>
                        </>
                    )}
                </div>
                <div style={{
                    display: "flex",
                    gap: '5px'
                }}>
                    <Form.Label style={{
                        fontSize: "12px",
                        marginTop: '10px'
                    }}>Sort by</Form.Label>
                    <select style={{
                        width: '100px',
                        padding: '8px',
                        border: "1px solid #E7E7E7"
                    }}
                        onChange={(event) => props.setDate(event.target.value)}
                    >
                        <option value={""}>Date</option>
                        {props.dates.map((dt, idx) => (
                            <option key={idx} value={dt}>{dt}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div style={{
                display: 'flex',
                marginTop: "10px",
            }}>
                <Form.Label style={{
                    fontSize: "12px",
                    marginTop: '10px',
                    color: "black",
                    marginLeft: '10px',
                }}>Date:</Form.Label>
                <Button style={{
                    display: 'flex',
                    background: "#E7E7E7",
                    border: 'none',
                    height: "19px",
                    padding: "7px",
                    marginTop: '10px',
                    marginLeft: "10px"
                }}>
                    <Form.Label style={{
                        fontSize: "10px",
                        color: "#A6A6A6",
                        marginTop: '-5px',
                    }}>22 July 2022</Form.Label>
                    <Image
                        style={{
                            width: "10px",
                            maxWidth: "100%",
                            marginLeft: '10px',
                            marginTop: '-3px',
                        }}
                        src="/img/canceladmin.png"
                        width="10"
                        height="10"
                        alt="badge"
                    />
                </Button>
                <Button style={{
                    display: 'flex',
                    background: "#E7E7E7",
                    border: 'none',
                    height: "19px",
                    padding: "7px",
                    marginTop: '10px',
                    marginLeft: "10px"
                }}>
                    <Form.Label style={{
                        fontSize: "10px",
                        color: "#A6A6A6",
                        marginTop: '-5px',
                    }}>22 July 2022</Form.Label>
                    <Image
                        style={{
                            width: "10px",
                            maxWidth: "100%",
                            marginLeft: '10px',
                            marginTop: '-3px',
                        }}
                        src="/img/canceladmin.png"
                        width="10"
                        height="10"
                        alt="badge"
                    />
                </Button>
            </div>
        </>
    )
}