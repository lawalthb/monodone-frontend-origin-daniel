import Media from '@/utils/media';
import Image from 'next/image';
import { Form } from 'react-bootstrap';

export default function NavContent(props) {
  const { desktopNav, mobileNav } = Media();
  return (
    <div
      style={{
        display: 'flex',
        gap: '3px',
      }}
    >
      <Form.Label
        onClick={props.handleClick}
        style={
          mobileNav
            ? {
                fontSize: '14px',
                fontWeight: '500',
                color: 'white',
                marginTop: '10px',
                cursor: 'pointer',
                fontFamily: 'Poppins',
                fontStyle: 'normal',
              }
            : {
                fontSize: '14px',
                color: 'white',
                marginTop: '10px',
                cursor: 'pointer',
                fontFamily: 'Poppins',
                fontStyle: 'normal',
              }
        }
      >
        {props.caption}
      </Form.Label>
      {props.hasPullDown && (
        <Image
          style={{
            maxWidth: '100%',
            width: '13px',
            marginTop: '12px',
            cursor: 'pointer',
          }}
          src={props.imgSrc}
          width="13"
          height="13"
          alt="arrow"
        />
      )}
    </div>
  );
}
