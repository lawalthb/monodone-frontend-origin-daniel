import Image from "next/image";
import { useState } from "react";
import AllOrders from "../../common/allOrders";
import EditModal from "../../common/editModal";
import CustomPagination from "../../customPagination";

export default function CustomersDetails(props) {
    const [editModal, setEditModal] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [address, setAddress] = useState("")
    const [editEmail, setEditEmail] = useState("")
    const [customerId, setCustomerId] = useState()
    const [allOrders, setAllOrders] = useState(false)

    const [allOrdersName, setAllOrdersName] = useState("")
    const [allOrdersEmail, setAllOrdersEmail] = useState("")
    const [allOrdersPhone, setAllOrdersPhone] = useState("")
    const [allOrdersAddress, setAllOrdersAddress] = useState("")
    const [allOrdersDate, setAllOrdersDate] = useState("")
    const [allOrdersDates, setAllOrdersDates] = useState([])

    const onChangeAllOrdersDate = (event) =>
        setAllOrdersDate(event.target.value)

    function fetchData(id) {
        console.log('id', id)
        const data = props.adminAgentData[id]
        // console.log("the data", data)
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

    const handleAllOrders = () => {
        setAllOrders(false)
        props.handleCustomerList()
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
        props.handleCustomerList()
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
                    Date of operation
                </div>
                <div style={{
                    width: '11.7%',
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
                                fontSize: '12px'
                            }}>
                                <Image
                                    onClick={() => {
                                        setAllOrders(true)
                                        fetchOrderDetails(index)
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
                                        setCustomerId(index)
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
                                        marginLeft: '10px',
                                        cursor: 'pointer'
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
                                    fontSize: '12px'
                                }}>
                                    <Image
                                        onClick={() => {
                                            setAllOrders(true)
                                            fetchOrderDetails(index)
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
                                            setCustomerId(index)
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
                                            marginLeft: '10px',
                                            cursor: 'pointer'
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
                isCustomers={props.isCustomers}
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
        </>
    )
}