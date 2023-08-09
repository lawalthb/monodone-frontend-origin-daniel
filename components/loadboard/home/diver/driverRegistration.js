import GeneralModal from '@/components/modal/generalModal';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import Heading from '../common/heading';
import Media from '@/utils/media';
import DriverRegistrationMobile from './driverRegistrationMobile';
import DriverRegistrationDesktop from './driverRegistrationDesktop';

export default function DriverRegistration(props) {
  const [freelancer, setFreelancer] = useState(false);
  const [company, setCompany] = useState(false);
  const [drivers, setDrivers] = useState(false);
  const { mobile, tabletAndDesktop } = Media();

  const handleFreelancer = () => {
    setFreelancer(true);
    setCompany(false);
    setDrivers(false);
  };

  const handleCompany = () => {
    setCompany(true);
    setFreelancer(false);
    setDrivers(false);
  };

  const handleDrivers = () => {
    setDrivers(true);
    setFreelancer(false);
    setCompany(false);
  };

  useEffect(() => {
    if (company) {
      setFreelancer(false);
      setDrivers(false);
    } else if (drivers) {
      setFreelancer(false);
      setCompany(false);
    } else {
      setFreelancer(true);
    }
  }, [company, drivers]);
  return (
    <>
      <GeneralModal
        size="lg"
        show={props.driverRegistration}
        onHide={() => {
          props.setDriverRegistration(false);
        }}
        style={props.style}
      >
        <Modal.Body
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            paddingBottom: '30px',
          }}
        >
          <div
            onClick={() => {
              props.setDriverRegistration(false);
            }}
            style={{
              position: 'absolute',
              top: '-1rem',
              right: '-0.8rem',
              cursor: 'pointer',
            }}
          >
            <Image src="/img/close.png" width="14" height="14" alt="close" />
          </div>
          <Heading
            caption1="Driver registration"
            caption2={`You are registering as a transporter. A transporter has the ability 
                    to move goods or items around. That is they own one ormore vehicles. 
                    This can either be a business entity or an individual (freelancer).`}
          />
          {mobile && (
            <DriverRegistrationMobile
              freelancer={freelancer}
              setFreelancer={setFreelancer}
              company={company}
              setCompany={setCompany}
              drivers={drivers}
              setDrivers={setDrivers}
              handleFreelancer={handleFreelancer}
              handleCompany={handleCompany}
              handleDrivers={handleDrivers}
            />
          )}
          {tabletAndDesktop && (
            <DriverRegistrationDesktop
              freelancer={freelancer}
              setFreelancer={setFreelancer}
              company={company}
              setCompany={setCompany}
              drivers={drivers}
              setDrivers={setDrivers}
              handleFreelancer={handleFreelancer}
              handleCompany={handleCompany}
              handleDrivers={handleDrivers}
            />
          )}
        </Modal.Body>
      </GeneralModal>
    </>
  );
}
