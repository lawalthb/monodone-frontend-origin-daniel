import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import styles from '../../driver/manager/manager.module.css'
import PaymentHistory from './reusables/paymentHistory'
import RequestInboxContent from './reusables/requestInboxContent'
import SentRequestsContent from './reusables/sentRequestsContent'
import MorePaymentHistory from './reusables/morePaymentHistory'
import OrderHistory from './orderHistory'
import RequestMoneyModal from './reusables/requestMoneyModal'
import RequestMoneyFrom from './reusables/requestMoneyFrom'
import WalletSuccessModal from './reusables/walletSuccessModal'
import TopupMonowallet from './reusables/topupMonowallet'
import Topup from './reusables/topup'
import SendMoney from './reusables/sendMoney'
import PaymentMethod from './reusables/paymentMethod'
import WalletCode from './reusables/walletCode'
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

export default function WalletContentMobile(props) {
    const handleIsSentRequests = () => {
        props.setIsSentRequests(true)
        props.setIsRequestInbox(false)
    }

    const handleIsRequestInbox = () => {
        props.setIsRequestInbox(true)
        props.setIsSentRequests(false)
    }

    useEffect(() => {
        if (props.isSentRequests) {
            props.setIsRequestInbox(false)
        } else {
            props.setIsRequestInbox(true)
        }
    }, [props])

    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: 'column',
                    width: "100%",
                    padding: '20px',
                    background: 'white',
                    marginBottom: "100px"
                }}>
                <div
                    className={styles.walletBackground}
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        height: '164px',
                        padding: '20px',
                        borderRadius: '13px'
                    }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: "center",
                        marginTop: '20px',
                        // alignItems: 'center',
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
                            fontSize: '16px',
                            lineHeight: '14px',
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
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                padding: '9px',
                                width: '100%',
                                height: '60px',
                                // border: '1px solid #A6A6A6',
                                marginTop: '30px'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>
                                    <Form.Label style={{
                                        fontSize: '12px',
                                        color: "#808080",
                                        fontWeight: '400',
                                    }}>
                                        Payment card
                                    </Form.Label>
                                    <Form.Label style={{
                                        fontSize: '14px',
                                        color: "black",
                                        fontWeight: '400',
                                    }}>
                                        MasterCard***8009
                                    </Form.Label>
                                </div>
                                <div style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: 'center',
                                }}>
                                    <Button style={{
                                        background: 'transparent',
                                        border: '1px solid #7CC427',
                                        height: '35px',
                                        display: 'flex',
                                        alignItems: 'flex-start'
                                    }}>
                                        <Form.Label
                                            onClick={() => props.setChangeCard(true)}
                                            style={{
                                                fontSize: '12px',
                                                color: "black",
                                                fontWeight: '400',
                                            }}>
                                            Change
                                        </Form.Label>
                                    </Button>
                                </div>
                            </div>
                            <Form.Label style={{
                                fontSize: '14px',
                                color: "black",
                                fontWeight: '600',
                                marginTop: '30px'
                            }}>
                                REVENUE HISTORY
                            </Form.Label>
                            <Form.Label style={{
                                fontSize: '12px',
                                color: "black",
                                fontWeight: '400',
                                marginTop: '10px'
                            }}>
                                08 Jan, 2023
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
                                        fontSize: '12px',
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
                                        fontSize: '12px',
                                        color: "#00902F",
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        borderBottom: "1px solid #00902F",
                                        paddingBottom: "5px"
                                    } : {
                                        fontSize: '12px',
                                        color: "#A6A6A6",
                                        fontWeight: '500',
                                        cursor: 'pointer'
                                    }}>
                                    REQUEST INBOX
                                </Form.Label>
                                <Form.Label
                                    onClick={handleIsSentRequests}
                                    style={props.isSentRequests ? {
                                        fontSize: '12px',
                                        color: "#00902F",
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        borderBottom: "1px solid #00902F",
                                        paddingBottom: "5px"
                                    } : {
                                        fontSize: '12px',
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
            <RequestMoneyModal
                requestMoneyModal={props.requestMoneyModal}
                setRequestMoneyModal={props.setRequestMoneyModal}
                setRequestMoneyFrom={props.setRequestMoneyFrom}
            />
            <RequestMoneyFrom
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
                    marginTop: '8%',
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