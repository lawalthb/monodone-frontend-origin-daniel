import Media from '@/utils/media';
import Image from 'next/image';
import { Form } from 'react-bootstrap';

export default function DriverNavigationHeaderDesktop(props) {
  const { mobile, tabletAndDesktop } = Media();
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: !mobile ? 'flex-end' : 'space-between',
          paddingLeft: mobile ? '0': '20px',
          paddingRight: mobile ? '0': '20px',
          width: '100%',
          height: '72px',
          background: 'white',
          borderBottom: '1px solid rgba(231, 231, 231, 1)',
        }}
      >
        {mobile && 
        <>
          <div>
          <Image
            style={{
              margin: '12px 0px',
              marginLeft: '13px',
              marginTop: '17px',
            }}
            src="/img/logoicon.png"
            width="36"
            height="24"
            alt="message"
          />
          </div>
          <div>
            <Image
              style={{
                margin: '12px 0px',
                marginRight: '13px',
                marginTop: '17px',
              }}
              src="/img/driveronline.png"
              width="35"
              height="34"
              alt="message"
            />
            <Form.Label
              style={{
                fontSize: '14px',
                marginTop: '23px',
                color: 'black',
                marginRight: '10px',
                fontWeight: 500,
              }}
            >
              Kelechi Agu
            </Form.Label>
            
            <Image
              onClick={ () => props.handleNotification()}
              style={{
                margin: '12px 0px',
                marginRight: '13px',
                marginTop: '23px',
              }}
              src="/img/notification.png"
              width="24"
              height="24"
              alt="message"
            />
            <Image
              style={{
                margin: '12px 0px',
                cursor: 'pointer',
                marginTop: '17px',
                marginRight: '13px',
              }}
              src="/img/agentuimessage.png"
              width="30"
              height="26"
              alt="message"
            />
            <Image
              onClick={() => props.setSideBar()}
              style={{
                margin: '12px 0px',
                cursor: 'pointer',
                marginTop: '17px',
                marginRight: "7px"
              }}
              src="/img/bars.png"
              width="20"
              height="12"
              alt="message"
            />
          </div>
        </>
        }

        {tabletAndDesktop && 
        <>
          <Image
            style={{
              margin: '12px 0px',
              cursor: 'pointer',
              marginTop: '17px',
              marginRight: '13px',
            }}
            src="/img/agentuimessage.png"
            width="39"
            height="32"
            alt="message"
          />
          <Image
            onClick={ () => props.handleNotification()}
            style={{
              margin: '12px 0px',
              marginRight: '13px',
              marginTop: '23px',
            }}
            src="/img/notification.png"
            width="20"
            height="20"
            alt="message"
          />
          <Image
            style={{
              margin: '12px 0px',
              marginRight: '13px',
              marginTop: '17px',
            }}
            src="/img/driveronline.png"
            width="35"
            height="34"
            alt="message"
          />
          <Form.Label
            style={{
              fontSize: '14px',
              marginTop: '23px',
              color: 'black',
              marginRight: '10px',
              fontWeight: 500,
            }}
          >
            Kelechi Agu
          </Form.Label>
          <Form.Label
            style={{
              fontSize: '11px',
              marginTop: '23px',
              color: 'black',
              marginRight: '10px',
            }}
          >
            {'|'}
          </Form.Label>
          <Form.Label
            style={{
              fontSize: '14px',
              marginTop: '23px',
              color: 'black',
              marginRight: '10px',
              fontWeight: 500,
            }}
          >
            Driver
          </Form.Label>
        </>
        }
      </div>
    </>
  );
}
