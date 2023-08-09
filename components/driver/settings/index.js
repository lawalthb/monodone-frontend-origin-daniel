import { Form } from 'react-bootstrap';
import Link from 'next/link';
import { RxPerson } from "react-icons/rx";
import { BsChatLeftDots } from "react-icons/bs";
import { TfiReceipt } from "react-icons/tfi";
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { useState } from 'react';


const Setting = (props) => {
    const [available, setAvailable] = useState(false)

    const AntSwitch = styled(Switch)(({ theme }) => ({
        width: 58,
        height: 27,
        padding: 0,
        borderRadius: 15,
        display: 'flex',
        '&:active': {
          '& .MuiSwitch-thumb': {
            width: 15,
          },
          '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
          },
        },
        '& .MuiSwitch-switchBase': {
          padding: 2,
          '&.Mui-checked': {
            transform: 'translateX(28px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              opacity: 1,
              backgroundColor: 'rgba(0, 144, 47, 1)',
            },
            '& > .MuiSwitch-thumb': {
                backgroundColor:
            theme.palette.mode === 'dark' ? '#949494' : '#FFFFFF',
              },
          },
        },
        '& .MuiSwitch-thumb': {
          boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
          width: 26.22,
          height: 23,
          borderRadius: 11,
          backgroundColor:
            theme.palette.mode === 'dark' ? '#FFFFFF' : '#949494',
          transition: theme.transitions.create(['width'], {
            duration: 200,
          }),
        },
        '& .MuiSwitch-track': {
            width: 58,
            height: 27,
          borderRadius: 16 / 2,
          opacity: 1,
          backgroundColor:
            'rgba(0, 144, 47, 1)',
          boxSizing: 'border-box',
        },
    }));

    function handleAvailability() {
        setAvailable(!available)
    };

    return (
        <div className={props.styles.settings}>
            <div className={props.styles.settingsContainer}>
                <Form className={props.styles.settingsContainerIndex}>
                    <div>
                        <h3 className={props.styles.mobile} style={{
                            borderBottom: '1px solid rgba(231, 231, 231, 1)',
                            paddingBottom: '10px',
                            marginBottom: '30px',

                        }}>Settings</h3>
                    <div onClick={() => props.setProfile(true)}>  <div className={props.styles.form_values}><span className='mx-3 greeen'><RxPerson  /></span> Profile</div> </div>
                    <hr />
                    
                    <div className={props.styles.form_values}><span className='mx-3 greeen'><BsChatLeftDots /></span>Support</div>
                    <hr />
                    </div>
                    <div>
                    <hr className={props.styles.mt_twentyfour}/>
                    <div className={`mt-4 ${props.styles.flex_between}`}>
                        <span>I&apos;m Available</span>
                        {/* <Form.Check 
                            type="switch"
                            
                            color='success'
                            
                        /> */}
                        <AntSwitch checked={available} onChange={() => handleAvailability()} inputProps={{ 'aria-label': 'ant design' }} />
                    </div>
                    <div className='w-100 mt-5 flex settings_button'>
                        <span className='align_left'><TfiReceipt color='rgba(124, 196, 39, 1)' /></span>
                        <span className='align-cen'>Request Barcodes</span>
                    </div>
                    </div>
                    
                </Form>
            </div>
            <style jsx>{`
                .form-check-input:checked {
                    background-color: green;
                    border-color: green;
                }
                .greeen{
                    color:green;
                }
                .settings_button{
                    padding:8px;
                    border:1px solid rgba(124, 196, 39, 1);
                    border-radius:5px;
                    cursor:pointer;
                    display: grid;
                    grid-auto-flow: column;
                    justify-items: start;
                    align-items: center;
                    height: 40px;
                }
                .settings_button:hover{
                    color:white;
                    background-color:green;
                }
                @media screen and (max-width: 550px){
                    .settings_button{
                        height: 56px;
                    }
                }
            `}</style>
            
        </div>

    )
}

export default Setting;