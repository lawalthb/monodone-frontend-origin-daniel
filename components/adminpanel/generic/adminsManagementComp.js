import Image from "next/image"
import { useRef } from "react"
import { Form } from "react-bootstrap"
import BtnComp from "../common/btnComp"

export default function AdminsManagementComp(props) {
    const ref = useRef()
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: 'column',
                width: '100%'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: "100%"
                }}>
                    <Form.Label style={{
                        fontSize: '16px',
                        fontWeight: 600,
                        color: 'black'
                    }}>
                        Admins
                    </Form.Label>
                    <div style={{
                        display: 'flex',
                        gap: '10px'
                    }}>
                        <input style={{
                            background: "#FFFFFF",
                            padding: '9px 16px 10px',
                            borderRadius: "5px",
                            border: "1px solid #E7E7E7"
                        }} type="text" placeholder="search" />
                        <BtnComp
                            onClick={() => props.setResetPasswword(true)}
                            style={{
                                border: "1px solid #7CC427",
                                background: 'transparent',
                                color: "black",
                                fontSize: '12px',
                                paddingLeft: "20px",
                                paddingRight: '20px'
                            }}>
                            Reset password
                        </BtnComp>
                        <BtnComp
                            onClick={() => props.setAddAdmins(true)}
                            style={{
                                border: "1px solid #7CC427",
                                background: 'transparent',
                                color: "black",
                                fontSize: '12px',
                                paddingLeft: "20px",
                                paddingRight: '20px',
                                display: 'flex',
                                gap: "10px",
                            }}>
                            <Form.Label style={{
                                fontSize: "12px",
                                color: '#7CC427',
                                marginTop: "3px"
                            }}>
                                {"+"}
                            </Form.Label>
                            <Form.Label
                                style={{
                                    fontSize: "12px",
                                    color: 'black',
                                    marginTop: "3px"
                                }}>
                                Add admin
                            </Form.Label>
                        </BtnComp>
                    </div>
                </div>
                <hr />
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <input style={{
                        padding: '5px',
                        width: "120px",
                        border: "1px solid #E7E7E7"
                    }} type="text" placeholder="Date"
                        ref={ref}
                        onFocus={() => (ref.current.type = "date")}
                        onBlur={() => (ref.current.type = "text")}
                    />
                    <div style={{
                        display: "flex",
                        gap: '5px'
                    }}>
                        <Form.Label style={{
                            fontSize: "12px",
                            marginTop: '10px'
                        }}>Sort by</Form.Label>
                        <select style={{
                            width: '100px',
                            padding: '8px',
                            border: "1px solid #E7E7E7"
                        }}
                        >
                            <option value={""}>Date</option>
                        </select>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    marginTop: "10px",
                }}>
                    <Form.Label style={{
                        fontSize: "12px",
                        marginTop: '10px',
                        color: "black",
                        marginLeft: '10px',
                    }}>Date:</Form.Label>
                    <BtnComp style={{
                        display: 'flex',
                        background: "#E7E7E7",
                        border: 'none',
                        height: "19px",
                        padding: "7px",
                        marginTop: '10px',
                        marginLeft: "10px"
                    }}>
                        <Form.Label style={{
                            fontSize: "10px",
                            color: "#A6A6A6",
                            marginTop: '-5px',
                        }}>22 July 2022</Form.Label>
                        <Image
                            style={{
                                width: "10px",
                                maxWidth: "100%",
                                marginLeft: '10px',
                                marginTop: '-3px',
                            }}
                            src="/img/canceladmin.png"
                            width="10"
                            height="10"
                            alt="badge"
                        />
                    </BtnComp>
                    <BtnComp style={{
                        display: 'flex',
                        background: "#E7E7E7",
                        border: 'none',
                        height: "19px",
                        padding: "7px",
                        marginTop: '10px',
                        marginLeft: "10px"
                    }}>
                        <Form.Label style={{
                            fontSize: "10px",
                            color: "#A6A6A6",
                            marginTop: '-5px',
                        }}>22 July 2022</Form.Label>
                        <Image
                            style={{
                                width: "10px",
                                maxWidth: "100%",
                                marginLeft: '10px',
                                marginTop: '-3px',
                            }}
                            src="/img/canceladmin.png"
                            width="10"
                            height="10"
                            alt="badge"
                        />
                    </BtnComp>
                </div>
            </div>
        </>
    )
}