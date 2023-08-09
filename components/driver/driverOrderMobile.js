import { Button } from 'react-bootstrap';
import DriverContentDesktop from './driverContentDesktop';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function DriverOrderMobile(props) {
  const router = useRouter();
  return (
    <>
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
        setDriverDetailsModal={props.setDriverDetailsModal}
        refreshData={props.refreshData}
        setBid={props.setBid}
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
        setDriverDetailsModal={props.setDriverDetailsModal}
        refreshData={props.refreshData}
        setBid={props.setBid}
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
        setDriverDetailsModal={props.setDriverDetailsModal}
        refreshData={props.refreshData}
        setBid={props.setBid}
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
        setDriverDetailsModal={props.setDriverDetailsModal}
        refreshData={props.refreshData}
        setBid={props.setBid}
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
    </>
  );
}
