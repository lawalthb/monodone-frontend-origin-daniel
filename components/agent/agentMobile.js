import { useState } from 'react';
import AgentHomeMobile from './mobile/agentHomeMobile';
import AgentSettingsMobile from './mobile/agentSettingsMobile.';

export default function AgentMobile(props) {
  const [parcelData, setParcelData] = useState();
  console.log('parcel data', parcelData);
  return (
    <>
      {props.home && (
        <AgentHomeMobile
          showAddNewAgent={props.showAddNewAgent}
          setShowAddNewAgent={props.setShowAddNewAgent}
          hideAgentHomeLayout={props.hideAgentHomeLayout}
          setHideAgentHomeLayout={props.setHideAgentHomeLayout}
          handleAddNewAgent={props.handleAddNewAgent}
          listOfParcel={props.listOfParcel}
          setListOfParcel={props.setListOfParcel}
          activeParcel={props.activeParcel}
          setActiveParcel={props.setActiveParcel}
          parcelForm={props.parcelForm}
          setParcelForm={props.setParcelForm}
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
          mobileSidebar={props.mobileSidebar}
          setMobileSidebar={props.setMobileSidebar}
          parcelData={parcelData}
          setParcelData={setParcelData}
          parcelOption={props.parcelOption}
          setParcelOption={props.setParcelOption}
        />
      )}
      {props.settings && (
        <AgentSettingsMobile setSettings={props.setSettings} />
      )}
    </>
  );
}
