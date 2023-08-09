import Image from "next/image";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function FilteringComp(props) {
    const [filterHere, setFilterHere] = useState(false)
    const [byCity, setByCity] = useState(false)
    const [byRate, setByRate] = useState(false)
    const [byVehicleType, setByVehicleType] = useState(false)

    const handleMainOption = () => {
        setByCity(false)
        setByRate(false)
        setByVehicleType(false)
        setFilterHere(true)
    }

    const handleByVehicleType = () => {
        setByVehicleType(true)
        setFilterHere(false)
    }

    const handleByRate = () => {
        setByRate(true)
        setFilterHere(false)
    }

    const handleByCity = () => {
        setByCity(true)
        setFilterHere(false)
    }
    useEffect(() => {
        function moderatedVehicleTypes() {
            const newData = []
            const vehicleTypes = props.adminAgentData.map((dt) => dt.vehicleType)
            const vehicleTypesSet = new Set(vehicleTypes)
            for (let i of vehicleTypesSet) {
                newData.push(i)
            }
            props.setVehicleTypes(newData)
        }
        function moderatedRates() {
            const newData = []
            const rates = props.adminAgentData.map((dt) => dt.rate)
            const ratesSet = new Set(rates)
            for (let i of ratesSet) {
                newData.push(i)
            }
            props.setRates(newData)
        }
        function moderatedDates() {
            const newData = []
            const date = props.adminAgentData.map((dt) => dt.dateAdded)
            const dateSet = new Set(date)
            for (let i of dateSet) {
                newData.push(i)
            }
            props.setDates(newData)
        }
        moderatedDates()
        moderatedVehicleTypes()
        moderatedRates()
    }, [props])
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: "space-between",
                gap: '8px',
                marginTop: '20px',
                marginBottom: '30px'
            }}>
                {byCity ? (
                    <select
                        onChange={(event) => event.target.value === "Back To Main Options" ?
                            handleMainOption() : undefined}
                        style={{
                            border: "1px solid #A6A6A6",
                            borderRadius: '4px',
                            padding: "7px"
                        }}>
                        <option>City</option>
                        <option value="Back To Main Options">
                            Back To Main Options
                        </option>
                    </select>
                ) : byRate ? (
                        <select
                            onChange={(event) => event.target.value === "Back To Main Options" ?
                                handleMainOption() : props.setRate(event.target.value)}
                            style={{
                                border: "1px solid #A6A6A6",
                                borderRadius: '4px',
                                padding: "7px"
                            }}>
                            <option value="">Rate</option>
                            {props.rates.map((rate, idx) => (
                                <option key={idx} value={rate}>{rate}</option>
                            ))}
                            <option value="Back To Main Options">
                                Back To Main Options
                            </option>
                        </select>
                ) : byVehicleType ? (
                        <select
                            onChange={(event) => event.target.value === "Back To Main Options" ?
                                handleMainOption() : props.setVehicleType(event.target.value)}
                            style={{
                                border: "1px solid #A6A6A6",
                                borderRadius: '4px',
                                padding: "7px"
                            }}>
                            <option value="">Vehicle type</option>
                            {props.vehicleTypes.map((vtype, idx) => (
                                <option key={idx} value={vtype}>{vtype}</option>
                            ))}
                            <option value="Back To Main Options">
                                Back To Main Options
                            </option>
                        </select>
                ) : filterHere ? (
                    <Button
                        onClick={() => setFilterHere((prevState) => !prevState)}
                        style={{
                            display: 'flex',
                            gap: "20px",
                            background: 'transparent',
                            border: "1px solid #A6A6A6",
                            padding: '3px',
                            width: "44%",
                            height: '34px',
                        }}>
                        <Image
                            style={{
                                width: "18px",
                                maxWidth: "100%",
                                marginTop: '5px',
                                marginLeft: "6px"
                            }}
                            src="/img/filteradmin.png"
                            width="18"
                            height="18"
                            alt="badge"
                        />
                        <Form.Label style={{
                            fontWeight: "400",
                            fontSize: "13px",
                            color: "#151515",
                            marginTop: '3px'
                        }}>
                            Filter here
                        </Form.Label>
                    </Button>
                ) : (
                    <Button
                        onClick={() => setFilterHere((prevState) => !prevState)}
                        style={{
                            display: 'flex',
                            gap: "20px",
                            background: 'transparent',
                            border: "1px solid #A6A6A6",
                            padding: '3px',
                            width: "44%",
                            height: '34px',
                        }}>
                        <Image
                            style={{
                                width: "18px",
                                maxWidth: "100%",
                                marginTop: '5px',
                                marginLeft: "6px"
                            }}
                            src="/img/filteradmin.png"
                            width="18"
                            height="18"
                            alt="badge"
                        />
                        <Form.Label style={{
                            fontWeight: "400",
                            fontSize: "13px",
                            color: "#151515",
                            marginTop: '3px'
                        }}>
                            Filter here
                        </Form.Label>
                    </Button>
                )}
                <div style={filterHere ? {
                    display: 'block',
                    position: 'absolute',
                    marginTop: "2.5rem",
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: "260px",
                    background: "white",
                    zIndex: 9
                } : {
                    display: 'none'
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <div style={{
                            display: 'flex',
                            gap: "5px"
                        }}>
                            <Form.Label
                                onClick={handleByCity}
                                style={{
                                    fontWeight: "400",
                                    fontSize: "13px",
                                    color: "#151515",
                                    marginTop: '3px',
                                    width: 'fit-content',
                                    background: "rgba(124, 196, 39, 0.2)",
                                    padding: '5px',
                                    cursor: "pointer",
                                    borderRadius: '4px'
                                }}>
                                By City
                            </Form.Label>
                        </div>
                            <>
                                <div style={{
                                    display: 'flex',
                                    gap: "5px"
                                }}>
                                    <Form.Label
                                        onClick={handleByRate}
                                        style={{
                                            fontWeight: "400",
                                            fontSize: "13px",
                                            color: "#151515",
                                            marginTop: '3px',
                                            width: 'fit-content',
                                            background: "rgba(124, 196, 39, 0.2)",
                                            padding: '5px',
                                            cursor: "pointer",
                                            borderRadius: '4px'
                                        }}>
                                        By Rate
                                    </Form.Label>
                                    <Form.Label
                                        onClick={handleByVehicleType}
                                        style={{
                                            fontWeight: "400",
                                            fontSize: "13px",
                                            color: "#151515",
                                            marginTop: '3px',
                                            width: 'fit-content',
                                            background: "rgba(124, 196, 39, 0.2)",
                                            padding: '5px',
                                            cursor: "pointer",
                                            borderRadius: '4px'
                                        }}>
                                        By Vehicle type
                                    </Form.Label>
                                </div>
                            </>
                    </div>
                </div>
                <div style={{
                    display: 'flex'
                }}>
                    <Form.Label style={{
                        color: "#A6A6A6",
                        fontWeight: "400",
                        fontSize: "12px",
                        marginRight: "10px",
                        marginTop: "10px",
                        fontWeight: '500'
                    }}>
                        Sort by:
                    </Form.Label>
                    <select style={{
                        border: "1px solid #A6A6A6",
                        borderRadius: '4px',
                        padding: "7px"
                    }}
                        onChange={(event) => props.setDate(event.target.value)}
                    >
                        <option value="">Date</option>
                        {props.dates.map((date, idx) => (
                            <option key={idx} value={date}>{date}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div style={{
                display: 'flex',
            }}>
                <Form.Label style={{
                    fontSize: "12px",
                    marginTop: '10px',
                    color: "black"
                }}>Weight:</Form.Label>
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
                    }}>more 30 kg</Form.Label>
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
                <Form.Label style={{
                    fontSize: "12px",
                    marginTop: '10px',
                    color: "black",
                    marginLeft: '40px',
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
            </div>
        </>
    )
}