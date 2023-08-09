import { useState } from "react";
import FilteringComp from "./commonComp/filteringComp";
import MobileHeader from "./commonComp/header";
import AdminpanelMobileRecords from "./commonComp/adminpanelMobileRecords";
import SpecializedModal from "../common/specializedModal";
import InvoiceModal from "../common/invoiceModal";
import RejectMailModal from "../common/rejectMailModal";

export default function AdminpanelContentMobileSpecialized(props) {
    const [dates, setDates] = useState([])
    const [date, setDate] = useState("")
    const [rates, setRates] = useState([])
    const [rate, setRate] = useState("")
    const [vehicleTypes, setVehicleTypes] = useState([])
    const [vehicleType, setVehicleType] = useState("")
    const [specializedModal, setSpcializedModal] = useState(false)
    const [generateInvoice, setGenerateInvoice] = useState(false)
    const [rejectModal, setRejectModal] = useState(false)

    return (
        <>
            <MobileHeader
                caption={"Specialized Shipment"}
                isSpecializedShipment={props.isSpecializedShipment}
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
                .slice(0, 10)
                .map((data, idx) => (
                    <>
                        <div key={idx}>
                            <AdminpanelMobileRecords
                                data={data}
                                idx={idx}
                                isSpecializedShipment={props.isSpecializedShipment}
                                firstHeader={"Sender's name"}
                                secondHeader="E-mail"
                                thirdHeader="Load Type"
                                fourthHeader="Deliver From"
                                fifthHeader="Deliver To"
                                sixtHeader="Status"
                                headerActions="Actions"
                                setSpcializedModal={setSpcializedModal}
                                setGenerateInvoice={setGenerateInvoice}
                            />
                        </div>
                    </>
                ))}
            <SpecializedModal
                specializedModal={specializedModal}
                setSpcializedModal={setSpcializedModal}
                setGenerateInvoice={setGenerateInvoice}
                setRejectModal={setRejectModal}
            />
            <InvoiceModal
                generateInvoice={generateInvoice}
                setGenerateInvoice={setGenerateInvoice}
            />
            <RejectMailModal
                rejectModal={rejectModal}
                setRejectModal={setRejectModal}
            />
        </>
    )
}