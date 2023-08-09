import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import ModalSuccess from './modalSuccess';
import styles from './modal.module.css';

export default function GeneralModal(props) {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  return (
    <>
      <div>
        <Modal
          {...props}
          size={props.size}
          aria-labelledby="contained-modal-title-vcenter"
          dialogClassName={styles.modal}
        >
          <Modal.Body>{props.children}</Modal.Body>
        </Modal>
        <ModalSuccess
          show={showSuccessModal}
          // action={props.action}
          onHide={() => setShowSuccessModal(false)}
        />
      </div>
    </>
  );
}
