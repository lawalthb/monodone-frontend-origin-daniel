import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { createContext, useState } from 'react';
import DriverSidebar from '../driverSidebar';
import Media from '@/utils/media';
import DriverNavigationHeaderDesktop from '../driverNavigationHeaderDesktop';
import DriverMobileHeader from '../driverMobileHeader';
import DriverNotification from '../notification';

export const driverLayoutContext = createContext();

export default function DriverLayout(props) {
  const router = useRouter();
  const [broadcast, setBroadcast] = useState(true);
  const [order, setOrder] = useState(false);
  const [wallet, setWallet] = useState(false);
  const [settings, setSettings] = useState(false);
  const [notification, setNotification] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const { mobile, tabletAndDesktop } = Media();

  const handleBroadcast = () => {
    setBroadcast(true);
    setOrder(false);
    setWallet(false);
    setSettings(false);
  };

  const handleOrder = () => {
    setOrder(true);
    setBroadcast(false);
    setWallet(false);
    setSettings(false);
  };

  const handleWallet = () => {
    setWallet(true);
    setBroadcast(false);
    setOrder(false);
    setSettings(false);
  };

  const handleSettings = () => {
    setSettings(true);
    setBroadcast(false);
    setOrder(false);
    setWallet(false);
  };

  const handleNotification = () =>{
    setNotification(!notification)
  }

  return (
    <>
      <Head>
        <title>Mondome - Driver {props.title ? props.title : ''}</title>
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
              background: 'white',
              // padding: '10px',
              height: '100vh',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                position: 'fixed',
                zIndex: 6,
                top: 0,
                left: 0,
              }}
            >
              {/* <DriverMobileHeader
                imgSrc="/img/driverbroadcast.png"
                imgWidth="32"
                imgHeight="32"
                caption="Broadcast"
                broadcast={broadcast}
                handleBroadcast={() => {
                  handleBroadcast();
                  router.push('/driver');
                }}
              />
              <DriverMobileHeader
                imgSrc="/img/driverorder.png"
                imgWidth="26"
                imgHeight="16"
                caption="Orders"
                order={order}
                handleOrder={() => {
                  handleOrder();
                  router.push('/driver/orders');
                }}
              />
              <DriverMobileHeader
                imgSrc="/img/driversettings.png"
                imgWidth="26"
                imgHeight="26"
                caption="Settings"
                settings={settings}
                handleSettings={() => {
                  handleSettings();
                  router.push('/driver/settings');
                }}
              /> */}
              <DriverNavigationHeaderDesktop handleNotification={handleNotification} setSideBar={() => setSideBar(!sideBar)} />
            </div>
            {notification ? <DriverNotification /> : props.children}
          </div>
          {sideBar &&
            <div 
            style={{
              position:'absolute',
              top: '72px',
              left: 0,
              display: 'flex',
              margin: 0,
              flexDirection: 'column',
              padding: '20px',
              width: '50%',
              height: '100vh',
              background:
                'linear-gradient(90deg, #00902F 0%, #7CC427 99.69%)',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.06)',
            }}
            >
              <DriverSidebar
                sideBarDetails={props.sideBarDetails}
                broadcast={broadcast}
                setBroadcast={setBroadcast}
                order={order}
                setOrder={setOrder}
                wallet={wallet}
                setWallet={setWallet}
                settings={settings}
                setSettings={setSettings}
                handleBroadcast={handleBroadcast}
                handleOrder={handleOrder}
                handleWallet={handleWallet}
                handleSettings={handleSettings}
              />
            </div>
          }
        </>
      )}
      {tabletAndDesktop && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            background: 'white',
          }}
        >
          <div
            style={{
              display: 'flex',
              margin: 0,
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '20%',
                margin: 0,
                position: 'fixed',
                zIndex: 2,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  padding: '20px',
                  justifyContent: "center",
                  alignItems: "center",
                  width: '100%',
                  height: '72px',
                  background:
                    'linear-gradient(90deg, #00902F 0%, #7CC427 99.69%)',
                }}
              >
                <Image
                  src="/img/agentlogo.png"
                  height="20"
                  width="120"
                  alt="logo"
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  margin: 0,
                  flexDirection: 'column',
                  padding: '20px',
                  width: '100%',
                  height: '100vh',
                  background:
                    'linear-gradient(90deg, #00902F 0%, #7CC427 99.69%)',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.06)',
                }}
              >
                <DriverSidebar
                  sideBarDetails={props.sideBarDetails}
                  broadcast={broadcast}
                  setBroadcast={setBroadcast}
                  order={order}
                  setOrder={setOrder}
                  wallet={wallet}
                  setWallet={setWallet}
                  settings={settings}
                  setSettings={setSettings}
                  handleBroadcast={handleBroadcast}
                  handleOrder={handleOrder}
                  handleWallet={handleWallet}
                  handleSettings={handleSettings}
                />
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '80%',
                margin: 0,
                marginLeft: '20%'
              }}
            >
              <DriverNavigationHeaderDesktop handleNotification={handleNotification} />
              {notification ? <DriverNotification /> : props.children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
