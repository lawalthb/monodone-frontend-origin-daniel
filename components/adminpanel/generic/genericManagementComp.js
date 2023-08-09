import Image from "next/image";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import AdminpanelDriverList from "../adminpanelDriverList";
import BlogComp from "./blogComp";
import BrokersManagementComp from "./brokersManagementComp";
import CLearingForwardingAgentComp from "./clearingForwardingAgentComp";
import CustomersManagementComp from "./customersManagementComp";
import DriverManagersManagementComp from "./driverManagersManagementComp";
import DriversManagementComp from "./driversManagementComp";
import EmployeesComp from "./employeesComp";
import GenericManagementDetails from "./genericManagementDetails";
import GenericRequestDetails from "./genericRequestDetails";
import LoadBoardComp from "./loadBoardComp";
import OrdersManagementComp from "./ordersManagementComp";
import ShippingCompaniesComp from "./shippingCompaniesComp";
import SpecializedShipmentComp from "./specializedShipmentComp";
import TransactionManagementComp from "./transactionManagementComp";
import TransportCompaniesComp from "./transportCompaniesComp";
import WebsiteComp from "./websiteComp";
import AdminsManagementComp from "./adminsManagementComp";
import PriceSettingsManagementComp from "./priceSettingsManagementComp";
import StatisticsManagementComp from "./statisticsManagementComp";

const initialBlogState = {
    blogMessage: "",
    blogDocument: []
}

