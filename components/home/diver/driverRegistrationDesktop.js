import HeaderSwitches from '../common/headerSwitches';
import CompanyDeskTop from './companyDeskTop';
import DriverOnlyDesktop from './driverOnlyDesktop';
import FreelancerDesktop from './freelancerDesktop';

export default function DriverRegistrationDesktop(props) {
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
          caption="Freelancer"
          freelancer={props.freelancer}
          setFreelancer={props.setFreelancer}
          handleFreelancer={props.handleFreelancer}
        />
        <HeaderSwitches
          caption="Company"
          company={props.company}
          setCompany={props.setCompany}
          handleCompany={props.handleCompany}
        />
        <HeaderSwitches
          caption="Drivers (ONLy)"
          drivers={props.drivers}
          setDrivers={props.setDrivers}
          handleDrivers={props.handleDrivers}
        />
      </div>
      {props.freelancer && <FreelancerDesktop />}
      {props.company && <CompanyDeskTop />}
      {props.drivers && <DriverOnlyDesktop />}
    </>
  );
}
