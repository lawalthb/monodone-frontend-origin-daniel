import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Media from '@/utils/media';
import styles from '../components/services/service.module.css';
import GeneralNav from '@/components/navigation/generalNav/generalNav';
import AboutHeading from '@/components/about/aboutHeading';
import { Form } from 'react-bootstrap';
import AboutSubHeading from '@/components/about/aboutSubHeading';
import AboutReusables from '@/components/about/aboutReusables';
import Image from 'next/image';
import FaqContent from '@/components/about/faqContent';
import ServicesFooter from '@/components/services/servicesFooter';
import ReusableRefs from '@/utils/reusableRefs';
import Login from '@/components/login/login';
import Signup from '@/components/signup/signup';

export default function About(props) {
  const [showFaqDetail1, setShowFaqDetail1] = useState(false);
  const [showFaqDetail2, setShowFaqDetail2] = useState(false);
  const [showFaqDetail3, setShowFaqDetail3] = useState(false);
  const [showFaqDetail4, setShowFaqDetail4] = useState(false);
  const [showFaqDetail5, setShowFaqDetail5] = useState(false);
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);

  const router = useRouter();
  const { mobile, tabletAndDesktop, desktop2, tabletAndDesktop2 } = Media();

  const {
    whoAreWeRef,
    ourMissionRef,
    ourVisionRef,
    faqRef,
    testimonialsRef,
    whoWeAre,
    ourMissionStatus,
    ourVisionStatus,
    faq,
    testimonials,
    handleWhoAreWeClick,
    handleOurMissionClick,
    handleOurVisionClick,
    handleFaqClick,
    handleTestimonialsClick,
  } = ReusableRefs();

  const handleShowFaqDetail = () => {
    setShowFaqDetail1((prevState) => !prevState);
    setShowFaqDetail2(false);
    setShowFaqDetail3(false);
    setShowFaqDetail4(false);
    setShowFaqDetail5(false);
  };

  const handleShowFaqDetail2 = () => {
    setShowFaqDetail2((prevState) => !prevState);
    setShowFaqDetail1(false);
    setShowFaqDetail3(false);
    setShowFaqDetail4(false);
    setShowFaqDetail5(false);
  };

  const handleShowFaqDetail3 = () => {
    setShowFaqDetail3((prevState) => !prevState);
    setShowFaqDetail1(false);
    setShowFaqDetail2(false);
    setShowFaqDetail4(false);
    setShowFaqDetail5(false);
  };

  const handleShowFaqDetail4 = () => {
    setShowFaqDetail4((prevState) => !prevState);
    setShowFaqDetail1(false);
    setShowFaqDetail2(false);
    setShowFaqDetail3(false);
    setShowFaqDetail5(false);
  };

  const handleShowFaqDetail5 = () => {
    setShowFaqDetail5((prevState) => !prevState);
    setShowFaqDetail1(false);
    setShowFaqDetail2(false);
    setShowFaqDetail3(false);
    setShowFaqDetail4(false);
  };

  const {
    ourMission,
    ourVision,
    whoWeAreHeading,
    whoWeAreContent,
    faqHeading,
    faqContent,
    testimonialHeading,
    testimonialContent,
    arrowLeft,
    arrowRight,
  } = AboutReusables();
  return (
    <>
      <Head>
        <title>Mondome - About</title>
        <meta name="description" content="Monodome" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {mobile && (
        <>
          <div
            style={{
              display: 'flex',
              justifyContent: 'column',
              width: '100%',
            }}
          >
            <GeneralNav
              handleAboutUsClick={() => router.push('/about')}
              handleServicesClick={() => router.push('/services')}
              handleFeaturesClick={() => router.push('/features')}
              handleContactClick={() => router.push('/contact')}
              setLogin={setLogin}
              setSignup={setSignup}
            />
          </div>
          <div
            className={styles.monodomeServicesBg}
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              width: '100%',
              height: '220px',
            }}
          >
            <AboutHeading />
          </div>
          <div
            style={{
              padding: '20px',
            }}
          >
            {whoWeAreHeading}
            {whoWeAreContent}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              style={{
                maxWidth: '100%',
                width: '340px',
              }}
              src="/img/aboutvision.png"
              width="340"
              height="250"
              alt="whoweare"
            />
          </div>
          <div
            style={{
              padding: '20px',
            }}
          >
            {ourMission}
            {ourVision}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '0px 20px',
            }}
          >
            {faqHeading}
            <FaqContent
              caption="What is the cost of shipping to Lagos from Abuja?"
              showFaqDetail={showFaqDetail1}
              handleClick={handleShowFaqDetail}
              faqContent={faqContent}
            />
            <FaqContent
              caption="What is the cost of shipping to Lagos from Abuja?"
              showFaqDetail={showFaqDetail2}
              handleClick={handleShowFaqDetail2}
              faqContent={faqContent}
            />
            <FaqContent
              caption="What is the cost of shipping to Lagos from Abuja?"
              showFaqDetail={showFaqDetail3}
              handleClick={handleShowFaqDetail3}
              faqContent={faqContent}
            />
            <FaqContent
              caption="What is the cost of shipping to Lagos from Abuja?"
              showFaqDetail={showFaqDetail4}
              handleClick={handleShowFaqDetail4}
              faqContent={faqContent}
            />
            <FaqContent
              caption="What is the cost of shipping to Lagos from Abuja?"
              showFaqDetail={showFaqDetail5}
              handleClick={handleShowFaqDetail5}
              faqContent={faqContent}
            />
          </div>
          <div
            style={{
              padding: '20px',
              marginTop: '-10px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {testimonialHeading}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              padding: '0px 20px 40px 20px',
              gap: '20px',
            }}
          >
            {testimonialContent}
            {testimonialContent}
            {testimonialContent}
            {testimonialContent}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              margin: 0,
              padding: '20px',
              height: '570px',
              background: '#151515',
            }}
          >
            <ServicesFooter />
          </div>
        </>
      )}
      {tabletAndDesktop && (
        <>
          <div
            className={styles.monodomeServicesBg}
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              height: '280px',
            }}
          >
            <GeneralNav
              imgSrc="/img/monologservicelogo.png"
              handleAboutUsClick={() => router.push('/about')}
              handleServicesClick={() => router.push('/services')}
              handleFeaturesClick={() => router.push('/features')}
              handleContactClick={() => router.push('/contact')}
              setLogin={setLogin}
              setSignup={setSignup}
            />
            <AboutHeading />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              background: 'white',
              paddingBottom: '40px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '30px',
                marginTop: '20px',
                position: 'sticky',
              }}
            >
              <AboutSubHeading
                caption="Who we are?"
                handleClick={handleWhoAreWeClick}
                clicked={whoWeAre}
              />
              <AboutSubHeading
                caption="Our mission"
                handleClick={handleOurMissionClick}
                clicked={ourMissionStatus}
              />
              <AboutSubHeading
                caption="Our vision"
                handleClick={handleOurVisionClick}
                clicked={ourVisionStatus}
              />
              <AboutSubHeading
                caption="FAQ"
                handleClick={handleFaqClick}
                clicked={faq}
              />
              <AboutSubHeading
                caption="Testimonials"
                handleClick={handleTestimonialsClick}
                clicked={testimonials}
              />
            </div>
            <div
              ref={whoAreWeRef}
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                padding: '50px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '44%',
                }}
              >
                <Image
                  style={{
                    maxWidth: '100%',
                    width: '450px',
                  }}
                  src="/img/whoweare.png"
                  width="450"
                  height="400"
                  alt="whoweare"
                />
              </div>
              <div
                style={{
                  width: '52%',
                  display: 'flex',
                  flexDirection: 'column',
                  paddingLeft: '20px',
                }}
              >
                {whoWeAreHeading}
                <div>{whoWeAreContent}</div>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                padding: '50px',
              }}
            >
              <div
                style={{
                  width: '52%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  ref={ourMissionRef}
                  style={{
                    paddingLeft: '40px',
                  }}
                >
                  {ourMission}
                </div>
                <div
                  ref={ourVisionRef}
                  style={{
                    paddingLeft: '40px',
                    marginTop: '70px',
                  }}
                >
                  {ourVision}
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '44%',
                }}
              >
                <Image
                  style={{
                    maxWidth: '100%',
                    width: '450px',
                  }}
                  src="/img/aboutvision.png"
                  width="450"
                  height="400"
                  alt="whoweare"
                />
              </div>
            </div>
          </div>
          <div
            ref={faqRef}
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              padding: '30px 80px',
              background: '#F9F9F9',
            }}
          >
            {faqHeading}
            <FaqContent
              caption="What is the cost of shipping to Lagos from Abuja?"
              showFaqDetail={showFaqDetail1}
              handleClick={handleShowFaqDetail}
              faqContent={faqContent}
            />
            <FaqContent
              caption="What is the cost of shipping to Lagos from Abuja?"
              showFaqDetail={showFaqDetail2}
              handleClick={handleShowFaqDetail2}
              faqContent={faqContent}
            />
            <FaqContent
              caption="What is the cost of shipping to Lagos from Abuja?"
              showFaqDetail={showFaqDetail3}
              handleClick={handleShowFaqDetail3}
              faqContent={faqContent}
            />
            <FaqContent
              caption="What is the cost of shipping to Lagos from Abuja?"
              showFaqDetail={showFaqDetail4}
              handleClick={handleShowFaqDetail4}
              faqContent={faqContent}
            />
            <FaqContent
              caption="What is the cost of shipping to Lagos from Abuja?"
              showFaqDetail={showFaqDetail5}
              handleClick={handleShowFaqDetail5}
              faqContent={faqContent}
            />
          </div>
          <div
            ref={testimonialsRef}
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              padding: '5px 80px 30px 80px',
              background: '#F9F9F9',
            }}
          >
            {testimonialHeading}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '20px',
                width: '100%',
              }}
            >
              {desktop2 && (
                <>
                  {arrowLeft}
                  {testimonialContent}
                  {testimonialContent}
                  {testimonialContent}
                  {testimonialContent}
                  {arrowRight}
                </>
              )}
            </div>
            {tabletAndDesktop2 && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '20px',
                }}
              >
                <div>
                  {testimonialContent}
                  {testimonialContent}
                </div>
                <div>
                  {testimonialContent}
                  {testimonialContent}
                </div>
              </div>
            )}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              margin: 0,
              padding: '20px 80px',
              height: '350px',
              background: '#151515',
            }}
          >
            <ServicesFooter />
          </div>
          <Login login={login} setLogin={setLogin} setSignup={setSignup} />
          <Signup signup={signup} setSignup={setSignup} setLogin={setLogin} />
        </>
      )}
    </>
  );
}
