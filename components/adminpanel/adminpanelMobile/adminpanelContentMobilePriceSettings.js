import { useState } from "react";
import MobileHeader from "./commonComp/header";
import PriceSettingsHeadingMobile from "./commonComp/priceSettingsHeadingMobile";
import PriceSettingsMobileCaption from "./commonComp/priceSettingsMobileCaption";
import PriceSettingsContentMobile from "./commonComp/priceSettingsContentMobile";
import AddSizeModal from "../common/addSizeModal";
import EditRowModal from "../common/editRowModal";
import DeleteColumnModal from "../common/deleteColumnModal";
import AddDistanceModal from "../common/addDistanceModal";
import AddMilesModal from "../common/addMilesModal";
import AddValueModal from "../common/addValueModal";
import GeneralEditModal from "../common/generalEditModal";

export default function AdminpanelContentMobilePriceSettings(props) {
    const [isPackages] = useState(true)
    const [isDocuments] = useState(true)
    const [isBulkDelivery] = useState(true)
    const [isCarClearing] = useState(true)
    const [isContainerClearing] = useState(true)
    const [isCarDelivery] = useState(true)
    const [isContainerDelivery] = useState(true)
    return (
        <>
            <MobileHeader
                caption={"Price Settings"}
                isPriceSettings={props.isPriceSettings}
            />
            <hr style={{
                marginTop: "-0.01px"
            }} />
            <PriceSettingsMobileCaption
                isPackages={isPackages}
                imgSrc="/img/packages.png"
                caption="Packages"
                header1="Add size"
                header2="Add distance"
                setAddSize={props.setAddSize}
                setAddDistance={props.setAddDistance}
            />
            <PriceSettingsHeadingMobile
                isPackages={isPackages}
                header1="Distance"
                header2="W(lbs)"
                header3="S(cm)"
                header4="Price"
            />
            <PriceSettingsContentMobile
                isPackages={isPackages}
                setEditRow={props.setEditRow}
                setDeleteColumn={props.setDeleteColumn}
                setGeneralEdit={props.setGeneralEdit}
            />
            <PriceSettingsMobileCaption
                isDocuments={isDocuments}
                imgSrc="/img/documentsettings.png"
                caption="Documents"
                header1="Add size"
                header2="Add distance"
                setAddSize={props.setAddSize}
                setAddDistance={props.setAddDistance}
            />
            <PriceSettingsHeadingMobile
                isPackages={isDocuments}
                header1="Distance"
                header2="Type"
                header3="S(cm)"
                header4="Price"
            />
            <PriceSettingsContentMobile
                isDocuments={isDocuments}
                setEditRow={props.setEditRow}
                setDeleteColumn={props.setDeleteColumn}
                setGeneralEdit={props.setGeneralEdit}
            />
            <PriceSettingsMobileCaption
                isBulkDelivery={isBulkDelivery}
                imgSrc="/img/bulkdeliverysettings.png"
                caption="Bulk Delivery"
                header1="Add size"
                header2="Add distance"
                header3="Add security fee"
                setAddSize={props.setAddSize}
                setAddDistance={props.setAddDistance}
            />
            <PriceSettingsHeadingMobile
                isBulkDelivery={isBulkDelivery}
                header1="Distance"
                header2="W(lbs)"
                header3="S(cm)"
                header4="Price"
            />
            <PriceSettingsContentMobile
                isBulkDelivery={isBulkDelivery}
                setEditRow={props.setEditRow}
                setDeleteColumn={props.setDeleteColumn}
                setGeneralEdit={props.setGeneralEdit}
            />
            <PriceSettingsMobileCaption
                isCarClearing={isCarClearing}
                imgSrc="/img/bulkdeliverysettings.png"
                caption="Car Clearing"
                header1="Add value"
                header2="Add year"
                setAddValue={props.setAddValue}
            />
            <PriceSettingsHeadingMobile
                isCarClearing={isCarClearing}
                header1="Car value"
                header2="Year"
                header3="Price"
            />
            <PriceSettingsContentMobile
                isCarClearing={isCarClearing}
                setEditRow={props.setEditRow}
                setDeleteColumn={props.setDeleteColumn}
                setGeneralEdit={props.setGeneralEdit}
            />
            <PriceSettingsMobileCaption
                isContainerClearing={isContainerClearing}
                imgSrc="/img/bulkdeliverysettings.png"
                caption="Container Clearing"
                header1="Add value"
                header2="Add year"
                setAddValue={props.setAddValue}
            />
            <PriceSettingsHeadingMobile
                isContainerClearing={isContainerClearing}
                header1="C value"
                header2="Car year"
                header3="No. of cars"
                header4="Price"
            />
            <PriceSettingsContentMobile
                isContainerClearing={isContainerClearing}
                setEditRow={props.setEditRow}
                setDeleteColumn={props.setDeleteColumn}
                setGeneralEdit={props.setGeneralEdit}
            />
            <PriceSettingsMobileCaption
                isCarDelivery={isCarDelivery}
                imgSrc="/img/bulkdeliverysettings.png"
                caption="Car Delivery"
                header1="Add state"
                header2="Add miles"
                setAddMiles={props.setAddMiles}
            />
            <PriceSettingsHeadingMobile
                isCarDelivery={isCarDelivery}
                header1="Miles"
                header2="S fee"
                header3="States"
                header4="Price"
            />
            <PriceSettingsContentMobile
                isCarDelivery={isCarDelivery}
                setEditRow={props.setEditRow}
                setDeleteColumn={props.setDeleteColumn}
                setGeneralEdit={props.setGeneralEdit}
            />
            <PriceSettingsMobileCaption
                isContainerDelivery={isContainerDelivery}
                imgSrc="/img/bulkdeliverysettings.png"
                caption="Container Delivery"
                header1="Add state"
                header2="Add miles"
                setAddMiles={props.setAddMiles}
            />
            <PriceSettingsHeadingMobile
                isContainerDelivery={isContainerDelivery}
                header1="Miles"
                header2="S fee"
                header3="States"
                header4="Price"
            />
            <PriceSettingsContentMobile
                isContainerDelivery={isContainerDelivery}
                setEditRow={props.setEditRow}
                setDeleteColumn={props.setDeleteColumn}
                setGeneralEdit={props.setGeneralEdit}
            />
            <AddSizeModal
                addsize={props.addsize}
                setAddSize={props.setAddSize}
            />
            <EditRowModal
                editRow={props.editRow}
                setEditRow={props.setEditRow}
            />
            <DeleteColumnModal
                deleteColumn={props.deleteColumn}
                setDeleteColumn={props.setDeleteColumn}
            />
            <AddDistanceModal
                addDistance={props.addDistance}
                setAddDistance={props.setAddDistance}
            />
            <AddMilesModal
                addMiles={props.addMiles}
                setAddMiles={props.setAddMiles}
            />
            <AddValueModal
                addValue={props.addValue}
                setAddValue={props.setAddValue}
            />
            <GeneralEditModal
                generalEdit={props.generalEdit}
                setGeneralEdit={props.setGeneralEdit}
                caption={"Edit distance"}
                firstData="Min (kg)"
                secondData="Max (kg)"
                thirdData="Available Values:"
                forthData="20, 40, 120, 200, 500"
                fifthData=" Available values:"
                sixthData="20, 40, 120, 200"
                btnData="Save"
            />
        </>
    )
}