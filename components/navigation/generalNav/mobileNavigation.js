import { useRouter } from 'next/router';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
import { useState } from 'react';
import NavContent from './navContent';
import { Button } from 'react-bootstrap';

export default function MobileNavigation(props) {
  const { data: session } = useSession();
  const [hasPullDown] = useState(true);
  const router = useRouter();
  return (
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
                zIndex: 200,
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
              props.handleAboutUsClick();
              props.setDropdown(false);
            }}
            caption="About Us"
            hasPullDown={hasPullDown}
            imgSrc="/img/arrow-down.png"
          />
          <NavContent
            handleClick={() => {
              props.handleServicesClick();
              props.setDropdown(false);
            }}
            caption="Services"
            hasPullDown={hasPullDown}
            imgSrc="/img/arrow-down.png"
          />
          <NavContent
            handleClick={() => {
              props.handleFeaturesClick();
              props.setDropdown(false);
            }}
            caption="Our Features"
            hasPullDown={hasPullDown}
            imgSrc="/img/arrow-down.png"
          />
          <NavContent handleClick={() => router.push('/blog')} caption="Blog" />
          <NavContent
            handleClick={() => {
              props.handleContactClick();
              props.setDropdown(false);
            }}
            caption="Contact Us"
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            {session?.user?.email ? (
              <Button
                onClick={() => {
                  signOut();
                  props.setDropdown(false);
                }}
                style={{
                  width: '100px',
                  background: 'transparent',
                  border: '1px solid #d0d0d0',
                  padding: '7px',
                  borderRadius: '6px',
                  color: 'white',
                }}
              >
                Sign Out
              </Button>
            ) : (
              <>
                <Button
                  onClick={() => {
                    props.setLogin(true);
                    props.setDropdown(false);
                  }}
                  style={{
                    width: '100px',
                    background: 'transparent',
                    border: '1px solid #d0d0d0',
                    padding: '7px',
                    borderRadius: '6px',
                    color: 'white',
                  }}
                >
                  Login
                </Button>
                <Button
                  onClick={() => {
                    props.setSignup(true);
                    props.setDropdown(false);
                  }}
                  style={{
                    width: '120px',
                    background: '#d0d0d0',
                    border: 'none',
                    padding: '7px',
                    borderRadius: '6px',
                    color: 'black',
                  }}
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
