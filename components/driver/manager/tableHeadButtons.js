import styles from "./filter.module.css";
import Image from "next/image";
import Link from 'next/link';
import { FaLuggageCart } from "react-icons/fa";
import Filter from "./filter";

export default function TableHeadButtons(props){
    return(
        <div className={styles.buttons}>
            <Filter filterForm={props.filterForm} />
            <button className={styles.load}>
                <FaLuggageCart className={styles.loadicon}/>
                <Link href="/loadboard" className={styles.viewload}>View Loadboard</Link>
            </button>
            <div className={styles.sort}>
                <h6>Sort by</h6>
                <select className={styles.sortinput}>
                    <option>Driver</option>
                    <option>Orders</option>
                </select>

            </div>
            <button className={styles.add}>
                <Image src="/img/plus.svg"
                       width="15" 
                       height="15"
                       alt="Plus Icon" 
                       className={styles.addicon}
                />
                <p className={styles.addadmin}>{ props.user == "superAdmin" ? "Add Admin" : "Post Load" }</p>
            </button>
        </div>
    )
}

 