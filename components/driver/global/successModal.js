import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import styles from "./global.module.css"
import { FcCheckmark } from 'react-icons/fc';
import Image from 'next/image';



const SuccessModal = (props) =>{

    const actionString=(action)=>{
        if(action === "Assign"){
            return "The order has been successfully assigned to the driver"
        }
        else if(action === "Reassign"){
            return "The order has been successfully reassigned to a new driver"

        }
        else{
            return "The order has been successfully removed from the driver"

        }
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            dialogClassName = {`${styles.w_600} ${styles.modal}`} 
            
        >

            <Modal.Body>
                <div className={styles.successModal}>
                    <div className={styles.closeModal}>
                        <Image
                            onClick={() => {
                                props.onHide()
                            }}
                            src="/img/closeblack.png"
                            width="16"
                            height="16"
                            alt="points"
                        />
                    </div>
                    {!props.settings && <Image width={67} height={44} src='/img/logoicon.png' alt='user' />}
                    {!props.settings ? <h4 className={styles.tablehead}>Successful!</h4> : <h4 className={styles.tablehead}>{props.settings}</h4>}
                    {props.message && <p className={styles.modalMsg}>{props.message}</p>}
                    <p>{props.action && actionString(props.action) }</p>
                    <div className={styles.circle_lg}>
                        <div className={styles.circle_md}>
                            <div className={styles.circle_sm}>
                                    <FcCheckmark className={styles.circleIcon}/>
                            </div>
                        </div>
                    </div>
                    <Button variant='success' onClick={()=>props.onHide()} className="mt-4 w-100 ml-3 mr-3" >
                        Ok
                    </Button>

                </div>
            </Modal.Body>

        </Modal>
    );
}

export default SuccessModal;