import { useState, useEffect } from "react";
import MobileHeader from "./commonComp/header";
import { Form } from "react-bootstrap";
import Image from "next/image";
import FilteringComp from "./commonComp/filteringComp";
import AdminpanelMobileRecords from "./commonComp/adminpanelMobileRecords";
import AdminFullinfoLoadboardMobile from "./commonComp/adminFullinfoLoadboardMobile";
import MobilePagination from "./commonComp/mobilePagination";
import EditModal from "../common/editModal";
import AssignLoad from "../common/assignLoad";
import HideLoad from "../common/hideLoad";
import RemoveLoad from "../common/removeLoad";

export default function AdminpanelContentMobileLoadboard(props) {
    const [isLoadboardManagement, setIsLoadboardManagement] = useState(false)
    const [isLoadboardRequest, setIsLoadboardRequest] = useState(false)
    const [dates, setDates] = useState([])
    const [date, setDate] = useState("")
    const [rates, setRates] = useState([])
    const [rate, setRate] = useState("")
    const [vehicleTypes, setVehicleTypes] = useState([])
    const [vehicleType, setVehicleType] = useState("")
    const [adminFullinfoLoadboardMobile, setAdminFullinfoLoadboardMobile] = useState(false)
    const [multiplesTen, setMultiplesTen] = useState([])
    const [multipleTen, setMultipleTen] = useState("")
    const [editModal, setEditModal] = useState(false)
    const [assignLoad, setAssignLoad] = useState(false)
    const [hideLoad, setHideLoad] = useState(false)
    const [removeLoad, setRemoveLoad] = useState(false)

    const handleAdminFullinfo = () => {
        setAdminFullinfoLoadboardMobile(false)
    }

    const handleEditOption = () => {
        setAdminFullinfoLoadboardMobile(false)
    }

    const handleIsLoadboardManagement = () => {
        setIsLoadboardManagement(true)
        setIsLoadboardRequest(false)
    }

    const handleClearData = () => {

    }

    const handleEdit = () => {
        setEditModal(false)
    }

    const handleIsLoadboardRequest = () => {
        setIsLoadboardRequest(true)
        setIsLoadboardManagement(false)
    }

    useEffect(() => {
        isLoadboardRequest ? setIsLoadboardManagement(false) : setIsLoadboardManagement(true)
    }, [setIsLoadboardManagement, isLoadboardRequest])
    return (
        <>
            <MobileHeader
                caption={"Load Board"}
            />
            <div style={{
                display: 'flex',
                gap: '15px'
            }}>
                <Form.Label
                    onClick={handleIsLoadboardManagement}
                    style={isLoadboardManagement ? {
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
                    Load board Management
                </Form.Label>
                <Form.Label
                    onClick={handleIsLoadboardRequest}
                    style={isLoadboardRequest ? {
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
                    Load board Request
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
            {props.adminAgentData
                .slice(parseInt(multipleTen - 10), parseInt(multipleTen))
                .map((data, idx) => (
                    <>
                        <div key={idx}>
                            <AdminpanelMobileRecords
                                data={data}
                                idx={idx}
                                isLoadboardManagement={isLoadboardManagement}
                                isLoadboardRequest={isLoadboardRequest}
                                date={date}
                                rate={rate}
                                vehicleType={vehicleType}
                                firstHeader="Order No"
                                secondHeader="Date added"
                                thirdHeader="Sender"
                                fourthHeader="Recipient"
                                fifthHeader="Delivery From"
                                sixthHeader="Deliver To"
                                seventhHeader="Status"
                                EighthHeader="Price"
                                headerActions="Actions"
                                setAdminFullinfoLoadboardMobile={setAdminFullinfoLoadboardMobile}
                                setEditModal={setEditModal}
                                setAssignLoad={setAssignLoad}
                                setHideLoad={setHideLoad}
                                setRemoveLoad={setRemoveLoad}
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
                isLoadboardManagement={isLoadboardManagement}
                isLoadboardRequest={isLoadboardRequest}
                handleAdminFullinfo={handleAdminFullinfo}
                handleEditOption={handleEditOption}
            />
            <EditModal
                editModal={editModal}
                isLoadboardManagement={isLoadboardManagement}
                setEditModal={setEditModal}
                caption={"Edit Order"}
                handleEdit={handleEdit}
                handleClearData={handleClearData}
            />
            <AssignLoad
                assignLoad={assignLoad}
                setAssignLoad={setAssignLoad}
            />
            <HideLoad
                hideLoad={hideLoad}
                setHideLoad={setHideLoad}
            />
            <RemoveLoad
                removeLoad={removeLoad}
                setRemoveLoad={setRemoveLoad}
            />
        </>
    )
}