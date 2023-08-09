import AdminsDetails from "./details/adminsDetails";
import BlogDetails from "./details/blogDetails";
import BrokersManagerDetails from "./details/brokersManagerDetails";
import ClearingManagementDetails from "./details/clearingManagementDetails";
import CustomersDetails from "./details/customersDetails";
import DriverManagerDetails from "./details/driverManagerDetails";
import DriverManagerManagementDetails from "./details/driverManagerManagementDetails";
import EmployeeManagementDetails from "./details/employeeManagementDetails";
import LoadboardManagementDetails from "./details/loadboardManagementDetails";
import OrdersManagementDetails from "./details/ordersManagementDetails";
import PriceSettingsDetails from "./details/priceSettingsDetails";
import ShippingManagementDetails from "./details/shippingManagementDetails";
import SpecializedManagementDetails from "./details/specializedManagementDetails";
import StatisticsDetails from "./details/statisticsDetails";
import TransactionManagementDetails from "./details/transactionManagementDetails";
import TransportManagementDetails from "./details/transportManagementDetails";

export default function GenericManagementDetails(props) {
    return (
        <>
            <div style={(props.isSpecializedShipment
                || props.isPriceSettings
                || props.isStatistics) ? {
                display: 'flex',
                flexDirection: 'column',
                padding: "30px 5px",
                width: "100%",
            } : {
                display: 'flex',
                flexDirection: 'column',
                padding: "30px 20px",
                marginTop: "20px",
                width: "100%",
                background: 'white'
            }}>
                {props.isDriversManagement && (
                    <DriverManagerDetails
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
                {props.isCustomers && (
                    <CustomersDetails
                        adminAgentData={props.adminAgentData}
                        date={props.date}
                        setPageNumbers={props.setPageNumbers}
                        activePagenumber={props.activePagenumber}
                        pageNumbers={props.pageNumbers}
                        setPageNumber={props.setPageNumber}
                        setActivePagenumber={props.setActivePagenumber}
                        pageNumber={props.pageNumber}
                        isCustomers={props.isCustomers}
                        customerList={props.customerList}
                        setCustomerList={props.setCustomerList}
                        handleCustomerList={props.handleCustomerList}
                    />
                )}
                {props.isBrokersManagement && (
                    <BrokersManagerDetails
                        adminAgentData={props.adminAgentData}
                        date={props.date}
                        setPageNumbers={props.setPageNumbers}
                        activePagenumber={props.activePagenumber}
                        pageNumbers={props.pageNumbers}
                        setPageNumber={props.setPageNumber}
                        setActivePagenumber={props.setActivePagenumber}
                        pageNumber={props.pageNumber}
                        isBrokersManagement={props.isBrokersManagement}
                        brokerList={props.brokerList}
                        setBrokerList={props.setBrokerList}
                        handleBrokerList={props.handleBrokerList}
                    />
                )}
                {props.isDriversManagersManagement && (
                    <DriverManagerManagementDetails
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
                {props.isShippingCompaniesManagement && (
                    <ShippingManagementDetails
                        adminAgentData={props.adminAgentData}
                        date={props.date}
                        setPageNumbers={props.setPageNumbers}
                        activePagenumber={props.activePagenumber}
                        pageNumbers={props.pageNumbers}
                        setPageNumber={props.setPageNumber}
                        setActivePagenumber={props.setActivePagenumber}
                        pageNumber={props.pageNumber}
                    />
                )}
                {props.isTransportCompanyManagement && (
                    <TransportManagementDetails
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
                {props.isEmployeesManagement && (
                    <EmployeeManagementDetails
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
                {props.isClearingForwardingManagement && (
                    <ClearingManagementDetails
                        adminAgentData={props.adminAgentData}
                        date={props.date}
                        rate={props.rate}
                        setPageNumbers={props.setPageNumbers}
                        activePagenumber={props.activePagenumber}
                        pageNumbers={props.pageNumbers}
                        setPageNumber={props.setPageNumber}
                        setActivePagenumber={props.setActivePagenumber}
                        pageNumber={props.pageNumber}
                        isClearingForwardingManagement={props.isClearingForwardingManagement}
                    />
                )}
                {props.isSpecializedShipment && (
                    <SpecializedManagementDetails
                        adminAgentData={props.adminAgentData}
                        date={props.date}
                        setPageNumbers={props.setPageNumbers}
                        activePagenumber={props.activePagenumber}
                        pageNumbers={props.pageNumbers}
                        setPageNumber={props.setPageNumber}
                        setActivePagenumber={props.setActivePagenumber}
                        pageNumber={props.pageNumber}
                    />
                )}
                {props.isBlogRequest && (
                    <BlogDetails
                        adminAgentData={props.adminAgentData}
                        date={props.date}
                        setPageNumbers={props.setPageNumbers}
                        activePagenumber={props.activePagenumber}
                        pageNumbers={props.pageNumbers}
                        setPageNumber={props.setPageNumber}
                        setActivePagenumber={props.setActivePagenumber}
                        pageNumber={props.pageNumber}
                        createBlog={props.createBlog}
                        setCreateBlog={props.setCreateBlog}
                        blogData={props.blogData}
                        setBlogData={props.setBlogData}
                    />
                )}
                {props.isLoadBoardManagement && (
                    <LoadboardManagementDetails
                        adminAgentData={props.adminAgentData}
                        isLoadBoardManagement={props.isLoadBoardManagement}
                        date={props.date}
                        cityFrom={props.cityFrom}
                        cityTo={props.cityTo}
                        status={props.status}
                        setPageNumbers={props.setPageNumbers}
                        activePagenumber={props.activePagenumber}
                        pageNumbers={props.pageNumbers}
                        setPageNumber={props.setPageNumber}
                        setActivePagenumber={props.setActivePagenumber}
                        pageNumber={props.pageNumber}
                    />
                )}
                {props.isOrders && (
                    <OrdersManagementDetails
                        adminAgentData={props.adminAgentData}
                        isOrders={props.isOrders}
                        date={props.date}
                        cityFrom={props.cityFrom}
                        cityTo={props.cityTo}
                        status={props.status}
                        setPageNumbers={props.setPageNumbers}
                        activePagenumber={props.activePagenumber}
                        pageNumbers={props.pageNumbers}
                        setPageNumber={props.setPageNumber}
                        setActivePagenumber={props.setActivePagenumber}
                        pageNumber={props.pageNumber}
                    />
                )}
                {props.isTransactions && (
                    <TransactionManagementDetails
                        adminAgentData={props.adminAgentData}
                        isTransactions={props.isTransactions}
                        date={props.date}
                        cityFrom={props.cityFrom}
                        cityTo={props.cityTo}
                        status={props.status}
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
                )}
                {props.isAdmins && (
                    <AdminsDetails
                        adminAgentData={props.adminAgentData}
                        date={props.date}
                        setPageNumbers={props.setPageNumbers}
                        activePagenumber={props.activePagenumber}
                        pageNumbers={props.pageNumbers}
                        setPageNumber={props.setPageNumber}
                        setActivePagenumber={props.setActivePagenumber}
                        pageNumber={props.pageNumber}
                        isAdmins={props.isAdmins}
                        addAdmins={props.addAdmins}
                        setAddAdmins={props.setAddAdmins}
                        adminFullInformation={props.adminFullInformation}
                        setAdminFullInformation={props.setAdminFullInformation}
                        editAdmins={props.editAdmins}
                        setEditAdmins={props.setEditAdmins}
                        resetPassword={props.resetPassword}
                        setResetPasswword={props.setResetPasswword}
                    />
                )}
                {props.isPriceSettings && (
                    <PriceSettingsDetails
                        adminAgentData={props.adminAgentData}
                        date={props.date}
                        setPageNumbers={props.setPageNumbers}
                        activePagenumber={props.activePagenumber}
                        pageNumbers={props.pageNumbers}
                        setPageNumber={props.setPageNumber}
                        setActivePagenumber={props.setActivePagenumber}
                        pageNumber={props.pageNumber}
                        isPriceSettings={props.isPriceSettings}
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
                )}
                {props.isStatistics && (
                    <StatisticsDetails
                        adminAgentData={props.adminAgentData}
                        isStatistics={props.isStatistics}
                    />
                )}
            </div>
        </>
    )
}