import Image from 'next/image';
import { Form } from 'react-bootstrap';

export default function FooterContent(props) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: '10px',
        }}
      >
        <Image
          style={{
            maxWidth: '100%',
            width: `${props.imgWidth}px`,
            marginTop: props.marginTop,
          }}
          src={props.imgSrc}
          width={props.imgWidth}
          height={props.imgHeight}
          alt="icon"
        />
        <Form.Label
          style={{
            fontSize: '11px',
            color: 'white',
            fontWeight: 400,
          }}
        >
          {props.caption}
        </Form.Label>
      </div>
    </>
  );
}
