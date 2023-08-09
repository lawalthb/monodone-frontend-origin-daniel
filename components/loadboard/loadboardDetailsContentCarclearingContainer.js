import Media from '@/utils/media';
import { Button, Form } from 'react-bootstrap';
import LoadboardDetailsSideContent from './loadboardDetailsSideContent';
import Image from 'next/image';
import LoadboardContentDetailsAction from './loadboardContentDetailsAction';

export default function LoadboardDetailsContentCarclearingContainer(props) {
  const { mobile, tabletAndDesktop } = Media();
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          padding: mobile ? '20px' : '30px',
        }}
      >
        <Form.Label
          style={{
            fontSize: '16px',
            color: 'black',
            fontWeight: 500,
          }}
        >
          {props.specificLoadboardData?.name}
        </Form.Label>
        <p
          style={{
            fontSize: '12px',
            textAlign: 'justify',
          }}
        >
          {props.specificLoadboardData?.description}
        </p>
        {mobile ? (
          <>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <Image
                style={{
                  width: '343',
                  maxWidth: '100%',
                }}
                src="/img/loadboardmap.png"
                width="343"
                height="154"
                alt="map"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginTop: '30px',
              }}
            >
              <LoadboardDetailsSideContent
                caption="Car Type"
                content={props.specificLoadboardData?.carType}
              />
              <LoadboardDetailsSideContent
                caption="Plate Number"
                content={props.specificLoadboardData?.plateNumber}
              />
              <LoadboardDetailsSideContent
                caption="Car Model"
                content={props.specificLoadboardData?.carModel}
              />
              <LoadboardDetailsSideContent
                caption="Car Year"
                content={props.specificLoadboardData?.carYear}
              />
              <LoadboardDetailsSideContent
                caption="Car Value"
                content={props.specificLoadboardData?.carValue}
              />
              <LoadboardDetailsSideContent
                caption="Location"
                content={props.specificLoadboardData?.location}
              />
              <LoadboardDetailsSideContent
                caption="Estimated Cost"
                content={props.specificLoadboardData?.estimatedCost}
              />
              <LoadboardDetailsSideContent
                caption="Customer’s Bid"
                content={props.specificLoadboardData?.customersBid}
              />
              <LoadboardDetailsSideContent
                caption="Amount Paid"
                content={props.specificLoadboardData?.amountPaid}
              />
              <LoadboardContentDetailsAction />
            </div>
          </>
        ) : (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: '10px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '30%',
                gap: '20px',
              }}
            >
              <LoadboardDetailsSideContent
                caption="Car Type"
                content={props.specificLoadboardData?.carType}
              />
              <LoadboardDetailsSideContent
                caption="Plate Number"
                content={props.specificLoadboardData?.plateNumber}
              />
              <LoadboardDetailsSideContent
                caption="Car Model"
                content={props.specificLoadboardData?.carModel}
              />
              <LoadboardDetailsSideContent
                caption="Car Year"
                content={props.specificLoadboardData?.carYear}
              />
              <LoadboardDetailsSideContent
                caption="Car Value"
                content={props.specificLoadboardData?.carValue}
              />
              <LoadboardDetailsSideContent
                caption="Location"
                content={props.specificLoadboardData?.location}
              />
              <LoadboardDetailsSideContent
                caption="Estimated Cost"
                content={props.specificLoadboardData?.estimatedCost}
              />
              <LoadboardDetailsSideContent
                caption="Customer’s Bid"
                content={props.specificLoadboardData?.customersBid}
              />
              <LoadboardDetailsSideContent
                caption="Amount Paid"
                content={props.specificLoadboardData?.amountPaid}
              />
              <LoadboardContentDetailsAction />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '58%',
              }}
            >
              <Image
                style={{
                  width: '722',
                  maxWidth: '100%',
                }}
                src="/img/loadboardmap.png"
                width="722"
                height="438"
                alt="map"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
