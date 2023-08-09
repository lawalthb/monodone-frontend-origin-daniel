import { Form } from 'react-bootstrap';

export default function Heading(props) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <Form.Label
          style={{
            fontSize: '17px',
            fontWeight: 600,
            color: 'rgba(48, 49, 51, 1)',
            textAlign: 'center',
          }}
        >
          {props.caption1}
        </Form.Label>
        <p
          style={{
            fontSize: '12px',
            color: 'rgba(38, 38, 38, 0.8)',
            textAlign: 'center',
          }}
        >
          {props.caption2}
        </p>
      </div>
    </>
  );
}
