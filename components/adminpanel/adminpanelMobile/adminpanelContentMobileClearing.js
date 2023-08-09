import { useEffect, useState } from "react";
import MobileHeader from "./commonComp/header";
import { Form } from "react-bootstrap";
import Image from "next/image";
import FilteringComp from "./commonComp/filteringComp";
import AdminpanelMobileRecords from "./commonComp/adminpanelMobileRecords";
import AdminfullinfoMobileReusables from "./commonComp/adminfulInfoMobileReusables";
import AdminFullinfo from "../adminFullinfo";
import Statistics from "../common/statistics";
import Review from "../common/review";
import ReusableMobileEdit from "./commonComp/reusableMobileEdit";
import EditModal from "../common/editModal";
import MobilePagination from "./commonComp/mobilePagination";

export default function AdminpanelContentMobileClearing(props) {
    const [isClearingManagement, setIsClearingManagement] = useState(false)
    const [isClearingRequest, setIsClearingRequest] = useState(false)
    const [dates, setDates] = useState([])
    const [date, setDate] = useState("")
    const [rates, setRates] = useState([])
    const [rate, setRate] = useState("")
    const [vehicleTypes, setVehicleTypes] = useState([])
    const [vehicleType, setVehicleType] = useState("")
    const [adminFullinfo, setAdminFullinfo] = useState(false)
    const [statistics, setStatistics] = useState(false)
    const [review, setReview] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [clearingId, setClearingId] = useState()
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
        handleClearData } = ReusableMobileEdit(props.adminAgentData, isClearingManagement, setEditModal, clearingId)


    const handleIsClearingManagement = () => {
        setIsClearingManagement(true)
        setIsClearingRequest(false)
    }

    const handleIsClearingRequest = () => {
        setIsClearingRequest(true)
        setIsClearingManagement(false)
    }
    const handleStatistics = () => {
        setStatistics(false)
    }

    useEffect(() => {
        isClearingRequest ? setIsClearingManagement(false) : setIsClearingManagement(true)
    }, [setIsClearingManagement, isClearingRequest])

    return (
        <>
            <MobileHeader
                caption={"CLEARING"}
                isClearingForwardingAgent={props.isClearingForwardingAgent}
            />
            <div style={{
                display: 'flex',
                gap: '15px'
            }}>
                <Form.Label
                    onClick={handleIsClearingManagement}
                    style={isClearingManagement ? {
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
                    AGENTS MANAGEMENT
                </Form.Label>
                <Form.Label
                    onClick={handleIsClearingRequest}
                    style={isClearingRequest ? {
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
                    AGENTS REQUEST
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
            <FilteringComp
                adminAgentData={props.adminAgentData}
                setDates={setDates}
                setDate={setDate}
                dates={dates}
                rates={rates}
                setRates={setRates}
                setRate={setRate}
                vehicleTypes={vehicleTypes}
                setVehicleTypes={setVehicleTypes}
                setVehicleType={setVehicleType}
            />
            {rate ? (
                props.adminAgentData.filter((data) => data.rate === rate)
                    .slice(parseInt(multipleTen - 10), parseInt(multipleTen))
                    .map((data, idx) => (
                        <>
                            <div key={idx}>
                                <AdminpanelMobileRecords
                                    data={data}
                                    idx={idx}
                                    isClearingManagement={isClearingManagement}
                                    isClearingRequest={isClearingRequest}
                                    date={date}
                                    rate={rate}
                                    firstHeader="Name"
                                    secondHeader="Date added"
                                    thirdHeader="Rate"
                                    fourthHeader="Address"
                                    fifthHeader="Phone number"
                                    headerActions="Actions"
                                    setAdminFullinfo={setAdminFullinfo}
                                    setAgentNoEdit={setAgentNoEdit}
                                    handleFullInfo={handleFullInfo}
                                    setEditModal={setEditModal}
                                    fetchData={fetchData}
                                    setCustBrokId={setClearingId}
                                />
                            </div>
                        </>
                    ))) : date ? (
                        props.adminAgentData.filter((data) => data.dateAdded === date)
                            .slice(parseInt(multipleTen - 10), parseInt(multipleTen))
                            .map((data, idx) => (
                                <>
                                    <div key={idx}>
                                        <AdminpanelMobileRecords
                                            data={data}
                                            idx={idx}
                                            isClearingManagement={isClearingManagement}
                                            isClearingRequest={isClearingRequest}
                                            date={date}
                                            rate={rate}
                                            firstHeader="Name"
                                            secondHeader="Date added"
                                            thirdHeader="Rate"
                                            fourthHeader="Address"
                                            fifthHeader="Phone number"
                                            headerActions="Actions"
                                            setAdminFullinfo={setAdminFullinfo}
                                            setAgentNoEdit={setAgentNoEdit}
                                            handleFullInfo={handleFullInfo}
                                            setEditModal={setEditModal}
                                            fetchData={fetchData}
                                            setCustBrokId={setClearingId}
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
                                        isClearingManagement={isClearingManagement}
                                        isClearingRequest={isClearingRequest}
                                        date={date}
                                        rate={rate}
                                        firstHeader="Name"
                                        secondHeader="Date added"
                                        thirdHeader="Rate"
                                        fourthHeader="Address"
                                        fifthHeader="Phone number"
                                        headerActions="Actions"
                                        setAdminFullinfo={setAdminFullinfo}
                                        setAgentNoEdit={setAgentNoEdit}
                                        handleFullInfo={handleFullInfo}
                                        setEditModal={setEditModal}
                                        fetchData={fetchData}
                                        setCustBrokId={setClearingId}
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
                compName={"CLEARING AND FORWARDING AGENT"}
                caption={"Full Information"}
                okOption={isClearingManagement ? "Ok" : "Accept"}
                editOption={isClearingManagement ? "Edit" : "Reject"}
                isClearingManagement={isClearingManagement}
                setStatistics={setStatistics}
                setReview={setReview}
                isClearingRequest={isClearingRequest}
            />
            <Statistics
                statistics={statistics}
                setStatistics={setStatistics}
                caption={"Clearing Statistics"}
                handleStatistics={handleStatistics}
                isClearingManagement={isClearingManagement}
            />
            <Review
                review={review}
                setReview={setReview}
                caption={isClearingManagement ? "Reviews" : undefined}
                reviewName={"Alex Ekwueme"}
                reviewDate={"22.03.2021"}
                reviewDescription={"There is no program that walks you through exactly the way you want" +
                    " There is no program that walks you through exactly the way you want." +
                    " There is no program that walks you through exactly the way you want."}
            />
            <EditModal
                editModal={editModal}
                setEditModal={setEditModal}
                isClearingManagement={isClearingManagement}
                caption={"Edit Clearing and Forwarding Agent"}
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