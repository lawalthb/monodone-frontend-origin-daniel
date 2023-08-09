import Image from 'next/image'
import { useEffect } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import GeneralModal from '../customers/modal'
import styles from '../customers/customerdashboard.module.css'

export default function EditAgentForm(props) {
    useEffect(() => {
        if (props.toThirty) {
            props.setMoreThirty(false)
        } else {
            props.setMoreThirty(true)
        }
    }, [props])
    return (
        <>
            <GeneralModal
                size="md"
                show={props.editAgentForm}
                onHide={() => {
                    props.setEditAgentForm(false)
                }}
                style={props.style}
            >
                <Modal.Body style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: '10px'
                }}>
                    <div
                        onClick={() => {
                            props.setEditAgentForm(false)
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
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "black",
                        fontWeight: '600',
                        fontSize: "14px",
                    }}>
                        Edit Agent
                    </div>
                    <div style={{
                        display: "flex",
                        gap: "20px",
                        marginTop: '20px'
                    }}>
                        <Form.Label style={{
                            color: "#808080",
                            fontWeight: '500',
                            fontSize: '12px'
                        }}>
                            Agent
                        </Form.Label>
                        <Form.Label style={{
                            color: "black",
                            fontWeight: '500',
                            fontSize: '12px'
                        }}>
                            #{props.agentNoEdit}
                        </Form.Label>
                    </div>
                    <div style={{
                        display: "flex",
                        marginTop: '5px',
                        gap: '10%'
                    }}>
                        <Form.Label style={{
                            color: "#808080",
                            fontWeight: '500',
                            fontSize: '12px',
                            width: '45%'
                        }}>
                            First name
                        </Form.Label>
                        <Form.Label style={{
                            color: "#808080",
                            fontWeight: '500',
                            fontSize: '12px',
                            width: '45%'
                        }}>
                            Last name
                        </Form.Label>
                    </div>
                    <div style={{
                        display: "flex",
                        marginTop: '5px',
                        gap: '4%'
                    }}>
                        <input style={{
                            width: '48%',
                            padding: "4px 8px",
                            border: "1px solid #E7E7E7",
                            borderRadius: "5px"
                        }} type="text" defaultValue={props.firstName}
                            onChange={props.onFirstnameChange}
                            name="firstName"
                        />
                        <input style={{
                            width: '48%',
                            padding: "4px 8px",
                            border: "1px solid #E7E7E7",
                            borderRadius: "5px"
                        }} type="text" defaultValue={props.lastName}
                            onChange={props.onLastnameChange}
                            name="lastName"
                        />
                    </div>
                    <div style={{
                        display: "flex",
                        marginTop: '10px'
                    }}>
                        <Form.Label style={{
                            color: "#808080",
                            fontWeight: '500',
                            fontSize: '12px',
                            width: '45%'
                        }}>
                            Address
                        </Form.Label>
                    </div>
                    <div style={{
                        display: "flex",
                        marginTop: '5px',
                        gap: '10px'
                    }}>
                        <input style={{
                            width: '100%',
                            padding: "4px 8px",
                            border: "1px solid #E7E7E7",
                            borderRadius: "5px"
                        }} type="text" defaultValue={props.address}
                            onChange={props.onAddressChange}
                            name="address"
                        />
                    </div>
                    <div style={{
                        display: "flex",
                        marginTop: '10px'
                    }}>
                        <Form.Label style={{
                            color: "#808080",
                            fontWeight: '500',
                            fontSize: '12px',
                            width: '45%'
                        }}>
                            Phone number
                        </Form.Label>
                    </div>
                    <div style={{
                        display: "flex",
                        marginTop: '5px',
                        gap: '10px'
                    }}>
                        <input style={{
                            width: '100%',
                            padding: "4px 8px",
                            border: "1px solid #E7E7E7",
                            borderRadius: "5px"
                        }} type="text" defaultValue={props.phoneNo}
                            onChange={props.onPhoneNoChange}
                            name="phoneNo"
                        />
                    </div>
                    <div style={{
                        display: "flex",
                        marginTop: '10px'
                    }}>
                        <Form.Label style={{
                            color: "#808080",
                            fontWeight: '500',
                            fontSize: '12px',
                        }}>
                            Weight
                        </Form.Label>
                        <Form.Label style={{
                            color: "red",
                            fontWeight: '500',
                            fontSize: '16px',
                            marginLeft: '8px'
                        }}>
                            {"*"}
                        </Form.Label>
                    </div>
                    <div style={{
                        display: "flex",
                        marginTop: '5px',
                        gap: '10px'
                    }}>
                        <input
                            style={{
                                marginTop: "-10px"
                            }}
                            className={props.toThirty ? styles.package : undefined}
                            type="radio"
                            name="switchToggle"
                            value={`to 30 kg`}
                            id="to30kg"
                            onClick={() => props.handleToThirty()}
                            checked={props.toThirty}
                            readOnly
                        />
                        <Form.Label style={{
                            color: "#808080",
                            fontWeight: '500',
                            fontSize: '12px',
                        }}>
                            to 30 kg
                        </Form.Label>
                        <input
                            style={{
                                marginTop: "-10px"
                            }}
                            className={props.moreThirty ? styles.package : undefined}
                            type="radio"
                            name="switchToggle"
                            value={`more 30 kg`}
                            id="more30kg"
                            onClick={() => props.handleMoreThirty()}
                            checked={props.moreThirty}
                            readOnly
                        />
                        <Form.Label style={{
                            color: "#808080",
                            fontWeight: '500',
                            fontSize: '12px',
                        }}>
                            more 30 kg
                        </Form.Label>
                    </div>
                    <div style={{
                        display: "flex",
                        marginTop: '10px',
                        justifyContent: "center",
                        alignItems: 'center',
                    }}>
                        <Button
                            onClick={() => {
                                props.handleSaveEdited();
                                props.setIsAgentRequest(false);
                                props.setIsAgentManagement(false);
                                props.setAgentList(true)
                                props.setEditAgentForm(false)
                            }}
                            style={{
                                background: "#00902F",
                                border: "none",
                                padding: "7px",
                                color: "white",
                                width: '50%'
                            }}>Save</Button>
                    </div>
                </Modal.Body>
            </GeneralModal>
        </>
    )
}