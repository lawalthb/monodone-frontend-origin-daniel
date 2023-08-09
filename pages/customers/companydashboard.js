import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import AddAdminModal from "../../components/customers/addAdminModal";
import AddNewParcel from "../../components/customers/addNewParcel";
import AssignAdminModal from "../../components/customers/assignAdminModal";
import ConfirmRemoveAdmin from "../../components/customers/confirmRemoveAdmin";
import CustomerDashboard from "../../components/customers/customerdashboard";
import CustomerHeader from "../../components/customers/customerHeader";
import Location from "../../components/customers/location";
import Parcel from "../../components/customers/parcel";
import RemoveAdminModal from "../../components/customers/removeAdminModal";
import DateSchedule from "../../components/customers/scheduleDate";
import SuccessModal from "../../components/customers/successModal";
import CustomerLayout from "../../components/customers/layout/CustomerLayout";

export default function CustomerDashboardComp({
    packageDelivery,
    bulkDeliveryData,
    adminData
}) {
    const [customerPackageDelivery, setCustomerPackageDelivery] = useState([])
    const [customerBulkDelivery, setCustomerBulkDelivery] = useState([])
    const [customerAdmin, setCustomerAdmin] = useState([])
    const [customerData, setCustomerData] = useState([])
    const [parcelData, setParcelData] = useState("")
    const [packageData, setPackageData] = useState("")
    const [bulkOptionData, setBulkOptionData] = useState("")
    const [addParcel, setAddParcel] = useState(false)
    const [action, setAction] = useState("")
    const [locationModal, setLocationModal] = useState(false)
    const [packageOption, setPackageOption] = useState(false)
    const [parcelItem, setParcelItem] = useState(false)
    const [bulkOption, setBulkOption] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [dateDelivery, setDateDelivery] = useState(false)
    const [chosenDate, setChosenDate] = useState("")

    const [deliverTo, setDeliverTo] = useState("")
    const [deliverFrom, setDeliverFrom] = useState("")
    const [loadingModal, setLoadingModal] = useState(false)
    const [loading, setLoading] = useState(false)

    const [isPackage, setIsPackage] = useState(false)
    const [isBulkDelivery, setIsBulkDelivery] = useState(false)
    const [isCarClearing, setIsCarClearing] = useState(false)
    const [isContainerShipment, setIsContainerShipment] = useState(false)
    const [isSpecializedShipment, setIsSpecializedShipment] = useState(false)
    const [isNoParcel, setIsNoParcel] = useState(false)
    const [isCustomerDash, setIsCustomerDash] = useState(false)
    const [orderModal, setOrderModal] = useState(false)
    const [searchForDriver, setSearchForDriver] = useState(false)
    const [waitingForDriver, setWaitingForDriver] = useState(false)
    const [onTheWay, setOnTheWay] = useState(false)
    const [issued, setIssued] = useState(false)
    const [transitionAlert, setTransitionAlert] = useState(false)
    const [driverRate, setDriverRate] = useState(false)
    const [cancelModal, setCancelModal] = useState(false)
    const [bulkModalOrder, setBulkModalOrder] = useState(false)
    const [bulkModalSearch, setBulkModalSearch] = useState(false)
    const [increaseOffer, setIncreaseOffer] = useState(false)
    const [prepared, setPrepared] = useState(false)
    const [listDrivers, setListDrivers] = useState(false)
    const [rateBulkDriver, setRateBulkDriver] = useState(false)
    const [riseUpBid, setRiseUpBid] = useState(false)
    const [buttonValue, setButtonValue] = useState("")
    const [selected, setSelected] = useState("")
    const [bulkFinalState, setBulkFinalState] = useState(false)
    const [completeBulkOrder, setCompleteBulkOrder] = useState(false)
    const [removeAdmin, setRemoveAdmin] = useState(false)
    const [confirmRemoveAdmin, setConfirmRemoveAdmin] = useState(false)
    const [successModal, setSuccessModal] = useState(false)
    const [assignAdmin, setAssignAdmin] = useState(false)
    const [addAdminModal, setAddAdminModal] = useState(false)

    const cancelAddAdminModal = () => {
        setAssignAdmin(false)
        setAddAdminModal(false)
    }

    const handleConfirmAssignAdmin = () => {
        setAddAdminModal(true)
    }

    const handleAssignAdmin = () => {
        setAssignAdmin(true)
    }

    const handleAddAdminSuccess = () => {
        setSuccessModal(true)
        setAssignAdmin(false)
        setAddAdminModal(false)
        setAction("Admin added successfuly")
    }

    const handleRemovalSuccess = () => {
        setSuccessModal(true)
        setRemoveAdmin(false)
        setConfirmRemoveAdmin(false)
        setAction("Admin removed successfuly")
    }

    const handleCancelRemoveAdmin = () => {
        setRemoveAdmin(false)
        setConfirmRemoveAdmin(false)
    }

    const handleConfirmRemove = () => {
        setConfirmRemoveAdmin(true)
    }

    const handleCancelAdmin = () => {
        setRemoveAdmin(true)
    }

    const handleRemoveAdmin = () => {
        setRemoveAdmin(true)
    }

    const handleRateBulkDriver = () => {
        setRateBulkDriver(true)
    }

    const handleOrderModal = () => {
        setOrderModal(true)
    }

    const handleBulkOrder = () => {
        setBulkModalOrder(true)
    }

    const handleIsPackage = () => {
        setIsPackage(true)
        setIsBulkDelivery(false)
        setIsCarClearing(false)
        setIsContainerShipment(false)
        setIsSpecializedShipment(false)
    }
    const handleIsBulkDelivery = () => {
        setIsBulkDelivery(true)
        setIsPackage(false)
        setIsCarClearing(false)
        setIsContainerShipment(false)
        setIsSpecializedShipment(false)
    }
    const handleIsCarClearing = () => {
        setIsCarClearing(true)
        setIsBulkDelivery(false)
        setIsPackage(false)
        setIsContainerShipment(false)
        setIsSpecializedShipment(false)
    }
    const handleIsContainerShipment = () => {
        setIsContainerShipment(true)
        setIsCarClearing(false)
        setIsBulkDelivery(false)
        setIsPackage(false)
        setIsSpecializedShipment(false)
    }
    const handleIsSpecializedShipment = () => {
        setIsSpecializedShipment(true)
        setIsContainerShipment(false)
        setIsCarClearing(false)
        setIsBulkDelivery(false)
        setIsPackage(false)
    }

    const handleDeliverTo = () => {
        setDeliverTo("Deliver To Office #4, Zaria Road, 800283, Kaduna")
        setDeliverFrom("")
    }
    const handleDeliverFrom = () => {
        setDeliverFrom("Deliver From 21 Alex Ekwueme Way, Jabi 900108, Abuja")
        setDeliverTo("")
    }

    const sendersName1 = useRef()
    const phoneNumber1 = useRef()
    const address1 = useRef()
    const city1 = useRef()
    const street1 = useRef()
    const number1 = useRef()
    const apartment1 = useRef()
    const sendersName2 = useRef()
    const phoneNumber2 = useRef()
    const address2 = useRef()
    const city2 = useRef()
    const street2 = useRef()
    const number2 = useRef()
    const apartment2 = useRef()
    const receiversName1 = useRef()
    const phoneNumber3 = useRef()
    const address3 = useRef()
    const city3 = useRef()
    const street3 = useRef()
    const number3 = useRef()
    const apartment3 = useRef()
    const receiversName2 = useRef()
    const phoneNumber4 = useRef()
    const address4 = useRef()
    const city4 = useRef()
    const street4 = useRef()
    const number4 = useRef()
    const apartment4 = useRef()

    useEffect(() => {
        if (customerPackageDelivery.length < 1) {
            setIsNoParcel(false)
            setIsCustomerDash(true)
        } else {
            setIsNoParcel(true)
            setIsCustomerDash(false)
        }
        setCustomerPackageDelivery(packageDelivery)
        setCustomerBulkDelivery(bulkDeliveryData)
        setCustomerAdmin(adminData)
    }, [setIsNoParcel, setIsCustomerDash, adminData, bulkDeliveryData, customerPackageDelivery, packageDelivery])


    const handleAddParcel = (action) => {
        setAction(action);
        setAddParcel(true);
    };

    const handlePackageOption = () => {
        setPackageOption(true);
        setBulkOption(false);
        setToggle((current) => !current);
    };

    const handleBulkOption = () => {
        setBulkOption(true);
        setPackageOption(false);
        setToggle((current) => !current);
    };

    const handleParcelItem = () => {
        setParcelItem(true)
        setLocationModal(false)
    }

    const handleDate = () => {
        setDateDelivery(true)
        setParcelItem(false)
    }

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Customer | Dashboard</title>
                <meta name="Description" content="Drivers Services." />
                <link rel="manifest" href="manifest.webmanifest" />
            </Head>
            <CustomerLayout>
                <CustomerHeader
                    handleAddParcel={handleAddParcel}
                    isPackage={isPackage}
                    setIsPackage={setIsPackage}
                    isBulkDelivery={isBulkDelivery}
                    setIsBulkDelivery={setIsBulkDelivery}
                    isCarClearing={isCarClearing}
                    setIsCarClearing={setIsCarClearing}
                    isContainerShipment={isContainerShipment}
                    setIsContainerShipment={setIsContainerShipment}
                    isSpecializedShipment={isSpecializedShipment}
                    setIsSpecializedShipment={setIsSpecializedShipment}
                    handleIsPackage={handleIsPackage}
                    handleIsBulkDelivery={handleIsBulkDelivery}
                    handleIsCarClearing={handleIsCarClearing}
                    handleIsContainerShipment={handleIsContainerShipment}
                    handleIsSpecializedShipment={handleIsSpecializedShipment}
                    customerData={customerData}
                    isCustomerDash={isCustomerDash}
                    customerPackageDelivery={customerPackageDelivery}
                    customerBulkDelivery={customerBulkDelivery}
                    customerAdmin={customerAdmin}
                    headerMessage="Add admin to your other lists of admin"
                    headerName="Dangote Cement"
                    imageSrc="/img/dangoto.jpeg"
                />
                <CustomerDashboard
                    isPackage={isPackage}
                    customerPackageDelivery={customerPackageDelivery}
                    customerBulkDelivery={customerBulkDelivery}
                    isBulkDelivery={isBulkDelivery}
                    handleOrderModal={handleOrderModal}
                    handleBulkOrder={handleBulkOrder}
                    handleRateBulkDriver={handleRateBulkDriver}
                    dashboardType="admin"
                    handleRemoveAdmin={handleRemoveAdmin}
                    handleAssignAdmin={handleAssignAdmin}
                    isCarClearing={isCarClearing}
                    isContainerShipment={isContainerShipment}
                    isSpecializedShipment={isSpecializedShipment}
                />
                <RemoveAdminModal
                    removeAdmin={removeAdmin}
                    setRemoveAdmin={setRemoveAdmin}
                    handleCancelAdmin={handleCancelAdmin}
                    handleConfirmRemove={handleConfirmRemove}
                />
                <ConfirmRemoveAdmin
                    confirmRemoveAdmin={confirmRemoveAdmin}
                    setConfirmRemoveAdmin={setConfirmRemoveAdmin}
                    handleCancelRemoveAdmin={handleCancelRemoveAdmin}
                    handleRemovalSuccess={handleRemovalSuccess}
                />
                <AssignAdminModal
                    assignAdmin={assignAdmin}
                    setAssignAdmin={setAssignAdmin}
                    handleConfirmAssignAdmin={handleConfirmAssignAdmin}
                />
                <AddAdminModal
                    addAdminModal={addAdminModal}
                    setAddAdminModal={setAddAdminModal}
                    cancelAddAdminModal={cancelAddAdminModal}
                    handleAddAdminSuccess={handleAddAdminSuccess}
                />
                <SuccessModal
                    show={successModal}
                    onHide={() => setSuccessModal(false)}
                    action={action}
                />
                <Parcel
                    parcelItem={parcelItem}
                    setParcelItem={setParcelItem}
                    packageOption={packageOption}
                    setPackageOption={setPackageOption}
                    setPackageData={setPackageData}
                    setBulkOptionData={setBulkOptionData}
                    bulkOption={bulkOption}
                    setBulkOption={setBulkOption}
                    action={action}
                    setToggle={setToggle}
                    toggle={toggle}
                    handlePackageOption={handlePackageOption}
                    handleBulkOption={handleBulkOption}
                    handleDate={handleDate}
                    chosenDate={chosenDate}
                    parcelData={parcelData}
                    packageData={packageData}
                    deliverTo={deliverTo}
                    deliverFrom={deliverFrom}
                    loading={loading}
                    setLoading={setLoading}
                    setLoadingModal={setLoadingModal}
                    setCustomerData={setCustomerData}
                    customerData={customerData}
                    setIsNoParcel={setIsNoParcel}
                    setIsCustomerDash={setIsCustomerDash}
                />
                <AddNewParcel
                    addParcel={addParcel}
                    setAddParcel={setAddParcel}
                    action={action}
                    sendersName1={sendersName1}
                    phoneNumber1={phoneNumber1}
                    address1={address1}
                    city1={city1}
                    street1={street1}
                    number1={number1}
                    apartment1={apartment1}
                    sendersName2={sendersName2}
                    phoneNumber2={phoneNumber2}
                    address2={address2}
                    city2={city2}
                    street2={street2}
                    number2={number2}
                    apartment2={apartment2}
                    receiversName1={receiversName1}
                    phoneNumber3={phoneNumber3}
                    address3={address3}
                    city3={city3}
                    street3={street3}
                    number3={number3}
                    apartment3={apartment3}
                    receiversName2={receiversName2}
                    phoneNumber4={phoneNumber4}
                    address4={address4}
                    city4={city4}
                    street4={street4}
                    number4={number4}
                    apartment4={apartment4}
                    setParcelData={setParcelData}
                    parcelData={parcelData}
                    setLocationModal={setLocationModal}
                />
                <Location
                    locationModal={locationModal}
                    setLocationModal={setLocationModal}
                    action={action}
                    handleParcelItem={handleParcelItem}
                    deliverTo={deliverTo}
                    setDeliverTo={setDeliverTo}
                    deliverFrom={deliverFrom}
                    setDeliverFrom={setDeliverFrom}
                    handleDeliverTo={handleDeliverTo}
                    handleDeliverFrom={handleDeliverFrom}
                />
                <DateSchedule
                    dateDelivery={dateDelivery}
                    setDateDelivery={setDateDelivery}
                    action={action}
                    setParcelItem={setParcelItem}
                    setBulkOption={setBulkOption}
                    setPackageOption={setPackageOption}
                    setChosenDate={setChosenDate}
                />
            </CustomerLayout>
        </>
    )
}

export async function getServerSideProps() {
    const { package_delivery } = await import("../../components/customers/data/data.json");
    const { bulk_delivery } = await import("../../components/customers/data/data.json");
    const { admin } = await import("../../components/customers/data/data.json");

    return {
        props: {
            packageDelivery: package_delivery,
            bulkDeliveryData: bulk_delivery,
            adminData: admin,
        },
    };
}