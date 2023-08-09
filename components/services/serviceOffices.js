import Image from 'next/image';
import { Form } from 'react-bootstrap';
import OurOfficeContent from '../offices/ourOfficeContent';
import Media from '@/utils/media';

export default function ServiceOffices(props) {
  const { mobile, tabletAndDesktop } = Media();
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '20px',
          fontWeight: 600,
          color: '#414141',
          padding: '20px',
        }}
      >
        Our Offices
      </div>
      <p
        style={{
          textAlign: 'center',
          fontSize: '12px',
          color: 'rgba(38, 38, 38, 0.8)',
          fontWeight: 500,
        }}
      >
        {`Do well to get contact us, through our office line or visit our office close to you.`}
      </p>
      <div
        style={
          tabletAndDesktop
            ? {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                width: '100%',
                padding: '5px 10px',
                marginTop: '20px',
              }
            : {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                width: '100%',
                padding: '5px',
                gap: '20px',
              }
        }
      >
        <OurOfficeContent
          caption="Lagos"
          desc1="Innovation Hub, Plot 69184 Block 8 Bar 3,"
          desc2="2nd Floor, The
                    Icon building"
          phone="+2673901339"
        />
        <OurOfficeContent
          caption="Akure"
          desc1="Innovation Hub, Plot 69184 Block 8 Bar 3,"
          desc2="2nd Floor, The
                    Icon building"
          phone="+2673901339"
        />
        <OurOfficeContent
          caption="Abuja"
          desc1="Innovation Hub, Plot 69184 Block 8 Bar 3,"
          desc2="2nd Floor, The
                    Icon building"
          phone="+2673901339"
        />
        <OurOfficeContent
          caption="Enugu"
          desc1="Innovation Hub, Plot 69184 Block 8 Bar 3,"
          desc2="2nd Floor, The
                    Icon building"
          phone="+2673901339"
        />
        <OurOfficeContent
          caption="Port Harcourt"
          desc1="Innovation Hub, Plot 69184 Block 8 Bar 3,"
          desc2="2nd Floor, The
                    Icon building"
          phone="+2673901339"
        />
      </div>
      {tabletAndDesktop && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '10px',
          }}
        >
          <Image
            style={{
              maxWidth: '100%',
              width: '55px',
            }}
            src="/img/prevarrow.png"
            width="55"
            height="10"
            alt="arrow"
          />
          <Form.Label
            style={{
              color: '#00902F',
              fontSize: '10px',
              marginLeft: '10px',
              marginTop: '4px',
            }}
          >
            PREV
          </Form.Label>
          <Form.Label
            style={{
              color: '#A6A6A6',
              fontSize: '10px',
              marginLeft: '100px',
              marginTop: '4px',
            }}
          >
            NEXT
          </Form.Label>
          <Image
            style={{
              maxWidth: '100%',
              width: '55px',
              marginLeft: '10px',
            }}
            src="/img/nextarrow.png"
            width="55"
            height="10"
            alt="arrow"
          />
        </div>
      )}
    </>
  );
}
