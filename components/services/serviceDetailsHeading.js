import { Form } from 'react-bootstrap';

export default function ServiceDetailsHeading(props) {
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
          {props.caption}
        </Form.Label>
      </div>
    </>
  );
}
