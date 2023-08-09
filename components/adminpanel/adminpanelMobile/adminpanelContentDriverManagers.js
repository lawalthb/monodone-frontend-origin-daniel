import Image from "next/image";
import { useEffect, useState } from "react";
import MobileHeader from "./commonComp/header";
import { Form } from "react-bootstrap";
import FilteringComp from "./commonComp/filteringComp";
import AdminpanelMobileRecords from "./commonComp/adminpanelMobileRecords";
import AdminfullinfoMobileReusables from "./commonComp/adminfulInfoMobileReusables";
import AdminFullinfo from "../adminFullinfo";
import Statistics from "../common/statistics";
import Review from "../common/review";
import MobilePagination from "./commonComp/mobilePagination";
import ReusableMobileEdit from "./commonComp/reusableMobileEdit";
import EditModal from "../common/editModal";

export default function AdminpanelContentDriverManagers(props) {
    const [isDriverManagersManagement, setIsDriverManagersManagement] = useState(false)
    const [isDriverManagersRequest, setisDriverManagersRequest] = useState(false)
    const [dates, setDates] = useState([])
    const [date, setDate] = useState("")
    const [rates, setRates] = useState([])
    const [rate, setRate] = useState("")
    const [vehicleTypes, setVehicleTypes] = useState([])
    const [vehicleType, setVehicleType] = useState("")
    const [adminFullinfo, setAdminFullinfo] = useState(false)
    const [statistics, setStatistics] = useState(false)
    const [review, setReview] = useState(false)
    const [multiplesTen, setMultiplesTen] = useState([])
    const [multipleTen, setMultipleTen] = useState("")
    const [editModal, setEditModal] = useState(false)
    const [driverManagersId, setDriverManagersId] = useState()

    const handleIsDriverManagersManagement = () => {
        setIsDriverManagersManagement(true)
        setisDriverManagersRequest(false)
    }

    const handleIsDriverMangersRequest = () => {
        setisDriverManagersRequest(true)
        setIsDriverManagersManagement(false)
    }

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
        handleClearData } = ReusableMobileEdit(props.adminAgentData, isDriverManagersManagement, setEditModal, driverManagersId)


    const handleStatistics = () => {
        setStatistics(false)
    }

    const {
        setAgentNoEdit,
        fullInfo,
        handleFullInfo
    } = AdminfullinfoMobileReusables(props.adminAgentData)

    useEffect(() => {
        isDriverManagersRequest ? setIsDriverManagersManagement(false)
            : setIsDriverManagersManagement(true)
    }, [isDriverManagersRequest])
    return (
        <>
            <MobileHeader
                caption={"Driver Managers"}
                isDriverManagers={props.isDriverManagers}
            />
            <div style={{
                display: 'flex',
                gap: '15px'
            }}>
                <Form.Label
                    onClick={handleIsDriverManagersManagement}
                    style={isDriverManagersManagement ? {
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
                    Manager&apos;s Management
                </Form.Label>
                <Form.Label
                    onClick={handleIsDriverMangersRequest}
                    style={isDriverManagersRequest ? {
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
                    Manager&apos;s Request
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
                isDriverManagersManagement={isDriverManagersManagement}
                isDriverManagersRequest={isDriverManagersRequest}
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
                                    isDriverManagersManagement={isDriverManagersManagement}
                                    isDriverManagersRequest={isDriverManagersRequest}
                                    date={date}
                                    rate={rate}
                                    vehicleType={vehicleType}
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
                                    setCustBrokId={setDriverManagersId}
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
                                            isDriverManagersManagement={isDriverManagersManagement}
                                            isDriverManagersRequest={isDriverManagersRequest}
                                            date={date}
                                            rate={rate}
                                            vehicleType={vehicleType}
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
                                            setCustBrokId={setDriverManagersId}
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
                                        isDriverManagersManagement={isDriverManagersManagement}
                                        isDriverManagersRequest={isDriverManagersRequest}
                                        date={date}
                                        rate={rate}
                                        vehicleType={vehicleType}
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
                                        setCustBrokId={setDriverManagersId}
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
                compName={"DRIVER MANAGER"}
                caption={"Full Information"}
                okOption={isDriverManagersManagement ? "Ok" : "Accept"}
                editOption={isDriverManagersManagement ? "Edit" : "Reject"}
                isDriverManagersManagement={isDriverManagersManagement}
                setStatistics={setStatistics}
                setReview={setReview}
                isDriverManagersRequest={isDriverManagersRequest}
            />
            <Statistics
                statistics={statistics}
                setStatistics={setStatistics}
                caption={"Driver Statistics"}
                handleStatistics={handleStatistics}
                isDriverManagersManagement={isDriverManagersManagement}
            />
            <Review
                review={review}
                setReview={setReview}
                caption={isDriverManagersManagement ? "Reviews" : undefined}
                reviewName={"Alex Ekwueme"}
                reviewDate={"22.03.2021"}
                reviewDescription={"There is no program that walks you through exactly the way you want" +
                    " There is no program that walks you through exactly the way you want." +
                    " There is no program that walks you through exactly the way you want."}
            />
            <EditModal
                editModal={editModal}
                setEditModal={setEditModal}
                isDriverManagersManagement={isDriverManagersManagement}
                caption={"Edit Driver Manager"}
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