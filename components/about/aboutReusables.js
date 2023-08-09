import Media from '@/utils/media';
import Image from 'next/image';
import { Form } from 'react-bootstrap';

export default function AboutReusables(props) {
  const { mobile, desktop2, tabletAndDesktop2 } = Media();

  const whoWeAreHeading = (
    <Form.Label
      style={{
        fontSize: '16px',
        color: '#414141',
        fontWeight: 600,
      }}
    >
      Who We Are?
    </Form.Label>
  );
  const faqHeading = (
    <Form.Label
      style={{
        fontSize: '16px',
        color: '#414141',
        fontWeight: 600,
      }}
    >
      Frequently Asked Questions
    </Form.Label>
  );
  const testimonialHeading = (
    <>
      <Form.Label
        style={{
          fontSize: '16px',
          color: '#414141',
          fontWeight: 600,
          marginTop: '30px',
        }}
      >
        Testimonials
      </Form.Label>
      <Form.Label
        style={{
          fontSize: '12px',
          color: '#414141',
        }}
      >
        Hear what our customers are saying about us
      </Form.Label>
    </>
  );

  const whoWeAreContent = (
    <p
      style={{
        fontSize: '12px',
        textAlign: 'justify',
      }}
    >
      {`Monolog is a company that offers series of services and opportunities to people. 
    Through our services and features, people get opportunities of either building a career 
    in driving, agents and we also build platforms for property buyers to meet real estate 
    agents.Monolog is a company that offers series of services and opportunities to people. 
    Through our services and features, people get opportunities of either building a career 
    in driving, agents and we also build platforms for property buyers to meet real estate 
    agents.Monolog is a company that offers series of services and opportunities to people. 
    Through our services and features, people get opportunities of either building a career 
    in driving, agents and we also build platforms for property buyers to meet real estate 
    agents.Monolog is a company that offers series of services and opportunities to people. 
    Through our services and features, people get opportunities of either building a career in driving, 
    agents and we also build platforms for property buyers to meet real estate agents.`}
    </p>
  );
  const ourMission = (
    <>
      <Form.Label
        style={{
          fontSize: '16px',
          color: '#414141',
          fontWeight: 600,
        }}
      >
        Our Mission
      </Form.Label>
      <p
        style={{
          fontSize: '12px',
          textAlign: 'justify',
        }}
      >
        {`Monolog is a company that offers series of services and opportunities to people. 
                Through our services and features, people get opportunities of either building a career 
                in driving, agents and we also build platforms for property buyers to meet real estate agents.`}
      </p>
    </>
  );

  const ourVision = (
    <>
      <Form.Label
        style={{
          fontSize: '16px',
          color: '#414141',
          fontWeight: 600,
        }}
      >
        Our Vision
      </Form.Label>
      <p
        style={{
          fontSize: '12px',
          textAlign: 'justify',
        }}
      >
        {`Monolog is a company that offers series of services and opportunities to people. 
                Through our services and features, people get opportunities of either building a career 
                in driving, agents and we also build platforms for property buyers to meet real estate agents.`}
      </p>
    </>
  );

  const faqContent = (
    <p
      style={{
        fontSize: '12px',
        textAlign: 'justify',
      }}
    >
      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum.`}
    </p>
  );

  const arrowLeft = (
    <div
      style={{
        width: '24px',
        height: '24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        border: '1px solid black',
        marginTop: '100px',
      }}
    >
      <Image
        style={{
          maxWidth: '100%',
          width: '14px',
        }}
        src="/img/testimonialarrowleft.png"
        width="14"
        height="14"
        alt="arrow"
      />
    </div>
  );

  const arrowRight = (
    <div
      style={{
        width: '24px',
        height: '24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        border: '1px solid black',
        marginTop: '100px',
      }}
    >
      <Image
        style={{
          maxWidth: '100%',
          width: '7px',
        }}
        src="/img/testimonialarrowright1.png"
        width="7"
        height="12"
        alt="arrow"
      />
    </div>
  );

  const testimonialContent = (
    <>
      <div
        style={
          mobile
            ? {
                display: 'flex',
                flexDirection: 'column',
                padding: '30px 20px',
                width: '100%',
                height: '200px',
                border: '1px solid #D1D1D1',
                borderRadius: '7px',
              }
            : {
                display: 'flex',
                flexDirection: 'column',
                padding: '30px 20px',
                width: '260px',
                height: '200px',
                border: '1px solid #D1D1D1',
                borderRadius: '7px',
              }
        }
      >
        <p
          style={{
            fontSize: '12px',
            textAlign: 'justify',
          }}
        >
          {`It has been a great experience filled with no regret, trusting monolog 
                            at first. Monolog is the best of her kind.`}
        </p>
        <hr />
        <div
          style={{
            display: 'flex',
            gap: '20px',
          }}
        >
          <Image
            style={{
              maxWidth: '100%',
              width: '40px',
            }}
            src="/img/peaceafor.png"
            width="40"
            height="40"
            alt="arrow"
          />
          <Form.Label
            style={{
              fontSize: '12px',
              color: '#414141',
              fontWeight: 500,
              marginTop: '10px',
            }}
          >
            Peace Afor
          </Form.Label>
        </div>
      </div>
    </>
  );
  return {
    whoWeAreHeading,
    whoWeAreContent,
    ourMission,
    ourVision,
    faqHeading,
    faqContent,
    testimonialHeading,
    testimonialContent,
    arrowLeft,
    arrowRight,
  };
}
