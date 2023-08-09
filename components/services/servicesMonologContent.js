import Image from 'next/image';
import Link from 'next/link';
import styles from '../../components/services/service.module.css';
import { Form } from 'react-bootstrap';

export default function ServicesMonologContent(props) {
  return (
    <>
      <Link href={`/services/${props.id}`} className={styles.serviceLink}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: '280px',
            height: '296px',
            padding: '40px 16px 40px 16px',
            background: '#FFFFFF',
            border: '1px solid #E7E7E7',
            cursor: 'pointer',
            gap: '10px',
          }}
        >
          <Image
            style={{
              maxWidth: '100%',
              width: `${props.imgWidth}px`,
            }}
            src={props.imgSrc}
            width={props.imgWidth}
            height={props.imgHeight}
            alt="icon"
          />
          <Form.Label
            style={{
              fontSize: '14px',
              color: 'black',
              fontWeight: 600,
              textAlign: 'center',
            }}
          >
            {props.caption}
          </Form.Label>
          <Form.Label
            style={{
              fontSize: '12px',
              color: 'black',
              fontWeight: 400,
              textAlign: 'center',
            }}
          >
            {props.desc}
          </Form.Label>
        </div>
      </Link>
    </>
  );
}
