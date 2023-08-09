import Image from "next/image";
import { useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import CustomPagination from "./customPagination";

export default function AdminpanelBrokerList(props) {
    const ref = useRef()
    useEffect(() => {
        function moderatedDates() {
            const newData = []
            const agentDates = props.adminAgentData.map((dt) => dt.dateAdded)
            const agentDatesSet = new Set(agentDates)
            for (let item of agentDatesSet) {
                newData.push(item)
            }
            props.setDates(newData)
        }
        moderatedDates()
    }, [props])
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
                    Brokers
                </Form.Label>
                <input style={{
                    background: "#FFFFFF",
                    padding: '9px 16px 10px',
                    borderRadius: "5px",
                    border: "1px solid #E7E7E7"
                }} type="text" placeholder="search" />
            </div>
            <hr
                style={{
                    color: "gray"
                }}
            />
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
                    <select style={{
                        width: '86px',
                        padding: '8px',
                        border: "1px solid #E7E7E7"
                    }}>
                        <option>City</option>
                    </select>
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
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                padding: "30px 20px",
                marginTop: "20px",
                width: "100%",
                background: 'white'
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: 'space-between',
                    width: '100%',
                }}>
                    <div style={{
                        width: '15%',
                        color: "#A6A6A6",
                        fontSize: '12px'
                    }}>
                        Name
                    </div>
                    <div style={{
                        width: '20%',
                        color: "#A6A6A6",
                        fontSize: '12px'
                    }}>
                        E-mail
                    </div>
                    <div style={{
                        width: '20%',
                        color: "#A6A6A6",
                        fontSize: '12px'
                    }}>
                        Address
                    </div>
                    <div style={{
                        width: '15%',
                        color: "#A6A6A6",
                        fontSize: '12px'
                    }}>
                        Phone number
                    </div>
                    <div style={{
                        width: '15%',
                        color: "#A6A6A6",
                        fontSize: '12px'
                    }}>
                        Date of operation
                    </div>
                    <div style={{
                        width: '11.7%',
                        color: "#A6A6A6",
                        fontSize: '12px'
                    }}>
                        {"  "}
                    </div>
                </div>
                <hr
                    style={{
                        color: "gray"
                    }}
                />
                {props.date.length > 0 ? props.adminAgentData.filter((data) => data.dateAdded === props.date)
                    .slice((parseInt(props.pageNumber) * 10) - 10, parseInt(props.pageNumber) * 10)
                    .map((data, index) => (
                        <>
                            <div
                                key={index}
                                style={{
                                    display: "flex",
                                    justifyContent: 'space-between',
                                    width: '100%'
                                }}>
                                <div style={{
                                    width: '15%',
                                    color: "#A6A6A6",
                                    fontSize: '12px',
                                    color: "black"
                                }}>
                                    {data.businessName}
                                </div>
                                <div style={{
                                    width: '20%',
                                    color: "#A6A6A6",
                                    fontSize: '12px',
                                    color: "black"
                                }}>
                                    {data.email}
                                </div>
                                <div style={{
                                    width: '20%',
                                    color: "#A6A6A6",
                                    fontSize: '12px',
                                    color: "black"
                                }}>
                                    {data.address}
                                </div>
                                <div style={{
                                    width: '15%',
                                    color: "#A6A6A6",
                                    fontSize: '12px',
                                    color: "black"
                                }}>
                                    {data.phoneNumber}
                                </div>
                                <div style={{
                                    width: '11.7%',
                                    color: "#A6A6A6",
                                    fontSize: '12px',
                                    color: "black"
                                }}>
                                    {data.dateAdded}
                                </div>
                                <div style={{
                                    width: '13.7%',
                                    color: "#A6A6A6",
                                    fontSize: '12px'
                                }}>
                                    <Image
                                        style={{
                                            width: "19px",
                                            maxWidth: "100%",
                                            marginLeft: '10px',
                                            cursor: 'pointer'
                                        }}
                                        src={data.action[0]}
                                        width="19"
                                        height="19"
                                        alt="badge"
                                    />
                                    <Image
                                        onClick={() => {
                                            setEditModal(true)
                                            fetchData(index)
                                            setCustomerId(index)
                                        }}
                                        style={{
                                            width: "19px",
                                            maxWidth: "100%",
                                            marginLeft: '10px',
                                            cursor: 'pointer'
                                        }}
                                        src={data.action[1]}
                                        width="19"
                                        height="19"
                                        alt="badge"
                                    />
                                    <Image
                                        style={{
                                            width: "19px",
                                            maxWidth: "100%",
                                            marginLeft: '10px',
                                            cursor: 'pointer'
                                        }}
                                        src={data.action[2]}
                                        width="19"
                                        height="19"
                                        alt="badge"
                                    />
                                </div>
                            </div>
                            <hr style={{
                                marginTop: '-0.8px'
                            }} />
                        </>
                    )) : props.adminAgentData
                        .slice((parseInt(props.pageNumber) * 10) - 10, parseInt(props.pageNumber) * 10)
                        .map((data, index) => (
                            <>
                                <div
                                    key={index}
                                    style={{
                                        display: "flex",
                                        justifyContent: 'space-between',
                                        width: '100%'
                                    }}>
                                    <div style={{
                                        width: '15%',
                                        color: "#A6A6A6",
                                        fontSize: '12px',
                                        color: "black"
                                    }}>
                                        {data.businessName}
                                    </div>
                                    <div style={{
                                        width: '20%',
                                        color: "#A6A6A6",
                                        fontSize: '12px',
                                        color: "black"
                                    }}>
                                        {data.email}
                                    </div>
                                    <div style={{
                                        width: '20%',
                                        color: "#A6A6A6",
                                        fontSize: '12px',
                                        color: "black"
                                    }}>
                                        {data.address}
                                    </div>
                                    <div style={{
                                        width: '15%',
                                        color: "#A6A6A6",
                                        fontSize: '12px',
                                        color: "black"
                                    }}>
                                        {data.phoneNumber}
                                    </div>
                                    <div style={{
                                        width: '11.7%',
                                        color: "#A6A6A6",
                                        fontSize: '12px',
                                        color: "black"
                                    }}>
                                        {data.dateAdded}
                                    </div>
                                    <div style={{
                                        width: '13.7%',
                                        color: "#A6A6A6",
                                        fontSize: '12px'
                                    }}>
                                        <Image
                                            onClick={() => {
                                                setAllOrders(true)
                                                fetchOrderDetails(index)
                                            }}
                                            style={{
                                                width: "19px",
                                                maxWidth: "100%",
                                                marginLeft: '10px',
                                                cursor: 'pointer'
                                            }}
                                            src={data.action[0]}
                                            width="19"
                                            height="19"
                                            alt="badge"
                                        />
                                        <Image
                                            onClick={() => {
                                                setEditModal(true)
                                                fetchData(index)
                                                setCustomerId(index)
                                            }}
                                            style={{
                                                width: "19px",
                                                maxWidth: "100%",
                                                marginLeft: '10px',
                                                cursor: 'pointer'
                                            }}
                                            src={data.action[1]}
                                            width="19"
                                            height="19"
                                            alt="badge"
                                        />
                                        <Image
                                            style={{
                                                width: "19px",
                                                maxWidth: "100%",
                                                marginLeft: '10px',
                                                cursor: 'pointer'
                                            }}
                                            src={data.action[2]}
                                            width="19"
                                            height="19"
                                            alt="badge"
                                        />
                                    </div>
                                </div>
                                <hr style={{
                                    marginTop: '-0.8px'
                                }} />
                            </>
                        ))}
                <CustomPagination
                    adminAgentData={props.adminAgentData}
                    setPageNumbers={props.setPageNumbers}
                    activePagenumber={props.activePagenumber}
                    pageNumbers={props.pageNumbers}
                    setPageNumber={props.setPageNumber}
                    setActivePagenumber={props.setActivePagenumber}
                />
            </div>
        </>
    )
}