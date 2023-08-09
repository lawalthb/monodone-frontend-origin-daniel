import Image from 'next/image';
import { Form } from 'react-bootstrap';
import Media from '@/utils/media';
import OurOfficeContent from './ourOfficeContent';

export default function OurOffices(props) {
  const { mobile, tabletAndDesktop } = Media();
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Form.Label
          style={{
            color: 'black',
            fontSize: '20px',
            fontWeight: 700,
          }}
        >
          Our
        </Form.Label>
        <Form.Label
          style={{
            color: '#7CC427',
            fontSize: '20px',
            fontWeight: 700,
            marginLeft: '10px',
          }}
        >
          Offices
        </Form.Label>
      </div>
      <p
        style={
          mobile
            ? {
                textAlign: 'center',
                padding: '0px 20px',
                fontSize: '12px',
              }
            : {
                textAlign: 'center',
                padding: '0px 70px',
              }
        }
      >
        Do well to get contact us, through our office line or visit our office
        close to you.
      </p>
      <div
        style={
          tabletAndDesktop
            ? {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '50px',
                width: '100%',
                padding: '5px 70px',
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
          caption="Botswana"
          desc1="Innovation Hub, Plot 69184 Block 8 Bar 3,"
          desc2="2nd Floor, The
                    Icon building"
          phone="+2673901339"
        />
        <OurOfficeContent
          caption="South Africa"
          desc1="Innovation Hub, Plot 69184 Block 8 Bar 3,"
          desc2="2nd Floor, The
                    Icon building"
          phone="+2673901339"
        />
        <OurOfficeContent
          caption="Mozambique"
          desc1="Innovation Hub, Plot 69184 Block 8 Bar 3,"
          desc2="2nd Floor, The
                    Icon building"
          phone="+2673901339"
        />
        <OurOfficeContent
          caption="Nigeria"
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '30px',
        }}
      >
        {mobile && (
          <Image
            style={{
              maxWidth: '100%',
              width: '320px',
            }}
            src="/img/officemapmobile.png"
            width="320"
            height="80"
            alt="map"
          />
        )}
        {tabletAndDesktop && (
          <Image
            style={{
              maxWidth: '100%',
              width: '1160px',
            }}
            src="/img/officemapdesktop1.png"
            width="1160"
            height="300"
            alt="map"
          />
        )}
      </div>
    </>
  );
}
