import { useState } from "react";
import FilteringComp from "./commonComp/filteringComp";
import MobileHeader from "./commonComp/header";
import WebsiteDetails from "../generic/details/websiteDetails";

export default function AdminpanelContentMobileWebsite(props) {
    const [dates, setDates] = useState([])
    const [date, setDate] = useState("")
    const [rates, setRates] = useState([])
    const [rate, setRate] = useState("")
    const [vehicleTypes, setVehicleTypes] = useState([])
    const [vehicleType, setVehicleType] = useState("")
    return (
        <>
            <MobileHeader
                caption={"Website Activities"}
                isWebsite={props.isWebsite}
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
            <WebsiteDetails
                websiteData={props.websiteData}
            />
        </>
    )
}