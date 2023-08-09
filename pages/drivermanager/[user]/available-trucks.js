import React from 'react';
import Table from 'react-bootstrap/Table';
import styles from "../../../components/driver/manager/manager.module.css";
import DriverLayout from '@/components/driver/driverLayout/driverLayout';
import DriversTable from '@/components/driver/manager/tables';
import Image from 'next/image';
import Revenue from '@/components/driver/manager/revenue';
import { useState } from 'react';
import TableHeadButtons from '@/components/driver/manager/tableHeadButtons';
import { Button } from 'react-bootstrap';
import { AiOutlinePlus } from 'react-icons/ai';


const AvailableTrucks = (props) => {
    const [totalRevenue, setTotalRevenue] = useState(false)

    const user = props.params.user
    const navData = [
        {
          imgSrc: "/img/home.png",
          caption: "Broadcast",
          imgWidth: "16",
          imgHeight: "17",
          section: "broadcast",
          handleSection: "handleBroadcast",
          route: `/drivermanager/${user}`,
        },
        {
          imgSrc: "/img/shopping-bag.png",
          caption: "Orders",
          imgWidth: "18",
          imgHeight: "20",
          section: "order",
          handleSection: "handleOrder",
          route: `/drivermanager/${user}/orders`,
        },
        (props.params.user == "superAdmin" || props.params.user == "admin") &&{
          imgSrc: "/img/drivers.png",
          caption: "Drivers",
          imgWidth: "18",
          imgHeight: "20",
          section: "order",
          handleSection: "handleOrder",
          route: `/drivermanager/${user}/drivers`,
        },
        props.params.user === "superAdmin" &&{
          imgSrc: "/img/drivers.png",
          caption: "Admins",
          imgWidth: "18",
          imgHeight: "20",
          section: "order",
          handleSection: "handleOrder",
          route: `/drivermanager/${user}/Admins`,
        },
        (props.params.user == "superAdmin" || props.params.user == "admin") &&{
          imgSrc: "/img/drivers.png",
          caption: "Available Drivers",
          imgWidth: "18",
          imgHeight: "20",
          section: "order",
          handleSection: "handleOrder",
          route: `/drivermanager/${user}/available-drivers`,
        },
        (props.params.user == "superAdmin" || props.params.user == "admin") &&{
          imgSrc: "/img/trucks.png",
          caption: "Available Trucks",
          imgWidth: "18",
          imgHeight: "20",
          section: "order",
          handleSection: "handleOrder",
          route: `/drivermanager/${user}/available-trucks`,
        },
        {
          imgSrc: "/img/wallet1.png",
          caption: "Wallet",
          imgWidth: "20",
          imgHeight: "14",
          section: "wallet",
          handleSection: "handleWallet",
          route: `/drivermanager/${user}/wallet`,
        },
        {
          imgSrc: "/img/settings.png",
          caption: "Settings",
          imgWidth: "20",
          imgHeight: "20",
          section: "settings",
          handleSection: "handleSettings",
          route: `/drivermanager/${user}/settings`,
        }
    ]

    const rows = [
      {
          id: 1,
          assigned_to: "Nancy Chidimma",
          phone_no: "32485-853536",
          truck_location: "Lagos",
          no_of_truck: 2,
          icon:<Image src="/img/document.png"
                      alt="user image"
                      width="25"
                      height="25"/>,
          truck_name: "GIG Truck",
          status: "approved",
      },
      {
          id: 2,
          assigned_to: "Nancy Chidimma",
          phone_no: "32485-853536",
          truck_location: "Abuja",
          no_of_truck: 2,
          truck_name: "GIG Truck",
          status: "approved",
      },
      {
          id: 3,
          assigned_to: "Nancy Chidimma",
          phone_no: "32485-853536",
          truck_location: "Lagos",
          no_of_truck: 2,
          truck_name: "GIG Truck",
          status: "approved",
      },
      {
          id: 4,
          assigned_to: "Nancy Chidimma",
          phone_no: "32485-853536",
          truck_location: "Lekki",
          no_of_truck: 2,
          truck_name: "GIG Truck",
          status: "pending",
      },
      {
          id: 4,
          assigned_to: "Nancy Chidimma",
          phone_no: "32485-853536",
          truck_location: "Lekki",
          no_of_truck: 2,
          icon:<Image src="/img/document.png"
                      alt="user image"
                      width="25"
                      height="25"/>,
          truck_name: "GIG Truck",
          status: "approved",
      },
      {
          id: 5,
          assigned_to: "Nancy Chidimma",
          phone_no: "32485-853536",
          truck_location: "Lekki",
          no_of_truck: 2,
          truck_name: "GIG Truck",
          status: "approved",
      },
      {
          id: 6,
          assigned_to: "Nancy Chidimma",
          phone_no: "32485-853536",
          truck_location: "Portharcourt",
          no_of_truck: 2,
          truck_name: "GIG Truck",
          status: "pending",
      },
      {
          id: 7,
          assigned_to: "Nancy Chidimma",
          phone_no: "32485-853536",
          truck_location: "Lagos",
          no_of_truck: 2,
          truck_name: "GIG Truck",
          status: "pending",
      },
      {
          id: 8,
          assigned_to: "Nancy Chidimma",
          phone_no: "32485-853536",
          truck_location: "Lagos",
          no_of_truck: 2,
          truck_name: "GIG Truck",
          status: "approved",
      },
      {
          id: 9,
          assigned_to: "Nancy Chidimma",
          phone_no: "32485-853536",
          truck_location: "Enugu",
          no_of_truck: 2,
          truck_name: "GIG Truck",
          status: "approved",
      },
      {
          id: 10,
          assigned_to: "Nancy Chidimma",
          phone_no: "32485-853536",
          truck_location: "Lagos",
          no_of_truck: 2,
          truck_name: "GIG Truck",
          status: "denied",
      }
    ]

    const filterForm = [
        <label style={{fontSize: '12px'}} key={'form'} className={styles.label}>Trucks&apos; name</label>,
        <input key={'form'} type="text" className={styles.assigninput}/>,
        <label style={{fontSize: '12px'}} key={'form'} className={styles.label}>Trucks&apos; number</label>,
        <input key={'form'} type="number" className={styles.assigninput}/>,
        <label style={{fontSize: '12px'}} key={'form'} className={styles.label}>Trucks location</label>,
        <select key={'form'} className={styles.filter}>
            <option className={styles.option}>Lagos</option>
            <option className={styles.option}>Abuja</option>
        </select>,
        <label style={{fontSize: '12px'}} key={'form'} className={styles.label}>Truck Owner</label>,
        <input key={'form'} type="text" className={styles.assigninput}/>,
    ]

    return (
        <DriverLayout sideBarDetails={navData}>
            {!totalRevenue ?
            <div className={styles.background}>
                <div style={{margin: '15px'}} className={`${styles.flex_between} ${styles.flex_align_center} ${styles.walletBackground} ${styles.walletTopCard} ${styles.mobile}`}>
                    <div>
                        <h3 className={styles.whiteText}>Driver Manager</h3>
                        <p className={styles.opaqueText}>Add parcel to your other lists of parcels</p>
                    </div>
                    <div className={styles.invert}>
                        <p className={styles.opaqueText}></p>
                        <Button className={`${styles.walletButton}`} variant='outline-success' size="sm"><AiOutlinePlus className={`${styles.buttonIcons}`} />{ props.params.user == "superAdmin" ? "Add Admin" : "Post Load" }</Button>

                    </div>
                </div>
                <div className={styles.options}>
                    <TableHeadButtons user={props.params.user} filterForm={filterForm} />
                </div>
                <div className={styles.tableContainer}>
                    <Table>
                        <DriversTable totalRevenue={totalRevenue} setTotalRevenue={setTotalRevenue} rows={rows} table={'availabletrucks'}/>
                    </Table>

                    {/* <ActionModal
                        show={showActionModal}
                        onHide={() => setShowActionModal(false)}
                        action={action}
                        form="drivers"
                    /> */}

                </div>
            </div>
            :
            <Revenue />
            }
        </DriverLayout>

    )
}

export default AvailableTrucks;

export async function getServerSideProps(context){
    // const res = await fetch('https://.../posts')
  // const posts = await res.json()
  // console.log(context)
  context.res.setHeader(
    'Cache-Control',
    'must-revalidate, public, max-age=31536000'
  )
  
  return {
    props: {
        params: context.params
    },
  }
}