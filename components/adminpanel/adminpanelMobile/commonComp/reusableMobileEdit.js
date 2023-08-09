import { useState } from "react"

export default function ReusableMobileEdit(allData, compState, setEditModal, compId) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [address, setAddress] = useState("")
    const [vehicleTypeEdit, setVehicleTypeEdit] = useState("")
    const [vehicleTypesEdit, setVehicleTypesEdit] = useState([])

    function fetchData(id) {
        const data = allData[id]
        // console.log("the data", data)
        setFirstName(data.businessName.split(" ")[0])
        setLastName(data.businessName.split(" ")[1])
        setPhoneNumber(data.phoneNumber)
        setAddress(data.address)
        setVehicleTypeEdit(data.vehicleType)

        if (compState) {
            const newVehicleTypes = []
            const allVehicleTypes = allData.map((dt) => dt.vehicleType)
            const vehicleTypeSet = new Set(allVehicleTypes)
            for (let item of vehicleTypeSet) {
                newVehicleTypes.push(item)
            }
            setVehicleTypesEdit(newVehicleTypes)
        }
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
    const onChangeVehicleType = (event) => {
        setVehicleType(event.target.value)
    }

    const handleEdit = () => {
        const data = allData[compId]
        data.businessName = firstName + " " + lastName
        data.address = address
        data.phoneNumber = phoneNumber
        data.vehicleType = vehicleTypeEdit

        allData.splice(compId, 1, data)
        console.log("saved")
        setEditModal(false)
    }

    const handleClearData = () => {
        setFirstName("")
        setLastName("")
        setAddress("")
        setPhoneNumber("")
        if (compState) {
            setVehicleTypeEdit("")
        }
    }

    return {
        firstName,
        lastName,
        phoneNumber,
        address,
        vehicleTypeEdit,
        vehicleTypesEdit,
        fetchData,
        onChangeFirstName,
        onChangeLastName,
        onChangeAddress,
        onChangePhoneNumber,
        onChangeVehicleType,
        handleEdit,
        handleClearData
    }
}