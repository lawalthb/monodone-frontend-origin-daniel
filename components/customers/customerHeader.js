import { useEffect, useRef } from "react";
import { Button, Form, Nav, Navbar, Popover, Table } from "react-bootstrap";
import styles from './customerdashboard.module.css'
import stylesTop from '../driver/manager/manager.module.css'
import AddIcon from "@mui/icons-material/Add";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Image from "next/image";
import Media from "@/utils/media";

export default function CustomerHeader(props) {
    const { mobile, tabletAndDesktop} = Media();
    const target = useRef(null);

    useEffect(() => {
        props.setIsPackage(true)
    }, [props])

    return (
        <div
            className="mb-5 dashboard-background"
            style={{
                height: "141px",
                color: "white",
                borderRadius: "9px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                marginTop: "50px"
            }}
        >
            {tabletAndDesktop && (
                <div style={{ float: "right", marginTop: "80px" }}>
                    <Form.Label className="viewboard-customer">
                        VIEW LOADBOARD
                    </Form.Label>
                </div>
            )}
            <div className="row align-items-center justify-content-center">
                <Form>
                    {mobile && (
                        <div className={stylesTop.walletBackground}
                            style={{
                                height: "160px", padding: "20px",
                                display: "flex",
                                flexDirection: "column",
                                borderRadius: "12px"
                            }}>
                            {props.imageSrc.length > 0 ? (
                                <div style={{
                                    display: "flex",
                                    justifyContent: 'space-between',
                                    width: "100%"
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: "10px",
                                        width: "50%"
                                    }}>
                                        <Image
                                            src="/img/dangoto.jpeg" alt="dangote" width="95" height="57" />
                                        <Form.Label style={{
                                            marginRight: "25px",
                                            color: "white",
                                            fontWeight: "400",
                                            fontSize: '13px',
                                        }}>
                                            {props.headerMessage}
                                        </Form.Label>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: "10px",
                                        width: "50%"
                                    }}>
                                        <Form.Label style={{
                                            marginRight: "25px",
                                            color: "white",
                                            fontWeight: "600",
                                            fontSize: '16px',
                                            width: "200px"
                                        }}>
                                            {props.headerName}
                                        </Form.Label>
                                        <Button
                                            onClick={props.isCarClearing ? () => props.handleAddCarClearingParcel() :
                                                props.isContainerShipment ? () => props.handleAddContainerShipment() :
                                                    props.isSpecializedShipment ? () => props.handleAddSpecializedShipment() :
                                                        () => props.handleAddParcel()}
                                            style={{
                                                display: 'flex',
                                                background: 'white',
                                                border: "1px solid green",
                                                padding: "5px",
                                                gap: '10px',
                                                width: '100%'
                                            }}>
                                            <AddIcon style={{
                                                color: "#00902F",
                                                fontSize: "16px",
                                                fontWeight: "600",
                                                marginTop: '10px',
                                                marginLeft: '5px',
                                            }} />
                                            <Form.Label style={{
                                                marginRight: "25px",
                                                color: "#00902F",
                                                fontWeight: "400",
                                                fontSize: '13px',
                                                width: "200px",
                                                fontWeight: "500",
                                                marginTop: "3px"
                                            }}>
                                                Add New parcel
                                            </Form.Label>
                                        </Button>
                                    </div>
                                </div>
                            ) : (
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>
                                    <Form.Label style={{
                                        marginRight: "25px",
                                        color: "white",
                                        fontWeight: "500",
                                        fontSize: '20px'
                                    }}>
                                        {props.headerName}
                                    </Form.Label>
                                    <Form.Label style={{
                                        marginRight: "25px",
                                        color: "white",
                                        fontWeight: "400",
                                        fontSize: '13px',
                                        width: "200px"
                                    }}>
                                        {props.headerMessage}
                                    </Form.Label>
                                    <Button
                                        onClick={props.isCarClearing ? () => props.handleAddCarClearingParcel() :
                                            props.isContainerShipment ? () => props.handleAddContainerShipment() :
                                                props.isSpecializedShipment ? () => props.handleAddSpecializedShipment() :
                                                    () => props.handleAddParcel()}
                                        style={{
                                            display: 'flex',
                                            background: 'white',
                                            border: "1px solid green",
                                            padding: "5px",
                                            gap: '10px',
                                            width: '60%'
                                        }}>
                                        <AddIcon style={{
                                            color: "#00902F",
                                            fontSize: "16px",
                                            fontWeight: "600",
                                            marginTop: '3px',
                                            marginLeft: '3px',
                                        }} />
                                        <Form.Label style={{
                                            marginRight: "25px",
                                            color: "#00902F",
                                            fontWeight: "400",
                                            fontSize: '13px',
                                            width: "200px",
                                            fontWeight: "500",
                                            marginTop: "3px"
                                        }}>
                                            Add New parcel
                                        </Form.Label>
                                    </Button>
                                </div>
                            )}
                        </div>
                    )}
                    {tabletAndDesktop && (
                        <div className={stylesTop.walletBackground}
                            style={{
                                height: "150px", padding: "50px",
                                display: "flex",
                                justifyContent: "space-between",
                                borderRadius: "12px"
                            }}>
                            {props.imageSrc.length > 0 ? (
                                <Form.Group style={{ display: "flex", marginTop: "-20px" }}>
                                    <ul style={{ marginLeft: "-50px" }}>
                                        <Image
                                            style={{ marginRight: "10px", marginTop: "10px" }}
                                            src="/img/dangoto.jpeg" alt="dangote" width="95" height="57" />
                                    </ul>
                                    <ul style={{ marginLeft: "-30px" }}>
                                        <li style={{ marginBottom: "10px", fontSize: "20px" }}>{props.headerName}</li>
                                        <li style={{ fontSize: "12px" }}>
                                            {props.headerMessage}
                                        </li>
                                    </ul>
                                </Form.Group>
                            ) : (
                                <Form.Group>
                                    <ul style={{ marginLeft: "-30px" }}>
                                        <li style={{ marginBottom: "10px", fontSize: "25px" }}>{props.headerName}</li>
                                        <li style={{ fontSize: "15px" }}>
                                            {props.headerMessage}
                                        </li>
                                    </ul>
                                </Form.Group>
                            )}
                            <Form.Group style={{ float: "right" }}>
                                <Form.Label>
                                    <Button
                                        onClick={props.isCarClearing ? () => props.handleAddCarClearingParcel() :
                                            props.isContainerShipment ? () => props.handleAddContainerShipment() :
                                                props.isSpecializedShipment ? () => props.handleAddSpecializedShipment() :
                                                    () => props.handleAddParcel()}
                                        style={{
                                            background: "white",
                                            color: "green",
                                            borderRadius: "6px",
                                            border: "1px solid green",
                                            fontSize: "12px",
                                        }}
                                    >
                                        <AddIcon /> Add new parcel
                                    </Button>
                                </Form.Label>
                            </Form.Group>
                        </div>
                    )}
                </Form>
                {tabletAndDesktop && (
                    <div style={{
                        display: "flex", justifyContent: "space-between"
                    }}>
                        <Form.Group className="mb-3">
                            <ul className="nav" id="myTab" role="tablist">
                                <Navbar bg="transparent" variant="dark">
                                    <Nav className="">
                                        <Nav.Link
                                            style={props.isPackage ? {
                                                borderBottom: "2px solid #00902F"
                                            } : {
                                                borderBottom: ""
                                            }} onClick={props.handleIsPackage}>
                                            <Form.Label style={props.isPackage ?
                                                { color: "#00902F" } :
                                                {
                                                    color: "#808080"
                                                }}>Package</Form.Label>
                                        </Nav.Link>
                                        <Nav.Link
                                            style={props.isBulkDelivery ? {
                                                borderBottom: "2px solid #00902F"
                                            } : {
                                                borderBottom: ""
                                            }} onClick={props.handleIsBulkDelivery}>
                                            <Form.Label style={props.isBulkDelivery ?
                                                { color: "#00902F" } :
                                                {
                                                    color: "#808080"
                                                }}>Bulk Delivery</Form.Label>
                                        </Nav.Link>
                                        <Nav.Link
                                            style={props.isCarClearing ? {
                                                borderBottom: "2px solid #00902F"
                                            } : {
                                                borderBottom: ""
                                            }} onClick={() => {
                                                props.handleIsCarClearing();
                                                props.handleCarClearingOption && props.handleCarClearingOption()
                                            }}>
                                            <Form.Label style={props.isCarClearing ?
                                                { color: "#00902F" } :
                                                {
                                                    color: "#808080"
                                                }}>Car Clearing</Form.Label>
                                        </Nav.Link>
                                        <Nav.Link
                                            style={props.isContainerShipment ? {
                                                borderBottom: "2px solid #00902F"
                                            } : {
                                                borderBottom: ""
                                            }} onClick={() => {
                                                props.handleIsContainerShipment();
                                                props.handleContainerShipment && props.handleContainerShipment()
                                            }}>
                                            <Form.Label style={props.isContainerShipment ?
                                                { color: "#00902F" } :
                                                {
                                                    color: "#808080"
                                                }}>Container Shipment</Form.Label>
                                        </Nav.Link>
                                        <Nav.Link
                                            style={props.isSpecializedShipment ? {
                                                borderBottom: "2px solid #00902F"
                                            } : {
                                                borderBottom: ""
                                            }} onClick={() => {
                                                props.handleIsSpecializedShipment();
                                                props.handleSpecializedShipment && props.handleSpecializedShipment()
                                            }}>
                                            <Form.Label style={props.isSpecializedShipment ?
                                                { color: "#00902F" } :
                                                {
                                                    color: "#808080"
                                                }}>Specialized Shipment</Form.Label>
                                        </Nav.Link>
                                    </Nav>
                                </Navbar>
                            </ul>
                        </Form.Group>
                        <Form.Group style={{ marginTop: "10px" }}>
                            <Button
                                className={styles.ml_twenty}
                                size="sm"
                                style={{ background: "#00902F", border: 'none' }}
                            >
                                <Image src="/img/Icon.png" width="15" height="14" alt="refresh" /> Refresh
                            </Button>
                            <Button
                                className={styles.ml_twenty}
                                size="sm"
                                style={{
                                    background: "transparent", color: "#333333", border: "1px solid #333333",
                                    heigh: '40px',
                                    width: '110px'
                                }}
                            >
                                <Image src="/img/filter.png" width="16" height="15" alt="refresh" />{" "}
                                <OverlayTrigger
                                    trigger="click"
                                    placement="bottom"
                                    rootClose
                                    style={{
                                        paddingRight: "3px"
                                    }}
                                    overlay={
                                        <Popover id={`popover-positioned-bottom`}>
                                            <Popover.Body>
                                                <div
                                                    className={styles.hov}
                                                >
                                                    {/* <BiRadioCircle /> */}
                                                    <span className="ml-2 mb-1">Load Type</span>
                                                    <div style={{
                                                        padding: '7px',
                                                        marginRight: '10px'
                                                    }}>
                                                        <Form.Select style={{ color: "#343F42" }}>
                                                            <option value="Car Clearing">Car Clearing</option>
                                                        </Form.Select>
                                                    </div>
                                                </div>
                                                <div
                                                    className={styles.hov}
                                                >
                                                    {/* <BiRadioCircle /> */}
                                                    <span className="ml-2 mb-1">Car Type</span>
                                                    <div style={{
                                                        padding: '7px',
                                                        marginRight: '10px'
                                                    }}>
                                                        <Form.Select style={{ color: "#343F42" }}>
                                                            <option value="Lexus">Lexus</option>
                                                        </Form.Select>
                                                    </div>
                                                </div>
                                                <div
                                                    className={styles.hov}
                                                >
                                                    {/* <BiRadioCircle /> */}
                                                    <span className="ml-2 mb-1">Posted by</span>
                                                    <div style={{
                                                        padding: '7px',
                                                        marginRight: '10px'
                                                    }}>
                                                        <Form.Select style={{ color: "#343F42" }}>
                                                            <option value="Posted by">Posted by</option>
                                                        </Form.Select>
                                                    </div>
                                                </div>
                                                <div
                                                    className={styles.hov}
                                                >
                                                    {/* <BiRadioCircle /> */}
                                                    <span className="ml-2 mb-1">Posting date</span>
                                                    <div style={{
                                                        padding: '7px',
                                                        marginRight: '10px'
                                                    }}>
                                                        <Form.Select style={{ color: "#343F42" }}>
                                                            <option value="20/01/23"
                                                            >20/01/23</option>
                                                        </Form.Select>
                                                    </div>
                                                </div>
                                            </Popover.Body>
                                        </Popover>
                                    }
                                >
                                    <span ref={target}>Filter</span>
                                </OverlayTrigger>
                            </Button>
                        </Form.Group>
                    </div>

                )}
                <div className={styles.tableContainer}>
                </div>
            </div>
        </div>
    )
}