import Image from 'next/image';
import { Button, Form } from 'react-bootstrap';

export default function RoutePlanReusable(props) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          marginTop: props.marginTop,
        }}
      >
        <Form.Label
          style={{
            color: 'black',
            fontSize: '16px',
            fontWeight: 600,
          }}
        >
          {props.address}
        </Form.Label>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: '10px',
          }}
        >
          <Form.Label
            style={{
              color: 'rgba(128, 128, 128, 1)',
              fontSize: '12px',
              fontWeight: 400,
            }}
          >
            {props.date}
          </Form.Label>
          <Image
            onClick={() => props.setSaveRoutePlan(true)}
            style={{
              cursor: 'pointer',
            }}
            src="/img/driverorderwaiting.png"
            width="24"
            height="12"
            alt="arrow"
          />
        </div>
        {props.buildRoute && (
          <Button
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'transparent',
              borderRadius: '6px',
              height: '36px',
              width: '134px',
              color: 'black',
              border: '1px solid #7CC427',
              gap: '6px',
              fontSize: '12px',
            }}
          >
            Build a route
            <Image
              src="/img/driverarrownext.png"
              width="5"
              height="8"
              alt="arrow"
            />
          </Button>
        )}
        <hr
          style={{
            marginTop: '10px',
          }}
        />
      </div>
    </>
  );
}
