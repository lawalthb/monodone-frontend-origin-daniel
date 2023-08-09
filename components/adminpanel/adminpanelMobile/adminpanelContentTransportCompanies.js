import { useState, useEffect } from "react";
import MobileHeader from "./commonComp/header";
import { Form } from "react-bootstrap";
import Image from "next/image";
import FilteringComp from "./commonComp/filteringComp";
import AdminpanelMobileRecords from "./commonComp/adminpanelMobileRecords";
import MobilePagination from "./commonComp/mobilePagination";
import AdminfullinfoMobileReusables from "./commonComp/adminfulInfoMobileReusables";
import AdminFullinfo from "../adminFullinfo";
import Statistics from "../common/statistics";
import Review from "../common/review";
import ReusableMobileEdit from "./commonComp/reusableMobileEdit";
import EditModal from "../common/editModal";

export default function AdminpanelContentTransportCompanies(props) {
    const [isTransportCompaniesManagement, setIsTransportCompaniesManagement] = useState(false)
    const [isTransportCompaniesRequest, setIsTransportCompaniesRequest] = useState(false)
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
    const [transportCompaniesId, setTransportCompaniesId] = useState()

    const handleIsTransportCompaniesManagement = () => {
        setIsTransportCompaniesManagement(true)
        setIsTransportCompaniesRequest(false)
    }

    const handleIsTransportCompaniesRequest = () => {
        setIsTransportCompaniesRequest(true)
        setIsTransportCompaniesManagement(false)
    }

    const handleStatistics = () => {
        setStatistics(false)
    }

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
        handleClearData } = ReusableMobileEdit(props.adminAgentData, isTransportCompaniesManagement, setEditModal, transportCompaniesId)


    const {
        setAgentNoEdit,
        fullInfo,
        handleFullInfo
    } = AdminfullinfoMobileReusables(props.adminAgentData)

    useEffect(() => {
        isTransportCompaniesRequest ? setIsTransportCompaniesManagement(false)
            : setIsTransportCompaniesManagement(true)
    }, [setIsTransportCompaniesManagement, isTransportCompaniesRequest])
    return (
        <>
            <MobileHeader
                caption={"Super Admins"}
                isTransportCompanies={props.isTransportCompanies}
            />
            <div style={{
                display: 'flex',
                gap: '15px'
            }}>
                <Form.Label
                    onClick={handleIsTransportCompaniesManagement}
                    style={isTransportCompaniesManagement ? {
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
                    Super Admins Management
                </Form.Label>
                <Form.Label
                    onClick={handleIsTransportCompaniesRequest}
                    style={isTransportCompaniesRequest ? {
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
                    Super Admins Request
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
                                    isTransportCompaniesManagement={isTransportCompaniesManagement}
                                    isTransportCompaniesRequest={isTransportCompaniesRequest}
                                    date={date}
                                    rate={rate}
                                    vehicleType={vehicleType}
                                    firstHeader={"Name"}
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
                                    setCustBrokId={setTransportCompaniesId}
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
                                            isTransportCompaniesManagement={isTransportCompaniesManagement}
                                            isTransportCompaniesRequest={isTransportCompaniesRequest}
                                            date={date}
                                            rate={rate}
                                            vehicleType={vehicleType}
                                            firstHeader={"Name"}
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
                                            setCustBrokId={setTransportCompaniesId}
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
                                        isTransportCompaniesManagement={isTransportCompaniesManagement}
                                        isTransportCompaniesRequest={isTransportCompaniesRequest}
                                        date={date}
                                        rate={rate}
                                        vehicleType={vehicleType}
                                        firstHeader={"Name"}
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
                                        setCustBrokId={setTransportCompaniesId}
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
                compName={"SUPER ADMIN"}
                caption={"Full Information"}
                okOption={isTransportCompaniesManagement ? "Ok" : "Accept"}
                editOption={isTransportCompaniesManagement ? "Edit" : "Reject"}
                isTransportCompaniesManagement={isTransportCompaniesManagement}
                isTransportCompaniesRequest={isTransportCompaniesRequest}
                setStatistics={setStatistics}
                setReview={setReview}
            />
            <Statistics
                statistics={statistics}
                setStatistics={setStatistics}
                caption={"Super admin Statistics"}
                handleStatistics={handleStatistics}
                isTransportCompaniesManagement={isTransportCompaniesManagement}
            />
            <Review
                review={review}
                setReview={setReview}
                caption={isTransportCompaniesManagement ? "Reviews" : undefined}
                reviewName={"Alex Ekwueme"}
                reviewDate={"22.03.2021"}
                reviewDescription={"There is no program that walks you through exactly the way you want" +
                    " There is no program that walks you through exactly the way you want." +
                    " There is no program that walks you through exactly the way you want."}
            />
            <EditModal
                editModal={editModal}
                setEditModal={setEditModal}
                isTransportCompaniesManagement={isTransportCompaniesManagement}
                caption={"Edit Super Admin"}
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