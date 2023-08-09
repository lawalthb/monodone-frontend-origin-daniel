import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import CustomPagination from "../customPagination";

export default function LoadBoardComp(props) {
    const ref = useRef()
    console.log('cities to', props.citiesTo)

    const handleIsLoadBoardManagement = () => {
        props.setIsLoadBoardManagement(true)
        props.setIsLoadBoardRequest(false)
    }
    const handleIsLoadBoardRequest = () => {
        props.setIsLoadBoardRequest(true)
        props.setIsLoadBoardManagement(false)
    }

    useEffect(() => {
        if (props.isLoadBoardRequest) {
            props.setIsLoadBoardManagement(false)
        } else {
            props.setIsLoadBoardManagement(true)
        }
    }, [props])

    useEffect(() => {
        function moderatedCitiesFrom() {
            const newData = []
            const citiesFrom = props.adminAgentData.map((dt) => dt.deliverFrom)
            const citiesFromSet = new Set(citiesFrom)
            for (let i of citiesFromSet) {
                newData.push(i)
            }
            props.setCitiesFrom(newData)
        }
        function moderatedStatuses() {
            const newData = []
            const statuses = props.adminAgentData.map((dt) => dt.status)
            const statusesSet = new Set(statuses)
            for (let i of statusesSet) {
                newData.push(i)
            }
            props.setStatuses(newData)
        }
        function moderatedCitiesTo() {
            const newData = []
            const citiesTo = props.adminAgentData.map((dt) => dt.deliverTo)
            const citiesToSet = new Set(citiesTo)
            for (let item of citiesToSet) {
                newData.push(item)
            }
            props.setCitiesTo(newData)
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
        moderatedCitiesFrom()
        moderatedDates()
        moderatedCitiesTo()
        moderatedStatuses()
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
                    Load Board
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
                    onClick={handleIsLoadBoardManagement}
                    style={props.isLoadBoardManagement ? {
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
                    }}>LOADBOARD MANAGEMENT</Form.Label>
                <Form.Label
                    onClick={handleIsLoadBoardRequest}
                    style={props.isLoadBoardRequest ? {
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
                    }}>LOADBOARD REQUEST</Form.Label>
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
                    <>
                        <select style={{
                            width: '110px',
                            padding: '8px',
                            border: "1px solid #E7E7E7"
                        }}
                            onChange={(event) => props.setCityFrom(event.target.value)}
                        >
                            <option value="">City From</option>
                            {props.citiesFrom.length > 1 ? (
                                props.citiesFrom.map((city, idx) => (
                                    <option key={idx} value={city}>{city}</option>
                                ))
                            ) : (
                                <option value={props.citiesFrom[0]}>{props.citiesFrom[0]}</option>
                            )}

                        </select>
                        <select style={{
                            width: '110px',
                            padding: '8px',
                            border: "1px solid #E7E7E7"
                        }}
                            onChange={(event) => props.setCityTo(event.target.value)}
                        >
                            <option value="">City To</option>
                            {props.citiesTo.length > 1 ? (
                                props.citiesTo.map((city, idx) => (
                                    <option key={idx} value={city}>{city}</option>
                                ))
                            ) : (
                                <option value={props.citiesTo[0]}>{props.citiesTo[0]}</option>
                            )}
                        </select>
                        <select style={{
                            width: '110px',
                            padding: '8px',
                            border: "1px solid #E7E7E7"
                        }}
                            onChange={(event) => props.setStatus(event.target.value)}
                        >
                            <option value="">Status</option>
                            {props.statuses.map((status, idx) => (
                                <option key={idx} value={status}>{status}</option>
                            ))}
                        </select>
                    </>
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