import React, { useState } from "react";
import styles from "./manager.module.css";
import SuccessModal from "../global/successModal";
import Spinner from "../notification/spinner";
import ErrorModal from "../global/errorModal";

export default function ActionForm(props){
    const [isLoading, setIsLoading] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [showForm, setShowForm] = useState(true);
    const [showErrorModal, setShowErrorModal] = useState(false);

    const formSubmit = (e) => {
        e.preventDefault();
        setShowForm(false)
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false)
            setIsLoaded(true)
            // setShowErrorModal(true)
        }, 3000)
    }

    const cancelAssign = (e) => {
        e.preventDefault();
        setShowForm(false)
        props.setActionBox(false)
        props.showModal(false)
    }
    
    return (
        <>
        {showForm &&
        <div className={styles.assigndriver} >
            <form className={styles.assignform} action="http://localhost:3001/driver/Orders">
                {props.formContents && props.formContents.map((content,index) => {
                    return (
                        <React.Fragment key={index}>{content}</React.Fragment>)
                    })
                }
                
                <div className={styles.btnGroup}>
                <button className={styles.assignbutton} type="submit" onClick={formSubmit}>{props.yesBtn && props.yesBtn}</button>
                <button className={styles.cancelassignbutton} onClick={cancelAssign}>{props.noBtn && props.noBtn}</button>
                </div>
            </form>
        </div>
        }
        
        <div>
            {isLoading ? <Spinner msg="Sending link" /> : ""}
        </div>
        <SuccessModal show={isLoaded} onHide={() => {props.setActionBox(false); props.showModal(false)}} message={props.message && props.message} />
        <ErrorModal show={showErrorModal} onHide={() => setShowErrorModal(false)} settings="Operation failed!" message="Sorry, this particular operation was not completed, due to some errors." />
        </>
    )
}