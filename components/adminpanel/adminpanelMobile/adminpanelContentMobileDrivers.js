import Image from "next/image";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import AdminFullinfo from "../adminFullinfo";
import EditModal from "../common/editModal";
import Review from "../common/review";
import Statistics from "../common/statistics";
import AdminfullinfoMobileReusables from "./commonComp/adminfulInfoMobileReusables";
import AdminpanelMobileRecords from "./commonComp/adminpanelMobileRecords";
import FilteringComp from "./commonComp/filteringComp";
import MobileHeader from "./commonComp/header";
import MobilePagination from "./commonComp/mobilePagination";
import ReusableMobileEdit from "./commonComp/reusableMobileEdit";

export default function AdminpanelContentMobileDrivers(props) {
    const [isDriversManagement, setIsDriversManagement] = useState(false)
    const [isDriversRequest, setIsDriversRequest] = useState(false)
    const [dates, setDates] = useState([])
    const [date, setDate] = useState("")
    const [rates, setRates] = useState([])
    const [rate, setRate] = useState("")
    const [vehicleTypes, setVehicleTypes] = useState([])
    const [vehicleType, setVehicleType] = useState("")
    const [multiplesTen, setMultiplesTen] = useState([])
    const [multipleTen, setMultipleTen] = useState("")
    const [adminFullinfo, setAdminFullinfo] = useState(false)
    const [statistics, setStatistics] = useState(false)
    const [review, setReview] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [driverId, setDriverId] = useState()

    const {
        firstName,
        lastName,
        phoneNumber,
        address,
        vehicleTypeEdit,
        vehicleTypesEdit,
        fetchData,
        onChangeFirstName,
        onChangeLastName,
        onChangeAddress,
        onChangePhoneNumber,
        onChangeVehicleType,
        handleEdit,
        handleClearData } = ReusableMobileEdit(props.adminAgentData, isDriversManagement, setEditModal, driverId)

    const handleStatistics = () => {
        setStatistics(false)
    }

    const {
        setAgentNoEdit,
        fullInfo,
        handleFullInfo
    } = AdminfullinfoMobileReusables(props.adminAgentData)

    const handleIsDriversManagement = () => {
        setIsDriversManagement(true)
        setIsDriversRequest(false)
    }

    const handleIsDriversRequest = () => {
        setIsDriversRequest(true)
        setIsDriversManagement(false)
    }

    useEffect(() => {
        if (isDriversRequest) {
            setIsDriversManagement(false)
        } else {
            setIsDriversManagement(true)
        }
    }, [setIsDriversManagement, isDriversRequest])
    return (
        <>
            <MobileHeader
                caption={"Drivers"}
            />
            <div style={{
                display: 'flex',
                gap: '15px'
            }}>
                <Form.Label
                    onClick={handleIsDriversManagement}
                    style={isDriversManagement ? {
                        color: "#00902F",
                        fontWeight: "500",
                        fontSize: "12px",
                        marginTop: '20px',
                        borderBottom: "2px solid #00902F",
                        padding: "0px 0px 10px 0px"
                    } : {
                        color: "#A6A6A6",
                        fontWeight: "500",
                        fontSize: "12px",
                        marginTop: '20px'
                    }}>
                    Driver Management
                </Form.Label>
                <Form.Label
                    onClick={handleIsDriversRequest}
                    style={isDriversRequest ? {
                        color: "#00902F",
                        fontWeight: "500",
                        fontSize: "12px",
                        marginTop: '20px',
                        borderBottom: "2px solid #00902F",
                        padding: "0px 0px 10px 0px"
                    } : {
                        color: "#A6A6A6",
                        fontWeight: "500",
                        fontSize: "12px",
                        marginTop: '20px'
                    }}
                >
                    Driver Request
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
                isDriversManagement={isDriversManagement}
                isDriversRequest={isDriversRequest}
                setDates={setDates}
                setDate={setDate}
                dates={dates}
                rates={rates}
                setRates={setRates}
                setRate={setRate}
                vehicleTypes={vehicleTypes}
                setVehicleTypes={setVehicleTypes}
                setVehicleType={setVehicleType}
                isDrivers={props.isDrivers}
            />
            {vehicleType ? (
                props.adminAgentData.filter((data) => data.vehicleType === vehicleType)
                    .slice(parseInt(multipleTen - 10), parseInt(multipleTen))
                    .map((data, idx) => (
                        <>
                            <div key={idx}>
                                <AdminpanelMobileRecords
                                    data={data}
                                    idx={idx}
                                    isDriversManagement={isDriversManagement}
                                    isDriversRequest={isDriversRequest}
                                    date={date}
                                    rate={rate}
                                    vehicleType={vehicleType}
                                    firstHeader="Driver's name"
                                    secondHeader="Date added"
                                    thirdHeader="Rate"
                                    fourthHeader="Address"
                                    fifthHeader="Phone number"
                                    sixthHeader="Licence"
                                    seventhHeader="Vehicle Type"
                                    headerActions="Actions"
                                    setAdminFullinfo={setAdminFullinfo}
                                    setAgentNoEdit={setAgentNoEdit}
                                    handleFullInfo={handleFullInfo}
                                    setEditModal={setEditModal}
                                    fetchData={fetchData}
                                    setDriverId={setDriverId}
                                />
                            </div>
                        </>
                    ))) : rate ? (
                        props.adminAgentData.filter((data) => data.rate === rate)
                            .slice(parseInt(multipleTen - 10), parseInt(multipleTen))
                            .map((data, idx) => (
                                <>
                                    <div key={idx}>
                                        <AdminpanelMobileRecords
                                            data={data}
                                            idx={idx}
                                            isDriversManagement={isDriversManagement}
                                            isDriversRequest={isDriversRequest}
                                            date={date}
                                            rate={rate}
                                            vehicleType={vehicleType}
                                            firstHeader="Driver's name"
                                            secondHeader="Date added"
                                            thirdHeader="Rate"
                                            fourthHeader="Address"
                                            fifthHeader="Phone number"
                                            sixthHeader="Licence"
                                            seventhHeader="Vehicle Type"
                                            headerActions="Actions"
                                            setAdminFullinfo={setAdminFullinfo}
                                            setAgentNoEdit={setAgentNoEdit}
                                            handleFullInfo={handleFullInfo}
                                            setEditModal={setEditModal}
                                            fetchData={fetchData}
                                            setDriverId={setDriverId}
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
                                                    isDriversManagement={isDriversManagement}
                                                    isDriversRequest={isDriversRequest}
                                                    date={date}
                                                    rate={rate}
                                                    vehicleType={vehicleType}
                                                    firstHeader="Driver's name"
                                                    secondHeader="Date added"
                                                    thirdHeader="Rate"
                                                    fourthHeader="Address"
                                                    fifthHeader="Phone number"
                                                    sixthHeader="Licence"
                                                    seventhHeader="Vehicle Type"
                                                    headerActions="Actions"
                                                    setAdminFullinfo={setAdminFullinfo}
                                                    setAgentNoEdit={setAgentNoEdit}
                                                    handleFullInfo={handleFullInfo}
                                                    setEditModal={setEditModal}
                                                    fetchData={fetchData}
                                                    setDriverId={setDriverId}
                                                />
                                            </div>
                                        </>
                                    ))
                            ) : props.adminAgentData.slice(parseInt(multipleTen) - 10, parseInt(multipleTen))
                                .map((data, idx) => (
                                    <>
                                        <div key={idx}>
                                            <AdminpanelMobileRecords
                                                data={data}
                                                idx={idx}
                                                isDriversManagement={isDriversManagement}
                                                isDriversRequest={isDriversRequest}
                                                date={date}
                                                rate={rate}
                                                vehicleType={vehicleType}
                                                firstHeader={"Driver's name"}
                                                secondHeader="Date added"
                                                thirdHeader="Rate"
                                                fourthHeader="Address"
                                                fifthHeader="Phone number"
                                                sixthHeader="Licence"
                                                seventhHeader="Vehicle Type"
                                                headerActions="Actions"
                                                setAdminFullinfo={setAdminFullinfo}
                                                setAgentNoEdit={setAgentNoEdit}
                                                handleFullInfo={handleFullInfo}
                                                setEditModal={setEditModal}
                                                fetchData={fetchData}
                                                setDriverId={setDriverId}
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
                compName={"DRIVER"}
                caption={"Full Information"}
                okOption={"Ok"}
                editOption={"Edit"}
                isDriversManagement={isDriversManagement}
                setStatistics={setStatistics}
                setReview={setReview}
                isDriversRequest={isDriversRequest}
            />
            <Statistics
                statistics={statistics}
                setStatistics={setStatistics}
                caption={"Driver Statistics"}
                handleStatistics={handleStatistics}
                isDriversManagement={isDriversManagement}
            />
            <Review
                review={review}
                setReview={setReview}
                caption={isDriversManagement ? "Reviews" : undefined}
                reviewName={"Alex Ekwueme"}
                reviewDate={"22.03.2021"}
                reviewDescription={"There is no program that walks you through exactly the way you want" +
                    " There is no program that walks you through exactly the way you want." +
                    " There is no program that walks you through exactly the way you want."}
            />
            <EditModal
                editModal={editModal}
                setEditModal={setEditModal}
                isDriversManagement={isDriversManagement}
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
                vehicleType={vehicleTypeEdit.length > 0 ? vehicleTypeEdit : "Select"}
                vehicleTypes={vehicleTypesEdit}
                handleEdit={handleEdit}
                handleClearData={handleClearData}
            />
        </>
    )
}