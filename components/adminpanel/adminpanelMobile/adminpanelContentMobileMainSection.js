import { useEffect } from "react";
import AdminpanelContentMobileAgent from "./adminpanelContentMobileAgent";
import AdminpanelContentMobileDrivers from "./adminpanelContentMobileDrivers";
import AdminpanelContentMobileCustomers from "./adminpanelContentMobileCustomers";
import AdminpanelContentMobileBrokers from "./adminpanelContentMobileBrokers";
import AdminpanelContentDriverManagers from "./adminpanelContentDriverManagers";
import AdminpanelContentShippingCompanies from "./adminpanelContentShippingCompanies";
import AdminpanelContentTransportCompanies from "./adminpanelContentTransportCompanies";
import AdminpanelContentMobileEmployee from "./adminpanelContentMobileEmployee";
import AdminpanelContentMobileClearing from "./adminpanelContentMobileClearing";
import AdminpanelContentMobileSpecialized from "./adminpanelContentMobileSpecialized";
import AdminpanelContentMobileWebsite from "./adminpanelContentMobileWebsite";
import AdminpanelContentMobileBlog from "./adminpanelContentMobileBlog";
import AdminpanelContentMobileLoadboard from "./adminpanelContentMobileLoadboard";
import AdminpanelContentMobileOrders from "./adminpanelContentMobileOrders";
import AdminpanelContentMobileTransactions from "./adminpanelContentMobileTransactions";
import AdminpanelContentMobileAdmins from "./adminpanelContentMobileAdmins";
import AdminpanelContentMobilePriceSettings from "./adminpanelContentMobilePriceSettings";
import AdminpanelContentMobileStatistics from "./adminpanelContentMobileStatistics";

