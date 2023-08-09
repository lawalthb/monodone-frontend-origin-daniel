import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from '../customerdashboard.module.css'
import { Button, Form } from 'react-bootstrap'
import ReusableLinks from './reusables/reusableLinks'
import PaymentHistory from './reusables/paymentHistory'
import RequestInboxContent from './reusables/requestInboxContent'
import SentRequestsContent from './reusables/sentRequestsContent'
import MorePaymentHistory from './reusables/morePaymentHistory'
import OrderHistory from './orderHistory'
import RequestMoneyModal from './reusables/requestMoneyModal'
import RequestMoneyFrom from './reusables/requestMoneyFrom'
import WalletSuccessModal from './reusables/walletSuccessModal'
import SendMoney from './reusables/sendMoney'
import PaymentMethod from './reusables/paymentMethod'
import WalletCode from './reusables/walletCode'
import TopupMonowallet from './reusables/topupMonowallet'
import PaymentCardComp from './reusables/paymentCardComp'
import Topup from './reusables/topup'
import SendACard from './reusables/sendACard'
import SendAnotherUser from './reusables/sendAnotherUser'
import ChangeCardModal from './reusables/changeCardModal'
import CashOut from './reusables/cashOut'
import WalletSettingsModal from './reusables/walletSettingsModal'
import WalletpinCreate from './reusables/walletpinCreate'
import WalletSuccess from './reusables/walletSuccess'
import WalletpinReset from './reusables/walletpinReset'
import WalletTransfer from './reusables/walletTransfer'
import WalletContact from './reusables/walletContact'
import WalletDelete from './reusables/walletDelete'
import SendMoneyModal from './reusables/sendMoneyModal'
import { FaPlus } from 'react-icons/fa'

