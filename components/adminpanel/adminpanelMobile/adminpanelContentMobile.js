import { useState } from "react";
import AdminpanelContentMobileMainSection from "./adminpanelContentMobileMainSection";
import AdminpanelContentMobileTopnav from "./adminpanelContentMobileTopnav";

export default function AdminpanelContentMobile(props) {
    const [menuDropdown, setMenuDropdown] = useState(false)
    const [backdrop, setBackdrop] = useState(false)

    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                margin: 0,
                width: "100%",
                padding: "30px 20px",
                background: 'white',
                height: "900vh",
            }}>
                <AdminpanelContentMobileTopnav
                    menuDropdown={menuDropdown}
                    setMenuDropdown={setMenuDropdown}
                    isAgents={props.isAgents}
                    setIsAgents={props.setIsAgents}
                    isDrivers={props.isDrivers}
                    setIsDrivers={props.setIsDrivers}
                    isCustomers={props.isCustomers}
                    setIsCustomers={props.setIsCustomers}
                    isBrokers={props.isBrokers}
                    setIsBrokers={props.setIsBrokers}
                    isDriverManagers={props.isDriverManagers}
                    setIsDriverManagers={props.setIsDriverManagers}
                    isShippingCompanies={props.isShippingCompanies}
                    setIsShippingCompanies={props.setIsShippingCompanies}
                    isTransportCompanies={props.isTransportCompanies}
                    setIsTransportCompanies={props.setIsTransportCompanies}
                    isClearingForwardingAgent={props.isClearingForwardingAgent}
                    setIsClearingForwardingAgent={props.setIsClearingForwardingAgent}
                    isSpecializedShipment={props.isSpecializedShipment}
                    setIsSpecializedShipment={props.setIsSpecializedShipment}
                    isEmployee={props.isEmployee}
                    setIsEmployee={props.setIsEmployee}
                    isWallet={props.isWallet}
                    setIsWallet={props.setIsWallet}
                    isWebsite={props.isWebsite}
                    setIsWebsite={props.setIsWebsite}
                    isLoadboard={props.isLoadboard}
                    setIsLoadboard={props.setIsLoadboard}
                    isBlog={props.isBlog}
                    setIsBlog={props.setIsBlog}
                    handleIsAgents={props.handleIsAgents}
                    handleIsDrivers={props.handleIsDrivers}
                    handleIsCustomers={props.handleIsCustomers}
                    handleIsBrokers={props.handleIsBrokers}
                    handleIsDriverManagers={props.handleIsDriverManagers}
                    handleIsShippingCompanies={props.handleIsShippingCompanies}
                    handleIsTransportCompanies={props.handleIsTransportCompanies}
                    handleIsClearingForwardingAgent={
                        props.handleIsClearingForwardingAgent
                    }
                    handleIsSpecializedShipment={props.handleIsSpecializedShipment}
                    handleIsEmployee={props.handleIsEmployee}
                    handleIsWallet={props.handleIsWallet}
                    handleIsWebsite={props.handleIsWebsite}
                    handleIsLoadboard={props.handleIsLoadboard}
                    handleIsBlog={props.handleIsBlog}
                    adminAgentData={props.adminAgentData}
                    agentList={props.agentList}
                    setAgentList={props.setAgentList}
                    isOrders={props.isOrders}
                    setIsOrders={props.setIsOrders}
                    handleIsOrders={props.handleIsOrders}
                    isTransactions={props.isTransactions}
                    setIsTransactions={props.setIsTransactions}
                    handleIsTransactions={props.handleIsTransactions}
                    isAdmins={props.isAdmins}
                    setIsAdmins={props.setIsAdmins}
                    handleIsAdmins={props.handleIsAdmins}
                    isPriceSettings={props.isPriceSettings}
                    setIsPriceSettings={props.setIsPriceSettings}
                    handleIsPriceSettings={props.handleIsPriceSettings}
                    isStatistics={props.isStatistics}
                    setIsStatistics={props.setIsStatistics}
                    handleIsStatistics={props.handleIsStatistics}
                />
                <div style={{
                    width: "100%",
                    display: 'flex',
                    flexDirection: "column",
                }}>
                    <AdminpanelContentMobileMainSection
                        isAgents={props.isAgents}
                        isDrivers={props.isDrivers}
                        isCustomers={props.isCustomers}
                        isBrokers={props.isBrokers}
                        isDriverManagers={props.isDriverManagers}
                        isShippingCompanies={props.isShippingCompanies}
                        isTransportCompanies={props.isTransportCompanies}
                        isClearingForwardingAgent={props.isClearingForwardingAgent}
                        isSpecializedShipment={props.isSpecializedShipment}
                        isEmployee={props.isEmployee}
                        isWallet={props.isWallet}
                        isWebsite={props.isWebsite}
                        isLoadboard={props.isLoadboard}
                        isBlog={props.isBlog}
                        setIsAgents={props.setIsAgents}
                        setIsDrivers={props.setIsDrivers}
                        setIsCustomers={props.setIsCustomers}
                        setIsBrokers={props.setIsBrokers}
                        setIsDriverManagers={props.setIsDriverManagers}
                        setIsShippingCompanies={props.setIsShippingCompanies}
                        setIsTransportCompanies={props.setIsTransportCompanies}
                        setIsClearingForwardingAgent={props.setIsClearingForwardingAgent}
                        setIsSpecializedShipment={props.setIsSpecializedShipment}
                        setIsEmployee={props.setIsEmployee}
                        setIsWallet={props.setIsWallet}
                        setIsWebsite={props.setIsWebsite}
                        setIsLoadboard={props.setIsLoadboard}
                        setIsBlog={props.setIsBlog}
                        adminAgentData={props.adminAgentData}
                        backdrop={backdrop}
                        setBackdrop={setBackdrop}
                        agentList={props.agentList}
                        setAgentList={props.setAgentList}
                        websiteData={props.websiteData}
                        isOrders={props.isOrders}
                        setIsOrders={props.setIsOrders}
                        handleIsOrders={props.handleIsOrders}
                        isTransactions={props.isTransactions}
                        setIsTransactions={props.setIsTransactions}
                        handleIsTransactions={props.handleIsTransactions}
                        isAdmins={props.isAdmins}
                        setIsAdmins={props.setIsAdmins}
                        handleIsAdmins={props.handleIsAdmins}
                        isPriceSettings={props.isPriceSettings}
                        setIsPriceSettings={props.setIsPriceSettings}
                        handleIsPriceSettings={props.handleIsPriceSettings}
                        addAdmins={props.addAdmins}
                        setAddAdmins={props.setAddAdmins}
                        adminFullInformation={props.adminFullInformation}
                        setAdminFullInformation={props.setAdminFullInformation}
                        editAdmins={props.editAdmins}
                        setEditAdmins={props.setEditAdmins}
                        resetPassword={props.resetPassword}
                        setResetPasswword={props.setResetPasswword}
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
                        isStatistics={props.isStatistics}
                        setIsStatistics={props.setIsStatistics}
                        handleIsStatistics={props.handleIsStatistics}
                    />
                </div>
            </div>
        </>
    )
}