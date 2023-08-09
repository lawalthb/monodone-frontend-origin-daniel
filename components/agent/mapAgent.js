import Image from 'next/image';
import { Button, Form } from 'react-bootstrap';
import ParcelOptions from './parcelOptions';

export default function MapAgent(props) {
  return (
    <>
      {props.parcelOption ? (
        <ParcelOptions
          setParcelOption={props.setParcelOption}
          isPackage={props.isPackage}
          setIsPackage={props.setIsPackage}
          isDocument={props.isDocument}
          setIsDocument={props.setIsDocument}
          handleIsPackage={props.handleIsPackage}
          handleIsDocument={props.handleIsDocument}
          setParcelData={props.setParcelData}
          setOrders={props.setOrders}
        />
      ) : (
        <div
          style={{
            width: '100%',
            border: '1px solid #E7E7E7',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              style={{
                display: 'flex',
                maxWidth: '100%',
                width: '816px',
              }}
              src="/img/agent-location.png"
              width="816"
              height="487"
              alt="location"
            />
          </div>
          <div
            style={{
              marginTop: '20px',
            }}
          >
            <Form.Label
              style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#3A3A3A',
              }}
            >
              Confirm address
            </Form.Label>
            <hr />
          </div>
          <Form.Label
            style={{
              fontSize: '12px',
            }}
          >
            Delivery From
          </Form.Label>
          <Form.Label
            style={{
              fontSize: '14px',
              fontWeight: '500',
              color: '#3A3A3A',
            }}
          >
            21 Alex Ekwueme Way, Jaabi 900108, Abuja
          </Form.Label>
          <hr />
          <Button
            onClick={() => {
              props.setParcelOption(true);
            }}
            style={{
              background: '#00902F',
              padding: '5px 10px 2px 10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              border: 'none',
              borderRadius: '6px',
            }}
          >
            <Form.Label
              style={{
                color: 'white',
                fontSize: '12px',
                marginLeft: '5px',
                fontWeight: '600',
                marginTop: '2px',
              }}
            >
              Confirm
            </Form.Label>
          </Button>
        </div>
      )}
    </>
  );
}
