import Media from '@/utils/media';
import Image from 'next/image';
import { Form } from 'react-bootstrap';

export default function Providers(props) {
  const { mobile, tabletAndDesktop } = Media();
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '10px',
          width: '100%',
          gap: '10px',
        }}
      >
        <Image
          src="/img/providerline.png"
          width={mobile ? '100' : '150'}
          height="1"
          alt="close"
        />
        <Form.Label
          style={{
            fontSize: '14px',
            fontWeight: '400',
            color: 'rgba(128, 128, 128, 1)',
            cursor: 'pointer',
            marginTop: '5px',
          }}
        >
          OR
        </Form.Label>
        <Image
          src="/img/providerline.png"
          width={mobile ? '100' : '150'}
          height="1"
          alt="close"
        />
      </div>
      <div
        style={{
          display: 'flex',
          gap: '20px',
          border: '1px solid #E7E7E7',
          borderRadius: '5px',
          padding: '10px',
          height: '48px',
          marginTop: '20px',
        }}
      >
        <Image
          style={{
            cursor: 'pointer',
          }}
          src="/img/googleprovider.png"
          width="24"
          height="24"
          alt="provider"
        />
        <Form.Label
          style={{
            fontSize: '14px',
            fontWeight: '400',
            color: 'rgba(38, 38, 38, 1)',
            cursor: 'pointer',
            marginTop: '3px',
          }}
        >
          Continue with Google
        </Form.Label>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '20px',
          border: '1px solid #E7E7E7',
          borderRadius: '5px',
          padding: '10px',
          height: '48px',
          marginTop: '10px',
        }}
      >
        <Image
          style={{
            cursor: 'pointer',
          }}
          src="/img/facebookprovider.png"
          width="24"
          height="24"
          alt="provider"
        />
        <Form.Label
          style={{
            fontSize: '14px',
            fontWeight: '400',
            color: 'rgba(38, 38, 38, 1)',
            cursor: 'pointer',
            marginTop: '3px',
          }}
        >
          Continue with Facebook
        </Form.Label>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '20px',
          border: '1px solid #E7E7E7',
          borderRadius: '5px',
          padding: '10px',
          height: '48px',
          marginTop: '10px',
        }}
      >
        <Image
          style={{
            cursor: 'pointer',
          }}
          src="/img/appleprovider.png"
          width="24"
          height="24"
          alt="provider"
        />
        <Form.Label
          style={{
            fontSize: '14px',
            fontWeight: '400',
            color: 'rgba(38, 38, 38, 1)',
            cursor: 'pointer',
            marginTop: '3px',
          }}
        >
          Continue with Apple
        </Form.Label>
      </div>
    </>
  );
}
