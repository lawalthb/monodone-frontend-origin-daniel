import { Form } from 'react-bootstrap';

export default function AboutSubHeading(props) {
  return (
    <>
      <Form.Label
        onClick={() => props.handleClick()}
        style={
          props.clicked
            ? {
                fontSize: '12px',
                fontWeight: 600,
                color: '#414141',
                cursor: 'pointer',
                paddinBottom: '10px',
                borderBottom: '2px solid #009027',
              }
            : {
                fontSize: '12px',
                fontWeight: 600,
                color: '#414141',
                cursor: 'pointer',
              }
        }
      >
        {props.caption}
      </Form.Label>
    </>
  );
}
