import Image from 'next/image';
import { useEffect, useState } from 'react';
import DriverSidebarContent from './driverSidebarContent';
import { Form } from 'react-bootstrap';
import YesNoModal from './global/yesnoModal';

export default function DriverSidebar(props) {
  const {
    order,
    wallet,
    settings,
    setBroadcast,
    setWallet,
    setSettings,
    setOrder,
  } = props;
  
  const [section, setSection] = useState('Broadcast')
  const [logout, setLogout] = useState(false)

  // useEffect(() => {
  //   if (order) {
  //     setBroadcast(false)
  //     setWallet(false)
  //     setSettings(false)
  //   } else if (wallet) {
  //     setBroadcast(false)
  //     setOrder(false)
  //     setSettings(false)
  //   } else if (settings) {
  //     setBroadcast(false)
  //     setOrder(false)
  //     setWallet(false)
  //   } else {
  //     setBroadcast(true)
  //   }
  // }, [order, wallet, settings, setSettings, setBroadcast, setOrder, setWallet])

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '40px',
          padding: '10px 20px',
        }}
      >
        {props.sideBarDetails && 
          props.sideBarDetails.map((details, index) => {
            if(details){
            return(
              <DriverSidebarContent
                key={index}
                imgSrc={details.imgSrc}
                caption={details.caption}
                imgWidth={details.imgWidth}
                imgHeight={details.imgHeight}
                target={details.target}
                section={section}
                handleSection={setSection}
                route={details.route}
              />
            )
            }
          })
        }
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            paddingTop: '20px',
            marginTop: '150px',
          }}
        >
          <hr
            style={{
              color: 'white',
            }}
          />
          <div
            onClick={() => setLogout(true)}
            style={{
              display: 'flex',
            }}
          >
            <Image
              style={{
                cursor: 'pointer',
              }}
              src="/img/logout1.png"
              width="20"
              height="20"
              alt="shopping"
            />
            <Form.Label
              style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '14px',
                color: 'white',
                marginLeft: '20px',
                cursor: 'pointer',
              }}
            >
              Logout
            </Form.Label>
          </div>
        </div>
        <YesNoModal show={logout} onHide={() => {setLogout(false)}} message='Are you sure you want to logout ?' />
      </div>
    </>
  );
}
