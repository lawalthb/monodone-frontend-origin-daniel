import {useState} from "react";
import styles from "./manager.module.css";
import Button from '@mui/material/Button';
import { SlOptions } from "react-icons/sl";


export default function ActionButton(props){
    const [openModal, setOpenModal] = useState(false);
    
    return (
       <>
        <div >
            <Button onClick={() => setOpenModal(true)} style={{color: "black"}}><SlOptions/></Button>
                <div>
                  <div className={styles.modal}>
                    {openModal && <props.Box setTotalRevenue={props.setTotalRevenue} showModal={setOpenModal}/>}
                  </div>
                </div>
        </div>
       </>
    )
}