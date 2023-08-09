import { useState } from "react";
import GeneralModal from "./modal";
import ParcelComp from "./parcelComp";

export default function Parcel(props) {
    const [amount, setAmount] = useState(0);
    const [total, setTotal] = useState("");

    const calculateTotal = () => {
        setTotal(parseInt(amount) + 8);
    };

    return (
        <GeneralModal
            size="lg"
            show={props.parcelItem}
            onHide={() => props.setParcelItem(false)}
            action={props.action}
        >
            <ParcelComp
                handlePackageOption={props.handlePackageOption}
                handleBulkOption={props.handleBulkOption}
                packageOption={props.packageOption}
                bulkOption={props.bulkOption}
                setBulkOption={props.setBulkOption}
                setPackageOption={props.setPackageOption}
                setPackageData={props.setPackageData}
                handleDate={props.handleDate}
                chosenDate={props.chosenDate}
                setBulkOptionData={props.setBulkOptionData}
                setParcelItem={props.setParcelItem}
                parcelData={props.parcelData}
                packageData={props.packageData}
                deliverTo={props.deliverTo}
                deliverFrom={props.deliverFrom}
                loading={props.loading}
                setLoading={props.setLoading}
                setLoadingModal={props.setLoadingModal}
                setCustomerData={props.setCustomerData}
                customerData={props.customerData}
                setIsNoParcel={props.setIsNoParcel}
                setIsCustomerDash={props.setIsCustomerDash}
            />
        </GeneralModal>
    )
}