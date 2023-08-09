import Image from 'next/image';
import { Form } from 'react-bootstrap';

export default function LoginSignupCommon(props) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <Image src="/img/success-logo.png" width="47" height="34" alt="logo" />
      <Form.Label
        style={{
          fontSize: '18px',
          textAlign: 'center',
          color: 'black',
          fontWeight: 500,
        }}
      >
        {props.caption1}
      </Form.Label>
      <Form.Label
        style={{
          fontSize: '11px',
          textAlign: 'center',
          color: 'black',
          fontWeight: 400,
        }}
      >
        {props.caption2}
      </Form.Label>
    </div>
  );
}
