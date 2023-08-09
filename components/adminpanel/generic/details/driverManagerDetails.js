import Image from "next/image";
import { useState, useEffect } from "react";
import AdminFullinfo from "../../adminFullinfo";
import EditModal from "../../common/editModal";
import Review from "../../common/review";
import Statistics from "../../common/statistics";
import CustomPagination from "../../customPagination";

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

export default function DriverManagerDetails(props) {
    const [editModal, setEditModal] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [address, setAddress] = useState("")
    const [vehicleType, setVehicleType] = useState("")
    const [vehicleTypes, setVehicleTypes] = useState([])
    const [driverId, setDriverId] = useState()
    const [adminFullinfo, setAdminFullinfo] = useState(false)
    const [fullInfo, setFullInfo] = useState(fullInformation)
    const [agentNoEdit, setAgentNoEdit] = useState("")
    const [statistics, setStatistics] = useState(false)
    const [review, setReview] = useState(false)

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
        props.handleDriverList()
    }

    function fetchData(id) {
        console.log('id', id)
        const data = props.adminAgentData[id]
        // console.log("the data", data)
        setFirstName(data.businessName.split(" ")[0])
        setLastName(data.businessName.split(" ")[1])
        setPhoneNumber(data.phoneNumber)
        setAddress(data.address)
        setVehicleType(data.vehicleType)

        const newVehicleTypes = []

        const allVehicleTypes = props.adminAgentData.map((dt) => dt.vehicleType)
        const vehicleTypeSet = new Set(allVehicleTypes)
        for (let item of vehicleTypeSet) {
            newVehicleTypes.push(item)
        }
        setVehicleTypes(newVehicleTypes)
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
    const onChangeVehicleType = (event) => {
        setVehicleType(event.target.value)
    }

    const handleEdit = () => {
        const data = props.adminAgentData[driverId]
        data.businessName = firstName + " " + lastName
        data.address = address
        data.phoneNumber = phoneNumber
        data.vehicleType = vehicleType

        props.adminAgentData.splice(driverId, 1, data)
        console.log("saved")
        setEditModal(false)
        props.handleDriverList()
    }

    const handleClearData = () => {
        setFirstName("")
        setLastName("")
        setAddress("")
        setPhoneNumber("")
        setVehicleType("")
    }

    const handleStatistics = () => {
        setStatistics(false)
        props.handleDriverList()
    }

    const handleEditOption = () => {
        setAdminFullinfo(false)
        props.handleDriverList()
    }

    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: 'space-between',
                width: '100%'
            }}>
                <div style={{
                    width: '10.7%',
                    color: "#A6A6A6",
                    fontSize: '12px'
                }}>
                    Name
                </div>
                <div style={{
                    width: '11.7%',
                    color: "#A6A6A6",
                    fontSize: '12px'
                }}>
                    Date added
                </div>
                <div style={{
                    width: '12.7%',
                    color: "#A6A6A6",
                    fontSize: '12px'
                }}>
                    Rate
                </div>
                <div style={{
                    width: '15%',
                    color: "#A6A6A6",
                    fontSize: '12px'
                }}>
                    Address
                </div>
                <div style={{
                    width: '11.7%',
                    color: "#A6A6A6",
                    fontSize: '12px'
                }}>
                    Phone number
                </div>
                <div style={{
                    width: '11.7%',
                    color: "#A6A6A6",
                    fontSize: '12px'
                }}>
                    License
                </div>
                <div style={{
                    width: '9.7%',
                    color: "#A6A6A6",
                    fontSize: '12px'
                }}>
                    Vehicle Type
                </div>
                <div style={{
                    width: '13.7%',
                    color: "#A6A6A6",
                    fontSize: '12px'
                }}>
                    {"  "}
                </div>
            </div>
            <hr />
            {props.rate.length > 0 ? props.adminAgentData.filter((data) => data.rate === props.rate)
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
                                width: '9.7%',
                                color: "#A6A6A6",
                                fontSize: '12px',
                                color: "black"
                            }}>
                                {data.businessName}
                            </div>
                            <div style={{
                                width: '11.7%',
                                color: "#A6A6A6",
                                fontSize: '12px',
                                color: "black"
                            }}>
                                {data.dateAdded}
                            </div>
                            <div style={{
                                width: '13.7%',
                                color: "#A6A6A6",
                                fontSize: '12px',
                                color: "black"
                            }}>
                                {new Array(5).fill(
                                    <Image
                                        style={{
                                            width: "10px",
                                            maxWidth: "100%",
                                            marginLeft: '10px'
                                        }}
                                        src="/img/rateact.png"
                                        width="10"
                                        height="9"
                                        alt="badge"
                                    />
                                ).map((data, idx) => (
                                    <span key={idx}>
                                        {data}
                                    </span>
                                ))}
                                {data.rate}
                            </div>
                            <div style={{
                                width: '15%',
                                color: "#A6A6A6",
                                fontSize: '12px',
                                color: "black"
                            }}>
                                {data.address}
                            </div>
                            <div style={{
                                width: '11.7%',
                                color: "#A6A6A6",
                                fontSize: '12px',
                                color: "black"
                            }}>
                                {data.phoneNumber}
                            </div>
                            <div style={{
                                width: '11.7%',
                                color: "#A6A6A6",
                                fontSize: '12px',
                                color: "black"
                            }}>
                                {data.license}
                            </div>
                            <div style={{
                                width: '9.7%',
                                color: "#A6A6A6",
                                fontSize: '12px',
                                color: "black"
                            }}>
                                {data.vehicleType}
                            </div>
                            <div style={{
                                width: '13.7%',
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
                                        setDriverId(index)
                                    }}
                                    style={{
                                        width: "19px",
                                        maxWidth: "100%",
                                        marginLeft: '10px',
                                        cursor: "pointer"
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
                                        cursor: "pointer"
                                    }}
                                    src={data.action[4]}
                                    width="19"
                                    height="19"
                                    alt="badge"
                                />
                                <Image
                                    style={{
                                        width: "19px",
                                        maxWidth: "100%",
                                        marginLeft: '10px',
                                        cursor: "pointer"
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
                )) :
                props.date.length > 0 ? props.adminAgentData.filter((data) => data.dateAdded === props.date)
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
                                    width: '9.7%',
                                    color: "#A6A6A6",
                                    fontSize: '12px',
                                    color: "black"
                                }}>
                                    {data.businessName}
                                </div>
                                <div style={{
                                    width: '11.7%',
                                    color: "#A6A6A6",
                                    fontSize: '12px',
                                    color: "black"
                                }}>
                                    {data.dateAdded}
                                </div>
                                <div style={{
                                    width: '13.7%',
                                    color: "#A6A6A6",
                                    fontSize: '12px',
                                    color: "black"
                                }}>
                                    {new Array(5).fill(
                                        <Image
                                            style={{
                                                width: "10px",
                                                maxWidth: "100%",
                                                marginLeft: '10px'
                                            }}
                                            src="/img/rateact.png"
                                            width="10"
                                            height="9"
                                            alt="badge"
                                        />
                                    ).map((data, idx) => (
                                        <span key={idx}>
                                            {data}
                                        </span>
                                    ))}
                                    {data.rate}
                                </div>
                                <div style={{
                                    width: '15%',
                                    color: "#A6A6A6",
                                    fontSize: '12px',
                                    color: "black"
                                }}>
                                    {data.address}
                                </div>
                                <div style={{
                                    width: '11.7%',
                                    color: "#A6A6A6",
                                    fontSize: '12px',
                                    color: "black"
                                }}>
                                    {data.phoneNumber}
                                </div>
                                <div style={{
                                    width: '11.7%',
                                    color: "#A6A6A6",
                                    fontSize: '12px',
                                    color: "black"
                                }}>
                                    {data.license}
                                </div>
                                <div style={{
                                    width: '9.7%',
                                    color: "#A6A6A6",
                                    fontSize: '12px',
                                    color: "black"
                                }}>
                                    {data.vehicleType}
                                </div>
                                <div style={{
                                    width: '13.7%',
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
                                            setDriverId(index)
                                        }}
                                        style={{
                                            width: "19px",
                                            maxWidth: "100%",
                                            marginLeft: '10px',
                                            cursor: "pointer"
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
                                            cursor: "pointer"
                                        }}
                                        src={data.action[4]}
                                        width="19"
                                        height="19"
                                        alt="badge"
                                    />
                                    <Image
                                        style={{
                                            width: "19px",
                                            maxWidth: "100%",
                                            marginLeft: '10px',
                                            cursor: "pointer"
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
                    )) :
                    props.adminAgentData
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
                                        width: '9.7%',
                                        color: "#A6A6A6",
                                        fontSize: '12px',
                                        color: "black"
                                    }}>
                                        {data.businessName}
                                    </div>
                                    <div style={{
                                        width: '11.7%',
                                        color: "#A6A6A6",
                                        fontSize: '12px',
                                        color: "black"
                                    }}>
                                        {data.dateAdded}
                                    </div>
                                    <div style={{
                                        width: '13.7%',
                                        color: "#A6A6A6",
                                        fontSize: '12px',
                                        color: "black"
                                    }}>
                                        {new Array(5).fill(
                                            <Image
                                                style={{
                                                    width: "10px",
                                                    maxWidth: "100%",
                                                    marginLeft: '10px'
                                                }}
                                                src="/img/rateact.png"
                                                width="10"
                                                height="9"
                                                alt="badge"
                                            />
                                        ).map((data, idx) => (
                                            <span key={idx}>
                                                {data}
                                            </span>
                                        ))}
                                        {data.rate}
                                    </div>
                                    <div style={{
                                        width: '15%',
                                        color: "#A6A6A6",
                                        fontSize: '12px',
                                        color: "black"
                                    }}>
                                        {data.address}
                                    </div>
                                    <div style={{
                                        width: '11.7%',
                                        color: "#A6A6A6",
                                        fontSize: '12px',
                                        color: "black"
                                    }}>
                                        {data.phoneNumber}
                                    </div>
                                    <div style={{
                                        width: '11.7%',
                                        color: "#A6A6A6",
                                        fontSize: '12px',
                                        color: "black"
                                    }}>
                                        {data.license}
                                    </div>
                                    <div style={{
                                        width: '9.7%',
                                        color: "#A6A6A6",
                                        fontSize: '12px',
                                        color: "black"
                                    }}>
                                        {data.vehicleType}
                                    </div>
                                    <div style={{
                                        width: '13.7%',
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
                                                setDriverId(index)
                                            }}
                                            style={{
                                                width: "19px",
                                                maxWidth: "100%",
                                                marginLeft: '10px',
                                                cursor: "pointer"
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
                                                cursor: "pointer"
                                            }}
                                            src={data.action[4]}
                                            width="19"
                                            height="19"
                                            alt="badge"
                                        />
                                        <Image
                                            style={{
                                                width: "19px",
                                                maxWidth: "100%",
                                                marginLeft: '10px',
                                                cursor: "pointer"
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
            style={{
                marginLeft: "5%"
            }}
                editModal={editModal}
                setEditModal={setEditModal}
                isDriversManagement={props.isDriversManagement}
                caption={"Edit Driver"}
                firstName={firstName}
                onChangeFirstName={onChangeFirstName}
                lastName={lastName}
                onChangeLastName={onChangeLastName}
                address={address}
                onChangeAddress={onChangeAddress}
                phoneNumber={phoneNumber}
                onChangePhoneNumber={onChangePhoneNumber}
                onChangeVehicleType={onChangeVehicleType}
                vehicleType={vehicleType.length > 0 ? vehicleType : "Select"}
                vehicleTypes={vehicleTypes}
                handleEdit={handleEdit}
                handleClearData={handleClearData}
            />
            <AdminFullinfo
                style={{
                    marginLeft: '8%'
                }}
                adminFullinfo={adminFullinfo}
                setAdminFullinfo={setAdminFullinfo}
                compName={"DRIVER"}
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
                editOption={"Edit"}
                okOption={"Ok"}
                caption={"Full Information"}
                isDriversManagement={props.isDriversManagement}
                setStatistics={setStatistics}
                setReview={setReview}
                handleEditOption={handleEditOption}
            />
            <Statistics
                statistics={statistics}
                setStatistics={setStatistics}
                caption={props.isDriversManagement ? "Driver Statistics" : undefined}
                handleStatistics={handleStatistics}
            />
            <Review
                style={{
                    marginLeft: '8%'
                }}
                review={review}
                setReview={setReview}
                caption={props.isDriversManagement ? "Reviews" : undefined}
                reviewName={"Alex Ekwueme"}
                reviewDate={"22.03.2021"}
                reviewDescription={"There is no program that walks you through exactly the way you want" +
                    " There is no program that walks you through exactly the way you want." +
                    " There is no program that walks you through exactly the way you want."}
            />
        </>
    )
}