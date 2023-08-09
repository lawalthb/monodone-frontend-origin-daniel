import CustomerTopNav from "./CustomerTopNav";
import styles from "./customer.module.scss";

export default function CustomerLayout({
  children,
  handleIsPackage,
  handleIsBulkDelivery,
  handleIsCarClearing,
  handleIsContainerShipment,
  handleIsSpecializedShipment,
  handleCarClearingOption,
  handleContainerShipment,
  handleSpecializedShipment,
  handleCustomerProfile,
  customerProfile
}) {
  return (
    <div
      style={{
        background: "white",
        padding: "0px",
      }}
    >
      <CustomerTopNav
        handleIsPackage={handleIsPackage}
        handleIsBulkDelivery={handleIsBulkDelivery}
        handleIsCarClearing={handleIsCarClearing}
        handleIsContainerShipment={handleIsContainerShipment}
        handleIsSpecializedShipment={handleIsSpecializedShipment}
        handleCarClearingOption={handleCarClearingOption}
        handleContainerShipment={handleContainerShipment}
        handleSpecializedShipment={handleSpecializedShipment}
        handleCustomerProfile={handleCustomerProfile}
        customerProfile={customerProfile}
      />
      <div className={`position-relative ms-0 me-0 p-0  ${""}`}>
        <main className={`px-4 overflow-auto ${styles.main}`}>{children}</main>
      </div>
    </div>
  );
}