export default function AdminpanelContentMobileMainSection(props) {
    useEffect(() => {
        if (props.isDrivers) {
            props.setIsAgents(false)
            props.setIsCustomers(false)
            props.setIsBrokers(false)
            props.setIsDriverManagers(false)
            props.setIsShippingCompanies(false)
            props.setIsTransportCompanies(false)
            props.setIsClearingForwardingAgent(false)
            props.setIsSpecializedShipment(false)
            props.setIsEmployee(false)
            props.setIsWallet(false)
            props.setIsWebsite(false)
            props.setIsLoadboard(false)
            props.setIsBlog(false)
            props.setIsTransactions(false)
            props.setIsOrders(false)
            props.setIsAdmins(false)
            props.setIsPriceSettings(false)
        } else if (props.isCustomers) {
            props.setIsAgents(false)
            props.setIsDrivers(false)
            props.setIsBrokers(false)
            props.setIsDriverManagers(false)
            props.setIsShippingCompanies(false)
            props.setIsTransportCompanies(false)
            props.setIsClearingForwardingAgent(false)
            props.setIsSpecializedShipment(false)
            props.setIsEmployee(false)
            props.setIsWallet(false)
            props.setIsWebsite(false)
            props.setIsLoadboard(false)
            props.setIsBlog(false)
            props.setIsTransactions(false)
            props.setIsOrders(false)
            props.setIsAdmins(false)
            props.setIsPriceSettings(false)
        } else if (props.isBrokers) {
            props.setIsAgents(false)
            props.setIsDrivers(false)
            props.setIsCustomers(false)
            props.setIsDriverManagers(false)
            props.setIsShippingCompanies(false)
            props.setIsTransportCompanies(false)
            props.setIsClearingForwardingAgent(false)
            props.setIsSpecializedShipment(false)
            props.setIsEmployee(false)
            props.setIsWallet(false)
            props.setIsWebsite(false)
            props.setIsLoadboard(false)
            props.setIsBlog(false)
            props.setIsTransactions(false)
            props.setIsOrders(false)
            props.setIsAdmins(false)
            props.setIsPriceSettings(false)
        } else if (props.isDriverManagers) {
            props.setIsAgents(false)
            props.setIsDrivers(false)
            props.setIsCustomers(false)
            props.setIsBrokers(false)
            props.setIsShippingCompanies(false)
            props.setIsTransportCompanies(false)
            props.setIsClearingForwardingAgent(false)
            props.setIsSpecializedShipment(false)
            props.setIsEmployee(false)
            props.setIsWallet(false)
            props.setIsWebsite(false)
            props.setIsLoadboard(false)
            props.setIsBlog(false)
            props.setIsTransactions(false)
            props.setIsOrders(false)
            props.setIsAdmins(false)
            props.setIsPriceSettings(false)
        } else if (props.isShippingCompanies) {
            props.setIsAgents(false)
            props.setIsDrivers(false)
            props.setIsCustomers(false)
            props.setIsBrokers(false)
            props.setIsDriverManagers(false)
            props.setIsTransportCompanies(false)
            props.setIsClearingForwardingAgent(false)
            props.setIsSpecializedShipment(false)
            props.setIsEmployee(false)
            props.setIsWallet(false)
            props.setIsWebsite(false)
            props.setIsLoadboard(false)
            props.setIsBlog(false)
            props.setIsTransactions(false)
            props.setIsOrders(false)
            props.setIsAdmins(false)
            props.setIsPriceSettings(false)
        } else if (props.isTransportCompanies) {
            props.setIsAgents(false)
            props.setIsDrivers(false)
            props.setIsCustomers(false)
            props.setIsBrokers(false)
            props.setIsDriverManagers(false)
            props.setIsShippingCompanies(false)
            props.setIsClearingForwardingAgent(false)
            props.setIsSpecializedShipment(false)
            props.setIsEmployee(false)
            props.setIsWallet(false)
            props.setIsWebsite(false)
            props.setIsLoadboard(false)
            props.setIsBlog(false)
            props.setIsTransactions(false)
            props.setIsOrders(false)
            props.setIsAdmins(false)
            props.setIsPriceSettings(false)
        } else if (props.isClearingForwardingAgent) {
            props.setIsAgents(false)
            props.setIsDrivers(false)
            props.setIsCustomers(false)
            props.setIsBrokers(false)
            props.setIsDriverManagers(false)
            props.setIsShippingCompanies(false)
            props.setIsTransportCompanies(false)
            props.setIsSpecializedShipment(false)
            props.setIsEmployee(false)
            props.setIsWallet(false)
            props.setIsWebsite(false)
            props.setIsLoadboard(false)
            props.setIsBlog(false)
            props.setIsTransactions(false)
            props.setIsOrders(false)
            props.setIsAdmins(false)
            props.setIsPriceSettings(false)
        } else if (props.isSpecializedShipment) {
            props.setIsAgents(false)
            props.setIsDrivers(false)
            props.setIsCustomers(false)
            props.setIsBrokers(false)
            props.setIsDriverManagers(false)
            props.setIsShippingCompanies(false)
            props.setIsTransportCompanies(false)
            props.setIsClearingForwardingAgent(false)
            props.setIsEmployee(false)
            props.setIsWallet(false)
            props.setIsWebsite(false)
            props.setIsLoadboard(false)
            props.setIsBlog(false)
            props.setIsTransactions(false)
            props.setIsOrders(false)
            props.setIsAdmins(false)
            props.setIsPriceSettings(false)
        } else if (props.isEmployee) {
            props.setIsAgents(false)
            props.setIsDrivers(false)
            props.setIsCustomers(false)
            props.setIsBrokers(false)
            props.setIsDriverManagers(false)
            props.setIsShippingCompanies(false)
            props.setIsTransportCompanies(false)
            props.setIsClearingForwardingAgent(false)
            props.setIsSpecializedShipment(false)
            props.setIsWallet(false)
            props.setIsWebsite(false)
            props.setIsLoadboard(false)
            props.setIsBlog(false)
            props.setIsTransactions(false)
            props.setIsOrders(false)
            props.setIsAdmins(false)
            props.setIsPriceSettings(false)
        } else if (props.isWallet) {
            props.setIsAgents(false)
            props.setIsDrivers(false)
            props.setIsCustomers(false)
            props.setIsBrokers(false)
            props.setIsDriverManagers(false)
            props.setIsShippingCompanies(false)
            props.setIsTransportCompanies(false)
            props.setIsClearingForwardingAgent(false)
            props.setIsSpecializedShipment(false)
            props.setIsEmployee(false)
            props.setIsWebsite(false)
            props.setIsLoadboard(false)
            props.setIsBlog(false)
            props.setIsTransactions(false)
            props.setIsOrders(false)
            props.setIsAdmins(false)
            props.setIsPriceSettings(false)
        } else if (props.isWebsite) {
            props.setIsAgents(false)
            props.setIsDrivers(false)
            props.setIsCustomers(false)
            props.setIsBrokers(false)
            props.setIsDriverManagers(false)
            props.setIsShippingCompanies(false)
            props.setIsTransportCompanies(false)
            props.setIsClearingForwardingAgent(false)
            props.setIsSpecializedShipment(false)
            props.setIsEmployee(false)
            props.setIsWallet(false)
            props.setIsLoadboard(false)
            props.setIsBlog(false)
            props.setIsTransactions(false)
            props.setIsOrders(false)
            props.setIsAdmins(false)
            props.setIsPriceSettings(false)
        } else if (props.isLoadboard) {
            props.setIsAgents(false)
            props.setIsDrivers(false)
            props.setIsCustomers(false)
            props.setIsBrokers(false)
            props.setIsDriverManagers(false)
            props.setIsShippingCompanies(false)
            props.setIsTransportCompanies(false)
            props.setIsClearingForwardingAgent(false)
            props.setIsSpecializedShipment(false)
            props.setIsEmployee(false)
            props.setIsWallet(false)
            props.setIsWebsite(false)
            props.setIsBlog(false)
            props.setIsTransactions(false)
            props.setIsOrders(false)
            props.setIsAdmins(false)
            props.setIsPriceSettings(false)
        } else if (props.isBlog) {
            props.setIsAgents(false)
            props.setIsDrivers(false)
            props.setIsCustomers(false)
            props.setIsBrokers(false)
            props.setIsDriverManagers(false)
            props.setIsShippingCompanies(false)
            props.setIsTransportCompanies(false)
            props.setIsClearingForwardingAgent(false)
            props.setIsSpecializedShipment(false)
            props.setIsEmployee(false)
            props.setIsWallet(false)
            props.setIsWebsite(false)
            props.setIsLoadboard(false)
            props.setIsTransactions(false)
            props.setIsOrders(false)
            props.setIsAdmins(false)
            props.setIsPriceSettings(false)
        } else if (props.isOrders) {
            props.setIsAgents(false)
            props.setIsDrivers(false)
            props.setIsCustomers(false)
            props.setIsBrokers(false)
            props.setIsDriverManagers(false)
            props.setIsShippingCompanies(false)
            props.setIsTransportCompanies(false)
            props.setIsClearingForwardingAgent(false)
            props.setIsSpecializedShipment(false)
            props.setIsEmployee(false)
            props.setIsWallet(false)
            props.setIsWebsite(false)
            props.setIsLoadboard(false)
            props.setIsTransactions(false)
            props.setIsAdmins(false)
            props.setIsPriceSettings(false)
        } else if (props.isTransactions) {
            props.setIsAgents(false)
            props.setIsDrivers(false)
            props.setIsCustomers(false)
            props.setIsBrokers(false)
            props.setIsDriverManagers(false)
            props.setIsShippingCompanies(false)
            props.setIsTransportCompanies(false)
            props.setIsClearingForwardingAgent(false)
            props.setIsSpecializedShipment(false)
            props.setIsEmployee(false)
            props.setIsWallet(false)
            props.setIsWebsite(false)
            props.setIsLoadboard(false)
            props.setIsOrders(false)
            props.setIsAdmins(false)
            props.setIsPriceSettings(false)
        } else if (props.isAdmins) {
            props.setIsAgents(false)
            props.setIsDrivers(false)
            props.setIsCustomers(false)
            props.setIsBrokers(false)
            props.setIsDriverManagers(false)
            props.setIsShippingCompanies(false)
            props.setIsTransportCompanies(false)
            props.setIsClearingForwardingAgent(false)
            props.setIsSpecializedShipment(false)
            props.setIsEmployee(false)
            props.setIsWallet(false)
            props.setIsWebsite(false)
            props.setIsLoadboard(false)
            props.setIsTransactions(false)
            props.setIsOrders(false)
            props.setIsPriceSettings(false)
        } else if (props.isPriceSettings) {
            props.setIsAgents(false)
            props.setIsDrivers(false)
            props.setIsCustomers(false)
            props.setIsBrokers(false)
            props.setIsDriverManagers(false)
            props.setIsShippingCompanies(false)
            props.setIsTransportCompanies(false)
            props.setIsClearingForwardingAgent(false)
            props.setIsSpecializedShipment(false)
            props.setIsEmployee(false)
            props.setIsWallet(false)
            props.setIsWebsite(false)
            props.setIsLoadboard(false)
            props.setIsTransactions(false)
            props.setIsOrders(false)
            props.setIsAdmins(false)
        } else {
            props.setIsAgents(true)
        }
    }, [props])
    return (
        <>
            {props.isAgents && (
                <div style={props.backdrop ? {
                    background: "#E7E7E7",
                    padding: 0
                } : {
                    background: "white"
                }}>
                    <AdminpanelContentMobileAgent
                        adminAgentData={props.adminAgentData}
                        backdrop={props.backdrop}
                        setBackdrop={props.setBackdrop}
                        agentList={props.agentList}
                        setAgentList={props.setAgentList}
                    />
                </div>
            )}

            {props.isDrivers && (
                <AdminpanelContentMobileDrivers
                    adminAgentData={props.adminAgentData}
                    backdrop={props.backdrop}
                    setBackdrop={props.setBackdrop}
                    isDrivers={props.isDrivers}
                />
            )}

            {props.isCustomers && (
                <AdminpanelContentMobileCustomers
                    adminAgentData={props.adminAgentData}
                    backdrop={props.backdrop}
                    setBackdrop={props.setBackdrop}
                    isCustomers={props.isCustomers}
                />
            )}

            {props.isBrokers && (
                <AdminpanelContentMobileBrokers
                    adminAgentData={props.adminAgentData}
                    backdrop={props.backdrop}
                    setBackdrop={props.setBackdrop}
                    isBrokers={props.isBrokers}
                />
            )}
            {props.isDriverManagers && (
                <AdminpanelContentDriverManagers
                    adminAgentData={props.adminAgentData}
                    backdrop={props.backdrop}
                    setBackdrop={props.setBackdrop}
                    isDriverManagers={props.isDriverManagers}
                />
            )}
            {props.isShippingCompanies && (
                <AdminpanelContentShippingCompanies
                    adminAgentData={props.adminAgentData}
                    backdrop={props.backdrop}
                    setBackdrop={props.setBackdrop}
                    isShippingCompanies={props.isShippingCompanies}
                />
            )}
            {props.isTransportCompanies && (
                <AdminpanelContentTransportCompanies
                    adminAgentData={props.adminAgentData}
                    backdrop={props.backdrop}
                    setBackdrop={props.setBackdrop}
                    isTransportCompanies={props.isTransportCompanies}
                />
            )}
            {props.isEmployee && (
                <AdminpanelContentMobileEmployee
                    adminAgentData={props.adminAgentData}
                    backdrop={props.backdrop}
                    setBackdrop={props.setBackdrop}
                    isEmployee={props.isEmployee}
                />
            )}
            {props.isClearingForwardingAgent && (
                <AdminpanelContentMobileClearing
                    adminAgentData={props.adminAgentData}
                    backdrop={props.backdrop}
                    setBackdrop={props.setBackdrop}
                    isClearingForwardingAgent={props.isClearingForwardingAgent}
                />
            )}
            {props.isSpecializedShipment && (
                <AdminpanelContentMobileSpecialized
                    adminAgentData={props.adminAgentData}
                    backdrop={props.backdrop}
                    setBackdrop={props.setBackdrop}
                    isSpecializedShipment={props.isSpecializedShipment}
                />
            )}
            {props.isWebsite && (
                <AdminpanelContentMobileWebsite
                    adminAgentData={props.adminAgentData}
                    websiteData={props.websiteData}
                    backdrop={props.backdrop}
                    setBackdrop={props.setBackdrop}
                    isWebsite={props.isWebsite}
                />
            )}
            {props.isBlog && (
                <AdminpanelContentMobileBlog
                    adminAgentData={props.adminAgentData}
                    backdrop={props.backdrop}
                    setBackdrop={props.setBackdrop}
                    isBlog={props.isBlog}
                />
            )}
            {props.isLoadboard && (
                <AdminpanelContentMobileLoadboard
                    adminAgentData={props.adminAgentData}
                    backdrop={props.backdrop}
                    setBackdrop={props.setBackdrop}
                    isLoadboard={props.isLoadboard}
                />
            )}
            {props.isOrders && (
                <AdminpanelContentMobileOrders
                    adminAgentData={props.adminAgentData}
                    backdrop={props.backdrop}
                    setBackdrop={props.setBackdrop}
                    isOrders={props.isOrders}
                />
            )}
            {props.isTransactions && (
                <AdminpanelContentMobileTransactions
                    adminAgentData={props.adminAgentData}
                    backdrop={props.backdrop}
                    setBackdrop={props.setBackdrop}
                    isTransactions={props.isTransactions}
                />
            )}
            {props.isAdmins && (
                <AdminpanelContentMobileAdmins
                    adminAgentData={props.adminAgentData}
                    backdrop={props.backdrop}
                    setBackdrop={props.setBackdrop}
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
                <AdminpanelContentMobilePriceSettings
                    adminAgentData={props.adminAgentData}
                    backdrop={props.backdrop}
                    setBackdrop={props.setBackdrop}
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
                <AdminpanelContentMobileStatistics
                    adminAgentData={props.adminAgentData}
                    isStatistics={props.isStatistics}
                />
            )}
        </>
    )
}