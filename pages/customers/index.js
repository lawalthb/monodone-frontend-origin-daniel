import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState, useRef } from "react";
import AddNewParcel from "../../components/customers/addNewParcel";
import TransitionAlerts from "../../components/customers/alert";
import BulkDriverRateModal from "../../components/customers/bulkDriverRateModal";
import BulkDriverRiseUpBid from "../../components/customers/bulkDriverRiseUpBid";
import BulkModalOrder from "../../components/customers/bulkModalOrder";
import BulkModalSearchForDriver from "../../components/customers/bulkModalSearchForDriver";
import CancelModal from "../../components/customers/cancelModal";
import AddCarClearingParcelModal from "../../components/customers/carClearing/addCarClearingParcelModal";
import ClearingCost from "../../components/customers/carClearing/clearingCost";
import LoadDetails from "../../components/customers/carClearing/loadDetails/loadDetails";
import LoadDetailsWithBidFromAgents from "../../components/customers/carClearing/loadDetails/loadDetailsWithBidFromAgents";
import LoadDetailsWithNoBidding from "../../components/customers/carClearing/loadDetails/loadDetailsWithNoBidding";
import ReviewModal from "../../components/customers/carClearing/loadDetails/reviewModal";
import ViewAgentProfile from "../../components/customers/carClearing/loadDetails/viewAgent";
import PostLoadFailureModal from "../../components/customers/carClearing/postLoadFailureModal";
import PosLoadSuccessModal from "../../components/customers/carClearing/postLoadSuccessModal";
import SuggestLoading from "../../components/customers/carClearing/suggestLaoding";
import SuggestPriceModal from "../../components/customers/carClearing/suggestPriceModal";
import UploadDocument from "../../components/customers/carClearing/uploadDoc";
import UploadDocSuccess from "../../components/customers/carClearing/uploadDocSuccess";
import AddContainerShipmentModal from "../../components/customers/containerShipment/addContainerShipmentModal";
import EstimatedClearingCost from "../../components/customers/containerShipment/estimatedClearingCost";
import CustomerDashboard from "../../components/customers/customerdashboard";
import CustomerHeader from "../../components/customers/customerHeader";
import DriverRateModal from "../../components/customers/driverRateModal";
import LoadingModal from "../../components/customers/loadingModal";
import Location from "../../components/customers/location";
import NoactiveParcel from "../../components/customers/noactiveParcel";
import OrderModal from "../../components/customers/orderModal";
import OrderModalIssued from "../../components/customers/orderModalIssued";
import OrderModalOnTheWay from "../../components/customers/orderModalOnTheWay";
import OrderModalSearchForDriver from "../../components/customers/orderModalSearchForDriver";
import OrderModalWaitingForDriver from "../../components/customers/orderModalWaitingForDriver";
import Parcel from "../../components/customers/parcel";
import Aboutapp from "../../components/customers/profile/aboutapp";
import CustomerProfile from "../../components/customers/profile/customerProfile";
import ProfileDetails from "../../components/customers/profile/profileDetails";
import DateSchedule from "../../components/customers/scheduleDate";
import AddSpecializedShipmentModal from "../../components/customers/specializedShipment/addSpecializedShipmentModal";
import CustomerLayout from "../../components/customers/layout/CustomerLayout";

const initialState = {
    departureCountry: "",
    destinationCountry: "",
    carType: "",
    carModel: "",
    uploadDoc: "Dock receipt",
    carValue: "",
    yearOfCar: "",
    comment: "",
    fullName: "",
    phoneNumber: "",
    zipCode: "",
    city: "",
    street: "",
    deliveryFrom: "",
    deliveryTo: "",
    additionalInfo: "",
    containerImage: ""
}
const initialSuggestPrice = {
    carClearingCost: "",
    carDeliveryCost: "",
    carTotalCost: ""
}

const initialShipment = {
    departureCountry: "Nigeria",
    containerHeight: "40ft",
    uploadDocuments: "Dock receipt",
    destinationCountry: "Poland",
    containerCarrier: "Grimaldi",
    containerValue: '$3.4m',
    containerContent: "",
    deliveryFrom: "",
    deliveryTo: "",
    fullName: "",
    phoneNumber: "",
    zipCode: "",
    city: "",
    street: "",
    additionalInfo: "",
    containerImage: ""
}

