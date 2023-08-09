import { useState } from "react";
import styles from "./manager.module.css";
import ActionForm from "./actionForm";

export default function AvailableTruckBox({showModal, setTotalRevenue}){
    const [action, setAction] = useState();
    const [actionBox, setActionBox] = useState(false);
    const [dialogBox, setDialogBox] = useState(true);


    const showAssignBox = () => {
        const formContents = [
            <label key={'form'} className={styles.label}>Trucks&apos; name</label>,
            <input key={'form'} type="text" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Trucks&apos; number</label>,
            <input key={'form'} type="number" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Trucks location</label>,
            <input key={'form'} type="number" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Number of vans</label>,
            <input key={'form'} type="text" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Posting Date</label>,
            <input key={'form'} type="date" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Driver&apos;s Name</label>,
            <input key={'form'} type="text" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Driver&apos;s License</label>,
            <input key={'form'} type="number" className={styles.assigninput}/>,
        ]
        setAction(<ActionForm showModal={showModal} setActionBox={setActionBox} formContents={formContents} yesBtn='Assign Driver' noBtn='Cancel' message='This truck has been assigned to a driver successfully' />);
        setActionBox(true);
        setDialogBox(false);
    }
   
    const showReAssignBox = () => {
        const formContents = [
            <label key={'form'} className={styles.label}>Trucks&apos; name</label>,
            <input key={'form'} type="text" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Trucks&apos; number</label>,
            <input key={'form'} type="number" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Trucks location</label>,
            <input key={'form'} type="number" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Number of vans</label>,
            <input key={'form'} type="text" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Posting Date</label>,
            <input key={'form'} type="date" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Driver&apos;s Name</label>,
            <input key={'form'} type="text" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Driver&apos;s License</label>,
            <input key={'form'} type="number" className={styles.assigninput}/>,
        ]
        
        setAction(<ActionForm showModal={showModal} setActionBox={setActionBox} formContents={formContents} yesBtn='Reassign Driver' noBtn='Cancel' message='This truck has been reassigned to a driver successfully' />);
        setActionBox(true);
        setDialogBox(false);
    }
    const showRemoveBox = () => {
        const formContents = [
            <label key={'form'} className={styles.label}>Trucks&apos; name</label>,
            <input key={'form'} type="text" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Trucks&apos; number</label>,
            <input key={'form'} type="number" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Trucks location</label>,
            <input key={'form'} type="number" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Number of vans</label>,
            <input key={'form'} type="text" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Posting Date</label>,
            <input key={'form'} type="date" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Driver&apos;s Name</label>,
            <input key={'form'} type="text" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Driver&apos;s License</label>,
            <input key={'form'} type="number" className={styles.assigninput}/>,
        ]
        setAction(<ActionForm showModal={showModal} setActionBox={setActionBox} formContents={formContents} yesBtn='Remove Load' noBtn='Cancel' message='This truck has been removed from the driver successfully' />);
        setActionBox(true);
        setDialogBox(false);
    }
    const showSentBox = () => {
        const formContents = [
            <label key={'form'} className={styles.label}>Trucks&apos; name</label>,
            <input key={'form'} type="text" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Trucks&apos; number</label>,
            <input key={'form'} type="number" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Trucks location</label>,
            <input key={'form'} type="number" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Number of vans</label>,
            <input key={'form'} type="text" className={styles.assigninput}/>,
            <textarea key={'form'} type="text" className={styles.assigntextarea} rows={3} />
        ]
        setAction(<ActionForm showModal={showModal} setActionBox={setActionBox} formContents={formContents} yesBtn='Send Request' noBtn='Cancel' message='Your request to manage this truck has been sent to the GIG motors successfully' />);
        setActionBox(true);
        setDialogBox(false);
    }
    const showRemoveRequestBox = () => {
        const formContents = [
            <label key={'form'} className={styles.label}>Trucks&apos; name</label>,
            <input key={'form'} type="text" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Trucks&apos; number</label>,
            <input key={'form'} type="number" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Trucks location</label>,
            <input key={'form'} type="number" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Number of vans</label>,
            <input key={'form'} type="text" className={styles.assigninput}/>,
            <textarea key={'form'} type="text" className={styles.assigntextarea} rows={3} />
        ]
        setAction(<ActionForm showModal={showModal} setActionBox={setActionBox} formContents={formContents} yesBtn='Remove Request' noBtn='Cancel' message='Your request to not manage this truck has been sent to the GIG motors successfully' />);
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

            <button className={styles.button} onClick={showSentBox}><div></div>Send Request</button>
            <button className={styles.button} onClick={showRemoveRequestBox}><div></div>Remove Request</button>
            <button className={styles.button} onClick={() => setTotalRevenue(true)}><div></div>Get Total Revenue</button>
            
            
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