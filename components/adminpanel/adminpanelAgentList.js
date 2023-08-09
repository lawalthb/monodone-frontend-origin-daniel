import { useEffect, useRef, useState } from "react";
import { Button, Form, Pagination, Stack } from "react-bootstrap";

function PaginationRounded() {
    return (
        <Stack
            style={{
                float: "right",
                fontSize: '12px'
            }}
            spacing={2}
        >
            <Pagination count={10} shape="rounded" />
        </Stack>
    );
}

export default function AdminpanelAgentList(props) {
    const ref = useRef()
    const [agentNos, setAgentNos] = useState([])
    const [weights, setWeights] = useState([])
    const [agentNo, setAgentNo] = useState("")
    const [agentWeight, setAgentWeight] = useState("")
    console.log(agentWeight)

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
                justifyContent: "space-between"
            }}>
                <Form.Label
                    style={{
                        color: "black",
                        fontWeight: "600",
                        fontSize: "18px",
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
                        width: "200px",
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: "10px"
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
                gap: "8px",
                marginTop: "20px"
            }}>
                <input style={{
                    background: "#FFFFFF",
                    padding: '9px 30px 10px',
                    borderRadius: "5px",
                    border: "1px solid #E7E7E7",
                    width: '40%',
                }} type="text" placeholder="search" />
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <div style={{
                        display: 'flex',
                        gap: "10px"
                    }}>
                        <input style={{
                            padding: '5px',
                            width: "120px",
                            border: "1px solid #E7E7E7",
                        }} type="text" placeholder="Date"
                            ref={ref}
                            onFocus={() => (ref.current.type = "date")}
                            onBlur={() => (ref.current.type = "text")}
                        />
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
                            onChange={(event) => setAgentWeight(event.target.value)}
                        >
                            <option value="">Weight</option>
                            {weights.map((wt, idx) => (
                                <option key={idx} value={wt}>{wt}</option>
                            ))}
                        </select>
                    </div>
                    <div style={{}}>
                        <select style={{
                            width: '100px',
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
                flexDirection: 'column',
                marginTop: '20px',
                width: '100%',
                border: "1px solid #E7E7E7",
                padding: '20px',
                background: 'white'
            }}>
                <div style={{
                    display: "flex",
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: "column",
                        width: "10%"
                    }}>
                        <Form.Label style={{
                            borderBottom: '1px solid #D1D1D1',
                            paddingBottom: '7px'
                        }}>
                            Agent No
                        </Form.Label>
                        {agentNo.length > 0 ? (
                            props.adminAgentData.filter((dt) => dt.agentNo === agentNo)
                                .slice(0, 10).map((no, idx) => (
                                    <Form.Label key={idx} style={{
                                        borderBottom: '1px solid #D1D1D1',
                                        paddingBottom: '7px'
                                    }}>
                                        {no.agentNo}
                                    </Form.Label>
                                ))
                        ) : agentWeight.length > 0 ? (
                            props.adminAgentData.filter((dt) => dt.weight.split(" ")[1] === agentWeight.split(" ")[0])
                                .slice(0, 10).map((data, idx) => (
                                    <Form.Label key={idx} style={{
                                        borderBottom: '1px solid #D1D1D1',
                                        paddingBottom: '7px'
                                    }}>
                                        {data.agentNo}
                                    </Form.Label>
                                ))
                        ) : props.adminAgentData.slice(0, 10).map((no, idx) => (
                            <Form.Label key={idx} style={{
                                borderBottom: '1px solid #D1D1D1',
                                paddingBottom: '7px'
                            }}>
                                {no.agentNo}
                            </Form.Label>
                        ))}
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: "column",
                        width: "10%",
                        marginLeft: '-20px'
                    }}>
                        <Form.Label style={{
                            borderBottom: '1px solid #D1D1D1',
                            paddingBottom: '7px'
                        }}>
                            Date added
                        </Form.Label>
                        {agentNo.length > 0 ? (
                            props.adminAgentData.filter((dt) => dt.agentNo === agentNo)
                                .slice(0, 10).map((dt, idx) => (
                                    <Form.Label key={idx} style={{
                                        borderBottom: '1px solid #D1D1D1',
                                        paddingBottom: '7px'
                                    }}>
                                        {dt.dateAdded}
                                    </Form.Label>
                                ))
                        ) : agentWeight.length > 0 ? (
                            props.adminAgentData.filter((dt) => dt.weight.split(" ")[1] === agentWeight.split(" ")[0])
                                .slice(0, 10).map((data, idx) => (
                                    <Form.Label key={idx} style={{
                                        borderBottom: '1px solid #D1D1D1',
                                        paddingBottom: '7px'
                                    }}>
                                        {data.dateAdded}
                                    </Form.Label>
                                ))
                        ) : props.adminAgentData.slice(0, 10).map((dt, idx) => (
                            <Form.Label key={idx} style={{
                                borderBottom: '1px solid #D1D1D1',
                                paddingBottom: '7px'
                            }}>
                                {dt.dateAdded}
                            </Form.Label>
                        ))}
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: "column",
                        width: "20%",
                        marginLeft: '-1px'
                    }}>
                        <Form.Label style={{
                            borderBottom: '1px solid #D1D1D1',
                            paddingBottom: '7px'
                        }}>
                            Name
                        </Form.Label>
                        {agentNo.length > 0 ? (
                            props.adminAgentData.filter((dt) => dt.agentNo === agentNo)
                                .slice(0, 10).map((dt, idx) => (
                                    <Form.Label key={idx} style={{
                                        borderBottom: '1px solid #D1D1D1',
                                        paddingBottom: '7px'
                                    }}>
                                        {dt.businessName}
                                    </Form.Label>
                                ))
                        ) : agentWeight.length > 0 ? (
                            props.adminAgentData.filter((dt) => dt.weight.split(" ")[1] === agentWeight.split(" ")[0])
                                .slice(0, 10).map((data, idx) => (
                                    <Form.Label key={idx} style={{
                                        borderBottom: '1px solid #D1D1D1',
                                        paddingBottom: '7px'
                                    }}>
                                        {data.businessName}
                                    </Form.Label>
                                ))
                        ) : props.adminAgentData.slice(0, 10).map((dt, idx) => (
                            <Form.Label key={idx} style={{
                                borderBottom: '1px solid #D1D1D1',
                                paddingBottom: '7px'
                            }}>
                                {dt.businessName}
                            </Form.Label>
                        ))}
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: "column",
                        width: "40%",
                        marginLeft: '-30px'
                    }}>
                        <Form.Label style={{
                            borderBottom: '1px solid #D1D1D1',
                            paddingBottom: '7px'
                        }}>
                            Address
                        </Form.Label>
                        {agentNo.length > 0 ? (
                            props.adminAgentData.filter((dt) => dt.agentNo === agentNo)
                                .slice(0, 10).map((dt, idx) => (
                                    <Form.Label key={idx} style={{
                                        borderBottom: '1px solid #D1D1D1',
                                        paddingBottom: '7px'
                                    }}>
                                        {dt.address}
                                    </Form.Label>
                                ))
                        ) : agentWeight.length > 0 ? (
                            props.adminAgentData.filter((dt) => dt.weight.split(" ")[1] === agentWeight.split(" ")[0])
                                .slice(0, 10).map((data, idx) => (
                                    <Form.Label key={idx} style={{
                                        borderBottom: '1px solid #D1D1D1',
                                        paddingBottom: '7px'
                                    }}>
                                        {data.address}
                                    </Form.Label>
                                ))
                        ) : props.adminAgentData.slice(0, 10).map((dt, idx) => (
                            <Form.Label key={idx} style={{
                                borderBottom: '1px solid #D1D1D1',
                                paddingBottom: '7px'
                            }}>
                                {dt.address}
                            </Form.Label>
                        ))}
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: "column",
                        width: "10%",
                        marginLeft: '-70px'
                    }}>
                        <Form.Label style={{
                            borderBottom: '1px solid #D1D1D1',
                            paddingBottom: '7px'
                        }}>
                            Weight
                        </Form.Label>
                        {agentNo.length > 0 ? (
                            props.adminAgentData.filter((dt) => dt.agentNo === agentNo)
                                .slice(0, 10).map((dt, idx) => (
                                    <Form.Label key={idx} style={{
                                        borderBottom: '1px solid #D1D1D1',
                                        paddingBottom: '7px'
                                    }}>
                                        {dt.weight}
                                    </Form.Label>
                                ))
                        ) : agentWeight.length > 0 ? (
                            props.adminAgentData.filter((dt) => dt.weight.split(" ")[1] === agentWeight.split(" ")[0])
                                .slice(0, 10).map((data, idx) => (
                                    <Form.Label key={idx} style={{
                                        borderBottom: '1px solid #D1D1D1',
                                        paddingBottom: '7px'
                                    }}>
                                        {data.weight}
                                    </Form.Label>
                                ))
                        ) : props.adminAgentData.slice(0, 10).map((dt, idx) => (
                            <Form.Label key={idx} style={{
                                borderBottom: '1px solid #D1D1D1',
                                paddingBottom: '7px'
                            }}>
                                {dt.weight}
                            </Form.Label>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}