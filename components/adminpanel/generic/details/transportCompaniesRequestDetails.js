import Image from "next/image";
import { useState } from "react";
import { useRef } from "react";
import { Form, OverlayTrigger, Popover } from "react-bootstrap";
import AdminFullinfo from "../../adminFullinfo";
import CustomPagination from "../../customPagination";

const fullInformation = {
    agentNo: "",
    dateAdded: "",
    name: "",
    address: '',
    phoneNo: "",
    weight: '',
    dimensions: '',
    store: ["/img/storeimg.png", "/img/storeimg2.png"],
    regDoc: "/img/regdoc.png",
    guarantorName1: "Ufere Goodnews",
    guarantorAddress1: "Greenland Estate, Lekki - Lagos",
    guarantorPhoneNo1: "998 772 26 66",
    guarantorName2: "Ufere Goodnews",
    guarantorAddress2: "Greenland Estate, Lekki - Lagos",
    guarantorPhoneNo2: "998 772 26 66",
}

export default function TransportCompaniesRequestDetails(props) {
    const target = useRef(null)
    const [adminFullinfo, setAdminFullinfo] = useState(false)
    const [fullInfo, setFullInfo] = useState(fullInformation)
    const [agentNoEdit, setAgentNoEdit] = useState("")

    const handleFullInfo = () => {
        const filteredData = props.adminAgentData.filter((data) => data.agentNo === agentNoEdit)[0]
        setFullInfo((prevState) => {
            return {
                ...prevState,
                agentNo: filteredData?.agentNo,
                dateAdded: filteredData?.dateAdded,
                name: filteredData?.businessName,
                address: filteredData?.address,
                phoneNo: filteredData?.phoneNumber,
                weight: filteredData?.weight,
                dimensions: filteredData?.dimensions
            }
        })
    }

    const handleAdminFullinfo = () => {
        setAdminFullinfo(false)
    }

    const handleEditOption = () => {
        setAdminFullinfo(false)
    }

    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: "100%",
                paddingBottom: '9px'
            }}>
                <div style={{
                    width: '20%',
                    color: "#A6A6A6",
                    fontSize: '12px'
                }}>
                    Date posted
                </div>
                <div style={{
                    width: '40%',
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
                    status
                </div>
                <div style={{
                    width: '20%',
                    color: "#A6A6A6",
                    fontSize: '12px'
                }}>
                    {" "}
                </div>
            </div>
            <hr style={{
                marginTop: '-0.8px'
            }} />
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
                            {(index === 0 || index === 1 || index === 2) ? (
                                <div style={{
                                    width: '20%',
                                    display: "flex",
                                    gap: "6px"
                                }}>
                                    <Image
                                        style={{
                                            width: "11px",
                                            maxWidth: "100%",
                                            marginTop: '3px',
                                            marginLeft: "8px"
                                        }}
                                        src="/img/datealert.png"
                                        width="11"
                                        height="11"
                                        alt="badge"
                                    />
                                    <Form.Label style={{
                                        fontSize: '12px',
                                        color: "black",
                                    }}>
                                        {data.dateAdded}
                                    </Form.Label>
                                </div>
                            ) : (
                                <div style={{
                                    width: '20%',
                                    color: "black",
                                    fontSize: '12px',
                                }}>
                                    {data.dateAdded}
                                </div>
                            )}
                            <div style={{
                                width: '40%',
                                color: "#A6A6A6",
                                fontSize: '12px',
                                color: "black",
                            }}>
                                {data.businessName}
                            </div>
                            <div style={{
                                width: '20%',
                                color: "#A6A6A6",
                                fontSize: '12px',
                            }}>
                                <Form.Label style={data.status === "Waiting" ? {
                                    fontSize: "12px",
                                    fontWeight: '500',
                                    width: 'fit-content',
                                    color: "#FFC700",
                                    background: "rgba(255, 199, 0, 0.2)",
                                    borderRadius: '100px',
                                    padding: '2px 10px'
                                } : data.status === "Confirmed" ? {
                                    fontSize: "12px",
                                    fontWeight: '500',
                                    width: 'fit-content',
                                    color: "#7CC427",
                                    background: "rgba(124, 196, 39, 0.2)",
                                    borderRadius: '100px',
                                    padding: '2px 10px'
                                } : data.status === "Rejected" ? {
                                    fontSize: "12px",
                                    fontWeight: '500',
                                    width: 'fit-content',
                                    color: "#F20808",
                                    background: "rgba(242, 8, 8, 0.2)",
                                    borderRadius: '100px',
                                    padding: '2px 10px'
                                } : {
                                }}>
                                    {data.status}
                                </Form.Label>
                            </div>
                            <div style={{
                                width: '20%',
                                color: "#A6A6A6",
                                fontSize: '12px',
                                display: 'flex',
                                justifyContent: 'flex-end'
                            }}>
                                <OverlayTrigger
                                    trigger="click"
                                    placement="bottom"
                                    rootClose
                                    overlay={
                                        <Popover id={`popover-positioned-bottom`}>
                                            <Popover.Body style={{
                                                width: '161px',
                                                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.1)",
                                                transition: "0.3s"
                                            }}>
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        gap: '10px',
                                                        width: "100%"
                                                    }}>
                                                    <Form.Label
                                                        onClick={() => {
                                                            setAgentNoEdit(data.agentNo);
                                                            setAdminFullinfo(true)
                                                            handleFullInfo()
                                                        }}
                                                        style={{
                                                            fontSize: "12px",
                                                            color: "#151515",
                                                            cursor: 'pointer'
                                                        }}>
                                                        View driver&apos;s request
                                                    </Form.Label>
                                                </div>
                                            </Popover.Body>
                                        </Popover>
                                    }
                                >
                                    <span ref={target}>
                                        <Image
                                            style={{
                                                width: "19px",
                                                maxWidth: "100%",
                                                marginLeft: '10px'
                                            }}
                                            src={data.action[0]}
                                            width="19"
                                            height="19"
                                            alt="badge"
                                        />
                                    </span>
                                </OverlayTrigger>
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
                                {(index === 0 || index === 1 || index === 2) ? (
                                    <div style={{
                                        width: '20%',
                                        display: "flex",
                                        gap: "6px"
                                    }}>
                                        <Image
                                            style={{
                                                width: "11px",
                                                maxWidth: "100%",
                                                marginTop: '3px',
                                                marginLeft: "8px"
                                            }}
                                            src="/img/datealert.png"
                                            width="11"
                                            height="11"
                                            alt="badge"
                                        />
                                        <Form.Label style={{
                                            fontSize: '12px',
                                            color: "black",
                                        }}>
                                            {data.dateAdded}
                                        </Form.Label>
                                    </div>
                                ) : (
                                    <div style={{
                                        width: '20%',
                                        color: "black",
                                        fontSize: '12px',
                                        color: "black",
                                    }}>
                                        {data.dateAdded}
                                    </div>
                                )}
                                <div style={{
                                    width: '40%',
                                    color: "#A6A6A6",
                                    fontSize: '12px',
                                    color: "black",
                                }}>
                                    {data.businessName}
                                </div>
                                <div style={{
                                    width: '20%',
                                    color: "#A6A6A6",
                                    fontSize: '12px',
                                }}>
                                    <Form.Label style={data.status === "Waiting" ? {
                                        fontSize: "12px",
                                        fontWeight: '500',
                                        width: 'fit-content',
                                        color: "#FFC700",
                                        background: "rgba(255, 199, 0, 0.2)",
                                        borderRadius: '100px',
                                        padding: '2px 10px'
                                    } : data.status === "Confirmed" ? {
                                        fontSize: "12px",
                                        fontWeight: '500',
                                        width: 'fit-content',
                                        color: "#7CC427",
                                        background: "rgba(124, 196, 39, 0.2)",
                                        borderRadius: '100px',
                                        padding: '2px 10px'
                                    } : data.status === "Rejected" ? {
                                        fontSize: "12px",
                                        fontWeight: '500',
                                        width: 'fit-content',
                                        color: "#F20808",
                                        background: "rgba(242, 8, 8, 0.2)",
                                        borderRadius: '100px',
                                        padding: '2px 10px'
                                    } : {
                                    }}>
                                        {data.status}
                                    </Form.Label>
                                </div>
                                <div style={{
                                    width: '20%',
                                    color: "#A6A6A6",
                                    fontSize: '12px',
                                    display: 'flex',
                                    justifyContent: 'flex-end'
                                }}>
                                    <OverlayTrigger
                                        trigger="click"
                                        placement="bottom"
                                        rootClose
                                        overlay={
                                            <Popover id={`popover-positioned-bottom`}>
                                                <Popover.Body style={{
                                                    width: '161px',
                                                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.1)",
                                                    transition: "0.3s"
                                                }}>
                                                    <div
                                                        style={{
                                                            display: 'flex',
                                                            gap: '10px',
                                                            width: "100%"
                                                        }}>
                                                        <Form.Label
                                                            onClick={() => {
                                                                setAgentNoEdit(data.agentNo);
                                                                setAdminFullinfo(true)
                                                                handleFullInfo()
                                                            }}
                                                            style={{
                                                                fontSize: "12px",
                                                                color: "#151515",
                                                                cursor: 'pointer'
                                                            }}>
                                                            View driver&apos;s request
                                                        </Form.Label>
                                                    </div>
                                                </Popover.Body>
                                            </Popover>
                                        }
                                    >
                                        <span ref={target}>
                                            <Image
                                                style={{
                                                    width: "19px",
                                                    maxWidth: "100%",
                                                    marginLeft: '10px'
                                                }}
                                                src={data.action[0]}
                                                width="19"
                                                height="19"
                                                alt="badge"
                                            />
                                        </span>
                                    </OverlayTrigger>
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
            <AdminFullinfo
                style={{
                    marginLeft: '8%'
                }}
                adminFullinfo={adminFullinfo}
                setAdminFullinfo={setAdminFullinfo}
                caption={"Super Admin's Request Details"}
                compName={"SUPER ADMIN"}
                agentNo={fullInfo.agentNo}
                dateAdded={fullInfo.dateAdded}
                name={fullInfo.name}
                address={fullInfo.address}
                phoneNo={fullInfo.phoneNo}
                weight={fullInfo.weight}
                dimensions={fullInfo.dimensions}
                guarantorName1={fullInfo.guarantorName1}
                guarantorAddress1={fullInfo.guarantorAddress1}
                guarantorPhone1={fullInfo.guarantorPhoneNo1}
                guarantorName2={fullInfo.guarantorName2}
                guarantorAddress2={fullInfo.guarantorAddress2}
                guarantorPhone2={fullInfo.guarantorPhoneNo2}
                handleAdminFullinfo={handleAdminFullinfo}
                okOption={"Accept"}
                editOption={"Reject"}
                isTransportCompanyRequest={props.isTransportCompanyRequest}
                handleEditOption={handleEditOption}
            />
        </>
    )
}