import Image from 'next/image';
import { Form } from 'react-bootstrap';
import styles from './service.module.css';

export default function OurServiceSideContent(props) {
  return (
    <>
      <div
        className={styles.monologSidebar}
        onClick={props.handleClick}
        style={
          props.isClicked
            ? {
                display: 'flex',
                gap: '10px',
                background: 'rgba(255, 255, 255, 0.2)',
                padding: '8px',
                borderRadius: '6px',
                marginBottom: '7px',
                cursor: 'pointer',
              }
            : {
                display: 'flex',
                gap: '10px',
                padding: '8px',
                borderRadius: '6px',
                marginBottom: '7px',
                cursor: 'pointer',
              }
        }
      >
        <Image
          style={{
            maxWidth: '100%',
            width: '16px',
            marginLeft: '5px',
            marginTop: '4px',
            cursor: 'pointer',
          }}
          src={props.imgSrc}
          width="16"
          height="15"
          alt="icon"
        />
        <Form.Label
          style={{
            color: 'white',
            fontSize: '12px',
            marginLeft: '4px',
            marginTop: '3px',
            cursor: 'pointer',
          }}
        >
          {props.caption}
        </Form.Label>
      </div>
    </>
  );
}
