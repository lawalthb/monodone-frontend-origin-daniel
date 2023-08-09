import React, { useEffect, useRef, useState } from "react";
import { Button, Form, Pagination, Stack } from "react-bootstrap";
import AdminAgentListMobileData from "./adminAgentListMobileData";

export default function AdminAgentListMobile(props) {
    const ref = useRef()
    const [agentNos, setAgentNos] = useState([])
    const [weights, setWeights] = useState([])
    const [agentNo, setAgentNo] = useState("")
    const [agentWeight, setAgentWeight] = useState("")

    useEffect(() => {
        function moderatedAgentNos() {
            const newData = []
            const agentNumbers = props.adminAgentData.map((dt) => dt.agentNo)
            const agentNosSet = new Set(agentNumbers)
            for (let i of agentNosSet) {
                newData.push(i)
            }
            setAgentNos(newData)
        }

        function moderatedWeight() {
            const newData = []
            const agentWeights = props.adminAgentData.map((dt) => dt.weight)
            const agentWeightSet = new Set(agentWeights)
            for (let item of agentWeightSet) {
                if (item.startsWith("t")) {
                    newData.push(item.split("to ")[1].replace("kg", "lbs"))
                }
                if (item.startsWith("m")) {
                    newData.push(item.split("more ")[1].replace("kg", "lbs"))
                }
            }
            setWeights(newData)
        }
        moderatedAgentNos()
        moderatedWeight()
    }, [props.adminAgentData])
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: "space-between",
                marginTop: '40px'
            }}>
                <Form.Label
                    style={{
                        color: "black",
                        fontWeight: "600",
                        fontSize: "14px",
                        fontFamily: 'Poppins',
                        fontStyle: "normal"
                    }}>
                    Agents
                </Form.Label>
                <Button
                    style={{
                        display: 'flex',
                        padding: '3px',
                        background: "#00902F",
                        border: "none",
                        width: "130px",
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: "10px",
                        height: "40px"
                    }}>
                    <Form.Label style={{
                        fontSize: "18px",
                        color: "white",
                        fontWeight: '500',
                        textAlign: "center",
                        marginTop: '2px'
                    }}>
                        {"+"}
                    </Form.Label>
                    <Form.Label style={{
                        fontSize: "12px",
                        color: "white",
                        fontWeight: '500',
                        textAlign: "center",
                        marginTop: '2px'
                    }}>
                        Add agent
                    </Form.Label>
                </Button>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: "column",
                gap: "25px",
                marginTop: "20px",
                width: '100%'
            }}>
                <input style={{
                    background: "#FFFFFF",
                    padding: '9px 30px 10px',
                    borderRadius: "5px",
                    border: "1px solid #E7E7E7",
                    width: '100%',
                }} type="text" placeholder="search" />
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%'
                }}>
                    <div style={{
                        display: 'flex',
                        gap: "10px",
                        width: "48%"
                    }}>
                        <input style={{
                            padding: '5px',
                            width: "100%",
                            border: "1px solid #E7E7E7",
                        }} type="text" placeholder="Date"
                            ref={ref}
                            onFocus={() => (ref.current.type = "date")}
                            onBlur={() => (ref.current.type = "text")}
                        />
                    </div>
                    <div style={{
                        display: 'flex',
                        gap: "10px",
                        width: "48%"
                    }}>
                        <select style={{
                            width: "100%",
                            padding: '8px',
                            border: "1px solid #E7E7E7"
                        }}>
                            <option>City</option>
                        </select>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%'
                }}>
                    <div style={{
                        display: 'flex',
                        gap: "10px",
                        width: "48%"
                    }}>
                        <select style={{
                            width: '100%',
                            padding: '8px',
                            border: "1px solid #E7E7E7"
                        }}
                            onChange={(event) => setAgentWeight(event.target.value)}
                        >
                            <option value="">Weight</option>
                            {weights.map((wt, idx) => (
                                <option key={idx} value={wt}>{wt}</option>
                            ))}
                        </select>
                    </div>
                    <div style={{
                        display: 'flex',
                        gap: "10px",
                        width: "48%"
                    }}>
                        <select style={{
                            width: '100%',
                            padding: '8px',
                            border: "1px solid #E7E7E7"
                        }}
                            onChange={(event) => setAgentNo(event.target.value)}
                        >
                            <option value={""}>Agent No</option>
                            {agentNos.map((no, idx) => (
                                <option key={idx} value={no}>{no}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: "column",
                width: "100%",
            }}>
                {agentNo.length > 0 ? (
                    props.adminAgentData.filter((dt) => dt.agentNo === agentNo)
                        .slice(0, 10).map((data, idx) => (
                            <React.Fragment key={idx}>
                            <AdminAgentListMobileData
                                idx={idx}
                                data={data}
                            />
                            </React.Fragment>
                        ))
                ) : agentWeight.length > 0 ? (
                    props.adminAgentData.filter((dt) => dt.weight.split(" ")[1] === agentWeight.split(" ")[0])
                        .slice(0, 10).map((data, idx) => (
                            <React.Fragment key={idx}>
                            <AdminAgentListMobileData
                                idx={idx}
                                data={data}
                            />
                            </React.Fragment>
                        ))
                ) : props.adminAgentData.slice(0, 10).map((data, idx) => (
                    <React.Fragment key={idx}>
                    <AdminAgentListMobileData
                        idx={idx}
                        data={data}
                    />
                    </React.Fragment>
                ))}
            </div>
        </>
    )
}