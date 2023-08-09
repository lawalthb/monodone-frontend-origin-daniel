import Image from "next/image";
import { useState } from "react";
import { Form } from "react-bootstrap";
import CustomPagination from "../../customPagination";
import AdminFullinfo from "../../adminFullinfo";
import Refund from "../../common/refund";

export default function TransactionManagementDetails(props) {
    const [adminFullinfo, setAdminFullinfo] = useState(false)
    const [refund, setRefund] = useState(false)

    const handleClearData = () => {

    }

    const handleEdit = () => {
        setEditModal(false)
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
                display: "flex",
                justifyContent: 'flex-start',
                width: '100%'
            }}>
                <div style={{
                    width: '15%',
                    color: "#A6A6A6",
                    fontSize: '10px'
                }}>
                    Date of Operation
                </div>
                <div style={{
                    width: '10%',
                    color: "#A6A6A6",
                    fontSize: '10px'
                }}>
                    Name
                </div>
                <div style={{
                    width: '15%',
                    color: "#A6A6A6",
                    fontSize: '10px'
                }}>
                    Price of parcel
                </div>
                <div style={{
                    width: '15%',
                    color: "#A6A6A6",
                    fontSize: '10px',
                    marginLeft: '-10px'
                }}>
                    Insurance price
                </div>
                <div style={{
                    width: '15%',
                    color: "#A6A6A6",
                    fontSize: '10px',
                    marginLeft: '-10px'
                }}>
                    Repayment 30%
                </div>
                <div style={{
                    width: '15%',
                    color: "#A6A6A6",
                    fontSize: '10px',
                    marginLeft: '-10px'
                }}>
                    Total price
                </div>
                <div style={{
                    width: '10%',
                    color: "#A6A6A6",
                    fontSize: '10px',
                    marginLeft: '-10px'
                }}>
                    Status
                </div>
                <div style={{
                    width: '5%',
                    color: "#A6A6A6",
                    fontSize: '10px',
                }}>
                    {"  "}
                </div>
            </div>
            <hr />
            {props.status.length > 0 ? (
                props.adminAgentData.filter((data) => data.status === props.status)
                    .slice((parseInt(props.pageNumber) * 10) - 10, parseInt(props.pageNumber) * 10)
                    .map((data, index) => (
                        <>
                            <div
                                key={index}
                                style={{
                                    display: "flex",
                                    justifyContent: 'space-between',
                                    width: '100%',
                                }}>
                                <div style={{
                                    width: '15%',
                                    color: "#A6A6A6",
                                    fontSize: '11px',
                                    color: "black",
                                }}>
                                    {data.dateAdded}
                                </div>
                                <div style={{
                                    width: '10%',
                                    color: "#A6A6A6",
                                    fontSize: '11px',
                                    color: "black",
                                }}>
                                    {data.businessName}
                                </div>
                                <div style={{
                                    width: '15%',
                                    color: "#A6A6A6",
                                    fontSize: '11px',
                                    color: "black",
                                    marginLeft: "20px"
                                }}>
                                    {data.price}
                                </div>
                                <div style={{
                                    width: '15%',
                                    color: "#A6A6A6",
                                    fontSize: '11px',
                                    color: "black"
                                }}>
                                    {data.insurancePrice}
                                </div>
                                <div style={{
                                    width: '15%',
                                    color: "#A6A6A6",
                                    fontSize: '11px',
                                    color: "black"
                                }}>
                                    {data.repayment}
                                </div>
                                <div style={{
                                    width: '15%',
                                    color: "#A6A6A6",
                                    fontSize: '11px',
                                    color: "black"
                                }}>
                                    {data.total}
                                </div>
                                <div style={{
                                    width: '10%',
                                    color: "#A6A6A6",
                                    fontSize: '11px',
                                    color: "black"
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
                                    width: '10%',
                                    color: "#A6A6A6",
                                    fontSize: '11px',
                                    display: 'flex',
                                    justifyContent: "flex-end"
                                }}>
                                    <Image
                                        onClick={() => setRefund(true)}
                                        style={{
                                            width: "19px",
                                            maxWidth: "100%",
                                            marginLeft: '10px',
                                            cursor: "pointer"
                                        }}
                                        src="/img/transaction.png"
                                        width="19"
                                        height="19"
                                        alt="badge"
                                    />
                                    <Image
                                        onClick={() => setAdminFullinfo(true)}
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
                                </div>
                            </div>
                            <hr style={{
                                marginTop: '-0.8px'
                            }} />
                        </>
                    ))
            ) : props.date.length > 0 ? props.adminAgentData.filter((data) => data.dateAdded === props.date)
                .slice((parseInt(props.pageNumber) * 10) - 10, parseInt(props.pageNumber) * 10)
                .map((data, index) => (
                    <>
                        <div
                            key={index}
                            style={{
                                display: "flex",
                                justifyContent: 'space-between',
                                width: '100%',
                            }}>
                            <div style={{
                                width: '15%',
                                color: "#A6A6A6",
                                fontSize: '11px',
                                color: "black",
                            }}>
                                {data.dateAdded}
                            </div>
                            <div style={{
                                width: '10%',
                                color: "#A6A6A6",
                                fontSize: '11px',
                                color: "black",
                            }}>
                                {data.businessName}
                            </div>
                            <div style={{
                                width: '15%',
                                color: "#A6A6A6",
                                fontSize: '11px',
                                color: "black",
                                marginLeft: "20px"
                            }}>
                                {data.price}
                            </div>
                            <div style={{
                                width: '15%',
                                color: "#A6A6A6",
                                fontSize: '11px',
                                color: "black"
                            }}>
                                {data.insurancePrice}
                            </div>
                            <div style={{
                                width: '15%',
                                color: "#A6A6A6",
                                fontSize: '11px',
                                color: "black"
                            }}>
                                {data.repayment}
                            </div>
                            <div style={{
                                width: '15%',
                                color: "#A6A6A6",
                                fontSize: '11px',
                                color: "black"
                            }}>
                                {data.total}
                            </div>
                            <div style={{
                                width: '10%',
                                color: "#A6A6A6",
                                fontSize: '11px',
                                color: "black"
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
                                width: '10%',
                                color: "#A6A6A6",
                                fontSize: '11px',
                                display: 'flex',
                                justifyContent: "flex-end"
                            }}>
                                <Image
                                    onClick={() => setRefund(true)}
                                    style={{
                                        width: "19px",
                                        maxWidth: "100%",
                                        marginLeft: '10px',
                                        cursor: "pointer"
                                    }}
                                    src="/img/transaction.png"
                                    width="19"
                                    height="19"
                                    alt="badge"
                                />
                                <Image
                                    onClick={() => setAdminFullinfo(true)}
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
                            </div>
                        </div>
                        <hr style={{
                            marginTop: '-0.8px'
                        }} />
                    </>
                )) :
                props.adminAgentData
                    .slice((parseInt(props.pageNumber) * 10) - 10, parseInt(props.pageNumber) * 10)
                    .map((data, index) => (
                        <>
                            <div
                                key={index}
                                style={{
                                    display: "flex",
                                    justifyContent: 'space-between',
                                    width: '100%',
                                }}>
                                <div style={{
                                    width: '15%',
                                    color: "#A6A6A6",
                                    fontSize: '11px',
                                    color: "black",
                                }}>
                                    {data.dateAdded}
                                </div>
                                <div style={{
                                    width: '10%',
                                    color: "#A6A6A6",
                                    fontSize: '11px',
                                    color: "black",
                                }}>
                                    {data.businessName}
                                </div>
                                <div style={{
                                    width: '15%',
                                    color: "#A6A6A6",
                                    fontSize: '11px',
                                    color: "black",
                                    marginLeft: "20px"
                                }}>
                                    {data.price}
                                </div>
                                <div style={{
                                    width: '15%',
                                    color: "#A6A6A6",
                                    fontSize: '11px',
                                    color: "black"
                                }}>
                                    {data.insurancePrice}
                                </div>
                                <div style={{
                                    width: '15%',
                                    color: "#A6A6A6",
                                    fontSize: '11px',
                                    color: "black"
                                }}>
                                    {data.repayment}
                                </div>
                                <div style={{
                                    width: '15%',
                                    color: "#A6A6A6",
                                    fontSize: '11px',
                                    color: "black"
                                }}>
                                    {data.total}
                                </div>
                                <div style={{
                                    width: '10%',
                                    color: "#A6A6A6",
                                    fontSize: '11px',
                                    color: "black"
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
                                    width: '10%',
                                    color: "#A6A6A6",
                                    fontSize: '11px',
                                    display: 'flex',
                                    justifyContent: "flex-end"
                                }}>
                                    <Image
                                        onClick={() => setRefund(true)}
                                        style={{
                                            width: "19px",
                                            maxWidth: "100%",
                                            marginLeft: '10px',
                                            cursor: "pointer"
                                        }}
                                        src="/img/transaction.png"
                                        width="19"
                                        height="19"
                                        alt="badge"
                                    />
                                    <Image
                                        onClick={() => setAdminFullinfo(true)}
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
                isTransactions={props.isTransactions}
                caption={"Full Information"}
                compName={"DELIVER INFORNATION"}
                okOption={"Ok"}
                editOption={"Edit"}
                handleAdminFullinfo={handleAdminFullinfo}
                handleEditOption={handleEditOption}
            />
            <Refund
                style={{
                    marginLeft: '8%'
                }}
                refund={refund}
                setRefund={setRefund}
            />
        </>
    )
}