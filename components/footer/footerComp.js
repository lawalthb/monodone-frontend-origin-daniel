import { useRouter } from 'next/router';
import { Form } from 'react-bootstrap';
import Media from '@/utils/media';
import FooterContentMobile from './footerContentMobile';
import FooterContentDesktop from './footerContentDesktop';
import FooterContentTablet from './footerContentTablet';

export default function FooterComp(props) {
  const router = useRouter();
  const { mobile, tablet, desktop } = Media();

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        {mobile && <FooterContentMobile />}
        {desktop && (
          <>
            <FooterContentDesktop />
          </>
        )}
        {tablet && (
          <>
            <FooterContentTablet />
          </>
        )}
        {(tablet || desktop) && (
          <>
            <hr
              style={{
                color: 'white',
                fontWeight: 700,
              }}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '5px 70px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                }}
              >
                <Form.Label
                  onClick={() => router.push('/terms')}
                  style={{
                    fontSize: '11px',
                    fontWeight: 500,
                    color: 'white',
                    cursor: 'pointer',
                  }}
                >
                  Terms And Conditions
                </Form.Label>
                <Form.Label
                  onClick={() => router.push('/privacy')}
                  style={{
                    fontSize: '11px',
                    fontWeight: 500,
                    color: 'white',
                    marginLeft: '10px',
                    cursor: 'pointer',
                  }}
                >
                  Privacy Policy
                </Form.Label>
              </div>
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                }}
              >
                <span
                  style={{
                    color: 'white',
                    fontWeight: 500,
                    marginTop: '-1px',
                  }}
                >
                  &copy;
                </span>
                <Form.Label
                  style={{
                    fontSize: '12px',
                    fontWeight: 500,
                    color: 'white',
                    marginLeft: '2px',
                  }}
                >
                  2022 Monodom. All rights reserved
                </Form.Label>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
