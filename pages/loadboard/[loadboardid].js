import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import LoadboardDetailsHeader from '@/components/loadboard/loadboardDetailsHeader';
import Media from '@/utils/media';
import LoadboardDetailsBreadrumb from '@/components/loadboard/loadboardDetailsBreadrumb';
import Image from 'next/image';
import LoadboardDetailsCycle from '@/components/loadboard/loadboardDetailsCycle';
import LoadboardDetailsContent from '@/components/loadboard/loadboardDetailsContent';
import ServicesFooter from '@/components/services/servicesFooter';

const dataImages = [
  '/img/loadboardcarlg.png',
  '/img/loadboardfigurine.png',
  '/img/loadboardsofa.png',
  '/img/loadboardcar.png',
];

export default function LoadboardDetails(props) {
  const router = useRouter();
  const [dropdown, setDropdown] = useState(false);
  const [images, setImages] = useState(dataImages);
  const [index, setIndex] = useState(0);

  const { mobile, tabletAndDesktop } = Media();

  const handlePrevious = () => {
    if (index === 0) {
      return;
    }
    setIndex(index - 1);
  };

  const handleNext = () => {
    if (index === props.specificLoadboardData?.varieties.length - 1) {
      return;
    }
    setIndex(index + 1);
  };

  return (
    <>
      <Head>
        <title>Loadboard - Details</title>
        <meta name="description" content="Monodome" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {mobile && (
        <>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
            }}
          >
            <LoadboardDetailsHeader
              dropdown={dropdown}
              setDropdown={setDropdown}
            />
            <LoadboardDetailsBreadrumb
              caption1="Car Clearing"
              caption2="Car details"
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '10px 0px',
              }}
            >
              <Image
                style={{
                  width: '343px',
                  maxWidth: '100%',
                }}
                src={props.specificLoadboardData?.varieties[index]}
                width="342"
                height="198"
                alt="car"
              />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '10px 0px',
              }}
            >
              <LoadboardDetailsCycle
                index={index}
                handlePrevious={handlePrevious}
                images={props.specificLoadboardData?.varieties}
                setIndex={setIndex}
                handleNext={handleNext}
              />
            </div>
            <LoadboardDetailsContent
              specificLoadboardData={props.specificLoadboardData}
            />
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
          </div>
        </>
      )}
      {tabletAndDesktop && (
        <>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              height: '124px',
              background: 'white',
            }}
          >
            <LoadboardDetailsHeader />
            <LoadboardDetailsBreadrumb
              caption1={props.specificLoadboardData?.cargoTypeGrid}
              caption2={`${
                props.specificLoadboardData?.cargoTypeGrid.split(' ')[0]
              } details`}
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '10px 0px',
            }}
          >
            {props.specificLoadboardData?.varieties ? (
              <Image
                style={{
                  width: '1440px',
                  maxWidth: '100%',
                }}
                src={props.specificLoadboardData?.varieties[index]}
                width="1440"
                height="738"
                alt="car"
              />
            ) : (
              <Image
                style={{
                  width: '1440px',
                  maxWidth: '100%',
                }}
                src={props.specificLoadboardData?.cargotypeImgGrid}
                width="1440"
                height="738"
                alt="car"
              />
            )}
          </div>
          {props.specificLoadboardData?.varieties && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '10px 0px',
              }}
            >
              <LoadboardDetailsCycle
                index={index}
                handlePrevious={handlePrevious}
                images={props.specificLoadboardData?.varieties}
                setIndex={setIndex}
                handleNext={handleNext}
              />
            </div>
          )}
          <LoadboardDetailsContent
            specificLoadboardData={props.specificLoadboardData}
          />
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
    </>
  );
}

export async function getStaticPaths() {
  const { loadboardData } = await import('../../data.json');
  const pathsWithParams = loadboardData.map((data) => ({
    params: {
      loadboardid: data.id,
    },
  }));
  return {
    paths: pathsWithParams,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const loadboardID = context.params?.loadboardid;
  const { loadboardData } = await import('../../data.json');
  const foundLoadboard = loadboardData.find(
    (loadboard) => loadboardID === loadboard.id
  );

  if (!foundLoadboard) {
    return {
      props: { hasError: true },
    };
  }

  return {
    props: {
      specificLoadboardData: foundLoadboard,
      allData: loadboardData,
    },
  };
}
