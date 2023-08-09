import { Form, Modal } from "react-bootstrap"
import GeneralModal from "../../modal"
import Image from "next/image"
import SendMoneyContent from "./sendMoneyContent"
import { HiOutlineSearch } from 'react-icons/hi'
import styles from '@/styles/wallet.module.css'
import { useState } from "react"

export default function SendMoneyModal(props) {
    const [search, setSearch] = useState('')

    function handleChange(e) {
        setSearch(e.target.value)
    }

    console.log(search)
    return (
        <>
            <GeneralModal
                size="lg"
                show={props.sendMoneyModal}
                onHide={() => {
                    props.setSendMoneyModal(false)
                }}
                style={props.style}
            >
                <Modal.Body style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    padding: "0px 20px"
                }}>
                    <div
                        onClick={() => {
                            props.setSendMoneyModal(false)
                        }}
                        style={{
                            position: "absolute",
                            top: "-0.5em",
                            right: '-0.3em',
                            cursor: "pointer"
                        }}>
                        <Image src="/img/close.png" width="14" height="14" alt="close" />
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: "space-between",
                        width: "100%",
                        marginTop: "20px"
                    }}>
                        <Image style={{
                            maxWidth: '100%',
                            width: "7px",
                        }} src="/img/walletlt.png" width="7" height="13" alt="backarrow" />
                        <Form.Label style={{
                            fontSize: '16px',
                            color: "black",
                            fontWeight: '500',
                        }}>
                            Send money to another user
                        </Form.Label>
                        <div></div>
                    </div>
                    <div style={{
                        display: 'flex',  
                        alignItems: 'center',  
                        gap: '6px',                    
                        width: "80%",
                        margin: '0 auto',
                        marginTop: "20px",
                        padding: '5px 10px',
                        border: '0.1px solid #00000033',
                        borderRadius: '7px'
                    }}>
                        <HiOutlineSearch style={{                        
                            fontSize: "18px",                               
                        }}/>
                        <Form.Control
                            className={styles.searchInput}
                            placeholder="search for user usingnuser id or phone number"
                            onChange={handleChange}
                        />      
                    </div>
                    <Form.Label style={{
                        fontSize: '12px',
                        color: "black",
                        fontWeight: '500',
                        marginTop: '20px'
                    }}>
                        Recent
                    </Form.Label>
                    <SendMoneyContent
                        imgSrc="/img/driver3.png"
                        name="Kalush"
                        setSendAnotherUser={props.setSendAnotherUser}
                        setSendMoneyModal={props.setSendMoneyModal}
                    />
                    <SendMoneyContent
                        imgSrc="/img/walletprof.png"
                        name="Stephania"
                        setSendAnotherUser={props.setSendAnotherUser}
                        setSendMoneyModal={props.setSendMoneyModal}
                    />
                    <SendMoneyContent
                        imgSrc="/img/driver.png"
                        name="Stephan"
                        setSendAnotherUser={props.setSendAnotherUser}
                        setSendMoneyModal={props.setSendMoneyModal}
                    />
                    <Form.Label style={{
                        fontSize: '12px',
                        color: "black",
                        fontWeight: '500',
                        marginTop: '20px'
                    }}>
                        A
                    </Form.Label>
                    <SendMoneyContent
                        imgSrc="/img/walletprof.png"
                        name="Ayo"
                        setSendAnotherUser={props.setSendAnotherUser}
                        setSendMoneyModal={props.setSendMoneyModal}
                    />
                    <SendMoneyContent
                        imgSrc="/img/driver2.png"
                        name="Adanna"
                        setSendAnotherUser={props.setSendAnotherUser}
                        setSendMoneyModal={props.setSendMoneyModal}
                    />
                    <Form.Label style={{
                        fontSize: '12px',
                        color: "black",
                        fontWeight: '500',
                        marginTop: '20px'
                    }}>
                        C
                    </Form.Label>
                    <SendMoneyContent
                        imgSrc="/img/walletprof.png"
                        name="Chioma"
                        setSendAnotherUser={props.setSendAnotherUser}
                        setSendMoneyModal={props.setSendMoneyModal}
                    />
                    <SendMoneyContent
                        imgSrc="/img/driver2.png"
                        name="Chiamaka"
                        setSendAnotherUser={props.setSendAnotherUser}
                        setSendMoneyModal={props.setSendMoneyModal}
                    />
                </Modal.Body>
            </GeneralModal>
        </>
    )
}