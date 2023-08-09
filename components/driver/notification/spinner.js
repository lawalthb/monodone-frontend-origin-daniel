import { useState } from 'react';
import styles from "./notification.module.css";

export default function Spinner(props){
    
    return (
        <div className={styles.spinner}>
            <div className={styles.loaderContainer}>
                <div className={styles.loader}>
                </div>
                <span className={styles.sending}>{props.msg ? props.msg : 'Sending Response'}</span>
            </div>
        </div>
    )
}