export default function GenericManagementComp(props) {
    const [createBlog, setCreateBlog] = useState(false)
    const [blogData, setBlogData] = useState(initialBlogState)

    useEffect(() => {
        props.setPageNumber(1)
    }, [props])

    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: "column",
                width: "100%",
            }}>
                {props.isDrivers && (
                    <>
                        <DriversManagementComp
                            adminAgentData={props.adminAgentData}
                            isDriversManagement={props.isDriversManagement}
                            setIsDriversManagement={props.setIsDriversManagement}
                            isDriversRequest={props.isDriversRequest}
                            setIsDriversRequest={props.setIsDriversRequest}
                            rates={props.rates}
                            setRates={props.setRates}
                            rate={props.rate}
                            setRate={props.setRate}
                            dates={props.dates}
                            setDates={props.setDates}
                            date={props.date}
                            setDate={props.setDate}
                            vehicleTypes={props.vehicleTypes}
                            setVehicleTypes={props.setVehicleTypes}
                            vehicleType={props.vehicleType}
                            setVehicleType={props.etVehicleType}
                        />
                        {props.isDriversManagement && (
                            <GenericManagementDetails
                                adminAgentData={props.adminAgentData}
                                isDriversManagement={props.isDriversManagement}
                                date={props.date}
                                rate={props.rate}
                                setPageNumbers={props.setPageNumbers}
                                activePagenumber={props.activePagenumber}
                                pageNumbers={props.pageNumbers}
                                setPageNumber={props.setPageNumber}
                                setActivePagenumber={props.setActivePagenumber}
                                pageNumber={props.pageNumber}
                                setAdminAgentData={props.setAdminAgentData}
                                driverList={props.driverList}
                                setDriverList={props.setDriverList}
                                handleDriverList={props.handleDriverList}
                                vehicleTypes={props.vehicleTypes}
                                setVehicleTypes={props.setVehicleTypes}
                                vehicleType={props.vehicleType}
                                setVehicleType={props.setVehicleType}
                            />
                        )}
                        {props.isDriversRequest && (
                            <GenericRequestDetails
                                adminAgentData={props.adminAgentData}
                                isDriversRequest={props.isDriversRequest}
                                date={props.date}
                                setPageNumbers={props.setPageNumbers}
                                activePagenumber={props.activePagenumber}
                                pageNumbers={props.pageNumbers}
                                setPageNumber={props.setPageNumber}
                                setActivePagenumber={props.setActivePagenumber}
                                pageNumber={props.pageNumber}
                                handleDriverList={props.handleDriverList}
                            />
                        )}
                    </>
                )}
                {props.isCustomers && (
                    <>
                        <CustomersManagementComp
                            adminAgentData={props.adminAgentData}
                            dates={props.dates}
                            setDates={props.setDates}
                            date={props.date}
                            setDate={props.setDate}
                        />
                        <GenericManagementDetails
                            adminAgentData={props.adminAgentData}
                            isCustomers={props.isCustomers}
                            date={props.date}
                            setPageNumbers={props.setPageNumbers}
                            activePagenumber={props.activePagenumber}
                            pageNumbers={props.pageNumbers}
                            setPageNumber={props.setPageNumber}
                            setActivePagenumber={props.setActivePagenumber}
                            pageNumber={props.pageNumber}
                            customerList={props.customerList}
                            setCustomerList={props.setCustomerList}
                            handleCustomerList={props.handleCustomerList}
                        />
                    </>
                )}
                {props.isBrokers && (
                    <>
                        <BrokersManagementComp
                            adminAgentData={props.adminAgentData}
                            isBrokersManagement={props.isBrokersManagement}
                            setIsBrokersManagement={props.setIsBrokersManagement}
                            isBrokersRequest={props.isBrokersRequest}
                            setIsBrokersRequest={props.setIsBrokersRequest}
                            dates={props.dates}
                            setDates={props.setDates}
                            date={props.date}
                            setDate={props.setDate}
                        />
                        {props.isBrokersManagement && (
                            <GenericManagementDetails
                                adminAgentData={props.adminAgentData}
                                isBrokersManagement={props.isBrokersManagement}
                                date={props.date}
                                setPageNumbers={props.setPageNumbers}
                                activePagenumber={props.activePagenumber}
                                pageNumbers={props.pageNumbers}
                                setPageNumber={props.setPageNumber}
                                setActivePagenumber={props.setActivePagenumber}
                                pageNumber={props.pageNumber}
                                brokerList={props.brokerList}
                                setBrokerList={props.setBrokerList}
                                handleBrokerList={props.handleBrokerList}
                            />
                        )}
                        {props.isBrokersRequest && (
                            <GenericRequestDetails
                                adminAgentData={props.adminAgentData}
                                isBrokersRequest={props.isBrokersRequest}
                                date={props.date}
                                setPageNumbers={props.setPageNumbers}
                                activePagenumber={props.activePagenumber}
                                pageNumbers={props.pageNumbers}
                                setPageNumber={props.setPageNumber}
                                setActivePagenumber={props.setActivePagenumber}
                                pageNumber={props.pageNumber}
                                handleBrokerList={props.handleBrokerList}
                            />
                        )}
                    </>
                )}
                {props.isDriverManagers && (
                    <>
                        <DriverManagersManagementComp
                            adminAgentData={props.adminAgentData}
                            isDriversManagersManagement={props.isDriversManagersManagement}
                            setIsDriversManagersManagement={props.setIsDriversManagersManagement}
                            isDriversManagersRequest={props.isDriversManagersRequest}
                            setIsDriversManagersRequest={props.setIsDriversManagersRequest}
                            rates={props.rates}
                            setRates={props.setRates}
                            rate={props.rate}
                            setRate={props.setRate}
                            dates={props.dates}
                            setDates={props.setDates}
                            date={props.date}
                            setDate={props.setDate}
                        />
                        {props.isDriversManagersManagement && (
                            <GenericManagementDetails
                                adminAgentData={props.adminAgentData}
                                isDriversManagersManagement={props.isDriversManagersManagement}
                                date={props.date}
                                rate={props.rate}
                                setPageNumbers={props.setPageNumbers}
                                activePagenumber={props.activePagenumber}
                                pageNumbers={props.pageNumbers}
                                setPageNumber={props.setPageNumber}
                                setActivePagenumber={props.setActivePagenumber}
                                pageNumber={props.pageNumber}
                            />
                        )}
                        {props.isDriversManagersRequest && (
                            <GenericRequestDetails
                                adminAgentData={props.adminAgentData}
                                isDriversManagersRequest={props.isDriversManagersRequest}
                                date={props.date}
                                setPageNumbers={props.setPageNumbers}
                                activePagenumber={props.activePagenumber}
                                pageNumbers={props.pageNumbers}
                                setPageNumber={props.setPageNumber}
                                setActivePagenumber={props.setActivePagenumber}
                                pageNumber={props.pageNumber}
                            />
                        )}
                    </>
                )}
                {props.isShippingCompanies && (
                    <>
                        <ShippingCompaniesComp
                            adminAgentData={props.adminAgentData}
                            isShippingCompaniesManagement={props.isShippingCompaniesManagement}
                            setIsShippingCompaniesManagement={props.setIsShippingCompaniesManagement}
                            isShippingCompaniesRequest={props.isShippingCompaniesRequest}
                            setIsShippingCompaniesRequest={props.setIsShippingCompaniesRequest}
                            dates={props.dates}
                            setDates={props.setDates}
                            date={props.date}
                            setDate={props.setDate}
                        />
                        {props.isShippingCompaniesManagement && (
                            <GenericManagementDetails
                                adminAgentData={props.adminAgentData}
                                isShippingCompaniesManagement={props.isShippingCompaniesManagement}
                                date={props.date}
                                setPageNumbers={props.setPageNumbers}
                                activePagenumber={props.activePagenumber}
                                pageNumbers={props.pageNumbers}
                                setPageNumber={props.setPageNumber}
                                setActivePagenumber={props.setActivePagenumber}
                                pageNumber={props.pageNumber}
                            />
                        )}
                        {props.isShippingCompaniesRequest && (
                            <GenericRequestDetails
                                adminAgentData={props.adminAgentData}
                                isShippingCompaniesRequest={props.isShippingCompaniesRequest}
                                date={props.date}
                                setPageNumbers={props.setPageNumbers}
                                activePagenumber={props.activePagenumber}
                                pageNumbers={props.pageNumbers}
                                setPageNumber={props.setPageNumber}
                                setActivePagenumber={props.setActivePagenumber}
                                pageNumber={props.pageNumber}
                            />
                        )}
                    </>
                )}
                {props.isTransportCompanies && (
                    <>
                        <TransportCompaniesComp
                            adminAgentData={props.adminAgentData}
                            isTransportCompanyManagement={props.isTransportCompanyManagement}
                            setIsTransportCompanyManagement={props.setIsTransportCompanyManagement}
                            isTransportCompanyRequest={props.isTransportCompanyRequest}
                            setIsTransportCompanyRequest={props.setIsTransportCompanyRequest}
                            rates={props.rates}
                            setRates={props.setRates}
                            rate={props.rate}
                            setRate={props.setRate}
                            dates={props.dates}
                            setDates={props.setDates}
                            date={props.date}
                            setDate={props.setDate}
                        />
                        {props.isTransportCompanyManagement && (
                            <GenericManagementDetails
                                adminAgentData={props.adminAgentData}
                                isTransportCompanyManagement={props.isTransportCompanyManagement}
                                date={props.date}
                                rate={props.rate}
                                setPageNumbers={props.setPageNumbers}
                                activePagenumber={props.activePagenumber}
                                pageNumbers={props.pageNumbers}
                                setPageNumber={props.setPageNumber}
                                setActivePagenumber={props.setActivePagenumber}
                                pageNumber={props.pageNumber}
                            />
                        )}
                        {props.isTransportCompanyRequest && (
                            <GenericRequestDetails
                                adminAgentData={props.adminAgentData}
                                isTransportCompanyRequest={props.isTransportCompanyRequest}
                                date={props.date}
                                setPageNumbers={props.setPageNumbers}
                                activePagenumber={props.activePagenumber}
                                pageNumbers={props.pageNumbers}
                                setPageNumber={props.setPageNumber}
                                setActivePagenumber={props.setActivePagenumber}
                                pageNumber={props.pageNumber}
                            />
                        )}
                    </>
                )}
                {props.isEmployee && (
                    <>
                        <EmployeesComp
                            adminAgentData={props.adminAgentData}
                            isEmployeesManagement={props.isEmployeesManagement}
                            setIsEmployeesManagement={props.setIsEmployeesManagement}
                            isEmployeesRequest={props.isEmployeesRequest}
                            setIsEmployeesRequest={props.setIsEmployeesRequest}
                            dates={props.dates}
                            setDates={props.setDates}
                            date={props.date}
                            setDate={props.setDate}
                        />
                        {props.isEmployeesManagement && (
                            <GenericManagementDetails
                                adminAgentData={props.adminAgentData}
                                isEmployeesManagement={props.isEmployeesManagement}
                                date={props.date}
                                setPageNumbers={props.setPageNumbers}
                                activePagenumber={props.activePagenumber}
                                pageNumbers={props.pageNumbers}
                                setPageNumber={props.setPageNumber}
                                setActivePagenumber={props.setActivePagenumber}
                                pageNumber={props.pageNumber}
                            />
                        )}
                        {props.isEmployeesRequest && (
                            <GenericRequestDetails
                                adminAgentData={props.adminAgentData}
                                isEmployeesRequest={props.isEmployeesRequest}
                                date={props.date}
                                setPageNumbers={props.setPageNumbers}
                                activePagenumber={props.activePagenumber}
                                pageNumbers={props.pageNumbers}
                                setPageNumber={props.setPageNumber}
                                setActivePagenumber={props.setActivePagenumber}
                                pageNumber={props.pageNumber}
                            />
                        )}
                    </>
                )}
                {props.isClearingForwardingAgent && (
                    <>
                        <CLearingForwardingAgentComp
                            adminAgentData={props.adminAgentData}
                            isClearingForwardingManagement={props.isClearingForwardingManagement}
                            setIsClearingForwardingManagement={props.setIsClearingForwardingManagement}
                            isClearingForwardingRequest={props.isClearingForwardingRequest}
                            setIsClearingForwardingRequest={props.setIsClearingForwardingRequest}
                            rates={props.rates}
                            setRates={props.setRates}
                            rate={props.rate}
                            setRate={props.setRate}
                            dates={props.dates}
                            setDates={props.setDates}
                            date={props.date}
                            setDate={props.setDate}
                        />
                        {props.isClearingForwardingManagement && (
                            <GenericManagementDetails
                                adminAgentData={props.adminAgentData}
                                isClearingForwardingManagement={props.isClearingForwardingManagement}
                                date={props.date}
                                rate={props.rate}
                                setPageNumbers={props.setPageNumbers}
                                activePagenumber={props.activePagenumber}
                                pageNumbers={props.pageNumbers}
                                setPageNumber={props.setPageNumber}
                                setActivePagenumber={props.setActivePagenumber}
                                pageNumber={props.pageNumber}
                            />
                        )}
                        {props.isClearingForwardingRequest && (
                            <GenericRequestDetails
                                adminAgentData={props.adminAgentData}
                                isClearingForwardingRequest={props.isClearingForwardingRequest}
                                date={props.date}
                                setPageNumbers={props.setPageNumbers}
                                activePagenumber={props.activePagenumber}
                                pageNumbers={props.pageNumbers}
                                setPageNumber={props.setPageNumber}
                                setActivePagenumber={props.setActivePagenumber}
                                pageNumber={props.pageNumber}
                            />
                        )}
                    </>
                )}
                {props.isSpecializedShipment && (
                    <>
                        <SpecializedShipmentComp
                            adminAgentData={props.adminAgentData}
                            dates={props.dates}
                            setDates={props.setDates}
                            date={props.date}
                            setDate={props.setDate}
                        />
                        <GenericManagementDetails
                            adminAgentData={props.adminAgentData}
                            isSpecializedShipment={props.isSpecializedShipment}
                            date={props.date}
                            setPageNumbers={props.setPageNumbers}
                            activePagenumber={props.activePagenumber}
                            pageNumbers={props.pageNumbers}
                            setPageNumber={props.setPageNumber}
                            setActivePagenumber={props.setActivePagenumber}
                            pageNumber={props.pageNumber}
                        />
                    </>
                )}
                {props.isWebsite && (
                    <WebsiteComp
                        adminAgentData={props.adminAgentData}
                        websiteData={props.websiteData}
                    />
                )}
                {props.isBlog && (
                    <>
                        <BlogComp
                            adminAgentData={props.adminAgentData}
                            isBlogRequest={props.isBlogRequest}
                            setIsBlogRequest={props.setIsBlogRequest}
                            dates={props.dates}
                            setDates={props.setDates}
                            date={props.date}
                            setDate={props.setDate}
                            createBlog={createBlog}
                            setCreateBlog={setCreateBlog}
                            blogData={blogData}
                            setBlogData={setBlogData}
                        />
                        <GenericManagementDetails
                            adminAgentData={props.adminAgentData}
                            isBlogRequest={props.isBlogRequest}
                            date={props.date}
                            setPageNumbers={props.setPageNumbers}
                            activePagenumber={props.activePagenumber}
                            pageNumbers={props.pageNumbers}
                            setPageNumber={props.setPageNumber}
                            setActivePagenumber={props.setActivePagenumber}
                            pageNumber={props.pageNumber}
                            createBlog={createBlog}
                            setCreateBlog={setCreateBlog}
                            blogData={blogData}
                            setBlogData={setBlogData}
                        />
                    </>
                )}
                {props.isLoadboard && (
                    <>
                        <LoadBoardComp
                            adminAgentData={props.adminAgentData}
                            isLoadBoardManagement={props.isLoadBoardManagement}
                            setIsLoadBoardManagement={props.setIsLoadBoardManagement}
                            isLoadBoardRequest={props.isLoadBoardRequest}
                            setIsLoadBoardRequest={props.setIsLoadBoardRequest}
                            citiesFrom={props.citiesFrom}
                            setCitiesFrom={props.setCitiesFrom}
                            cityFrom={props.cityFrom}
                            setCityFrom={props.setCityFrom}
                            citiesTo={props.citiesTo}
                            setCitiesTo={props.setCitiesTo}
                            cityTo={props.cityTo}
                            setCityTo={props.setCityTo}
                            statuses={props.statuses}
                            setStatuses={props.setStatuses}
                            status={props.status}
                            setStatus={props.setStatus}
                            dates={props.dates}
                            setDates={props.setDates}
                            date={props.date}
                            setDate={props.setDate}
                        />
                        {props.isLoadBoardManagement && (
                            <GenericManagementDetails
                                adminAgentData={props.adminAgentData}
                                isLoadBoardManagement={props.isLoadBoardManagement}
                                date={props.date}
                                cityFrom={props.cityFrom}
                                cityTo={props.cityTo}
                                status={props.status}
                                citiesFrom={props.citiesFrom}
                                citiesTo={props.citiesTo}
                                setPageNumbers={props.setPageNumbers}
                                activePagenumber={props.activePagenumber}
                                pageNumbers={props.pageNumbers}
                                setPageNumber={props.setPageNumber}
                                setActivePagenumber={props.setActivePagenumber}
                                pageNumber={props.pageNumber}
                            />
                        )}
                        {props.isLoadBoardRequest && (
                            <GenericRequestDetails
                                adminAgentData={props.adminAgentData}
                                isLoadBoardRequest={props.isLoadBoardRequest}
                                date={props.date}
                                cityFrom={props.cityFrom}
                                cityTo={props.cityTo}
                                status={props.status}
                                citiesFrom={props.citiesFrom}
                                citiesTo={props.citiesTo}
                                setPageNumbers={props.setPageNumbers}
                                activePagenumber={props.activePagenumber}
                                pageNumbers={props.pageNumbers}
                                setPageNumber={props.setPageNumber}
                                setActivePagenumber={props.setActivePagenumber}
                                pageNumber={props.pageNumber}
                            />
                        )}
                    </>
                )}
                {props.isOrders && (
                    <>
                        <OrdersManagementComp
                            adminAgentData={props.adminAgentData}
                            citiesFrom={props.citiesFrom}
                            setCitiesFrom={props.setCitiesFrom}
                            cityFrom={props.cityFrom}
                            setCityFrom={props.setCityFrom}
                            citiesTo={props.citiesTo}
                            setCitiesTo={props.setCitiesTo}
                            cityTo={props.cityTo}
                            setCityTo={props.setCityTo}
                            statuses={props.statuses}
                            setStatuses={props.setStatuses}
                            status={props.status}
                            setStatus={props.setStatus}
                            dates={props.dates}
                            setDates={props.setDates}
                            date={props.date}
                            setDate={props.setDate}
                        />
                        <GenericManagementDetails
                            adminAgentData={props.adminAgentData}
                            isOrders={props.isOrders}
                            date={props.date}
                            cityFrom={props.cityFrom}
                            cityTo={props.cityTo}
                            status={props.status}
                            citiesFrom={props.citiesFrom}
                            citiesTo={props.citiesTo}
                            setPageNumbers={props.setPageNumbers}
                            activePagenumber={props.activePagenumber}
                            pageNumbers={props.pageNumbers}
                            setPageNumber={props.setPageNumber}
                            setActivePagenumber={props.setActivePagenumber}
                            pageNumber={props.pageNumber}
                        />
                    </>
                )}
                {props.isTransactions && (
                    <>
                        <TransactionManagementComp
                            adminAgentData={props.adminAgentData}
                            citiesFrom={props.citiesFrom}
                            setCitiesFrom={props.setCitiesFrom}
                            cityFrom={props.cityFrom}
                            setCityFrom={props.setCityFrom}
                            citiesTo={props.citiesTo}
                            setCitiesTo={props.setCitiesTo}
                            cityTo={props.cityTo}
                            setCityTo={props.setCityTo}
                            statuses={props.statuses}
                            setStatuses={props.setStatuses}
                            status={props.status}
                            setStatus={props.setStatus}
                            dates={props.dates}
                            setDates={props.setDates}
                            date={props.date}
                            setDate={props.setDate}
                            isTransactionCustomers={props.isTransactionCustomers}
                            setIsTransactionCustomers={props.setIsTransactionCustomers}
                            isTransactionAgent={props.isTransactionAgent}
                            setIsTransactionAgent={props.setIsTransactionAgent}
                            isTransactionDrivers={props.isTransactionDrivers}
                            setIsTransactionDrivers={props.setIsTransactionDrivers}
                        />
                        <GenericManagementDetails
                            adminAgentData={props.adminAgentData}
                            isTransactions={props.isTransactions}
                            date={props.date}
                            cityFrom={props.cityFrom}
                            cityTo={props.cityTo}
                            status={props.status}
                            citiesFrom={props.citiesFrom}
                            citiesTo={props.citiesTo}
                            setPageNumbers={props.setPageNumbers}
                            activePagenumber={props.activePagenumber}
                            pageNumbers={props.pageNumbers}
                            setPageNumber={props.setPageNumber}
                            setActivePagenumber={props.setActivePagenumber}
                            pageNumber={props.pageNumber}
                            isTransactionCustomers={props.isTransactionCustomers}
                            setIsTransactionCustomers={props.setIsTransactionCustomers}
                            isTransactionAgent={props.isTransactionAgent}
                            setIsTransactionAgent={props.setIsTransactionAgent}
                            isTransactionDrivers={props.isTransactionDrivers}
                            setIsTransactionDrivers={props.setIsTransactionDrivers}
                        />
                    </>
                )}
                {props.isAdmins && (
                    <>
                        <AdminsManagementComp
                            adminAgentData={props.adminAgentData}
                            dates={props.dates}
                            setDates={props.setDates}
                            date={props.date}
                            setDate={props.setDate}
                            addAdmins={props.addAdmins}
                            setAddAdmins={props.setAddAdmins}
                            resetPassword={props.resetPassword}
                            setResetPasswword={props.setResetPasswword}
                        />
                        <GenericManagementDetails
                            adminAgentData={props.adminAgentData}
                            isAdmins={props.isAdmins}
                            date={props.date}
                            setPageNumbers={props.setPageNumbers}
                            activePagenumber={props.activePagenumber}
                            pageNumbers={props.pageNumbers}
                            setPageNumber={props.setPageNumber}
                            setActivePagenumber={props.setActivePagenumber}
                            pageNumber={props.pageNumber}
                            addAdmins={props.addAdmins}
                            setAddAdmins={props.setAddAdmins}
                            adminFullInformation={props.adminFullInformation}
                            setAdminFullInformation={props.setAdminFullInformation}
                            editAdmins={props.editAdmins}
                            setEditAdmins={props.setEditAdmins}
                            resetPassword={props.resetPassword}
                            setResetPasswword={props.setResetPasswword}
                        />
                    </>
                )}
                {props.isPriceSettings && (
                    <>
                        <PriceSettingsManagementComp
                            adminAgentData={props.adminAgentData}
                            dates={props.dates}
                            setDates={props.setDates}
                            date={props.date}
                            setDate={props.setDate}
                        />
                        <GenericManagementDetails
                            adminAgentData={props.adminAgentData}
                            isPriceSettings={props.isPriceSettings}
                            date={props.date}
                            setPageNumbers={props.setPageNumbers}
                            activePagenumber={props.activePagenumber}
                            pageNumbers={props.pageNumbers}
                            setPageNumber={props.setPageNumber}
                            setActivePagenumber={props.setActivePagenumber}
                            pageNumber={props.pageNumber}
                            addsize={props.addsize}
                            setAddSize={props.setAddSize}
                            editRow={props.editRow}
                            setEditRow={props.setEditRow}
                            deleteColumn={props.deleteColumn}
                            setDeleteColumn={props.setDeleteColumn}
                            addDistance={props.addDistance}
                            setAddDistance={props.setAddDistance}
                            addMiles={props.addMiles}
                            setAddMiles={props.setAddMiles}
                            addValue={props.addValue}
                            setAddValue={props.setAddValue}
                            generalEdit={props.generalEdit}
                            setGeneralEdit={props.setGeneralEdit}
                        />
                    </>
                )}
                {props.isStatistics && (
                    <>
                        <StatisticsManagementComp
                            adminAgentData={props.adminAgentData}
                        />
                        <GenericManagementDetails
                            adminAgentData={props.adminAgentData}
                            isStatistics={props.isStatistics}
                        />
                    </>
                )}
            </div>
        </>
    )
}