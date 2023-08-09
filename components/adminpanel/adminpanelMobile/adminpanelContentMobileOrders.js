import { useState } from "react";
import FilteringComp from "./commonComp/filteringComp";
import MobileHeader from "./commonComp/header";
import AdminpanelMobileRecords from "./commonComp/adminpanelMobileRecords";
import AdminFullinfoLoadboardMobile from "./commonComp/adminFullinfoLoadboardMobile";
import EditModal from "../common/editModal";
import MobilePagination from "./commonComp/mobilePagination";

export default function AdminpanelContentMobileOrders(props) {
    const [dates, setDates] = useState([])
    const [date, setDate] = useState("")
    const [rates, setRates] = useState([])
    const [rate, setRate] = useState("")
    const [vehicleTypes, setVehicleTypes] = useState([])
    const [vehicleType, setVehicleType] = useState("")
    const [adminFullinfoLoadboardMobile, setAdminFullinfoLoadboardMobile] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [multiplesTen, setMultiplesTen] = useState([])
    const [multipleTen, setMultipleTen] = useState("")

    const handleAdminFullinfo = () => {
        setAdminFullinfoLoadboardMobile(false)
    }

    const handleEditOption = () => {
        setAdminFullinfoLoadboardMobile(false)
    }

    const handleClearData = () => {

    }

    const handleEdit = () => {
        setEditModal(false)
    }

    return (
        <>
            <MobileHeader
                caption={"Orders"}
            />
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
                                isOrders={props.isOrders}
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
                isOrders={props.isOrders}
                handleAdminFullinfo={handleAdminFullinfo}
                handleEditOption={handleEditOption}
            />
            <EditModal
                editModal={editModal}
                isOrders={props.isOrders}
                setEditModal={setEditModal}
                caption={"Edit Order"}
                handleEdit={handleEdit}
                handleClearData={handleClearData}
            />
        </>
    )
}