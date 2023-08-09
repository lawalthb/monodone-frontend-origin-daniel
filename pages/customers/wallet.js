import Head from "next/head";
import { useState, useEffect } from "react";
import WalletLayout from "../../components/customers/layout/WalletLayout";
import WalletContentMobile from "../../components/customers/wallet/walletContentMobile";
import WalletContentDesktop from "../../components/customers/wallet/walletContentDesktop";
import Media from "@/utils/media";

export default function MonoWallet(props) {
    const { mobile, tabletAndDesktop} = Media();
    const [isHome, setIsHome] = useState(false)
    const [isTopUp, setIsTopUp] = useState(false)
    const [isRequest, setIsRequest] = useState(false)
    const [isTransfer, setIsTransfer] = useState(false)
    const [isOrderHistory, setIsOrderHistory] = useState(false)
    const [isSettings, setIsSettings] = useState(false)
    const [isRequestInbox, setIsRequestInbox] = useState(false)
    const [isSentRequests, setIsSentRequests] = useState(false)
    const [isTransferMenu, setIsTransferMenu] = useState(false)
    const [morePaymentHistory, setMorePaymentHistory] = useState(false)
    const [requestMoneyModal, setRequestMoneyModal] = useState(false)
    const [requestMoneyFrom, setRequestMoneyFrom] = useState(false)
    const [walletSuccessModal, setWalletSuccessModal] = useState(false)
    const [sendMoney, setSendMoney] = useState(false)
    const [paymentMethod, setPaymentMethod] = useState(false)
    const [walletCode, setWalletCode] = useState(false)
    const [incompleteTransaction, setIncompleteTransaction] = useState(false)
    const [topupMonowallet, setTopupMonowallet] = useState(false)
    const [topup, setTopup] = useState(false)
    const [amount, setAmount] = useState("")
    const [sendToYourCard, setSendToYourCard] = useState(false)
    const [sendAnotherUser, setSendAnotherUser] = useState(false)
    const [changeCard, setChangeCard] = useState(false)
    const [cashout, setCashout] = useState(false)
    const [walletSettings, setWalletSettings] = useState(false)
    const [walletSettingCreate, setWalletSettingCreate] = useState(false)
    const [walletSettingReset, setWalletSettingReset] = useState(false)
    const [walletSettingTransfer, setWalletSettingTransfer] = useState(false)
    const [walletSettingContact, setWalletSettingContact] = useState(false)
    const [walletSettingDelete, setWalletSettingDelete] = useState(false)
    const [walletpinCreate, setWalletpinCreate] = useState(false)
    const [walletSuccess, setWalletSuccess] = useState(false)
    const [walletpinReset, setWalletpinReset] = useState(false)
    const [walletTransfer, setWalletTransfer] = useState(false)
    const [walletContact, setWalletContact] = useState(false)
    const [walletDelete, setWalletDelete] = useState(false)


    useEffect(() => {
        setAmount("+ #100")
    }, [setAmount])
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Mono Wallet</title>
                <meta name="Description" content="mono wallet." />
                <link rel="manifest" href="manifest.webmanifest" />
            </Head>
            <WalletLayout
                isHome={isHome}
                setIsHome={setIsHome}
                isTopUp={isTopUp}
                setIsTopUp={setIsTopUp}
                isRequest={isRequest}
                setIsRequest={setIsRequest}
                isTransfer={isTransfer}
                setIsTransfer={setIsTransfer}
                isOrderHistory={isOrderHistory}
                setIsOrderHistory={setIsOrderHistory}
                isSettings={isSettings}
                setIsSettings={setIsSettings}
                isTransferMenu={isTransferMenu}
                setIsTransferMenu={setIsTransferMenu}
                morePaymentHistory={morePaymentHistory}
                setMorePaymentHistory={setMorePaymentHistory}
                topupMonowallet={topupMonowallet}
                setTopupMonowallet={setTopupMonowallet}
                requestMoneyModal={requestMoneyModal}
                setRequestMoneyModal={setRequestMoneyModal}
                sendToYourCard={sendToYourCard}
                setSendToYourCard={setSendToYourCard}
                sendAnotherUser={sendAnotherUser}
                setSendAnotherUser={setSendAnotherUser}
                cashout={cashout}
                setCashout={setCashout}
                walletSettings={walletSettings}
                setWalletSettings={setWalletSettings}
            >
                {mobile && (
                    <WalletContentMobile
                        isHome={isHome}
                        setIsHome={setIsHome}
                        isTopUp={isTopUp}
                        setIsTopUp={setIsTopUp}
                        isRequest={isRequest}
                        setIsRequest={setIsRequest}
                        isTransfer={isTransfer}
                        setIsTransfer={setIsTransfer}
                        isOrderHistory={isOrderHistory}
                        setIsOrderHistory={setIsOrderHistory}
                        isSettings={isSettings}
                        setIsSettings={setIsSettings}
                        isRequestInbox={isRequestInbox}
                        setIsRequestInbox={setIsRequestInbox}
                        isSentRequests={isSentRequests}
                        setIsSentRequests={setIsSentRequests}
                        morePaymentHistory={morePaymentHistory}
                        setMorePaymentHistory={setMorePaymentHistory}
                        requestMoneyModal={requestMoneyModal}
                        setRequestMoneyModal={setRequestMoneyModal}
                        requestMoneyFrom={requestMoneyFrom}
                        setRequestMoneyFrom={setRequestMoneyFrom}
                        walletSuccessModal={walletSuccessModal}
                        setWalletSuccessModal={setWalletSuccessModal}
                        sendMoney={sendMoney}
                        setSendMoney={setSendMoney}
                        paymentMethod={paymentMethod}
                        setPaymentMethod={setPaymentMethod}
                        walletCode={walletCode}
                        setWalletCode={setWalletCode}
                        incompleteTransaction={incompleteTransaction}
                        setIncompleteTransaction={setIncompleteTransaction}
                        topupMonowallet={topupMonowallet}
                        setTopupMonowallet={setTopupMonowallet}
                        topup={topup}
                        setTopup={setTopup}
                        amount={amount}
                        setAmount={setAmount}
                        sendToYourCard={sendToYourCard}
                        setSendToYourCard={setSendToYourCard}
                        sendAnotherUser={sendAnotherUser}
                        setSendAnotherUser={setSendAnotherUser}
                        changeCard={changeCard}
                        setChangeCard={setChangeCard}
                        cashout={cashout}
                        setCashout={setCashout}
                        walletSettings={walletSettings}
                        setWalletSettings={setWalletSettings}
                        walletSettingCreate={walletSettingCreate}
                        setWalletSettingCreate={setWalletSettingCreate}
                        walletSettingReset={walletSettingReset}
                        setWalletSettingReset={setWalletSettingReset}
                        walletSettingTransfer={walletSettingTransfer}
                        setWalletSettingTransfer={setWalletSettingTransfer}
                        walletSettingContact={walletSettingContact}
                        setWalletSettingContact={setWalletSettingContact}
                        walletSettingDelete={walletSettingDelete}
                        setWalletSettingDelete={setWalletSettingDelete}
                        walletpinCreate={walletpinCreate}
                        setWalletpinCreate={setWalletpinCreate}
                        walletSuccess={walletSuccess}
                        setWalletSuccess={setWalletSuccess}
                        walletpinReset={walletpinReset}
                        setWalletpinReset={setWalletpinReset}
                        walletTransfer={walletTransfer}
                        setWalletTransfer={setWalletTransfer}
                        walletContact={walletContact}
                        setWalletContact={setWalletContact}
                        walletDelete={walletDelete}
                        setWalletDelete={setWalletDelete}
                    />
                )}
                {tabletAndDesktop && (
                    <WalletContentDesktop
                        isHome={isHome}
                        setIsHome={setIsHome}
                        isTopUp={isTopUp}
                        setIsTopUp={setIsTopUp}
                        isRequest={isRequest}
                        setIsRequest={setIsRequest}
                        isTransfer={isTransfer}
                        setIsTransfer={setIsTransfer}
                        isOrderHistory={isOrderHistory}
                        setIsOrderHistory={setIsOrderHistory}
                        isSettings={isSettings}
                        setIsSettings={setIsSettings}
                        isRequestInbox={isRequestInbox}
                        setIsRequestInbox={setIsRequestInbox}
                        isSentRequests={isSentRequests}
                        setIsSentRequests={setIsSentRequests}
                        isTransferMenu={isTransferMenu}
                        setIsTransferMenu={setIsTransferMenu}
                        morePaymentHistory={morePaymentHistory}
                        setMorePaymentHistory={setMorePaymentHistory}
                        requestMoneyModal={requestMoneyModal}
                        setRequestMoneyModal={setRequestMoneyModal}
                        requestMoneyFrom={requestMoneyFrom}
                        setRequestMoneyFrom={setRequestMoneyFrom}
                        walletSuccessModal={walletSuccessModal}
                        setWalletSuccessModal={setWalletSuccessModal}
                        sendMoney={sendMoney}
                        setSendMoney={setSendMoney}
                        paymentMethod={paymentMethod}
                        setPaymentMethod={setPaymentMethod}
                        walletCode={walletCode}
                        setWalletCode={setWalletCode}
                        incompleteTransaction={incompleteTransaction}
                        setIncompleteTransaction={setIncompleteTransaction}
                        topupMonowallet={topupMonowallet}
                        setTopupMonowallet={setTopupMonowallet}
                        topup={topup}
                        setTopup={setTopup}
                        amount={amount}
                        setAmount={setAmount}
                        sendToYourCard={sendToYourCard}
                        setSendToYourCard={setSendToYourCard}
                        sendAnotherUser={sendAnotherUser}
                        setSendAnotherUser={setSendAnotherUser}
                        changeCard={changeCard}
                        setChangeCard={setChangeCard}
                        cashout={cashout}
                        setCashout={setCashout}
                        walletSettings={walletSettings}
                        setWalletSettings={setWalletSettings}
                        walletSettingCreate={walletSettingCreate}
                        setWalletSettingCreate={setWalletSettingCreate}
                        walletSettingReset={walletSettingReset}
                        setWalletSettingReset={setWalletSettingReset}
                        walletSettingTransfer={walletSettingTransfer}
                        setWalletSettingTransfer={setWalletSettingTransfer}
                        walletSettingContact={walletSettingContact}
                        setWalletSettingContact={setWalletSettingContact}
                        walletSettingDelete={walletSettingDelete}
                        setWalletSettingDelete={setWalletSettingDelete}
                        walletpinCreate={walletpinCreate}
                        setWalletpinCreate={setWalletpinCreate}
                        walletSuccess={walletSuccess}
                        setWalletSuccess={setWalletSuccess}
                        walletpinReset={walletpinReset}
                        setWalletpinReset={setWalletpinReset}
                        walletTransfer={walletTransfer}
                        setWalletTransfer={setWalletTransfer}
                        walletContact={walletContact}
                        setWalletContact={setWalletContact}
                        walletDelete={walletDelete}
                        setWalletDelete={setWalletDelete}
                    />
                )}
            </WalletLayout>
        </>
    )
}