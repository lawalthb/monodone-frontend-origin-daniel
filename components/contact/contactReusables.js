import Image from 'next/image';
import { Form } from 'react-bootstrap';
import Media from '@/utils/media';
import styles from './contact.module.css';

export default function ContactReusables(props) {
  const { mobile, tabletAndDesktop } = Media();

  const letsTalk = (
    <Form.Label
      style={
        mobile
          ? {
              color: '#151515',
              fontWeight: 700,
              fontSize: '22px',
            }
          : {
              color: '#151515',
              fontWeight: 700,
              fontSize: '24px',
            }
      }
    >
      {"Let's Talk"}
    </Form.Label>
  );

  const yourConcern = (
    <p
      style={{
        fontSize: '12px',
        color: 'rgba(21, 21, 21, 0.8)',
        fontWeight: '400',
      }}
    >
      {
        'Send in your concerns, our support team will get back to you immediately!'
      }
    </p>
  );

  const connectWithUs = (
    <>
      <Form.Label
        style={
          mobile
            ? {
                color: 'rgba(21, 21, 21, 0.7)',
                fontWeight: 700,
                fontSize: '20px',
              }
            : {
                color: 'rgba(21, 21, 21, 0.7)',
                fontWeight: 700,
                fontSize: '24px',
              }
        }
      >
        {'Connect with Us'}
      </Form.Label>
      <p
        style={{
          fontSize: '12px',
          color: 'rgba(21, 21, 21, 0.8)',
          fontWeight: '400',
        }}
      >
        {
          'Follow us on our social media handles for more updates concerning monolog'
        }
      </p>
    </>
  );

  const socials = (
    <div
      style={{
        display: 'flex',
        gap: '12px',
      }}
    >
      <Image
        style={{
          cursor: 'pointer',
        }}
        src="/img/contactinstagram.png"
        width="26"
        height="26"
        alt="instagram"
      />
      <Image
        style={{
          marginTop: '7px',
          cursor: 'pointer',
        }}
        src="/img/contacttwitter.png"
        width="12"
        height="10"
        alt="twitter"
      />
      <Image
        style={{
          cursor: 'pointer',
        }}
        src="/img/contactfacebook.png"
        width="26"
        height="26"
        alt="facebook"
      />
      <Image
        style={{
          cursor: 'pointer',
        }}
        src="/img/contactlinkedin.png"
        width="26"
        height="26"
        alt="linkedin"
      />
    </div>
  );

  const callAndEmail = (
    <>
      <div
        className={styles.contactBg}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '324px',
          height: '240px',
          marginTop: '20px',
        }}
      >
        <Image
          style={{
            marginTop: '5px',
          }}
          src="/img/contactcall.png"
          width="40"
          height="40"
          alt="call"
        />
        <Form.Label
          style={
            mobile
              ? {
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '20px',
                  marginTop: '10px',
                }
              : {
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '27px',
                  marginTop: '10px',
                }
          }
        >
          {'Call Us'}
        </Form.Label>
        <Form.Label
          style={{
            color: 'white',
            fontWeight: 700,
            fontSize: '15px',
            marginTop: '10px',
            textAlign: 'center',
          }}
        >
          {'Telegram: +2348148710043'}
        </Form.Label>
      </div>
      <div
        className={styles.contactBg}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '324px',
          height: '240px',
          marginTop: '20px',
        }}
      >
        <Image
          style={{
            marginTop: '5px',
          }}
          src="/img/contactemail.png"
          width="40"
          height="40"
          alt="call"
        />
        <Form.Label
          style={
            mobile
              ? {
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '20px',
                  marginTop: '10px',
                }
              : {
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '27px',
                  marginTop: '10px',
                }
          }
        >
          {'Email Us'}
        </Form.Label>
        <Form.Label
          style={{
            color: 'white',
            fontWeight: 700,
            fontSize: '15px',
            marginTop: '10px',
            textAlign: 'center',
          }}
        >
          {'Email: info@monolog.com'}
        </Form.Label>
      </div>
    </>
  );
  return {
    letsTalk,
    yourConcern,
    connectWithUs,
    socials,
    callAndEmail,
  };
}
