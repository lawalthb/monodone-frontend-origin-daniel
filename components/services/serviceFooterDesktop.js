import Image from 'next/image';
import { Form } from 'react-bootstrap';
import FooterSocials from '../footer/footerSocials';
import { useRouter } from 'next/router';

export default function ServiceFooterDesktop(props) {
  const router = useRouter();
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          padding: '30px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Image
            style={{
              maxWidth: '100%',
              width: '150px',
              marginLeft: 'auto',
              marginRight: '30px',
            }}
            src="/img/monologservicelogo.png"
            width="150"
            height="32"
            alt="logo"
          />

          <div
            style={{
              display: 'flex',
              gap: '10px',
              marginLeft: 'auto',
            }}
          >
            <span
              style={{
                color: 'white',
                marginTop: '-1px',
              }}
            >
              &copy;
            </span>
            <Form.Label
              style={{
                fontSize: '12px',
                color: 'white',
              }}
            >
              2022 Monodom. All rights
            </Form.Label>
          </div>
          <Form.Label
            style={{
              fontSize: '12px',
              color: 'white',
              marginLeft: 'auto',
            }}
          >
            reserved
          </Form.Label>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Form.Label
            style={{
              fontSize: '16px',
              color: 'white',
            }}
          >
            Company
          </Form.Label>
          <Form.Label
            style={{
              fontSize: '12px',
              color: '#FFFFFF',
            }}
          >
            About Us
          </Form.Label>
          <Form.Label
            style={{
              fontSize: '12px',
              color: '#FFFFFF',
            }}
          >
            Our Services
          </Form.Label>
          <Form.Label
            style={{
              fontSize: '12px',
              color: '#FFFFFF',
            }}
          >
            Blog
          </Form.Label>
          <Form.Label
            style={{
              fontSize: '12px',
              color: '#FFFFFF',
            }}
          >
            Contact Us
          </Form.Label>
          <Form.Label
            onClick={() => router.push('/terms')}
            style={{
              fontSize: '12px',
              color: '#FFFFFF',
              cursor: 'pointer',
            }}
          >
            Terms and Conditions
          </Form.Label>
          <Form.Label
            onClick={() => router.push('/privacy')}
            style={{
              fontSize: '12px',
              color: '#FFFFFF',
              cursor: 'pointer',
            }}
          >
            Privacy Policy
          </Form.Label>
          <Form.Label
            style={{
              fontSize: '12px',
              color: '#FFFFFF',
            }}
          >
            FAQ
          </Form.Label>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Form.Label
            style={{
              fontSize: '16px',
              color: 'white',
            }}
          >
            Quick Services
          </Form.Label>
          <Form.Label
            style={{
              fontSize: '12px',
              color: '#FFFFFF',
            }}
          >
            Ship Now
          </Form.Label>
          <Form.Label
            style={{
              fontSize: '12px',
              color: '#FFFFFF',
            }}
          >
            Get a Quote
          </Form.Label>
          <Form.Label
            style={{
              fontSize: '12px',
              color: '#FFFFFF',
            }}
          >
            Loadboard
          </Form.Label>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Form.Label
            style={{
              fontSize: '16px',
              color: 'white',
            }}
          >
            Get in Touch
          </Form.Label>
          <div
            style={{
              display: 'flex',
              gap: '10px',
            }}
          >
            <FooterSocials imgSrc="/img/monodomeinstagram.png" />
            <FooterSocials imgSrc="/img/monodometwittericon.png" />
            <FooterSocials imgSrc="/img/monodomefacebookicon.png" />
            <FooterSocials imgSrc="/img/monodomelinkedinicon.png" />
            <FooterSocials imgSrc="/img/monodomeutubeicon.png" />
          </div>
        </div>
      </div>
    </>
  );
}
