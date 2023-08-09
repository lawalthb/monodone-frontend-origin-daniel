import { Button, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function RequestResponseModal({ show, onClose }) {
  return (
    <Modal backdrop="static" onHide={onClose} show={show} centered>
      <Modal.Header style={{ border: 'none' }}></Modal.Header>
      <Modal.Body
        style={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '20px',
          padding: '61px 106px',
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
            Your data has been confirmed by the moderator and changed. Except
            for the branch number, because it is not variable information.{' '}
          </p>
        </Modal.Title>
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

RequestResponseModal.propType = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
};
