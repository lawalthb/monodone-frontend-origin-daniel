import styles from './service.module.css';
import { Form } from 'react-bootstrap';
import Image from 'next/image';
import OurServiceSideContent from './ourServiceSideContent';
import Media from '@/utils/media';

export default function OurServiceComp(props) {
  const { mobile } = Media();

  return (
    <>
      <div
        style={
          mobile
            ? {
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
              }
            : {
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                padding: '20px 60px',
                // marginTop: "20px"
              }
        }
      >
        <div
          className={styles.sidebarBg}
          style={
            mobile
              ? {
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '530px',
                }
              : {
                  width: '20%',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '530px',
                }
          }
        >
          <Form.Label
            style={{
              color: 'white',
              fontSize: '14px',
              fontWeight: 600,
              textAlign: 'center',
              marginTop: '20px',
            }}
          >
            Our Services
          </Form.Label>
          <hr
            style={{
              color: 'white',
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '5px 20px',
            }}
          >
            <OurServiceSideContent
              imgSrc="/img/logicon.png"
              caption="Monolog"
              handleClick={() => props.handleMonolog()}
              isClicked={props.monolog}
            />
            <OurServiceSideContent
              imgSrc="/img/monowalleticon.png"
              caption="Monowallet"
              handleClick={() => props.handleMonowallet()}
              isClicked={props.monowallet}
            />
            <OurServiceSideContent
              imgSrc="/img/monofoodicon.png"
              caption="Monofood"
              handleClick={() => props.handleMonofood()}
              isClicked={props.monofood}
            />
            <OurServiceSideContent
              imgSrc="/img/monorideicon.png"
              caption="Monoride"
              handleClick={() => props.handleMonoride()}
              isClicked={props.monoride}
            />
            <OurServiceSideContent
              imgSrc="/img/monohealthicon.png"
              caption="Monohealth"
              handleClick={() => props.handleMonohealth()}
              isClicked={props.monohealth}
            />
            <OurServiceSideContent
              imgSrc="/img/realestateicon.png"
              caption="Real Estate"
              handleClick={() => props.handleRealEstate()}
              isClicked={props.realEstate}
            />
          </div>
        </div>
        <div
          style={
            mobile
              ? {
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }
              : {
                  width: '75%',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '530px',
                }
          }
        >
          <div
            style={
              mobile
                ? {
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '7px',
                    marginTop: '30px',
                  }
                : {
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '7px',
                  }
            }
          >
            <Image
              style={{
                maxWidth: '100%',
                width: '40px',
              }}
              src="/img/monologheadicon.png"
              width="40"
              height="40"
              alt="icon"
            />
            <Form.Label
              style={{
                color: 'black',
                fontSize: '18px',
                fontWeight: 700,
                marginTop: '6px',
                marginLeft: '5px',
              }}
            >
              Monolog
            </Form.Label>
          </div>
          <p
            style={
              mobile
                ? {
                    textAlign: 'center',
                    marginTop: '20px',
                    fontSize: '12px',
                  }
                : {
                    textAlign: 'center',
                    padding: '30px 70px',
                  }
            }
          >
            <>
              Our company is developing rapidly and today is a leader in the
              field of logistics. What we can offer today.
            </>{' '}
            :
          </p>
          <div
            style={
              mobile
                ? {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '10px',
                  }
                : {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '-20px',
                  }
            }
          >
            <Image
              style={{
                maxWidth: '100%',
                width: mobile ? '320px' : '840px',
              }}
              src={
                mobile
                  ? '/img/monologimagemobile.png'
                  : '/img/monologimagedesktop.png'
              }
              width={mobile ? '320' : '840'}
              height={mobile ? '150' : '380'}
              alt="load"
            />
          </div>
        </div>
      </div>
    </>
  );
}
