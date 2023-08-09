import Image from "next/image";
import { useState } from "react";
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

export default function TransportManagementDetails(props) {
    const [editModal, setEditModal] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [address, setAddress] = useState("")
    const [transportId, setTransportId] = useState()
    const [adminFullinfo, setAdminFullinfo] = useState(false)
    const [fullInfo, setFullInfo] = useState(fullInformation)
    const [statistics, setStatistics] = useState(false)
    const [review, setReview] = useState(false)
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
        // console.log("the data", data)
        setFirstName(data.businessName.split(" ")[0])
        setLastName(data.businessName.split(" ")[1])
        setPhoneNumber(data.phoneNumber)
        setAddress(data.address)
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

    const handleEdit = () => {
        const data = props.adminAgentData[transportId]
        data.businessName = firstName + " " + lastName
        data.address = address
        data.phoneNumber = phoneNumber

        props.adminAgentData.splice(transportId, 1, data)
        console.log("saved")
        setEditModal(false)
    }

    const handleEditOption = () => {
        setAdminFullinfo(false)
    }

    const handleStatistics = () => {
        setStatistics(false)
    }
    const handleClearData = () => {
        setFirstName("")
        setLastName("")
        setAddress("")
        setPhoneNumber("")
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
                    width: '15%',
                    color: "#A6A6A6",
                    fontSize: '12px'
                }}>
                    Date added
                </div>
                <div style={{
                    width: '15%',
                    color: "#A6A6A6",
                    fontSize: '12px'
                }}>
                    Rate
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
                    width: '20%',
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
                                width: '15%',
                                color: "black",
                                fontSize: '12px',
                                color: "black"
                            }}>
                                {data.businessName}
                            </div>
                            <div style={{
                                width: '15%',
                                color: "black",
                                fontSize: '12px',
                                color: "black"
                            }}>
                                {data.dateAdded}
                            </div>
                            <div style={{
                                width: '15%',
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
                                width: '20%',
                                color: "black",
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
                                width: '20%',
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
                                        setTransportId(index)
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
                                    src={data.action[4]}
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
                                    width: '15%',
                                    color: "black",
                                    fontSize: '12px',
                                    color: "black"
                                }}>
                                    {data.businessName}
                                </div>
                                <div style={{
                                    width: '15%',
                                    color: "black",
                                    fontSize: '12px',
                                    color: "black"
                                }}>
                                    {data.dateAdded}
                                </div>
                                <div style={{
                                    width: '15%',
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
                                    width: '20%',
                                    color: "black",
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
                                    width: '20%',
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
                                            marginLeft: '10px'
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
                                            setTransportId(index)
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
                                            marginLeft: '10px'
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
                                        width: '15%',
                                        color: "black",
                                        fontSize: '12px',
                                        color: "black"
                                    }}>
                                        {data.businessName}
                                    </div>
                                    <div style={{
                                        width: '15%',
                                        color: "black",
                                        fontSize: '12px',
                                        color: "black"
                                    }}>
                                        {data.dateAdded}
                                    </div>
                                    <div style={{
                                        width: '15%',
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
                                        width: '20%',
                                        color: "black",
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
                                        width: '20%',
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
                                                setTransportId(index)
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
                                            src={data.action[4]}
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
                caption={"Edit Super Admin"}
                firstName={firstName}
                onChangeFirstName={onChangeFirstName}
                lastName={lastName}
                onChangeLastName={onChangeLastName}
                address={address}
                onChangeAddress={onChangeAddress}
                phoneNumber={phoneNumber}
                onChangePhoneNumber={onChangePhoneNumber}
                handleEdit={handleEdit}
            />
            <AdminFullinfo
                style={{
                    marginLeft: '8%'
                }}
                adminFullinfo={adminFullinfo}
                setAdminFullinfo={setAdminFullinfo}
                compName={"TRANSPORT COMPANY"}
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
                isTransportCompanyManagement={props.isTransportCompanyManagement}
                setStatistics={setStatistics}
                setReview={setReview}
                handleEditOption={handleEditOption}
            />

            <Statistics
                statistics={statistics}
                setStatistics={setStatistics}
                caption={props.isTransportCompanyManagement ? "Transport Statistics" : undefined}
                handleStatistics={handleStatistics}
            />
            <Review
                review={review}
                setReview={setReview}
                caption={props.isTransportCompanyManagement ? "Reviews" : undefined}
                reviewName={"Alex Ekwueme"}
                reviewDate={"22.03.2021"}
                reviewDescription={"There is no program that walks you through exactly the way you want" +
                    " There is no program that walks you through exactly the way you want." +
                    " There is no program that walks you through exactly the way you want."}
            />
        </>
    )
}