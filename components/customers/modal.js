import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import styles from "./customerdashboard.module.css";
import ModalSuccess from "./modalSuccess";

const GeneralModal = (props) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = () => {
    setShowSuccessModal(true);
    props.onHide();
  };

  return (
    <div>
      <Modal
        {...props}
        size={props.size}
        aria-labelledby="contained-modal-title-vcenter"
        dialogClassName={styles.modal}
      >
        <Modal.Body>
            {props.children}
          
        </Modal.Body>
      </Modal>
      <ModalSuccess
        show={showSuccessModal}
        // action={props.action}
        onHide={() => setShowSuccessModal(false)}
      />
    </div>
  );
};

export default GeneralModal;
