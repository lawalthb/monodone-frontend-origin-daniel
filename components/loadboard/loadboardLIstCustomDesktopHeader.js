import { Form } from 'react-bootstrap';

export default function LoadboardListCustomDesktopHeader(props) {
  return (
    <>
      <Form.Label
        style={
          props.isContent
            ? {
                fontSize: '12px',
                fontWeight: 400,
                color: 'rgba(38, 38, 38, 1)',
                textAlign: 'left',
                marginBottom: props.marginBottom,
                marginLeft: props.marginLeft,
                marginRight: props.marginRight,
              }
            : {
                fontSize: '12px',
                fontWeight: 500,
                color: 'rgba(38, 38, 38, 1)',
                textAlign: 'left',
                marginBottom: props.marginBottom,
                marginLeft: props.marginLeft,
                marginRight: props.marginRight,
              }
        }
      >
        {props.caption}
      </Form.Label>
    </>
  );
}
