import { useState } from "react";
import styles from "./manager.module.css";
import Link from 'next/link';
import ActionForm from "./actionForm";

export default function OrderBox({showModal}){
    const [action, setAction] = useState();
    const [actionBox, setActionBox] = useState(false);
    const [dialogBox, setDialogBox] = useState(true);


    const showAssignBox = () => {
        const formContents = [
            <label key={'form'} className={styles.label}>Load type</label>,
            <select key={'form'} className={styles.select}>
                <option>Document</option>
                <option>Parcel</option>
            </select>,
            <label key={'form'} className={styles.label}>Posting Date</label>,
            <input key={'form'} type="date" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Posted by</label>,
            <input key={'form'} type="text" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Assign a driver</label>,
            <select key={'form'} className={styles.select}>
                <option>Emeka Okafor</option>
                <option>Parcel</option>
            </select>
        ]
        setAction(<ActionForm showModal={showModal} setActionBox={setActionBox} formContents={formContents} yesBtn='Assign Driver' noBtn='Cancel' message='The driver has been successfully assigned' />);
        setActionBox(true);
        setDialogBox(false);
    }
   
    const showReAssignBox = () => {
        const formContents = [
            <label key={'form'} className={styles.label}>Load type</label>,
            <select key={'form'} className={styles.select}>
                <option>Document</option>
                <option>Parcel</option>
            </select>,
            <label key={'form'} className={styles.label}>Posting Date</label>,
            <input key={'form'} type="date" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Posted by</label>,
            <input key={'form'} type="text" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Assign a driver</label>,
            <select key={'form'} className={styles.select}>
                <option>Emeka Okafor</option>
                <option>Parcel</option>
            </select>
        ]
        
        setAction(<ActionForm showModal={showModal} setActionBox={setActionBox} formContents={formContents} yesBtn='Reassign Driver' noBtn='Cancel' message='The driver has been successfully reassigned' />);
        setActionBox(true);
        setDialogBox(false);
    }
    const showRemoveBox = () => {
        const formContents = [
            <label key={'form'} className={styles.label}>Load type</label>,
            <select key={'form'} className={styles.select}>
                <option>Document</option>
                <option>Parcel</option>
            </select>,
            <label key={'form'} className={styles.label}>Posting Date</label>,
            <input key={'form'} type="date" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Posted by</label>,
            <input key={'form'} type="text" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Assign a driver</label>,
            <select key={'form'} className={styles.select}>
                <option>Emeka Okafor</option>
                <option>Parcel</option>
            </select>
        ]
        setAction(<ActionForm showModal={showModal} setActionBox={setActionBox} formContents={formContents} yesBtn='Remove Driver' noBtn='Cancel' message='The driver has been successfully removed' />);
        setActionBox(true);
        setDialogBox(false);
    }
    
    return (
        <>
        {dialogBox &&
        <div className={styles.loaddialog}>
            <button className={styles.button} onClick={showAssignBox}><div></div>Assign Driver</button>
            
            <button className={styles.button} onClick={showReAssignBox}><div></div>Reassign Driver</button>
            
            <button className={styles.button} onClick={showRemoveBox}><div></div>Remove Driver</button>
            
        </div>
        }
        {actionBox &&
            <div className={styles.assignformcomp}>
                {action}
            </div>
        }
        </>
    )
}