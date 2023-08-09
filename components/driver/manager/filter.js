import { useState } from 'react';
import styles from "./filter.module.css";
import { MdTune } from "react-icons/md";
import FilterForm from './filterForm';

export default function Filter(props){
    const [filter, setFilter] = useState();
    const [isClicked, setIsClicked] = useState(false);

     const handleClick = () => {
         setFilter( isClicked ? null : <FilterForm filterForm={props.filterForm}/>);
         setIsClicked(!isClicked);
    };
     

    return (
        <>
        
        <div className={styles.absolute}>
        {filter}
        </div>
        <button className={styles.filter} onClick={handleClick}>
            <MdTune className={styles.filtericon}/>
            <p className={styles.filterhere}>Filter Here</p>
        </button>
        </>

    )

}