import Media from '@/utils/media';
import { useRouter } from 'next/router';
import NavContent from '../navigation/generalNav/navContent';
import Image from 'next/image';
import ServiceFurtherDetailsHeaderContent from '../services/serviceFurtherDetailsHeaderContent';
import { Button } from 'react-bootstrap';

export default function LoadboardDetailsHeader(props) {
  const router = useRouter();
  const { mobile, tabletAndDesktop } = Media();

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
              onClick={() => router.push('/')}
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
                    height: '250px',
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
                <ServiceFurtherDetailsHeaderContent caption="About Us" />
                <ServiceFurtherDetailsHeaderContent
                  caption="Services"
                  active={false}
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
                <Button
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    width: '104px',
                    height: '40px',
                    padding: '7px',
                    border: '1px solid rgba(0, 144, 47, 1)',
                    background: 'transparent',
                    color: 'black',
                    fontSize: '14px',
                  }}
                >
                  Login
                </Button>
                <Button
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    width: '104px',
                    height: '40px',
                    padding: '7px',
                    border: 'none',
                    background: 'rgba(0, 144, 47, 1)',
                    color: 'white',
                    fontSize: '14px',
                  }}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