const initilSpecializedState = {
    deliveryFrom: "Lagos",
    deliveryTo: 'Enugu',
    loadDescription: "",
    loadPic: '',
    containerImage: ""
}

export default function Customers({
    packageDelivery,
    bulkDeliveryData,
    adminData
}) {
    const router = useRouter()
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
    const [addCarClearingParcelModal, setCarClearingParcelModal] = useState(false)
    const [carClearingOption, setCarClearingOption] = useState(false)
    const [containerShipment, setContainerShipment] = useState(false)
    const [specializedShipment, setSpecializedShipment] = useState(false)
    const [cleaingCost, setClearingCost] = useState(false)
    const [carClearingDetails, setCarClearingDetails] = useState(initialState)
    const [carClearingError, setCarClearingError] = useState(false)
    const [suggestPrice, setSuggestPrice] = useState(false)
    const [suggestPriceData, setSuggestPriceData] = useState(initialSuggestPrice)
    const [suggestLoading, setSuggestLoading] = useState(false)
    const [suggestPriceError, setSuggestPriceError] = useState(false)
    const [postLoadSuccess, setPostLoadSuccess] = useState(false)
    const [postLoadFailure, setPostLoadFailure] = useState(false)
    const [uploadDocument, setUploadDocument] = useState(false)
    const [uploadDocumentSuccess, setUploadDocumentSuccess] = useState(false)
    const [isChecked, setIsChecked] = useState(false)
    const [loadDetails, setLoadDetails] = useState(false)
    const [loadDetailsWaitingForAgent, setLoadDetailsWaitingForAgent] = useState(false)
    const [loadDetailsClearingInProgress, setLoadDetailsClearingInProgress] = useState(false)
    const [loadDetailsCleared, setLoadDetailsCleared] = useState(false)
    const [viewAgentProfile, setViewAgentProfile] = useState(false)
    const [reviewModal, setReviewModal] = useState(false)
    const [loadDetailsWithNoBidding, setLoadDetailsWithNoBidding] = useState(false)
    const [loadDetailsDeliveryInProgress, setLoadDetailsDeliveryInProgress] = useState(false)
    const [loadDetailsDelivered, setLoadDetailsDelivered] = useState(false)
    const [loadDetailsWaitingForAgentNoBidding, setLoadDetailsWaitingForAgentNoBidding] = useState(false)
    const [loadDetailsWithBidding, setLoadDetailsWithBidding] = useState(false)
    const [loadDetailsFirst, setLoadDetailsFirst] = useState(false)
    const [loadDetailsAnother, setLoadDetailsAnother] = useState(false)
    const [loadDetailsNext, setLoadDetailsNext] = useState(false)
    const [isCarClearingParcel, setIsCarClearingParcel] = useState(false)
    const [isContainerShipmentUpload, setIsContainerShipmentUpload] = useState(false)
    const [containerShipmentData, setContainerShipmentData] = useState(initialShipment)
    const [addContainerShipmentModal, setAddContainerShipmentModal] = useState(false)
    const [estimatedClearingCost, setEstimatedClearingCost] = useState(false)
    const [addSpecializedShipmentModal, setAddSpecializedShipmentModal] = useState(false)
    const [specializedData, setSpecializedData] = useState(initilSpecializedState)
    const [isSpecialized, setIsSpecialized] = useState(false)
    const [customerProfile, setCustomerProfile] = useState(false)
    const [profileDetails, setProfileDetails] = useState(false)
    const [aboutApp, setAboutApp] = useState(false)

    const handleAboutApp = () => {
        setAboutApp(true)
        setCustomerProfile(false)
    }

    const handleProfileDetails = () => {
        setProfileDetails(true)
        setCustomerProfile(false)
    }

    const handleCustomerProfile = () => {
        setCustomerProfile(true)
    }

    const handleSpecializedShipRequest = () => {
        setPostLoadSuccess(true)
        setIsSpecialized(true)
        setAddSpecializedShipmentModal(false)
        setAddContainerShipmentModal(false)
        setCarClearingParcelModal(false)
    }

    const handleAddSpecializedShipment = () => {
        setAddSpecializedShipmentModal(true)
    }

    const handleContainerClearingCost = () => {
        setEstimatedClearingCost(true)
        setAddContainerShipmentModal(false)
    }

    const handleAddContainerShipment = () => {
        setAddContainerShipmentModal(true)
    }

    const handleUploadSuccessModal = () => {
        setUploadDocumentSuccess(true)
        setUploadDocument(false)
    }

    const handleUploadContainerShipment = () => {
        setUploadDocument(true)
        setAddContainerShipmentModal(false)
        setCarClearingParcelModal(false)
    }

    const handleLoadDetailsFirst = () => {
        setLoadDetailsFirst(true)
        setLoadDetailsAnother(false)
        setLoadDetailsNext(false)
    }
    const handleLoadDetailsNext = () => {
        setLoadDetailsNext(true)
        setLoadDetailsFirst(false)
        setLoadDetailsAnother(false)
    }
    const handleLoadDetailsAnother = () => {
        setLoadDetailsAnother(true)
        setLoadDetailsNext(false)
        setLoadDetailsFirst(false)
    }

    const handleMessages = () => {
        setLoadDetails(false)
        router.push("/customers/messages")
    }

    const handleSubmitReview = () => {
        setReviewModal(true)
        setViewAgentProfile(false)
    }

    const handleCustomerAgentProfile = () => {
        setViewAgentProfile(true)
        setLoadDetails(false)
        setLoadDetailsWithNoBidding(false)
    }

    const handleLoadDetailsCleared = () => {
        setLoadDetailsCleared(true)
        setLoadDetailsWaitingForAgent(false)
        setLoadDetailsClearingInProgress(false)
    }
    const handleLoadDetailClearingProgress = () => {
        setLoadDetailsClearingInProgress(true)
        setLoadDetailsWaitingForAgent(false)
        setLoadDetailsCleared(false)
    }
    const handleLoadDetailWaitingAgent = () => {
        setLoadDetailsWaitingForAgent(true)
        setLoadDetailsClearingInProgress(false)
        setLoadDetailsCleared(false)
    }

    const handleLoadDetailDeliveryInProgress = () => {
        setLoadDetailsDeliveryInProgress(true)
        setLoadDetailsDelivered(false)
        setLoadDetailsWaitingForAgentNoBidding(false)
    }
    const handleLoadDetailWaitingAgentNoBidding = () => {
        setLoadDetailsWaitingForAgentNoBidding(true)
        setLoadDetailsDeliveryInProgress(false)
        setLoadDetailsDelivered(false)
    }
    const handleLoadDetailsDelivered = () => {
        setLoadDetailsDelivered(true)
        setLoadDetailsWaitingForAgentNoBidding(false)
        setLoadDetailsDeliveryInProgress(false)
    }

    const handleViewLoadDetails = () => {
        setLoadDetails(true)
        // setLoadDetailsWithNoBidding(true)
        // setLoadDetailsWithBidding(true)
    }

    const handleOnClick = () => {
        setIsChecked((current) => !current)
    }

    const handleUploadSuccess = () => {
        if (isContainerShipmentUpload) {
            setAddContainerShipmentModal(true)
            setUploadDocumentSuccess(false)
        }
        if (isCarClearingParcel) {
            setCarClearingParcelModal(true)
            setUploadDocumentSuccess(false)
        }
    }
    const handleUploadDoc = () => {
        setUploadDocumentSuccess(true)
        setUploadDocument(false)
    }

    const handleCloseUploadDocument = () => {
        setUploadDocument(false)
        setCarClearingDetails(initialState)
    }

    const handlePostLoadSuccess = () => {
        setPostLoadSuccess(false)
        router.push("/customers")
    }

    const handlePostLoad = () => {
        if (suggestPriceData.carClearingCost?.length < 1 || suggestPriceData.carTotalCost?.length < 1) {
            setSuggestPriceError(true)
            return
        }
        if (isChecked && suggestPriceData.carDeliveryCost?.length < 1) {
            setSuggestPriceError(true)
            return
        }
        setPostLoadSuccess(true)
        // setSuggestLoading(true)
        // setPostLoadFailure(true)
        setSuggestPrice(false)
    }

    const handleSuggestPrice = () => {
        setSuggestPrice(true)
        setClearingCost(false)
        setEstimatedClearingCost(false)
    }

    const handleClearingCost = () => {
        if (carClearingDetails.departureCountry?.length < 1 ||
            carClearingDetails.destinationCountry?.length < 1 ||
            carClearingDetails.carType?.length < 1 ||
            carClearingDetails.carModel?.length < 1 ||
            carClearingDetails.uploadDoc?.length < 1 ||
            carClearingDetails.carValue?.length < 1 ||
            carClearingDetails.yearOfCar?.length < 1 ||
            carClearingDetails.comment?.length < 1 ||
            carClearingDetails.fullName?.length < 1 ||
            carClearingDetails.phoneNumber?.length < 1 ||
            carClearingDetails.zipCode?.length < 1 ||
            carClearingDetails.city?.length < 1 ||
            carClearingDetails.street?.length < 1) {
            setCarClearingError(true)
            return
        }
        setClearingCost(true)
        setCarClearingParcelModal(false)
    }

    const handleAddCarClearingParcel = () => {
        setCarClearingParcelModal(true)
    }

    const handleCompleteBulkOrder = () => {
        setCompleteBulkOrder(true)
    }

    const handleListDrivers = () => {
        setListDrivers(true)
    }

    const handleCancelBulkModal = () => {
        setCancelModal(true)
        setBulkModalOrder(false)
        setBulkModalSearch(false)
    }

    const handleAgreeBtn = () => {
        setBulkModalOrder(true)
        setRiseUpBid(false)
        setPrepared(true)
        setListDrivers(true)
        setBulkFinalState(true)
    }
    const handleBulkRiseUpBid = () => {
        setRiseUpBid(true)
        setRateBulkDriver(false)
    }

    const handleRateBulkDriver = () => {
        setRateBulkDriver(true)
    }

    const handleOrderModal = () => {
        setOrderModal(true)
    }
    const handlePrepared = () => {
        setPrepared(true)
        setIncreaseOffer(false)
    }
    const handleIncreaseOffer = () => {
        setIncreaseOffer(true)
        setBulkModalOrder(true)
        setBulkModalSearch(false)
    }
    const handleBulkModalSearch = () => {
        setBulkModalSearch(true)
        setBulkModalOrder(false)
    }
    const handleBulkOrder = () => {
        setBulkModalOrder(true)
    }

    const handleCancelModal = () => {
        setCancelModal(true)
        setOrderModal(false)
        setSearchForDriver(false)
        setWaitingForDriver(false)
    }
    const handleRateDriver = () => {
        setDriverRate(true)
    }
    const handleViewQuotation = () => {
        router.push("/customers/viewquotation")
    }
    const handleTransitionAlert = () => {
        setTransitionAlert(true)
        setIssued(false)
    }
    const handleIssued = () => {
        setIssued(true)
        setOnTheWay(false)
    }
    const handleOnTheway = () => {
        setOnTheWay(true)
        setWaitingForDriver(false)
    }
    const handleWaitingForDriver = () => {
        setWaitingForDriver(true)
        setSearchForDriver(false)
    }
    const showSearchingForDriver = () => {
        setSearchForDriver(true)
        setOrderModal(false)
    }

    const handleIsCustomerDash = () => {
        if (customerData.length > 0) {
            setIsCustomerDash(true)
        } else {
            setIsNoParcel(true)
        }
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

    const handleButtonClick = (e) => {
        e.preventDefault()
        setButtonValue(e.target.innerHTML)
        setSelected(e.target.innerHTML)
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
        setCarClearingOption(false);
        setSpecializedShipment(false)
        setContainerShipment(false)
        setToggle((current) => !current);
    };

    const handleCarClearingOption = () => {
        setCarClearingOption(true);
        setBulkOption(false);
        setPackageOption(false)
        setSpecializedShipment(false)
        setContainerShipment(false)
        setToggle((current) => !current);
    };

    const handleContainerShipment = () => {
        setContainerShipment(true)
        setSpecializedShipment(false)
        setCarClearingOption(false);
        setBulkOption(false);
        setPackageOption(false)
        setToggle((current) => !current);
    };
    const handleSpecializedShipment = () => {
        setSpecializedShipment(true)
        setContainerShipment(false)
        setCarClearingOption(false);
        setBulkOption(false);
        setPackageOption(false)
        setToggle((current) => !current);
    };

    const handleBulkOption = () => {
        setBulkOption(true);
        setPackageOption(false);
        setCarClearingOption(false);
        setSpecializedShipment(false)
        setContainerShipment(false)
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
                <title>Customer</title>
                <meta name="Description" content="Drivers Services." />
                <link rel="manifest" href="manifest.webmanifest" />
            </Head>
            <CustomerLayout
                handleIsPackage={handleIsPackage}
                handleIsBulkDelivery={handleIsBulkDelivery}
                handleIsCarClearing={handleIsCarClearing}
                handleIsContainerShipment={handleIsContainerShipment}
                handleIsSpecializedShipment={handleIsSpecializedShipment}
                handleCarClearingOption={handleCarClearingOption}
                handleContainerShipment={handleContainerShipment}
                handleSpecializedShipment={handleSpecializedShipment}
                customerProfile={customerProfile}
                handleCustomerProfile={handleCustomerProfile}
            >
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
                    headerMessage="Add parcel to your other lists of parcels"
                    headerName="Nancy"
                    imageSrc=""
                    handleAddCarClearingParcel={handleAddCarClearingParcel}
                    handleCarClearingOption={handleCarClearingOption}
                    handleContainerShipment={handleContainerShipment}
                    handleAddContainerShipment={handleAddContainerShipment}
                    handleSpecializedShipment={handleSpecializedShipment}
                    handleAddSpecializedShipment={handleAddSpecializedShipment}
                />
                {isNoParcel && (
                    <NoactiveParcel handleAddParcel={handleAddParcel} />
                )}
                {isCustomerDash && (
                    <CustomerDashboard
                        isPackage={isPackage}
                        customerPackageDelivery={customerPackageDelivery}
                        customerBulkDelivery={customerBulkDelivery}
                        isBulkDelivery={isBulkDelivery}
                        isCarClearing={isCarClearing}
                        handleOrderModal={handleOrderModal}
                        handleRateDriver={handleRateDriver}
                        handleBulkOrder={handleBulkOrder}
                        handleRateBulkDriver={handleRateBulkDriver}
                        dashboardType="user"
                        handleViewLoadDetails={handleViewLoadDetails}
                        isContainerShipment={isContainerShipment}
                        isSpecializedShipment={isSpecializedShipment}
                        handleViewQuotation={handleViewQuotation}
                    />
                )} 
                {/* {customerData.length > 0 ? (
                    <CustomerDashboard />
                ) : (
                    <NoactiveParcel handleAddParcel={handleAddParcel} />
                )} */}
                <LoadingModal
                    loadingModal={loadingModal}
                    setLoadingModal={setLoadingModal}
                />
                <CustomerProfile
                    customerProfile={customerProfile}
                    setCustomerProfile={setCustomerProfile}
                    handleProfileDetails={handleProfileDetails}
                    handleAboutApp={handleAboutApp}
                />
                <ProfileDetails
                    profileDetails={profileDetails}
                    setProfileDetails={setProfileDetails}
                    setCustomerProfile={setCustomerProfile}
                />
                <Aboutapp
                    aboutApp={aboutApp}
                    setAboutApp={setAboutApp}
                />
                <AddSpecializedShipmentModal
                    addSpecializedShipmentModal={addSpecializedShipmentModal}
                    setAddSpecializedShipmentModal={setAddSpecializedShipmentModal}
                    packageOption={packageOption}
                    handlePackageOption={handlePackageOption}
                    bulkOption={bulkOption}
                    handleBulkOption={handleBulkOption}
                    specializedShipment={specializedShipment}
                    handleSpecializedShipment={handleSpecializedShipment}
                    carClearingOption={carClearingOption}
                    handleCarClearingOption={handleCarClearingOption}
                    containerShipment={containerShipment}
                    handleContainerShipment={handleContainerShipment}
                    setPackageData={setPackageData}
                    setBulkOption={setBulkOption}
                    setPackageOption={setPackageOption}
                    handleDate={handleDate}
                    chosenDate={chosenDate}
                    setBulkOptionData={setBulkOptionData}
                    setParcelItem={setParcelItem}
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
                    handleClearingCost={handleClearingCost}
                    carClearingDetails={carClearingDetails}
                    setCarClearingDetails={setCarClearingDetails}
                    carClearingError={carClearingError}
                    setCarClearingParcelModal={setCarClearingParcelModal}
                    uploadDocument={uploadDocument}
                    setUploadDocument={setUploadDocument}
                    isChecked={isChecked}
                    setIsChecked={setIsChecked}
                    handleOnClick={handleOnClick}
                    containerShipmentData={containerShipmentData}
                    setContainerShipmentData={setContainerShipmentData}
                    handleUploadContainerShipment={handleUploadContainerShipment}
                    setIsContainerShipmentUpload={setIsContainerShipmentUpload}
                    handleContainerClearingCost={handleContainerClearingCost}
                    specializedData={specializedData}
                    setSpecializedData={setSpecializedData}
                    handleSpecializedShipRequest={handleSpecializedShipRequest}
                />
                <EstimatedClearingCost
                    estimatedClearingCost={estimatedClearingCost}
                    setEstimatedClearingCost={setEstimatedClearingCost}
                    containerShipmentData={containerShipmentData}
                    handleSuggestPrice={handleSuggestPrice}
                    isChecked={isChecked}
                />
                <AddCarClearingParcelModal
                    addCarClearingParcelModal={addCarClearingParcelModal}
                    setCarClearingParcelModal={setCarClearingParcelModal}
                    packageOption={packageOption}
                    bulkOption={bulkOption}
                    handlePackageOption={handlePackageOption}
                    handleBulkOption={handleBulkOption}
                    setPackageData={setPackageData}
                    setBulkOption={setBulkOption}
                    setPackageOption={setPackageOption}
                    handleDate={handleDate}
                    chosenDate={chosenDate}
                    setBulkOptionData={setBulkOptionData}
                    setParcelItem={setParcelItem}
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
                    carClearingOption={carClearingOption}
                    setCarClearingOption={setCarClearingOption}
                    handleCarClearingOption={handleCarClearingOption}
                    containerShipment={containerShipment}
                    handleContainerShipment={handleContainerShipment}
                    specializedShipment={specializedShipment}
                    handleSpecializedShipment={handleSpecializedShipment}
                    handleClearingCost={handleClearingCost}
                    carClearingDetails={carClearingDetails}
                    setCarClearingDetails={setCarClearingDetails}
                    carClearingError={carClearingError}
                    uploadDocument={uploadDocument}
                    setUploadDocument={setUploadDocument}
                    isChecked={isChecked}
                    setIsChecked={setIsChecked}
                    handleOnClick={handleOnClick}
                    isCarClearing={isCarClearing}
                    handleUploadContainerShipment={handleUploadContainerShipment}
                    setIsCarClearingParcel={setIsCarClearingParcel}
                    containerShipmentData={containerShipmentData}
                    setContainerShipmentData={setContainerShipmentData}
                    setIsContainerShipmentUpload={setIsContainerShipmentUpload}
                    specializedData={specializedData}
                    setSpecializedData={setSpecializedData}
                    handleSpecializedShipRequest={handleSpecializedShipRequest}
                />
                <AddContainerShipmentModal
                    addContainerShipmentModal={addContainerShipmentModal}
                    setAddContainerShipmentModal={setAddContainerShipmentModal}
                    packageOption={packageOption}
                    handlePackageOption={handlePackageOption}
                    bulkOption={bulkOption}
                    handleBulkOption={handleBulkOption}
                    specializedShipment={specializedShipment}
                    handleSpecializedShipment={handleSpecializedShipment}
                    carClearingOption={carClearingOption}
                    handleCarClearingOption={handleCarClearingOption}
                    containerShipment={containerShipment}
                    handleContainerShipment={handleContainerShipment}
                    setPackageData={setPackageData}
                    setBulkOption={setBulkOption}
                    setPackageOption={setPackageOption}
                    handleDate={handleDate}
                    chosenDate={chosenDate}
                    setBulkOptionData={setBulkOptionData}
                    setParcelItem={setParcelItem}
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
                    handleClearingCost={handleClearingCost}
                    carClearingDetails={carClearingDetails}
                    setCarClearingDetails={setCarClearingDetails}
                    carClearingError={carClearingError}
                    setCarClearingParcelModal={setCarClearingParcelModal}
                    uploadDocument={uploadDocument}
                    setUploadDocument={setUploadDocument}
                    isChecked={isChecked}
                    setIsChecked={setIsChecked}
                    handleOnClick={handleOnClick}
                    containerShipmentData={containerShipmentData}
                    setContainerShipmentData={setContainerShipmentData}
                    handleUploadContainerShipment={handleUploadContainerShipment}
                    setIsContainerShipmentUpload={setIsContainerShipmentUpload}
                    handleContainerClearingCost={handleContainerClearingCost}
                    specializedData={specializedData}
                    setSpecializedData={setSpecializedData}
                    handleSpecializedShipRequest={handleSpecializedShipRequest}
                />
                <UploadDocument
                    uploadDocument={uploadDocument}
                    setUploadDocument={setUploadDocument}
                    handleCloseUploadDocument={handleCloseUploadDocument}
                    carClearingDetails={carClearingDetails}
                    setCarClearingDetails={setCarClearingDetails}
                    handleUploadDoc={handleUploadDoc}
                    isContainerShipmentUpload={isContainerShipmentUpload}
                    setContainerShipmentData={setContainerShipmentData}
                    handleUploadSuccessModal={handleUploadSuccessModal}
                    isCarClearingParcel={isCarClearingParcel}
                    containerShipmentData={containerShipmentData}
                />
                <UploadDocSuccess
                    uploadDocumentSuccess={uploadDocumentSuccess}
                    setUploadDocumentSuccess={setUploadDocumentSuccess}
                    handleUploadSuccess={handleUploadSuccess}
                    isContainerShipmentUpload={isContainerShipmentUpload}
                    containerShipmentData={containerShipmentData}
                    isCarClearingParcel={isCarClearingParcel}
                    carClearingDetails={carClearingDetails}
                />
                <ClearingCost
                    cleaingCost={cleaingCost}
                    setClearingCost={setClearingCost}
                    handleSuggestPrice={handleSuggestPrice}
                    isChecked={isChecked}
                />
                <SuggestPriceModal
                    suggestPrice={suggestPrice}
                    setSuggestPrice={setSuggestPrice}
                    suggestPriceData={suggestPriceData}
                    setSuggestPriceData={setSuggestPriceData}
                    handlePostLoad={handlePostLoad}
                    suggestPriceError={suggestPriceError}
                    isChecked={isChecked}
                />
                <SuggestLoading
                    suggestLoading={suggestLoading}
                    setSuggestLoading={setSuggestLoading}
                />
                <PosLoadSuccessModal
                    postLoadSuccess={postLoadSuccess}
                    setPostLoadSuccess={setPostLoadSuccess}
                    handlePostLoadSuccess={handlePostLoadSuccess}
                    isSpecialized={isSpecialized}
                />
                <PostLoadFailureModal
                    postLoadFailure={postLoadFailure}
                    setPostLoadFailure={setPostLoadFailure}
                />
                <LoadDetails
                    loadDetails={loadDetails}
                    setLoadDetails={setLoadDetails}
                    loadDetailsWaitingForAgent={loadDetailsWaitingForAgent}
                    handleLoadDetailWaitingAgent={handleLoadDetailWaitingAgent}
                    loadDetailsClearingInProgress={loadDetailsClearingInProgress}
                    loadDetailsCleared={loadDetailsCleared}
                    handleLoadDetailClearingProgress={handleLoadDetailClearingProgress}
                    handleLoadDetailsCleared={handleLoadDetailsCleared}
                    handleCustomerAgentProfile={handleCustomerAgentProfile}
                    handleMessages={handleMessages}
                />
                <LoadDetailsWithNoBidding
                    loadDetailsWithNoBidding={loadDetailsWithNoBidding}
                    setLoadDetailsWithNoBidding={setLoadDetailsWithNoBidding}
                    loadDetailsWaitingForAgentNoBidding={loadDetailsWaitingForAgentNoBidding}
                    handleLoadDetailWaitingAgentNoBidding={handleLoadDetailWaitingAgentNoBidding}
                    handleLoadDetailDeliveryInProgress={handleLoadDetailDeliveryInProgress}
                    loadDetailsDelivered={loadDetailsDelivered}
                    loadDetailsDeliveryInProgress={loadDetailsDeliveryInProgress}
                    handleLoadDetailsDelivered={handleLoadDetailsDelivered}
                    handleCustomerAgentProfile={handleCustomerAgentProfile}
                    handleMessages={handleMessages}
                />
                <LoadDetailsWithBidFromAgents
                    loadDetailsWithBidding={loadDetailsWithBidding}
                    setLoadDetailsWithBidding={setLoadDetailsWithBidding}
                    loadDetailsFirst={loadDetailsFirst}
                    loadDetailsAnother={loadDetailsAnother}
                    loadDetailsNext={loadDetailsNext}
                    handleLoadDetailsNext={handleLoadDetailsNext}
                    handleLoadDetailsAnother={handleLoadDetailsAnother}
                    handleLoadDetailsFirst={handleLoadDetailsFirst}
                    handleCustomerAgentProfile={handleCustomerAgentProfile}
                    handleMessages={handleMessages}
                />
                <ViewAgentProfile
                    viewAgentProfile={viewAgentProfile}
                    setViewAgentProfile={setViewAgentProfile}
                    handleSubmitReview={handleSubmitReview}
                />
                <ReviewModal
                    reviewModal={reviewModal}
                    setReviewModal={setReviewModal}
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
                <OrderModal
                    orderModal={orderModal}
                    setOrderModal={setOrderModal}
                    isPackage={isPackage}
                    isBulkDelivery={isBulkDelivery}
                    showSearchingForDriver={showSearchingForDriver}
                    handleCancelModal={handleCancelModal}
                />
                <OrderModalSearchForDriver
                    searchForDriver={searchForDriver}
                    setSearchForDriver={setSearchForDriver}
                    handleWaitingForDriver={handleWaitingForDriver}
                    handleCancelModal={handleCancelModal}
                />
                <OrderModalWaitingForDriver
                    waitingForDriver={waitingForDriver}
                    setWaitingForDriver={setWaitingForDriver}
                    handleOnTheway={handleOnTheway}
                    handleCancelModal={handleCancelModal}
                />
                <OrderModalOnTheWay
                    onTheWay={onTheWay}
                    setOnTheWay={setOnTheWay}
                    handleIssued={handleIssued}
                />
                <OrderModalIssued
                    issued={issued}
                    setIssued={setIssued}
                    handleTransitionAlert={handleTransitionAlert}
                />
                <TransitionAlerts
                    transitionAlert={transitionAlert}
                    setTransitionAlert={setTransitionAlert}
                />
                <DriverRateModal
                    driverRate={driverRate}
                    setDriverRate={setDriverRate}
                />
                <CancelModal
                    cancelModal={cancelModal}
                    setCancelModal={setCancelModal}
                />
                <BulkModalOrder
                    bulkModalOrder={bulkModalOrder}
                    setBulkModalOrder={setBulkModalOrder}
                    handleBulkModalSearch={handleBulkModalSearch}
                    increaseOffer={increaseOffer}
                    handlePrepared={handlePrepared}
                    prepared={prepared}
                    handleListDrivers={handleListDrivers}
                    listDrivers={listDrivers}
                    buttonValue={buttonValue}
                    bulkFinalState={bulkFinalState}
                    completeBulkOrder={completeBulkOrder}
                    handleCompleteBulkOrder={handleCompleteBulkOrder}
                    handleCancelBulkModal={handleCancelBulkModal}
                />
                <BulkModalSearchForDriver
                    bulkModalSearch={bulkModalSearch}
                    setBulkModalSearch={setBulkModalSearch}
                    handleIncreaseOffer={handleIncreaseOffer}
                    handleCancelBulkModal={handleCancelBulkModal}
                />
                <BulkDriverRateModal
                    rateBulkDriver={rateBulkDriver}
                    setRateBulkDriver={setRateBulkDriver}
                    handleBulkRiseUpBid={handleBulkRiseUpBid}
                />
                <BulkDriverRiseUpBid
                    riseUpBid={riseUpBid}
                    setRiseUpBid={setRiseUpBid}
                    buttonValue={buttonValue}
                    setButtonValue={setButtonValue}
                    selected={selected}
                    setSelected={setSelected}
                    handleButtonClick={handleButtonClick}
                    handleAgreeBtn={handleAgreeBtn}
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
