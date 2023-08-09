import { useState, useEffect } from "react";
import MobileHeader from "./commonComp/header";
import { Form } from "react-bootstrap";
import FilteringComp from "./commonComp/filteringComp";
import AdminpanelMobileRecords from "./commonComp/adminpanelMobileRecords";
import AdminFullinfoLoadboardMobile from "./commonComp/adminFullinfoLoadboardMobile";
import Refund from "../common/refund";
import MobilePagination from "./commonComp/mobilePagination";

export default function AdminpanelContentMobileTransactions(props) {
    const [isTransactionsCustomers, setIsTransactionCustomers] = useState(false)
    const [isTransactionsAgents, setIsTransactionsAgents] = useState(false)
    const [isTransactionsDrivers, setIsTransactionsDrivers] = useState(false)
    const [dates, setDates] = useState([])
    const [date, setDate] = useState("")
    const [rates, setRates] = useState([])
    const [rate, setRate] = useState("")
    const [vehicleTypes, setVehicleTypes] = useState([])
    const [vehicleType, setVehicleType] = useState("")
    const [adminFullinfoLoadboardMobile, setAdminFullinfoLoadboardMobile] = useState(false)
    const [refund, setRefund] = useState(false)
    const [multiplesTen, setMultiplesTen] = useState([])
    const [multipleTen, setMultipleTen] = useState("")

    const handleIsTransactionsCustomers = () => {
        setIsTransactionCustomers(true)
        setIsTransactionsAgents(false)
        setIsTransactionsDrivers(false)
    }
    const handleIsTransactionsAgents = () => {
        setIsTransactionsAgents(true)
        setIsTransactionCustomers(false)
        setIsTransactionsDrivers(false)
    }
    const handleIsTransactionsDrivers = () => {
        setIsTransactionsDrivers(true)
        setIsTransactionsAgents(false)
        setIsTransactionCustomers(false)
    }

    const handleAdminFullinfo = () => {
        setAdminFullinfoLoadboardMobile(false)
    }

    const handleEditOption = () => {
        setAdminFullinfoLoadboardMobile(false)
    }

    useEffect(() => {
        if (isTransactionsDrivers) {
            setIsTransactionCustomers(false)
            setIsTransactionsAgents(false)
        } else if (isTransactionsAgents) {
            setIsTransactionCustomers(false)
            setIsTransactionsAgents(false)
        } else {
            setIsTransactionCustomers(true)
        }
    }, [setIsTransactionCustomers, setIsTransactionsAgents, isTransactionsAgents, isTransactionsDrivers])
    return (
        <>
            <MobileHeader
                caption={"Transaction"}
            />
            <div style={{
                display: 'flex',
                gap: '15px'
            }}>
                <Form.Label
                    onClick={handleIsTransactionsCustomers}
                    style={isTransactionsCustomers ? {
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
                    CUSTOMERS
                </Form.Label>
                <Form.Label
                    onClick={handleIsTransactionsAgents}
                    style={isTransactionsAgents ? {
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
                    AGENTS
                </Form.Label>
                <Form.Label
                    onClick={handleIsTransactionsDrivers}
                    style={isTransactionsDrivers ? {
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
                    DRIVERS
                </Form.Label>
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
            {props.adminAgentData
                .slice(parseInt(multipleTen - 10), parseInt(multipleTen))
                .map((data, idx) => (
                    <>
                        <div key={idx}>
                            <AdminpanelMobileRecords
                                data={data}
                                idx={idx}
                                isTransactionsCustomers={isTransactionsCustomers}
                                isTransactionsAgents={isTransactionsAgents}
                                isTransactionsDrivers={isTransactionsDrivers}
                                date={date}
                                rate={rate}
                                vehicleType={vehicleType}
                                firstHeader="Date"
                                secondHeader="Name"
                                thirdHeader="Price of parcel"
                                fourthHeader="Insurance price"
                                fifthHeader="Repayment 30%"
                                sixthHeader="Total price"
                                seventhHeader="Status"
                                headerActions="Actions"
                                setAdminFullinfoLoadboardMobile={setAdminFullinfoLoadboardMobile}
                                setRefund={setRefund}
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
            <AdminFullinfoLoadboardMobile
                adminFullinfoLoadboardMobile={adminFullinfoLoadboardMobile}
                setAdminFullinfoLoadboardMobile={setAdminFullinfoLoadboardMobile}
                handleAdminFullinfo={handleAdminFullinfo}
                handleEditOption={handleEditOption}
            />
            <Refund
                refund={refund}
                setRefund={setRefund}
            />
        </>
    )
}