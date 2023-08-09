import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import WebsiteDetails from "./details/websiteDetails";

export default function WebsiteComp(props) {
    const [dates, setDates] = useState([])
    const [date, setDate] = useState("")
    const ref = useRef()

    useEffect(() => {
        function moderatedDates() {
            const newData = []
            const agentDates = props.adminAgentData.map((dt) => dt.dateAdded)
            const agentDatesSet = new Set(agentDates)
            for (let item of agentDatesSet) {
                newData.push(item)
            }
            setDates(newData)
        }
        moderatedDates()
    }, [props.adminAgentData])
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
                    Website Activities
                </Form.Label>
                <input style={{
                    background: "#FFFFFF",
                    padding: '9px 16px 10px',
                    borderRadius: "5px",
                    border: "1px solid #E7E7E7"
                }} type="text" placeholder="search" />
            </div>
            <hr style={{
                color: 'gray'
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
                        onChange={(event) => setDate(event.target.value)}
                    >
                        <option value={""}>Date</option>
                        {dates.map((dt, idx) => (
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
            <WebsiteDetails
                websiteData={props.websiteData}
            />
        </>
    )
}