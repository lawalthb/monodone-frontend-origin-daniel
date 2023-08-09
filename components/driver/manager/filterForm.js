import React from "react";
import styles from "./manager.module.css";

export default function FilterForm(props){
    
    return (
        <>
        <div className={styles.filterform}>
            <form className={styles.formfilter}  action="http://localhost:3001/driver/Orders">
                {props.filterForm && props.filterForm.map((form, index) => {
                    return(
                        <React.Fragment key={index}>{form}</React.Fragment>
                    )
                })
                }
            </form>
            
        </div>
        </>
    )
}