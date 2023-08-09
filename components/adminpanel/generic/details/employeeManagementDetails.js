import Image from "next/image";
import CustomPagination from "../../customPagination";
import EditModal from "../../common/editModal";
import { useState } from "react";
import AdminFullinfo from "../../adminFullinfo";
import Statistics from "../../common/statistics";
import Review from "../../common/review";

const fullInformation = {
    agentNo: "",
    dateAdded: "",
    name: "",
    address: '',
    phoneNo: "",
    weight: '',
    dimensions: '',
    store: ["/img/storeimg.png", "/img/storeimg2.png"],
    regDoc: "/img/regdoc.png",
    guarantorName1: "Ufere Goodnews",
    guarantorAddress1: "Greenland Estate, Lekki - Lagos",
    guarantorPhoneNo1: "998 772 26 66",
    guarantorName2: "Ufere Goodnews",
    guarantorAddress2: "Greenland Estate, Lekki - Lagos",
    guarantorPhoneNo2: "998 772 26 66",
}

export default function EmployeeManagementDetails(props) {
    const [editModal, setEditModal] = useState(false)
    const [adminFullinfo, setAdminFullinfo] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [address, setAddress] = useState("")
    const [editEmail, setEditEmail] = useState("")
    const [editDept, setEditDept] = useState("")
    const [employeeId, setEmployeeId] = useState()
    const [statistics, setStatistics] = useState(false)
    const [review, setReview] = useState(false)

    const [fullInfo, setFullInfo] = useState(fullInformation)
    const [agentNoEdit, setAgentNoEdit] = useState("")
    const handleFullInfo = () => {
        const filteredData = props.adminAgentData.filter((data) => data.agentNo === agentNoEdit)[0]
        setFullInfo((prevState) => {
            return {
                ...prevState,
                agentNo: filteredData?.agentNo,
                dateAdded: filteredData?.dateAdded,
                name: filteredData?.businessName,
                address: filteredData?.address,
                phoneNo: filteredData?.phoneNumber,
                weight: filteredData?.weight,
                dimensions: filteredData?.dimensions
            }
        })
    }
    const handleAdminFullinfo = () => {
        setAdminFullinfo(false)
    }


    function fetchData(id) {
        console.log('id', id)
        const data = props.adminAgentData[id]
        setFirstName(data.businessName.split(" ")[0])
        setLastName(data.businessName.split(" ")[1])
        setPhoneNumber(data.phoneNumber)
        setAddress(data.address)
        setEditEmail(data.email)
        setEditDept(data.department)
    }

    const onChangeFirstName = (event) => {
        setFirstName(event.target.value)
    }
    const onChangeLastName = (event) => {
        setLastName(event.target.value)
    }
    const onChangeAddress = (event) => {
        setAddress(event.target.value)
    }
    const onChangePhoneNumber = (event) => {
        setPhoneNumber(event.target.value)
    }
    const onChangeEditEmail = (event) => {
        setEditEmail(event.target.value)
    }
    const onChangeEditDept = (event) => {
        setEditDept(event.target.value)
    }

    const handleEdit = () => {
        const data = props.adminAgentData[employeeId]
        data.businessName = firstName + " " + lastName
        data.address = address
        data.phoneNumber = phoneNumber
        data.email = editEmail
        data.department = editDept

        props.adminAgentData.splice(employeeId, 1, data)
        console.log("saved")
        setEditModal(false)
    }
    const handleClearData = () => {
        setFirstName("")
        setLastName("")
        setAddress("")
        setPhoneNumber("")
    }
    const handleEditOption = () => {
        setAdminFullinfo(false)
    }

    const handleStatistics = () => {
        setStatistics(false)
    }

    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: 'space-between',
                width: '100%'
            }}>
                <div style={{
                    width: '15%',
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
                    E-mail
                </div>
                <div style={{
                    width: '20%',
                    color: "#A6A6A6",
                    fontSize: '12px'
                }}>
                    Address
                </div>
                <div style={{
                    width: '15%',
                    color: "#A6A6A6",
                    fontSize: '12px'
                }}>
                    Phone number
                </div>
                <div style={{
                    width: '15%',
                    color: "#A6A6A6",
                    fontSize: '12px'
                }}>
                    Department
                </div>
                <div style={{
                    width: '15%',
                    color: "#A6A6A6",
                    fontSize: '12px'
                }}>
                    {"  "}
                </div>
            </div>
            <hr />
            {props.date.length > 0 ? props.adminAgentData.filter((data) => data.dateAdded === props.date)
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
                                width: '15%',
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
                                {data.email}
                            </div>
                            <div style={{
                                width: '20%',
                                color: "#A6A6A6",
                                fontSize: '12px',
                                color: "black"
                            }}>
                                {data.address}
                            </div>
                            <div style={{
                                width: '15%',
                                color: "#A6A6A6",
                                fontSize: '12px',
                                color: "black"
                            }}>
                                {data.phoneNumber}
                            </div>
                            <div style={{
                                width: '15%',
                                color: "#A6A6A6",
                                fontSize: '12px',
                                color: "black"
                            }}>
                                {data.department}
                            </div>
                            <div style={{
                                width: '15%',
                                color: "#A6A6A6",
                                fontSize: '12px'
                            }}>
                                <Image
                                    onClick={() => {
                                        setAgentNoEdit(data.agentNo);
                                        setAdminFullinfo(true)
                                        handleFullInfo()
                                    }}
                                    style={{
                                        width: "19px",
                                        maxWidth: "100%",
                                        marginLeft: '10px',
                                        cursor: "pointer"
                                    }}
                                    src={data.action[0]}
                                    width="19"
                                    height="19"
                                    alt="badge"
                                />
                                <Image
                                    onClick={() => {
                                        setEditModal(true)
                                        fetchData(index)
                                        setEmployeeId(index)
                                    }}
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
                                        marginLeft: '10px'
                                    }}
                                    src={data.action[2]}
                                    width="19"
                                    height="19"
                                    alt="badge"
                                />
                            </div>
                        </div>
                        <hr style={{
                            marginTop: '-0.8px'
                        }} />
                    </>
                )) : props.adminAgentData
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
                                    width: '15%',
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
                                    {data.email}
                                </div>
                                <div style={{
                                    width: '20%',
                                    color: "#A6A6A6",
                                    fontSize: '12px',
                                    color: "black"
                                }}>
                                    {data.address}
                                </div>
                                <div style={{
                                    width: '15%',
                                    color: "#A6A6A6",
                                    fontSize: '12px',
                                    color: "black"
                                }}>
                                    {data.phoneNumber}
                                </div>
                                <div style={{
                                    width: '15%',
                                    color: "#A6A6A6",
                                    fontSize: '12px',
                                    color: "black"
                                }}>
                                    {data.department}
                                </div>
                                <div style={{
                                    width: '15%',
                                    color: "#A6A6A6",
                                    fontSize: '12px'
                                }}>
                                    <Image
                                        onClick={() => {
                                            setAgentNoEdit(data.agentNo);
                                            setAdminFullinfo(true)
                                            handleFullInfo()
                                        }}
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
                                        onClick={() => {
                                            setEditModal(true)
                                            fetchData(index)
                                            setEmployeeId(index)
                                        }}
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
                                            marginLeft: '10px'
                                        }}
                                        src={data.action[2]}
                                        width="19"
                                        height="19"
                                        alt="badge"
                                    />
                                </div>
                            </div>
                            <hr style={{
                                marginTop: '-0.8px'
                            }} />
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
            <EditModal
                editModal={editModal}
                setEditModal={setEditModal}
                handleClearData={handleClearData}
                caption={"Edit Driver Manager"}
                firstName={firstName}
                onChangeFirstName={onChangeFirstName}
                lastName={lastName}
                onChangeLastName={onChangeLastName}
                address={address}
                onChangeAddress={onChangeAddress}
                phoneNumber={phoneNumber}
                onChangePhoneNumber={onChangePhoneNumber}
                handleEdit={handleEdit}
                isEmployeesManagement={props.isEmployeesManagement}
                editEmail={editEmail}
                onChangeEditEmail={onChangeEditEmail}
                editDept={editDept}
                onChangeEditDept={onChangeEditDept}
            />
            <AdminFullinfo
                style={{
                    marginLeft: '8%'
                }}
                adminFullinfo={adminFullinfo}
                setAdminFullinfo={setAdminFullinfo}
                isEmployeesManagement={props.isEmployeesManagement}
                agentNo={fullInfo.agentNo}
                dateAdded={fullInfo.dateAdded}
                name={fullInfo.name}
                address={fullInfo.address}
                phoneNo={fullInfo.phoneNo}
                weight={fullInfo.weight}
                dimensions={fullInfo.dimensions}
                guarantorName1={fullInfo.guarantorName1}
                guarantorAddress1={fullInfo.guarantorAddress1}
                guarantorPhone1={fullInfo.guarantorPhoneNo1}
                guarantorName2={fullInfo.guarantorName2}
                guarantorAddress2={fullInfo.guarantorAddress2}
                guarantorPhone2={fullInfo.guarantorPhoneNo2}
                handleAdminFullinfo={handleAdminFullinfo}
                setStatistics={setStatistics}
                setReview={setReview}
                handleEditOption={handleEditOption}
            />
            <Statistics
                statistics={statistics}
                setStatistics={setStatistics}
                caption={props.isEmployeesManagement ? "Employee Manager Statistics" : undefined}
                handleStatistics={handleStatistics}
            />
            <Review
                review={review}
                setReview={setReview}
                caption={props.isEmployeesManagement ? "Reviews" : undefined}
                reviewName={"Alex Ekwueme"}
                reviewDate={"22.03.2021"}
                reviewDescription={"There is no program that walks you through exactly the way you want" +
                    " There is no program that walks you through exactly the way you want." +
                    " There is no program that walks you through exactly the way you want."}
            />
        </>
    )
}