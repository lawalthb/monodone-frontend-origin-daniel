import React, { useRef, useState } from 'react';
import styles from "./notification.module.css";
import NotificationModal from './notificationModel';
import Spinner from './spinner';
import SuccessModal from '../global/successModal';
import ErrorModal from '../global/errorModal';
import Image from 'next/image';



const DriverNotification = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const [showNotificationModal, setShowNotificationModal] = useState(false)
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [showErrorModal, setShowErrorModal] = useState(false)
    const [action, setAction] = useState("view");
    const [request, setRequest] = useState('');

    const notificationMsgs = {
        view: `Dear Stephen,
                This is Nancy Chidimma,  a driver manager at monodome. It my pleasure to reach out to you, haven seen your potentials in driving, i wish to get the permit to manage you as my driver, so we can grow together.
                This request is open for rejection as well, if you don’t wish to but hope to get a positive response from you.`,
        accept: `I wish to appreciate your concern and effort reaching out to me, and I look forward to working with you.`,
        reject: `I wish to appreciate your concern and effort reaching out to me, and I wish to decline to your request due to  circumstances on my path. Thanks.`
    }

    const target = useRef(null);

    const togglePopover = () => {
        setPopoverOpen(!popoverOpen);
    }

    const handleRequest = () => {
        setRequest('pending');
        setAction('done');
        setTimeout(() => {
            setRequest('success');
            setAction('view')
            setShowSuccessModal(true);
            // setShowErrorModal(true)
        }, 5000)
    }

    return (
        <div className={styles.background}>
            <div className={styles.tableContainer}>
                <div className='notification'>
                    <div className={` mb-4  ${styles.flex_between}`}>
                        <span className='red' >1 Request Notification</span>
                        <span className='green cursor' onClick={()=>setShowNotificationModal(true)}>View Details</span>
                    </div>
                    <div>
                        <span className={styles.flex}>
                            <Image width={20} height={20} alt='user' src='/img/user.png' className={styles.image} />
                            <span>
                                <h5>Nancy Chidinma</h5>
                                <p>Driver Manager</p>
                            </span>
                        </span>
                    </div>
                    <div className={styles.flex_between}>
                        <span className={'flex_basis_40'+ " " + styles.flexg}>You have a request notification fron Nancy chidimma, a driver manager at monodome.</span>
                        <span>Sent : 06/01/2023</span>
                    </div>
                </div>
                <div className='notification'>
                    <div className={` mb-4  ${styles.flex_between}`}>
                        <span className='red' >1 Response Notification</span>
                        <span className='green cursor' onClick={()=>setShowNotificationModal(true)}>View Details</span>
                    </div>
                    <div>
                        <span className={styles.flex}>
                            <Image width={20} height={20} alt='user' src='/img/user.png' className={styles.image} />
                            <span>
                                <h5>Nancy Chidinma</h5>
                                <p>Driver Manager</p>
                            </span>
                        </span>
                    </div>
                    <div className={styles.flex_between}>
                        <span className={'flex_basis_40'+ " " + styles.flexg}>You have a request notification fron Nancy chidimma, a driver manager at monodome.</span>
                        <span>Sent : 06/01/2023</span>
                    </div>
                </div>
                <div className='notification'>
                    <div className={` mb-4  ${styles.flex_between}`}>
                        <span className='red' >1 Request Notification</span>
                        <span className='green cursor' onClick={()=>setShowNotificationModal(true)}>View Details</span>
                    </div>
                    <div>
                        <span className={styles.flex}>
                            <Image width={20} height={20} alt='user' src='/img/user.png' className={styles.image} />
                            <span>
                                <h5>Nancy Chidinma</h5>
                                <p>Driver Manager</p>
                            </span>
                        </span>
                    </div>
                    <div className={styles.flex_between}>
                        <span className={'flex_basis_40'+ " " + styles.flexg}>You have a request notification fron Nancy chidimma, a driver manager at monodome.</span>
                        <span>Sent : 06/01/2023</span>
                    </div>
                </div>
                <div className='notification'>
                    <div className={` mb-4  ${styles.flex_between}`}>
                        <span className='red' >1 Response Notification</span>
                        <span className='green cursor' onClick={()=>setShowNotificationModal(true)}>View Details</span>
                    </div>
                    <div>
                        <span className={styles.flex}>
                            <Image width={20} height={20} alt='user' src='/img/user.png' className={styles.image} />
                            <span>
                                <h5>Nancy Chidinma</h5>
                                <p>Driver Manager</p>
                            </span>
                        </span>
                    </div>
                    <div className={styles.flex_between}>
                        <span className={'flex_basis_40'+ " " + styles.flexg}>You have a request notification fron Nancy chidimma, a driver manager at monodome.</span>
                        <span>Sent : 06/01/2023</span>
                    </div>
                </div>
            <NotificationModal show={showNotificationModal} action={action} handlerequest={handleRequest} setaction={setAction} onHide={()=> {setShowNotificationModal(false); setAction('view')}} actionmsg={notificationMsgs[action]} />
            {action == 'done' &&
            <Spinner />
            }
            <SuccessModal show={showSuccessModal} onHide={() => setShowSuccessModal(false)} settings="The response has been sent" message="Your acceptance and response to this reuest has been sent successfully. " />
            <ErrorModal show={showErrorModal} onHide={() => setShowErrorModal(false)} settings="Sending Response Failed!" message="Your response couldn’t send successfully due to network problem. Check your network and try again." />
            </div>
            <style jsx>{`
                .notification{
                    padding: 16px;
                }
                .notification:hover{
                    background-color:#EBF6DF;
                }  
                .red{
                    color:red;
                }
                .green{
                    color:green;
                }
                .flex_basis_40{
                    flex-basis:30%
                }
                .cursor{
                    cursor:pointer;
                }
                @media screen and (max-width: 768px){
                    .notification > div{
                        margin-bottom: 3px !important;
                        
                    }

                    .notification > div > span{
                        font-size: 14px;
                        align-items: center;
                    }

                    .notification > div > span > span > h5{
                        font-size: 16px;
                        margin: 0;
                    }

                    .notification > div > span > span > p{
                        font-size: 14px;
                        margin: 0;
                    }
                
                }
            `}</style>

        </div>

    )
}

export default DriverNotification;