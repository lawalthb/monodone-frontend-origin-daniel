import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import styles from './customerdashboard.module.css'
import { FcCheckmark } from 'react-icons/fc';

const SuccessModal = (props) => {

    const actionString = (action) => {
        return action
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            dialogClassName={`${styles.w_600} ${styles.modal}`}
        >
            <Modal.Body>
                <>
                    <span style={{ color: "#00902F", border: "#3F3F3F" }}>monodome</span>
                    <div className={styles.successModal} style={{ padding: "20px" }}>
                        <h4 className={styles.tablehead}>Successful!</h4>
                        <p>{props.action && actionString(props.action)}</p>
                        <div className={styles.circle_lg}>
                            <div className={styles.circle_md}>
                                <div className={styles.circle_sm}>
                                    <FcCheckmark className={styles.circleIcon} />

                                </div>
                            </div>
                        </div>
                        <Button variant='success' onClick={() => props.onHide()} className="mt-4 w-100 ml-3 mr-3" >
                            Ok
                        </Button>

                    </div>
                </>
            </Modal.Body>

        </Modal>
    );
}

export default SuccessModal;