import Image from 'next/image';
import { Button, Form } from 'react-bootstrap';

export default function LoadboardContentDetailsAction(props) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Button
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '45%',
            height: '40px',
            padding: '7px',
            border: '1px solid rgba(124, 196, 39, 1)',
            background: 'transparent',
            gap: '10px',
          }}
        >
          <Form.Label
            style={{
              fontSize: '12px',
              fontWeight: '500',
              color: 'black',
              marginTop: '5px',
            }}
          >
            Make a bid
          </Form.Label>
          <Image
            src="/img/loadborddetailarrow.png"
            width="6"
            height="10"
            alt="arrow"
          />
        </Button>
        <Button
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '45%',
            height: '40px',
            padding: '7px',
            border: 'none',
            background: 'rgba(124, 196, 39, 1)',
          }}
        >
          <Form.Label
            style={{
              fontSize: '12px',
              fontWeight: '500',
              color: 'white',
              marginTop: '5px',
            }}
          >
            Accept Order
          </Form.Label>
        </Button>
      </div>
    </>
  );
}
