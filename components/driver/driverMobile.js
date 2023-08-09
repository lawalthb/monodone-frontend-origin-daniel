import DriverContentDesktop from './driverContentDesktop';

export default function DriverMobile(props) {
  return (
    <>
      <DriverContentDesktop
        address1="21 Alex Ekwueme Way, Jabii"
        address2="Kaduna Name City"
        date1="14 Jul 2022"
        date2="16 Jul 2022"
        amount="₦ 999"
        distance="12 km"
        description="Package description "
        setDriverDetailsModal={props.setDriverDetailsModal}
        refreshData={props.refreshData}
      />
      <DriverContentDesktop
        address1="21 Alex Ekwueme Way, Jabi"
        address2="Kaduna Name City"
        date1="14 Jul 2022"
        date2="16 Jul 2022"
        amount="₦ 999"
        distance="12 km"
        description="Package description "
        setDriverDetailsModal={props.setDriverDetailsModal}
        refreshData={props.refreshData}
      />
      <DriverContentDesktop
        address1="21 Alex Ekwueme Way, Jaabi"
        address2="Kaduna Name City"
        date1="14 Jul 2022"
        date2="16 Jul 2022"
        amount="₦ 999"
        distance="12 km"
        description="Package description "
        setDriverDetailsModal={props.setDriverDetailsModal}
        refreshData={props.refreshData}
      />
      <DriverContentDesktop
        address1="21 Alex Ekwueme Way1, Jaabi"
        address2="Kaduna Name City"
        date1="14 Jul 2022"
        date2="16 Jul 2022"
        amount="₦ 999"
        distance="12 km"
        description="Package description"
        isRefresh={true}
        extraAmount="+ ₦ 35"
        bulk="BULK"
        setDriverDetailsModal={props.setDriverDetailsModal}
        refreshData={props.refreshData}
      />
      <DriverContentDesktop
        address1="21 Alex Ekwueme Way11, Jaabi"
        address2="Kaduna Name City"
        date1="14 Jul 2022"
        date2="16 Jul 2022"
        amount="₦ 999"
        distance="12 km"
        description="Package description"
        isInfo={true}
        extraAmount="+ ₦ 32"
        bulk="BULK"
        setDriverDetailsModal={props.setDriverDetailsModal}
        refreshData={props.refreshData}
      />
    </>
  );
}
