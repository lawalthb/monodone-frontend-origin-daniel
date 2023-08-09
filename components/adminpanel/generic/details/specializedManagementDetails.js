import Image from "next/image";
import { useState, useRef } from "react";
import { Form, OverlayTrigger, Popover } from "react-bootstrap";
import { BiRadioCircle } from "react-icons/bi";
import CustomPagination from "../../customPagination";
import styles from '../../../customers/customerdashboard.module.css'
import SpecializedModal from "../../common/specializedModal";
import InvoiceModal from "../../common/invoiceModal";
import RejectMailModal from "../../common/rejectMailModal";

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

export default function SpecializedManagementDetails(props) {
    const target = useRef(null);
    const [specializedModal, setSpcializedModal] = useState(false)
    const [generateInvoice, setGenerateInvoice] = useState(false)
    const [sendToLoadboard, setSendToLoadboard] = useState(false)
    const [rejectModal, setRejectModal] = useState(false)
    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: 'space-between',
                width: '100%',
                gap: "20px"
            }}>
                <div style={{
                    width: '20%',
                    color: "#A6A6A6",
                    fontSize: '12px',
                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.1)",
                    transition: '0.3s',
                    background: "white",
                    padding: '8px'
                }}>
                    Sender&apos;s name
                </div>
                <div style={{
                    width: '20%',
                    color: "#A6A6A6",
                    fontSize: '12px',
                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.1)",
                    transition: '0.3s',
                    background: "white",
                    padding: '8px'
                }}>
                    E-mail
                </div>
                <div style={{
                    width: '10%',
                    color: "#A6A6A6",
                    fontSize: '12px',
                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.1)",
                    transition: '0.3s',
                    background: "white",
                    padding: '8px'
                }}>
                    Load type
                </div>
                <div style={{
                    width: '10%',
                    color: "#A6A6A6",
                    fontSize: '12px',
                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.1)",
                    transition: '0.3s',
                    background: "white",
                    padding: '8px'
                }}>
                    Delivery From
                </div>
                <div style={{
                    width: '10%',
                    color: "#A6A6A6",
                    fontSize: '12px',
                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.1)",
                    transition: '0.3s',
                    background: "white",
                    padding: '8px'
                }}>
                    Deliver To
                </div>
                <div style={{
                    width: '10%',
                    color: "#A6A6A6",
                    fontSize: '12px',
                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.1)",
                    transition: '0.3s',
                    background: "white",
                    padding: '8px'
                }}>
                    Status
                </div>
                <div style={{
                    width: '10%',
                    color: "#A6A6A6",
                    fontSize: '12px',
                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.1)",
                    transition: '0.3s',
                    background: "white",
                    padding: '8px'
                }}>
                    Action
                </div>
            </div>
            {props.date.length > 0 ? props.adminAgentData.filter((data) => data.dateAdded === props.date)
                .slice((parseInt(props.pageNumber) * 10) - 10, parseInt(props.pageNumber) * 10)
                .map((data, index) => (
                    <>
                        <div
                            key={index}
                            style={{
                                display: "flex",
                                justifyContent: 'space-between',
                                width: '100%',
                                marginTop: '10px'
                            }}>
                            <div style={{
                                width: '20%',
                                color: "#A6A6A6",
                                fontSize: '12px',
                                color: "black",
                                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.1)",
                                transition: '0.3s',
                                background: "white",
                                padding: '8px'
                            }}>
                                {data.businessName}
                            </div>
                            <div style={{
                                width: '20%',
                                color: "#A6A6A6",
                                fontSize: '12px',
                                color: "black",
                                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.1)",
                                transition: '0.3s',
                                background: "white",
                                padding: '8px'
                            }}>
                                {data.email}
                            </div>
                            <div style={{
                                width: '10%',
                                color: "#A6A6A6",
                                fontSize: '12px',
                                color: "black",
                                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.1)",
                                transition: '0.3s',
                                background: "white",
                                padding: '8px'
                            }}>
                                {data.loadType}
                            </div>
                            <div style={{
                                width: '10%',
                                color: "#A6A6A6",
                                fontSize: '12px',
                                color: "black",
                                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.1)",
                                transition: '0.3s',
                                background: "white",
                                padding: '8px'
                            }}>
                                {data.deliverFrom}
                            </div>
                            <div style={{
                                width: '10%',
                                color: "#A6A6A6",
                                fontSize: '12px',
                                color: "black",
                                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.1)",
                                transition: '0.3s',
                                background: "white",
                                padding: '8px'
                            }}>
                                {data.deliverTo}
                            </div>
                            <div style={{
                                width: '10%',
                                fontSize: '12px',
                                color: "black",
                                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.1)",
                                transition: '0.3s',
                                background: "white",
                                padding: '8px'
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
                                fontSize: '18px',
                                color: "black",
                                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.1)",
                                transition: '0.3s',
                                background: "white",
                                padding: '8px',
                                fontWeight: '600'
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
                                                        <Form.Label style={{
                                                            fontSize: "10px",
                                                            color: "#151515"
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
                                                marginLeft: '10px'
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
                )) : props.adminAgentData
                    .slice((parseInt(props.pageNumber) * 10) - 10, parseInt(props.pageNumber) * 10)
                    .map((data, index) => (
                        <>
                            <div
                                key={index}
                                style={{
                                    display: "flex",
                                    justifyContent: 'space-between',
                                    width: '100%',
                                    marginTop: '10px'
                                }}>
                                <div style={{
                                    width: '20%',
                                    fontSize: '12px',
                                    color: "black",
                                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.1)",
                                    transition: '0.3s',
                                    background: "white",
                                    padding: '8px'
                                }}>
                                    {data.businessName}
                                </div>
                                <div style={{
                                    width: '20%',
                                    fontSize: '12px',
                                    color: "black",
                                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.1)",
                                    transition: '0.3s',
                                    background: "white",
                                    padding: '8px'
                                }}>
                                    {data.email}
                                </div>
                                <div style={{
                                    width: '10%',
                                    fontSize: '12px',
                                    color: "black",
                                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.1)",
                                    transition: '0.3s',
                                    background: "white",
                                    padding: '8px'
                                }}>
                                    {data.loadType}
                                </div>
                                <div style={{
                                    width: '10%',
                                    fontSize: '12px',
                                    color: "black",
                                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.1)",
                                    transition: '0.3s',
                                    background: "white",
                                    padding: '8px'
                                }}>
                                    {data.deliverFrom}
                                </div>
                                <div style={{
                                    width: '10%',
                                    fontSize: '12px',
                                    color: "black",
                                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.1)",
                                    transition: '0.3s',
                                    background: "white",
                                    padding: '8px'
                                }}>
                                    {data.deliverTo}
                                </div>
                                <div style={{
                                    width: '10%',
                                    fontSize: '12px',
                                    color: "black",
                                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.1)",
                                    transition: '0.3s',
                                    background: "white",
                                    padding: '8px'
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
                                    fontSize: '18px',
                                    color: "black",
                                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.1)",
                                    transition: '0.3s',
                                    background: "white",
                                    padding: '8px',
                                    fontWeight: '600'
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
                                                                    idx === 0 ? setSpcializedModal(true)
                                                                        : idx === 1 ? setGenerateInvoice(true)
                                                                            : idx === 2 ? setSendToLoadboard(true)
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
                    ))}
            <CustomPagination
                adminAgentData={props.adminAgentData}
                setPageNumbers={props.setPageNumbers}
                activePagenumber={props.activePagenumber}
                pageNumbers={props.pageNumbers}
                setPageNumber={props.setPageNumber}
                setActivePagenumber={props.setActivePagenumber}
            />
            <SpecializedModal
                style={{
                    marginLeft: '8%'
                }}
                specializedModal={specializedModal}
                setSpcializedModal={setSpcializedModal}
                setGenerateInvoice={setGenerateInvoice}
                setRejectModal={setRejectModal}
            />
            <InvoiceModal
                style={{
                    marginLeft: "8%"
                }}
                generateInvoice={generateInvoice}
                setGenerateInvoice={setGenerateInvoice}
            />
            <RejectMailModal
                style={{
                    marginLeft: "8%"
                }}
                rejectModal={rejectModal}
                setRejectModal={setRejectModal}
            />
        </>
    )
}