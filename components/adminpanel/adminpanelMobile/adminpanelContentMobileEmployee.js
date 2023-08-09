import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import MobileHeader from "./commonComp/header";
import Image from "next/image";
import CustomerFilteringComp from "./commonComp/customerFilteringComp";
import AdminpanelMobileRecords from "./commonComp/adminpanelMobileRecords";
import AdminfullinfoMobileReusables from "./commonComp/adminfulInfoMobileReusables";
import AdminFullinfo from "../adminFullinfo";
import Statistics from "../common/statistics";
import Review from "../common/review";
import ReusableMobileEdit from "./commonComp/reusableMobileEdit";
import EditModal from "../common/editModal";
import MobilePagination from "./commonComp/mobilePagination";

export default function AdminpanelContentMobileEmployee(props) {
    const [isEmployeeManagement, setIsEmployeeManagement] = useState(false)
    const [isEmployeeRequest, setIsEmployeeRequest] = useState(false)
    const [dates, setDates] = useState([])
    const [date, setDate] = useState("")
    const [sortBy, setSortBy] = useState("")
    const [allSortedData, setAllSortedData] = useState([])
    const [adminFullinfo, setAdminFullinfo] = useState(false)
    const [statistics, setStatistics] = useState(false)
    const [review, setReview] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [employeeId, setEmployeeId] = useState()
    const [multiplesTen, setMultiplesTen] = useState([])
    const [multipleTen, setMultipleTen] = useState("")

    const {
        setAgentNoEdit,
        fullInfo,
        handleFullInfo
    } = AdminfullinfoMobileReusables(props.adminAgentData)

    const {
        firstName,
        lastName,
        phoneNumber,
        address,
        fetchData,
        onChangeFirstName,
        onChangeLastName,
        onChangeAddress,
        onChangePhoneNumber,
        onChangeVehicleType,
        handleEdit,
        handleClearData } = ReusableMobileEdit(props.adminAgentData, isEmployeeManagement, setEditModal, employeeId)



    const handleIsEmployeeManagement = () => {
        setIsEmployeeManagement(true)
        setIsEmployeeRequest(false)
    }

    const handleIsEmployeeRequest = () => {
        setIsEmployeeRequest(true)
        setIsEmployeeManagement(false)
    }

    const handleStatistics = () => {
        setStatistics(false)
    }

    useEffect(() => {
        isEmployeeRequest ? setIsEmployeeManagement(false) : setIsEmployeeManagement(true)
    }, [setIsEmployeeManagement, isEmployeeRequest])
    return (
        <>
            <MobileHeader
                caption={"Employee"}
            />
            <div style={{
                display: 'flex',
                gap: '15px'
            }}>
                <Form.Label
                    onClick={handleIsEmployeeManagement}
                    style={isEmployeeManagement ? {
                        color: "#00902F",
                        fontWeight: "500",
                        fontSize: "11px",
                        marginTop: '20px',
                        borderBottom: "2px solid #00902F",
                        padding: "0px 0px 10px 0px"
                    } : {
                        color: "#A6A6A6",
                        fontWeight: "500",
                        fontSize: "11px",
                        marginTop: '20px'
                    }}>
                    Employee Management
                </Form.Label>
                <Form.Label
                    onClick={handleIsEmployeeRequest}
                    style={isEmployeeRequest ? {
                        color: "#00902F",
                        fontWeight: "500",
                        fontSize: "11px",
                        marginTop: '20px',
                        borderBottom: "2px solid #00902F",
                        padding: "0px 0px 10px 0px"
                    } : {
                        color: "#A6A6A6",
                        fontWeight: "500",
                        fontSize: "11px",
                        marginTop: '20px'
                    }}
                >
                    Employee Request
                </Form.Label>
                <Image
                    style={{
                        width: "18px",
                        maxWidth: "100%",
                        marginTop: '20px',
                        marginLeft: '-10px'
                    }}
                    src="/img/badgeagent.png"
                    width="18"
                    height="18"
                    alt="badge"
                />
            </div>
            <CustomerFilteringComp
                adminAgentData={props.adminAgentData}
                dates={dates}
                setDates={setDates}
                setDate={setDate}
                setSortBy={setSortBy}
                sortBy={sortBy}
                setAllSortedData={setAllSortedData}
            />
            {allSortedData.length ?
                allSortedData
                .slice(parseInt(multipleTen - 10), parseInt(multipleTen))
                    .map((data, idx) => (
                        <>
                            <div key={idx}>
                                <AdminpanelMobileRecords
                                    data={data}
                                    idx={idx}
                                    isEmployeeManagement={isEmployeeManagement}
                                    isEmployeeRequest={isEmployeeRequest}
                                    date={date}
                                    firstHeader={"Name"}
                                    secondHeader="E-mail"
                                    thirdHeader="Address"
                                    fourthHeader="Phone number"
                                    fifthHeader="Department"
                                    headerActions="Actions"
                                    setAdminFullinfo={setAdminFullinfo}
                                    setAgentNoEdit={setAgentNoEdit}
                                    handleFullInfo={handleFullInfo}
                                    setEditModal={setEditModal}
                                    fetchData={fetchData}
                                    setCustBrokId={setEmployeeId}
                                />
                            </div>
                        </>
                    )) : date ? (
                        props.adminAgentData.filter((data) => data.dateAdded === date)
                            .slice(parseInt(multipleTen - 10), parseInt(multipleTen))
                            .map((data, idx) => (
                                <>
                                    <div key={idx}>
                                        <AdminpanelMobileRecords
                                            data={data}
                                            idx={idx}
                                            isEmployeeManagement={isEmployeeManagement}
                                            isEmployeeRequest={isEmployeeRequest}
                                            date={date}
                                            firstHeader={"Name"}
                                            secondHeader="E-mail"
                                            thirdHeader="Address"
                                            fourthHeader="Phone number"
                                            fifthHeader="Department"
                                            headerActions="Actions"
                                            setAdminFullinfo={setAdminFullinfo}
                                            setAgentNoEdit={setAgentNoEdit}
                                            handleFullInfo={handleFullInfo}
                                            setEditModal={setEditModal}
                                            fetchData={fetchData}
                                            setCustBrokId={setEmployeeId}
                                        />
                                    </div>
                                </>
                            ))
                    ) : props.adminAgentData
                        .slice(parseInt(multipleTen - 10), parseInt(multipleTen))
                        .map((data, idx) => (
                            <>
                                <div key={idx}>
                                    <AdminpanelMobileRecords
                                        data={data}
                                        idx={idx}
                                        isEmployeeManagement={isEmployeeManagement}
                                        isEmployeeRequest={isEmployeeRequest}
                                        date={date}
                                        firstHeader={"Name"}
                                        secondHeader="E-mail"
                                        thirdHeader="Address"
                                        fourthHeader="Phone number"
                                        fifthHeader="Department"
                                        headerActions="Actions"
                                        setAdminFullinfo={setAdminFullinfo}
                                        setAgentNoEdit={setAgentNoEdit}
                                        handleFullInfo={handleFullInfo}
                                        setEditModal={setEditModal}
                                        fetchData={fetchData}
                                        setCustBrokId={setEmployeeId}
                                    />
                                </div>
                            </>
                        ))}
            <MobilePagination
                adminAgentData={props.adminAgentData}
                multiplesTen={multiplesTen}
                setMultiplesTen={setMultiplesTen}
                setMultipleTen={setMultipleTen}
                multipleTen={multipleTen}
            />
            <AdminFullinfo
                adminFullinfo={adminFullinfo}
                setAdminFullinfo={setAdminFullinfo}
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
                compName={"EMPLOYEE"}
                caption={"Full Information"}
                okOption={"Ok"}
                editOption={"Edit"}
                isEmployeeManagement={isEmployeeManagement}
                setStatistics={setStatistics}
                setReview={setReview}
                isEmployeeRequest={isEmployeeRequest}
            />
            <Statistics
                statistics={statistics}
                setStatistics={setStatistics}
                caption={"Driver Statistics"}
                handleStatistics={handleStatistics}
                isEmployeeManagement={isEmployeeManagement}
            />
            <Review
                review={review}
                setReview={setReview}
                caption={isEmployeeManagement ? "Reviews" : undefined}
                reviewName={"Alex Ekwueme"}
                reviewDate={"22.03.2021"}
                reviewDescription={"There is no program that walks you through exactly the way you want" +
                    " There is no program that walks you through exactly the way you want." +
                    " There is no program that walks you through exactly the way you want."}
            />
            <EditModal
                editModal={editModal}
                setEditModal={setEditModal}
                isEmployeeManagement={isEmployeeManagement}
                caption={"Edit Employee"}
                firstName={firstName}
                onChangeFirstName={onChangeFirstName}
                lastName={lastName}
                onChangeLastName={onChangeLastName}
                address={address}
                onChangeAddress={onChangeAddress}
                phoneNumber={phoneNumber}
                onChangePhoneNumber={onChangePhoneNumber}
                onChangeVehicleType={onChangeVehicleType}
                handleEdit={handleEdit}
                handleClearData={handleClearData}
            />
        </>
    )
}