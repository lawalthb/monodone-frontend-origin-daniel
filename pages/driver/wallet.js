import DriverLayout from '@/components/driver/driverLayout/driverLayout';
import Media from '@/utils/media';

export default function Wallet(props) {
  const { mobile, tabletAndDesktop } = Media();

  const navData = [
    {
      imgSrc: "/img/home.png",
      caption: "Broadcast",
      imgWidth: "16",
      imgHeight: "17",
      section: "broadcast",
      handleSection: "handleBroadcast",
      route: "/driver",
    },
    {
      imgSrc: "/img/shopping-bag.png",
      caption: "Orders",
      imgWidth: "18",
      imgHeight: "20",
      section: "order",
      handleSection: "handleOrder",
      route: "/driver/orders",
    },
    {
      imgSrc: "/img/wallet1.png",
      caption: "Wallet",
      imgWidth: "20",
      imgHeight: "14",
      section: "wallet",
      handleSection: "handleWallet",
      route: "/driver/wallet",
    },
    {
      imgSrc: "/img/settings.png",
      caption: "Settings",
      imgWidth: "20",
      imgHeight: "20",
      section: "settings",
      handleSection: "handleSettings",
      route: "/driver/settings",
    }
  ]

  return (
    <>
      {tabletAndDesktop && (
        <DriverLayout sideBarDetails={navData} title="Wallet">{'Wallet'}</DriverLayout>
      )}
    </>
  );
}
