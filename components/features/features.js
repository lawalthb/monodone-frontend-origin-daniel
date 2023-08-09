import { useState } from 'react';
import { Form } from 'react-bootstrap';
import FeaturesContent from './featuresContent';
import Image from 'next/image';
import Media from '@/utils/media';
import FeaturesMobile from './featuresMobile';
import FeaturesTablet from './featuresTablet';
import FeaturesDesktop from './featuresDesktop';

export default function Features(props) {
  const [driverDesc, setDriverDesc] = useState(false);
  const [agentDesc, setAgentDesc] = useState(false);
  const [futureServices, setFutureServices] = useState(false);
  const [freelancerServices, setFreelancerServices] = useState(false);

  const { mobile, tablet, desktop } = Media();
  return (
    <>
      <div
        style={
          tablet || desktop
            ? {
                display: 'flex',
                justifyContent: 'center',
                margin: '30px auto 0px auto',
                gap: '6px',
              }
            : {
                display: 'flex',
                justifyContent: 'center',
                margin: 'auto',
                gap: '6px',
              }
        }
      >
        <Form.Label
          style={{
            color: 'black',
            fontSize: '19px',
            fontWeight: 700,
          }}
        >
          Our
        </Form.Label>
        <Form.Label
          style={{
            color: '#7CC427',
            fontSize: '19px',
            fontWeight: 700,
          }}
        >
          Features
        </Form.Label>
      </div>
      <p
        style={
          mobile
            ? {
                textAlign: 'center',
                fontSize: '12px',
              }
            : {
                textAlign: 'center',
                padding: '10px 70px',
              }
        }
      >
        Our company is developing rapidly and today is a leader in the field of
        logistics. What we can offer today.
      </p>
      {mobile && (
        <>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
            }}
          >
            <FeaturesMobile
              driverDesc={driverDesc}
              setDriverDesc={setDriverDesc}
              agentDesc={agentDesc}
              setAgentDesc={setAgentDesc}
              futureServices={futureServices}
              setFutureServices={setFutureServices}
              freelancerServices={freelancerServices}
              setFreelancerServices={setFreelancerServices}
            />
          </div>
        </>
      )}
      {tablet && (
        <>
          <FeaturesTablet
            driverDesc={driverDesc}
            setDriverDesc={setDriverDesc}
            agentDesc={agentDesc}
            setAgentDesc={setAgentDesc}
            futureServices={futureServices}
            setFutureServices={setFutureServices}
            freelancerServices={freelancerServices}
            setFreelancerServices={setFreelancerServices}
          />
        </>
      )}
      {desktop && (
        <>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              padding: '20px 60px',
            }}
          >
            <FeaturesDesktop
              driverDesc={driverDesc}
              setDriverDesc={setDriverDesc}
              agentDesc={agentDesc}
              setAgentDesc={setAgentDesc}
              futureServices={futureServices}
              setFutureServices={setFutureServices}
              freelancerServices={freelancerServices}
              setFreelancerServices={setFreelancerServices}
            />
          </div>
        </>
      )}
      {(tablet || desktop) && (
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
