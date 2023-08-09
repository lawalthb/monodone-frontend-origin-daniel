import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../../components/services/service.module.css';
import { Button } from 'react-bootstrap';
import Media from '@/utils/media';
import GeneralNav from '@/components/navigation/generalNav/generalNav';
import ServicesMonologMobile from '@/components/services/servicesMonologMobile';
import WhyShipping from '@/components/services/whyShipping';
import ServicesMonolog from '@/components/services/servicesMonolog';
import SevicesAppFeatures from '@/components/services/sevicesAppFeatures';
import ServiceOffices from '@/components/services/serviceOffices';
import Partners from '@/components/partners/partners';
import ServicesFooter from '@/components/services/servicesFooter';
import Login from '@/components/login/login';
import Signup from '@/components/signup/signup';
import ServiceTrack from '@/components/services/common/serviceTrack';

export default function Services({ services }) {
  const router = useRouter();
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [serviceTrack, setServiceTrack] = useState(false);
  const { mobile, tabletAndDesktop } = Media();

  return (
    <>
      <Head>
        <title>Mondome - Services</title>
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
            className={styles.monodomeServicesBgtop}
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              width: '100%',
              height: '220px',
            }}
          >
            <input
              style={{
                fontSize: '12px',
                color: '#A6A6A6',
                padding: '7px 30px',
                border: 'none',
                borderRadius: '6px',
                width: '85%',
                marginTop: '79px',
              }}
              type="text"
              placeholder="Input tracking ID to track"
            />
            <Image
              style={{
                marginTop: '-28px',
                marginRight: 'auto',
                marginLeft: '9%',
                zIndex: 100,
              }}
              src="/img/searchtrack.png"
              width="16"
              height="16"
              alt="search"
            />
            <Button
              onClick={() => setServiceTrack(true)}
              style={{
                color: 'white',
                background: '#00902F',
                border: 'none',
                width: '104px',
                marginLeft: 'auto',
                marginRight: '10%',
                height: '30px',
                fontSize: '12px',
                fontWeight: 600,
                marginTop: '-23px',
              }}
            >
              Track
            </Button>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'column',
              flexDirection: 'column',
              width: '100%',
              margin: 0,
              padding: '20px',
              background: 'white',
            }}
          >
            <ServicesMonologMobile services={services} />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'column',
              flexDirection: 'column',
              width: '100%',
              margin: 0,
              padding: '10px 20px',
              background: 'white',
            }}
          >
            <WhyShipping />
          </div>
          <div
            className={styles.monodomeServicesBg}
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              margin: 0,
              padding: '30px 20px',
              height: '380px',
              marginTop: '30px',
            }}
          >
            <SevicesAppFeatures />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              margin: 0,
              padding: '20px',
            }}
          >
            <ServiceOffices />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              margin: 0,
              padding: '20px',
            }}
          >
            <Partners caption1="Monolog" caption2="Partners" />
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
            className={styles.monodomeServicesBgAdjusted}
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              height: '700px',
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
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                marginTop: '200px',
                marginLeft: '30%',
              }}
            >
              <input
                style={{
                  fontSize: '12px',
                  color: '#A6A6A6',
                  padding: '7px 30px',
                  border: 'none',
                  borderRadius: '6px',
                  width: '60%',
                }}
                type="text"
                placeholder="Input tracking ID to track"
              />
              <Image
                style={{
                  marginTop: '-28px',
                  marginLeft: '8px',
                }}
                src="/img/searchtrack.png"
                width="16"
                height="16"
                alt="search"
              />
              <Button
                onClick={() => setServiceTrack(true)}
                style={{
                  color: 'white',
                  background: '#00902F',
                  border: 'none',
                  width: '104px',
                  marginLeft: 'auto',
                  marginRight: '41%',
                  height: '30px',
                  fontSize: '12px',
                  fontWeight: 600,
                  marginTop: '-23px',
                }}
              >
                Track
              </Button>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              margin: 0,
              padding: '42px 80px',
            }}
          >
            <ServicesMonolog services={services} />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              margin: 0,
              padding: '10px 80px',
            }}
          >
            <WhyShipping />
          </div>
          <div
            className={styles.monodomeServicesBg}
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              margin: 0,
              padding: '10px 80px',
              height: '440px',
              marginTop: '30px',
            }}
          >
            <SevicesAppFeatures />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              margin: 0,
              padding: '10px 80px',
            }}
          >
            <ServiceOffices />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              margin: 0,
              padding: '10px 80px',
              marginTop: '20px',
            }}
          >
            <Partners caption1="Monolog" caption2="Partners" />
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
        </>
      )}
      <Login service='monolog' login={login} setLogin={setLogin} setSignup={setSignup} />
      <Signup service='monolog' signup={signup} setSignup={setSignup} setLogin={setLogin} />
      <ServiceTrack
        serviceTrack={serviceTrack}
        setServiceTrack={setServiceTrack}
      />
    </>
  );
}

export async function getStaticProps() {
  const { services } = await import('../../data.json');

  return {
    props: { services },
  };
}
