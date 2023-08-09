import { useEffect, useState } from "react";
import MobileHeader from "./commonComp/header";
import { Form } from "react-bootstrap";
import Image from "next/image";
import CustomerFilteringComp from "./commonComp/customerFilteringComp";
import AdminpanelMobileRecords from "./commonComp/adminpanelMobileRecords";
import MobilePagination from "./commonComp/mobilePagination";
import AllOrders from "../common/allOrders";
import EditModal from "../common/editModal";
import AdminfullinfoMobileReusables from "./commonComp/adminfulInfoMobileReusables";
import AdminFullinfo from "../adminFullinfo";
import Statistics from "../common/statistics";
import Review from "../common/review";

export default function AdminpanelContentShippingCompanies(props) {
    const [isShippingCompaniesManagement, setIsShippingCompaniesManagement] = useState(false)
    const [isShippingCompaniesRequest, setIsShippingCompaniesRequest] = useState(false)
    const [dates, setDates] = useState([])
    const [date, setDate] = useState("")
    const [sortBy, setSortBy] = useState("")
    const [allSortedData, setAllSortedData] = useState([])
    const [multiplesTen, setMultiplesTen] = useState([])
    const [multipleTen, setMultipleTen] = useState("")
    const [allOrders, setAllOrders] = useState(false)
    const [allOrdersName, setAllOrdersName] = useState("")
    const [allOrdersEmail, setAllOrdersEmail] = useState("")
    const [allOrdersPhone, setAllOrdersPhone] = useState("")
    const [allOrdersAddress, setAllOrdersAddress] = useState("")
    const [allOrdersDate, setAllOrdersDate] = useState("")
    const [allOrdersDates, setAllOrdersDates] = useState([])
    const [editModal, setEditModal] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [address, setAddress] = useState("")
    const [editEmail, setEditEmail] = useState("")
    const [shippingCompaniesId, setShippingCompaniesId] = useState()
    const [adminFullinfo, setAdminFullinfo] = useState(false)
    const [statistics, setStatistics] = useState(false)
    const [review, setReview] = useState(false)

    const {
        setAgentNoEdit,
        fullInfo,
        handleFullInfo
    } = AdminfullinfoMobileReusables(props.adminAgentData)

    const onChangeAllOrdersDate = (event) =>
        setAllOrdersDate(event.target.value)

    function fetchData(id) {
        const data = props.adminAgentData[id]
        setFirstName(data.businessName.split(" ")[0])
        setLastName(data.businessName.split(" ")[1])
        setPhoneNumber(data.phoneNumber)
        setAddress(data.address)
        setEditEmail(data.email)
    }

    const handleEdit = () => {
        const data = props.adminAgentData[shippingCompaniesId]
        data.businessName = firstName + " " + lastName
        data.address = address
        data.phoneNumber = phoneNumber
        data.email = editEmail

        props.adminAgentData.splice(shippingCompaniesId, 1, data)
        console.log("saved")
        setEditModal(false)
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

    const handleClearData = () => {
        setFirstName("")
        setLastName("")
        setAddress("")
        setPhoneNumber("")
    }

    const handleStatistics = () => {
        setStatistics(false)
    }

    function fetchOrderDetails(id) {
        const data = props.adminAgentData[id]
        setAllOrdersName(data.businessName)
        setAllOrdersEmail(data.email)
        setAllOrdersPhone(data.phoneNumber)
        setAllOrdersAddress(data.address)

        const newDates = []
        const allDates = props.adminAgentData.map((data) => data.dateAdded)
        const allDatesSet = new Set(allDates)
        for (let date of allDatesSet) {
            newDates.push(date)
        }
        setAllOrdersDates(newDates)
    }

    const handleIsShippingCompaniesManagement = () => {
        setIsShippingCompaniesManagement(true)
        setIsShippingCompaniesRequest(false)
    }

    const handleIsShippingCompaniesRequest = () => {
        setIsShippingCompaniesRequest(true)
        setIsShippingCompaniesManagement(false)
    }

    const handleAllOrders = () => {
        setAllOrders(false)
    }

    useEffect(() => {
        isShippingCompaniesRequest ? setIsShippingCompaniesManagement(false) :
            setIsShippingCompaniesManagement(true)
    }, [setIsShippingCompaniesManagement, isShippingCompaniesRequest])
    return (
        <>
            <MobileHeader
                caption={"Shipping Companies"}
                isShippingCompanies={props.isShippingCompanies}
            />
            <div style={{
                display: 'flex',
                gap: '15px'
            }}>
                <Form.Label
                    onClick={handleIsShippingCompaniesManagement}
                    style={isShippingCompaniesManagement ? {
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
                    Companies Management
                </Form.Label>
                <Form.Label
                    onClick={handleIsShippingCompaniesRequest}
                    style={isShippingCompaniesRequest ? {
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
                    Companies Request
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
                allSortedData.slice(parseInt(multipleTen - 10), parseInt(multipleTen))
                    .map((data, idx) => (
                        <>
                            <div key={idx}>
                                <AdminpanelMobileRecords
                                    data={data}
                                    idx={idx}
                                    isShippingCompaniesManagement={isShippingCompaniesManagement}
                                    isShippingCompaniesRequest={isShippingCompaniesRequest}
                                    date={date}
                                    firstHeader="Name"
                                    secondHeader="E-mail"
                                    thirdHeader="Address"
                                    fourthHeader="Phone number"
                                    fifthHeader="Date of operation"
                                    headerActions="Actions"
                                    setAllOrders={setAllOrders}
                                    fetchOrderDetails={fetchOrderDetails}
                                    setEditModal={setEditModal}
                                    fetchData={fetchData}
                                    setCustBrokId={setShippingCompaniesId}
                                    setAdminFullinfo={setAdminFullinfo}
                                    setAgentNoEdit={setAgentNoEdit}
                                    handleFullInfo={handleFullInfo}
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
                                            isShippingCompaniesManagement={isShippingCompaniesManagement}
                                            isShippingCompaniesRequest={isShippingCompaniesRequest}
                                            date={date}
                                            firstHeader="Name"
                                            secondHeader="E-mail"
                                            thirdHeader="Address"
                                            fourthHeader="Phone number"
                                            fifthHeader="Date of operation"
                                            headerActions="Actions"
                                            setAllOrders={setAllOrders}
                                            fetchOrderDetails={fetchOrderDetails}
                                            setEditModal={setEditModal}
                                            fetchData={fetchData}
                                            setCustBrokId={setShippingCompaniesId}
                                            setAdminFullinfo={setAdminFullinfo}
                                            setAgentNoEdit={setAgentNoEdit}
                                            handleFullInfo={handleFullInfo}
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
                                        isShippingCompaniesManagement={isShippingCompaniesManagement}
                                        isShippingCompaniesRequest={isShippingCompaniesRequest}
                                        date={date}
                                        firstHeader="Name"
                                        secondHeader="E-mail"
                                        thirdHeader="Address"
                                        fourthHeader="Phone number"
                                        fifthHeader="Date of operation"
                                        headerActions="Actions"
                                        setAllOrders={setAllOrders}
                                        fetchOrderDetails={fetchOrderDetails}
                                        setEditModal={setEditModal}
                                        fetchData={fetchData}
                                        setCustBrokId={setShippingCompaniesId}
                                        setAdminFullinfo={setAdminFullinfo}
                                        setAgentNoEdit={setAgentNoEdit}
                                        handleFullInfo={handleFullInfo}
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
            <AllOrders
                allOrders={allOrders}
                setAllOrders={setAllOrders}
                caption={"Full Information"}
                allOrdersHeading={"SHIPPING COMPANY"}
                allOrdersName={allOrdersName}
                allOrdersEmail={allOrdersEmail}
                allOrdersPhone={allOrdersPhone}
                allOrdersAddress={allOrdersAddress}
                onChangeAllOrdersDate={onChangeAllOrdersDate}
                allOrdersDate={allOrdersDate}
                allOrdersDates={allOrdersDates}
                allOrdersData={props.adminAgentData}
                adminAgentData={props.adminAgentData}
                handleAllOrders={handleAllOrders}
                okOption={"Ok"}
            />
            <EditModal
                editModal={editModal}
                setEditModal={setEditModal}
                handleClearData={handleClearData}
                caption={"Edit Shippers"}
                firstName={firstName}
                onChangeFirstName={onChangeFirstName}
                lastName={lastName}
                onChangeLastName={onChangeLastName}
                address={address}
                onChangeAddress={onChangeAddress}
                phoneNumber={phoneNumber}
                onChangePhoneNumber={onChangePhoneNumber}
                editEmail={editEmail}
                onChangeEditEmail={onChangeEditEmail}
                handleEdit={handleEdit}
                isShippingCompaniesManagement={isShippingCompaniesManagement}
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
                compName={"SHIPPING COMPANY"}
                caption={"Full Information"}
                okOption={"Accept"}
                editOption={"Reject"}
                isShippingCompaniesRequest={isShippingCompaniesRequest}
                setStatistics={setStatistics}
                setReview={setReview}
            />
            <Statistics
                statistics={statistics}
                setStatistics={setStatistics}
                caption={"Shipping Statistics"}
                handleStatistics={handleStatistics}
                isShippingCompaniesRequest={isShippingCompaniesRequest}
            />
            <Review
                review={review}
                setReview={setReview}
                caption={isShippingCompaniesRequest ? "Reviews" : undefined}
                reviewName={"Alex Ekwueme"}
                reviewDate={"22.03.2021"}
                reviewDescription={"There is no program that walks you through exactly the way you want" +
                    " There is no program that walks you through exactly the way you want." +
                    " There is no program that walks you through exactly the way you want."}
            />
        </>
    )
}