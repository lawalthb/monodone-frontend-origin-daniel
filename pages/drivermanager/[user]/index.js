import { useState } from 'react';
import DriverContentDesktop from '@/components/driver/driverContentDesktop';
import DriverDetailsModal from '@/components/driver/driverDetailsModal';
import DriverLayout from '@/components/driver/driverLayout/driverLayout';
import DriverMobile from '@/components/driver/driverMobile';
import ViewLoadboard from '@/components/driver/viewLoadboard';
import Media from '@/utils/media';
import DriverReviewModal from '@/components/driver/driverReviewModal';
import AcceptDetailsModal from '@/components/driver/acceptDetailsModal';
import DriverInvoiceModal from '@/components/driver/driverInvoiceModal';
import ScanBarcode from '@/components/driver/scanBarcode';
import TakePicModal from '@/components/driver/takePicModal';
import Camera from '@/components/driver/camera';

export default function Driver(props) {
  const [driverDetailsModal, setDriverDetailsModal] = useState(false);
  const [review, setReview] = useState(false);
  const [acceptDetails, setAcceptDetails] = useState(false);
  const [printInvoice, setPrintInvoice] = useState(false);
  const { mobile, tabletAndDesktop } = Media();
  const [barcode, setBarcode] = useState("");
  const [takePic, setTakePic] = useState(false);
  const [isdeliveryPic, setIsDeliveryPic] = useState(false);
  const [deliveryPic, setDeliveryPic] = useState('');
  const [issued, setIssued] = useState(false);
  const [camera, setCamera] = useState(false);

  const refreshData = () => {
    setReview(false);
    setAcceptDetails(false)
    setPrintInvoice(false)
    setBarcode('')
    setTakePic(false)
    setIsDeliveryPic(false)
    setDeliveryPic(false)
    setIssued(false)
    setCamera(false)
  }

  const user = props.params.user
  const navData = [
      {
        imgSrc: "/img/home.png",
        caption: "Broadcast",
        imgWidth: "16",
        imgHeight: "17",
        section: "broadcast",
        handleSection: "handleBroadcast",
        route: `/drivermanager/${user}`,
      },
      {
        imgSrc: "/img/shopping-bag.png",
        caption: "Orders",
        imgWidth: "18",
        imgHeight: "20",
        section: "order",
        handleSection: "handleOrder",
        route: `/drivermanager/${user}/orders`,
      },
      (props.params.user == "superAdmin" || props.params.user == "admin") &&{
        imgSrc: "/img/drivers.png",
        caption: "Drivers",
        imgWidth: "18",
        imgHeight: "20",
        section: "order",
        handleSection: "handleOrder",
        route: `/drivermanager/${user}/drivers`,
      },
      props.params.user === "superAdmin" &&{
        imgSrc: "/img/drivers.png",
        caption: "Admins",
        imgWidth: "18",
        imgHeight: "20",
        section: "order",
        handleSection: "handleOrder",
        route: `/drivermanager/${user}/Admins`,
      },
      (props.params.user == "superAdmin" || props.params.user == "admin") &&{
        imgSrc: "/img/drivers.png",
        caption: "Available Drivers",
        imgWidth: "18",
        imgHeight: "20",
        section: "order",
        handleSection: "handleOrder",
        route: `/drivermanager/${user}/available-drivers`,
      },
      (props.params.user == "superAdmin" || props.params.user == "admin") &&{
        imgSrc: "/img/trucks.png",
        caption: "Available Trucks",
        imgWidth: "18",
        imgHeight: "20",
        section: "order",
        handleSection: "handleOrder",
        route: `/drivermanager/${user}/available-trucks`,
      },
      {
        imgSrc: "/img/wallet1.png",
        caption: "Wallet",
        imgWidth: "20",
        imgHeight: "14",
        section: "wallet",
        handleSection: "handleWallet",
        route: `/drivermanager/${user}/wallet`,
      },
      {
        imgSrc: "/img/settings.png",
        caption: "Settings",
        imgWidth: "20",
        imgHeight: "20",
        section: "settings",
        handleSection: "handleSettings",
        route: `/drivermanager/${user}/settings`,
      }
  ]

  return (
    <>
      {mobile && (
        <DriverLayout sideBarDetails={navData}>
          <div
            style={{
              marginTop: '72px',
              paddingBottom: '3rem'
            }}
          >
            {barcode == "scanning" ?
              <ScanBarcode 
                setBarcode={setBarcode}
                setAcceptDetails={setAcceptDetails}
                barcode={barcode}
              />
              :
            <DriverMobile setDriverDetailsModal={setDriverDetailsModal} refreshData={refreshData} />
          }
          </div>
        </DriverLayout>
      )}
      {tabletAndDesktop && (
        <DriverLayout sideBarDetails={navData}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              padding: '30px',
            }}
          >
            {barcode == "scanning" ?
            <ScanBarcode 
            setBarcode={setBarcode}
            setAcceptDetails={setAcceptDetails}
            barcode={barcode}
            />
            :
            <>
              <ViewLoadboard />
              <div
                style={{
                  marginTop: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  border: '1px solid rgba(231, 231, 231, 1)',
                  borderRadius: '4px',
                  padding: '20px',
                }}
              >
                <DriverContentDesktop
                  address1="21 Alex Ekwueme Way, Jabii"
                  address2="Kaduna Name City"
                  date1="14 Jul 2022"
                  date2="16 Jul 2022"
                  amount="₦ 999"
                  distance="12 km"
                  description="Package description "
                  setDriverDetailsModal={setDriverDetailsModal}
                  refreshData={refreshData}
                />
                <DriverContentDesktop
                  address1="21 Alex Ekwueme Way, Jabi"
                  address2="Kaduna Name City"
                  date1="14 Jul 2022"
                  date2="16 Jul 2022"
                  amount="₦ 999"
                  distance="12 km"
                  description="Package description "
                  setDriverDetailsModal={setDriverDetailsModal}
                  refreshData={refreshData}
                />
                <DriverContentDesktop
                  address1="21 Alex Ekwueme Way, Jaabi"
                  address2="Kaduna Name City"
                  date1="14 Jul 2022"
                  date2="16 Jul 2022"
                  amount="₦ 999"
                  distance="12 km"
                  description="Package description "
                  setDriverDetailsModal={setDriverDetailsModal}
                  refreshData={refreshData}
                />
                <DriverContentDesktop
                  address1="21 Alex Ekwueme Way1, Jaabi"
                  address2="Kaduna Name City"
                  date1="14 Jul 2022"
                  date2="16 Jul 2022"
                  amount="₦ 999"
                  distance="12 km"
                  description="Package description"
                  isRefresh={true}
                  extraAmount="+ ₦ 35"
                  bulk="BULK"
                  setDriverDetailsModal={setDriverDetailsModal}
                  refreshData={refreshData}
                />
                <DriverContentDesktop
                  address1="21 Alex Ekwueme Way11, Jaabi"
                  address2="Kaduna Name City"
                  date1="14 Jul 2022"
                  date2="16 Jul 2022"
                  amount="₦ 999"
                  distance="12 km"
                  description="Package description"
                  isInfo={true}
                  extraAmount="+ ₦ 32"
                  bulk="BULK"
                  setDriverDetailsModal={setDriverDetailsModal}
                  refreshData={refreshData}
                />
              </div>
            </>
            }
          </div>
        </DriverLayout>
      )}
      <DriverDetailsModal
        driverDetailsModal={driverDetailsModal}
        setDriverDetailsModal={setDriverDetailsModal}
        setReview={setReview}
        issued={issued}
        deliveryPic={deliveryPic}
        isdeliveryPic={isdeliveryPic}
      />
      <DriverReviewModal
        review={review}
        setReview={setReview}
        setAcceptDetails={setAcceptDetails}
        setPrintInvoice={setPrintInvoice}
      />
      <TakePicModal 
        takePic={takePic}
        setDriverDetailsModal={setDriverDetailsModal}
        setTakePic={setTakePic}
        setCamera={setCamera}
        setIssued={setIssued}
      />
      <AcceptDetailsModal
        acceptDetails={acceptDetails}
        setAcceptDetails={setAcceptDetails}
        setBarcode={setBarcode}
        setTakePic={setTakePic}
        barcode={barcode}
      />
      {camera &&
      <Camera 
        camera={camera}
        setCamera={setCamera}
        setTakePic={setTakePic}
        setIssued={setIssued}
        setPic={setDeliveryPic}
        setIsPic={setIsDeliveryPic}
        setDriverDetailsModal={setDriverDetailsModal}
      />
      }
      <DriverInvoiceModal
        printInvoice={printInvoice}
        setPrintInvoice={setPrintInvoice}
      />
    </>
  );
}

export async function getServerSideProps(context){
  // const res = await fetch('https://.../posts')
// const posts = await res.json()
// console.log(context)
context.res.setHeader(
  'Cache-Control',
  'must-revalidate, public, max-age=31536000'
)

return {
  props: {
      params: context.params
  },
}
}
