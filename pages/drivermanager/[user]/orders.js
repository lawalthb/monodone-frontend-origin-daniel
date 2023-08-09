import React from 'react';
import Table from 'react-bootstrap/Table';
import styles from "../../../components/driver/manager/manager.module.css";
import DriverLayout from '@/components/driver/driverLayout/driverLayout';
import DriversTable from '@/components/driver/manager/tables';
import Image from 'next/image';
import TableHeadButtons from '@/components/driver/manager/tableHeadButtons';
import { Button } from 'react-bootstrap';
import { AiOutlinePlus } from 'react-icons/ai';


const Orders = (props) => {
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
          delivery_from: "Lagos",
          delivery_to: "Delta",
          icon:<Image src="/img/document.png"
                      alt="user image"
                      width="25"
                      height="25"/>,
          loadtype: "Document",
          status: "approved",
      },
      {
          id: 2,
          assigned_to: "Nancy Chidimma",
          phone_no: "32485-853536",
          delivery_from: "Abuja",
          delivery_to: "Delta",
          loadtype: "Document",
          status: "approved",
      },
      {
          id: 3,
          assigned_to: "Nancy Chidimma",
          phone_no: "32485-853536",
          delivery_from: "Lagos",
          delivery_to: "Delta",
          loadtype: "Document",
          status: "approved",
      },
      {
          id: 4,
          assigned_to: "Nancy Chidimma",
          phone_no: "32485-853536",
          delivery_from: "Lekki",
          delivery_to: "Delta",
          loadtype: "Document",
          status: "pending",
      },
      {
          id: 4,
          assigned_to: "Nancy Chidimma",
          phone_no: "32485-853536",
          delivery_from: "Lekki",
          delivery_to: "Delta",
          icon:<Image src="/img/document.png"
                      alt="user image"
                      width="25"
                      height="25"/>,
          loadtype: "Document",
          status: "approved",
      },
      {
          id: 5,
          assigned_to: "Nancy Chidimma",
          phone_no: "32485-853536",
          delivery_from: "Lekki",
          delivery_to: "Delta",
          loadtype: "Document",
          status: "approved",
      },
      {
          id: 6,
          assigned_to: "Nancy Chidimma",
          phone_no: "32485-853536",
          delivery_from: "Portharcourt",
          delivery_to: "Delta",
          loadtype: "Document",
          status: "pending",
      },
      {
          id: 7,
          assigned_to: "Nancy Chidimma",
          phone_no: "32485-853536",
          delivery_from: "Lagos",
          delivery_to: "Delta",
          loadtype: "Document",
          status: "pending",
      },
      {
          id: 8,
          assigned_to: "Nancy Chidimma",
          phone_no: "32485-853536",
          delivery_from: "Lagos",
          delivery_to: "Delta",
          loadtype: "Document",
          status: "approved",
      },
      {
          id: 9,
          assigned_to: "Nancy Chidimma",
          phone_no: "32485-853536",
          delivery_from: "Enugu",
          delivery_to: "Delta",
          loadtype: "Document",
          status: "approved",
      },
      {
          id: 10,
          assigned_to: "Nancy Chidimma",
          phone_no: "32485-853536",
          delivery_from: "Lagos",
          delivery_to: "Delta",
          loadtype: "Document",
          status: "denied",
      }
    ]

    const filterForm = [
        <label style={{fontSize: '12px'}} key={'form'} className={styles.label}>Load type</label>,
        <select key={'form'} className={styles.select}>
            <option>Document</option>
            <option>Parcel</option>
        </select>,
        <label style={{fontSize: '12px'}} key={'form'} className={styles.label}>Delivery location</label>,
        <input key={'form'} type="text" className={styles.assigninput}/>,
        <label style={{fontSize: '12px'}} key={'form'} className={styles.label}>Posted by</label>,
        <input key={'form'} type="text" className={styles.assigninput}/>,
        <label style={{fontSize: '12px'}} key={'form'} className={styles.label}>Posting Date</label>,
        <input key={'form'} type="date" className={styles.assigninput}/>,
        <label style={{fontSize: '12px'}} key={'form'} className={styles.label}>Driver Assigned</label>,
        <select key={'form'} className={styles.select}>
            <option>Emeka Okafor</option>
            <option>Parcel</option>
        </select>
    ]

    return (
        <DriverLayout sideBarDetails={navData}>
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
                        <DriversTable rows={rows} table={'orders'}/>
                    </Table>

                    {/* <ActionModal
                        show={showActionModal}
                        onHide={() => setShowActionModal(false)}
                        action={action}
                        form="drivers"
                    /> */}

                </div>
            </div>
        </DriverLayout>

    )
}

export default Orders;

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