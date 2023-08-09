import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
import NavContent from './navContent';
import { Button } from 'react-bootstrap';

export default function DesktopNavigation(props) {
  const { data: session } = useSession();
  const [hasPullDown] = useState(true);
  const router = useRouter();
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '10px 50px',
          width: '100%',
          background: 'transparent',
        }}
      >
        <Image
          style={{
            maxWidth: '100%',
            width: '125px',
          }}
          src={props.imgSrc}
          width="135"
          height={props.name === 'home' ? '26' : '35'}
          alt="logo"
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '30px',
          }}
        >
          <NavContent
            handleClick={() => router.push('/')}
            caption="Home"
            nav={props.nav}
          />
          <NavContent
            handleClick={props.handleAboutUsClick}
            caption="About Us"
            nav={props.nav}
            hasPullDown={hasPullDown}
            imgSrc="/img/arrow-down.png"
          />
          <NavContent
            handleClick={props.handleServicesClick}
            caption="Services"
            nav={props.nav}
            hasPullDown={hasPullDown}
            imgSrc="/img/arrow-down.png"
          />
          <NavContent
            handleClick={props.handleFeaturesClick}
            caption="Our Features"
            nav={props.nav}
            hasPullDown={hasPullDown}
            imgSrc="/img/arrow-down.png"
          />
          <NavContent
            handleClick={() => router.push('/blog')}
            caption="Blog"
            nav={props.nav}
          />
          <NavContent
            handleClick={props.handleContactClick}
            caption="Contact Us"
            nav={props.nav}
          />
          {session?.user?.email ? (
            <Button
              onClick={() => signOut()}
              style={{
                width: '100px',
                background: 'transparent',
                border: '1px solid #00902F',
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
                onClick={() => props.setLogin(true)}
                style={{
                  width: '100px',
                  background: 'transparent',
                  border: '1px solid #00902F',
                  padding: '7px',
                  borderRadius: '6px',
                  color: 'white',
                }}
              >
                Login
              </Button>
              <Button
                onClick={() => props.setSignup(true)}
                style={{
                  width: '120px',
                  background: '#00902F',
                  border: '1px solid #00902F',
                  padding: '7px',
                  borderRadius: '6px',
                  color: 'white',
                }}
              >
                Sign Up
              </Button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
