import { useState } from "react";
import MobileHeader from "./commonComp/header";
import CustomerFilteringComp from './commonComp/customerFilteringComp'
import AdminpanelMobileRecords from "./commonComp/adminpanelMobileRecords";
import MobilePagination from "./commonComp/mobilePagination";
import AllOrders from "../common/allOrders";
import EditModal from "../common/editModal";

export default function AdminpanelContentMobileCustomers(props) {
    const [isCustomers] = useState(true)
    const [dates, setDates] = useState([])
    const [date, setDate] = useState("")
    const [multiplesTen, setMultiplesTen] = useState([])
    const [multipleTen, setMultipleTen] = useState("")
    const [allOrders, setAllOrders] = useState(false)
    const [sortBy, setSortBy] = useState("")
    const [allSortedData, setAllSortedData] = useState([])

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
    const [customerId, setCustomerId] = useState()

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

    const handleEdit = () => {
        const data = props.adminAgentData[customerId]
        data.businessName = firstName + " " + lastName
        data.address = address
        data.phoneNumber = phoneNumber
        data.email = editEmail

        props.adminAgentData.splice(customerId, 1, data)
        console.log("saved")
        setEditModal(false)
    }

    const handleAllOrders = () => {
        setAllOrders(false)
    }
    const handleClearData = () => {
        setFirstName("")
        setLastName("")
        setAddress("")
        setPhoneNumber("")
    }

    return (
        <>
            <MobileHeader
                caption={"Customers"}
            />

            <CustomerFilteringComp
                adminAgentData={props.adminAgentData}
                dates={dates}
                setDates={setDates}
                setDate={setDate}
                isCustomers={isCustomers}
                setSortBy={setSortBy}
                sortBy={sortBy}
                setAllSortedData={setAllSortedData}
            />
            {date ? (
                props.adminAgentData.filter((data) => data.dateAdded === date)
                    .slice(parseInt(multipleTen - 10), parseInt(multipleTen))
                    .map((data, idx) => (
                        <>
                            <div key={idx}>
                                <AdminpanelMobileRecords
                                    data={data}
                                    idx={idx}
                                    isCustomers={isCustomers}
                                    date={date}
                                    firstHeader={"Name"}
                                    secondHeader="E-mail"
                                    thirdHeader="Address"
                                    fourthHeader="Phone number"
                                    fifthHeader="Date of operation"
                                    headerActions="Actions"
                                    setAllOrders={setAllOrders}
                                    fetchOrderDetails={fetchOrderDetails}
                                    setEditModal={setEditModal}
                                    fetchData={fetchData}
                                    setCustBrokId={setCustomerId}
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
                                isCustomers={isCustomers}
                                date={date}
                                firstHeader={"Name"}
                                secondHeader="E-mail"
                                thirdHeader="Address"
                                fourthHeader="Phone number"
                                fifthHeader="Date of operation"
                                headerActions="Actions"
                                setAllOrders={setAllOrders}
                                fetchOrderDetails={fetchOrderDetails}
                                setEditModal={setEditModal}
                                fetchData={fetchData}
                                setCustBrokId={setCustomerId}
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
                allOrdersHeading={"CUSTOMER"}
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
                caption={"Edit Customers"}
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
                isCustomers={isCustomers}
            />
        </>
    )
}