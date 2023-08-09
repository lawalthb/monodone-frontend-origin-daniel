import { Form } from 'react-bootstrap';

export default function AboutHeading(props) {
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
          About Us
        </Form.Label>
      </div>
    </>
  );
}
