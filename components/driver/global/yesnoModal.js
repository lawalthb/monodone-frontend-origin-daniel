import React from 'react';
import { Modal } from 'react-bootstrap';
import styles from './global.module.css'
import { btnGroup, assignbutton, cancelassignbutton } from "../manager/manager.module.css"

const YesNoModal = (props) =>{

    const actionString=(action)=>{
        if(action === "Logout"){
            return "Are you sure you want to logout?";
        }
        else if(action === "Delete"){
            return "Are you sure you want to delete this account ? You might not be able to recover the account once deleted."
        }
       
    }

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            dialogClassName = {` ${styles.modal}`} 
            
        >

            <Modal.Body>
                <div className={styles.successModal} style={{alignItems: 'stretch'}}>
                    {!props.header  ? <h4 className={styles.tablehead}></h4> : <h4 className={styles.tablehead}>{props.header}</h4>}
                    {props.message && <p className={styles.modalMsg}>{props.message}</p>}
                    <p style={{margin: '0'}}>{props.action && actionString(props.action) }</p>
                    <div className={btnGroup}>
                        <button className={assignbutton} type="submit" onClick={()=> props.onyes ? props.onyes() : props.onHide()}>Yes, Continue</button>
                        <button className={cancelassignbutton} onClick={()=>props.onHide()}>No, Cancel</button>
                    </div>

                </div>
            </Modal.Body>

        </Modal>
    );
}

export default YesNoModal;