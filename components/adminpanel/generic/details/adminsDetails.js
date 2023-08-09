import Image from "next/image";
import CustomPagination from "../../customPagination";
import AddAdminsComp from "../../common/addAdminsComp";
import AdminFullInformation from "../../common/adminFullInformation";
import EditAdmins from "../../common/editAdmins";
import ResetPassword from "../../common/resetPassword";

export default function AdminsDetails(props) {
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: "100%",
            }}>
                <div style={{
                    width: '10%',
                    color: "#A6A6A6",
                    fontSize: '12px'
                }}>
                    Admin no
                </div>
                <div style={{
                    width: '20%',
                    color: "#A6A6A6",
                    fontSize: '12px'
                }}>
                    Date added
                </div>
                <div style={{
                    width: '20%',
                    color: "#A6A6A6",
                    fontSize: '12px'
                }}>
                    Name
                </div>
                <div style={{
                    width: '20%',
                    color: "#A6A6A6",
                    fontSize: '12px'
                }}>
                    Phone number
                </div>
                <div style={{
                    width: '20%',
                    color: "#A6A6A6",
                    fontSize: '12px'
                }}>
                    {" "}
                </div>
            </div>
            <hr />
            {props.adminAgentData
                .slice((parseInt(props.pageNumber) * 10) - 10, parseInt(props.pageNumber) * 10)
                .map((data, index) => (
                    <>
                        <div
                            key={index}
                            style={{
                                display: "flex",
                                justifyContent: 'space-between',
                                width: '100%'
                            }}>
                            <div style={{
                                width: '10%',
                                color: "#A6A6A6",
                                fontSize: '12px',
                                color: "black"
                            }}>
                                {data.agentNo}
                            </div>
                            <div style={{
                                width: '20%',
                                color: "#A6A6A6",
                                fontSize: '12px',
                                color: "black"
                            }}>
                                {data.dateAdded}
                            </div>
                            <div style={{
                                width: '20%',
                                color: "#A6A6A6",
                                fontSize: '12px',
                                color: "black"
                            }}>
                                {data.businessName}
                            </div>
                            <div style={{
                                width: '20%',
                                color: "#A6A6A6",
                                fontSize: '12px',
                                color: "black"
                            }}>
                                {data.phoneNumber}
                            </div>
                            <div style={{
                                width: '20%',
                                color: "#A6A6A6",
                                fontSize: '12px'
                            }}>
                                <Image
                                    onClick={() => props.setAdminFullInformation(true)}
                                    style={{
                                        width: "19px",
                                        maxWidth: "100%",
                                        marginLeft: '10px',
                                        cursor: 'pointer'
                                    }}
                                    src={data.action[0]}
                                    width="19"
                                    height="19"
                                    alt="badge"
                                />
                                <Image
                                    onClick={() => props.setEditAdmins(true)}
                                    style={{
                                        width: "19px",
                                        maxWidth: "100%",
                                        marginLeft: '10px',
                                        cursor: 'pointer'
                                    }}
                                    src={data.action[1]}
                                    width="19"
                                    height="19"
                                    alt="badge"
                                />
                                <Image
                                    style={{
                                        width: "19px",
                                        maxWidth: "100%",
                                        marginLeft: '10px',
                                        cursor: 'pointer'
                                    }}
                                    src={data.action[2]}
                                    width="19"
                                    height="19"
                                    alt="badge"
                                />
                            </div>
                        </div>
                        <hr />
                    </>
                ))}
            <CustomPagination
                adminAgentData={props.adminAgentData}
                setPageNumbers={props.setPageNumbers}
                activePagenumber={props.activePagenumber}
                pageNumbers={props.pageNumbers}
                setPageNumber={props.setPageNumber}
                setActivePagenumber={props.setActivePagenumber}
            />
            <AddAdminsComp
                addAdmins={props.addAdmins}
                setAddAdmins={props.setAddAdmins}
                caption={"Add Admin"}
                btnName={"Confirm"}
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
                style={{
                    marginLeft: '5%'
                }}
                resetPassword={props.resetPassword}
                setResetPasswword={props.setResetPasswword}
            />
        </>
    )
}