export default function WalletContentDesktop(props) {
    const handleIsSentRequests = () => {
        props.setIsSentRequests(true)
        props.setIsRequestInbox(false)
    }

    const handleIsRequestInbox = () => {
        props.setIsRequestInbox(true)
        props.setIsSentRequests(false)
    }

    const handleIsSettings = () => {
        props.setIsSettings(true)
        props.setIsHome(false)
        props.setIsTopUp(false)
        props.setIsRequest(false)
        props.setIsTransfer(false)
        props.setIsOrderHistory(false)
    }

    const handleIsOrderHistory = () => {
        props.setIsOrderHistory(true)
        props.setIsHome(false)
        props.setIsTopUp(false)
        props.setIsRequest(false)
        props.setIsTransfer(false)
        props.setIsSettings(false)
    }

    const handleIsTransfer = () => {
        props.setIsTransfer(true)
        props.setIsHome(false)
        props.setIsTopUp(false)
        props.setIsRequest(false)
        props.setIsOrderHistory(false)
        props.setIsSettings(false)
    }

    const handleIsRequest = () => {
        props.setIsRequest(true)
        props.setIsHome(false)
        props.setIsTopUp(false)
        props.setIsTransfer(false)
        props.setIsOrderHistory(false)
        props.setIsSettings(false)
    }

    const handleIsHome = () => {
        props.setIsHome(true)
        props.setIsTopUp(false)
        props.setIsRequest(false)
        props.setIsTransfer(false)
        props.setIsOrderHistory(false)
        props.setIsSettings(false)
        props.setMorePaymentHistory(false)
    }

    const handleIsTopUp = () => {
        props.setIsTopUp(true)
        props.setIsHome(false)
        props.setIsRequest(false)
        props.setIsTransfer(false)
        props.setIsOrderHistory(false)
        props.setIsSettings(false)
    }

    useEffect(() => {
        if (props.isSentRequests) {
            props.setIsRequestInbox(false)
        } else {
            props.setIsRequestInbox(true)
        }
    }, [props])

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
                style={{
                    display: "flex",
                    flexDirection: 'column',
                    width: "100%",
                    height: '100%',
                    paddingLeft: '10%',
                    paddingRight: '5%',
                    paddingTop: '2%',
                    marginBottom: "100px"
                }}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        gap: "70px"
                    }}>
                    <div
                        className={styles.walletSidebar}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                            width: '270px',
                            height: "530px",
                            padding: '37px 24px',
                        }}>
                        <ReusableLinks
                            handleFn={handleIsHome}
                            linkState={(props.walletpinCreate 
                                || props.walletpinReset
                                || props.walletTransfer
                                || props.walletContact
                                || props.walletDelete) ?
                                undefined : props.isHome}
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
                            handleFn={() => props.setTopupMonowallet(true)}
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
                            handleFn={() => props.setRequestMoneyModal(true)}
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
                                // cursor: "pointer"
                            }}
                            imgSrc="/img/walletrequest.png"
                            imgWidth="20"
                            imgHeight="20"
                            alt="wallet request icon"
                            caption="Transfer"
                            isTransferMenu={props.isTransferMenu}
                            setIsTransferMenu={props.setIsTransferMenu}
                            setSendToYourCard={props.setSendToYourCard}
                            setSendMoney={props.setSendMoney}
                            setSendAnotherUser={props.setSendAnotherUser}
                            setCashout={props.setCashout}                            
                            setSendMoneyModal={props.setSendMoneyModal}
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
                            handleFn={() => props.setWalletSettings(true)}
                            linkState={props.walletDelete ? props.walletDelete :
                                props.walletContact ? props.walletContact :
                                    props.walletTransfer ? props.walletTransfer :
                                        props.walletpinReset ? props.walletpinReset
                                            : props.walletpinCreate ? props.walletpinCreate : props.walletSettings}
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
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%'
                    }}>
                        <div
                            className={styles.walletTopContent}
                            style={{
                                width: '100%',
                                display: "flex",
                                justifyContent: 'space-between',
                                height: "141px",
                                borderRadius: '13px',
                                padding: '20px 30px'
                            }}>
                            <div style={{
                                display: 'flex',
                                flexDirection: "column",
                                gap: "5px"
                            }}>
                                <Form.Label style={{
                                    fontSize: '13px',
                                    color: "#FFFFFF",
                                    fontWeight: '400',
                                }}>
                                    Balance
                                </Form.Label>
                                <Form.Label style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    fontSize: '26px',
                                    lineHeight: '18px',
                                    color: 'white'
                                }}>
                                    # 3 128.00
                                </Form.Label>
                                <Form.Label style={{
                                    fontSize: '13px',
                                    color: "#FFFFFF",
                                    fontWeight: '400',
                                }}>
                                    ID 2490 9090 897 8080
                                </Form.Label>
                            </div>
                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: 'center',
                            }}>
                                <Button
                                    style={{
                                        display: 'flex',
                                        gap: '10px',
                                        alignItems: 'center',
                                        background: 'white',
                                        border: 'none',
                                        padding: '10px 10px',
                                        color: "#00902F",
                                        fontSize: '13px',
                                        fontWeight: '500',
                                    }}>
                                    <FaPlus /> Add New card
                                </Button>
                            </div>
                        </div>
                        {props.isHome && (
                            props.morePaymentHistory ? (
                                <>
                                    <MorePaymentHistory />
                                </>
                            ) :
                                <>
                                    <PaymentCardComp
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            padding: '9px',
                                            width: '90%',
                                            height: '60px',
                                            border: '1px solid #A6A6A6',
                                            borderRadius: '7px',
                                            marginTop: '30px'
                                        }}
                                        setChangeCard={props.setChangeCard}
                                    />
                                    <Form.Label style={{
                                        fontSize: '14px',
                                        color: "black",
                                        fontWeight: '500',
                                        marginTop: '30px'
                                    }}>
                                        PAYMENT HISTORY
                                    </Form.Label>
                                    <Form.Label style={{
                                        fontSize: '12px',
                                        color: "black",
                                        fontWeight: '400',
                                        marginTop: '30px'
                                    }}>
                                        19 July, 2022
                                    </Form.Label>
                                    <PaymentHistory
                                        paymentType="Cash out"
                                        status="Agent office #34"
                                        amount="-#1350.00"
                                    />
                                    <PaymentHistory
                                        paymentType="Cash out"
                                        status="Rejection"
                                        amount="#1350.00"
                                    />
                                    <PaymentHistory
                                        paymentType="Cash out"
                                        status="Approved"
                                        amount="#1350.00"
                                    />
                                    <PaymentHistory
                                        paymentType="Cash top up"
                                        status="Pending"
                                        amount="#100.00"
                                    />
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Form.Label
                                            onClick={() => props.setMorePaymentHistory(true)}
                                            style={{
                                                fontSize: '14px',
                                                color: "#00902F",
                                                marginTop: '10px',
                                                fontWeight: 'bold',
                                                cursor: 'pointer'
                                            }}>
                                            VIEW MORE PAYMENT HISTORY
                                        </Form.Label>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        gap: "20px",
                                        marginTop: "30px"
                                    }}>
                                        <Form.Label
                                            onClick={handleIsRequestInbox}
                                            style={props.isRequestInbox ? {
                                                fontSize: '14px',
                                                color: "#00902F",
                                                fontWeight: '600',
                                                cursor: 'pointer',
                                                borderBottom: "1px solid #00902F",
                                                paddingBottom: "5px"
                                            } : {
                                                fontSize: '14px',
                                                color: "#A6A6A6",
                                                fontWeight: '500',
                                                cursor: 'pointer'
                                            }}>
                                            REQUEST INBOX
                                        </Form.Label>
                                        <Form.Label
                                            onClick={handleIsSentRequests}
                                            style={props.isSentRequests ? {
                                                fontSize: '14px',
                                                color: "#00902F",
                                                fontWeight: '600',
                                                cursor: 'pointer',
                                                borderBottom: "1px solid #00902F",
                                                paddingBottom: "5px"
                                            } : {
                                                fontSize: '14px',
                                                color: "#A6A6A6",
                                                fontWeight: '500',
                                                cursor: 'pointer'
                                            }}>
                                            SENT REQUESTS
                                        </Form.Label>
                                    </div>
                                    {props.isRequestInbox && (
                                        <>
                                            <RequestInboxContent
                                                imgSrc="/img/driver3.png"
                                                name="Kalush"
                                                statement="requests"
                                                amount="#10"
                                                setRequestMoneyModal={props.setRequestMoneyModal}
                                            />
                                            <RequestInboxContent
                                                imgSrc="/img/driver2.png"
                                                name="Stephania"
                                                statement="requests"
                                                amount="#130"
                                                setRequestMoneyModal={props.setRequestMoneyModal}
                                            />
                                            <RequestInboxContent
                                                imgSrc="/img/driver.png"
                                                name="Stephan"
                                                statement="requests"
                                                amount="#163"
                                                setRequestMoneyModal={props.setRequestMoneyModal}
                                            />
                                        </>
                                    )}
                                    {props.isSentRequests && (
                                        <>
                                            <SentRequestsContent
                                                imgSrc="/img/driver2.png"
                                                name="Stephania"
                                                amount="#150.00"
                                                setSendMoney={props.setSendMoney}
                                            />
                                            <SentRequestsContent
                                                imgSrc="/img/walletprof.png"
                                                name="Adanna"
                                                amount="#150.00"
                                                setSendMoney={props.setSendMoney}
                                            />
                                            <SentRequestsContent
                                                imgSrc="/img/driver2.png"
                                                name="Stephania"
                                                amount="#150.00"
                                                setSendMoney={props.setSendMoney}
                                            />
                                            <SentRequestsContent
                                                imgSrc="/img/walletprof.png"
                                                name="Adanna"
                                                amount="#150.00"
                                                setSendMoney={props.setSendMoney}
                                            />
                                        </>
                                    )}
                                </>
                        )}
                        {props.isOrderHistory && (
                            <>
                                <OrderHistory />
                            </>
                        )}
                    </div>
                </div>
            </div>
            <RequestMoneyModal
                style={{
                    marginLeft: '5%'
                }}
                requestMoneyModal={props.requestMoneyModal}
                setRequestMoneyModal={props.setRequestMoneyModal}
                setRequestMoneyFrom={props.setRequestMoneyFrom}
            />
            <RequestMoneyFrom
                style={{
                    marginLeft: '5%'
                }}
                requestMoneyFrom={props.requestMoneyFrom}
                setRequestMoneyFrom={props.setRequestMoneyFrom}
                setWalletSuccessModal={props.setWalletSuccessModal}
                amount={props.amount}
                setAmount={props.setAmount}
            />
            <WalletSuccessModal
                walletSuccessModal={props.walletSuccessModal}
                setWalletSuccessModal={props.setWalletSuccessModal}
            />            
            <SendMoney
                sendMoney={props.sendMoney}
                setSendMoney={props.setSendMoney}
                setPaymentMethod={props.setPaymentMethod}
            />
            <PaymentMethod
                paymentMethod={props.paymentMethod}
                setPaymentMethod={props.setPaymentMethod}
                setWalletCode={props.setWalletCode}
            />
            <WalletCode
                walletCode={props.walletCode}
                setWalletCode={props.setWalletCode}
                setWalletSuccessModal={props.setWalletSuccessModal}
            />
            <TopupMonowallet
                topupMonowallet={props.topupMonowallet}
                setTopupMonowallet={props.setTopupMonowallet}
                setTopup={props.setTopup}
            />
            <Topup
                topup={props.topup}
                setTopup={props.setTopup}
                amount={props.amount}
                setAmount={props.setAmount}
            />
            <SendACard
                sendToYourCard={props.sendToYourCard}
                setSendToYourCard={props.setSendToYourCard}
                amount={props.amount}
                setAmount={props.setAmount}
                setWalletCode={props.setWalletCode}
            />
            <SendMoneyModal
                sendMoneyModal={props.sendMoneyModal}
                setSendMoneyModal={props.setSendMoneyModal}
                setSendAnotherUser={props.setSendAnotherUser}
            />
            <SendAnotherUser
                sendAnotherUser={props.sendAnotherUser}
                setSendAnotherUser={props.setSendAnotherUser}
            />
            <ChangeCardModal
                changeCard={props.changeCard}
                setChangeCard={props.setChangeCard}
            />
            <CashOut
                cashout={props.cashout}
                setCashout={props.setCashout}
                amount={props.amount}
                setAmount={props.setAmount}
            />
            <WalletSettingsModal
                walletSettings={props.walletSettings}
                setWalletSettings={props.setWalletSettings}
                style={{
                    marginTop: '5%',
                }}
                walletSettingCreate={props.walletSettingCreate}
                setWalletSettingCreate={props.setWalletSettingCreate}
                walletSettingReset={props.walletSettingReset}
                setWalletSettingReset={props.setWalletSettingReset}
                walletSettingTransfer={props.walletSettingTransfer}
                setWalletSettingTransfer={props.setWalletSettingTransfer}
                walletSettingContact={props.walletSettingContact}
                setWalletSettingContact={props.setWalletSettingContact}
                walletSettingDelete={props.walletSettingDelete}
                setWalletSettingDelete={props.setWalletSettingDelete}
                setWalletpinCreate={props.setWalletpinCreate}
                setWalletpinReset={props.setWalletpinReset}
                setWalletTransfer={props.setWalletTransfer}
                setWalletContact={props.setWalletContact}
                setWalletDelete={props.setWalletDelete}
            />
            <WalletpinCreate
                walletpinCreate={props.walletpinCreate}
                setWalletpinCreate={props.setWalletpinCreate}
                setWalletSuccess={props.setWalletSuccess}
            />
            <WalletpinReset
                walletpinReset={props.walletpinReset}
                setWalletpinReset={props.setWalletpinReset}
                setWalletSettings={props.setWalletSettings}
                setWalletSuccess={props.setWalletSuccess}
            />
            <WalletTransfer
                walletTransfer={props.walletTransfer}
                setWalletTransfer={props.setWalletTransfer}
                setWalletSettings={props.setWalletSettings}
                setWalletSuccess={props.setWalletSuccess}
            />
            <WalletContact
                walletContact={props.walletContact}
                setWalletContact={props.setWalletContact}
                setWalletSettings={props.setWalletSettings}
                setWalletSuccess={props.setWalletSuccess}
            />
            <WalletDelete
                walletDelete={props.walletDelete}
                setWalletDelete={props.setWalletDelete}
            />
            <WalletSuccess
                walletSuccess={props.walletSuccess}
                setWalletSuccess={props.setWalletSuccess}
                caption="Success"
                message="Wallet pin has been set successfully, you can proceed
                with other operation in the website"
                btnLabel="Continue"
                handleClick={() => props.setWalletSuccess(false)}
            />
        </>
    )
}