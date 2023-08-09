import Image from 'next/image';
import { Button, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function RequestSentModal({ show, onClose }) {
  return (
    <Modal backdrop="static" onHide={onClose} show={show}>
      <Modal.Header closeButton style={{ border: 'none' }}></Modal.Header>
      <Modal.Body
        style={{
          height: '80vh',
          display: 'flex',
          flexDirection: 'column',
          rowGap: '20px',
          paddingInline: '80px',
          paddingBottom: '104px',
        }}
      >
        <Modal.Title
          style={{ fontFamily: 'Poppins', flexShrink: 0, textAlign: 'center' }}
        >
          <strong
            style={{
              fontSize: '20px',
              fontWeight: 600,
              display: 'block',
            }}
          >
            The request has been sent
          </strong>
          <p
            style={{
              margin: '10px 0 0',
              color: '#151515',
              fontWeight: 300,
              fontSize: '14px',
            }}
          >
            Wait for a response from the moderator about the changes
          </p>
        </Modal.Title>
        <div style={{ flex: 1, position: 'relative' }}>
          <Image
            src="/img/settings-profile-request-sent-icon.svg"
            alt=""
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
        <Button
          style={{ background: '#00902F', border: 'none' }}
          onClick={onClose}
        >
          Ok
        </Button>
      </Modal.Body>
    </Modal>
  );
}

RequestSentModal.propType = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
};
