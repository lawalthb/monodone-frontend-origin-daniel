import React, { useState } from 'react';

import { AiOutlineLeft } from 'react-icons/ai';
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BiTrash } from "react-icons/bi";

import { Form } from 'react-bootstrap';
import Image from 'next/image';
import SuccessModal from '../global/successModal';
import RequestAlertModal from './RequestAlertModal';
import Media from '@/utils/media';
import YesNoModal from '../global/yesnoModal';
import ErrorModal from '../global/errorModal';


const Profile = (props) => {
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [showErrorModal, setShowErrorModal] = useState(false)
    const [showRequestAlertModal, setShowRequestAlertModal] = useState(false)
    const [deleteAccount, setDeleteAccount] = useState(false)
    const [edit, setEdit] = useState(false)
    const [request, setRequest] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [successSetting, setSuccessSetting] = useState("");
    const { mobile } = Media();


    const handleRequest = (action) => {
        setRequest(action);
        setTimeout(() => {
            setRequest('success');
            setShowSuccessModal(true);
            setSuccessMsg("Wait for a response from the moderator about the changes")
            setSuccessSetting('The request has been sent');
            setEdit(false)
        }, 5000)

        setTimeout(() => {
            setShowSuccessModal(false);
            setShowRequestAlertModal(true);
            // setShowErrorModal(true)
            setEdit(false)
        }, 10000)
    }

    const handleDelete = () => {
        setDeleteAccount(false)
        setShowSuccessModal(true);
        // setShowErrorModal(true)
        setSuccessMsg("This user account has been successfully deleted.")
        setSuccessSetting('Account Deleted');
    }

    return (
        <div className={props.styles.settings}>
            <div className={ `mb-4 ${props.styles.settings_head}`}>
                <div onClick={() => props.setProfile(false)}>
                    <span><AiOutlineLeft cursor={'pointer'} /></span>
                </div>
                <span className={props.styles.tablehead}>{edit ? 'Edit ' : ' '} Profile</span>
                {!edit ?
                    <div onClick={() => setEdit(true)}  className={`cursor ${props.styles.color_green}`}>Edit</div>
                    :
                    <div onClick={() => handleRequest('pending')}  className={`cursor ${props.styles.color_green}`}>Done</div>
                }
            </div>
            <div className={props.styles.settingsContainer}>
                <div className={props.styles.flex_center}>
                   
                    <div className={props.styles.img_circle_lg}>
                        <Image width={'90'} height={'90'} alt='user' className={`${props.styles.img_circle_md}`} src='/img/user.png' />
                        
                    </div>
                    {!edit ? 
                        <>
                            <div className={`mt-4 ${props.styles.tablehead}`}>Stephan Ekwueme</div>
                            <div className={props.styles.stars}><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf /> <p>4,6</p> </div>
                        </>
                        :
                        <p className={props.styles.tablehead} style={{fontSize: mobile ? '14px' : '22px', color: 'rgba(0, 144, 47, 1)'}}>
                            Change profile photo
                        </p>
                    }
                </div>

                <Form className={props.styles.settingsContainerForm} >
                    {edit &&
                        <>
                            <Form.Label className={props.styles.form_label}>Name</Form.Label>
                            <input 
                                className={props.styles.form_input} 
                                defaultValue={'Stephan Ekwueme'}
                                type='text' 
                                disabled={request=='pending'}
                            />
                            {!edit && <hr />}
                        </>
                    }
                    <Form.Label className={props.styles.form_label}>Phone</Form.Label>
                    {!edit ?
                        <div className={props.styles.form_values}>080 9778 332</div>
                        :
                        <input 
                            className={props.styles.form_input} 
                            defaultValue={'080 9778 332'}
                            type='text' 
                            disabled={request=='pending'}
                        />
                    }
                    {!edit && <hr />}
                    <Form.Label className={props.styles.form_label}>Address</Form.Label>
                    {!edit ? 
                        <div className={props.styles.form_values}>21 Alex Ekwueme</div>
                        :
                        <input 
                            className={props.styles.form_input} 
                            defaultValue={'21 Alex Ekwueme'}
                            type='text' 
                            disabled={request=='pending'}
                        />
                    }
                    {!edit && <hr />}
                    <Form.Label className={props.styles.form_label}>Type of vehicle</Form.Label>
                    {!edit ? 
                        <div className={props.styles.form_values}>Van</div>
                        :
                        <select 
                            className={props.styles.form_input} 
                            defaultValue={'Van'}
                            disabled={request=='pending'}
                        >
                            <option>Van</option>
                            <option>Truck</option>
                            <option>Bus</option>
                        </select>
                    }
                    {!edit && <hr />}
                    <Form.Label className={props.styles.form_label}>NIN Number</Form.Label>
                    {!edit ? 
                        <div className={props.styles.form_values}>0809778332</div>
                        :
                        <input 
                            className={props.styles.form_input} 
                            defaultValue={'0809778332'}
                            type='text' 
                            disabled={request=='pending'}
                        />
                    }
                    {!edit && <hr />}
                    <Form.Label className={props.styles.form_label}>Drivers license</Form.Label>
                    {!edit ? 
                        <div className={props.styles.form_values}>32485-853536</div>
                        :
                        <input 
                            className={props.styles.form_input} 
                            defaultValue={'32485-853536'}
                            type='text' 
                            disabled={request=='pending'}
                        />
                    }
                    {request == 'pending' && 
                        <>
                            <div className={props.styles.alert}>
                                <Image
                                    src="/img/verified.png"
                                    width="24"
                                    height="24"
                                    alt="alert"
                                />
                                <span className={props.styles.alert_div}></span>
                                <p className={props.styles.alert_text}>Your request is pending. Wait for a response from the moderator about the changes</p>
                            </div>
                            <p className={props.styles.cancelreq}>Cancel Request</p>
                        </>
                    }
                </Form>
                {edit && <hr />}
                {edit &&
                    <div className={props.styles.cursor} onClick={()=>setDeleteAccount(true)}>
                        <BiTrash className={`me-3 ${props.styles.color_red}`} />
                        Delete Account
                    </div>
                }
            </div>
            <YesNoModal show={deleteAccount} onHide={() => {setDeleteAccount(false)}} onyes={() => handleDelete()} message='Are you sure you want to delete this account ? You might not be able to recover the account once deleted.' />
            <SuccessModal show={showSuccessModal} onHide={() => setShowSuccessModal(false)} settings={successSetting} message={successMsg} />
            <ErrorModal show={showErrorModal} onHide={() => setShowErrorModal(false)} settings="Operation failed!" message="Sorry, this particular operation was not completed, due to some errors." />
            <RequestAlertModal show={showRequestAlertModal} onHide={() => setShowRequestAlertModal(false)} header="Response to request!" message="Your data has been confirmed by the moderator and changed. Except for the branch number, because it is not variable information." />
            <style jsx>{`
                @media screen and (max-width: 768px){
                    .settings_settings__TDtEv{
                        margin-top: 0;
                        background-color: white;
                        z-index: 6;
                        padding: 10px;
                    }
                }
            `}</style>
        </div>

    )
}

export default Profile;