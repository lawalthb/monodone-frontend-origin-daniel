import { useRouter } from 'next/router';
import { Form } from 'react-bootstrap';
import styles from './service.module.css';
import Image from 'next/image';

export default function ServiceFurtherDetailsHeaderContent(props) {
  const router = useRouter();
  return (
    <>
      {props.caption === 'Services' ? (
        <div
          style={{
            display: 'flex',
            gap: '5px',
          }}
        >
          <Form.Label
            onClick={
              props.caption === 'Home'
                ? () => router.push('/')
                : props.caption === 'About Us'
                ? () => router.push('/about')
                : props.caption === 'Services'
                ? () => router.push('/services')
                : props.caption === 'Blog'
                ? () => router.push('/blog')
                : props.caption === 'Contact Us'
                ? () => router.push('/contact')
                : undefined
            }
            style={
              props.active
                ? {
                    fontSize: '13px',
                    color: 'rgba(21, 21, 21, 0.8)',
                    fontWeight: 500,
                    marginTop: '7px',
                    cursor: 'pointer',
                    padding: 0,
                    borderBottom: '1px solid black',
                  }
                : {
                    fontSize: '13px',
                    color: 'rgba(21, 21, 21, 0.8)',
                    fontWeight: 500,
                    marginTop: '7px',
                    cursor: 'pointer',
                  }
            }
          >
            {props.caption}
          </Form.Label>
          <Image
            style={{
              maxWidth: '100%',
              width: '11px',
              marginTop: '15px',
            }}
            src="/img/servicearrowdown.png"
            width="11"
            height="6"
            alt="logo"
          />
        </div>
      ) : (
        <Form.Label
          onClick={
            props.caption === 'Home'
              ? () => router.push('/')
              : props.caption === 'About Us'
              ? () => router.push('/about')
              : props.caption === 'Services'
              ? () => router.push('/services')
              : props.caption === 'Blog'
              ? () => router.push('/blog')
              : props.caption === 'Contact Us'
              ? () => router.push('/contact')
              : undefined
          }
          style={
            props.active
              ? {
                  fontSize: '13px',
                  color: 'rgba(21, 21, 21, 0.8)',
                  fontWeight: 500,
                  marginTop: '7px',
                  cursor: 'pointer',
                  borderBottom: '1px solid black',
                }
              : {
                  fontSize: '13px',
                  color: 'rgba(21, 21, 21, 0.8)',
                  fontWeight: 500,
                  marginTop: '7px',
                  cursor: 'pointer',
                }
          }
        >
          {props.caption}
        </Form.Label>
      )}
    </>
  );
}
