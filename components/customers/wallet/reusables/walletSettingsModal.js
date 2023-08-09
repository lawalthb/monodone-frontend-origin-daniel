import Image from "next/image"
import { useState, useEffect } from "react"
import { Form, Modal } from "react-bootstrap"
import GeneralModal from "../../modal"
import CommonWalletSettingsComp from "./commenWalletSettingsComp"

export default function WalletSettingsModal(props) {
    const handleWalletSettingCreate = () => {
        props.setWalletSettingCreate(true)
        props.setWalletSettingReset(false)
        props.setWalletSettingTransfer(false)
        props.setWalletSettingContact(false)
        props.setWalletSettingDelete(false)
    }
    const handleWalletSettingReset = () => {
        props.setWalletSettingReset(true)
        props.setWalletSettingCreate(false)
        props.setWalletSettingTransfer(false)
        props.setWalletSettingContact(false)
        props.setWalletSettingDelete(false)
    }
    const handleWalletSettingTransfer = () => {
        props.setWalletSettingTransfer(true)
        props.setWalletSettingReset(false)
        props.setWalletSettingCreate(false)
        props.setWalletSettingContact(false)
        props.setWalletSettingDelete(false)
    }
    const handleWalletSettingContact = () => {
        props.setWalletSettingContact(true)
        props.setWalletSettingTransfer(false)
        props.setWalletSettingReset(false)
        props.setWalletSettingCreate(false)
        props.setWalletSettingDelete(false)
    }
    const handleWalletSettingDelete = () => {
        props.setWalletSettingDelete(true)
        props.setWalletSettingContact(false)
        props.setWalletSettingTransfer(false)
        props.setWalletSettingReset(false)
        props.setWalletSettingCreate(false)
    }

    useEffect(() => {
        if (props.walletSettingReset) {
            props.setWalletSettingCreate(false)
            props.setWalletSettingTransfer(false)
            props.setWalletSettingContact(false)
            props.setWalletSettingDelete(false)
        } else if (props.walletSettingTransfer) {
            props.setWalletSettingCreate(false)
            props.setWalletSettingReset(false)
            props.setWalletSettingContact(false)
            props.setWalletSettingDelete(false)
        } else if (props.walletSettingContact) {
            props.setWalletSettingCreate(false)
            props.setWalletSettingReset(false)
            props.setWalletSettingTransfer(false)
            props.setWalletSettingDelete(false)
        } else if (props.walletSettingDelete) {
            props.setWalletSettingCreate(false)
            props.setWalletSettingReset(false)
            props.setWalletSettingTransfer(false)
            props.setWalletSettingContact(false)
        } else {
            props.setWalletSettingCreate(true)
        }
    }, [props])

    return (
        <>
            <GeneralModal
                size="md"
                show={props.walletSettings}
                onHide={() => {
                    props.setWalletSettings(false)
                }}
                style={props.style}
            >
                <Modal.Body style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    padding: "0px 20px",
                    marginBottom: '20px'
                }}>
                    <div
                        onClick={() => {
                            props.setWalletSettings(false)
                        }}
                        style={{
                            position: "absolute",
                            top: "-1rem",
                            right: '-0.8rem',
                            cursor: "pointer"
                        }}>
                        <Image src="/img/close.png" width="14" height="14" alt="close" />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: "center",
                        alignItems: 'center',
                        marginTop: "20px",
                    }}>
                        <Form.Label style={{
                            fontSize: '16px',
                            color: "black",
                            fontWeight: '600',
                        }}>
                            Wallet Settings
                        </Form.Label>
                    </div>
                    <div style={{
                        marginTop: '20px'
                    }}>
                        <CommonWalletSettingsComp
                            imgSrc="/img/walletsettingcreate.png"
                            imgWidth="20"
                            imgHeight="18"
                            caption="Create Wallet Pin"
                            style={{
                                width: "20px",
                                maxWidth: "100%"
                            }}
                            handleClick={() => {
                                handleWalletSettingCreate()
                                props.setWalletpinCreate(true)
                                props.setWalletSettings(false)
                            }}
                            clicked={props.walletSettingCreate}
                        />
                        <CommonWalletSettingsComp
                            imgSrc="/img/walletsettingreset.png"
                            imgWidth="20"
                            imgHeight="18"
                            caption="Reset Wallet Pin"
                            style={{
                                width: "20px",
                                maxWidth: "100%"
                            }}
                            handleClick={() => {
                                handleWalletSettingReset()
                                props.setWalletpinReset(true)
                                props.setWalletSettings(false)
                            }}
                            clicked={props.walletSettingReset}
                        />
                        <CommonWalletSettingsComp
                            imgSrc="/img/walletsettingtransfer.png"
                            imgWidth="19"
                            imgHeight="21"
                            caption="Transfer Limit"
                            style={{
                                width: "21px",
                                maxWidth: "100%"
                            }}
                            handleClick={() => {
                                handleWalletSettingTransfer()
                                props.setWalletTransfer(true)
                                props.setWalletSettings(false)
                            }}
                            clicked={props.walletSettingTransfer}
                        />
                        <CommonWalletSettingsComp
                            imgSrc="/img/walletsettingcontact.png"
                            imgWidth="17"
                            imgHeight="20"
                            caption="Contact Support"
                            style={{
                                width: "17px",
                                maxWidth: "100%"
                            }}
                            handleClick={() => {
                                handleWalletSettingContact()
                                props.setWalletContact(true)
                                props.setWalletSettings(false)
                            }}
                            clicked={props.walletSettingContact}
                        />
                        <CommonWalletSettingsComp
                            imgSrc="/img/walletsettingdelete.png"
                            imgWidth="21"
                            imgHeight="21"
                            caption="Delete Account"
                            style={{
                                width: "21px",
                                maxWidth: "100%"
                            }}
                            handleClick={() => {
                                handleWalletSettingDelete()
                                props.setWalletDelete(true)
                                props.setWalletSettings(false)
                            }}
                            clicked={props.walletSettingDelete}
                        />
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '30px',
                        padding: '15px 8px',
                        borderBottom: '1px solid #E7E7E7'
                    }}>
                        <Form.Label style={{
                            fontSize: '14px',
                            color: "black",
                            fontWeight: '500',
                        }}>
                            Require transfer pin
                        </Form.Label>
                        <Image
                            style={{
                                maxWidth: '100%',
                                width: '51px'
                            }} src="/img/walletsettingswitch.png" width="51" height="35" alt="switch" />
                    </div>
                </Modal.Body>
            </GeneralModal>
        </>
    )
}