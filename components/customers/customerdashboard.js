import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { Button, Form, OverlayTrigger, Pagination, Popover, Stack, Table } from "react-bootstrap";
import { BiRadioCircle } from "react-icons/bi";
import { FaEllipsisH } from "react-icons/fa";
import styles from './customerdashboard.module.css'
import CustomerBulkMobile from "./customerBulkMobile";
import CustomerCarClearingMobile from "./customerCarClearingMobile";
import CustomerContainerShipmentMobile from "./customerContainerShipmentMobile";
import CustomerPackageMobile from "./customerPackageMobile";
import CustomerSpecializedShipmentMobile from "./customerSpecializedShipmentMobile";
import Media from "@/utils/media";

function PaginationRounded() {
    return (
        <Stack
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
            spacing={2}
        >
            <Pagination count={10} variant="outlined" shape="rounded" />
        </Stack>
    );
}

export default function CustomerDashboard(props) {
    const [noOfData, setNoOfData] = useState()
    const [data, setData] = useState([])
    const [agentNos, setAgentNos] = useState([])
    const [agentNo, setAgentNo] = useState("")
    const target = useRef(null);
    const { mobile, tabletAndDesktop} = Media();

    useEffect(() => {
        function moderatedAgentNos() {
            const newData = []
            const agentNumbers = props.customerPackageDelivery.map((dt) => dt.deliverTo)
            const agentNosSet = new Set(agentNumbers)
            for (let i of agentNosSet) {
                newData.push(i)
            }
            setAgentNos(newData)
        }
        moderatedAgentNos()
    }, [props.customerPackageDelivery])

    useEffect(() => {
        const adminData = []
        for (let i = 0; i <= props.customerPackageDelivery.length; i++) {
            if (i % 10 === 0) {
                adminData.push(i)
            }
        }
        setData(adminData)
    }, [props.customerPackageDelivery])

    useEffect(() => {
        setNoOfData(parseInt(10))
    }, [])

    return (
        <>
            {mobile && (
                <>
                    <div style={{
                        marginTop: "-5rem"
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: "space-between",
                            gap: '8px',
                            marginTop: '40px'
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
                        {props.isPackage ? (
                            props.customerPackageDelivery.slice(0, 10).map((data, idx) => (
                                <React.Fragment key={idx}>
                                <CustomerPackageMobile data={data} idx={idx} />
                                </React.Fragment>
                            )))
                            : props.isBulkDelivery ? (
                                props.customerBulkDelivery.slice(0, 10).map((data, idx) => (
                                    <React.Fragment key={idx}>
                                    <CustomerBulkMobile data={data} idx={idx} />
                                    </React.Fragment>
                                )))
                                : props.isCarClearing ? (
                                    props.customerBulkDelivery.slice(0, 10).map((data, idx) => (
                                        <React.Fragment key={idx}>
                                        <CustomerCarClearingMobile data={data} idx={idx} />
                                        </React.Fragment>
                                    ))
                                ) : props.isContainerShipment ? (
                                    props.customerBulkDelivery.slice(0, 10).map((data, idx) => (
                                        <React.Fragment key={idx}>
                                        <CustomerContainerShipmentMobile data={data} idx={idx} />
                                        </React.Fragment>
                                    ))
                                ) : props.isSpecializedShipment ? (
                                    props.customerBulkDelivery.slice(0, 10).map((data, idx) => (
                                        <React.Fragment key={idx}>
                                        <CustomerSpecializedShipmentMobile data={data} idx={idx} />
                                        </React.Fragment>
                                    ))
                                ) : ""
                        }
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
                                    {`of ${props.customerPackageDelivery.length} entries`}
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
                    </div>
                </>
            )}
            {tabletAndDesktop && (
                <>
                    <Table style={{ marginTop: "-20px" }}>
                        <thead className="tableh" style={{
                            height: "83px",
                            background: "rgba(125, 123, 123, 0.1)",
                            borderRadius: "10px"
                        }}>
                            <tr>
                                <th className={styles.tablehead}></th>
                                <th className={styles.tablehead}>Sender&apos;s Name</th>
                                <th className={styles.tablehead}>Parcel </th>
                                <th className={styles.tablehead}>Deliver From</th>
                                <th className={styles.tablehead}>Deliver To</th>
                                <th className={styles.tablehead}>Status</th>
                                <th className={styles.tablehead}>Action</th>
                            </tr>
                        </thead>
                        <tbody className={styles.tableBody}>
                            {props.isPackage ? (
                                props.customerPackageDelivery.slice(0, 10).map((data, index) => (
                                    <>
                                        <tr key={index}>
                                            <td className={styles.flex}>
                                                <Image width={32} height={32} alt="User" src={data.id} className={styles.image} />
                                            </td>
                                            <td className={styles.alignCenter}>{data.name}</td>
                                            <td style={{ marginLeft: '20px' }}>{data.parcel}</td>
                                            <td>
                                                <span>{data.deliverFrom}</span>
                                            </td>
                                            <td>
                                                <span>{data.deliverTo}</span>
                                            </td>
                                            <td>
                                                <Button
                                                    onClick={() => props.handleOrderModal()}
                                                    style={
                                                        `${data.userType}` === "Completed"
                                                            ? {
                                                                background: "white",
                                                                color: "green",
                                                                borderRadius: "6px",
                                                                width: "150px",
                                                                border: "1px solid green",
                                                            }
                                                            : `${data.userType}` === "Pending"
                                                                ? {
                                                                    background: "white",
                                                                    color: "yellow",
                                                                    borderRadius: "6px",
                                                                    width: "150px",
                                                                    border: "1px solid yellow",
                                                                }
                                                                : {
                                                                    background: "white",
                                                                    color: "red",
                                                                    borderRadius: "6px",
                                                                    width: "150px",
                                                                    border: "1px solid red",
                                                                }
                                                    }
                                                >
                                                    {data.userType}
                                                </Button>
                                            </td>
                                            <td>
                                                <OverlayTrigger
                                                    trigger="click"
                                                    placement="bottom"
                                                    rootClose
                                                    overlay={
                                                        <Popover id={`popover-positioned-bottom`}>
                                                            {props.dashboardType === "user" && (
                                                                <Popover.Body>
                                                                    <div
                                                                        className={styles.hov}
                                                                        onClick={() => props.handleOrderModal()}
                                                                    >
                                                                        <BiRadioCircle />
                                                                        <span className="ml-2">{data.action[0]}</span>
                                                                    </div>
                                                                    <div
                                                                        className={`mt-2 ${styles.hov}`}
                                                                        onClick={() => props.handleRateDriver()}
                                                                    >
                                                                        <BiRadioCircle />
                                                                        <span className="ml-2">{data.action[1]}</span>
                                                                    </div>
                                                                    <div
                                                                        className={`mt-2 ${styles.hov}`}
                                                                        onClick={() => props.handleViewQuotation()}
                                                                    >
                                                                        <BiRadioCircle />
                                                                        <span className="ml-2">{data.action[9]}</span>
                                                                    </div>
                                                                </Popover.Body>
                                                            )}
                                                            {props.dashboardType === "admin" && (
                                                                <Popover.Body>
                                                                    <div
                                                                        className={styles.hov}
                                                                        onClick={() => props.handleRemoveAdmin()}
                                                                    >
                                                                        <BiRadioCircle />
                                                                        <span className="ml-2">{data.action[2]}</span>
                                                                    </div>
                                                                    <div
                                                                        className={`mt-2 ${styles.hov}`}
                                                                        onClick={() => props.handleAssignAdmin()}
                                                                    >
                                                                        <BiRadioCircle />
                                                                        <span className="ml-2">{data.action[3]}</span>
                                                                    </div>
                                                                    <div
                                                                        className={`mt-2 ${styles.hov}`}
                                                                        onClick={() => props.handleRateDriver && props.handleRateDriver()}
                                                                    >
                                                                        <BiRadioCircle />
                                                                        <span className="ml-2">{data.action[5]}</span>
                                                                    </div>
                                                                    <div
                                                                        className={`mt-2 ${styles.hov}`}
                                                                        onClick={() => props.handleRateDriver()}
                                                                    >
                                                                        <BiRadioCircle />
                                                                        <span className="ml-2">{data.action[6]}</span>
                                                                    </div>
                                                                    <div
                                                                        className={`mt-2 ${styles.hov}`}
                                                                        onClick={() => props.handleRateDriver()}
                                                                    >
                                                                        <BiRadioCircle />
                                                                        <span className="ml-2">{data.action[4]}</span>
                                                                    </div>
                                                                </Popover.Body>
                                                            )}
                                                        </Popover>
                                                    }
                                                >
                                                    <span ref={target}>
                                                        <FaEllipsisH
                                                            id="ellipsis1"
                                                            type="button"
                                                        />
                                                    </span>
                                                </OverlayTrigger>
                                            </td>
                                        </tr>
                                    </>
                                ))
                            ) : props.isBulkDelivery ? (
                                props.customerBulkDelivery.slice(0, 10).map((data, index) => (
                                    <tr key={index}>
                                        <td className={styles.flex}>
                                            <Image width={32} height={32} alt="User" src={data.id} className={styles.image} />
                                        </td>
                                        <td className={styles.alignCenter}>{data.name}</td>
                                        <td>{data.parcel}</td>
                                        <td>
                                            <span>{data.deliverFrom}</span>
                                        </td>
                                        <td>
                                            <span>{data.deliverTo}</span>
                                        </td>
                                        <td>
                                            <Button
                                                style={
                                                    `${data.userType}` === "Completed"
                                                        ? {
                                                            background: "white",
                                                            color: "green",
                                                            borderRadius: "6px",
                                                            width: "150px",
                                                            border: "1px solid green",
                                                        }
                                                        : `${data.userType}` === "Pending"
                                                            ? {
                                                                background: "white",
                                                                color: "yellow",
                                                                borderRadius: "6px",
                                                                width: "150px",
                                                                border: "1px solid yellow",
                                                            }
                                                            : {
                                                                background: "white",
                                                                color: "red",
                                                                borderRadius: "6px",
                                                                width: "150px",
                                                                border: "1px solid red",
                                                            }
                                                }
                                            >
                                                {data.userType}
                                            </Button>
                                        </td>
                                        <td>
                                            <OverlayTrigger
                                                trigger="click"
                                                placement="bottom"
                                                rootClose
                                                overlay={
                                                    <Popover id={`popover-positioned-bottom`}>
                                                        {props.dashboardType === "user" && (
                                                            <Popover.Body>
                                                                <div
                                                                    className={styles.hov}
                                                                    onClick={() => props.handleOrderModal()}
                                                                >
                                                                    <BiRadioCircle />
                                                                    <span className="ml-2">{data.action[0]}</span>
                                                                </div>
                                                                <div
                                                                    className={`mt-2 ${styles.hov}`}
                                                                    onClick={() => props.handleRateDriver()}
                                                                >
                                                                    <BiRadioCircle />
                                                                    <span className="ml-2">{data.action[1]}</span>
                                                                </div>
                                                                <div
                                                                    className={`mt-2 ${styles.hov}`}
                                                                    onClick={() => props.handleViewQuotation()}
                                                                >
                                                                    <BiRadioCircle />
                                                                    <span className="ml-2">{data.action[9]}</span>
                                                                </div>
                                                            </Popover.Body>
                                                        )}
                                                        {props.dashboardType === "admin" && (
                                                            <Popover.Body>
                                                                <div
                                                                    className={styles.hov}
                                                                    onClick={() => props.handleRemoveAdmin()}
                                                                >
                                                                    <BiRadioCircle />
                                                                    <span className="ml-2">{data.action[2]}</span>
                                                                </div>
                                                                <div
                                                                    className={`mt-2 ${styles.hov}`}
                                                                    onClick={() => props.handleAssignAdmin()}
                                                                >
                                                                    <BiRadioCircle />
                                                                    <span className="ml-2">{data.action[3]}</span>
                                                                </div>
                                                                <div
                                                                    className={`mt-2 ${styles.hov}`}
                                                                    onClick={() => props.handleRateDriver()}
                                                                >
                                                                    <BiRadioCircle />
                                                                    <span className="ml-2">{data.action[5]}</span>
                                                                </div>
                                                                <div
                                                                    className={`mt-2 ${styles.hov}`}
                                                                    onClick={() => props.handleRateDriver()}
                                                                >
                                                                    <BiRadioCircle />
                                                                    <span className="ml-2">{data.action[6]}</span>
                                                                </div>
                                                                <div
                                                                    className={`mt-2 ${styles.hov}`}
                                                                    onClick={() => props.handleRateDriver()}
                                                                >
                                                                    <BiRadioCircle />
                                                                    <span className="ml-2">{data.action[4]}</span>
                                                                </div>
                                                            </Popover.Body>
                                                        )}
                                                    </Popover>
                                                }
                                            >
                                                <span ref={target}>
                                                    <FaEllipsisH
                                                        id="ellipsis1"
                                                        type="button"
                                                    />
                                                </span>
                                            </OverlayTrigger>
                                        </td>
                                    </tr>
                                ))
                            ) : props.isCarClearing ? (
                                props.customerPackageDelivery.slice(0, 10).map((data, index) => (
                                    <tr key={index}>
                                        <td className={styles.flex}>
                                            <Image width={32} height={32} alt="User" src={data.id} className={styles.image} />
                                        </td>
                                        <td className={styles.alignCenter}>{data.name}</td>
                                        <td style={{ marginLeft: '20px' }}>{data.parcel}</td>
                                        <td>
                                            <span>{data.deliverFrom}</span>
                                        </td>
                                        <td>
                                            <span>{data.deliverTo}</span>
                                        </td>
                                        <td>
                                            <Button
                                                onClick={() => props.handleOrderModal()}
                                                style={
                                                    `${data.userType2}` === "Cleared"
                                                        ? {
                                                            background: "white",
                                                            color: "#6FCF97",
                                                            borderRadius: "6px",
                                                            width: "150px",
                                                            border: "1px solid #6FCF97",
                                                        }
                                                        : `${data.userType2}` === "Clearing in progress"
                                                            ? {
                                                                background: "white",
                                                                color: "#6FCF97",
                                                                borderRadius: "6px",
                                                                width: "150px",
                                                                border: "1px solid #6FCF97",
                                                            }
                                                            : `${data.userType2}` === "Searching for driver" ? {
                                                                background: "white",
                                                                color: "#FFC700",
                                                                borderRadius: "6px",
                                                                width: "150px",
                                                                border: "1px solid #FFC700",
                                                            } : `${data.userType2}` === "Waiting for driver" ? {
                                                                background: "white",
                                                                color: "#FFC700",
                                                                borderRadius: "6px",
                                                                width: "150px",
                                                                border: "1px solid #FFC700",
                                                            } : ""
                                                }
                                            >
                                                {data.userType2}
                                            </Button>
                                        </td>
                                        <td>
                                            <OverlayTrigger
                                                trigger="click"
                                                placement="bottom"
                                                rootClose
                                                overlay={
                                                    <Popover id={`popover-positioned-bottom`}>
                                                        {props.dashboardType === "user" && (
                                                            <Popover.Body>
                                                                <div
                                                                    className={styles.hov}
                                                                    onClick={() => props.handleViewLoadDetails()}
                                                                >
                                                                    <BiRadioCircle />
                                                                    <span className="ml-2">{data.action[7]}</span>
                                                                </div>
                                                                <div
                                                                    className={`mt-2 ${styles.hov}`}
                                                                // onClick={() => props.handleRateDriver()}
                                                                >
                                                                    <BiRadioCircle />
                                                                    <span className="ml-2">{data.action[8]}</span>
                                                                </div>
                                                                <div
                                                                    className={`mt-2 ${styles.hov}`}
                                                                    onClick={() => props.handleViewQuotation()}
                                                                >
                                                                    <BiRadioCircle />
                                                                    <span className="ml-2">{data.action[9]}</span>
                                                                </div>
                                                            </Popover.Body>
                                                        )}
                                                        {props.dashboardType === "admin" && (
                                                            <Popover.Body>
                                                                <div
                                                                    className={styles.hov}
                                                                    onClick={() => props.handleRemoveAdmin()}
                                                                >
                                                                    <BiRadioCircle />
                                                                    <span className="ml-2">{data.action[2]}</span>
                                                                </div>
                                                                <div
                                                                    className={`mt-2 ${styles.hov}`}
                                                                    onClick={() => props.handleAssignAdmin()}
                                                                >
                                                                    <BiRadioCircle />
                                                                    <span className="ml-2">{data.action[3]}</span>
                                                                </div>
                                                                <div
                                                                    className={`mt-2 ${styles.hov}`}
                                                                    onClick={() => props.handleRateDriver()}
                                                                >
                                                                    <BiRadioCircle />
                                                                    <span className="ml-2">{data.action[5]}</span>
                                                                </div>
                                                                <div
                                                                    className={`mt-2 ${styles.hov}`}
                                                                    onClick={() => props.handleRateDriver()}
                                                                >
                                                                    <BiRadioCircle />
                                                                    <span className="ml-2">{data.action[6]}</span>
                                                                </div>
                                                                <div
                                                                    className={`mt-2 ${styles.hov}`}
                                                                    onClick={() => props.handleRateDriver()}
                                                                >
                                                                    <BiRadioCircle />
                                                                    <span className="ml-2">{data.action[4]}</span>
                                                                </div>
                                                            </Popover.Body>
                                                        )}
                                                    </Popover>
                                                }
                                            >
                                                <span ref={target}>
                                                    <FaEllipsisH
                                                        id="ellipsis1"
                                                        type="button"
                                                    />
                                                </span>
                                            </OverlayTrigger>
                                        </td>
                                    </tr>
                                ))
                            ) : props.isContainerShipment ? (
                                props.customerPackageDelivery.slice(0, 10).map((data, index) => (
                                    <tr key={index}>
                                        <td className={styles.flex}>
                                            <Image width={32} height={32} alt="User" src={data.id} className={styles.image} />
                                        </td>
                                        <td className={styles.alignCenter}>{data.name}</td>
                                        <td style={{ marginLeft: '20px' }}>{data.parcel}</td>
                                        <td>
                                            <span>{data.deliverFrom}</span>
                                        </td>
                                        <td>
                                            <span>{data.deliverTo}</span>
                                        </td>
                                        <td>
                                            <Button
                                                onClick={() => props.handleOrderModal()}
                                                style={
                                                    `${data.userType2}` === "Cleared"
                                                        ? {
                                                            background: "white",
                                                            color: "#6FCF97",
                                                            borderRadius: "6px",
                                                            width: "150px",
                                                            border: "1px solid #6FCF97",
                                                        }
                                                        : `${data.userType2}` === "Clearing in progress"
                                                            ? {
                                                                background: "white",
                                                                color: "#6FCF97",
                                                                borderRadius: "6px",
                                                                width: "150px",
                                                                border: "1px solid #6FCF97",
                                                            }
                                                            : `${data.userType2}` === "Searching for driver" ? {
                                                                background: "white",
                                                                color: "#FFC700",
                                                                borderRadius: "6px",
                                                                width: "150px",
                                                                border: "1px solid #FFC700",
                                                            } : `${data.userType2}` === "Waiting for driver" ? {
                                                                background: "white",
                                                                color: "#FFC700",
                                                                borderRadius: "6px",
                                                                width: "150px",
                                                                border: "1px solid #FFC700",
                                                            } : ""
                                                }
                                            >
                                                {data.userType2}
                                            </Button>
                                        </td>
                                        <td>
                                            <OverlayTrigger
                                                trigger="click"
                                                placement="bottom"
                                                rootClose
                                                overlay={
                                                    <Popover id={`popover-positioned-bottom`}>
                                                        {props.dashboardType === "user" && (
                                                            <Popover.Body>
                                                                <div
                                                                    className={styles.hov}
                                                                    onClick={() => props.handleViewLoadDetails()}
                                                                >
                                                                    <BiRadioCircle />
                                                                    <span className="ml-2">{data.action[7]}</span>
                                                                </div>
                                                                <div
                                                                    className={`mt-2 ${styles.hov}`}
                                                                // onClick={() => props.handleRateDriver()}
                                                                >
                                                                    <BiRadioCircle />
                                                                    <span className="ml-2">{data.action[8]}</span>
                                                                </div>
                                                                <div
                                                                    className={`mt-2 ${styles.hov}`}
                                                                    onClick={() => props.handleViewQuotation()}
                                                                >
                                                                    <BiRadioCircle />
                                                                    <span className="ml-2">{data.action[9]}</span>
                                                                </div>
                                                            </Popover.Body>
                                                        )}
                                                        {props.dashboardType === "admin" && (
                                                            <Popover.Body>
                                                                <div
                                                                    className={styles.hov}
                                                                    onClick={() => props.handleRemoveAdmin()}
                                                                >
                                                                    <BiRadioCircle />
                                                                    <span className="ml-2">{data.action[2]}</span>
                                                                </div>
                                                                <div
                                                                    className={`mt-2 ${styles.hov}`}
                                                                    onClick={() => props.handleAssignAdmin()}
                                                                >
                                                                    <BiRadioCircle />
                                                                    <span className="ml-2">{data.action[3]}</span>
                                                                </div>
                                                                <div
                                                                    className={`mt-2 ${styles.hov}`}
                                                                    onClick={() => props.handleRateDriver()}
                                                                >
                                                                    <BiRadioCircle />
                                                                    <span className="ml-2">{data.action[5]}</span>
                                                                </div>
                                                                <div
                                                                    className={`mt-2 ${styles.hov}`}
                                                                    onClick={() => props.handleRateDriver()}
                                                                >
                                                                    <BiRadioCircle />
                                                                    <span className="ml-2">{data.action[6]}</span>
                                                                </div>
                                                                <div
                                                                    className={`mt-2 ${styles.hov}`}
                                                                    onClick={() => props.handleRateDriver()}
                                                                >
                                                                    <BiRadioCircle />
                                                                    <span className="ml-2">{data.action[4]}</span>
                                                                </div>
                                                            </Popover.Body>
                                                        )}
                                                    </Popover>
                                                }
                                            >
                                                <span ref={target}>
                                                    <FaEllipsisH
                                                        id="ellipsis1"
                                                        type="button"
                                                    />
                                                </span>
                                            </OverlayTrigger>
                                        </td>
                                    </tr>
                                ))
                            ) : props.isSpecializedShipment ? (
                                props.customerPackageDelivery.slice(0, 10).map((data, index) => (
                                    <tr key={index}>
                                        <td className={styles.flex}>
                                            <Image width={32} height={32} alt="User" src={data.id} className={styles.image} />
                                        </td>
                                        <td className={styles.alignCenter}>{data.name}</td>
                                        <td style={{ marginLeft: '20px' }}>{data.parcel}</td>
                                        <td>
                                            <span>{data.deliverFrom}</span>
                                        </td>
                                        <td>
                                            <span>{data.deliverTo}</span>
                                        </td>
                                        <td>
                                            <Button
                                                onClick={() => props.handleOrderModal()}
                                                style={
                                                    `${data.userType2}` === "Cleared"
                                                        ? {
                                                            background: "white",
                                                            color: "#6FCF97",
                                                            borderRadius: "6px",
                                                            width: "150px",
                                                            border: "1px solid #6FCF97",
                                                        }
                                                        : `${data.userType2}` === "Clearing in progress"
                                                            ? {
                                                                background: "white",
                                                                color: "#6FCF97",
                                                                borderRadius: "6px",
                                                                width: "150px",
                                                                border: "1px solid #6FCF97",
                                                            }
                                                            : `${data.userType2}` === "Searching for driver" ? {
                                                                background: "white",
                                                                color: "#FFC700",
                                                                borderRadius: "6px",
                                                                width: "150px",
                                                                border: "1px solid #FFC700",
                                                            } : `${data.userType2}` === "Waiting for driver" ? {
                                                                background: "white",
                                                                color: "#FFC700",
                                                                borderRadius: "6px",
                                                                width: "150px",
                                                                border: "1px solid #FFC700",
                                                            } : ""
                                                }
                                            >
                                                {data.userType2}
                                            </Button>
                                        </td>
                                        <td>
                                            <OverlayTrigger
                                                trigger="click"
                                                placement="bottom"
                                                rootClose
                                                overlay={
                                                    <Popover id={`popover-positioned-bottom`}>
                                                        {props.dashboardType === "user" && (
                                                            <Popover.Body>
                                                                <div
                                                                    className={styles.hov}
                                                                    onClick={() => props.handleViewLoadDetails()}
                                                                >
                                                                    <BiRadioCircle />
                                                                    <span className="ml-2">{data.action[7]}</span>
                                                                </div>
                                                                <div
                                                                    className={`mt-2 ${styles.hov}`}
                                                                // onClick={() => props.handleRateDriver()}
                                                                >
                                                                    <BiRadioCircle />
                                                                    <span className="ml-2">{data.action[8]}</span>
                                                                </div>
                                                                <div
                                                                    className={`mt-2 ${styles.hov}`}
                                                                    onClick={() => props.handleViewQuotation()}
                                                                >
                                                                    <BiRadioCircle />
                                                                    <span className="ml-2">{data.action[9]}</span>
                                                                </div>
                                                            </Popover.Body>
                                                        )}
                                                        {props.dashboardType === "admin" && (
                                                            <Popover.Body>
                                                                <div
                                                                    className={styles.hov}
                                                                    onClick={() => props.handleRemoveAdmin()}
                                                                >
                                                                    <BiRadioCircle />
                                                                    <span className="ml-2">{data.action[2]}</span>
                                                                </div>
                                                                <div
                                                                    className={`mt-2 ${styles.hov}`}
                                                                    onClick={() => props.handleAssignAdmin()}
                                                                >
                                                                    <BiRadioCircle />
                                                                    <span className="ml-2">{data.action[3]}</span>
                                                                </div>
                                                                <div
                                                                    className={`mt-2 ${styles.hov}`}
                                                                    onClick={() => props.handleRateDriver()}
                                                                >
                                                                    <BiRadioCircle />
                                                                    <span className="ml-2">{data.action[5]}</span>
                                                                </div>
                                                                <div
                                                                    className={`mt-2 ${styles.hov}`}
                                                                    onClick={() => props.handleRateDriver()}
                                                                >
                                                                    <BiRadioCircle />
                                                                    <span className="ml-2">{data.action[6]}</span>
                                                                </div>
                                                                <div
                                                                    className={`mt-2 ${styles.hov}`}
                                                                    onClick={() => props.handleRateDriver()}
                                                                >
                                                                    <BiRadioCircle />
                                                                    <span className="ml-2">{data.action[4]}</span>
                                                                </div>
                                                            </Popover.Body>
                                                        )}
                                                    </Popover>
                                                }
                                            >
                                                <span ref={target}>
                                                    <FaEllipsisH
                                                        id="ellipsis1"
                                                        type="button"
                                                    />
                                                </span>
                                            </OverlayTrigger>
                                        </td>
                                    </tr>
                                ))
                            ) :
                                (
                                    ""
                                )}
                        </tbody>
                    </Table>
                    <PaginationRounded />
                </>
            )}
        </>
    )
}