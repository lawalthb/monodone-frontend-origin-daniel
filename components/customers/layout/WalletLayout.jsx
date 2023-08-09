import WalletTopNav from "./WalletTopNav";

export default function WalletLayout({
  children,
  isHome,
  setIsHome,
  isTopUp,
  setIsTopUp,
  isRequest,
  setIsRequest,
  isTransfer,
  setIsTransfer,
  isOrderHistory,
  setIsOrderHistory,
  isSettings,
  setIsSettings,
  isTransferMenu,
  setIsTransferMenu,
  morePaymentHistory,
  setMorePaymentHistory,
  topupMonowallet,
  setTopupMonowallet,
  requestMoneyModal,
  setRequestMoneyModal,
  sendToYourCard,
  setSendToYourCard,
  sendAnotherUser,
  setSendAnotherUser,
  cashout,
  setCashout,
  walletSettings,
  setWalletSettings,
  sendMoneyModal,
  setSendMoneyModal,
}) {
  console.log("isHome", isHome);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          margin: 0,
          padding: 0,
        }}
      >
        <WalletTopNav
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
          sendMoneyModal={sendMoneyModal}
          setSendMoneyModal={setSendMoneyModal}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
}
