import { useState } from 'react';
import AdminpanelContentContainerMainSection from './adminpanelContentContainerMainSection';
import AdminpanelContentContainerSidebar from './adminpanelContentContainerSidebar';

export default function AdminpanelContentContainer(props) {
  const [logout, setLogout] = useState(false);
  return (
    <>
      <div
        style={{
          display: 'flex',
          width: '100%',
          // height: '940px'
          //   height: '100%',
          flex: 1,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: '21.55%',
            // maxWidth: '420px',
            background: 'linear-gradient(90deg, #00902F 0%, #7CC427 99.69%)',
            // height: '430vh',
            height: '100%',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.06)',
          }}
        >
          <AdminpanelContentContainerSidebar
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
            isOrders={props.isOrders}
            setIsOrders={props.setIsOrders}
            handleIsOrders={props.handleIsOrders}
            isTransactions={props.isTransactions}
            setIsTransactions={props.setIsTransactions}
            handleIsTransactions={props.handleIsTransactions}
            logout={logout}
            setLogout={setLogout}
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
        </div>
        <div
          style={{
            width: '78%',
            height: '100%',
            padding: '30px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto',
          }}
        >
          <AdminpanelContentContainerMainSection
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
            setBackdrop={props.setBackdrop}
            backdrop={props.backdrop}
            isAgentManagement={props.isAgentManagement}
            setIsAgentManagement={props.setIsAgentManagement}
            isAgentRequest={props.isAgentRequest}
            setIsAgentRequest={props.setIsAgentRequest}
            handleIsAgentManagement={props.handleIsAgentManagement}
            handleIsAgentRequest={props.handleIsAgentRequest}
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
            logout={logout}
            setLogout={setLogout}
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
  );
}
