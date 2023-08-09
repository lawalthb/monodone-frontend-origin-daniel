import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Form } from "react-bootstrap";
import styles from '../customerdashboard.module.css'
import ReusableLinks from "./reusables/reusableLinks";

export default function WalletTopNavMobile(props) {
    const [isMobleSidebar, setIsMobileSidebar] = useState(false)
    const walletRef = useRef();

    const handleIsHome = () => {
        props.setIsHome(true)
        props.setIsTopUp(false)
        props.setIsRequest(false)
        props.setIsTransfer(false)
        props.setIsOrderHistory(false)
        props.setIsSettings(false)
        props.setMorePaymentHistory(false)
        setIsMobileSidebar(false)
    }

    const handleIsTopUp = () => {
        props.setIsTopUp(true)
        props.setIsHome(false)
        props.setIsRequest(false)
        props.setIsTransfer(false)
        props.setIsOrderHistory(false)
        props.setIsSettings(false)
        setIsMobileSidebar(false)
    }

    const handleIsSettings = () => {
        props.setIsSettings(true)
        props.setIsHome(false)
        props.setIsTopUp(false)
        props.setIsRequest(false)
        props.setIsTransfer(false)
        props.setIsOrderHistory(false)
        setIsMobileSidebar(false)
    }

    const handleIsOrderHistory = () => {
        props.setIsOrderHistory(true)
        props.setIsHome(false)
        props.setIsTopUp(false)
        props.setIsRequest(false)
        props.setIsTransfer(false)
        props.setIsSettings(false)
        setIsMobileSidebar(false)
    }

    const handleIsTransfer = () => {
        props.setIsTransfer(true)
        props.setIsHome(false)
        props.setIsTopUp(false)
        props.setIsRequest(false)
        props.setIsOrderHistory(false)
        props.setIsSettings(false)
        setIsMobileSidebar(false)
    }

    const handleIsRequest = () => {
        props.setIsRequest(true)
        props.setIsHome(false)
        props.setIsTopUp(false)
        props.setIsTransfer(false)
        props.setIsOrderHistory(false)
        props.setIsSettings(false)
        setIsMobileSidebar(false)
    }

    useEffect(() => {
        const walletHandler = (event) => {
            if (
                isMobleSidebar &&
                walletRef.current &&
                !walletRef.current.contains(event.target)
            ) {
                setIsMobileSidebar(false);
            }
        };
        document.addEventListener("mousedown", walletHandler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", walletHandler);
        };
    }, [isMobleSidebar]);

    useEffect(() => {
        if (props.isTopUp) {
            props.setIsHome(false)
            props.setIsRequest(false)
            props.setIsTransfer(false)
            props.setIsOrderHistory(false)
            props.setIsSettings(false)
        } else if (props.isRequest) {
            props.setIsHome(false)
            props.setIsTopUp(false)
            props.setIsTransfer(false)
            props.setIsOrderHistory(false)
            props.setIsSettings(false)
        } else if (props.isTransfer) {
            props.setIsHome(false)
            props.setIsRequest(false)
            props.setIsTopUp(false)
            props.setIsOrderHistory(false)
            props.setIsSettings(false)
        } else if (props.isOrderHistory) {
            props.setIsHome(false)
            props.setIsTopUp(false)
            props.setIsRequest(false)
            props.setIsTransfer(false)
            props.setIsSettings(false)
        } else if (props.isSettings) {
            props.setIsHome(false)
            props.setIsTopUp(false)
            props.setIsRequest(false)
            props.setIsTransfer(false)
            props.setIsOrderHistory(false)
        } else {
            props.setIsHome(true)
        }
    }, [props])

    return (
        <>
            <div
                ref={walletRef}
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    height: '62px',
                    padding: "20px",
                    background: 'white'
                }}>
                <Image style={{
                    maxWidth: '100%',
                    width: "36px"
                }} src="/img/success-logo.png" width="36" height="24" alt="hamburger" />
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '13px',
                }}>
                    <Image style={{
                        maxWidth: '100%',
                        width: "24px"
                    }} src="/img/user.png" width="24" height="24" alt="user" />
                    <Form.Label style={{
                        fontSize: '11px',
                        color: "black",
                        marginTop: "2px",
                        fontWeight: '500'
                    }}>
                        Kelechi Agu
                    </Form.Label>
                    <Image style={{
                        maxWidth: '100%',
                        width: "20px"
                    }} src="/img/walletnotification.png" width="20" height="20" alt="notification" />
                    <Image style={{
                        maxWidth: '100%',
                        width: "30px"
                    }} src="/img/walletmsg.png" width="30" height="20" alt="message" />
                    <Image
                        onClick={() => setIsMobileSidebar((prevState) => !prevState)}
                        style={{
                            maxWidth: '100%',
                            width: "12px",
                            marginTop: '3px'
                        }}
                        src={isMobleSidebar ? "/img/close.png" : "/img/hamburger1.png"}
                        width="12"
                        height="12"
                        alt="hamburger"
                    />
                </div>
                <div
                    className={styles.walletSidebar}
                    style={isMobleSidebar ? {
                        display: "block",
                        position: 'absolute',
                        top: "40px",
                        right: "10px",
                        width: "190px",
                        height: "400px",
                        padding: '10px'
                    } : {
                        display: 'none'
                    }}>
                    <div style={props.isTransferMenu ? {
                        display: 'block',
                        position: 'absolute',
                        width: '140px',
                        height: '110px',
                        top: "180px",
                        right: '13px',
                        background: 'white',
                        borderRadius: "7px"
                    } : {
                        display: "none"
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: "5px",
                            padding: "10px 20px"
                        }}>
                            <Form.Label
                                onClick={() => {
                                    props.setSendToYourCard(true)
                                    props.setIsTransferMenu(false)
                                    setIsMobileSidebar(false)
                                }}
                                style={{
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: '500',
                                    marginTop: '3px'
                                }}>
                                To your card
                            </Form.Label>
                            <Form.Label
                                onClick={() => {
                                    props.setSendMoneyModal(true)
                                    props.setIsTransferMenu(false)
                                    setIsMobileSidebar(false)
                                }}
                                style={{
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: '500',
                                    marginTop: '3px'
                                }}>
                                To another user
                            </Form.Label>
                            <Form.Label
                                onClick={() => {
                                    props.setCashout(true)
                                    props.setIsTransferMenu(false)
                                    setIsMobileSidebar(false)
                                }}
                                style={{
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: '500',
                                    marginTop: '3px'
                                }}>
                                Cash out
                            </Form.Label>
                        </div>
                    </div>
                    <ReusableLinks
                        handleFn={handleIsHome}
                        linkState={props.isHome}
                        imgStyle={{
                            maxWidth: '100%',
                            width: "20px",
                            cursor: "pointer"
                        }}
                        imgSrc="/img/wallethomeicon.png"
                        imgWidth="20"
                        imgHeight="20"
                        alt="wallet home icon"
                        caption="Home"
                    />
                    <ReusableLinks
                        handleFn={() => {
                            props.setTopupMonowallet(true)
                            setIsMobileSidebar(false)
                        }}
                        linkState={props.isTopUp}
                        imgStyle={{
                            maxWidth: '100%',
                            width: "20px",
                            cursor: "pointer"
                        }}
                        imgSrc="/img/wallettopup.png"
                        imgWidth="20"
                        imgHeight="20"
                        alt="wallet topup icon"
                        caption="Top Up"
                    />
                    <ReusableLinks
                        handleFn={() => {
                            props.setRequestMoneyModal(true)
                            setIsMobileSidebar(false)
                        }}
                        linkState={props.isRequest}
                        imgStyle={{
                            maxWidth: '100%',
                            width: "20px",
                            cursor: "pointer"
                        }}
                        imgSrc="/img/walletrequest.png"
                        imgWidth="20"
                        imgHeight="20"
                        alt="wallet request icon"
                        caption="Request"
                    />
                    <ReusableLinks
                        handleFn={() => props.setIsTransferMenu((prevState) => !prevState)}
                        linkState={props.isTransfer}
                        imgStyle={{
                            maxWidth: '100%',
                            width: "20px",
                            cursor: "pointer"
                        }}
                        imgSrc="/img/walletrequest.png"
                        imgWidth="20"
                        imgHeight="20"
                        alt="wallet request icon"
                        caption="Transfer"
                    />
                    <ReusableLinks
                        handleFn={handleIsOrderHistory}
                        linkState={props.isOrderHistory}
                        imgStyle={{
                            maxWidth: '100%',
                            width: "17px",
                            cursor: "pointer"
                        }}
                        imgSrc="/img/walletorder.png"
                        imgWidth="17"
                        imgHeight="15"
                        alt="wallet order icon"
                        caption="Order history"
                    />
                    <ReusableLinks
                        handleFn={() => {
                            props.setWalletSettings(true)
                            setIsMobileSidebar(false)
                        }
                        }
                        linkState={props.walletSettings}
                        imgStyle={{
                            maxWidth: '100%',
                            width: "16px",
                            cursor: "pointer"
                        }}
                        imgSrc="/img/walletsettings.png"
                        imgWidth="16"
                        imgHeight="16"
                        alt="wallet order icon"
                        caption="Settings"
                    />
                    <div style={{
                        display: 'flex',
                        gap: '16px',
                        padding: '9px 16px',
                        marginTop: '40px'
                    }}>
                        <Image style={{
                            maxWidth: '100%',
                            width: "17px",
                            cursor: 'pointer'
                        }} src="/img/walletlogout.png" width="17" height="17" alt="logout" />
                        <Form.Label style={{
                            fontSize: '14px',
                            color: "white",
                            fontWeight: '500',
                            cursor: 'pointer'
                        }}>
                            Logout
                        </Form.Label>
                    </div>
                </div>
            </div>
        </>
    )
}