import HeaderSwitches from '../common/headerSwitches';
import DriverManagerDesktop from './DriverManagerDesktop';
import TruckOnlyDesktop from './TruckOnlyDesktop';

export default function BusinessRegistrationDesktop({driverManager, setDriverManager, truckOnly, setTruckOnly, handleDriverManager, handleTruckOnly}) {
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
          caption="Driver Manager"
          driverManager={driverManager}
          setDriverManager={setDriverManager}
          handleDriverManager={handleDriverManager}
        />
        <HeaderSwitches
          caption="Truck (ONLY)"
          truckOnly={truckOnly}
          setTruckOnly={setTruckOnly}
          handleTruckOnly={handleTruckOnly}
        />
      </div>
      {driverManager && <DriverManagerDesktop />}
      {truckOnly && <TruckOnlyDesktop />}
    </>
  )
}
