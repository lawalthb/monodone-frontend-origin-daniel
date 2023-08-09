import Media from '@/utils/media';
import Image from 'next/image';
import { Form } from 'react-bootstrap';

export default function SevicesAppFeatures(props) {
  const { mobile, tabletAndDesktop } = Media();
  return (
    <>
      {mobile && (
        <>
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                marginTop: '60px',
              }}
            >
              <Image
                style={{
                  width: '320px',
                  maxWidth: '100%',
                  marginTop: '-30px',
                }}
                src="/img/iphone18one.png"
                width="320"
                height="180"
                alt="phone"
              />
              <Image
                style={{
                  width: '320px',
                  maxWidth: '100%',
                  marginTop: '50px',
                  marginLeft: '-30px',
                }}
                src="/img/iphone18two.png"
                width="320"
                height="180"
                alt="phone"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '30px',
              }}
            >
              <Form.Label
                style={{
                  fontSize: '16px',
                  color: 'white',
                  fontWeight: 700,
                }}
              >
                Monolog
              </Form.Label>
              <Form.Label
                style={{
                  fontSize: '16px',
                  color: 'white',
                  fontWeight: 700,
                  marginTop: '-10px',
                }}
              >
                App features
              </Form.Label>
              <p
                style={{
                  fontSize: '10px',
                  color: 'white',
                }}
              >
                Work as a driver and become successful together with Monod. We
                offer flexible conditions, good earnings and stable income
              </p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',

                  marginTop: '20px',
                  gap: '30px',
                }}
              >
                <Image
                  style={{
                    width: '100px',
                    maxWidth: '100%',
                  }}
                  src="/img/applestoreicon.png"
                  width="100"
                  height="32"
                  alt="applestore"
                />
                <Image
                  style={{
                    width: '100px',
                    maxWidth: '100%',
                  }}
                  src="/img/googleplayicon.png"
                  width="100"
                  height="32"
                  alt="googleplay"
                />
              </div>
            </div>
          </div>
        </>
      )}
      {tabletAndDesktop && (
        <>
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                display: 'flex',
                width: '48%',
              }}
            >
              <Image
                style={{
                  width: '200px',
                  maxWidth: '100%',
                  marginTop: '-30px',
                }}
                src="/img/iphone18one.png"
                width="200"
                height="420"
                alt="phone"
              />
              <Image
                style={{
                  width: '200px',
                  maxWidth: '100%',
                  marginTop: '50px',
                  marginLeft: '-50px',
                }}
                src="/img/iphone18two.png"
                width="200"
                height="420"
                alt="phone"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '48%',
                padding: '30px',
              }}
            >
              <Form.Label
                style={{
                  fontSize: '22px',
                  color: 'white',
                  fontWeight: 700,
                  marginTop: '100px',
                }}
              >
                Monolog
              </Form.Label>
              <Form.Label
                style={{
                  fontSize: '22px',
                  color: 'white',
                  fontWeight: 700,
                  marginTop: '-10px',
                }}
              >
                App features
              </Form.Label>
              <p
                style={{
                  fontSize: '12px',
                  color: 'white',
                }}
              >
                Work as a driver and become successful together with Monod. We
                offer flexible conditions, good earnings and stable income
              </p>
              <div
                style={{
                  display: 'flex',
                  marginTop: '20px',
                  gap: '30px',
                }}
              >
                <Image
                  style={{
                    width: '168px',
                    maxWidth: '100%',
                  }}
                  src="/img/applestoreicon.png"
                  width="160"
                  height="40"
                  alt="applestore"
                />
                <Image
                  style={{
                    width: '168px',
                    maxWidth: '100%',
                  }}
                  src="/img/googleplayicon.png"
                  width="160"
                  height="40"
                  alt="googleplay"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
