import Image from "next/image";
import { useRef } from "react";
import { Form } from "react-bootstrap";
import BtnComp from "../common/btnComp";
import MobileHeader from "./commonComp/header";
import AdminpanelMobileRecords from "./commonComp/adminpanelMobileRecords";
import MobilePagination from "./commonComp/mobilePagination";
import { useState } from "react";
import AddAdminsComp from "../common/addAdminsComp";
import AdminFullInformation from "../common/adminFullInformation";
import EditAdmins from "../common/editAdmins";
import ResetPassword from "../common/resetPassword";

export default function AdminpanelContentMobileAdmins(props) {
    const ref = useRef()
    const [multiplesTen, setMultiplesTen] = useState([])
    const [multipleTen, setMultipleTen] = useState("")
    return (
        <>
            <MobileHeader
                caption={"Admin"}
            />
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: "100%",
                marginTop: '10px'
            }}>
                <BtnComp
                    onClick={() => props.setResetPasswword(true)}
                    style={{
                        border: "1px solid #7CC427",
                        background: 'transparent',
                        color: "black",
                        fontSize: '12px',
                        paddingLeft: "20px",
                        paddingRight: '20px',
                        width: '45%'
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
                        justifyContent: 'center',
                        gap: "10px",
                        width: '45%'
                    }}>
                    <Form.Label style={{
                        fontSize: "12px",
                        color: '#7CC427',
                        marginTop: "3px"
                    }}>
                        {"+"}
                    </Form.Label>
                    <Form.Label style={{
                        fontSize: "12px",
                        color: 'black',
                        marginTop: "3px"
                    }}>
                        Add admin
                    </Form.Label>
                </BtnComp>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: "100%",
                marginTop: '20px'
            }}>
                <BtnComp
                    style={{
                        display: 'flex',
                        gap: "20px",
                        background: 'transparent',
                        border: "1px solid #A6A6A6",
                        padding: '3px',
                        width: "40%",
                        height: '34px',
                    }}>
                    <Image
                        style={{
                            width: "18px",
                            maxWidth: "100%",
                            marginTop: '5px',
                            marginLeft: "6px"
                        }}
                        src="/img/filteradmin.png"
                        width="18"
                        height="18"
                        alt="badge"
                    />
                    <Form.Label style={{
                        fontWeight: "400",
                        fontSize: "13px",
                        color: "#151515",
                        marginTop: '3px'
                    }}>
                        Filter here
                    </Form.Label>
                </BtnComp>
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
            {props.adminAgentData
                .slice(parseInt(multipleTen - 10), parseInt(multipleTen))
                .map((data, idx) => (
                    <>
                        <div key={idx}>
                            <AdminpanelMobileRecords
                                data={data}
                                idx={idx}
                                isAdmins={props.isAdmins}
                                firstHeader={"Admin no"}
                                secondHeader="Date added"
                                thirdHeader="Name"
                                fourthHeader="Phone number"
                                headerActions="Actions"
                                setAdminFullInformation={props.setAdminFullInformation}
                                setEditAdmins={props.setEditAdmins}
                            />
                        </div>
                    </>
                ))}
            <AddAdminsComp
                addAdmins={props.addAdmins}
                setAddAdmins={props.setAddAdmins}
                caption={"Add Admin"}
                btnName={"Confirm"}
            />
            <MobilePagination
                adminAgentData={props.adminAgentData}
                multiplesTen={multiplesTen}
                setMultiplesTen={setMultiplesTen}
                setMultipleTen={setMultipleTen}
                multipleTen={multipleTen}
            />
            <AdminFullInformation
                adminFullInformation={props.adminFullInformation}
                setAdminFullInformation={props.setAdminFullInformation}
                setEditAdmins={props.setEditAdmins}
            />
            <EditAdmins
                editAdmins={props.editAdmins}
                setEditAdmins={props.setEditAdmins}
            />
            <ResetPassword
                resetPassword={props.resetPassword}
                setResetPasswword={props.setResetPasswword}
            />
        </>
    )
}