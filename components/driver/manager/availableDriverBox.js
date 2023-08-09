import { useState } from "react";
import styles from "./manager.module.css";
import ActionForm from "./actionForm";

export default function AvailableDriverBox({showModal}){
    const [action, setAction] = useState();
    const [actionBox, setActionBox] = useState(false);
    const [dialogBox, setDialogBox] = useState(true);


    const showSentBox = () => {
        const formContents = [
            <label key={'form'} className={styles.label}>Driver&apos;s Name</label>,
            <input key={'form'} type="text" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Driver&apos;s License</label>,
            <input key={'form'} type="number" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Drivers&apos; location</label>,
            <input key={'form'} type="text" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Number of vans</label>,
            <input key={'form'} type="text" className={styles.assigninput}/>,
            <textarea key={'form'} type="text" className={styles.assigntextarea} rows={3} />
        ]
        setAction(<ActionForm showModal={showModal} setActionBox={setActionBox} formContents={formContents} yesBtn='Send Request' noBtn='Cancel' message='Your request has successfully been sent' />);
        setActionBox(true);
        setDialogBox(false);
    }

    const showRemoveBox = () => {
        const formContents = [
            <label key={'form'} className={styles.label}>Driver&apos;s Name</label>,
            <input key={'form'} type="text" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Driver&apos;s License</label>,
            <input key={'form'} type="number" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Drivers&apos; location</label>,
            <input key={'form'} type="text" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Number of vans</label>,
            <input key={'form'} type="text" className={styles.assigninput}/>,
            <textarea key={'form'} type="text" className={styles.assigntextarea} rows={3} />
        ]
        setAction(<ActionForm showModal={showModal} setActionBox={setActionBox} formContents={formContents} yesBtn='Remove Request' noBtn='Cancel' message='Your request has successfully been Cancelled' />);
        setActionBox(true);
        setDialogBox(false);
    }
    
    return (
        <>
        {dialogBox &&
        <div className={styles.loaddialog}>
            <button className={styles.button} onClick={showSentBox}><div></div>Send Request</button>
            <button className={styles.button} onClick={showRemoveBox}><div></div>Remove Request</button>
            
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