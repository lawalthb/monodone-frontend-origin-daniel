import { useState } from "react";
import styles from "./manager.module.css";
import ActionForm from "./actionForm";

export default function DriverBox({showModal, setTotalRevenue}){
    const [action, setAction] = useState();
    const [actionBox, setActionBox] = useState(false);
    const [dialogBox, setDialogBox] = useState(true);


    const showAssignBox = () => {
        const formContents = [
            <label key={'form'} className={styles.label}>Driver&apos;s Name</label>,
            <input key={'form'} type="text" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Driver&apos;s License</label>,
            <input key={'form'} type="number" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Load type</label>,
            <select key={'form'} className={styles.select}>
                <option>Document</option>
                <option>Parcel</option>
            </select>,
            <label key={'form'} className={styles.label}>Posted by</label>,
            <input key={'form'} type="text" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Posting Date</label>,
            <input key={'form'} type="date" className={styles.assigninput}/>
        ]
        setAction(<ActionForm showModal={showModal} setActionBox={setActionBox} formContents={formContents} yesBtn='Assign load' noBtn='Cancel' message='The order has been successfully assigned to the driver' />);
        setActionBox(true);
        setDialogBox(false);
    }
   
    const showReAssignBox = () => {
        const formContents = [
            <label key={'form'} className={styles.label}>Driver&apos;s Name</label>,
            <input key={'form'} type="text" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Driver&apos;s License</label>,
            <input key={'form'} type="number" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Load type</label>,
            <select key={'form'} className={styles.select}>
                <option>Document</option>
                <option>Parcel</option>
            </select>,
            <label key={'form'} className={styles.label}>Posted by</label>,
            <input key={'form'} type="text" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Posting Date</label>,
            <input key={'form'} type="date" className={styles.assigninput}/>
        ]
        
        setAction(<ActionForm showModal={showModal} setActionBox={setActionBox} formContents={formContents} yesBtn='Reassign load' noBtn='Cancel' message='The order has been successfully reassigned to a new driver' />);
        setActionBox(true);
        setDialogBox(false);
    }
    const showRemoveBox = () => {
        const formContents = [
            <label key={'form'} className={styles.label}>Driver&apos;s Name</label>,
            <input key={'form'} type="text" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Driver&apos;s License</label>,
            <input key={'form'} type="number" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Load type</label>,
            <select key={'form'} className={styles.select}>
                <option>Document</option>
                <option>Parcel</option>
            </select>,
            <label key={'form'} className={styles.label}>Posted by</label>,
            <input key={'form'} type="text" className={styles.assigninput}/>,
            <label key={'form'} className={styles.label}>Posting Date</label>,
            <input key={'form'} type="date" className={styles.assigninput}/>
        ]
        setAction(<ActionForm showModal={showModal} setActionBox={setActionBox} formContents={formContents} yesBtn='Remove Load' noBtn='Cancel' message='The order has been successfully reassigned to a new driver' />);
        setActionBox(true);
        setDialogBox(false);
    }
    
    return (
        <>
        {dialogBox &&
        <div className={styles.loaddialog}>
            <button className={styles.button} onClick={showAssignBox}><div></div>Assign Load</button>
            
            <button className={styles.button} onClick={showReAssignBox}><div></div>Reassign Load</button>
            
            <button className={styles.button} onClick={showRemoveBox}><div></div>Remove Load</button>
            
            <button className={styles.button} onClick={() => setTotalRevenue(true)} ><div></div>
              Get Total Revenue
            </button>
            
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