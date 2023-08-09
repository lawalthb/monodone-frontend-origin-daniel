import { useState } from 'react';
import AdminpanelContentContainer from './adminpanelContentContainer';
import AdminpanelContentTopNav from './adminpanelContentTopNav';

export default function AdminpanelContent(props) {
  const [backdrop, setBackdrop] = useState(false);
  const [isAgentManagement, setIsAgentManagement] = useState(false);
  const [isAgentRequest, setIsAgentRequest] = useState(false);

  const handleIsAgentManagement = () => {
    setIsAgentManagement(true);
    setIsAgentRequest(false);
  };
  const handleIsAgentRequest = () => {
    setIsAgentRequest(true);
    setIsAgentManagement(false);
  };
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: 0,
          width: '100%',
          //   height: '870px',
          height: '100vh',
        }}
      >
        <AdminpanelContentTopNav
          backdrop={backdrop}
          setBackdrop={setBackdrop}
          isAgentManagement={isAgentManagement}
          setIsAgentManagement={setIsAgentManagement}
          isAgentRequest={isAgentRequest}
          setIsAgentRequest={setIsAgentRequest}
          handleIsAgentManagement={handleIsAgentManagement}
          handleIsAgentRequest={handleIsAgentRequest}
          agentList={props.agentList}
          setAgentList={props.setAgentList}
          handleAgentList={props.handleAgentList}
          agentNos={props.agentNos}
          setAgentNos={props.setAgentNos}
          weights={props.weights}
          setWeights={props.setWeights}
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
          isBlog={props.isBlog}
          setIsBlog={props.setIsBlog}
        />
        <AdminpanelContentContainer
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
          backdrop={backdrop}
          setBackdrop={setBackdrop}
          isAgentManagement={isAgentManagement}
          setIsAgentManagement={setIsAgentManagement}
          isAgentRequest={isAgentRequest}
          setIsAgentRequest={setIsAgentRequest}
          handleIsAgentManagement={handleIsAgentManagement}
          handleIsAgentRequest={handleIsAgentRequest}
          agentList={props.agentList}
          setAgentList={props.setAgentList}
          handleAgentList={props.handleAgentList}
          editAgentForm={props.editAgentForm}
          setEditAgentForm={props.setEditAgentForm}
          websiteData={props.websiteData}
          setAdminAgentData={props.setAdminAgentData}
          driverList={props.driverList}
          setDriverList={props.setDriverList}
          handleDriverList={props.handleDriverList}
          customerList={props.customerList}
          setCustomerList={props.setCustomerList}
          handleCustomerList={props.handleCustomerList}
          brokerList={props.brokerList}
          setBrokerList={props.setBrokerList}
          handleBrokerList={props.handleBrokerList}
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
    </>
  );
}
