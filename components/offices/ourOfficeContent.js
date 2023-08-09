import { Form } from 'react-bootstrap';

export default function OurOfficeContent(props) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Form.Label
          style={{
            color: '#151515',
            fontSize: '13px',
            fontWeight: 600,
          }}
        >
          {props.caption}
        </Form.Label>
        <p
          style={{
            color: '##151515',
            fontSize: '10px',
            textAlign: 'center',
          }}
        >
          {props.desc1} <br /> {props.desc2}
        </p>
        <Form.Label
          style={{
            color: '#151515',
            fontSize: '11px',
            fontWeight: 500,
          }}
        >
          {props.phone}
        </Form.Label>
      </div>
    </>
  );
}
