import Image from 'next/image';
import { Form } from 'react-bootstrap';
import MonodomeAppContent from './monodomeAppContent';

export default function MonodomeAppFeaturesMobileContent(props) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Form.Label
          style={{
            fontSize: '16px',
            color: 'white',
            fontWeight: 700,
          }}
        >
          {props.allAppFeatures[props.index].caption1}
        </Form.Label>
        <Form.Label
          style={{
            fontSize: '16px',
            color: '#7CC427',
            fontWeight: 700,
          }}
        >
          {props.allAppFeatures[props.index].caption2}
        </Form.Label>
        <p
          style={{
            color: '#d0d0d0',
            fontSize: '12px',
            marginTop: '10px',
          }}
        >
          {props.allAppFeatures[props.index].desc1}{' '}
          {props.allAppFeatures[props.index].desc2}
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <MonodomeAppContent
            imgSrc={props.allAppFeatures[props.index].imgSrc3}
            caption="Notifications"
          />
          <MonodomeAppContent
            imgSrc={props.allAppFeatures[props.index].imgSrc6}
            caption="Bidding"
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <MonodomeAppContent
            imgSrc={props.allAppFeatures[props.index].imgSrc5}
            caption="Scheduling"
          />
          <MonodomeAppContent
            imgSrc={props.allAppFeatures[props.index].imgSrc4}
            caption="GPS Tracking"
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <MonodomeAppContent
            imgSrc={props.allAppFeatures[props.index].imgSrc7}
            caption="Rating"
          />
          <MonodomeAppContent
            imgSrc={props.allAppFeatures[props.index].imgSrc8}
            caption="Load board"
          />
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: '50px',
          }}
        >
          <Image
            style={{
              maxWidth: '100%',
              width: '110px',
              cursor: 'pointer',
            }}
            src={props.allAppFeatures[props.index].imgSrc9}
            width="110"
            height="32"
            alt="store"
          />
          <Image
            style={{
              maxWidth: '100%',
              width: '110px',
              cursor: 'pointer',
              marginLeft: '40px',
            }}
            src={props.allAppFeatures[props.index].imgSrc10}
            width="110"
            height="32"
            alt="store"
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Image
            onClick={() => props.handlePrevious()}
            style={{
              maxWidth: '100%',
              width: '12px',
              marginTop: '30px',
              cursor: 'pointer',
            }}
            src="/img/backwardarrow.png"
            width="12"
            height="24"
            alt="arrow"
          />
          <Image
            onClick={() => props.handleNext()}
            style={{
              maxWidth: '100%',
              width: '12px',
              marginTop: '30px',
              cursor: 'pointer',
            }}
            src="/img/forwardarrow.png"
            width="12"
            height="24"
            alt="arrow"
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '10px',
          }}
        >
          <Image
            style={{
              maxWidth: '100%',
              width: '152px',
              cursor: 'pointer',
            }}
            src={props.allAppFeatures[props.index].imgSrc1}
            width="152"
            height="250"
            alt="phone"
          />
          <Image
            style={{
              maxWidth: '100%',
              width: '152px',
              cursor: 'pointer',
              marginLeft: '-40px',
              marginTop: '40px',
            }}
            src={props.allAppFeatures[props.index].imgSrc2}
            width="152"
            height="250"
            alt="phone"
          />
        </div>
      </div>
    </>
  );
}
