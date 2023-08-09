import Media from '@/utils/media';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ServiceFurtherDetailsHeaderContent from './serviceFurtherDetailsHeaderContent';
import NavContent from '../navigation/generalNav/navContent';

export default function ServicesFurtherDetailsHeader(props) {
  const [active, setActive] = useState(false);
  const [hasPullDown] = useState(true);
  const router = useRouter();
  const { mobile, tabletAndDesktop } = Media();

  useEffect(() => {
    if (/services/.test(window.location.href)) {
      setActive(true);
    }
  }, []);
  return (
    <>
      {mobile && (
        <>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              height: '80px',
              background: 'white',
              margin: 0,
              padding: '20px',
              zIndex: 100,
            }}
          >
            <Image
              style={{
                maxWidth: '100%',
                width: '40px',
                marginTop: '6px',
              }}
              src="/img/success-logo.png"
              width="40"
              height="30"
              alt="logo"
            />
            <Image
              onClick={() => props.setDropdown((prevState) => !prevState)}
              style={{
                maxWidth: '100%',
                width: '20px',
                marginTop: '6px',
              }}
              src={props.dropdown ? '/img/close.png' : '/img/hamburger1.png'}
              width="20"
              height="15"
              alt="logo"
            />
          </div>
          <div
            style={
              props.dropdown
                ? {
                    display: 'block',
                    position: 'absolute',
                    width: '100%',
                    background: '#03045E',
                    top: '80px',
                    height: '300px',
                    zIndex: 100,
                    padding: '20px',
                  }
                : {
                    display: 'none',
                  }
            }
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <NavContent handleClick={() => router.push('/')} caption="Home" />
              <NavContent
                handleClick={() => {
                  router.push('/about');
                  props.setDropdown(false);
                }}
                caption="About Us"
              />
              <NavContent
                handleClick={() => {
                  router.push('/services');
                  props.setDropdown(false);
                }}
                caption="Services"
                hasPullDown={hasPullDown}
                imgSrc="/img/arrow-down.png"
              />
              <NavContent
                handleClick={() => {
                  router.push('/blog');
                  props.setDropdown(false);
                }}
                caption="Blog"
              />
              <NavContent
                handleClick={() => {
                  router.push('/contact');
                  props.setDropdown(false);
                }}
                caption="Contact Us"
              />
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
              margin: 0,
              padding: '10px 30px',
              background: 'white',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                height: '72px',
                padding: '10px 20px',
              }}
            >
              <Image
                style={{
                  maxWidth: '100%',
                  width: '154px',
                }}
                src="/img/furtherservicelogo.png"
                width="150"
                height="35"
                alt="logo"
              />
              <div
                style={{
                  display: 'flex',
                  gap: '20px',
                }}
              >
                <ServiceFurtherDetailsHeaderContent caption="Home" />
                <ServiceFurtherDetailsHeaderContent caption="About Us" />
                <ServiceFurtherDetailsHeaderContent
                  caption="Services"
                  active={active}
                />
                <ServiceFurtherDetailsHeaderContent caption="Blog" />
                <ServiceFurtherDetailsHeaderContent caption="Contact Us" />
              </div>
              <div
                style={{
                  display: 'flex',
                  gap: '20px',
                }}
              >
                <Image
                  style={
                    {
                      // marginTop: '5px',
                    }
                  }
                  src="/img/serviceprofile.png"
                  width="30"
                  height="30"
                  alt="arrow"
                />
                <Image
                  style={{
                    marginTop: '6px',
                  }}
                  src="/img/hamburger1.png"
                  width="20"
                  height="15"
                  alt="hamburger"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
