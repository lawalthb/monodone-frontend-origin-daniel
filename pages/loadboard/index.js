import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';
import GeneralNav from '@/components/navigation/generalNav/generalNav';
import Media from '@/utils/media';
import styles from '../../components/terms/terms.module.css';
import LoadboardAddComp from '@/components/loadboard/loadboardAddComp';
import LoadboardCargoFilter from '@/components/loadboard/loadboardCargoFilter';
import LoadboardGridList from '@/components/loadboard/loadboardGridList';
import LoadboardGrid from '@/components/loadboard/loadboardGrid';
import LoadboardList from '@/components/loadboard/loadboardList';
import ServicesFooter from '@/components/services/servicesFooter';
import CustomPagination from '@/utils/pagination/customPagination';
import Login from '@/components/login/login';
import Signup from '@/components/signup/signup';
import AddNewParcel from "@/components/customers/addNewParcel";
import Location from "@/components/customers/location";
import Parcel from "@/components/customers/parcel";
import DateSchedule from "@/components/customers/scheduleDate";

export default function Loadboard({loadboardData, packageDelivery, bulkDeliveryData, adminData}) {
  const router = useRouter;
  const [grid, setGrid] = useState(false);
  const [list, setList] = useState(false);
  const [pageNumbers, setPageNumbers] = useState([]);
  const [activePagenumber, setActivePagenumber] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [specificData, setSpecificData] = useState();
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);  

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


  const { mobile, tabletAndDesktop } = Media();

  const handleGrid = () => {
    setGrid(true);
    setList(false);
  };
  const handleList = () => {
    setList(true);
    setGrid(false);
  };

  const showDetail = (index) => {
    const data = loadboardData[index];
    setSpecificData(data);
  };

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
    setSpecificData(loadboardData[0]);
  }, [loadboardData]);

  useEffect(() => {
    if (list) {
      setGrid(false);
    } else {
      setGrid(true);
    }
  }, [list]);

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
  }, [setIsNoParcel, setIsCustomerDash])
  
  return (
    <>
      <Head>
        <title>Mondome - Loadboard</title>
        <meta name="description" content="Monodome" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {mobile && (
        <>
          <div
            style={{
              display: 'flex',
              justifyContent: 'column',
              width: '100%',
            }}
          >
            <GeneralNav
              handleAboutUsClick={() => router.push('/about')}
              handleServicesClick={() => router.push('/services')}
              handleFeaturesClick={() => router.push('/features')}
              handleContactClick={() => router.push('/contact')}
              setLogin={setLogin}
              setSignup={setSignup}
            />
          </div>
          <div
            className={styles.termsMobileTopBg}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '220px',
              color: 'white',
              fontWeight: '700',
              fontSize: '19px',
            }}
          >
            <LoadboardAddComp 
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
              headerMessage="Add parcel to your other lists of parcels as a broker"
              headerName="Broker"
              imageSrc=""
            />
          </div>
          <LoadboardCargoFilter />
          <LoadboardGridList
            grid={grid}
            setGrid={setGrid}
            list={list}
            setList={setList}
            handleGrid={handleGrid}
            handleList={handleList}
          />
          {grid && (
            <>
              <LoadboardGrid
                loadboardData={loadboardData}
                setPageNumbers={setPageNumbers}
                pageNumbers={pageNumbers}
                activePagenumber={activePagenumber}
                setActivePagenumber={setActivePagenumber}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                showDetail={showDetail}
                specificData={specificData}
              />
            </>
          )}
          {list && (
            <>
              <LoadboardList
                loadboardData={loadboardData}
                setPageNumbers={setPageNumbers}
                pageNumbers={pageNumbers}
                activePagenumber={activePagenumber}
                setActivePagenumber={setActivePagenumber}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                showDetail={showDetail}
                specificData={specificData}
              />
            </>
          )}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              margin: 0,
              padding: '20px',
              height: '570px',
              background: '#151515',
            }}
          >
            <ServicesFooter />
          </div>
          <Parcel
            setParcelItem={setParcelItem}
            parcelItem={parcelItem}
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
        </>
      )}
      {tabletAndDesktop && (
        <>
          <div
            className={styles.termsDesktopTopBg}
            style={{
              display: 'flex',
              justifyContent: 'column',
              flexDirection: 'column',
              width: '100%',
              backgroundSize: '100% 100%',
            }}
          >
            <GeneralNav
              imgSrc="/img/monologservicelogo.png"
              handleAboutUsClick={() => router.push('/about')}
              handleServicesClick={() => router.push('/services')}
              handleFeaturesClick={() => router.push('/features')}
              handleContactClick={() => router.push('/contact')}
              setLogin={setLogin}
              setSignup={setSignup}
            />
            <LoadboardAddComp 
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
              headerMessage="Add parcel to your other lists of parcels as a broker"
              headerName="Broker"
              imageSrc=""
            />
          </div>
          <LoadboardCargoFilter />
          <LoadboardGridList
            grid={grid}
            setGrid={setGrid}
            list={list}
            setList={setList}
            handleGrid={handleGrid}
            handleList={handleList}
          />
          {grid && (
            <>
              <LoadboardGrid
                loadboardData={loadboardData}
                setPageNumbers={setPageNumbers}
                pageNumbers={pageNumbers}
                activePagenumber={activePagenumber}
                setActivePagenumber={setActivePagenumber}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                showDetail={showDetail}
                specificData={specificData}
              />
            </>
          )}
          {list && (
            <>
              <LoadboardList
                loadboardData={loadboardData}
                setPageNumbers={setPageNumbers}
                pageNumbers={pageNumbers}
                activePagenumber={activePagenumber}
                setActivePagenumber={setActivePagenumber}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                showDetail={showDetail}
                specificData={specificData}
              />
            </>
          )}
          <CustomPagination
            allData={loadboardData}
            setPageNumbers={setPageNumbers}
            pageNumbers={pageNumbers}
            activePagenumber={activePagenumber}
            setActivePagenumber={setActivePagenumber}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              margin: 0,
              padding: '20px 80px',
              height: '350px',
              background: '#151515',
            }}
          >
            <ServicesFooter />
          </div>
          <Parcel
            setParcelItem={setParcelItem}
            parcelItem={parcelItem}
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
        </>
      )}
      <Login login={login} setLogin={setLogin} setSignup={setSignup} />
      <Signup signup={signup} setSignup={setSignup} setLogin={setLogin} />
    </>
  );
}

export async function getStaticProps() {
  const { loadboardData } = await import('../../data.json');
  const { package_delivery } = await import("../../components/customers/data/data.json");
  const { bulk_delivery } = await import("../../components/customers/data/data.json");
  const { admin } = await import("../../components/customers/data/data.json");


  return {
    props: {
      loadboardData: loadboardData,
      packageDelivery: package_delivery,
      bulkDeliveryData: bulk_delivery,
      adminData: admin,
    },
  };
}
