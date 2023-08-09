import BrokerRequestDetails from "./details/brokerRequestDetails";
import ClearingRequestDetails from "./details/clearingRequestDetails";
import DriverRequestDetails from "./details/driverRequestDetails";
import DriversManagerRequestDetails from "./details/driversManagerRequestDetails";
import EmployeesRequestDetails from "./details/employeesRequestDetails";
import LoadboardRequestDetails from "./details/loadboardRequestDetails";
import ShippingCompaniesRequestDetails from "./details/shippingCompaniesRequestDetails";
import TransportCompaniesRequestDetails from "./details/transportCompaniesRequestDetails";

export default function GenericRequestDetails(props) {
    return (
        <>
            <div style={(props.isLoadBoardRequest || props.isBrokersRequest) ? {
                display: 'flex',
                flexDirection: 'column',
                padding: "30px 20px",
                width: "100%",
                background: 'white',
                marginTop: '20px'
            } :{
                display: 'flex',
                flexDirection: 'column',
                padding: "30px 20px",
                width: "100%",
                background: 'white',
                marginTop: '20px'
            }}>
                {props.isDriversRequest && (
                    <DriverRequestDetails
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
                {props.isBrokersRequest && (
                    <BrokerRequestDetails
                        adminAgentData={props.adminAgentData}
                        date={props.date}
                        setPageNumbers={props.setPageNumbers}
                        activePagenumber={props.activePagenumber}
                        pageNumbers={props.pageNumbers}
                        setPageNumber={props.setPageNumber}
                        setActivePagenumber={props.setActivePagenumber}
                        pageNumber={props.pageNumber}
                        isBrokersRequest={props.isBrokersRequest}
                        handleBrokerList={props.handleBrokerList}
                    />
                )}
                {props.isDriversManagersRequest && (
                    <DriversManagerRequestDetails
                        adminAgentData={props.adminAgentData}
                        date={props.date}
                        setPageNumbers={props.setPageNumbers}
                        activePagenumber={props.activePagenumber}
                        pageNumbers={props.pageNumbers}
                        setPageNumber={props.setPageNumber}
                        setActivePagenumber={props.setActivePagenumber}
                        pageNumber={props.pageNumber}
                        isDriversManagersRequest={props.isDriversManagersRequest}
                    />
                )}
                {props.isShippingCompaniesRequest && (
                    <ShippingCompaniesRequestDetails
                        adminAgentData={props.adminAgentData}
                        date={props.date}
                        setPageNumbers={props.setPageNumbers}
                        activePagenumber={props.activePagenumber}
                        pageNumbers={props.pageNumbers}
                        setPageNumber={props.setPageNumber}
                        setActivePagenumber={props.setActivePagenumber}
                        pageNumber={props.pageNumber}
                        isShippingCompaniesRequest={props.isShippingCompaniesRequest}
                    />
                )}
                {props.isTransportCompanyRequest && (
                    <TransportCompaniesRequestDetails
                        adminAgentData={props.adminAgentData}
                        date={props.date}
                        setPageNumbers={props.setPageNumbers}
                        activePagenumber={props.activePagenumber}
                        pageNumbers={props.pageNumbers}
                        setPageNumber={props.setPageNumber}
                        setActivePagenumber={props.setActivePagenumber}
                        pageNumber={props.pageNumber}
                        isTransportCompanyRequest={props.isTransportCompanyRequest}
                    />
                )}
                {props.isEmployeesRequest && (
                    <EmployeesRequestDetails
                        adminAgentData={props.adminAgentData}
                        date={props.date}
                        setPageNumbers={props.setPageNumbers}
                        activePagenumber={props.activePagenumber}
                        pageNumbers={props.pageNumbers}
                        setPageNumber={props.setPageNumber}
                        setActivePagenumber={props.setActivePagenumber}
                        pageNumber={props.pageNumber}
                        isEmployeesRequest={props.isEmployeesRequest}
                    />
                )}
                {props.isClearingForwardingRequest && (
                    <ClearingRequestDetails
                        adminAgentData={props.adminAgentData}
                        date={props.date}
                        setPageNumbers={props.setPageNumbers}
                        activePagenumber={props.activePagenumber}
                        pageNumbers={props.pageNumbers}
                        setPageNumber={props.setPageNumber}
                        setActivePagenumber={props.setActivePagenumber}
                        pageNumber={props.pageNumber}
                        isClearingForwardingRequest={props.isClearingForwardingRequest}
                    />
                )}
                {props.isLoadBoardRequest && (
                    <LoadboardRequestDetails
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
            </div>
        </>
    )
}