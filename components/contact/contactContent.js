import Image from 'next/image';
import Media from '@/utils/media';
import { Form } from 'react-bootstrap';

export default function ContactContent(props) {
  const { mobile } = Media();
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={
            mobile
              ? {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '50%',
                  border: '1px solid rgba(21, 21, 21, 0.8)',
                  padding: '5px',
                  width: '30px',
                  height: '30px',
                  flexDirection: 'column',
                }
              : {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '50%',
                  border: '1px solid rgba(21, 21, 21, 0.8)',
                  padding: '4px',
                  width: '56px',
                  height: '56px',
                  flexDirection: 'column',
                }
          }
        >
          <Image
            style={
              mobile
                ? {
                    maxWidth: '100%',
                    width: '23px',
                  }
                : {
                    maxWidth: '100%',
                    width: '32px',
                  }
            }
            src={props.imgSrc}
            width={mobile ? '23' : '32'}
            height="26"
            alt="arrow"
          />
        </div>
        <Form.Label
          style={
            mobile
              ? {
                  color: '#009027',
                  fontSize: '10px',
                  fontWeight: 600,
                  marginTop: '10px',
                }
              : {
                  color: '#009027',
                  fontSize: '13px',
                  fontWeight: 600,
                  marginTop: '10px',
                }
          }
        >
          {props.caption}
        </Form.Label>
      </div>
    </>
  );
}
