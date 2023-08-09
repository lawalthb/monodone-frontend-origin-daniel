import { useRouter } from 'next/router';
import Image from 'next/image';
import { Form } from 'react-bootstrap';
import FooterSocials from './footerSocials';
import FooterContent from './footerContent';

export default function FooterContentMobile(props) {
  const router = useRouter();
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Image
          style={{
            maxWidth: '100%',
            width: '123px',
          }}
          src="/img/monodomelogo.png"
          width="123"
          height="20"
          alt="map"
        />
        <div
          style={{
            display: 'flex',
            gap: '10px',
            marginTop: '20px',
            marginBottom: '30px',
          }}
        >
          <FooterSocials imgSrc="/img/monodomeinstagram.png" />
          <FooterSocials imgSrc="/img/monodometwittericon.png" />
          <FooterSocials imgSrc="/img/monodomefacebookicon.png" />
          <FooterSocials imgSrc="/img/monodomelinkedinicon.png" />
          <FooterSocials imgSrc="/img/monodomeutubeicon.png" />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '10px',
          }}
        >
          <FooterContent
            imgWidth="4"
            imgHeight="4"
            caption="Become a driver"
            imgSrc="/img/elipse-dot.png"
            marginTop="6px"
          />
          <FooterContent
            imgWidth="4"
            imgHeight="4"
            caption="Become a partner"
            imgSrc="/img/elipse-dot.png"
            marginTop="6px"
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '10px',
          }}
        >
          <FooterContent
            imgWidth="4"
            imgHeight="4"
            caption="Become an agent"
            imgSrc="/img/elipse-dot.png"
            marginTop="6px"
          />
          <FooterContent
            imgWidth="4"
            imgHeight="4"
            caption="Become a staff member"
            imgSrc="/img/elipse-dot.png"
            marginTop="6px"
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '20px',
          }}
        >
          <FooterContent
            imgWidth="21"
            imgHeight="21"
            caption="Mobile App Manual"
            imgSrc="/img/monodomepdficon.png"
          />
          <FooterContent
            imgWidth="21"
            imgHeight="21"
            caption="Website Manual"
            imgSrc="/img/monodomepdficon.png"
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '30px',
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
        <hr
          style={{
            color: 'white',
            marginTop: '-1px',
          }}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '-6px',
          }}
        >
          <span
            style={{
              color: 'white',
              fontWeight: 500,
              marginTop: '-4px',
            }}
          >
            &copy;
          </span>
          <Form.Label
            style={{
              fontSize: '12px',
              fontWeight: 500,
              color: 'white',
              marginLeft: '10px',
            }}
          >
            2022 Monodom. All rights reserved
          </Form.Label>
        </div>
      </div>
    </>
  );
}
