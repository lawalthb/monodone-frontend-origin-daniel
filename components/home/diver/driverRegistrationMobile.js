import HeaderSwitches from '../common/headerSwitches';
import CompanyMobile from './companyMobile';
import DriverOnlyMobile from './driverOnlyMobile';
import FreelancerMobile from './freelancerMobile';

export default function DriverRegistrationMobile(props) {
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
      {props.freelancer && <FreelancerMobile />}
      {props.company && <CompanyMobile />}
      {props.drivers && <DriverOnlyMobile />}
    </>
  );
}
