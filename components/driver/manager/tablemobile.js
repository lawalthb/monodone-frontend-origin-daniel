import { useState } from "react";
import styles from "./manager.module.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import ActionButton from "./actionButton";
import DriverBox from "./driverBox";
import AvailableDriverBox from "./availableDriverBox";
import AvailableTruckBox from "./availableTruckBox";
import OrderBox from "./orderBox";

export default function TableMobile(props){
    const [ viewMore, setViewMore ] = useState(false);
    
    const handleViewMore = () =>{
        setViewMore(!viewMore)
    }
    const row = props.row;
    return (
        <>
            <div className={styles.tablemobilerow}>
                <div onClick={handleViewMore} className={styles.tablemoblie_dropdown_btn}>
                    {viewMore ? 
                    <MdKeyboardArrowDown />
                    :
                    <MdKeyboardArrowUp />
                    }
                </div>
                <div className={styles.tablemobile_data}>
                    <div className={styles.tablemobile_data_row}>
                        <h5>
                            {props.table === 'drivers' && "Driver's Name"}
                            {props.table === 'availabledrivers' && "Driver's Name"}
                            {props.table === 'availabletrucks' && "Trucks' Name"}
                            {props.table === 'orders' && "Load Type"}
                        </h5>
                        <h5>
                            {props.table === 'drivers' && 
                                row.drivers_name
                            }
                            {props.table === 'availabledrivers' && 
                                row.drivers_name
                            }
                            {props.table === 'availabletrucks' && 
                                row.truck_name
                            }
                            {props.table === 'orders' && 
                                row.loadtype
                            }
                        </h5>
                    </div>
                    {viewMore &&
                    <>
                        <div className={styles.tablemobile_data_row}>
                            <h5>
                                {props.table === 'drivers' && "Driver's Location"}
                                {props.table === 'availabledrivers' && "Driver's Location"}
                                {props.table === 'availabletrucks' && "Trucks' Location"}
                                {props.table === 'orders' && "Delivery From:"}
                            </h5>
                            <h5>
                                {props.table === 'drivers' && row.drivers_location }
                                {props.table === 'availabledrivers' && row.drivers_location }
                                {props.table === 'availabletrucks' && row.truck_location }
                                {props.table === 'orders' && row.delivery_from }
                            </h5>
                        </div>
                        <div className={styles.tablemobile_data_row}>
                            <h5>
                                {props.table === 'drivers' && "No of Vans"}
                                {props.table === 'availabledrivers' && "No of Vans"}
                                {props.table === 'availabletrucks' && "No of Truck"}
                                {props.table === 'orders' && "Delivery To:"}
                            </h5>
                            <h5>
                                {props.table === 'drivers' && row.vans}
                                {props.table === 'availabledrivers' && row.vans}
                                {props.table === 'availabletrucks' && row.no_of_truck}
                                {props.table === 'orders' && row.delivery_to}
                            </h5>
                        </div>
                        <div className={styles.tablemobile_data_row}>
                            <h5>
                                {props.table === 'drivers' && "Loads Assigned"}
                                {props.table === 'availabledrivers' && "Request"}
                                {props.table === 'availabletrucks' && "Driver Assigned"}
                                {props.table === 'orders' && "Assigned To:"}
                            </h5>
                            <h5>
                                {props.table === 'drivers' && 
                                    row.loadtype
                                }
                                {props.table === 'availabledrivers' && row.request}
                                {props.table === 'availabletrucks' && 
                                    row.assigned_to
                                }
                                {props.table === 'orders' && 
                                    row.assigned_to
                                }
                            </h5>
                        </div>
                        <div className={styles.tablemobile_data_row}>
                            <h5>
                                {props.table === 'drivers' && "Status"}
                                {props.table === 'availabledrivers' && "Status"}
                                {props.table === 'availabletrucks' && "Status"}
                                {props.table === 'orders' && "Status"}
                            </h5>
                            <h5 className={styles[row.status]}>
                                {props.table === 'drivers' && row.status}
                                {props.table === 'availabledrivers' && row.status}
                                {props.table === 'availabletrucks' && row.status}
                                {props.table === 'orders' && row.status}
                            </h5>
                        </div>
                        <div className={styles.tablemobile_data_row}>
                            <h5>
                                {props.table === 'drivers' && "Action"}
                                {props.table === 'availabledrivers' && "Action"}
                                {props.table === 'availabletrucks' && "Action"}
                                {props.table === 'orders' && "Action"}
                            </h5>
                            <h5>
                                {props.table === 'drivers' && <ActionButton setTotalRevenue={props.setTotalRevenue} Box={DriverBox} />}
                                {props.table === 'availabledrivers' && <ActionButton Box={AvailableDriverBox} />}
                                {props.table === 'availabletrucks' && <ActionButton setTotalRevenue={props.setTotalRevenue} Box={AvailableTruckBox} />}
                                {props.table === 'orders' && <ActionButton Box={OrderBox} />}
                            </h5>
                        </div>
                    </>
                    }
                </div>
            </div>
        </>

    )

}