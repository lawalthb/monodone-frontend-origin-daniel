import Image from "next/image";
import { useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";

export default function AdminpanelContentMobileTopnav(props) {
    const ref = useRef()
    useEffect(() => {
        const handler = (event) => {
            if (props.menuDropdown && ref.current && !ref.current.contains(event.target)) {
                props.setMenuDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler);
        };
    }, [props]);
    useEffect(() => {
        if (props.isDrivers) {
            props.setIsAgents(false)
            props.setIsCustomers(false)
            props.setIsBrokers(false)
            props.setIsDriverManagers(false)
            props.setIsShippingCompanies(false)
            props.setIsTransportCompanies(false)
            props.setIsClearingForwardingAgent(false)
            props.setIsSpecializedShipment(false)
            props.setIsEmployee(false)
            props.setIsWallet(false)
            props.setIsWebsite(false)
            props.setIsLoadboard(false)
            props.setIsBlog(false)
            props.setIsTransactions(false)
            props.setIsOrders(false)
            props.setIsAdmins(false)
            props.setIsPriceSettings(false)
            props.setIsStatistics(false)
        } else if (props.isCustomers) {
            props.setIsAgents(false)
            props.setIsDrivers(false)
            props.setIsBrokers(false)
            props.setIsDriverManagers(false)
            props.setIsShippingCompanies(false)
            props.setIsTransportCompanies(false)
            props.setIsClearingForwardingAgent(false)
            props.setIsSpecializedShipment(false)
            props.setIsEmployee(false)
            props.setIsWallet(false)
            props.setIsWebsite(false)
            props.setIsLoadboard(false)
            props.setIsBlog(false)
            props.setIsTransactions(false)
            props.setIsOrders(false)
            props.setIsAdmins(false)
            props.setIsPriceSettings(false)
            props.setIsStatistics(false)
        } else if (props.isBrokers) {
            props.setIsAgents(false)
            props.setIsDrivers(false)
            props.setIsCustomers(false)
            props.setIsDriverManagers(false)
            props.setIsShippingCompanies(false)
            props.setIsTransportCompanies(false)
            props.setIsClearingForwardingAgent(false)
            props.setIsSpecializedShipment(false)
            props.setIsEmployee(false)
            props.setIsWallet(false)
            props.setIsWebsite(false)
            props.setIsLoadboard(false)
            props.setIsBlog(false)
            props.setIsTransactions(false)
            props.setIsOrders(false)
            props.setIsAdmins(false)
            props.setIsPriceSettings(false)
            props.setIsStatistics(false)
        } else if (props.isDriverManagers) {
            props.setIsAgents(false)
            props.setIsDrivers(false)
            props.setIsCustomers(false)
            props.setIsBrokers(false)
            props.setIsShippingCompanies(false)
            props.setIsTransportCompanies(false)
            props.setIsClearingForwardingAgent(false)
            props.setIsSpecializedShipment(false)
            props.setIsEmployee(false)
            props.setIsWallet(false)
            props.setIsWebsite(false)
            props.setIsLoadboard(false)
            props.setIsBlog(false)
            props.setIsTransactions(false)
            props.setIsOrders(false)
            props.setIsAdmins(false)
            props.setIsPriceSettings(false)
            props.setIsStatistics(false)
        } else if (props.isShippingCompanies) {
            props.setIsAgents(false)
            props.setIsDrivers(false)
            props.setIsCustomers(false)
            props.setIsBrokers(false)
            props.setIsDriverManagers(false)
            props.setIsTransportCompanies(false)
            props.setIsClearingForwardingAgent(false)
            props.setIsSpecializedShipment(false)
            props.setIsEmployee(false)
            props.setIsWallet(false)
            props.setIsWebsite(false)
            props.setIsLoadboard(false)
            props.setIsBlog(false)
            props.setIsTransactions(false)
            props.setIsOrders(false)
            props.setIsAdmins(false)
            props.setIsPriceSettings(false)
            props.setIsStatistics(false)
        } else if (props.isTransportCompanies) {
            props.setIsAgents(false)
            props.setIsDrivers(false)
            props.setIsCustomers(false)
            props.setIsBrokers(false)
            props.setIsDriverManagers(false)
            props.setIsShippingCompanies(false)
            props.setIsClearingForwardingAgent(false)
            props.setIsSpecializedShipment(false)
            props.setIsEmployee(false)
            props.setIsWallet(false)
            props.setIsWebsite(false)
            props.setIsLoadboard(false)
            props.setIsBlog(false)
            props.setIsTransactions(false)
            props.setIsOrders(false)
            props.setIsAdmins(false)
            props.setIsPriceSettings(false)
            props.setIsStatistics(false)
        } else if (props.isClearingForwardingAgent) {
            props.setIsAgents(false)
            props.setIsDrivers(false)
            props.setIsCustomers(false)
            props.setIsBrokers(false)
            props.setIsDriverManagers(false)
            props.setIsShippingCompanies(false)
            props.setIsTransportCompanies(false)
            props.setIsSpecializedShipment(false)
            props.setIsEmployee(false)
            props.setIsWallet(false)
            props.setIsWebsite(false)
            props.setIsLoadboard(false)
            props.setIsBlog(false)
            props.setIsTransactions(false)
            props.setIsOrders(false)
            props.setIsAdmins(false)
            props.setIsPriceSettings(false)
            props.setIsStatistics(false)
        } else if (props.isSpecializedShipment) {
            props.setIsAgents(false)
            props.setIsDrivers(false)
            props.setIsCustomers(false)
            props.setIsBrokers(false)
            props.setIsDriverManagers(false)
            props.setIsShippingCompanies(false)
            props.setIsTransportCompanies(false)
            props.setIsClearingForwardingAgent(false)
            props.setIsEmployee(false)
            props.setIsWallet(false)
            props.setIsWebsite(false)
            props.setIsLoadboard(false)
            props.setIsBlog(false)
            props.setIsTransactions(false)
            props.setIsOrders(false)
            props.setIsAdmins(false)
            props.setIsPriceSettings(false)
            props.setIsStatistics(false)
        } else if (props.isEmployee) {
            props.setIsAgents(false)
            props.setIsDrivers(false)
            props.setIsCustomers(false)
            props.setIsBrokers(false)
            props.setIsDriverManagers(false)
            props.setIsShippingCompanies(false)
            props.setIsTransportCompanies(false)
            props.setIsClearingForwardingAgent(false)
            props.setIsSpecializedShipment(false)
            props.setIsWallet(false)
            props.setIsWebsite(false)
            props.setIsLoadboard(false)
            props.setIsBlog(false)
            props.setIsTransactions(false)
            props.setIsOrders(false)
            props.setIsAdmins(false)
            props.setIsPriceSettings(false)
            props.setIsStatistics(false)
        } else if (props.isWallet) {
            props.setIsAgents(false)
            props.setIsDrivers(false)
            props.setIsCustomers(false)
            props.setIsBrokers(false)
            props.setIsDriverManagers(false)
            props.setIsShippingCompanies(false)
            props.setIsTransportCompanies(false)
            props.setIsClearingForwardingAgent(false)
            props.setIsSpecializedShipment(false)
            props.setIsEmployee(false)
            props.setIsWebsite(false)
            props.setIsLoadboard(false)
            props.setIsBlog(false)
            props.setIsTransactions(false)
            props.setIsOrders(false)
            props.setIsAdmins(false)
            props.setIsPriceSettings(false)
            props.setIsStatistics(false)
        } else if (props.isWebsite) {
            props.setIsAgents(false)
            props.setIsDrivers(false)
            props.setIsCustomers(false)
            props.setIsBrokers(false)
            props.setIsDriverManagers(false)
            props.setIsShippingCompanies(false)
            props.setIsTransportCompanies(false)
            props.setIsClearingForwardingAgent(false)
            props.setIsSpecializedShipment(false)
            props.setIsEmployee(false)
            props.setIsWallet(false)
            props.setIsLoadboard(false)
            props.setIsBlog(false)
            props.setIsTransactions(false)
            props.setIsOrders(false)
            props.setIsAdmins(false)
            props.setIsPriceSettings(false)
            props.setIsStatistics(false)
        } else if (props.isLoadboard) {
            props.setIsAgents(false)
            props.setIsDrivers(false)
            props.setIsCustomers(false)
            props.setIsBrokers(false)
            props.setIsDriverManagers(false)
            props.setIsShippingCompanies(false)
            props.setIsTransportCompanies(false)
            props.setIsClearingForwardingAgent(false)
            props.setIsSpecializedShipment(false)
            props.setIsEmployee(false)
            props.setIsWallet(false)
            props.setIsWebsite(false)
            props.setIsBlog(false)
            props.setIsTransactions(false)
            props.setIsOrders(false)
            props.setIsAdmins(false)
            props.setIsPriceSettings(false)
            props.setIsStatistics(false)
        } else if (props.isBlog) {
            props.setIsAgents(false)
            props.setIsDrivers(false)
            props.setIsCustomers(false)
            props.setIsBrokers(false)
            props.setIsDriverManagers(false)
            props.setIsShippingCompanies(false)
            props.setIsTransportCompanies(false)
            props.setIsClearingForwardingAgent(false)
            props.setIsSpecializedShipment(false)
            props.setIsEmployee(false)
            props.setIsWallet(false)
            props.setIsWebsite(false)
            props.setIsLoadboard(false)
            props.setIsTransactions(false)
            props.setIsOrders(false)
            props.setIsAdmins(false)
            props.setIsPriceSettings(false)
            props.setIsStatistics(false)
        } else if (props.isOrders) {
            props.setIsAgents(false)
            props.setIsDrivers(false)
            props.setIsCustomers(false)
            props.setIsBrokers(false)
            props.setIsDriverManagers(false)
            props.setIsShippingCompanies(false)
            props.setIsTransportCompanies(false)
            props.setIsClearingForwardingAgent(false)
            props.setIsSpecializedShipment(false)
            props.setIsEmployee(false)
            props.setIsWallet(false)
            props.setIsWebsite(false)
            props.setIsLoadboard(false)
            props.setIsTransactions(false)
            props.setIsAdmins(false)
            props.setIsPriceSettings(false)
            props.setIsStatistics(false)
        } else if (props.isTransactions) {
            props.setIsAgents(false)
            props.setIsDrivers(false)
            props.setIsCustomers(false)
            props.setIsBrokers(false)
            props.setIsDriverManagers(false)
            props.setIsShippingCompanies(false)
            props.setIsTransportCompanies(false)
            props.setIsClearingForwardingAgent(false)
            props.setIsSpecializedShipment(false)
            props.setIsEmployee(false)
            props.setIsWallet(false)
            props.setIsWebsite(false)
            props.setIsLoadboard(false)
            props.setIsOrders(false)
            props.setIsAdmins(false)
            props.setIsPriceSettings(false)
            props.setIsStatistics(false)
        } else if (props.isAdmins) {
            props.setIsAgents(false)
            props.setIsDrivers(false)
            props.setIsCustomers(false)
            props.setIsBrokers(false)
            props.setIsDriverManagers(false)
            props.setIsShippingCompanies(false)
            props.setIsTransportCompanies(false)
            props.setIsClearingForwardingAgent(false)
            props.setIsSpecializedShipment(false)
            props.setIsEmployee(false)
            props.setIsWallet(false)
            props.setIsWebsite(false)
            props.setIsLoadboard(false)
            props.setIsTransactions(false)
            props.setIsOrders(false)
            props.setIsPriceSettings(false)
        } else if (props.isPriceSettings) {
            props.setIsAgents(false)
            props.setIsDrivers(false)
            props.setIsCustomers(false)
            props.setIsBrokers(false)
            props.setIsDriverManagers(false)
            props.setIsShippingCompanies(false)
            props.setIsTransportCompanies(false)
            props.setIsClearingForwardingAgent(false)
            props.setIsSpecializedShipment(false)
            props.setIsEmployee(false)
            props.setIsWallet(false)
            props.setIsWebsite(false)
            props.setIsLoadboard(false)
            props.setIsTransactions(false)
            props.setIsOrders(false)
            props.setIsAdmins(false)
            props.setIsStatistics(false)
        } else if (props.isStatistics) {
            props.setIsAgents(false)
            props.setIsDrivers(false)
            props.setIsCustomers(false)
            props.setIsBrokers(false)
            props.setIsDriverManagers(false)
            props.setIsShippingCompanies(false)
            props.setIsTransportCompanies(false)
            props.setIsClearingForwardingAgent(false)
            props.setIsSpecializedShipment(false)
            props.setIsEmployee(false)
            props.setIsWallet(false)
            props.setIsWebsite(false)
            props.setIsLoadboard(false)
            props.setIsTransactions(false)
            props.setIsOrders(false)
            props.setIsAdmins(false)
            props.setIsPriceSettings(false)
        } else {
            props.setIsAgents(true)
        }
    }, [props])
    return (
        <>
            <div
                ref={ref}
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%'
                }}>
                <div>
                    <Image
                        src="/img/success-logo.png"
                        width="30"
                        height="21"
                        alt="logo"
                    />
                </div>
                <div>
                    <Image
                        style={{
                            width: "24px",
                            maxWidth: "100%",
                            marginRight: '20px'
                        }}
                        src="/img/user.png"
                        width="24"
                        height="24"
                        alt="badge"
                    />
                    <Form.Label
                        style={{
                            color: "black",
                            fontSize: "13px",
                            marginRight: '20px'
                        }}
                    >
                        Admin_777
                    </Form.Label>
                    {props.menuDropdown ? (
                        <Image
                            onClick={() => props.setMenuDropdown((prevState) => !prevState)}
                            style={{
                                cursor: "pointer",
                                margin: '6px 0px 0px 5px'
                            }}
                            src="/img/close.png"
                            width="16"
                            height="13"
                            alt="close" />
                    ) : (
                        <Image
                            onClick={() => props.setMenuDropdown((prevState) => !prevState)}
                            src="/img/mobileham.png"
                            width="16"
                            height="13"
                            alt="filter"
                        />
                    )}
                </div>
                <div
                    style={props.menuDropdown ? {
                        display: 'block',
                        position: "absolute",
                        top: "4rem",
                        left: "20px",
                        border: '1px solid #E7E7E7',
                        width: "17rem",
                        padding: '5px 10px',
                        zIndex: 9,
                        background: "linear-gradient(90deg, #00902F 0%, #7CC427 99.69%)"
                    } : {
                        display: 'none',
                    }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <Form.Label style={{
                            color: "white",
                            fontWeight: "500",
                            fontSize: "14px",
                        }}>
                            Basic
                        </Form.Label>
                        <div style={{
                            display: "flex",
                            flexDirection: 'column',
                            marginTop: "10px",
                        }}>
                            <div style={props.isStatistics ? {
                                display: "flex",
                                marginBottom: '10px',
                                background: "rgba(255, 255, 255, 0.2)",
                                padding: "9px",
                                borderRadius: "6px",
                                height: "36px",
                                width: '98%'
                            } : {
                                display: "flex",
                            }}>
                                <Image
                                    style={{
                                        width: "10px",
                                        maxWidth: "100%",
                                    }}
                                    src="/img/adminorder.png"
                                    width="10"
                                    height="11"
                                    alt="badge"
                                />
                                <Form.Label
                                    onClick={() => {
                                        props.handleIsStatistics();
                                        props.setMenuDropdown((prevState) => !prevState)
                                    }}
                                    style={{
                                        color: "white",
                                        fontWeight: "400",
                                        fontSize: "13px",
                                        marginLeft: "10px",
                                        marginTop: '-5px',
                                        cursor: "pointer"
                                    }}>
                                    Statistics
                                </Form.Label>
                            </div>
                            <div style={props.isOrders ? {
                                display: "flex",
                                marginTop: '10px',
                                background: "rgba(255, 255, 255, 0.2)",
                                padding: "9px",
                                borderRadius: "6px",
                                height: "36px",
                                width: '98%'
                            } : {
                                display: "flex",
                            }}>
                                <Image
                                    style={{
                                        width: "10px",
                                        maxWidth: "100%",
                                    }}
                                    src="/img/adminorder.png"
                                    width="10"
                                    height="11"
                                    alt="badge"
                                />
                                <Form.Label
                                    onClick={() => {
                                        props.handleIsOrders();
                                        props.setMenuDropdown((prevState) => !prevState)
                                    }}
                                    style={{
                                        color: "white",
                                        fontWeight: "400",
                                        fontSize: "13px",
                                        marginLeft: "10px",
                                        marginTop: '-5px',
                                        cursor: "pointer"
                                    }}>
                                    Orders
                                </Form.Label>
                            </div>
                            <div style={props.isTransactions ? {
                                display: "flex",
                                marginTop: '10px',
                                background: "rgba(255, 255, 255, 0.2)",
                                padding: "9px",
                                borderRadius: "6px",
                                height: "36px",
                                width: '98%'
                            } : {
                                display: "flex",
                                marginTop: '10px'
                            }}>
                                <Image
                                    style={{
                                        width: "10px",
                                        maxWidth: "100%",
                                    }}
                                    src="/img/admintransact.png"
                                    width="10"
                                    height="11"
                                    alt="badge"
                                />
                                <Form.Label
                                    onClick={() => {
                                        props.handleIsTransactions();
                                        props.setMenuDropdown((prevState) => !prevState)
                                    }}
                                    style={{
                                        color: "white",
                                        fontWeight: "400",
                                        fontSize: "13px",
                                        marginLeft: "10px",
                                        marginTop: '-5px',
                                        cursor: "pointer"
                                    }}>
                                    Transactions
                                </Form.Label>
                            </div>
                            <div style={props.isPriceSettings ? {
                                display: "flex",
                                marginTop: '10px',
                                background: "rgba(255, 255, 255, 0.2)",
                                padding: "9px",
                                borderRadius: "6px",
                                height: "36px",
                                width: '98%'
                            } : {
                                display: "flex",
                                marginTop: '10px'
                            }}>
                                <Image
                                    style={{
                                        width: "10px",
                                        maxWidth: "100%",
                                    }}
                                    src="/img/pricesettings.png"
                                    width="10"
                                    height="11"
                                    alt="badge"
                                />
                                <Form.Label
                                    onClick={() => {
                                        props.handleIsPriceSettings();
                                        props.setMenuDropdown((prevState) => !prevState)
                                    }}
                                    style={{
                                        color: "white",
                                        fontWeight: "400",
                                        fontSize: "13px",
                                        marginLeft: "10px",
                                        marginTop: '-5px',
                                        cursor: "pointer"
                                    }}>
                                    Price Settings
                                </Form.Label>
                            </div>
                        </div>
                        <Form.Label style={{
                            color: "white",
                            fontWeight: "500",
                            fontSize: "14px",
                            marginTop: '10px'
                        }}>
                            User management
                        </Form.Label>
                        <div style={{
                            display: "flex",
                            flexDirection: 'column',
                            marginTop: "10px",
                            marginLeft: "10px"
                        }}>
                            <div style={props.isAgents ? {
                                display: "flex",
                                background: "rgba(255, 255, 255, 0.2)",
                                padding: "9px",
                                borderRadius: "6px",
                                height: "36px",
                                width: '98%'
                            } : {
                                display: "flex",
                            }}>
                                <Image
                                    style={{
                                        width: "11px",
                                        maxWidth: "100%",
                                    }}
                                    src="/img/adminagent.png"
                                    width="11"
                                    height="11"
                                    alt="badge"
                                />
                                <Form.Label
                                    onClick={() => {
                                        props.handleIsAgents();
                                        props.setMenuDropdown((prevState) => !prevState)
                                    }}
                                    style={{
                                        color: "white",
                                        fontWeight: "400",
                                        fontSize: "13px",
                                        marginLeft: "10px",
                                        marginTop: '-5px',
                                        cursor: "pointer",
                                    }}>
                                    Agents
                                </Form.Label>
                                <Image
                                    style={{
                                        width: "18px",
                                        maxWidth: "100%",
                                        marginLeft: '10px',
                                        marginTop: '-2px'
                                    }}
                                    src="/img/badgeadmin.png"
                                    width="18"
                                    height="18"
                                    alt="badge"
                                />
                            </div>
                            <div style={props.isDrivers ? {
                                display: "flex",
                                marginTop: '10px',
                                background: "rgba(255, 255, 255, 0.2)",
                                padding: "9px",
                                borderRadius: "6px",
                                height: "36px",
                                width: '98%'
                            } : {
                                display: "flex",
                                marginTop: '10px'
                            }}>
                                <Image
                                    style={{
                                        width: "12px",
                                        maxWidth: "100%",
                                    }}
                                    src="/img/admindriver.png"
                                    width="12"
                                    height="11"
                                    alt="badge"
                                />
                                <Form.Label
                                    onClick={() => {
                                        props.handleIsDrivers();
                                        props.setMenuDropdown((prevState) => !prevState)
                                    }}
                                    style={{
                                        color: "white",
                                        fontWeight: "400",
                                        fontSize: "13px",
                                        marginLeft: "10px",
                                        marginTop: '-5px',
                                        cursor: "pointer"
                                    }}>
                                    Drivers
                                </Form.Label>
                            </div>
                            <div style={props.isCustomers ? {
                                display: "flex",
                                marginTop: '10px',
                                background: "rgba(255, 255, 255, 0.2)",
                                padding: "9px",
                                borderRadius: "6px",
                                height: "36px",
                                width: '98%'
                            } : {
                                display: "flex",
                                marginTop: '10px'
                            }}>
                                <Image
                                    style={{
                                        width: "11px",
                                        maxWidth: "100%",
                                    }}
                                    src="/img/admingen.png"
                                    width="11"
                                    height="11"
                                    alt="badge"
                                />
                                <Form.Label
                                    onClick={() => {
                                        props.handleIsCustomers();
                                        props.setMenuDropdown((prevState) => !prevState)
                                    }}
                                    style={{
                                        color: "white",
                                        fontWeight: "400",
                                        fontSize: "13px",
                                        marginLeft: "10px",
                                        marginTop: '-5px',
                                        cursor: "pointer"
                                    }}>
                                    Customers
                                </Form.Label>
                            </div>
                            <div style={props.isBrokers ? {
                                display: "flex",
                                marginTop: '10px',
                                background: "rgba(255, 255, 255, 0.2)",
                                padding: "9px",
                                borderRadius: "6px",
                                height: "36px",
                                width: '98%'
                            } : {
                                display: "flex",
                                marginTop: '10px'
                            }}>
                                <Image
                                    style={{
                                        width: "11px",
                                        maxWidth: "100%",
                                    }}
                                    src="/img/admingen.png"
                                    width="11"
                                    height="11"
                                    alt="badge"
                                />
                                <Form.Label
                                    onClick={() => {
                                        props.handleIsBrokers()
                                        props.setMenuDropdown((prevState) => !prevState)
                                    }}
                                    style={{
                                        color: "white",
                                        fontWeight: "400",
                                        fontSize: "13px",
                                        marginLeft: "10px",
                                        marginTop: '-5px',
                                        cursor: "pointer"
                                    }}>
                                    Brokers
                                </Form.Label>
                            </div>
                            <div style={props.isDriverManagers ? {
                                display: "flex",
                                marginTop: '10px',
                                background: "rgba(255, 255, 255, 0.2)",
                                padding: "9px",
                                borderRadius: "6px",
                                height: "36px",
                                width: '98%'
                            } : {
                                display: "flex",
                                marginTop: '10px'
                            }}>
                                <Image
                                    style={{
                                        width: "11px",
                                        maxWidth: "100%",
                                    }}
                                    src="/img/admingen.png"
                                    width="11"
                                    height="11"
                                    alt="badge"
                                />
                                <Form.Label
                                    onClick={() => {
                                        props.handleIsDriverManagers()
                                        props.setMenuDropdown((prevState) => !prevState)
                                    }}
                                    style={{
                                        color: "white",
                                        fontWeight: "400",
                                        fontSize: "13px",
                                        marginLeft: "10px",
                                        marginTop: '-5px',
                                        cursor: "pointer"
                                    }}>
                                    Driver Managers
                                </Form.Label>
                            </div>
                            <div style={props.isShippingCompanies ? {
                                display: "flex",
                                marginTop: '10px',
                                background: "rgba(255, 255, 255, 0.2)",
                                padding: "9px",
                                borderRadius: "6px",
                                height: "36px",
                                width: '98%'
                            } : {
                                display: "flex",
                                marginTop: '10px'
                            }}>
                                <Image
                                    style={{
                                        width: "11px",
                                        maxWidth: "100%",
                                    }}
                                    src="/img/admingen.png"
                                    width="11"
                                    height="11"
                                    alt="badge"
                                />
                                <Form.Label
                                    onClick={() => {
                                        props.handleIsShippingCompanies()
                                        props.setMenuDropdown((prevState) => !prevState)
                                    }}
                                    style={{
                                        color: "white",
                                        fontWeight: "400",
                                        fontSize: "13px",
                                        marginLeft: "10px",
                                        marginTop: '-5px',
                                        cursor: "pointer"
                                    }}>
                                    Shipping Companies
                                </Form.Label>
                            </div>
                            <div style={props.isTransportCompanies ? {
                                display: "flex",
                                marginTop: '10px',
                                background: "rgba(255, 255, 255, 0.2)",
                                padding: "9px",
                                borderRadius: "6px",
                                height: "36px",
                                width: '98%'
                            } : {
                                display: "flex",
                                marginTop: '10px'
                            }}>
                                <Image
                                    style={{
                                        width: "11px",
                                        maxWidth: "100%",
                                    }}
                                    src="/img/admingen.png"
                                    width="11"
                                    height="11"
                                    alt="badge"
                                />
                                <Form.Label
                                    onClick={() => {
                                        props.handleIsTransportCompanies()
                                        props.setMenuDropdown((prevState) => !prevState)
                                    }}
                                    style={{
                                        color: "white",
                                        fontWeight: "400",
                                        fontSize: "13px",
                                        marginLeft: "10px",
                                        marginTop: '-5px',
                                        cursor: "pointer"
                                    }}>
                                    Transport Companies
                                </Form.Label>
                            </div>
                            <div style={props.isClearingForwardingAgent ? {
                                display: "flex",
                                marginTop: '10px',
                                background: "rgba(255, 255, 255, 0.2)",
                                padding: "9px",
                                borderRadius: "6px",
                                height: "36px",
                                width: '98%'
                            } : {
                                display: "flex",
                                marginTop: '10px'
                            }}>
                                <Image
                                    style={{
                                        width: "11px",
                                        maxWidth: "100%",
                                    }}
                                    src="/img/admingen.png"
                                    width="11"
                                    height="11"
                                    alt="badge"
                                />
                                <Form.Label
                                    onClick={() => {
                                        props.handleIsClearingForwardingAgent()
                                        props.setMenuDropdown((prevState) => !prevState)
                                    }}
                                    style={{
                                        color: "white",
                                        fontWeight: "400",
                                        fontSize: "13px",
                                        marginLeft: "10px",
                                        marginTop: '-5px',
                                        cursor: "pointer"
                                    }}>
                                    Clearing and Forwarding Agent
                                </Form.Label>
                            </div>
                            <div style={props.isSpecializedShipment ? {
                                display: "flex",
                                marginTop: '10px',
                                background: "rgba(255, 255, 255, 0.2)",
                                padding: "9px",
                                borderRadius: "6px",
                                height: "36px",
                                width: '98%'
                            } : {
                                display: "flex",
                                marginTop: '10px'
                            }}>
                                <Image
                                    style={{
                                        width: "11px",
                                        maxWidth: "100%",
                                    }}
                                    src="/img/admingen.png"
                                    width="11"
                                    height="11"
                                    alt="badge"
                                />
                                <Form.Label
                                    onClick={() => {
                                        props.handleIsSpecializedShipment()
                                        props.setMenuDropdown((prevState) => !prevState)
                                    }}
                                    style={{
                                        color: "white",
                                        fontWeight: "400",
                                        fontSize: "13px",
                                        marginLeft: "10px",
                                        marginTop: '-5px',
                                        cursor: "pointer"
                                    }}>
                                    Specialized Shipment
                                </Form.Label>
                            </div>
                            <div style={props.isEmployee ? {
                                display: "flex",
                                marginTop: '10px',
                                background: "rgba(255, 255, 255, 0.2)",
                                padding: "9px",
                                borderRadius: "6px",
                                height: "36px",
                                width: '98%'
                            } : {
                                display: "flex",
                                marginTop: '10px'
                            }}>
                                <Image
                                    style={{
                                        width: "11px",
                                        maxWidth: "100%",
                                    }}
                                    src="/img/admingen.png"
                                    width="11"
                                    height="11"
                                    alt="badge"
                                />
                                <Form.Label
                                    onClick={() => {
                                        props.handleIsEmployee()
                                        props.setMenuDropdown((prevState) => !prevState)
                                    }}
                                    style={{
                                        color: "white",
                                        fontWeight: "400",
                                        fontSize: "13px",
                                        marginLeft: "10px",
                                        marginTop: '-5px',
                                        cursor: "pointer"
                                    }}>
                                    Employee
                                </Form.Label>
                            </div>
                            <div style={props.isWallet ? {
                                display: "flex",
                                marginTop: '10px',
                                background: "rgba(255, 255, 255, 0.2)",
                                padding: "9px",
                                borderRadius: "6px",
                                height: "36px",
                                width: '98%'
                            } : {
                                display: "flex",
                                marginTop: '10px'
                            }}>
                                <Image
                                    style={{
                                        width: "11px",
                                        maxWidth: "100%",
                                    }}
                                    src="/img/admingen.png"
                                    width="11"
                                    height="11"
                                    alt="badge"
                                />
                                <Form.Label
                                    onClick={() => {
                                        props.handleIsWallet()
                                        props.setMenuDropdown((prevState) => !prevState)
                                    }}
                                    style={{
                                        color: "white",
                                        fontWeight: "400",
                                        fontSize: "13px",
                                        marginLeft: "10px",
                                        marginTop: '-5px',
                                        cursor: "pointer"
                                    }}>
                                    Wallet
                                </Form.Label>
                            </div>
                            <div style={props.isWebsite ? {
                                display: "flex",
                                marginTop: '10px',
                                background: "rgba(255, 255, 255, 0.2)",
                                padding: "9px",
                                borderRadius: "6px",
                                height: "36px",
                                width: '98%'
                            } : {
                                display: "flex",
                                marginTop: '10px'
                            }}>
                                <Image
                                    style={{
                                        width: "11px",
                                        maxWidth: "100%",
                                    }}
                                    src="/img/admingen.png"
                                    width="11"
                                    height="11"
                                    alt="badge"
                                />
                                <Form.Label
                                    onClick={() => {
                                        props.handleIsWebsite()
                                        props.setMenuDropdown((prevState) => !prevState)
                                    }}
                                    style={{
                                        color: "white",
                                        fontWeight: "400",
                                        fontSize: "13px",
                                        marginLeft: "10px",
                                        marginTop: '-5px',
                                        cursor: "pointer"
                                    }}>
                                    Website
                                </Form.Label>
                            </div>
                            <div style={props.isLoadboard ? {
                                display: "flex",
                                marginTop: '10px',
                                background: "rgba(255, 255, 255, 0.2)",
                                padding: "9px",
                                borderRadius: "6px",
                                height: "36px",
                                width: '98%'
                            } : {
                                display: "flex",
                                marginTop: '10px'
                            }}>
                                <Image
                                    style={{
                                        width: "11px",
                                        maxWidth: "100%",
                                    }}
                                    src="/img/admingen.png"
                                    width="11"
                                    height="11"
                                    alt="badge"
                                />
                                <Form.Label
                                    onClick={() => {
                                        props.handleIsLoadboard()
                                        props.setMenuDropdown((prevState) => !prevState)
                                    }}
                                    style={{
                                        color: "white",
                                        fontWeight: "400",
                                        fontSize: "13px",
                                        marginLeft: "10px",
                                        marginTop: '-5px',
                                        cursor: "pointer"
                                    }}>
                                    Load board
                                </Form.Label>
                            </div>
                            <div style={props.isBlog ? {
                                display: "flex",
                                marginTop: '10px',
                                background: "rgba(255, 255, 255, 0.2)",
                                padding: "9px",
                                borderRadius: "6px",
                                height: "36px",
                                width: '98%'
                            } : {
                                display: "flex",
                                marginTop: '10px'
                            }}>
                                <Image
                                    style={{
                                        width: "11px",
                                        maxWidth: "100%",
                                    }}
                                    src="/img/admingen.png"
                                    width="11"
                                    height="11"
                                    alt="badge"
                                />
                                <Form.Label
                                    onClick={() => {
                                        props.handleIsBlog()
                                        props.setMenuDropdown((prevState) => !prevState)
                                    }}
                                    style={{
                                        color: "white",
                                        fontWeight: "400",
                                        fontSize: "13px",
                                        marginLeft: "10px",
                                        marginTop: '-5px',
                                        cursor: "pointer"
                                    }}>
                                    Blog
                                </Form.Label>
                            </div>
                            <div style={props.isAdmins ? {
                                display: "flex",
                                marginTop: '10px',
                                background: "rgba(255, 255, 255, 0.2)",
                                padding: "9px",
                                borderRadius: "6px",
                                height: "36px",
                                width: '98%'
                            } : {
                                display: "flex",
                                marginTop: '10px'
                            }}>
                                <Image
                                    style={{
                                        width: "11px",
                                        maxWidth: "100%",
                                    }}
                                    src="/img/admingen.png"
                                    width="11"
                                    height="11"
                                    alt="badge"
                                />
                                <Form.Label
                                    onClick={() => {
                                        props.handleIsAdmins()
                                        props.setMenuDropdown((prevState) => !prevState)
                                    }}
                                    style={{
                                        color: "white",
                                        fontWeight: "400",
                                        fontSize: "13px",
                                        marginLeft: "10px",
                                        marginTop: '-5px',
                                        cursor: "pointer"
                                    }}>
                                    Admins
                                </Form.Label>
                            </div>
                        </div>
                        <Form.Label style={{
                            color: "white",
                            fontWeight: "400",
                            fontSize: "11px",
                            marginTop: "10px"
                        }}>
                            Admins referral code:
                        </Form.Label>
                        <div style={{
                            display: "flex",
                            width: "100%",
                            gap: '5px'
                        }}>
                            <Button style={{
                                width: '55%',
                                fontSize: '11px',
                                background: "rgba(255, 255, 255, 0.2)",
                                boxSizing: "border-box",
                                padding: "9px, 16px, 10px, 16px",
                                textAlign: "center",
                                border: "1px solid #E7E7E7"
                            }}>23837cdge747</Button>
                            <Button style={{
                                width: '40%',
                                background: "transparent",
                                boxSizing: "border-box",
                                padding: "9px",
                                textAlign: "center",
                                border: "1px solid #E7E7E7",
                                display: 'flex',
                                gap: "2px"
                            }}>
                                <Image
                                    style={{
                                        width: "13px",
                                        maxWidth: "100%",
                                    }}
                                    src="/img/admincopy.png"
                                    width="13"
                                    height="13"
                                    alt="badge"
                                />
                                <Form.Label style={{
                                    fontSize: '11px',
                                    color: 'white',
                                    marginLeft: '10px',
                                }}>Copy</Form.Label>
                            </Button>
                        </div>
                        <hr style={{
                            color: "#E7E7E7",
                            width: '89%',
                            fontWeight: '600'
                        }} />
                        <div style={{
                            display: 'flex',
                            marginTop: "20px",
                            marginBottom: '30px'
                        }}>
                            <Image
                                style={{
                                    width: "13px",
                                    maxWidth: "100%",
                                }}
                                src="/img/logout1.png"
                                width="13"
                                height="13"
                                alt="badge"
                            />
                            <Form.Label style={{
                                fontSize: "14px",
                                fontWeight: '500',
                                color: "white",
                                marginTop: "-3px",
                                marginLeft: '10px',
                                cursor: "pointer"
                            }}>
                                Log out
                            </Form.Label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}