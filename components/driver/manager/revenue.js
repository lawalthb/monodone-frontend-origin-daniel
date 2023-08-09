import React, { useRef, useState } from 'react';
import styles from "./manager.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import { MdTune } from "react-icons/md";

import Button from 'react-bootstrap/Button';
import Image from 'next/image';
const Revenue = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const [showActionModal, setShowActionModal] = useState(false)
    const [action, setAction] = useState("");

    const target = useRef(null);

    const togglePopover = () => {
        setPopoverOpen(!popoverOpen);
    }

    const handleAction = (action) => {
        setAction(action);
        setShowActionModal(true);
    }




    return (
        <div className={`${styles.walletPage} ${styles.background}`}>
            <div className={`${styles.flex_between} ${styles.flex_align_center} ${styles.walletBackground} ${styles.walletTopCard}`}>
                <div>
                    <p className={styles.opaqueText}>Total Revenue</p>
                    <h3 className={styles.whiteText}>₦ 3 128.00</h3>
                    <p className={styles.opaqueText}>ID 2490 9090 897 8080</p>
                </div>
                <div className={styles.invert}>
                    <p className={styles.opaqueText}>08/01/2023</p>
                    <Button className={`${styles.walletButton}`} variant='outline-success' size="sm"><AiOutlinePlus className={`${styles.buttonIcons}`} />Download</Button>

                </div>
            </div>
            <div className={styles.flex_right}>
                <Button className={`${styles.walletButton} ${styles.ml_twenty}`} variant='outline-success' size="sm"><MdTune className={` ${styles.buttonIcons}`} />Filter Here</Button>
            </div>
            <h4 className='mb-3' style={{
                fontFamily: 'Poppins',
                fontSize: '18px',
                fontWeight: 500,
                lineHeight: '28px',
                letterSpacing: '0em',
                textAlign: 'left',
                
            }}>REVENUE HISTORY</h4>
            <p style={{marginBottom: '2rem'}}>08 Jan, 2023</p>

            <div className={`${styles.flex_between}`}>

                <div className={styles.flex}>
                    <Image width={20} height={20} alt='user' src='/img/user.png' className={styles.image} />
                    <span>
                        <h5>Nancy Chidinma</h5>
                        <p>Recieved</p>
                    </span>
                </div>
                

                <div>
                    <p>11:30am</p>
                    <p className={styles.walletTableText}>N 1,350.00</p>
                </div>

            </div>
            <hr />
            <div className={`${styles.flex_between}`}>

                <div className={styles.flex}>
                    <Image width={20} height={20} alt='user' src='/img/user.png' className={styles.image} />
                    <span>
                        <h5>Nancy Chidinma</h5>
                        <p>Recieved</p>
                    </span>
                </div>
                

                <div>
                    <p>11:30am</p>
                    <p className={styles.walletTableText}>N 1,350.00</p>
                </div>

            </div>
            <hr />
            <div className={`${styles.flex_between}`}>

                <div className={styles.flex}>
                    <Image width={20} height={20} alt='user' src='/img/user.png' className={styles.image} />
                    <span>
                        <h5>Nancy Chidinma</h5>
                        <p>Recieved</p>
                    </span>
                </div>
                

                <div>
                    <p>11:30am</p>
                    <p className={styles.walletTableText}>N 1,350.00</p>
                </div>

            </div>
            <hr />
            <div className={`${styles.flex_between}`}>

                <div className={styles.flex}>
                    <Image width={20} height={20} alt='user' src='/img/user.png' className={styles.image} />
                    <span>
                        <h5>Nancy Chidinma</h5>
                        <p>Recieved</p>
                    </span>
                </div>
                

                <div>
                    <p>11:30am</p>
                    <p className={styles.walletTableText}>N 1,350.00</p>
                </div>

            </div>
            <hr />
            <div className={`${styles.flex_between}`}>

                <div className={styles.flex}>
                    <Image width={20} height={20} alt='user' src='/img/user.png' className={styles.image} />
                    <span>
                        <h5>Nancy Chidinma</h5>
                        <p>Recieved</p>
                    </span>
                </div>
                

                <div>
                    <p>11:30am</p>
                    <p className={styles.walletTableText}>N 1,350.00</p>
                </div>

            </div>
            <hr />
            <div className={`${styles.flex_between}`}>

                <div className={styles.flex}>
                    <Image width={20} height={20} alt='user' src='/img/user.png' className={styles.image} />
                    <span>
                        <h5>Nancy Chidinma</h5>
                        <p>Recieved</p>
                    </span>
                </div>
                

                <div>
                    <p>11:30am</p>
                    <p className={styles.walletTableText}>N 1,350.00</p>
                </div>

            </div>
            <hr />
            <div className={`${styles.flex_between}`}>

                <div className={styles.flex}>
                    <Image width={20} height={20} alt='user' src='/img/user.png' className={styles.image} />
                    <span>
                        <h5>Nancy Chidinma</h5>
                        <p>Recieved</p>
                    </span>
                </div>
                

                <div>
                    <p>11:30am</p>
                    <p className={styles.walletTableText}>N 1,350.00</p>
                </div>

            </div>
            <hr />
            <div className={`${styles.flex_between}`}>

                <div className={styles.flex}>
                    <Image width={20} height={20} alt='user' src='/img/user.png' className={styles.image} />
                    <span>
                        <h5>Nancy Chidinma</h5>
                        <p>Recieved</p>
                    </span>
                </div>
                

                <div>
                    <p>11:30am</p>
                    <p className={styles.walletTableText}>N 1,350.00</p>
                </div>

            </div>
            <hr />
        </div>

    )
}

export default Revenue;