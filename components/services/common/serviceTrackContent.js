import { Form } from 'react-bootstrap';

export default function ServiceTrackContent(props) {
  return (
    <>
      <Form.Label
        style={{
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          // textAlign: 'center',
          fontSize: '14px',
          color: 'rgba(128, 128, 128, 1)',
          letterSpacing: '0.02em',
          display: 'flex',
          fontWeight: 500,
          marginTop: props.marginTop,
        }}
      >
        {props.caption}
      </Form.Label>
    </>
  );
}
