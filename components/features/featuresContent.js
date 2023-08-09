import Media from '@/utils/media';
import Image from 'next/image';
import { Form } from 'react-bootstrap';

export default function FeaturesContent(props) {
  const { mobile } = Media();
  return (
    <>
      {mobile ? (
        <>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Image
              style={{
                maxWidth: '100%',
                width: '270px',
              }}
              src={props.imgSrc}
              width="270"
              height="340"
              alt="pic"
            />
            <Form.Label
              style={{
                color: 'black',
                fontSize: '16px',
                fontWeight: 700,
                marginTop: '20px',
              }}
            >
              {props.caption}
            </Form.Label>
            <p
              style={{
                fontSize: '12px',
                textAlign: 'center',
                color: 'rgba(38, 38, 38, 0.8)',
              }}
            >
              {props.desc}
            </p>
          </div>
        </>
      ) : (
        <div
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '24%',
          }}
        >
          <Image
            style={
              props.showDesc
                ? {
                    maxWidth: '100%',
                    width: '270px',
                    marginTop: '-70px',
                  }
                : {
                    maxWidth: '100%',
                    width: '270px',
                  }
            }
            src={props.imgSrc}
            width="270"
            height="340"
            alt="pic"
          />
          {!props.showDesc && (
            <>
              <Form.Label
                style={{
                  color: 'black',
                  fontSize: '16px',
                  fontWeight: 700,
                  marginTop: '20px',
                }}
              >
                {props.caption}
              </Form.Label>
              <p
                style={{
                  fontSize: '12px',
                  textAlign: 'center',
                  color: 'rgba(38, 38, 38, 0.8)',
                }}
              >
                {props.desc}
              </p>
            </>
          )}
          <div
            style={
              props.showDesc
                ? {
                    display: 'block',
                    width: '96%',
                    height: '195px',
                    background:
                      'linear-gradient(180deg, #10B441 0%, #007B24 100%)',
                    padding: '10px',
                    borderRadius: '7px',
                    marginTop: '-160px',
                    transition: 'transform 1s',
                  }
                : {
                    display: 'none',
                  }
            }
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Form.Label
                style={{
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: 700,
                  marginTop: '20px',
                }}
              >
                {props.caption}
              </Form.Label>
              <p
                style={{
                  fontSize: '12px',
                  textAlign: 'center',
                  color: '#d0d0d0',
                }}
              >
                {props.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
