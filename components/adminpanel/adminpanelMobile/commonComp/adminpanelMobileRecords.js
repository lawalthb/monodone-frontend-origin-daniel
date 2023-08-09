import Image from "next/image"
import { useRef, useState } from "react"
import { Form, OverlayTrigger, Popover } from "react-bootstrap"
import { BiRadioCircle } from "react-icons/bi";
import styles from '../../../customers/customerdashboard.module.css'

const actionDetails = [
    {
        id: "/img/seletedDot.png",
        msg: "View load details"
    },
    {
        id: "/img/circle.jpg",
        msg: 'Generate invoice'
    },
    {
        id: "/img/circle.jpg",
        msg: 'Send to load board'
    }
]

const LoadActionDetails = [
    "Assign load",
    'Hide load',
    'Remove load',
]

export default function AdminpanelMobileRecords(props) {
    const target = useRef(null);
    const loadboardTarget = useRef(null)
    const [index, setIndex] = useState()
    return (
        <>
            <div
                key={props.idx} style={{
                    display: 'flex',
                    gap: "20px",
                    width: '100%',
                    padding: '20px',
                }}>
                {(props.isDriversManagement
                    || props.isDriversRequest
                    || props.isCustomers
                    || props.isBrokersManagement
                    || props.isBrokersRequest
                    || props.isDriverManagersManagement
                    || props.isDriverManagersRequest
                    || props.isShippingCompaniesManagement
                    || props.isShippingCompaniesRequest
                    || props.isTransportCompaniesManagement
                    || props.isTransportCompaniesRequest
                    || props.isEmployeeManagement
                    || props.isEmployeeRequest
                    || props.isClearingManagement
                    || props.isClearingRequest
                    || props.isSpecializedShipment
                    || props.isBlogRequest
                    || props.isLoadboardManagement
                    || props.isLoadboardRequest
                    || props.isOrders
                    || props.isTransactionsCustomers
                    || props.isTransactionsAgents
                    || props.isTransactionsDrivers
                    || props.isAdmins) && (
                        <>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '10%'
                            }}>
                                {index ? (
                                    <Image
                                        onClick={() => setIndex((prevState) => {
                                            prevState = ""
                                            return prevState
                                        })}
                                        style={{
                                            width: '24px',
                                            height: '24px'
                                        }}
                                        // eslint-disable-next-line jsx-a11y/aria-role
                                        role="employee"
                                        src="/img/up.png" width="24" height="24" alt="up" />

                                ) : index === 0 ? (
                                    <Image
                                        onClick={() => setIndex((prevState) => {
                                            prevState = ""
                                            return prevState
                                        })}
                                        style={{
                                            width: '24px',
                                            height: '24px'
                                        }}
                                        // eslint-disable-next-line jsx-a11y/aria-role
                                        role="employee"
                                        src="/img/up.png" width="24" height="24" alt="up" />
                                ) : (
                                    <Image
                                        onClick={() => setIndex((prevState) => {
                                            prevState = props.idx
                                            return prevState
                                        })}
                                        style={{
                                            width: '24px',
                                            height: '24px'
                                        }}
                                        // eslint-disable-next-line jsx-a11y/aria-role
                                        role="employee"
                                        src="/img/down.png" width="24" height="24" alt="up" />
                                )}
                            </div>
                        </>
                    )}
                {(props.isTransactionsCustomers
                    || props.isTransactionsAgents
                    || props.isTransactionsDrivers) &&
                    <>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '50%'
                        }}>
                            <Form.Label style={{
                                fontSize: "12px",
                                fontWeight: "500",
                                marginTop: "5px",
                                color: "black",
                                // borderBottom: '1px solid #E7E7E7'
                            }}>
                                {props.firstHeader}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                // borderBottom: '1px solid #E7E7E7'
                            } : {
                                display: 'none'
                            }}>
                                {props.secondHeader}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                // borderBottom: '1px solid #E7E7E7'
                            } : {
                                display: 'none'
                            }}>
                                {props.thirdHeader}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                // borderBottom: '1px solid #E7E7E7'
                            } : {
                                display: 'none'
                            }}>
                                {props.fourthHeader}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                // borderBottom: '1px solid #E7E7E7'
                            } : {
                                display: 'none'
                            }}>
                                {props.fifthHeader}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                // borderBottom: '1px solid #E7E7E7'
                            } : {
                                display: 'none'
                            }}>
                                {props.sixthHeader}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                // borderBottom: '1px solid #E7E7E7'
                            } : {
                                display: 'none'
                            }}>
                                {props.seventhHeader}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                // borderBottom: '1px solid #E7E7E7'
                            } : {
                                display: 'none'
                            }}>
                                {props.headerActions}
                            </Form.Label>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '40%'
                        }}>
                            <Form.Label style={{
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                marginTop: '3px'
                            }}>
                                {props.data.dateAdded}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                            } : {
                                display: "none"
                            }}>
                                {props.data.businessName}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                            } : {
                                display: "none"
                            }}>
                                {props.data.price}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                            } : {
                                display: "none"
                            }}>
                                {props.data.insurancePrice}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                            } : {
                                display: "none"
                            }}>
                                {props.data.repayment}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                            } : {
                                display: "none"
                            }}>
                                {props.data.total}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? props.data.status === "Waiting" ? {
                                fontSize: "12px",
                                fontWeight: '500',
                                width: 'fit-content',
                                color: "#FFC700",
                                background: "rgba(255, 199, 0, 0.2)",
                                borderRadius: '100px',
                                padding: '2px 10px'
                            } : props.data.status === "Confirmed" ? {
                                fontSize: "12px",
                                fontWeight: '500',
                                width: 'fit-content',
                                color: "#7CC427",
                                background: "rgba(124, 196, 39, 0.2)",
                                borderRadius: '100px',
                                padding: '2px 10px'
                            } : props.data.status === "Rejected" ? {
                                fontSize: "12px",
                                fontWeight: '500',
                                width: 'fit-content',
                                color: "#F20808",
                                background: "rgba(242, 8, 8, 0.2)",
                                borderRadius: '100px',
                                padding: '2px 10px'
                            } : {} : {
                                display: 'none'
                            }}>
                                {props.data.status}
                            </Form.Label>
                            <div style={index === props.idx ? {
                                display: "flex",
                                gap: "10px"
                            } : {
                                display: "none"
                            }}>
                                <Image
                                    onClick={() => props.setAdminFullinfoLoadboardMobile(true)}
                                    style={{
                                        width: '24px',
                                        height: '24px',
                                        cursor: "pointer"
                                    }}
                                    src={props.data.action[0]} width="24" height="24" alt="up" />
                                <Image
                                    onClick={() => props.setRefund(true)}
                                    style={{
                                        width: "24px",
                                        maxWidth: "100%",
                                        cursor: "pointer"
                                    }}
                                    src="/img/transaction.png"
                                    width="24"
                                    height="24"
                                    alt="badge"
                                />
                            </div>
                        </div>
                    </>
                }
                {props.isAdmins && (
                    <>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '35%'
                        }}>
                            <Form.Label style={{
                                fontSize: "12px",
                                fontWeight: "500",
                                marginTop: "5px",
                                color: "black",
                                // borderBottom: '1px solid #E7E7E7'
                            }}>
                                {props.firstHeader}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                // borderBottom: '1px solid #E7E7E7'
                            } : {
                                display: 'none'
                            }}>
                                {props.secondHeader}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                // borderBottom: '1px solid #E7E7E7'
                            } : {
                                display: 'none'
                            }}>
                                {props.thirdHeader}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                // borderBottom: '1px solid #E7E7E7'
                            } : {
                                display: 'none'
                            }}>
                                {props.fourthHeader}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                // borderBottom: '1px solid #E7E7E7'
                            } : {
                                display: 'none'
                            }}>
                                {props.headerActions}
                            </Form.Label>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '55%'
                        }}>
                            <Form.Label style={{
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                marginTop: '3px'
                            }}>
                                {props.data.agentNo}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                            } : {
                                display: "none"
                            }}>
                                {props.data.dateAdded}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                            } : {
                                display: "none"
                            }}>
                                {props.data.businessName}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                            } : {
                                display: "none"
                            }}>
                                {props.data.phoneNumber}
                            </Form.Label>
                            <div style={index === props.idx ? {
                                display: "flex",
                                gap: "10px"
                            } : {
                                display: "none"
                            }}>
                                <Image
                                    onClick={() => props.setAdminFullInformation(true)}
                                    style={{
                                        width: '24px',
                                        height: '24px',
                                        cursor: "pointer"
                                    }}
                                    src={props.data.action[0]} width="24" height="24" alt="up" />
                                <Image
                                    onClick={() => props.setEditAdmins(true)}
                                    style={{
                                        width: '24px',
                                        height: '24px',
                                        cursor: "pointer"
                                    }}
                                    src={props.data.action[1]} width="24" height="24" alt="up" />
                                <Image
                                    style={{
                                        width: '24px',
                                        height: '24px',
                                        cursor: "pointer"
                                    }}
                                    src={props.data.action[2]} width="24" height="24" alt="up" />
                            </div>
                        </div>
                    </>
                )}
                {(props.isLoadboardManagement
                    || props.isLoadboardRequest
                    || props.isOrders) && (
                        <>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '35%'
                            }}>
                                <Form.Label style={{
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    marginTop: "5px",
                                    color: "black",
                                    // borderBottom: '1px solid #E7E7E7'
                                }}>
                                    {props.firstHeader}
                                </Form.Label>
                                <Form.Label style={index === props.idx ? {
                                    display: "block",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    color: "black",
                                    // borderBottom: '1px solid #E7E7E7'
                                } : {
                                    display: 'none'
                                }}>
                                    {props.secondHeader}
                                </Form.Label>
                                <Form.Label style={index === props.idx ? {
                                    display: "block",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    color: "black",
                                    // borderBottom: '1px solid #E7E7E7'
                                } : {
                                    display: 'none'
                                }}>
                                    {props.thirdHeader}
                                </Form.Label>
                                <Form.Label style={index === props.idx ? {
                                    display: "block",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    color: "black",
                                    // borderBottom: '1px solid #E7E7E7'
                                } : {
                                    display: 'none'
                                }}>
                                    {props.fourthHeader}
                                </Form.Label>
                                <Form.Label style={index === props.idx ? {
                                    display: "block",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    color: "black",
                                    // borderBottom: '1px solid #E7E7E7'
                                } : {
                                    display: 'none'
                                }}>
                                    {props.fifthHeader}
                                </Form.Label>
                                <Form.Label style={index === props.idx ? {
                                    display: "block",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    color: "black",
                                    // borderBottom: '1px solid #E7E7E7'
                                } : {
                                    display: 'none'
                                }}>
                                    {props.sixthHeader}
                                </Form.Label>
                                <Form.Label style={index === props.idx ? {
                                    display: "block",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    color: "black",
                                    // borderBottom: '1px solid #E7E7E7'
                                } : {
                                    display: 'none'
                                }}>
                                    {props.seventhHeader}
                                </Form.Label>
                                <Form.Label style={index === props.idx ? {
                                    display: "block",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    color: "black",
                                    // borderBottom: '1px solid #E7E7E7'
                                } : {
                                    display: 'none'
                                }}>
                                    {props.EighthHeader}
                                </Form.Label>
                                <Form.Label style={index === props.idx ? {
                                    display: "block",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    color: "black",
                                    // borderBottom: '1px solid #E7E7E7'
                                } : {
                                    display: 'none'
                                }}>
                                    {props.headerActions}
                                </Form.Label>
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '55%'
                            }}>
                                <Form.Label style={{
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    color: "black",
                                    marginTop: '3px'
                                }}>
                                    {props.data.orderNo}
                                </Form.Label>
                                <Form.Label style={index === props.idx ? {
                                    display: "block",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    color: "black",
                                } : {
                                    display: "none"
                                }}>
                                    {props.data.dateAdded}
                                </Form.Label>
                                <Form.Label style={index === props.idx ? {
                                    display: "block",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    color: "black",
                                } : {
                                    display: "none"
                                }}>
                                    {props.data.businessName}
                                </Form.Label>
                                <Form.Label style={index === props.idx ? {
                                    display: "block",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    color: "black",
                                } : {
                                    display: "none"
                                }}>
                                    {props.data.recipient}
                                </Form.Label>
                                <Form.Label style={index === props.idx ? {
                                    display: "block",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    color: "black",
                                } : {
                                    display: "none"
                                }}>
                                    {props.data.deliverFrom}
                                </Form.Label>
                                <Form.Label style={index === props.idx ? {
                                    display: "block",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    color: "black",
                                } : {
                                    display: "none"
                                }}>
                                    {props.data.deliverTo}
                                </Form.Label>
                                <Form.Label style={index === props.idx ? props.data.status === "Waiting" ? {
                                    fontSize: "12px",
                                    fontWeight: '500',
                                    width: 'fit-content',
                                    color: "#FFC700",
                                    background: "rgba(255, 199, 0, 0.2)",
                                    borderRadius: '100px',
                                    padding: '2px 10px'
                                } : props.data.status === "Confirmed" ? {
                                    fontSize: "12px",
                                    fontWeight: '500',
                                    width: 'fit-content',
                                    color: "#7CC427",
                                    background: "rgba(124, 196, 39, 0.2)",
                                    borderRadius: '100px',
                                    padding: '2px 10px'
                                } : props.data.status === "Rejected" ? {
                                    fontSize: "12px",
                                    fontWeight: '500',
                                    width: 'fit-content',
                                    color: "#F20808",
                                    background: "rgba(242, 8, 8, 0.2)",
                                    borderRadius: '100px',
                                    padding: '2px 10px'
                                } : {} : {
                                    display: 'none'
                                }}>
                                    {props.data.status}
                                </Form.Label>
                                <Form.Label style={index === props.idx ? {
                                    display: "block",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    color: "black",
                                } : {
                                    display: "none"
                                }}>
                                    {props.data.price}
                                </Form.Label>
                                <div style={index === props.idx ? {
                                    display: "flex",
                                    gap: "10px"
                                } : {
                                    display: "none"
                                }}>
                                    {(props.isLoadboardManagement
                                        || props.isOrders) ? (
                                        <Image
                                            onClick={() => props.setAdminFullinfoLoadboardMobile(true)}
                                            style={{
                                                width: '24px',
                                                height: '24px',
                                                cursor: "pointer"
                                            }}
                                            src={props.data.action[0]} width="24" height="24" alt="up" />
                                    ) : (
                                        <div style={{
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
                                                            width: '140px',
                                                            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.1)",
                                                            transition: "0.3s"
                                                        }}>
                                                            <Form.Label
                                                                onClick={() => props.setAdminFullinfoLoadboardMobile(true)}
                                                                className={styles.hov}
                                                                style={{
                                                                    fontSize: "10px",
                                                                    color: "#151515",
                                                                    cursor: "pointer"
                                                                }}>
                                                                View load request
                                                            </Form.Label>
                                                        </Popover.Body>
                                                    </Popover>
                                                }
                                            >
                                                <span ref={loadboardTarget}>
                                                    <Image
                                                        style={{
                                                            width: '24px',
                                                            height: '24px',
                                                            cursor: "pointer"
                                                        }}
                                                        src={props.data.action[0]} width="24" height="24" alt="up" />
                                                </span>
                                            </OverlayTrigger>
                                        </div>
                                    )}
                                    {(props.isLoadboardManagement
                                        || props.isOrders) && (
                                            <Image
                                                onClick={() => props.setEditModal(true)}
                                                style={{
                                                    width: '24px',
                                                    height: '24px',
                                                    cursor: "pointer"
                                                }}
                                                src={props.data.action[1]} width="24" height="24" alt="up" />
                                        )}
                                    {props.isLoadboardRequest && (
                                        <>
                                            <div style={{
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
                                                                width: '140px',
                                                                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.1)",
                                                                transition: "0.3s"
                                                            }}>
                                                                {LoadActionDetails.map((data, idx) => (
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
                                                                                idx === 0 ? props.setAssignLoad(true)
                                                                                    : idx === 1 ? props.setHideLoad(true)
                                                                                        : idx === 2 ? props.setRemoveLoad(true) : undefined
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
                                                    <span ref={loadboardTarget}>
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
                                        </>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                {props.isBlogRequest && (
                    <>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '35%'
                        }}>
                            <Form.Label style={{
                                fontSize: "12px",
                                fontWeight: "500",
                                marginTop: "5px",
                                color: "black",
                                // borderBottom: '1px solid #E7E7E7'
                            }}>
                                {props.firstHeader}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                // borderBottom: '1px solid #E7E7E7'
                            } : {
                                display: 'none'
                            }}>
                                {props.secondHeader}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                // borderBottom: '1px solid #E7E7E7'
                            } : {
                                display: 'none'
                            }}>
                                {props.thirdHeader}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                // borderBottom: '1px solid #E7E7E7'
                            } : {
                                display: 'none'
                            }}>
                                {props.headerActions}
                            </Form.Label>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '55%'
                        }}>
                            <Form.Label style={{
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                marginTop: '3px'
                            }}>
                                {props.data.dateAdded}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                            } : {
                                display: "none"
                            }}>
                                {props.data.businessName}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? props.data.status === "Waiting" ? {
                                fontSize: "12px",
                                fontWeight: '500',
                                width: 'fit-content',
                                color: "#FFC700",
                                background: "rgba(255, 199, 0, 0.2)",
                                borderRadius: '100px',
                                padding: '2px 10px'
                            } : props.data.status === "Confirmed" ? {
                                fontSize: "12px",
                                fontWeight: '500',
                                width: 'fit-content',
                                color: "#7CC427",
                                background: "rgba(124, 196, 39, 0.2)",
                                borderRadius: '100px',
                                padding: '2px 10px'
                            } : props.data.status === "Rejected" ? {
                                fontSize: "12px",
                                fontWeight: '500',
                                width: 'fit-content',
                                color: "#F20808",
                                background: "rgba(242, 8, 8, 0.2)",
                                borderRadius: '100px',
                                padding: '2px 10px'
                            } : {} : {
                                display: 'none'
                            }}>
                                {props.data.status}
                            </Form.Label>
                            <div style={index === props.idx ? {
                                display: "flex",
                                gap: "10px"
                            } : {
                                display: "none"
                            }}>
                                <Image
                                    onClick={() => props.setBlogModal(true)}
                                    style={{
                                        width: '24px',
                                        height: '24px',
                                        cursor: "pointer"
                                    }}
                                    src={props.data.action[0]} width="24" height="24" alt="up" />
                            </div>
                        </div>
                    </>
                )}
                {(props.isDriversRequest
                    || props.isBrokersRequest
                    || props.isDriverManagersRequest
                    || props.isShippingCompaniesRequest
                    || props.isTransportCompaniesRequest
                    || props.isEmployeeRequest
                    || props.isClearingRequest) && (
                        <>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '35%'
                            }}>
                                <Form.Label style={{
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    marginTop: "5px",
                                    color: "black",
                                    // borderBottom: '1px solid #E7E7E7'
                                }}>
                                    Date Posted
                                </Form.Label>
                                <Form.Label style={index === props.idx ? {
                                    display: "block",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    color: "black",
                                    // borderBottom: '1px solid #E7E7E7'
                                } : {
                                    display: 'none'
                                }}>
                                    Name
                                </Form.Label>
                                <Form.Label style={index === props.idx ? {
                                    display: "block",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    color: "black",
                                    // borderBottom: '1px solid #E7E7E7'
                                } : {
                                    display: 'none'
                                }}>
                                    Status
                                </Form.Label>
                                <Form.Label style={index === props.idx ? {
                                    display: "block",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    color: "black",
                                    // borderBottom: '1px solid #E7E7E7'
                                } : {
                                    display: 'none'
                                }}>
                                    Actions
                                </Form.Label>
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '55%'
                            }}>
                                <Form.Label style={{
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    color: "black",
                                    marginTop: '3px'
                                }}>
                                    {props.data.dateAdded}
                                </Form.Label>
                                <Form.Label style={index === props.idx ? {
                                    display: "block",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    color: "black",
                                    // borderBottom: '1px solid #E7E7E7'
                                } : {
                                    display: 'none'
                                }}>
                                    {props.data.businessName}
                                </Form.Label>
                                <Form.Label style={index === props.idx ? props.data.status === "Waiting" ? {
                                    fontSize: "12px",
                                    fontWeight: '500',
                                    width: 'fit-content',
                                    color: "#FFC700",
                                    background: "rgba(255, 199, 0, 0.2)",
                                    borderRadius: '100px',
                                    padding: '2px 10px'
                                } : props.data.status === "Confirmed" ? {
                                    fontSize: "12px",
                                    fontWeight: '500',
                                    width: 'fit-content',
                                    color: "#7CC427",
                                    background: "rgba(124, 196, 39, 0.2)",
                                    borderRadius: '100px',
                                    padding: '2px 10px'
                                } : props.data.status === "Rejected" ? {
                                    fontSize: "12px",
                                    fontWeight: '500',
                                    width: 'fit-content',
                                    color: "#F20808",
                                    background: "rgba(242, 8, 8, 0.2)",
                                    borderRadius: '100px',
                                    padding: '2px 10px'
                                } : {} : {
                                    display: 'none'
                                }}>
                                    {props.data.status}
                                </Form.Label>
                                <div style={index === props.idx ? {
                                    display: "flex",
                                    gap: "10px"
                                } : {
                                    display: "none"
                                }}>
                                    <Image
                                        onClick={() => {
                                            props.setAdminFullinfo(true)
                                            props.setAgentNoEdit(props.data.agentNo);
                                            props.handleFullInfo()
                                        }}
                                        style={{
                                            width: '24px',
                                            height: '24px',
                                            cursor: "pointer"
                                        }}
                                        src={props.data.action[0]} width="24" height="24" alt="up" />
                                </div>
                            </div>
                        </>
                    )}
                {props.isSpecializedShipment && (
                    <>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '40%'
                        }}>
                            <Form.Label style={{
                                fontSize: "12px",
                                fontWeight: "500",
                                marginTop: "5px",
                                color: "black",
                                // borderBottom: '1px solid #E7E7E7'
                            }}>
                                {props.firstHeader}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                // borderBottom: '1px solid #E7E7E7'
                            } : {
                                display: 'none'
                            }}>
                                {props.secondHeader}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                // borderBottom: '1px solid #E7E7E7'
                            } : {
                                display: 'none'
                            }}>
                                {props.thirdHeader}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                            } : {
                                display: 'none'
                            }}>
                                {props.fourthHeader}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                // borderBottom: '1px solid #E7E7E7'
                            } : {
                                display: 'none'
                            }}>
                                {props.fifthHeader}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                // borderBottom: '1px solid #E7E7E7'
                            } : {
                                display: 'none'
                            }}>
                                {props.sixtHeader}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                // borderBottom: '1px solid #E7E7E7'
                            } : {
                                display: 'none'
                            }}>
                                {props.headerActions}
                            </Form.Label>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '55%'
                        }}>
                            <Form.Label style={{
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                marginTop: '3px'
                            }}>
                                {props.data.businessName}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                            } : {
                                display: "none"
                            }}>
                                {props.data.email.slice(0, 15) + "..."}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                            } : {
                                display: "none"
                            }}>
                                {props.data.loadType}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                            } : {
                                display: "none"
                            }}>
                                {props.data.deliverFrom}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                            } : {
                                display: "none"
                            }}>
                                {props.data.deliverTo}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? props.data.status === "Waiting" ? {
                                fontSize: "12px",
                                fontWeight: '500',
                                width: 'fit-content',
                                color: "#FFC700",
                                background: "rgba(255, 199, 0, 0.2)",
                                borderRadius: '100px',
                                padding: '2px 10px'
                            } : props.data.status === "Confirmed" ? {
                                fontSize: "12px",
                                fontWeight: '500',
                                width: 'fit-content',
                                color: "#7CC427",
                                background: "rgba(124, 196, 39, 0.2)",
                                borderRadius: '100px',
                                padding: '2px 10px'
                            } : props.data.status === "Rejected" ? {
                                fontSize: "12px",
                                fontWeight: '500',
                                width: 'fit-content',
                                color: "#F20808",
                                background: "rgba(242, 8, 8, 0.2)",
                                borderRadius: '100px',
                                padding: '2px 10px'
                            } : {} : {
                                display: 'none'
                            }}>
                                {props.data.status}
                            </Form.Label>
                            <div style={index === props.idx ? {
                                display: 'block',
                                fontSize: '18px',
                                color: "black",
                                background: "white",
                                fontWeight: '600'
                            } : {
                                display: "none"
                            }}>
                                <OverlayTrigger
                                    trigger="click"
                                    placement="bottom"
                                    rootClose
                                    overlay={
                                        <Popover id={`popover-positioned-bottom`}>
                                            <Popover.Body style={{
                                                width: '175px',
                                                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.1)",
                                                transition: "0.3s"
                                            }}>
                                                {actionDetails.map((data, idx) => (
                                                    <div
                                                        className={styles.hov}
                                                        key={idx}
                                                        style={{
                                                            display: 'flex',
                                                            gap: '10px',
                                                            width: "100%"
                                                        }}>
                                                        <BiRadioCircle />
                                                        <Form.Label
                                                            onClick={() => {
                                                                idx === 0 ? props.setSpcializedModal(true)
                                                                    : idx === 1 ? props.setGenerateInvoice(true)
                                                                        : idx === 2 ? props.setSendToLoadboard(true)
                                                                            : undefined
                                                            }}
                                                            style={{
                                                                fontSize: "10px",
                                                                color: "#151515",
                                                                cursor: "pointer"
                                                            }}>
                                                            {data.msg}
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
                                                width: "20px",
                                                maxWidth: "100%",
                                                marginLeft: '10px',
                                                cursor: "pointer"
                                            }}
                                            src="/img/adminellipses.png"
                                            width="20"
                                            height="5"
                                            alt="badge"
                                        />
                                    </span>
                                </OverlayTrigger>
                            </div>
                        </div>
                    </>
                )}
                {(props.isDriversManagement
                    || props.isCustomers
                    || props.isBrokersManagement
                    || props.isDriverManagersManagement
                    || props.isShippingCompaniesManagement
                    || props.isTransportCompaniesManagement
                    || props.isEmployeeManagement
                    || props.isClearingManagement) && (
                        <>
                            <div style={props.isCustomers ? {
                                display: 'flex',
                                flexDirection: 'column',
                                width: '40%'
                            } : {
                                display: 'flex',
                                flexDirection: 'column',
                                width: '35%'
                            }}>
                                <Form.Label style={{
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    marginTop: "5px",
                                    color: "black",
                                    // borderBottom: '1px solid #E7E7E7'
                                }}>
                                    {props.firstHeader}
                                </Form.Label>
                                <Form.Label style={index === props.idx ? {
                                    display: "block",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    color: "black",
                                    // borderBottom: '1px solid #E7E7E7'
                                } : {
                                    display: 'none'
                                }}>
                                    {props.secondHeader}
                                </Form.Label>
                                <Form.Label style={index === props.idx ? {
                                    display: "block",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    color: "black",
                                    // borderBottom: '1px solid #E7E7E7'
                                } : {
                                    display: 'none'
                                }}>
                                    {props.thirdHeader}
                                </Form.Label>
                                <Form.Label style={index === props.idx ? {
                                    display: "block",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    color: "black",
                                } : {
                                    display: 'none'
                                }}>
                                    {props.fourthHeader}
                                </Form.Label>
                                <Form.Label style={index === props.idx ? {
                                    display: "block",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    color: "black",
                                    marginTop: "15px"
                                    // borderBottom: '1px solid #E7E7E7'
                                } : {
                                    display: 'none'
                                }}>
                                    {props.fifthHeader}
                                </Form.Label>
                                {props.isDriversManagement && (
                                    <>
                                        <Form.Label style={index === props.idx ? {
                                            display: "block",
                                            fontSize: "12px",
                                            fontWeight: "500",
                                            color: "black",
                                            // borderBottom: '1px solid #E7E7E7'
                                        } : {
                                            display: 'none'
                                        }}>
                                            {props.sixthHeader}
                                        </Form.Label>
                                        <Form.Label style={index === props.idx ? {
                                            display: "block",
                                            fontSize: "12px",
                                            fontWeight: "500",
                                            color: "black",
                                            // borderBottom: '1px solid #E7E7E7'
                                        } : {
                                            display: 'none'
                                        }}>
                                            {props.seventhHeader}
                                        </Form.Label>
                                    </>
                                )}
                                <Form.Label style={index === props.idx ? {
                                    display: "block",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    color: "black",
                                    // borderBottom: '1px solid #E7E7E7'
                                } : {
                                    display: 'none'
                                }}>
                                    {props.headerActions}
                                </Form.Label>
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '55%'
                            }}>
                                {(props.isDriverManagersManagement
                                    || props.isTransportCompaniesManagement
                                    || props.isClearingManagement) && (
                                        <>
                                            <Form.Label style={{
                                                fontSize: "12px",
                                                fontWeight: "500",
                                                color: "black",
                                                marginTop: '3px'
                                            }}>
                                                {props.data.businessName}
                                            </Form.Label>
                                            <Form.Label style={index === props.idx ? {
                                                display: "block",
                                                fontSize: "12px",
                                                fontWeight: "500",
                                                color: "black",
                                                // borderBottom: '1px solid #E7E7E7'
                                            } : {
                                                display: "none"
                                            }}>
                                                {props.data.dateAdded}
                                            </Form.Label>
                                            <div style={index === props.idx ? {
                                                display: "flex",
                                                color: "black",
                                                fontSize: '12px'
                                            } : {
                                                display: "none"
                                            }}>
                                                {new Array(5).fill(
                                                    <Image
                                                        style={{
                                                            width: "10px",
                                                            maxWidth: "100%",
                                                            marginLeft: '10px'
                                                        }}
                                                        src="/img/rateact.png"
                                                        width="10"
                                                        height="9"
                                                        alt="badge"
                                                    />
                                                ).map((data, idx) => (
                                                    <span style={{
                                                        marginLeft: '-8px'
                                                    }} key={idx}>
                                                        {data}
                                                    </span>
                                                ))}
                                                <Form.Label style={{
                                                    display: "block",
                                                    fontSize: "12px",
                                                    fontWeight: "500",
                                                    color: "black",
                                                    marginLeft: "10px"
                                                }}>
                                                    {props.data.rate}
                                                </Form.Label>
                                            </div>
                                            <Form.Label style={index === props.idx ? {
                                                display: "block",
                                                fontSize: "12px",
                                                fontWeight: "500",
                                                color: "black",
                                                // borderBottom: '1px solid #E7E7E7'
                                            } : {
                                                display: "none"
                                            }}>
                                                {props.data.address}
                                            </Form.Label>
                                            <Form.Label style={index === props.idx ? {
                                                display: "block",
                                                fontSize: "12px",
                                                fontWeight: "500",
                                                color: "black",
                                                // borderBottom: '1px solid #E7E7E7'
                                            } : {
                                                display: "none"
                                            }}>
                                                {props.data.phoneNumber}
                                            </Form.Label>
                                        </>
                                    )}
                                {(props.isCustomers
                                    || props.isBrokersManagement
                                    || props.isShippingCompaniesManagement
                                    || props.isEmployeeManagement) && (
                                        <>
                                            <Form.Label style={{
                                                fontSize: "12px",
                                                fontWeight: "500",
                                                color: "black",
                                                marginTop: '3px'
                                            }}>
                                                {props.data.businessName}
                                            </Form.Label>
                                            <Form.Label style={index === props.idx ? {
                                                display: "block",
                                                fontSize: "12px",
                                                fontWeight: "500",
                                                color: "black",
                                                // borderBottom: '1px solid #E7E7E7'
                                            } : {
                                                display: "none"
                                            }}>
                                                {props.data.email}
                                            </Form.Label>
                                            <Form.Label style={index === props.idx ? {
                                                display: "block",
                                                fontSize: "12px",
                                                fontWeight: "500",
                                                color: "black",
                                                // borderBottom: '1px solid #E7E7E7'
                                            } : {
                                                display: "none"
                                            }}>
                                                {props.data.address}
                                            </Form.Label>
                                            <Form.Label style={index === props.idx ? {
                                                display: "block",
                                                fontSize: "12px",
                                                fontWeight: "500",
                                                color: "black",
                                                // borderBottom: '1px solid #E7E7E7'
                                            } : {
                                                display: "none"
                                            }}>
                                                {props.data.phoneNumber}
                                            </Form.Label>
                                            {(props.isCustomers
                                                || props.isBrokersManagement
                                                || props.isShippingCompaniesManagement && (
                                                    <Form.Label style={index === props.idx ? {
                                                        display: "block",
                                                        fontSize: "12px",
                                                        fontWeight: "500",
                                                        color: "black",
                                                        marginTop: '13px'
                                                        // borderBottom: '1px solid #E7E7E7'
                                                    } : {
                                                        display: "none"
                                                    }}>
                                                        {props.data.dateAdded}
                                                    </Form.Label>
                                                ))}
                                            {props.isEmployeeManagement && (
                                                <Form.Label style={index === props.idx ? {
                                                    display: "block",
                                                    fontSize: "12px",
                                                    fontWeight: "500",
                                                    color: "black",
                                                    marginTop: '13px'
                                                    // borderBottom: '1px solid #E7E7E7'
                                                } : {
                                                    display: "none"
                                                }}>
                                                    {props.data.department}
                                                </Form.Label>
                                            )}
                                        </>
                                    )}
                                {props.isDriversManagement && (
                                    <>
                                        <Form.Label style={{
                                            fontSize: "12px",
                                            fontWeight: "500",
                                            color: "black",
                                            marginTop: '3px'
                                        }}>
                                            {props.data.businessName}
                                        </Form.Label>
                                        <Form.Label style={index === props.idx ? {
                                            display: "block",
                                            fontSize: "12px",
                                            fontWeight: "500",
                                            color: "black",
                                            // borderBottom: '1px solid #E7E7E7'
                                        } : {
                                            display: "none"
                                        }}>
                                            {props.data.dateAdded}
                                        </Form.Label>
                                        <div style={index === props.idx ? {
                                            display: "flex",
                                            color: "black",
                                            fontSize: '12px'
                                        } : {
                                            display: "none"
                                        }}>
                                            {new Array(5).fill(
                                                <Image
                                                    style={{
                                                        width: "10px",
                                                        maxWidth: "100%",
                                                        marginLeft: '10px'
                                                    }}
                                                    src="/img/rateact.png"
                                                    width="10"
                                                    height="9"
                                                    alt="badge"
                                                />
                                            ).map((data, idx) => (
                                                <span style={{
                                                    marginLeft: '-8px'
                                                }} key={idx}>
                                                    {data}
                                                </span>
                                            ))}
                                            <Form.Label style={{
                                                display: "block",
                                                fontSize: "12px",
                                                fontWeight: "500",
                                                color: "black",
                                                marginLeft: "10px"
                                            }}>
                                                {props.data.rate}
                                            </Form.Label>
                                        </div>
                                        <Form.Label style={index === props.idx ? {
                                            display: "block",
                                            fontSize: "12px",
                                            fontWeight: "500",
                                            color: "black",
                                            // borderBottom: '1px solid #E7E7E7'
                                        } : {
                                            display: "none"
                                        }}>
                                            {props.data.address}
                                        </Form.Label>
                                        <Form.Label style={index === props.idx ? {
                                            display: "block",
                                            fontSize: "12px",
                                            fontWeight: "500",
                                            color: "black",
                                            // borderBottom: '1px solid #E7E7E7'
                                        } : {
                                            display: "none"
                                        }}>
                                            {props.data.phoneNumber}
                                        </Form.Label>
                                        <Form.Label style={index === props.idx ? {
                                            display: "block",
                                            fontSize: "12px",
                                            fontWeight: "500",
                                            color: "black",
                                            // borderBottom: '1px solid #E7E7E7'
                                        } : {
                                            display: "none"
                                        }}>
                                            {props.data.license}
                                        </Form.Label>
                                        <Form.Label style={index === props.idx ? {
                                            display: "block",
                                            fontSize: "12px",
                                            fontWeight: "500",
                                            color: "black",
                                            // borderBottom: '1px solid #E7E7E7'
                                        } : {
                                            display: "none"
                                        }}>
                                            {props.data.vehicleType}
                                        </Form.Label>
                                    </>
                                )}
                                <div style={index === props.idx ?
                                    props.isShippingCompaniesManagement ? {
                                        display: "flex",
                                        gap: "10px",
                                        marginTop: "10px"
                                    } : {
                                        display: "flex",
                                        gap: "10px"
                                    } : {
                                        display: "none"
                                    }}>
                                    <Image
                                        onClick={(props.isCustomers
                                            || props.isBrokersManagement
                                            || props.isShippingCompaniesManagement) ?
                                            () => {
                                                props.setAllOrders(true)
                                                props.fetchOrderDetails(props.idx)
                                            } : () => {
                                                props.setAdminFullinfo(true)
                                                props.setAgentNoEdit(props.data.agentNo);
                                                props.handleFullInfo()
                                            }}
                                        style={{
                                            width: '24px',
                                            height: '24px',
                                            cursor: "pointer"
                                        }}
                                        src={props.data.action[0]} width="24" height="24" alt="up" />
                                    <Image
                                        onClick={(props.isCustomers
                                            || props.isBrokersManagement
                                            || props.isDriverManagersManagement
                                            || props.isShippingCompaniesManagement
                                            || props.isTransportCompaniesManagement
                                            || props.isEmployeeManagement
                                            || props.isClearingManagement) ?
                                            () => {
                                                props.setEditModal(true)
                                                props.fetchData(props.idx)
                                                props.setCustBrokId(props.idx)
                                            } : () => {
                                                props.setEditModal(true)
                                                props.fetchData(props.idx)
                                                props.setDriverId(props.idx)
                                            }}
                                        style={{
                                            width: '24px',
                                            height: '24px',
                                            cursor: "pointer"
                                        }}
                                        src={props.data.action[1]} width="24" height="24" alt="up" />
                                    {(props.isDriversManagement
                                        || props.isDriverManagersManagement
                                        || props.isTransportCompaniesManagement
                                        || props.isClearingManagement) && (
                                            <Image
                                                style={{
                                                    width: '24px',
                                                    height: '24px'
                                                }}
                                                src={props.data.action[4]} width="24" height="24" alt="up" />
                                        )}
                                    <Image
                                        style={{
                                            width: '24px',
                                            height: '24px'
                                        }}
                                        src={props.data.action[2]} width="24" height="24" alt="up" />
                                </div>
                            </div>
                        </>
                    )}
            </div>
        </>
    )
}