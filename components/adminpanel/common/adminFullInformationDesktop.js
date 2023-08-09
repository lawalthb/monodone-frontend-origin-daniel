import Image from "next/image";
import { Form } from "react-bootstrap";
import BtnComp from './btnComp'

export default function AdminFullInformationDesktop(props) {
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Form.Label style={{
                    fontSize: "16px",
                    color: "black",
                    fontWeight: 600
                }}>
                    Full Information
                </Form.Label>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: "20px",
                width: '100%',
                gap: '10px'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: "column",
                    gap: '10px',
                    width: '48%'
                }}>
                    <Form.Label style={{
                        fontSize: "11px",
                        color: "black",
                        fontWeight: 500
                    }}>
                        ABOUT:
                    </Form.Label>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        gap: '10px'
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: "column",
                            gap: '10px',
                            width: '48%'
                        }}>
                            <Form.Label style={{
                                fontSize: "11px",
                                fontWeight: 400
                            }}>
                                Admin No
                            </Form.Label>
                            <Form.Label style={{
                                fontSize: "11px",
                                fontWeight: 400
                            }}>
                                Full name
                            </Form.Label>
                            <Form.Label style={{
                                fontSize: "11px",
                                fontWeight: 400
                            }}>
                                Email address
                            </Form.Label>
                            <Form.Label style={{
                                fontSize: "11px",
                                fontWeight: 400
                            }}>
                                Phone number
                            </Form.Label>
                            <Form.Label style={{
                                fontSize: "11px",
                                fontWeight: 400
                            }}>
                                Temporary password
                            </Form.Label>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: "column",
                            gap: '10px',
                            width: '48%'
                        }}>
                            <Form.Label style={{
                                fontSize: "11px",
                                fontWeight: 500,
                                color: 'black'
                            }}>
                                #00128
                            </Form.Label>
                            <Form.Label style={{
                                fontSize: "11px",
                                fontWeight: 500,
                                color: 'black'
                            }}>
                                Alex Ekwueme
                            </Form.Label>
                            <Form.Label style={{
                                fontSize: "11px",
                                fontWeight: 500,
                                color: 'black'
                            }}>
                                885 662 663 63636
                            </Form.Label>
                            <Form.Label style={{
                                fontSize: "11px",
                                fontWeight: 500,
                                color: 'black'
                            }}>
                                885 662 663 63636
                            </Form.Label>
                            <Form.Label style={{
                                fontSize: "11px",
                                fontWeight: 500,
                                color: 'black'
                            }}>
                                885 662 663 63636
                            </Form.Label>
                        </div>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: "column",
                    gap: '10px',
                    width: '48%'
                }}>
                    <Form.Label style={{
                        fontSize: "11px",
                        color: "black",
                        fontWeight: 500
                    }}>
                        USER MANAGEMENT PERMISSIONS
                    </Form.Label>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        gap: '10px'
                    }}>
                        <Form.Label style={{
                            fontSize: "11px",
                            fontWeight: 500
                        }}>
                            Block users
                        </Form.Label>
                        <Form.Label style={{
                            fontSize: "11px",
                            fontWeight: 500,
                            color: "black",
                        }}>
                            Yes
                        </Form.Label>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        gap: '10px'
                    }}>
                        <Form.Label style={{
                            fontSize: "11px",
                            fontWeight: 500
                        }}>
                            See Full information
                        </Form.Label>
                        <Form.Label style={{
                            fontSize: "11px",
                            fontWeight: 500,
                            color: "black",
                        }}>
                            No
                        </Form.Label>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        gap: '10px'
                    }}>
                        <Form.Label style={{
                            fontSize: "11px",
                            fontWeight: 500
                        }}>
                            Edit user information
                        </Form.Label>
                        <Form.Label style={{
                            fontSize: "11px",
                            fontWeight: 500,
                            color: "black",
                        }}>
                            No
                        </Form.Label>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        gap: '10px'
                    }}>
                        <Form.Label style={{
                            fontSize: "11px",
                            fontWeight: 500
                        }}>
                            Provide a premium account
                        </Form.Label>
                        <Form.Label style={{
                            fontSize: "11px",
                            fontWeight: 500,
                            color: "black",
                        }}>
                            No
                        </Form.Label>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        gap: '10px'
                    }}>
                        <Form.Label style={{
                            fontSize: "11px",
                            fontWeight: 500
                        }}>
                            Agents/Drivers request
                        </Form.Label>
                        <Form.Label style={{
                            fontSize: "11px",
                            fontWeight: 500,
                            color: "black",
                        }}>
                            No
                        </Form.Label>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        gap: '10px'
                    }}>
                        <Form.Label style={{
                            fontSize: "11px",
                            fontWeight: 500
                        }}>
                            Approve changes from agents
                        </Form.Label>
                        <Form.Label style={{
                            fontSize: "11px",
                            fontWeight: 500,
                            color: "black",
                        }}>
                            No
                        </Form.Label>
                    </div>
                    <Form.Label style={{
                        fontSize: "11px",
                        color: "black",
                        fontWeight: 500
                    }}>
                        ORDERS PERMISSIONS:
                    </Form.Label>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        gap: '10px'
                    }}>
                        <Form.Label style={{
                            fontSize: "11px",
                            fontWeight: 500
                        }}>
                            Approve changes from agents
                        </Form.Label>
                        <Form.Label style={{
                            fontSize: "11px",
                            fontWeight: 500,
                            color: "black",
                        }}>
                            Yes
                        </Form.Label>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        gap: '10px'
                    }}>
                        <Form.Label style={{
                            fontSize: "11px",
                            fontWeight: 500
                        }}>
                            Edit Orders
                        </Form.Label>
                        <Form.Label style={{
                            fontSize: "11px",
                            fontWeight: 500,
                            color: "black",
                        }}>
                            No
                        </Form.Label>
                    </div>
                    <Form.Label style={{
                        fontSize: "11px",
                        color: "black",
                        fontWeight: 500
                    }}>
                        TRANSACTIONS PERMISSIONS:
                    </Form.Label>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        gap: '10px'
                    }}>
                        <Form.Label style={{
                            fontSize: "11px",
                            fontWeight: 500
                        }}>
                            Refund
                        </Form.Label>
                        <Form.Label style={{
                            fontSize: "11px",
                            fontWeight: 500,
                            color: "black",
                        }}>
                            Yes
                        </Form.Label>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        gap: '10px'
                    }}>
                        <Form.Label style={{
                            fontSize: "11px",
                            color: "black",
                            fontWeight: 500
                        }}>
                            WALLET READ PERMISSION:
                        </Form.Label>
                        <Form.Label style={{
                            fontSize: "11px",
                            fontWeight: 500,
                            color: "black",
                        }}>
                            No
                        </Form.Label>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        gap: '10px'
                    }}>
                        <Form.Label style={{
                            fontSize: "11px",
                            color: "black",
                            fontWeight: 500
                        }}>
                            WALLET ADMIN PERMISSION:
                        </Form.Label>
                        <Form.Label style={{
                            fontSize: "11px",
                            fontWeight: 500,
                            color: "black",
                        }}>
                            No
                        </Form.Label>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        gap: '10px'
                    }}>
                        <Form.Label style={{
                            fontSize: "11px",
                            color: "black",
                            fontWeight: 500
                        }}>
                            WALLET TRANSFER PERMISSION:
                        </Form.Label>
                        <Form.Label style={{
                            fontSize: "11px",
                            fontWeight: 500,
                            color: "black",
                        }}>
                            No
                        </Form.Label>
                    </div>
                    <Form.Label style={{
                        fontSize: "11px",
                        color: "black",
                        fontWeight: 500
                    }}>
                        ADMIN MANAGEMENT PERMISSIONS
                    </Form.Label>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: "-8px",
                        width: '100%',
                        gap: '10px'
                    }}>
                        <Form.Label style={{
                            fontSize: "11px",
                            fontWeight: 500,
                        }}>
                            Block admin
                        </Form.Label>
                        <Image src="/img/switch1.png" width="32" height="30" alt="switch" />
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: "-8px",
                        width: '100%',
                        gap: '10px'
                    }}>
                        <Form.Label style={{
                            fontSize: "12px",
                            fontWeight: 500,
                            color: "black"
                        }}>
                            Give admin permissions
                        </Form.Label>
                        <Image style={{
                            marginRight: "-5px"
                        }} src="/img/switch2.png" width="32" height="30" alt="switch" />
                    </div>
                </div>
            </div>
            <div style={{
                display: "flex",
                justifyContent: 'center',
                alignItems: "center",
                marginTop: "20px",
                gap: '20px'
            }}>
                <BtnComp
                    onClick={() => props.setAdminFullInformation(false)}
                    style={{
                        background: "#00902F",
                        border: "none",
                        padding: "7px",
                        color: "white",
                        width: '30%'
                    }}>
                    Ok
                </BtnComp>
                <BtnComp
                onClick={() => {
                    props.setAdminFullInformation(false)
                    props.setEditAdmins(true)
                }}
                    style={{
                        background: "transparent",
                        border: "1px solid #00902F",
                        padding: "7px",
                        width: '30%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: "center",
                        gap: "10px",
                        height: "40px"
                    }}>
                    <Image
                        style={{
                            width: "13px",
                            maxWidth: "100%",
                        }}
                        src="/img/editadmin.png"
                        width="13"
                        height="13"
                        alt="regdoc"
                    />
                    <Form.Label style={{
                        fontSize: "13px",
                        color: "black",
                        marginTop: '4px'
                    }}>
                        Edit
                    </Form.Label>
                </BtnComp>
            </div>
        </>
    )
}