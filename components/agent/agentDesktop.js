import Image from 'next/image';
import { useState } from 'react';
import AgentSidebar from './agentSidebar';
import AgentNavigationHeaderDesktop from './agentNavigationHeaderDesktop';
import PropTypes from 'prop-types';
import SettingsProfile from '../settings/settingsProfile';
import AgentHome from './agentHome';
import AgentOrders from './agentOrders';

export default function AgentDesktop(props) {
  const [parcelData, setParcelData] = useState();
  const [parcelOption, setParcelOption] = useState(false);
  console.log('parcel data', parcelData);

  return (
    <>
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
          }}
        >
          <div
            style={{
              display: 'flex',
              padding: '20px',
              width: '100%',
              height: '72px',
              background: 'linear-gradient(90deg, #00902F 0%, #7CC427 99.69%)',
            }}
          >
            <Image
              src="/img/agentlogo.png"
              height="20"
              width="140"
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
              height: '190vh',
              background: 'linear-gradient(90deg, #00902F 0%, #7CC427 99.69%)',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.06)',
            }}
          >
            <AgentSidebar
              home={props.home}
              setHome={props.setHome}
              orders={props.orders}
              setOrders={props.setOrders}
              wallet={props.wallet}
              setWallet={props.setWallet}
              settings={props.settings}
              setSettings={props.setSettings}
              handleHome={props.handleHome}
              handleOrders={props.handleOrders}
              handleWallet={props.handleWallet}
              handleSettings={props.handleSettings}
            />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '80%',
            height: '140vh',
            margin: 0,
          }}
        >
          <AgentNavigationHeaderDesktop />
          {props.settings && (
            <SettingsProfile
              user={props.user}
              setSettings={props.setSettings}
            />
          )}

          {props.home && (
            <AgentHome
              showAddNewAgent={props.showAddNewAgent}
              setShowAddNewAgent={props.setShowAddNewAgent}
              hideAgentHomeLayout={props.hideAgentHomeLayout}
              setHideAgentHomeLayout={props.setHideAgentHomeLayout}
              handleAddNewAgent={props.handleAddNewAgent}
              parcelData={parcelData}
              setParcelData={setParcelData}
              setOrders={props.setOrders}
              parcelOption={parcelOption}
              setParcelOption={setParcelOption}
              listOfParcel={props.listOfParcel}
              setListOfParcel={props.setListOfParcel}
              activeParcel={props.activeParcel}
              setActiveParcel={props.setActiveParcel}
              parcelForm={props.parcelForm}
              setParcelForm={props.setParcelForm}
            />
          )}

          {props.orders && (
            <AgentOrders setOrders={props.setOrders} parcelData={parcelData} />
          )}
        </div>
      </div>
    </>
  );
}

AgentDesktop.propType = {
  user: PropTypes.object,
  home: PropTypes.bool.isRequired,
  setHome: PropTypes.func.isRequired,
  orders: PropTypes.bool.isRequired,
  setOrders: PropTypes.func.isRequired,
  wallet: PropTypes.bool.isRequired,
  setWallet: PropTypes.func.isRequired,
  settings: PropTypes.bool.isRequired,
  setSettings: PropTypes.func.isRequired,
  handleHome: PropTypes.func.isRequired,
  handleOrders: PropTypes.func.isRequired,
  handleWallet: PropTypes.func.isRequired,
  handleSettings: PropTypes.func.isRequired,
};
