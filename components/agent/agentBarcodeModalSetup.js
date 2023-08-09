import Image from 'next/image';
import { Modal } from 'react-bootstrap';
import GeneralModal from '../modal/generalModal';

export default function AgentBarcodeModalSetup(props) {
  return (
    <GeneralModal
      size="md"
      show={props.agentBarcodeModalSetup}
      onHide={() => {
        props.setAgentBarcodeModalSetup(false);
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
            props.setAgentBarcodeModalSetup(false);
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
      </Modal.Body>
    </GeneralModal>
  );
}
