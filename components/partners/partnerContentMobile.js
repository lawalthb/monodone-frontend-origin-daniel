import Image from 'next/image';
import { Form } from 'react-bootstrap';

export default function PartnerContentMobile(props) {
  return (
    <>
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
            width: '45',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            background: 'white',
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
          <Form.Label
            style={{
              fontSize: '14px',
              marginTop: '-10px',
              color: 'black',
            }}
          >
            {props.caption1}
          </Form.Label>
        </div>
        <div
          style={{
            width: '45',
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
            src={props.imgSrc2}
            width="150"
            height="96"
            alt="partner"
          />
          <Form.Label
            style={{
              fontSize: '14px',
              marginTop: '-10px',
              color: 'black',
            }}
          >
            {props.caption2}
          </Form.Label>
        </div>
      </div>
    </>
  );
}
