import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import styles from "./settings.module.css";
import {tablehead} from "../global/global.module.css";



const RequestAlertModal = (props) =>{

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
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            dialogClassName = {`${styles.w_450} ${styles.modal}`} 
            
        >

            <Modal.Body>
                <div className={styles.successModal}>
                    
                    {!props.header ? <h4 className={tablehead}></h4> : <h4 className={tablehead}>{props.header}</h4>}
                    {props.message && <p className="text-center">{props.message}</p>}
                    <p>{props.action && actionString(props.action) }</p>
                    
                    <Button variant='success' onClick={()=>props.onHide()} className="mt-4 w-100 ml-3 mr-3" >
                        Ok
                    </Button>

                </div>
            </Modal.Body>

        </Modal>
    );
}

export default RequestAlertModal;