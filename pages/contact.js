import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../components/services/service.module.css';
import Media from '@/utils/media';
import GeneralNav from '@/components/navigation/generalNav/generalNav';
import ContactHeading from '@/components/contact/contactHeading';
import Communication from '@/components/contact/communication';
import SevicesAppFeatures from '@/components/services/sevicesAppFeatures';
import ServiceOffices from '@/components/services/serviceOffices';
import ServicesFooter from '@/components/services/servicesFooter';
import Login from '@/components/login/login';
import Signup from '@/components/signup/signup';

export default function Contact(props) {
  const router = useRouter();
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const { mobile, tabletAndDesktop } = Media();

  return (
    <>
      <Head>
        <title>Mondome - Contact</title>
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
            <ContactHeading />
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
            <Communication />
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
            <ContactHeading />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              margin: 0,
              padding: '30px 50px',
            }}
          >
            <Communication />
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
              marginTop: '20px',
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
