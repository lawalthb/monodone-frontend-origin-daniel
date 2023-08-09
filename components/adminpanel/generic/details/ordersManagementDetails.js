import Image from "next/image";
import { useState } from "react";
import { Form } from "react-bootstrap";
import CustomPagination from "../../customPagination";
import AdminFullinfo from "../../adminFullinfo";
import EditModal from '../../common/editModal'

export default function OrdersManagementDetails(props) {
    const [adminFullinfo, setAdminFullinfo] = useState(false)
    const [editModal, setEditModal] = useState(false)

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
                    Order No
                </div>
                <div style={{
                    width: '10%',
                    color: "#A6A6A6",
                    fontSize: '10px'
                }}>
                    Date added
                </div>
                <div style={{
                    width: '15%',
                    color: "#A6A6A6",
                    fontSize: '10px'
                }}>
                    Sender
                </div>
                <div style={{
                    width: '15%',
                    color: "#A6A6A6",
                    fontSize: '10px'
                }}>
                    Recipient
                </div>
                <div style={{
                    width: '15%',
                    color: "#A6A6A6",
                    fontSize: '10px'
                }}>
                    Delivery From
                </div>
                <div style={{
                    width: '15%',
                    color: "#A6A6A6",
                    fontSize: '10px'
                }}>
                    Delivery To
                </div>
                <div style={{
                    width: '10%',
                    color: "#A6A6A6",
                    fontSize: '10px'
                }}>
                    Status
                </div>
                <div style={{
                    width: '10%',
                    color: "#A6A6A6",
                    fontSize: '10px'
                }}>
                    Price
                </div>
                <div style={{
                    width: '5%',
                    color: "#A6A6A6",
                    fontSize: '10px'
                }}>
                    {"  "}
                </div>
            </div>
            <hr />
            {props.cityFrom.length > 0 ? props.adminAgentData.filter((data) => data.deliverFrom === props.cityFrom)
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
                                color: "black"
                            }}>
                                {data.orderNo}
                            </div>
                            <div style={{
                                width: '10%',
                                color: "#A6A6A6",
                                fontSize: '11px',
                                color: "black"
                            }}>
                                {data.dateAdded}
                            </div>
                            <div style={{
                                width: '15%',
                                color: "#A6A6A6",
                                fontSize: '11px',
                                color: "black"
                            }}>
                                {data.businessName}
                            </div>
                            <div style={{
                                width: '15%',
                                color: "#A6A6A6",
                                fontSize: '11px',
                                color: "black"
                            }}>
                                {data.recipient}
                            </div>
                            <div style={{
                                width: '15%',
                                color: "#A6A6A6",
                                fontSize: '11px',
                                color: "black"
                            }}>
                                {data.deliverFrom}
                            </div>
                            <div style={{
                                width: '15%',
                                color: "#A6A6A6",
                                fontSize: '11px',
                                color: "black"
                            }}>
                                {data.deliverTo}
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
                                width: '5%',
                                color: "#A6A6A6",
                                fontSize: '11px',
                                color: "black"
                            }}>
                                {data.price}
                            </div>
                            <div style={{
                                width: '10%',
                                color: "#A6A6A6",
                                fontSize: '11px',
                                display: 'flex',
                                justifyContent: "flex-end"
                            }}>
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
                                <Image
                                    onClick={() => setEditModal(true)}
                                    style={{
                                        width: "19px",
                                        maxWidth: "100%",
                                        marginLeft: '10px',
                                        cursor: "pointer"
                                    }}
                                    src={data.action[1]}
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
                )) : props.cityTo.length > 0 ? (
                    props.adminAgentData.filter((data) => data.deliverTo === props.cityTo)
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
                                        color: "black"
                                    }}>
                                        {data.orderNo}
                                    </div>
                                    <div style={{
                                        width: '10%',
                                        color: "#A6A6A6",
                                        fontSize: '11px',
                                        color: "black"
                                    }}>
                                        {data.dateAdded}
                                    </div>
                                    <div style={{
                                        width: '15%',
                                        color: "#A6A6A6",
                                        fontSize: '11px',
                                        color: "black"
                                    }}>
                                        {data.businessName}
                                    </div>
                                    <div style={{
                                        width: '15%',
                                        color: "#A6A6A6",
                                        fontSize: '11px',
                                        color: "black"
                                    }}>
                                        {data.recipient}
                                    </div>
                                    <div style={{
                                        width: '15%',
                                        color: "#A6A6A6",
                                        fontSize: '11px',
                                        color: "black"
                                    }}>
                                        {data.deliverFrom}
                                    </div>
                                    <div style={{
                                        width: '15%',
                                        color: "#A6A6A6",
                                        fontSize: '11px',
                                        color: "black"
                                    }}>
                                        {data.deliverTo}
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
                                        width: '5%',
                                        color: "#A6A6A6",
                                        fontSize: '11px',
                                        color: "black"
                                    }}>
                                        {data.price}
                                    </div>
                                    <div style={{
                                        width: '10%',
                                        color: "#A6A6A6",
                                        fontSize: '11px',
                                        display: 'flex',
                                        justifyContent: "flex-end"
                                    }}>
                                        <Image
                                            onClick={() => setAdminFullinfo(true)}
                                            style={{
                                                width: "19px",
                                                maxWidth: "100%",
                                                marginLeft: '10px',
                                                cursor: "pointer"
                                            }}
                                            src={data.action[0]}
                                            width="19"
                                            height="19"
                                            alt="badge"
                                        />
                                        <Image
                                            onClick={() => setEditModal(true)}
                                            style={{
                                                width: "19px",
                                                maxWidth: "100%",
                                                marginLeft: '10px',
                                                cursor: "pointer"
                                            }}
                                            src={data.action[1]}
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
                ) : props.status.length > 0 ? (
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
                                        color: "black"
                                    }}>
                                        {data.orderNo}
                                    </div>
                                    <div style={{
                                        width: '10%',
                                        color: "#A6A6A6",
                                        fontSize: '11px',
                                        color: "black"
                                    }}>
                                        {data.dateAdded}
                                    </div>
                                    <div style={{
                                        width: '15%',
                                        color: "#A6A6A6",
                                        fontSize: '11px',
                                        color: "black"
                                    }}>
                                        {data.businessName}
                                    </div>
                                    <div style={{
                                        width: '15%',
                                        color: "#A6A6A6",
                                        fontSize: '11px',
                                        color: "black"
                                    }}>
                                        {data.recipient}
                                    </div>
                                    <div style={{
                                        width: '15%',
                                        color: "#A6A6A6",
                                        fontSize: '11px',
                                        color: "black"
                                    }}>
                                        {data.deliverFrom}
                                    </div>
                                    <div style={{
                                        width: '15%',
                                        color: "#A6A6A6",
                                        fontSize: '11px',
                                        color: "black"
                                    }}>
                                        {data.deliverTo}
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
                                        width: '5%',
                                        color: "#A6A6A6",
                                        fontSize: '11px',
                                        color: "black"
                                    }}>
                                        {data.price}
                                    </div>
                                    <div style={{
                                        width: '10%',
                                        color: "#A6A6A6",
                                        fontSize: '11px',
                                        display: 'flex',
                                        justifyContent: "flex-end"
                                    }}>
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
                                        <Image
                                            onClick={() => setEditModal(true)}
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
                                    color: "black"
                                }}>
                                    {data.orderNo}
                                </div>
                                <div style={{
                                    width: '10%',
                                    color: "#A6A6A6",
                                    fontSize: '11px',
                                    color: "black"
                                }}>
                                    {data.dateAdded}
                                </div>
                                <div style={{
                                    width: '15%',
                                    color: "#A6A6A6",
                                    fontSize: '11px',
                                    color: "black"
                                }}>
                                    {data.businessName}
                                </div>
                                <div style={{
                                    width: '15%',
                                    color: "#A6A6A6",
                                    fontSize: '11px',
                                    color: "black"
                                }}>
                                    {data.recipient}
                                </div>
                                <div style={{
                                    width: '15%',
                                    color: "#A6A6A6",
                                    fontSize: '11px',
                                    color: "black"
                                }}>
                                    {data.deliverFrom}
                                </div>
                                <div style={{
                                    width: '15%',
                                    color: "#A6A6A6",
                                    fontSize: '11px',
                                    color: "black"
                                }}>
                                    {data.deliverTo}
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
                                    width: '5%',
                                    color: "#A6A6A6",
                                    fontSize: '11px',
                                    color: "black"
                                }}>
                                    {data.price}
                                </div>
                                <div style={{
                                    width: '10%',
                                    color: "#A6A6A6",
                                    fontSize: '11px',
                                    display: 'flex',
                                    justifyContent: "flex-end"
                                }}>
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
                                    <Image
                                        onClick={() => setEditModal(true)}
                                        style={{
                                            width: "19px",
                                            maxWidth: "100%",
                                            marginLeft: '10px',
                                            cursor: "pointer"
                                        }}
                                        src={data.action[1]}
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
                                    {data.orderNo}
                                </div>
                                <div style={{
                                    width: '10%',
                                    color: "#A6A6A6",
                                    fontSize: '11px',
                                    color: "black",
                                }}>
                                    {data.dateAdded}
                                </div>
                                <div style={{
                                    width: '15%',
                                    color: "#A6A6A6",
                                    fontSize: '11px',
                                    color: "black"
                                }}>
                                    {data.businessName}
                                </div>
                                <div style={{
                                    width: '15%',
                                    color: "#A6A6A6",
                                    fontSize: '11px',
                                    color: "black"
                                }}>
                                    {data.recipient}
                                </div>
                                <div style={{
                                    width: '15%',
                                    color: "#A6A6A6",
                                    fontSize: '11px',
                                    color: "black"
                                }}>
                                    {data.deliverFrom}
                                </div>
                                <div style={{
                                    width: '15%',
                                    color: "#A6A6A6",
                                    fontSize: '11px',
                                    color: "black"
                                }}>
                                    {data.deliverTo}
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
                                    width: '5%',
                                    color: "#A6A6A6",
                                    fontSize: '11px',
                                    color: "black"
                                }}>
                                    {data.price}
                                </div>
                                <div style={{
                                    width: '10%',
                                    color: "#A6A6A6",
                                    fontSize: '11px',
                                    display: 'flex',
                                    justifyContent: "flex-end"
                                }}>
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
                                    <Image
                                        onClick={() => setEditModal(true)}
                                        style={{
                                            width: "19px",
                                            maxWidth: "100%",
                                            marginLeft: '10px',
                                            cursor: "pointer"
                                        }}
                                        src={data.action[1]}
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
                isOrders={props.isOrders}
                caption={"Full Information"}
                compName={"DELIVER INFORNATION"}
                okOption={"Ok"}
                editOption={"Edit"}
                handleAdminFullinfo={handleAdminFullinfo}
                handleEditOption={handleEditOption}
            />
            <EditModal
                editModal={editModal}
                isOrders={props.isOrders}
                setEditModal={setEditModal}
                caption={"Edit Order"}
                handleEdit={handleEdit}
                handleClearData={handleClearData}
            />
        </>
    )
}