import Image from 'next/image';
import { Form } from 'react-bootstrap';

export default function AgentSidebarContent(props) {
  return (
    <>
      <div
        onClick={props.handleClick}
        style={
          props.home || props.orders || props.wallet || props.settings
            ? {
                display: 'flex',
                gap: '10px',
                marginBottom: '20px',
                borderLeft: '2px solid white',
                paddingLeft: '10px',
                marginLeft: '-10px',
              }
            : {
                display: 'flex',
                gap: '10px',
                marginBottom: '20px',
              }
        }
      >
        <Image
          style={{
            cursor: 'pointer',
          }}
          src={props.imgSrc}
          width={props.imgWidth}
          height={props.imgHeight}
          alt="home"
        />
        <Form.Label
          style={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '14px',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          {props.caption}
        </Form.Label>
      </div>
    </>
  );
}
