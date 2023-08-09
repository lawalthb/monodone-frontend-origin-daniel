import Image from 'next/image';
import { Form } from 'react-bootstrap';

export default function FaqContent(props) {
  return (
    <>
      <div
        onClick={() => props.handleClick()}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          padding: '10px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            cursor: 'pointer',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '20px',
              cursor: 'pointer',
            }}
          >
            <Image
              style={{
                maxWidth: '100%',
                width: '13px',
              }}
              src="/img/forwardarrows.png"
              width="13"
              height="11"
              alt="arrow"
            />
            <Form.Label
              style={{
                fontSize: '12px',
                color: '#414141',
                marginTop: '-3px',
              }}
            >
              {props.caption}
            </Form.Label>
          </div>
          <Image
            style={{
              maxWidth: '100%',
              width: '15px',
              cursor: 'pointer',
            }}
            src="/img/downwardarrow.png"
            width="15"
            height="14"
            alt="arrow"
          />
        </div>
        <div
          style={
            props.showFaqDetail
              ? {
                  display: 'block',
                  padding: '3px 20px 0px 30px',
                }
              : {
                  display: 'none',
                }
          }
        >
          {props.faqContent}
        </div>
        <hr
          style={{
            marginTop: '-0.6px',
          }}
        />
      </div>
    </>
  );
}
