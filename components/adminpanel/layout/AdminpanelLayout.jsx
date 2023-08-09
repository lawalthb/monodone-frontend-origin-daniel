import { useState } from "react";
import AdminLoginLayout from "./AdminLoginLayout";
import AdminpanelContentLayout from "./AdminpanelContentLayout";

export default function AdminpanelLayout(props) {
  const [isAgents, setIsAgents] = useState(false);
  const [isDrivers, setIsDrivers] = useState(false);
  const [isCustomers, setIsCustomers] = useState(false);
  const [isBrokers, setIsBrokers] = useState(false);
  const [isDriverManagers, setIsDriverManagers] = useState(false);
  const [isShippingCompanies, setIsShippingCompanies] = useState(false);
  const [isTransportCompanies, setIsTransportCompanies] = useState(false);
  const [isClearingForwardingAgent, setIsClearingForwardingAgent] =
    useState(false);
  const [isSpecializedShipment, setIsSpecializedShipment] = useState(false);
  const [isEmployee, setIsEmployee] = useState(false);
  const [isWallet, setIsWallet] = useState(false);
  const [isWebsite, setIsWebsite] = useState(false);
  const [isLoadboard, setIsLoadboard] = useState(false);
  const [isBlog, setIsBlog] = useState(false);
  const [agentList, setAgentList] = useState(false);
  const [driverList, setDriverList] = useState(false);
  const [customerList, setCustomerList] = useState(false);
  const [brokerList, setBrokerList] = useState(false);
  const [isOrders, setIsOrders] = useState(false);
  const [isTransactions, setIsTransactions] = useState(false);
  const [isAdmins, setIsAdmins] = useState(false);
  const [isPriceSettings, setIsPriceSettings] = useState(false);
  const [addAdmins, setAddAdmins] = useState(false);
  const [adminFullInformation, setAdminFullInformation] = useState(false);
  const [editAdmins, setEditAdmins] = useState(false);
  const [resetPassword, setResetPasswword] = useState(false);
  const [addsize, setAddSize] = useState(false);
  const [editRow, setEditRow] = useState(false);
  const [deleteColumn, setDeleteColumn] = useState(false);
  const [addDistance, setAddDistance] = useState(false);
  const [addMiles, setAddMiles] = useState(false);
  const [addValue, setAddValue] = useState(false);
  const [generalEdit, setGeneralEdit] = useState(false);
  const [isStatistics, setIsStatistics] = useState(false);

  const handleIsStatistics = () => {
    setIsStatistics(true);
    setIsPriceSettings(false);
    setIsAdmins(false);
    setIsTransactions(false);
    setIsOrders(false);
    setIsAgents(false);
    setIsDrivers(false);
    setIsCustomers(false);
    setIsBrokers(false);
    setIsDriverManagers(false);
    setIsShippingCompanies(false);
    setIsTransportCompanies(false);
    setIsClearingForwardingAgent(false);
    setIsSpecializedShipment(false);
    setIsEmployee(false);
    setIsWallet(false);
    setIsWebsite(false);
    setIsLoadboard(false);
    setIsBlog(false);
    setAgentList(false);
    setDriverList(false);
    setCustomerList(false);
    setBrokerList(false);
  };

  const handleIsPriceSettings = () => {
    setIsPriceSettings(true);
    setIsAdmins(false);
    setIsTransactions(false);
    setIsOrders(false);
    setIsAgents(false);
    setIsDrivers(false);
    setIsCustomers(false);
    setIsBrokers(false);
    setIsDriverManagers(false);
    setIsShippingCompanies(false);
    setIsTransportCompanies(false);
    setIsClearingForwardingAgent(false);
    setIsSpecializedShipment(false);
    setIsEmployee(false);
    setIsWallet(false);
    setIsWebsite(false);
    setIsLoadboard(false);
    setIsBlog(false);
    setAgentList(false);
    setDriverList(false);
    setCustomerList(false);
    setBrokerList(false);
    setIsStatistics(false);
  };

  const handleIsAdmins = () => {
    setIsAdmins(true);
    setIsTransactions(false);
    setIsOrders(false);
    setIsAgents(false);
    setIsDrivers(false);
    setIsCustomers(false);
    setIsBrokers(false);
    setIsDriverManagers(false);
    setIsShippingCompanies(false);
    setIsTransportCompanies(false);
    setIsClearingForwardingAgent(false);
    setIsSpecializedShipment(false);
    setIsEmployee(false);
    setIsWallet(false);
    setIsWebsite(false);
    setIsLoadboard(false);
    setIsBlog(false);
    setAgentList(false);
    setDriverList(false);
    setCustomerList(false);
    setBrokerList(false);
    setIsPriceSettings(false);
    setIsStatistics(false);
  };

  const handleIsTransactions = () => {
    setIsAdmins(false);
    setIsTransactions(true);
    setIsOrders(false);
    setIsAgents(false);
    setIsDrivers(false);
    setIsCustomers(false);
    setIsBrokers(false);
    setIsDriverManagers(false);
    setIsShippingCompanies(false);
    setIsTransportCompanies(false);
    setIsClearingForwardingAgent(false);
    setIsSpecializedShipment(false);
    setIsEmployee(false);
    setIsWallet(false);
    setIsWebsite(false);
    setIsLoadboard(false);
    setIsBlog(false);
    setAgentList(false);
    setDriverList(false);
    setCustomerList(false);
    setBrokerList(false);
    setIsPriceSettings(false);
    setIsStatistics(false);
  };

  const handleIsOrders = () => {
    setIsAdmins(false);
    setIsOrders(true);
    setIsAgents(false);
    setIsDrivers(false);
    setIsCustomers(false);
    setIsBrokers(false);
    setIsDriverManagers(false);
    setIsShippingCompanies(false);
    setIsTransportCompanies(false);
    setIsClearingForwardingAgent(false);
    setIsSpecializedShipment(false);
    setIsEmployee(false);
    setIsWallet(false);
    setIsWebsite(false);
    setIsLoadboard(false);
    setIsBlog(false);
    setAgentList(false);
    setDriverList(false);
    setCustomerList(false);
    setBrokerList(false);
    setIsTransactions(false);
    setIsPriceSettings(false);
    setIsStatistics(false);
  };

  const handleBrokerList = () => {
    setBrokerList(true);
    setIsAgents(false);
    setIsDrivers(false);
    setIsCustomers(false);
    setIsBrokers(false);
    setIsDriverManagers(false);
    setIsShippingCompanies(false);
    setIsTransportCompanies(false);
    setIsClearingForwardingAgent(false);
    setIsSpecializedShipment(false);
    setIsEmployee(false);
    setIsWallet(false);
    setIsWebsite(false);
    setIsLoadboard(false);
    setIsBlog(false);
    setAgentList(false);
    setDriverList(false);
    setCustomerList(false);
    setIsOrders(false);
    setIsTransactions(false);
    setIsAdmins(false);
    setIsPriceSettings(false);
    setIsStatistics(false);
  };

  const handleCustomerList = () => {
    setCustomerList(true);
    setIsAgents(false);
    setIsDrivers(false);
    setIsCustomers(false);
    setIsBrokers(false);
    setIsDriverManagers(false);
    setIsShippingCompanies(false);
    setIsTransportCompanies(false);
    setIsClearingForwardingAgent(false);
    setIsSpecializedShipment(false);
    setIsEmployee(false);
    setIsWallet(false);
    setIsWebsite(false);
    setIsLoadboard(false);
    setIsBlog(false);
    setAgentList(false);
    setDriverList(false);
    setBrokerList(false);
    setIsOrders(false);
    setIsTransactions(false);
    setIsAdmins(false);
    setIsPriceSettings(false);
    setIsStatistics(false);
  };

  const handleDriverList = () => {
    setDriverList(true);
    setIsAgents(false);
    setIsDrivers(false);
    setIsCustomers(false);
    setIsBrokers(false);
    setIsDriverManagers(false);
    setIsShippingCompanies(false);
    setIsTransportCompanies(false);
    setIsClearingForwardingAgent(false);
    setIsSpecializedShipment(false);
    setIsEmployee(false);
    setIsWallet(false);
    setIsWebsite(false);
    setIsLoadboard(false);
    setIsBlog(false);
    setAgentList(false);
    setCustomerList(false);
    setBrokerList(false);
    setIsOrders(false);
    setIsTransactions(false);
    setIsAdmins(false);
    setIsPriceSettings(false);
    setIsStatistics(false);
  };

  const handleAgentList = () => {
    setAgentList(true);
    setIsAgents(false);
    setIsDrivers(false);
    setIsCustomers(false);
    setIsBrokers(false);
    setIsDriverManagers(false);
    setIsShippingCompanies(false);
    setIsTransportCompanies(false);
    setIsClearingForwardingAgent(false);
    setIsSpecializedShipment(false);
    setIsEmployee(false);
    setIsWallet(false);
    setIsWebsite(false);
    setIsLoadboard(false);
    setIsBlog(false);
    setAgentList(false);
    setDriverList(false);
    setCustomerList(false);
    setBrokerList(false);
    setIsOrders(false);
    setIsTransactions(false);
    setIsAdmins(false);
    setIsPriceSettings(false);
    setIsStatistics(false);
  };

  const handleIsAgents = () => {
    setIsAgents(true);
    setIsDrivers(false);
    setIsCustomers(false);
    setIsBrokers(false);
    setIsDriverManagers(false);
    setIsShippingCompanies(false);
    setIsTransportCompanies(false);
    setIsClearingForwardingAgent(false);
    setIsSpecializedShipment(false);
    setIsEmployee(false);
    setIsWallet(false);
    setIsWebsite(false);
    setIsLoadboard(false);
    setIsBlog(false);
    setAgentList(false);
    setDriverList(false);
    setCustomerList(false);
    setBrokerList(false);
    setIsOrders(false);
    setIsTransactions(false);
    setIsAdmins(false);
    setIsPriceSettings(false);
    setIsStatistics(false);
  };

  const handleIsDrivers = () => {
    setIsDrivers(true);
    setIsAgents(false);
    setIsCustomers(false);
    setIsBrokers(false);
    setIsDriverManagers(false);
    setIsShippingCompanies(false);
    setIsTransportCompanies(false);
    setIsClearingForwardingAgent(false);
    setIsSpecializedShipment(false);
    setIsEmployee(false);
    setIsWallet(false);
    setIsWebsite(false);
    setIsLoadboard(false);
    setIsBlog(false);
    setAgentList(false);
    setDriverList(false);
    setCustomerList(false);
    setBrokerList(false);
    setIsOrders(false);
    setIsTransactions(false);
    setIsAdmins(false);
    setIsPriceSettings(false);
    setIsStatistics(false);
  };

  const handleIsCustomers = () => {
    setIsCustomers(true);
    setIsAgents(false);
    setIsDrivers(false);
    setIsBrokers(false);
    setIsDriverManagers(false);
    setIsShippingCompanies(false);
    setIsTransportCompanies(false);
    setIsClearingForwardingAgent(false);
    setIsSpecializedShipment(false);
    setIsEmployee(false);
    setIsWallet(false);
    setIsWebsite(false);
    setIsLoadboard(false);
    setIsBlog(false);
    setAgentList(false);
    setDriverList(false);
    setCustomerList(false);
    setBrokerList(false);
    setIsOrders(false);
    setIsTransactions(false);
    setIsAdmins(false);
    setIsPriceSettings(false);
    setIsStatistics(false);
  };

  const handleIsBrokers = () => {
    setIsBrokers(true);
    setIsAgents(false);
    setIsDrivers(false);
    setIsCustomers(false);
    setIsDriverManagers(false);
    setIsShippingCompanies(false);
    setIsTransportCompanies(false);
    setIsClearingForwardingAgent(false);
    setIsSpecializedShipment(false);
    setIsEmployee(false);
    setIsWallet(false);
    setIsWebsite(false);
    setIsLoadboard(false);
    setIsBlog(false);
    setAgentList(false);
    setDriverList(false);
    setCustomerList(false);
    setBrokerList(false);
    setIsOrders(false);
    setIsTransactions(false);
    setIsAdmins(false);
    setIsPriceSettings(false);
    setIsStatistics(false);
  };

  const handleIsDriverManagers = () => {
    setIsDriverManagers(true);
    setIsAgents(false);
    setIsDrivers(false);
    setIsCustomers(false);
    setIsBrokers(false);
    setIsShippingCompanies(false);
    setIsTransportCompanies(false);
    setIsClearingForwardingAgent(false);
    setIsSpecializedShipment(false);
    setIsEmployee(false);
    setIsWallet(false);
    setIsWebsite(false);
    setIsLoadboard(false);
    setIsBlog(false);
    setAgentList(false);
    setDriverList(false);
    setCustomerList(false);
    setBrokerList(false);
    setIsOrders(false);
    setIsTransactions(false);
    setIsAdmins(false);
    setIsPriceSettings(false);
    setIsStatistics(false);
  };

  const handleIsShippingCompanies = () => {
    setIsShippingCompanies(true);
    setIsAgents(false);
    setIsDrivers(false);
    setIsCustomers(false);
    setIsBrokers(false);
    setIsDriverManagers(false);
    setIsTransportCompanies(false);
    setIsClearingForwardingAgent(false);
    setIsSpecializedShipment(false);
    setIsEmployee(false);
    setIsWallet(false);
    setIsWebsite(false);
    setIsLoadboard(false);
    setIsBlog(false);
    setAgentList(false);
    setDriverList(false);
    setCustomerList(false);
    setBrokerList(false);
    setIsOrders(false);
    setIsTransactions(false);
    setIsAdmins(false);
    setIsPriceSettings(false);
    setIsStatistics(false);
  };

  const handleIsTransportCompanies = () => {
    setIsTransportCompanies(true);
    setIsAgents(false);
    setIsDrivers(false);
    setIsCustomers(false);
    setIsBrokers(false);
    setIsDriverManagers(false);
    setIsShippingCompanies(false);
    setIsClearingForwardingAgent(false);
    setIsSpecializedShipment(false);
    setIsEmployee(false);
    setIsWallet(false);
    setIsWebsite(false);
    setIsLoadboard(false);
    setIsBlog(false);
    setAgentList(false);
    setDriverList(false);
    setCustomerList(false);
    setBrokerList(false);
    setIsOrders(false);
    setIsTransactions(false);
    setIsAdmins(false);
    setIsPriceSettings(false);
    setIsStatistics(false);
  };

  const handleIsClearingForwardingAgent = () => {
    setIsClearingForwardingAgent(true);
    setIsAgents(false);
    setIsDrivers(false);
    setIsCustomers(false);
    setIsBrokers(false);
    setIsDriverManagers(false);
    setIsShippingCompanies(false);
    setIsTransportCompanies(false);
    setIsSpecializedShipment(false);
    setIsEmployee(false);
    setIsWallet(false);
    setIsWebsite(false);
    setIsLoadboard(false);
    setIsBlog(false);
    setAgentList(false);
    setDriverList(false);
    setCustomerList(false);
    setBrokerList(false);
    setIsOrders(false);
    setIsTransactions(false);
    setIsAdmins(false);
    setIsPriceSettings(false);
    setIsStatistics(false);
  };

  const handleIsSpecializedShipment = () => {
    setIsSpecializedShipment(true);
    setIsAgents(false);
    setIsDrivers(false);
    setIsCustomers(false);
    setIsBrokers(false);
    setIsDriverManagers(false);
    setIsShippingCompanies(false);
    setIsTransportCompanies(false);
    setIsClearingForwardingAgent(false);
    setIsEmployee(false);
    setIsWallet(false);
    setIsWebsite(false);
    setIsLoadboard(false);
    setIsBlog(false);
    setAgentList(false);
    setDriverList(false);
    setCustomerList(false);
    setBrokerList(false);
    setIsOrders(false);
    setIsTransactions(false);
    setIsAdmins(false);
    setIsPriceSettings(false);
    setIsStatistics(false);
  };

  const handleIsEmployee = () => {
    setIsEmployee(true);
    setIsAgents(false);
    setIsDrivers(false);
    setIsCustomers(false);
    setIsBrokers(false);
    setIsDriverManagers(false);
    setIsShippingCompanies(false);
    setIsTransportCompanies(false);
    setIsClearingForwardingAgent(false);
    setIsSpecializedShipment(false);
    setIsWallet(false);
    setIsWebsite(false);
    setIsLoadboard(false);
    setIsBlog(false);
    setAgentList(false);
    setDriverList(false);
    setCustomerList(false);
    setBrokerList(false);
    setIsOrders(false);
    setIsTransactions(false);
    setIsAdmins(false);
    setIsPriceSettings(false);
    setIsStatistics(false);
  };

  const handleIsWallet = () => {
    setIsWallet(true);
    setIsAgents(false);
    setIsDrivers(false);
    setIsCustomers(false);
    setIsBrokers(false);
    setIsDriverManagers(false);
    setIsShippingCompanies(false);
    setIsTransportCompanies(false);
    setIsClearingForwardingAgent(false);
    setIsSpecializedShipment(false);
    setIsEmployee(false);
    setIsWebsite(false);
    setIsLoadboard(false);
    setIsBlog(false);
    setAgentList(false);
    setDriverList(false);
    setCustomerList(false);
    setBrokerList(false);
    setIsOrders(false);
    setIsTransactions(false);
    setIsAdmins(false);
    setIsPriceSettings(false);
    setIsStatistics(false);
  };

  const handleIsWebsite = () => {
    setIsWebsite(true);
    setIsAgents(false);
    setIsDrivers(false);
    setIsCustomers(false);
    setIsBrokers(false);
    setIsDriverManagers(false);
    setIsShippingCompanies(false);
    setIsTransportCompanies(false);
    setIsClearingForwardingAgent(false);
    setIsSpecializedShipment(false);
    setIsEmployee(false);
    setIsWallet(false);
    setIsLoadboard(false);
    setIsBlog(false);
    setAgentList(false);
    setDriverList(false);
    setCustomerList(false);
    setBrokerList(false);
    setIsOrders(false);
    setIsTransactions(false);
    setIsAdmins(false);
    setIsPriceSettings(false);
    setIsStatistics(false);
  };

  const handleIsLoadboard = () => {
    setIsLoadboard(true);
    setIsAgents(false);
    setIsDrivers(false);
    setIsCustomers(false);
    setIsBrokers(false);
    setIsDriverManagers(false);
    setIsShippingCompanies(false);
    setIsTransportCompanies(false);
    setIsClearingForwardingAgent(false);
    setIsSpecializedShipment(false);
    setIsEmployee(false);
    setIsWallet(false);
    setIsWebsite(false);
    setIsBlog(false);
    setAgentList(false);
    setDriverList(false);
    setCustomerList(false);
    setBrokerList(false);
    setIsOrders(false);
    setIsTransactions(false);
    setIsAdmins(false);
    setIsPriceSettings(false);
    setIsStatistics(false);
  };

  const handleIsBlog = () => {
    setIsBlog(true);
    setIsAgents(false);
    setIsDrivers(false);
    setIsCustomers(false);
    setIsBrokers(false);
    setIsDriverManagers(false);
    setIsShippingCompanies(false);
    setIsTransportCompanies(false);
    setIsClearingForwardingAgent(false);
    setIsSpecializedShipment(false);
    setIsEmployee(false);
    setIsWallet(false);
    setIsWebsite(false);
    setIsLoadboard(false);
    setAgentList(false);
    setDriverList(false);
    setCustomerList(false);
    setBrokerList(false);
    setIsOrders(false);
    setIsTransactions(false);
    setIsAdmins(false);
    setIsPriceSettings(false);
    setIsStatistics(false);
  };

  return (
    <>
      {props.isAdmin ? (
        <>
          <AdminpanelContentLayout
            isAgents={isAgents}
            setIsAgents={setIsAgents}
            isDrivers={isDrivers}
            setIsDrivers={setIsDrivers}
            isCustomers={isCustomers}
            setIsCustomers={setIsCustomers}
            isBrokers={isBrokers}
            setIsBrokers={setIsBrokers}
            isDriverManagers={isDriverManagers}
            setIsDriverManagers={setIsDriverManagers}
            isShippingCompanies={isShippingCompanies}
            setIsShippingCompanies={setIsShippingCompanies}
            isTransportCompanies={isTransportCompanies}
            setIsTransportCompanies={setIsTransportCompanies}
            isClearingForwardingAgent={isClearingForwardingAgent}
            setIsClearingForwardingAgent={setIsClearingForwardingAgent}
            isSpecializedShipment={isSpecializedShipment}
            setIsSpecializedShipment={setIsSpecializedShipment}
            isEmployee={isEmployee}
            setIsEmployee={setIsEmployee}
            isWallet={isWallet}
            setIsWallet={setIsWallet}
            isWebsite={isWebsite}
            setIsWebsite={setIsWebsite}
            isLoadboard={isLoadboard}
            setIsLoadboard={setIsLoadboard}
            isBlog={isBlog}
            setIsBlog={setIsBlog}
            handleIsAgents={handleIsAgents}
            handleIsDrivers={handleIsDrivers}
            handleIsCustomers={handleIsCustomers}
            handleIsBrokers={handleIsBrokers}
            handleIsDriverManagers={handleIsDriverManagers}
            handleIsShippingCompanies={handleIsShippingCompanies}
            handleIsTransportCompanies={handleIsTransportCompanies}
            handleIsClearingForwardingAgent={handleIsClearingForwardingAgent}
            handleIsSpecializedShipment={handleIsSpecializedShipment}
            handleIsEmployee={handleIsEmployee}
            handleIsWallet={handleIsWallet}
            handleIsWebsite={handleIsWebsite}
            handleIsLoadboard={handleIsLoadboard}
            handleIsBlog={handleIsBlog}
            adminAgentData={props.adminAgentData}
            agentList={agentList}
            setAgentList={setAgentList}
            handleAgentList={handleAgentList}
            editAgentForm={props.editAgentForm}
            setEditAgentForm={props.setEditAgentForm}
            websiteData={props.websiteData}
            setAdminData={props.setAdminData}
            setAdminAgentData={props.setAdminAgentData}
            driverList={driverList}
            setDriverList={setDriverList}
            handleDriverList={handleDriverList}
            customerList={customerList}
            setCustomerList={setCustomerList}
            handleCustomerList={handleCustomerList}
            brokerList={brokerList}
            setBrokerList={setBrokerList}
            handleBrokerList={handleBrokerList}
            isOrders={isOrders}
            setIsOrders={setIsOrders}
            handleIsOrders={handleIsOrders}
            isTransactions={isTransactions}
            setIsTransactions={setIsTransactions}
            handleIsTransactions={handleIsTransactions}
            isAdmins={isAdmins}
            setIsAdmins={setIsAdmins}
            handleIsAdmins={handleIsAdmins}
            isPriceSettings={isPriceSettings}
            setIsPriceSettings={setIsPriceSettings}
            handleIsPriceSettings={handleIsPriceSettings}
            addAdmins={addAdmins}
            setAddAdmins={setAddAdmins}
            adminFullInformation={adminFullInformation}
            setAdminFullInformation={setAdminFullInformation}
            editAdmins={editAdmins}
            setEditAdmins={setEditAdmins}
            resetPassword={resetPassword}
            setResetPasswword={setResetPasswword}
            addsize={addsize}
            setAddSize={setAddSize}
            editRow={editRow}
            setEditRow={setEditRow}
            deleteColumn={deleteColumn}
            setDeleteColumn={setDeleteColumn}
            addDistance={addDistance}
            setAddDistance={setAddDistance}
            addMiles={addMiles}
            setAddMiles={setAddMiles}
            addValue={addValue}
            setAddValue={setAddValue}
            generalEdit={generalEdit}
            setGeneralEdit={setGeneralEdit}
            isStatistics={isStatistics}
            setIsStatistics={setIsStatistics}
            handleIsStatistics={handleIsStatistics}
          />
        </>
      ) : (
        <>
          <AdminLoginLayout
            setIsAdmin={props.setIsAdmin}
            adminData={props.adminData}
            setAdminData={props.setAdminData}
            useEmail={props.useEmail}
            setUseEmail={props.setUseEmail}
            usePhone={props.usePhone}
            setUsePhone={props.setUsePhone}
          />
        </>
      )}
    </>
  );
}
