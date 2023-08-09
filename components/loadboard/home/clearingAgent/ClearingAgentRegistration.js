import GeneralModal from '@/components/modal/generalModal';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Heading from '../common/heading';
import Media from '@/utils/media';
import { FaTimes } from "react-icons/fa";
import ClearingAgentRegistrationMobile from './ClearingAgentRegistrationMobile';
import ClearingAgentRegistrationDesktop from './ClearingAgentRegistrationDesktop';

export default function ClearingAgentRegistration({clearingAgentRegistration, setClearingAgentRegistration}) {
  const [clearingForm, setClearingForm] = useState(false);
  const { mobile, tabletAndDesktop } = Media();

  const handleClearingForm = () => {
    setClearingForm(true);
  };

  return (
    <>
      <GeneralModal
          size="lg"
          show={clearingAgentRegistration}
          onHide={() => {
          setClearingAgentRegistration(false);
        }}
        /* style={props.style} */
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
              setClearingAgentRegistration(false);
            }}
            style={{
              position: 'absolute',
              top: '-1rem',
              right: '-0.8rem',
              cursor: 'pointer',
            }}
          >
            <FaTimes />
          </div>
          <Heading
            caption1="Clearing and Forwarding Agents registration"
            caption2={`You are registering as a transporter. A transporter has the ability to move goods or items around. That is they own one ormore vehicles. This can either be a business entity or an individual (freelancer).`}
          />
          {mobile && (
            <ClearingAgentRegistrationMobile
              clearingForm={clearingForm}
              setClearingForm={setClearingForm}
              handleClearingForm={handleClearingForm}
            />
          )}
          {tabletAndDesktop && (
            <ClearingAgentRegistrationDesktop 
              clearingForm={clearingForm}
              setClearingForm={setClearingForm}
              handleClearingForm={handleClearingForm}
            />
          )}
        </Modal.Body>
      </GeneralModal>
    </>
  )
}
