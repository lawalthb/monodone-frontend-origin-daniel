import HeaderSwitches from '../common/headerSwitches';
import OfficeMobile from './OfficeMobile';
import StoreMobile from './StoreMobile';

export default function AgentRegistrationMobile({office, setOffice, store, setStore, handleOffice, handleStore}) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <HeaderSwitches
          caption="Office"
          office={office}
          setOffice={setOffice}
          handleOffice={handleOffice}
        />
        <HeaderSwitches
          caption="Store"
          store={store}
          setStore={setStore}
          handleStore={handleStore}
        />
      </div>
      {office && <OfficeMobile />}
      {store && <StoreMobile />}
    </>
  )
}
