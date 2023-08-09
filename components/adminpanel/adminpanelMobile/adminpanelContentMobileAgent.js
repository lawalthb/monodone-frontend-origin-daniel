import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import AdminAgentListMobile from "./adminAgentListMobile";
import AdminpanelMobileAgentData from "./adminpanelMobileAgentData";
import ConfirmChangesMobile from "./confirmChangesMobile";

const adminChanges = [
    {
        name: "AGENT CHANGES",
        agentNo: "03456"
    },
    {
        name: "DRIVER CHANGES",
        agentNo: "03477"
    },
    {
        name: "DRIVER CHANGES",
        agentNo: "03482"
    },
    {
        name: "AGENT CHANGES",
        agentNo: "03490"
    },
]

export default function AdminpanelContentMobileAgent(props) {
    const ref = useRef()
    const [isSearch, setIsSearch] = useState(false)
    const [isAgentManagement, setIsAgentManagement] = useState(false)
    const [isAgentRequest, setIsAgentRequest] = useState(false)
    const [agentList, setAgentList] = useState(false)
    const [data, setData] = useState([])
    const [noOfData, setNoOfData] = useState()
    const [agentNos, setAgentNos] = useState([])
    const [agentNo, setAgentNo] = useState("")
    const [badgeContent, setBadgeContent] = useState(false)
    const [changes, setChanges] = useState(false)
    const [agentNumber, setAgentNumber] = useState('')
    const [confirmChangesMobile, setConnfirmChangesMobile] = useState(false)

    console.log("is agent request", isAgentRequest)

    const handleChange = (event) => {
        const { name, value } = event.target
        setNoOfData({
            [name]: value
        })
    }

    useEffect(() => {
        const handler = (event) => {
            if (badgeContent && ref.current && !ref.current.contains(event.target)) {
                setBadgeContent(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler);
        };
    }, [badgeContent, isAgentRequest]);


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
        moderatedAgentNos()
    }, [props.adminAgentData])

    useEffect(() => {
        if (isAgentRequest) {
            setIsAgentManagement(false)
        } else {
            setIsAgentManagement(true)
        }
    }, [setIsAgentManagement, setIsAgentManagement])

    useEffect(() => {
        const adminData = []
        for (let i = 0; i <= props.adminAgentData.length; i++) {
            if (i % 10 === 0) {
                adminData.push(i)
            }
        }
        setData(adminData)
    }, [props.adminAgentData])

    useEffect(() => {
        setNoOfData(parseInt(10))
    }, [])

    return (
        <>
            {(isAgentManagement || isAgentRequest) && (
                <div
                    ref={ref}
                    style={props.backdrop ? {
                        padding: 0
                    } : {
                        display: 'flex',
                        justifyContent: "space-between",
                        marginTop: '10px',
                        background: "transparent",
                        padding: "8px"
                    }}>
                    <div style={badgeContent ? {
                        display: "block",
                        position: 'absolute',
                        top: '115px',
                        right: "50px",
                        width: "241px",
                        padding: "30px 20px 20px 20px",
                        background: "#FFFFFF",
                        boxSizing: "border-box",
                        height: "340px",
                        borderRadius: '5px',
                        zIndex: 100,
                        boxShadow: "1px solid #E7E7E7",
                        border: "1px solid #E7E7E7"
                    } : {
                        display: 'none'
                    }}>
                        <Image
                            onClick={() => setBadgeContent((prevState) => !prevState)}
                            style={{
                                cursor: "pointer",
                                margin: '6px 0px 0px 5px',
                                position: "absolute",
                                right: '6px',
                                top: "-3px"
                            }}
                            src="/img/closebadge.png"
                            width="12"
                            height="12"
                            alt="close" />
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            width: '100%',
                            padding: "2px 16px 16px 8px",
                        }}>
                            {adminChanges.map((data, idx) => {
                                return (
                                    <div
                                        key={idx}
                                        style={{
                                            display: 'flex',
                                            justifyContent: "space-between",
                                            borderBottom: "1px solid #E7E7E7",
                                            marginTop: '7px'
                                        }}>
                                        <div style={{
                                            display: "flex",
                                            flexDirection: 'column'
                                        }}>
                                            <Form.Label style={{
                                                fontSize: '12px',
                                                fontWeight: "500",
                                                color: "black"
                                            }}>
                                                {data.name}
                                            </Form.Label>
                                            <Form.Label style={{
                                                fontSize: '10px',
                                                fontWeight: "400",
                                                color: "black"
                                            }}>
                                                {`Agent ${data.agentNo} wants to make a change`}
                                            </Form.Label>
                                        </div>
                                        <div>
                                            <Button
                                                onClick={() => {
                                                    // setChanges(true);
                                                    setAgentNumber(data.agentNo);
                                                    // props.setBackdrop(true);
                                                    setBadgeContent(false)
                                                    setConnfirmChangesMobile(true)
                                                }}
                                                style={{
                                                    background: 'transparent',
                                                    fontSize: '12px',
                                                    color: "#7CC427",
                                                    border: '1px solid #D1D1D1',
                                                    height: '30px'
                                                }}>Watch</Button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <Form.Label style={{
                        color: "black",
                        fontWeight: "500",
                        fontSize: "14px",
                        marginTop: '22px'
                    }}>
                        Agents
                    </Form.Label>
                    <div style={{
                        display: "flex",
                        gap: '10px',
                        marginTop: '20px'
                    }}>
                        <div style={isSearch ? {
                            position: "absolute",
                            top: "5.8rem",
                            right: "30px"
                        } : {
                            display: 'none'
                        }}>
                            <Image
                                onClick={() => setIsSearch(false)}
                                style={{
                                    width: "14px",
                                    maxWidth: "100%",
                                }}
                                src="/img/close.png"
                                width="14"
                                height="14"
                                alt="badge"
                            />
                        </div>
                        <Image
                            onClick={() => setBadgeContent(true)}
                            style={{
                                width: "25px",
                                maxWidth: "100%",
                            }}
                            src="/img/adminbadge.png"
                            width="25"
                            height="22"
                            alt="badge"
                        />
                        {isSearch && (
                            <input style={{
                                height: "30px",
                                padding: '5px',
                                border: "1px solid #A6A6A6",
                                borderRadius: '5px'
                            }} type="text" placeholder="search" />
                        )}
                        <Image
                            onClick={() => setIsSearch(true)}
                            style={isSearch ? {
                                display: 'none'
                            } : {
                                width: "20px",
                                maxWidth: "100%",
                            }}
                            src="/img/searchadmin.png"
                            width="20"
                            height="20"
                            alt="badge"
                        />
                    </div>
                </div>
            )}
            {(isAgentManagement || isAgentRequest) && (
                <>
                    <div style={{
                        display: 'flex',
                        gap: '15px'
                    }}>
                        <Form.Label
                            onClick={() => {
                                setIsAgentManagement(true);
                                setIsAgentRequest(false)
                            }}
                            style={isAgentManagement ? {
                                color: "#00902F",
                                fontWeight: "500",
                                fontSize: "12px",
                                marginTop: '20px',
                                borderBottom: "2px solid #00902F",
                                padding: "0px 0px 10px 0px"
                            } : {
                                color: "#A6A6A6",
                                fontWeight: "500",
                                fontSize: "12px",
                                marginTop: '20px'
                            }}>
                            Agent Management
                        </Form.Label>
                        <Form.Label
                            onClick={() => {
                                setIsAgentRequest(true)
                                setIsAgentManagement(false)
                            }}
                            style={isAgentRequest ? {
                                color: "#00902F",
                                fontWeight: "500",
                                fontSize: "12px",
                                marginTop: '20px',
                                borderBottom: "2px solid #00902F",
                                padding: "0px 0px 10px 0px"
                            } : {
                                color: "#A6A6A6",
                                fontWeight: "500",
                                fontSize: "12px",
                                marginTop: '20px'
                            }}
                        >
                            Agent Request
                        </Form.Label>
                        <Image
                            style={{
                                width: "18px",
                                maxWidth: "100%",
                                marginTop: '20px',
                                marginLeft: '-10px'
                            }}
                            src="/img/badgeagent.png"
                            width="18"
                            height="18"
                            alt="badge"
                        />
                    </div>

                    <div style={{
                        display: 'flex',
                        justifyContent: "space-between",
                        gap: '8px',
                        marginTop: '20px'
                    }}>
                        <Button style={{
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
                                onChange={(event) => setAgentNo(event.target.value)}
                            >
                                <option value="">Agent No.</option>
                                {agentNos.map((no, idx) => (
                                    <option key={idx} value={no}>{no}</option>
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
            )}
            {(isAgentManagement || isAgentRequest) && (
                <>
                    <div style={{
                        display: 'flex',
                        flexDirection: "column",
                        width: "100%",
                    }}>
                        {agentNo.length > 0 ? (
                            props.adminAgentData.filter((dt) => dt.agentNo === agentNo)
                                .slice(0, 10).map((data, idx) => (
                                    <>
                                        <AdminpanelMobileAgentData
                                            idx={idx}
                                            data={data}
                                            adminAgentData={props.adminAgentData}
                                            setAgentList={setAgentList}
                                            setIsAgentManagement={setIsAgentManagement}
                                            setIsAgentRequest={setIsAgentRequest}
                                            isAgentManagement={isAgentManagement}
                                            isAgentRequest={isAgentRequest}
                                        />
                                    </>
                                ))
                        ) : props.adminAgentData.slice((parseInt(noOfData) * 1) - 10, (parseInt(noOfData) * 1))
                            .map((data, idx) => (
                                <>
                                    <AdminpanelMobileAgentData
                                        idx={idx}
                                        data={data}
                                        adminAgentData={props.adminAgentData}
                                        setAgentList={setAgentList}
                                        setIsAgentManagement={setIsAgentManagement}
                                        setIsAgentRequest={setIsAgentRequest}
                                        isAgentManagement={isAgentManagement}
                                        isAgentRequest={isAgentRequest}
                                    />
                                </>
                            ))}
                    </div>
                </>
            )}

            {/* {isAgentRequest && (
                <>
                    <div style={{
                        display: 'flex',
                        flexDirection: "column",
                        width: "100%",
                    }}>
                        {agentNo.length > 0 ? (
                            props.adminAgentData.filter((dt) => dt.agentNo === agentNo)
                                .slice(0, 10).map((data, idx) => (
                                    <>
                                        <AdminPanelAgentRequestOption
                                            idx={idx}
                                            data={data}
                                            adminAgentData={props.adminAgentData}
                                            setAgentList={setAgentList}
                                            setIsAgentManagement={setIsAgentManagement}
                                            setIsAgentRequest={setIsAgentRequest}
                                            isAgentManagement={isAgentManagement}
                                            isAgentRequest={isAgentRequest}
                                        />
                                    </>
                                ))
                        ) : props.adminAgentData.slice((parseInt(noOfData) * 1) - 10, (parseInt(noOfData) * 1))
                            .map((data, idx) => (
                                <>
                                    <AdminPanelAgentRequestOption
                                        idx={idx}
                                        data={data}
                                        adminAgentData={props.adminAgentData}
                                        setAgentList={setAgentList}
                                        setIsAgentManagement={setIsAgentManagement}
                                        setIsAgentRequest={setIsAgentRequest}
                                        isAgentManagement={isAgentManagement}
                                        isAgentRequest={isAgentRequest}
                                    />
                                </>
                            ))}
                    </div>
                </>

            )} */}

            {agentList && (
                <AdminAgentListMobile
                    adminAgentData={props.adminAgentData}
                />
            )}

            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: "20px"
            }}>
                <div>
                    <select style={{
                        border: "1px solid #A6A6A6",
                        borderRadius: '4px',
                        padding: "7px"
                    }}
                        onChange={(event) => setNoOfData(event.target.value)}
                    >
                        {/* <option value={10}>Showing 10</option> */}
                        {data.slice(1).map((no, idx) => (
                            <option key={idx} value={no}>{`showing ${no}`}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <Form.Label style={{
                        fontSize: "13px",
                        color: "black",
                        fontWeight: "500"
                    }}>
                        {`of ${props.adminAgentData.length} entries`}
                    </Form.Label>
                </div>
                <div style={{
                    display: "flex",
                    gap: "20px"
                }}>
                    <Button style={{
                        background: 'transparent',
                        borderRadius: '50%',
                        height: '27px',
                        width: "27px",
                        border: "1px solid #7CC427",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center'
                    }}>
                        <Form.Label style={{
                            color: "#7CC427",
                            fontSize: "16px",
                            marginTop: '7px',
                            fontWeight: '500'
                        }}>
                            {"<"}
                        </Form.Label>
                    </Button>
                    <Button style={{
                        background: '#7CC427',
                        borderRadius: '50%',
                        height: '27px',
                        width: "27px",
                        border: "1px solid #7CC427",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center'
                    }}>
                        <Form.Label style={{
                            color: "white",
                            fontSize: "16px",
                            marginTop: '7px',
                            fontWeight: '500'
                        }}>
                            {">"}
                        </Form.Label>
                    </Button>
                </div>
            </div>
            <ConfirmChangesMobile
                confirmChangesMobile={confirmChangesMobile}
                setConnfirmChangesMobile={setConnfirmChangesMobile}
                agentNumber={agentNumber}
                agentList={agentList}
                setAgentList={setAgentList}
                setIsAgentManagement={setIsAgentManagement}
                setIsAgentRequest={setIsAgentRequest}
            />
        </>
    )
}