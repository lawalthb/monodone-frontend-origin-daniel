import Image from 'next/image';
import { Form } from 'react-bootstrap';
import MonodomeAppFeaturesMobileContent from './monodomeAppFeaturesMobileContent';
import MonodomeAppContent from './monodomeAppContent';
import Media from '@/utils/media';

export default function MonodomeAppFeatures(props) {
  const { mobile, tabletAndDesktop } = Media();

  return (
    <>
      {mobile && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <MonodomeAppFeaturesMobileContent
            allAppFeatures={props.allAppFeatures}
            setAllAppFeatures={props.setAllAppFeatures}
            index={props.index}
            setIndex={props.setIndex}
            handlePrevious={props.handlePrevious}
            handleNext={props.handleNext}
          />
        </div>
      )}
      {tabletAndDesktop && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '46%',
            }}
          >
            <Image
              onClick={() => props.handlePrevious()}
              style={{
                maxWidth: '100%',
                width: '12px',
                marginTop: '200px',
                cursor: 'pointer',
              }}
              src="/img/backwardarrow.png"
              width="12"
              height="24"
              alt="arrow"
            />
            <Image
              style={{
                maxWidth: '100%',
                width: '270px',
                marginTop: '-70px',
              }}
              src={props.allAppFeatures[props.index].imgSrc1}
              width="270"
              height="510"
              alt="arrow"
            />
            <Image
              style={{
                maxWidth: '100%',
                width: '270px',
                marginLeft: '-76px',
                marginTop: '60px',
              }}
              src={props.allAppFeatures[props.index].imgSrc2}
              width="270"
              height="510"
              alt="arrow"
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '50%',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Form.Label
                style={{
                  color: 'white',
                  fontSize: '20px',
                  fontWeight: 700,
                  marginTop: '20px',
                }}
              >
                {props.allAppFeatures[props.index].caption1}
              </Form.Label>
              <Form.Label
                style={{
                  color: '#7CC427',
                  fontSize: '20px',
                  fontWeight: 700,
                }}
              >
                {props.allAppFeatures[props.index].caption2}
              </Form.Label>
              <p
                style={{
                  color: '#d0d0d0',
                  fontSize: '12px',
                  marginTop: '10px',
                  paddingRight: '30px',
                }}
              >
                {props.allAppFeatures[props.index].desc1} <br />{' '}
                {props.allAppFeatures[props.index].desc2}
              </p>
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'space-between',
                }}
              >
                <MonodomeAppContent
                  imgSrc={props.allAppFeatures[props.index].imgSrc3}
                  caption="Notifications"
                />
                <MonodomeAppContent
                  imgSrc={props.allAppFeatures[props.index].imgSrc4}
                  caption="GPS Tracking"
                />
                <MonodomeAppContent
                  imgSrc={props.allAppFeatures[props.index].imgSrc5}
                  caption="Scheduling"
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'space-between',
                }}
              >
                <MonodomeAppContent
                  imgSrc={props.allAppFeatures[props.index].imgSrc6}
                  caption="Bidding"
                />
                <MonodomeAppContent
                  imgSrc={props.allAppFeatures[props.index].imgSrc7}
                  caption="Rating"
                />
                <MonodomeAppContent
                  imgSrc={props.allAppFeatures[props.index].imgSrc8}
                  caption="Load board"
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  marginTop: '50px',
                }}
              >
                <Image
                  style={{
                    maxWidth: '100%',
                    width: '168px',
                    cursor: 'pointer',
                  }}
                  src={props.allAppFeatures[props.index].imgSrc9}
                  width="168"
                  height="48"
                  alt="store"
                />
                <Image
                  style={{
                    maxWidth: '100%',
                    width: '168px',
                    cursor: 'pointer',
                    marginLeft: '40px',
                  }}
                  src={props.allAppFeatures[props.index].imgSrc10}
                  width="168"
                  height="48"
                  alt="store"
                />
              </div>
            </div>
            <Image
              onClick={() => props.handleNext()}
              style={{
                maxWidth: '100%',
                width: '12px',
                marginTop: '200px',
                cursor: 'pointer',
              }}
              src="/img/forwardarrow.png"
              width="12"
              height="24"
              alt="arrow"
            />
          </div>
        </div>
      )}
    </>
  );
}
