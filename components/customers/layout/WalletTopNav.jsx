import WalletTopNavDesktop from "../wallet/walletTopNavDesktop";
import WalletTopNavMobile from "../wallet/walletTopNavMobile";
import Media from "@/utils/media";

export default function WalletTopNav(props) {
  const { mobile, tabletAndDesktop} = Media();

  return (
    <>
      {mobile && (
        <WalletTopNavMobile
          isHome={props.isHome}
          setIsHome={props.setIsHome}
          isTopUp={props.isTopUp}
          setIsTopUp={props.setIsTopUp}
          isRequest={props.isRequest}
          setIsRequest={props.setIsRequest}
          isTransfer={props.isTransfer}
          setIsTransfer={props.setIsTransfer}
          isOrderHistory={props.isOrderHistory}
          setIsOrderHistory={props.setIsOrderHistory}
          isSettings={props.isSettings}
          setIsSettings={props.setIsSettings}
          isTransferMenu={props.isTransferMenu}
          setIsTransferMenu={props.setIsTransferMenu}
          morePaymentHistory={props.morePaymentHistory}
          setMorePaymentHistory={props.setMorePaymentHistory}
          topupMonowallet={props.topupMonowallet}
          setTopupMonowallet={props.setTopupMonowallet}
          requestMoneyModal={props.requestMoneyModal}
          setRequestMoneyModal={props.setRequestMoneyModal}
          sendToYourCard={props.sendToYourCard}
          setSendToYourCard={props.setSendToYourCard}
          sendAnotherUser={props.sendAnotherUser}
          setSendAnotherUser={props.setSendAnotherUser}
          cashout={props.cashout}
          setCashout={props.setCashout}
          walletSettings={props.walletSettings}
          setWalletSettings={props.setWalletSettings}
          sendMoneyModal={props.sendMoneyModal}
          setSendMoneyModal={props.setSendMoneyModal}
        />
      )}
      {tabletAndDesktop && <WalletTopNavDesktop />}
    </>
  );
}
