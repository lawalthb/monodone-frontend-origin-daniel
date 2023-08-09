import Image from 'next/image';
import Media from '@/utils/media';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import DriverLayout from '@/components/driver/driverLayout/driverLayout';
import DriverOrderMobile from '@/components/driver/driverOrderMobile';
import ViewLoadboard from '@/components/driver/viewLoadboard';
import DriverContentDesktop from '@/components/driver/driverContentDesktop';
import DriverDetailsModal from '@/components/driver/driverDetailsModal';
import DriverReviewModal from '@/components/driver/driverReviewModal';
import AcceptDetailsModal from '@/components/driver/acceptDetailsModal';
import DriverInvoiceModal from '@/components/driver/driverInvoiceModal';
import ScanBarcode from '@/components/driver/scanBarcode';
import TakePicModal from '@/components/driver/takePicModal';
import Camera from '@/components/driver/camera';
import PlaceBid from '@/components/driver/placeBid';

export default function Orders(props) {
  const router = useRouter();
  const [driverDetailsModal, setDriverDetailsModal] = useState(false);
  const [review, setReview] = useState(false);
  const [acceptDetails, setAcceptDetails] = useState(false);
  const [printInvoice, setPrintInvoice] = useState(false);
  const [barcode, setBarcode] = useState("");
  const { mobile, tabletAndDesktop } = Media();
  const [takePic, setTakePic] = useState(false);
  const [isdeliveryPic, setIsDeliveryPic] = useState(false);
  const [deliveryPic, setDeliveryPic] = useState('');
  const [issued, setIssued] = useState(false);
  const [camera, setCamera] = useState(false);
  const [bid, setBid] = useState(false);

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
      {mobile && (
        <DriverLayout sideBarDetails={navData} title="Order">
          <div
            style={{
              marginTop: '72px',
              paddingBottom: '3rem',
            }}
          >
            {barcode == "scanning" ?
              <ScanBarcode
                setBarcode={setBarcode}
                setAcceptDetails={setAcceptDetails}
                barcode={barcode}
              />
              :
              <DriverOrderMobile setBid={setBid} setDriverDetailsModal={setDriverDetailsModal} refreshData={refreshData}/>
            }
          </div>
        </DriverLayout>
      )}
      {tabletAndDesktop && (
        <DriverLayout sideBarDetails={navData} title="Order">
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
                  description="Package description"
                  imgSrcStatus="/img/Ellipse-dot.png"
                  imgSrcStatus1="/img/driverorderwaiting.png"
                  status="Waiting for driver"
                  orders={true}
                  setDriverDetailsModal={setDriverDetailsModal}
                  refreshData={refreshData}
                  setBid={setBid}
                />
                <hr />
                <DriverContentDesktop
                  address1="21 Alex Ekwueme Way, Jabii"
                  address2="Kaduna Name City"
                  date1="14 Jul 2022"
                  date2="16 Jul 2022"
                  amount="₦ 999"
                  distance="12 km"
                  description="Package description"
                  imgSrcStatus="/img/Ellipse-green.png"
                  imgSrcStatus1="/img/driverorderway.png"
                  status="On the way"
                  orders={true}
                  setDriverDetailsModal={setDriverDetailsModal}
                  refreshData={refreshData}
                  setBid={setBid}
                />
                <hr />
                <DriverContentDesktop
                  address1="21 Alex Ekwueme Way, Jabii"
                  address2="Kaduna Name City"
                  date1="14 Jul 2022"
                  date2="16 Jul 2022"
                  amount="₦ 999"
                  distance="12 km"
                  description="Package description"
                  imgSrcStatus="/img/Ellipse-dot.png"
                  imgSrcStatus1="/img/driverorderwaiting.png"
                  status="Waiting for driver"
                  bulk="BULK"
                  orders={true}
                  isBulk={true}
                  setDriverDetailsModal={setDriverDetailsModal}
                  refreshData={refreshData}
                  setBid={setBid}
                />
                <DriverContentDesktop
                  address1="21 Alex Ekwueme Way, Jabii"
                  address2="Kaduna Name City"
                  date1="14 Jul 2022"
                  date2="16 Jul 2022"
                  amount="₦ 999"
                  distance="12 km"
                  description="Package description"
                  imgSrcStatus="/img/Ellipse-green.png"
                  imgSrcStatus1="/img/driverorderway.png"
                  status="On the way"
                  orders={true}
                  setDriverDetailsModal={setDriverDetailsModal}
                  refreshData={refreshData}
                  setBid={setBid}
                />
                <hr />
                <Button
                  onClick={() => router.push('/driver/orders/routeplan')}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    border: '1px solid #7CC427',
                    height: '40px',
                    background: 'transparent',
                    color: 'rgba(21, 21, 21, 1)',
                  }}
                >
                  <Image
                    style={{
                      cursor: 'pointer',
                      marginTop: '6px',
                    }}
                    src="/img/driverroute.png"
                    width="20"
                    height="12"
                    alt="info"
                  />
                  Route plan
                  <div></div>
                </Button>
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
      <PlaceBid 
        bid={bid}
        setBid={setBid}
      />
    </>
  );
}
