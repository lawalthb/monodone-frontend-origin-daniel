import Image from "next/image";
import { useState, useRef } from "react";
import { Form, OverlayTrigger, Popover } from "react-bootstrap";
import { BiRadioCircle } from "react-icons/bi";
import CustomPagination from "../../customPagination";
import styles from '../../../customers/customerdashboard.module.css'
import AssignLoad from "../../common/assignLoad";
import HideLoad from "../../common/hideLoad";
import RemoveLoad from "../../common/removeLoad";
import AdminFullinfo from "../../adminFullinfo";

const actionDetails = [
    "Assign load",
    'Hide load',
    'Remove load',
]

export default function LoadboardRequestDetails(props) {
    const target = useRef(null)
    const [assignLoad, setAssignLoad] = useState(false)
    const [hideLoad, setHideLoad] = useState(false)
    const [removeLoad, setRemoveLoad] = useState(false)
    const [adminFullinfo, setAdminFullinfo] = useState(false)

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
                                <OverlayTrigger
                                    trigger="click"
                                    placement="bottom"
                                    rootClose
                                    overlay={
                                        <Popover id={`popover-positioned-bottom`}>
                                            <Popover.Body style={{
                                                width: '147px',
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
                                                        onClick={() => setAdminFullinfo(true)}
                                                        className={styles.hov}
                                                        style={{
                                                            fontSize: "10px",
                                                            color: "#151515"
                                                        }}>
                                                        View load request
                                                    </Form.Label>
                                                </div>
                                            </Popover.Body>
                                        </Popover>
                                    }
                                >
                                    <span ref={target}>
                                        <Image
                                            style={{
                                                width: "24px",
                                                maxWidth: "100%",
                                            }}
                                            src={data.action[0]}
                                            width="24"
                                            height="24"
                                            alt="badge"
                                        />
                                    </span>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    trigger="click"
                                    placement="bottom"
                                    rootClose
                                    overlay={
                                        <Popover id={`popover-positioned-bottom`}>
                                            <Popover.Body style={{
                                                width: '140px',
                                                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.1)",
                                                transition: "0.3s"
                                            }}>
                                                {actionDetails.map((data, idx) => (
                                                    <div
                                                        key={idx}
                                                        style={{
                                                            display: 'flex',
                                                            gap: '10px',
                                                            width: "100%"
                                                        }}>
                                                        <BiRadioCircle />
                                                        <Form.Label
                                                            className={styles.hov}
                                                            style={{
                                                                fontSize: "10px",
                                                                color: "#151515"
                                                            }}>
                                                            {data}
                                                        </Form.Label>
                                                    </div>
                                                ))}
                                            </Popover.Body>
                                        </Popover>
                                    }
                                >
                                    <span ref={target}>
                                        <Image
                                            style={{
                                                width: "24px",
                                                maxWidth: "100%",
                                                marginLeft: '10px'
                                            }}
                                            src="/img/loadellipses.png"
                                            width="24"
                                            height="24"
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
                                        <OverlayTrigger
                                            trigger="click"
                                            placement="bottom"
                                            rootClose
                                            overlay={
                                                <Popover id={`popover-positioned-bottom`}>
                                                    <Popover.Body style={{
                                                        width: '147px',
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
                                                                onClick={() => setAdminFullinfo(true)}
                                                                className={styles.hov}
                                                                style={{
                                                                    fontSize: "10px",
                                                                    color: "#151515"
                                                                }}>
                                                                View load request
                                                            </Form.Label>
                                                        </div>
                                                    </Popover.Body>
                                                </Popover>
                                            }
                                        >
                                            <span ref={target}>
                                                <Image
                                                    style={{
                                                        width: "24px",
                                                        maxWidth: "100%",
                                                    }}
                                                    src={data.action[0]}
                                                    width="24"
                                                    height="24"
                                                    alt="badge"
                                                />
                                            </span>
                                        </OverlayTrigger>
                                        <OverlayTrigger
                                            trigger="click"
                                            placement="bottom"
                                            rootClose
                                            overlay={
                                                <Popover id={`popover-positioned-bottom`}>
                                                    <Popover.Body style={{
                                                        width: '140px',
                                                        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.1)",
                                                        transition: "0.3s"
                                                    }}>
                                                        {actionDetails.map((data, idx) => (
                                                            <div
                                                                key={idx}
                                                                style={{
                                                                    display: 'flex',
                                                                    gap: '10px',
                                                                    width: "100%"
                                                                }}>
                                                                <BiRadioCircle />
                                                                <Form.Label
                                                                    onClick={() => {
                                                                        idx === 0 ? setAssignLoad(true)
                                                                            : idx === 1 ? setHideLoad(true)
                                                                                : idx === 2 ? setRemoveLoad(true) : undefined
                                                                    }}
                                                                    className={styles.hov}
                                                                    style={{
                                                                        fontSize: "10px",
                                                                        color: "#151515"
                                                                    }}>
                                                                    {data}
                                                                </Form.Label>
                                                            </div>
                                                        ))}
                                                    </Popover.Body>
                                                </Popover>
                                            }
                                        >
                                            <span ref={target}>
                                                <Image
                                                    style={{
                                                        width: "24px",
                                                        maxWidth: "100%",
                                                        marginLeft: '10px'
                                                    }}
                                                    src="/img/loadellipses.png"
                                                    width="24"
                                                    height="24"
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
                                        <OverlayTrigger
                                            trigger="click"
                                            placement="bottom"
                                            rootClose
                                            overlay={
                                                <Popover id={`popover-positioned-bottom`}>
                                                    <Popover.Body style={{
                                                        width: '147px',
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
                                                                onClick={() => setAdminFullinfo(true)}
                                                                className={styles.hov}
                                                                style={{
                                                                    fontSize: "10px",
                                                                    color: "#151515"
                                                                }}>
                                                                View load request
                                                            </Form.Label>
                                                        </div>
                                                    </Popover.Body>
                                                </Popover>
                                            }
                                        >
                                            <span ref={target}>
                                                <Image
                                                    style={{
                                                        width: "24px",
                                                        maxWidth: "100%",
                                                    }}
                                                    src={data.action[0]}
                                                    width="24"
                                                    height="24"
                                                    alt="badge"
                                                />
                                            </span>
                                        </OverlayTrigger>
                                        <OverlayTrigger
                                            trigger="click"
                                            placement="bottom"
                                            rootClose
                                            overlay={
                                                <Popover id={`popover-positioned-bottom`}>
                                                    <Popover.Body style={{
                                                        width: '140px',
                                                        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.1)",
                                                        transition: "0.3s"
                                                    }}>
                                                        {actionDetails.map((data, idx) => (
                                                            <div
                                                                key={idx}
                                                                style={{
                                                                    display: 'flex',
                                                                    gap: '10px',
                                                                    width: "100%"
                                                                }}>
                                                                <BiRadioCircle />
                                                                <Form.Label
                                                                    onClick={() => {
                                                                        idx === 0 ? setAssignLoad(true)
                                                                            : idx === 1 ? setHideLoad(true)
                                                                                : idx === 2 ? setRemoveLoad(true) : undefined
                                                                    }}
                                                                    className={styles.hov}
                                                                    style={{
                                                                        fontSize: "10px",
                                                                        color: "#151515"
                                                                    }}>
                                                                    {data}
                                                                </Form.Label>
                                                            </div>
                                                        ))}
                                                    </Popover.Body>
                                                </Popover>
                                            }
                                        >
                                            <span ref={target}>
                                                <Image
                                                    style={{
                                                        width: "24px",
                                                        maxWidth: "100%",
                                                        marginLeft: '10px'
                                                    }}
                                                    src="/img/loadellipses.png"
                                                    width="24"
                                                    height="24"
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
                                    <OverlayTrigger
                                        trigger="click"
                                        placement="bottom"
                                        rootClose
                                        overlay={
                                            <Popover id={`popover-positioned-bottom`}>
                                                <Popover.Body style={{
                                                    width: '147px',
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
                                                            onClick={() => setAdminFullinfo(true)}
                                                            className={styles.hov}
                                                            style={{
                                                                fontSize: "10px",
                                                                color: "#151515"
                                                            }}>
                                                            View load request
                                                        </Form.Label>
                                                    </div>
                                                </Popover.Body>
                                            </Popover>
                                        }
                                    >
                                        <span ref={target}>
                                            <Image
                                                style={{
                                                    width: "24px",
                                                    maxWidth: "100%",
                                                }}
                                                src={data.action[0]}
                                                width="24"
                                                height="24"
                                                alt="badge"
                                            />
                                        </span>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        trigger="click"
                                        placement="bottom"
                                        rootClose
                                        overlay={
                                            <Popover id={`popover-positioned-bottom`}>
                                                <Popover.Body style={{
                                                    width: '140px',
                                                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.1)",
                                                    transition: "0.3s"
                                                }}>
                                                    {actionDetails.map((data, idx) => (
                                                        <div
                                                            key={idx}
                                                            style={{
                                                                display: 'flex',
                                                                gap: '10px',
                                                                width: "100%"
                                                            }}>
                                                            <BiRadioCircle />
                                                            <Form.Label
                                                                onClick={() => {
                                                                    idx === 0 ? setAssignLoad(true)
                                                                        : idx === 1 ? setHideLoad(true)
                                                                            : idx === 2 ? setRemoveLoad(true) : undefined
                                                                }}
                                                                className={styles.hov}
                                                                style={{
                                                                    fontSize: "10px",
                                                                    color: "#151515"
                                                                }}>
                                                                {data}
                                                            </Form.Label>
                                                        </div>
                                                    ))}
                                                </Popover.Body>
                                            </Popover>
                                        }
                                    >
                                        <span ref={target}>
                                            <Image
                                                style={{
                                                    width: "24px",
                                                    maxWidth: "100%",
                                                    marginLeft: '10px'
                                                }}
                                                src="/img/loadellipses.png"
                                                width="24"
                                                height="24"
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
                                    <OverlayTrigger
                                        trigger="click"
                                        placement="bottom"
                                        rootClose
                                        overlay={
                                            <Popover id={`popover-positioned-bottom`}>
                                                <Popover.Body style={{
                                                    width: '147px',
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
                                                            onClick={() => setAdminFullinfo(true)}
                                                            className={styles.hov}
                                                            style={{
                                                                fontSize: "10px",
                                                                color: "#151515"
                                                            }}>
                                                            View load request
                                                        </Form.Label>
                                                    </div>
                                                </Popover.Body>
                                            </Popover>
                                        }
                                    >
                                        <span ref={target}>
                                            <Image
                                                style={{
                                                    width: "24px",
                                                    maxWidth: "100%",
                                                }}
                                                src={data.action[0]}
                                                width="24"
                                                height="24"
                                                alt="badge"
                                            />
                                        </span>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        trigger="click"
                                        placement="bottom"
                                        rootClose
                                        overlay={
                                            <Popover id={`popover-positioned-bottom`}>
                                                <Popover.Body style={{
                                                    width: '140px',
                                                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.1)",
                                                    transition: "0.3s"
                                                }}>
                                                    {actionDetails.map((data, idx) => (
                                                        <div
                                                            key={idx}
                                                            style={{
                                                                display: 'flex',
                                                                gap: '10px',
                                                                width: "100%"
                                                            }}>
                                                            <BiRadioCircle />
                                                            <Form.Label
                                                                onClick={() => {
                                                                    idx === 0 ? setAssignLoad(true)
                                                                        : idx === 1 ? setHideLoad(true)
                                                                            : idx === 2 ? setRemoveLoad(true) : undefined
                                                                }}
                                                                className={styles.hov}
                                                                style={{
                                                                    fontSize: "10px",
                                                                    color: "#151515"
                                                                }}>
                                                                {data}
                                                            </Form.Label>
                                                        </div>
                                                    ))}
                                                </Popover.Body>
                                            </Popover>
                                        }
                                    >
                                        <span ref={target}>
                                            <Image
                                                style={{
                                                    width: "24px",
                                                    maxWidth: "100%",
                                                    marginLeft: '10px',
                                                    cursor: 'pointer'
                                                }}
                                                src="/img/loadellipses.png"
                                                width="24"
                                                height="24"
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
            <AssignLoad
                style={{
                    marginTop: "5%",
                    marginLeft: "5%"
                }}
                assignLoad={assignLoad}
                setAssignLoad={setAssignLoad}
            />
            <HideLoad
                style={{
                    marginTop: "5%",
                    marginLeft: "5%"
                }}
                hideLoad={hideLoad}
                setHideLoad={setHideLoad}
            />
            <RemoveLoad
                style={{
                    marginTop: "5%",
                    marginLeft: "5%"
                }}
                removeLoad={removeLoad}
                setRemoveLoad={setRemoveLoad}
            />
            <AdminFullinfo
                style={{
                    marginLeft: '8%'
                }}
                adminFullinfo={adminFullinfo}
                setAdminFullinfo={setAdminFullinfo}
                isLoadBoardRequest={props.isLoadBoardRequest}
                caption={"Full Information"}
                compName={"DELIVER INFORNATION"}
                okOption={"Approve"}
                editOption={"Reject"}
                handleAdminFullinfo={handleAdminFullinfo}
                handleEditOption={handleEditOption}
            />
        </>
    )
}