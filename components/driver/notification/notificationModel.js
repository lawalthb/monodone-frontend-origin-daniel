import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import styles from "./notification.module.css"
import Media from '@/utils/media';
import Image from 'next/image';



const NotificationModal = (props) => {
    const { mobile } = Media();

    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            dialogClassName={`${styles.w_450} ${styles.modal}`}
        >

            <Modal.Body>
                <div className={styles.notificationsModal}>

                    {/* {!props.header ? <h4 className={styles.tablehead}></h4> : <h4 className={styles.tablehead}>{props.header}</h4>} */}
                    <span className={styles.flex}>
                        <Image width={20} height={20} alt='user' src='/img/user.png' className={styles.notificationImage} />
                        <span>
                            <h5>Nancy Chidinma</h5>
                            <p>Driver Manager</p>
                        </span>
                    </span>
                    <p>{props.actionmsg}</p>
                    <div
                        style={{
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'space-between',
                            marginTop: '0',
                        }}
                    >
                        <Button 
                         onClick={
                            props.action == 'view' ? () => {props.setaction('accept')}
                            :
                            props.action == 'accept' ? () => {props.onHide(); props.handlerequest()}
                            :
                            () => {props.onHide()}
                        } 
                         className="mt-4 " 
                         style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '48%',
                            height: mobile ? '56px' : '40px',
                            borderRadius: '6px',
                            // border: '1px solid #7CC427',
                            border: 'none',
                            background: 'rgba(0, 144, 47, 1)',
                            textTransform: mobile ? 'uppercase' : undefined,
                            color: 'rgba(255, 255, 255, 1)',
                          }}
                        >
                          {props.action == 'view' ? 'Accept request' : 'Send response'}
                        </Button>
                        <Button 
                         onClick={
                            props.action == 'view' ? () => {props.setaction('reject')}
                            :
                            props.action == 'reject' ? () => {props.onHide(); props.handlerequest()}
                            :
                            () => {props.onHide()}
                         } 
                         className="mt-4" 
                         style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '48%',
                            height: mobile ? '56px' : '40px',
                            borderRadius: '6px',
                            // border: '1px solid #7CC427',
                            border: 'none',
                            background: 'rgba(242, 8, 8, 1)',
                            textTransform: mobile ? 'uppercase' : undefined,
                            color: 'rgba(255, 255, 255, 1)',
                          }}
                        >
                            {props.action == 'view' ? 'Reject request ' : 'Cancel'}
                        </Button>
                    </div>

                </div>
            </Modal.Body>

        </Modal>
    );
}

export default NotificationModal;