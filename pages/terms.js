import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../components/terms/terms.module.css';
import Media from '@/utils/media';
import GeneralNav from '@/components/navigation/generalNav/generalNav';
import TermsAndConditionMobile from '@/components/terms/termsAndConditionMobile';
import FooterComp from '@/components/footer/footerComp';
import TermsAndConditionDesktop from '@/components/terms/termsAndConditionDesktop';
import Login from '@/components/login/login';
import Signup from '@/components/signup/signup';

export default function TermsAndConditions(props) {
  const router = useRouter();
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const { mobile, tabletAndDesktop } = Media();

  return (
    <>
      <Head>
        <title>Mondome - Terms and Condition</title>
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
            className={styles.termsMobileTopBg}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '220px',
              color: 'white',
              fontWeight: '700',
              fontSize: '19px',
            }}
          >
            Terms and Conditons
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
            <TermsAndConditionMobile />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'column',
              flexDirection: 'column',
              width: '100%',
              margin: 0,
              padding: '20px',
              background: '#151515',
            }}
          >
            <FooterComp />
          </div>
        </>
      )}
      {tabletAndDesktop && (
        <>
          <div
            className={styles.termsDesktopTopBg}
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
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
                alignItems: 'center',
                marginTop: '79px',
                color: 'white',
                fontWeight: '700',
                fontSize: '21px',
                marginBottom: '74px',
              }}
            >
              Terms and Conditions
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'column',
              flexDirection: 'column',
              width: '100%',
              margin: 0,
              padding: '42px 115px',
              background: 'white',
            }}
          >
            <TermsAndConditionDesktop />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'column',
              flexDirection: 'column',
              width: '100%',
              margin: 0,
              padding: '42px 115px',
              background: '#151515',
              height: '250px',
            }}
          >
            <FooterComp />
          </div>
          <Login login={login} setLogin={setLogin} setSignup={setSignup} />
          <Signup signup={signup} setSignup={setSignup} setLogin={setLogin} />
        </>
      )}
    </>
  );
}
