import { useState } from "react"
import { adminpanelInfo } from "../../../adminpanelInfo/adminpanelInfo"

export default function AdminfullinfoMobileReusables(adminData) {
    const [agentNoEdit, setAgentNoEdit] = useState("")
    const [fullInfo, setFullInfo] = useState(adminpanelInfo)

    const handleFullInfo = () => {
        const filteredData = adminData.filter((data) => data.agentNo === agentNoEdit)[0]
        setFullInfo((prevState) => {
            return {
                ...prevState,
                agentNo: filteredData?.agentNo,
                dateAdded: filteredData?.dateAdded,
                name: filteredData?.businessName,
                address: filteredData?.address,
                phoneNo: filteredData?.phoneNumber,
                weight: filteredData?.weight,
                dimensions: filteredData?.dimensions
            }
        })
    }
    return {
        agentNoEdit,
        setAgentNoEdit,
        fullInfo,
        setFullInfo,
        handleFullInfo
    }
}