import React from "react";
import styles from "./manager.module.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Image from "next/image";
import ActionButton from "./actionButton";
import DriverBox from "./driverBox";
import OrderBox from "./orderBox";
import AvailableDriverBox from "./availableDriverBox";
import AvailableTruckBox from "./availableTruckBox";
import Media from "@/utils/media";
import TableMobile from "./tablemobile";
import { MdKeyboardArrowDown, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function DriversTable(props){
    const { mobile, tabletAndDesktop } = Media();

    return (
        <>
            {tabletAndDesktop && 
            <TableContainer component={Paper} className={styles.table}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead style={{borderBottom: 'none'}}>
                    <TableRow>
                        <TableCell align="left" className={styles.tablecellhead}>
                            {props.table === 'drivers' && "Driver's Name"}
                            {props.table === 'availabledrivers' && "Driver's Name"}
                            {props.table === 'availabletrucks' && "Trucks' Name"}
                            {props.table === 'orders' && "Load Type"}
                        </TableCell>
                        <TableCell align="left" className={styles.tablecellhead}>
                            {props.table === 'drivers' && "Driver's Location"}
                            {props.table === 'availabledrivers' && "Driver's Location"}
                            {props.table === 'availabletrucks' && "Trucks' Location"}
                            {props.table === 'orders' && "Delivery From:"}
                        </TableCell>
                        <TableCell align="left" className={styles.tablecellhead}>
                            {props.table === 'drivers' && "No of Vans"}
                            {props.table === 'availabledrivers' && "No of Vans"}
                            {props.table === 'availabletrucks' && "No of Truck"}
                            {props.table === 'orders' && "Delivery To:"}
                        </TableCell>
                        <TableCell align="left" className={styles.tablecellhead}>
                            {props.table === 'drivers' && "Loads Assigned"}
                            {props.table === 'availabledrivers' && "Request"}
                            {props.table === 'availabletrucks' && "Driver Assigned"}
                            {props.table === 'orders' && "Assigned To:"}
                        </TableCell>
                        <TableCell align="left" className={styles.tablecellhead}></TableCell>
                        <TableCell align="left" className={styles.tablecellhead}>
                            {props.table === 'drivers' && "Action"}
                            {props.table === 'availabledrivers' && "Action"}
                            {props.table === 'availabletrucks' && "Action"}
                            {props.table === 'orders' && "Action"}
                        </TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {props.rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className={styles.tablecelldata}> 
                                {props.table === 'drivers' && 
                                    <span className={styles.flex}>
                                        <Image width={25} height={25} alt='user' src='/img/user.png' className={styles.doclogo} />
                                        <span>
                                            <h5>{row.drivers_name}</h5>
                                            <p>{row.phone_no}</p>
                                        </span>
                                    </span>
                                }
                                {props.table === 'availabledrivers' && 
                                    <span className={styles.flex}>
                                        <Image width={25} height={25} alt='user' src='/img/user.png' className={styles.doclogo} />
                                        <span>
                                            <h5>{row.drivers_name}</h5>
                                            <p>{row.phone_no}</p>
                                        </span>
                                    </span>
                                }
                                {props.table === 'availabletrucks' && 
                                    <>
                                        <Image src="/img/document.png"
                                            alt="Document logo"
                                            width="25"
                                            height="25"
                                        className={styles.doclogo}/>
                                        {row.truck_name}
                                    </>
                                }
                                {props.table === 'orders' && 
                                    <>
                                        <Image src="/img/document.png"
                                            alt="Document logo"
                                            width="25"
                                            height="25"
                                        className={styles.doclogo}/>
                                        {row.loadtype}
                                    </>
                                }
                            </TableCell>
                            <TableCell className={styles.tablecelldata} align="left">
                                {props.table === 'drivers' && row.drivers_location }
                                {props.table === 'availabledrivers' && row.drivers_location }
                                {props.table === 'availabletrucks' && row.truck_location }
                                {props.table === 'orders' && row.delivery_from }
                            </TableCell>
                            <TableCell className={styles.tablecelldata} align="left">
                                {props.table === 'drivers' && row.vans}
                                {props.table === 'availabledrivers' && row.vans}
                                {props.table === 'availabletrucks' && row.no_of_truck}
                                {props.table === 'orders' && row.delivery_to}
                            </TableCell>
                            <TableCell className={styles.tablecelldata} align="left">
                                {props.table === 'drivers' && 
                                    <>
                                        <Image src="/img/document.png"
                                            alt="Document logo"
                                            width="25"
                                            height="25"
                                        className={styles.doclogo}/>
                                        {row.loadtype}
                                    </>
                                }
                                {props.table === 'availabledrivers' && row.request}
                                {props.table === 'availabletrucks' && 
                                    <span className={styles.flex}>
                                        <Image width={25} height={25} alt='user' src='/img/user.png' className={styles.doclogo} />
                                        <span>
                                            <h5>{row.assigned_to}</h5>
                                            <p>{row.phone_no}</p>
                                        </span>
                                    </span>
                                }
                                {props.table === 'orders' && 
                                    <span className={styles.flex}>
                                        <Image width={25} height={25} alt='user' src='/img/user.png' className={styles.doclogo} />
                                        <span>
                                            <h5>{row.assigned_to}</h5>
                                            <p>{row.phone_no}</p>
                                        </span>
                                    </span>
                                }
                            </TableCell>
                            <TableCell className={styles.tablecelldata} align="left">
                                {row.status == "approved" && 
                                    <Image src="/img/approved.png"
                                    alt="Approval Icon"
                                    width="25"
                                    height="25"
                                    className={styles.statusicon}
                                    />
                                }
                                {row.status == "pending" && 
                                    <Image src="/img/pending.png"
                                    alt="Pending Icon"
                                    width="25"
                                    height="25"
                                    className={styles.statusicon}
                                    />
                                }
                                {row.status == "denied" && 
                                    <Image src="/img/denied.png"
                                    alt="Denied Icon"
                                    width="25"
                                    height="25"
                                    className={styles.statusicon}
                                    />
                                }
                            </TableCell>
                            <TableCell className={styles.tablecelldata} align="left">
                                {props.table === 'drivers' && <ActionButton setTotalRevenue={props.setTotalRevenue} Box={DriverBox} />}
                                {props.table === 'availabledrivers' && <ActionButton Box={AvailableDriverBox} />}
                                {props.table === 'availabletrucks' && <ActionButton setTotalRevenue={props.setTotalRevenue} Box={AvailableTruckBox} />}
                                {props.table === 'orders' && <ActionButton Box={OrderBox} />}
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            }
            {mobile && 
            <div className={styles.tablemobileContainer}>
                <div className={styles.tablemobile}>
                    {props.rows.map((row, index) => {
                        return (
                            <React.Fragment key={index}>
                            <TableMobile setTotalRevenue={props.setTotalRevenue} table={props.table} row={row} />
                            </React.Fragment>
                        )
                    })}
                </div>
                <div className={styles.tablemobile_footer}>
                    <p className={styles.pagesshowing}>Showing 10</p>
                    <p className={styles.pagesshowing}> <MdKeyboardArrowDown /> of  100 entries</p>
                    <div className={styles.prevnext}>
                        <div className={styles.previcon}>
                            <MdKeyboardArrowLeft />
                        </div>
                        <div className={styles.nexticon}>
                            <MdKeyboardArrowRight />
                        </div>
                    </div>
                </div>
            </div>
            }
        </>

    )

}