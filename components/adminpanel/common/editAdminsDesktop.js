import Image from "next/image";
import { Form } from "react-bootstrap";
import BtnComp from "./btnComp";

export default function EditAdminsDesktop(props) {
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
                    Edit Admin
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
                    <Form.Label style={{
                        fontSize: "11px",
                        fontWeight: 400
                    }}>
                        Admin #00128
                    </Form.Label>
                    <Form.Label style={{
                        fontSize: "11px",
                        color: "black",
                        fontWeight: 500
                    }}>
                        First name:
                    </Form.Label>
                    <input value={"Alex"}
                        readOnly
                        style={{
                            border: "1px solid #E7E7E7",
                            width: "100%",
                            paddingLeft: "10px",
                            fontSize: "11px",
                            marginTop: "-10px"
                        }} type="text" placeholder="" />
                    <Form.Label style={{
                        fontSize: "11px",
                        color: "black",
                        fontWeight: 500
                    }}>
                        Last name:
                    </Form.Label>
                    <input
                        value={"Ekwueme"}
                        readOnly
                        style={{
                            border: "1px solid #E7E7E7",
                            width: "100%",
                            paddingLeft: "10px",
                            fontSize: "11px",
                            marginTop: "-10px"
                        }} type="text" placeholder="" />
                    <Form.Label style={{
                        fontSize: "11px",
                        color: "black",
                        fontWeight: 500
                    }}>
                        Email address:
                    </Form.Label>
                    <input
                        value={"834 8848 84884"}
                        readOnly
                        style={{
                            border: "1px solid #E7E7E7",
                            width: "100%",
                            paddingLeft: "10px",
                            fontSize: "11px",
                            marginTop: "-10px"
                        }} type="text" placeholder="" />
                    <Form.Label style={{
                        fontSize: "11px",
                        color: "black",
                        fontWeight: 500
                    }}>
                        Phone number:
                    </Form.Label>
                    <input
                        value={"834 8848 84884"}
                        readOnly
                        style={{
                            border: "1px solid #E7E7E7",
                            width: "100%",
                            paddingLeft: "10px",
                            fontSize: "11px",
                            marginTop: "-10px"
                        }} type="text" placeholder="" />
                    <Form.Label style={{
                        fontSize: "11px",
                        color: "black",
                        fontWeight: 500
                    }}>
                        Temporary password:
                    </Form.Label>
                    <input
                        value={"834 8848 84884"}
                        readOnly
                        style={{
                            border: "1px solid #E7E7E7",
                            width: "100%",
                            paddingLeft: "10px",
                            fontSize: "11px",
                            marginTop: "-10px"
                        }} type="text" placeholder="" />
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: "column",
                    gap: '10px',
                    width: '48%'
                }}>
                    <Form.Label style={{
                        fontSize: "12px",
                        color: "black",
                        fontWeight: 500
                    }}>
                        USER MANAGEMENT PERMISSIONS
                    </Form.Label>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: "20px",
                        width: '100%',
                        gap: '10px'
                    }}>
                        <Form.Label style={{
                            fontSize: "11px",
                            fontWeight: 400
                        }}>
                            Block Users
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
                            fontSize: "11px",
                            fontWeight: 400
                        }}>
                            See full information
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
                            fontSize: "11px",
                            fontWeight: 400,
                            color: "black"
                        }}>
                            Edit user information
                        </Form.Label>
                        <Image style={{
                            marginRight: "-5px"
                        }} src="/img/switch2.png" width="32" height="30" alt="switch" />
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: "-8px",
                        width: '100%',
                        gap: '10px'
                    }}>
                        <Form.Label style={{
                            fontSize: "11px",
                            fontWeight: 400
                        }}>
                            Provide a premium account
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
                            fontSize: "11px",
                            fontWeight: 400
                        }}>
                            Agents/Drivers request
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
                            fontSize: "11px",
                            fontWeight: 400,
                            color: "black"
                        }}>
                            Appove changes from agents
                        </Form.Label>
                        <Image style={{
                            marginRight: "-5px"
                        }} src="/img/switch2.png" width="32" height="30" alt="switch" />
                    </div>
                    <Form.Label style={{
                        fontSize: "12px",
                        color: "black",
                        fontWeight: 500
                    }}>
                        ORDERS PERMISSIONS
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
                            fontWeight: 400
                        }}>
                            See full information
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
                            fontSize: "11px",
                            fontWeight: 400,
                            color: "black"
                        }}>
                            Edit orders
                        </Form.Label>
                        <Image style={{
                            marginRight: "-5px"
                        }} src="/img/switch2.png" width="32" height="30" alt="switch" />
                    </div>
                    <Form.Label style={{
                        fontSize: "12px",
                        color: "black",
                        fontWeight: 500
                    }}>
                        TRANSACTIONS PERMISSIONS
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
                            fontWeight: 400
                        }}>
                            Refund
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
                            color: 'black'
                        }}>
                            WALLET READ PERMISSION
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
                            color: 'black'
                        }}>
                            WALLET ADMIN PERMISSION
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
                            color: 'black'
                        }}>
                            WALLET TRANSFER PERMISSION
                        </Form.Label>
                        <Image src="/img/switch1.png" width="32" height="30" alt="switch" />
                    </div>
                    <Form.Label style={{
                        fontSize: "12px",
                        color: "black",
                        fontWeight: 500
                    }}>
                        CREATE ADMIN PERMISSIONS
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
                            fontWeight: 400
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
                            fontSize: "11px",
                            fontWeight: 400,
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
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px'
            }}>
                <BtnComp
                    onClick={() => props.setEditAdmins(false)}
                    style={{
                        background: '#00902F',
                        fontSize: '12px',
                        color: 'white',
                        fontWeight: '500',
                        border: "none",
                        width: '30%'
                    }}>
                    Save
                </BtnComp>
            </div>
        </>
    )
}