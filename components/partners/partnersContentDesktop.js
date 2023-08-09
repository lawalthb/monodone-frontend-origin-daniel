import Image from 'next/image';
import { Form } from 'react-bootstrap';

export default function PartnersContentDesktop(props) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            width: '150px',
            background: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Image
            style={{
              maxWidth: '100%',
              width: '150px',
            }}
            src={props.imgSrc1}
            width="150"
            height="96"
            alt="partner"
          />
        </div>
        <div
          style={{
            width: '150px',
            background: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '40px',
            marginTop: '5px',
          }}
        >
          <Form.Label
            style={{
              fontSize: '14px',
              color: 'black',
            }}
          >
            {props.caption1}
          </Form.Label>
        </div>
      </div>
    </>
  );
}
