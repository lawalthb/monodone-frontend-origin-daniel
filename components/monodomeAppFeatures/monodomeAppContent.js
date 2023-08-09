import Image from 'next/image';
import { Form } from 'react-bootstrap';

export default function MonodomeAppContent(props) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          marginTop: '20px',
        }}
      >
        <Image
          style={{
            maxWidth: '100%',
            width: '40px',
            cursor: 'pointer',
          }}
          src={props.imgSrc}
          width="40"
          height="40"
          alt="icon"
        />
        <Form.Label
          style={{
            color: '#d0d0d0',
            fontSize: '12px',
            marginTop: '9px',
            marginLeft: '10px',
          }}
        >
          {props.caption}
        </Form.Label>
      </div>
    </>
  );
}
