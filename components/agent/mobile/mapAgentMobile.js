import Image from 'next/image';
import { Button, Form } from 'react-bootstrap';

export default function MapAgentMobile(props) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
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
              display: 'flex',
              maxWidth: '100%',
              width: '375px',
              objectFit: 'cover',
            }}
            src="/img/agent-location.png"
            width="375"
            height="487"
            alt="location"
          />
        </div>
        <Form.Label
          style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#3A3A3A',
            marginTop: '20px',
          }}
        >
          Confirm address
        </Form.Label>
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
            props.setMap(false);
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
            height: '56px',
          }}
        >
          <Form.Label
            style={{
              color: 'white',
              fontSize: '15px',
              marginLeft: '5px',
              fontWeight: '600',
              marginTop: '2px',
              textTransform: 'uppercase',
            }}
          >
            Confirm
          </Form.Label>
        </Button>
      </div>
    </>
  );
}
