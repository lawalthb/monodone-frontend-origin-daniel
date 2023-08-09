import { Form } from 'react-bootstrap';

export default function ContactHeading(props) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '70px',
        }}
      >
        <Form.Label
          style={{
            color: 'white',
            fontWeight: 700,
            fontSize: '22px',
          }}
        >
          Contact Us
        </Form.Label>
        <Form.Label
          style={{
            color: 'white',
            fontWeight: 500,
            fontSize: '12px',
          }}
        >
          For enquiries about Monolog
        </Form.Label>
      </div>
    </>
  );
}
