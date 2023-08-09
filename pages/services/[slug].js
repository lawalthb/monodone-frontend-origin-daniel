import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../../components/services/service.module.css';
import Media from '@/utils/media';
import GeneralNav from '@/components/navigation/generalNav/generalNav';
import ServiceDetailsHeading from '@/components/services/serviceDetailsHeading';
import ServiceDetailsComp from '@/components/services/serviceDetailsComp';
import ServicesFurtherDetailsHeader from '@/components/services/servicesFurtherDetailsHeader';
import ServicesFooter from '@/components/services/servicesFooter';
import EstimatedShippingModal from '@/components/services/quotes/estimatedShippingModal';
import Login from '@/components/login/login';
import Signup from '@/components/signup/signup';

export default function ServiceDetails({
  specificServiceData,
  hasError,
  allData,
  estimatedShippingDetails,
}) {
  const [dropdown, setDropdown] = useState(false);
  const [furtherDetails, setFurtherDetails] = useState(false);
  const [getDomesticQuote, setDomesticQuote] = useState(false);
  const [getAbroadQuote, setGetAbroadQuote] = useState(false);
  const [inboundQuote, setInboundQuote] = useState(false);
  const [outboundQuote, setOutboundQuote] = useState(false);
  const [estimatedShippingModal, setEstimatedShippingModal] = useState(false);
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const router = useRouter();

  const handleInboundQuote = () => {
    setInboundQuote(true);
    setOutboundQuote(false);
  };

  const handleOutboundQuote = () => {
    setOutboundQuote(true);
    setInboundQuote(false);
  };

  const handleGetDomesticQuote = () => {
    setDomesticQuote(true);
    setGetAbroadQuote(false);
  };

  const handleGetAbroadQuote = () => {
    setGetAbroadQuote(true);
    setDomesticQuote(false);
  };

  if (hasError) {
    return <h1>Error - please try another parameter</h1>;
  }

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  const { mobile, tabletAndDesktop } = Media();
  return (
    <>
      <Head>
        <title>Mondome | Service Details</title>
        <meta name="description" content="Monodome" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {mobile && (
        <>
          {furtherDetails ? (
            <ServicesFurtherDetailsHeader
              dropdown={dropdown}
              setDropdown={setDropdown}
            />
          ) : (
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
                className={styles.monodomeServicesBgAdjusted}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  width: '100%',
                  height: '220px',
                }}
              >
                <ServiceDetailsHeading caption={specificServiceData.name} />
              </div>
            </>
          )}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              margin: 0,
              padding: '30px',
              background: 'white',
            }}
          >
            <ServiceDetailsComp
              allData={allData}
              specificServiceData={specificServiceData}
              furtherDetails={furtherDetails}
              setFurtherDetails={setFurtherDetails}
              getDomesticQuote={getDomesticQuote}
              setDomesticQuote={setDomesticQuote}
              getAbroadQuote={getAbroadQuote}
              setGetAbroadQuote={setGetAbroadQuote}
              handleGetDomesticQuote={handleGetDomesticQuote}
              handleGetAbroadQuote={handleGetAbroadQuote}
              inboundQuote={inboundQuote}
              setInboundQuote={setInboundQuote}
              outboundQuote={outboundQuote}
              setOutboundQuote={setOutboundQuote}
              handleInboundQuote={handleInboundQuote}
              handleOutboundQuote={handleOutboundQuote}
              setEstimatedShippingModal={setEstimatedShippingModal}
            />
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
          <EstimatedShippingModal
            estimatedShippingModal={estimatedShippingModal}
            setEstimatedShippingModal={setEstimatedShippingModal}
            estimatedShippingDetails={estimatedShippingDetails}
          />
        </>
      )}
      {tabletAndDesktop && (
        <>
          {furtherDetails ? (
            <ServicesFurtherDetailsHeader />
          ) : (
            <div
              className={styles.monodomeServicesBgAdjusted}
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
              <ServiceDetailsHeading caption={specificServiceData.name} />
            </div>
          )}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              margin: 0,
              padding: '30px',
              background: 'white',
            }}
          >
            <ServiceDetailsComp
              allData={allData}
              specificServiceData={specificServiceData}
              furtherDetails={furtherDetails}
              setFurtherDetails={setFurtherDetails}
              getDomesticQuote={getDomesticQuote}
              setDomesticQuote={setDomesticQuote}
              getAbroadQuote={getAbroadQuote}
              setGetAbroadQuote={setGetAbroadQuote}
              handleGetDomesticQuote={handleGetDomesticQuote}
              handleGetAbroadQuote={handleGetAbroadQuote}
              inboundQuote={inboundQuote}
              setInboundQuote={setInboundQuote}
              outboundQuote={outboundQuote}
              setOutboundQuote={setOutboundQuote}
              handleInboundQuote={handleInboundQuote}
              handleOutboundQuote={handleOutboundQuote}
              setEstimatedShippingModal={setEstimatedShippingModal}
            />
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
          <EstimatedShippingModal
            estimatedShippingModal={estimatedShippingModal}
            setEstimatedShippingModal={setEstimatedShippingModal}
            estimatedShippingDetails={estimatedShippingDetails}
          />
        </>
      )}
      <Login service='monolog' login={login} setLogin={setLogin} setSignup={setSignup} />
      <Signup service='monolog' signup={signup} setSignup={setSignup} setLogin={setLogin} />
    </>
  );
}

export async function getStaticPaths() {
  const { services } = await import('../../data.json');
  const pathsWithParams = services.map((service) => ({
    params: {
      slug: service.id,
    },
  }));
  return {
    paths: pathsWithParams,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const serviceID = context.params?.slug;
  const { services, estimatedShippingDetails } = await import(
    '../../data.json'
  );
  const foundService = services.find((service) => serviceID === service.id);

  if (!foundService) {
    return {
      props: { hasError: true },
    };
  }
  return {
    props: {
      specificServiceData: foundService,
      allData: services,
      estimatedShippingDetails: estimatedShippingDetails,
    },
  };
}
