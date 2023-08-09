import Image from 'next/image';
import Link from 'next/link';
import { Form } from 'react-bootstrap';

export default function DriverSidebarContent(props) {
  return (
    <>
      <div
        onClick={
          () => {
            props.handleSection(props.caption);
          }
        }
        style={
          props.section === props.caption
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
          <Link style={{ textDecoration: 'none', color: 'inherit'}} target={props.target ? props.target: ""} href={props.route}>{props.caption}</Link>
        </Form.Label>
      </div>
    </>
  );
}
