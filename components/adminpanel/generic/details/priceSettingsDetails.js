import { useState } from "react";
import PriceSettingsPackageComp from "./priceSettingsPackageComp";
import PriceSettingsHeading from "./priceSettingsHeading";
import PriceSettingsCaption from "./priceSettingsCaption";
import PriceSettingsContainerHeadings from "./priceSettingsContainerHeading";
import AddSizeModal from "../../common/addSizeModal";
import EditRowModal from "../../common/editRowModal";
import DeleteColumnModal from "../../common/deleteColumnModal";
import AddDistanceModal from "../../common/addDistanceModal";
import AddMilesModal from "../../common/addMilesModal";
import AddValueModal from "../../common/addValueModal";
import GeneralEditModal from "../../common/generalEditModal";

export default function PriceSettingsDetails(props) {
    const [isDocuments] = useState(true)
    const [isPackages] = useState(true)
    const [isBulkDelivery] = useState(true)
    const [isCarClearing] = useState(true)
    const [isContainerClearing] = useState(true)
    const [isCarDelivery] = useState(true)
    const [isContainerDelivery] = useState(true)
    return (
        <>
            <PriceSettingsCaption
                imgSrc="/img/packages.png"
                caption="Packages"
                isPackages={isPackages}
                setAddSize={props.setAddSize}
                setAddDistance={props.setAddDistance}
            />
            <div style={{
                display: 'flex',
                flexDirection: "column",
                width: '100%',
                marginTop: "10px",
                padding: '10px',
                background: 'white',
                border: "1px solid #E7E7E7",
                borderRadius: '5px'
            }}>
                <PriceSettingsHeading
                    isDocuments={isDocuments}
                    isPackages={isPackages}
                    isBulkDelivery={isBulkDelivery}
                    setGeneralEdit={props.setGeneralEdit}
                />
                {new Array(4).fill(
                    <>
                        <PriceSettingsPackageComp
                            isPackages={isPackages}
                            setEditRow={props.setEditRow}
                            setDeleteColumn={props.setDeleteColumn}
                        />
                    </>
                ).map((data) => data)}
            </div>
            <div style={{
                marginTop: '30px'
            }}>
                <PriceSettingsCaption
                    imgSrc="/img/documentsettings.png"
                    caption="Documents"
                    isDocuments={isDocuments}
                    setAddSize={props.setAddSize}
                    setAddDistance={props.setAddDistance}
                />
                <div style={{
                    display: 'flex',
                    flexDirection: "column",
                    width: '100%',
                    marginTop: "10px",
                    padding: '10px',
                    background: 'white',
                    border: "1px solid #E7E7E7",
                    borderRadius: '5px'
                }}>
                    <PriceSettingsHeading
                        isDocuments={isDocuments}
                        isPackages={isPackages}
                        isBulkDelivery={isBulkDelivery}
                        setGeneralEdit={props.setGeneralEdit}
                    />
                    {new Array(3).fill(
                        <>
                            <PriceSettingsPackageComp
                                isDocuments={isDocuments}
                                setEditRow={props.setEditRow}
                                setDeleteColumn={props.setDeleteColumn}
                            />
                        </>
                    ).map((data) => data)}
                </div>
            </div>
            <div style={{
                marginTop: '30px'
            }}>
                <PriceSettingsCaption
                    imgSrc="/img/bulkdeliverysettings.png"
                    caption="Bulk Delivery"
                    isBulkDelivery={isBulkDelivery}
                    setAddSize={props.setAddSize}
                    setAddDistance={props.setAddDistance}
                />
                <div style={{
                    display: 'flex',
                    flexDirection: "column",
                    width: '100%',
                    marginTop: "10px",
                    padding: '10px',
                    background: 'white',
                    border: "1px solid #E7E7E7",
                    borderRadius: '5px'
                }}>
                    <PriceSettingsHeading
                        isDocuments={isDocuments}
                        isPackages={isPackages}
                        isBulkDelivery={isBulkDelivery}
                        setGeneralEdit={props.setGeneralEdit}
                    />
                    {new Array(4).fill(
                        <>
                            <PriceSettingsPackageComp
                                isBulkDelivery={isBulkDelivery}
                                setEditRow={props.setEditRow}
                                setDeleteColumn={props.setDeleteColumn}
                            />
                        </>
                    ).map((data) => data)}
                </div>
            </div>
            <div style={{
                marginTop: '30px'
            }}>
                <PriceSettingsCaption
                    imgSrc="/img/bulkdeliverysettings.png"
                    caption="Car Clearing"
                    isCarClearing={isCarClearing}
                    setAddValue={props.setAddValue}
                />
                <div style={{
                    display: 'flex',
                    flexDirection: "column",
                    width: '100%',
                    marginTop: "10px",
                    padding: '10px',
                    background: 'white',
                    border: "1px solid #E7E7E7",
                    borderRadius: '5px'
                }}>
                    <PriceSettingsHeading
                        isCarClearing={isCarClearing}
                        isContainerClearing={isContainerClearing}
                        setGeneralEdit={props.setGeneralEdit}
                    />
                    {new Array(4).fill(
                        <>
                            <PriceSettingsPackageComp
                                isCarClearing={isCarClearing}
                                setEditRow={props.setEditRow}
                                setDeleteColumn={props.setDeleteColumn}
                            />
                        </>
                    ).map((data) => data)}
                </div>
            </div>
            <div style={{
                marginTop: '30px'
            }}>
                <PriceSettingsCaption
                    imgSrc="/img/bulkdeliverysettings.png"
                    caption="Container Clearing"
                    isContainerClearing={isContainerClearing}
                    setAddValue={props.setAddValue}
                />
                <div style={{
                    display: 'flex',
                    flexDirection: "column",
                    width: '100%',
                    marginTop: "10px",
                    padding: '10px',
                    background: 'white',
                    border: "1px solid #E7E7E7",
                    borderRadius: '5px'
                }}>
                    <PriceSettingsContainerHeadings
                        firstHeader="Container Value"
                        secondHeader=""
                        thirdHeader="$3.4m"
                        fourthHeader="$3.4-5.8m"
                        fifthHeader="$5.8-10m"
                        sixthHeader="$10-30m"
                        seventHeader="Year of the car"
                        eightHeader=""
                        ninthHeader="2013-2014"
                        tenthHeader="2014-2015"
                        eleventhHeader="2015-2016"
                        twelftHeader="2016-Newer year"
                        isCarClearing={isCarClearing}
                        isContainerClearing={isContainerClearing}
                        setGeneralEdit={props.setGeneralEdit}
                    />
                    {new Array(4).fill(
                        <>
                            <PriceSettingsPackageComp
                                isContainerClearing={isContainerClearing}
                                setEditRow={props.setEditRow}
                                setDeleteColumn={props.setDeleteColumn}
                            />
                        </>
                    ).map((data) => data)}
                </div>
            </div>
            <div style={{
                marginTop: '30px'
            }}>
                <PriceSettingsCaption
                    imgSrc="/img/bulkdeliverysettings.png"
                    caption="Car Delivery"
                    isCarDelivery={isCarDelivery}
                    setAddMiles={props.setAddMiles}
                />
                <PriceSettingsContainerHeadings
                    firstHeader="Miles"
                    secondHeader=""
                    thirdHeader="to 20 mil"
                    fourthHeader="20 - 100 mil"
                    fifthHeader="20 - 1000 mils"
                    sixthHeader="20 - 10,000"
                    seventHeader="Security Fee"
                    eightHeader=""
                    ninthHeader="East"
                    tenthHeader="West"
                    eleventhHeader="North (Central/East)"
                    twelftHeader="South"
                    isCarDelivery={isCarDelivery}
                    setGeneralEdit={props.setGeneralEdit}
                />
                {new Array(4).fill(
                    <>
                        <PriceSettingsPackageComp
                            isCarDelivery={isCarDelivery}
                            setEditRow={props.setEditRow}
                            setDeleteColumn={props.setDeleteColumn}
                        />
                    </>
                ).map((data) => data)}
            </div>
            <div style={{
                marginTop: '30px'
            }}>
                <PriceSettingsCaption
                    imgSrc="/img/bulkdeliverysettings.png"
                    caption="Container Delivery"
                    isContainerDelivery={isContainerDelivery}
                    setAddMiles={props.setAddMiles}
                />
                <PriceSettingsContainerHeadings
                    firstHeader="Miles"
                    secondHeader=""
                    thirdHeader="to 20 mil"
                    fourthHeader="20 - 100 mil"
                    fifthHeader="20 - 1000 mils"
                    sixthHeader="20 - 10,000"
                    seventHeader="Security Fee"
                    eightHeader=""
                    ninthHeader="East"
                    tenthHeader="West"
                    eleventhHeader="North (Central/East)"
                    twelftHeader="South"
                    isContainerDelivery={isContainerDelivery}
                    setGeneralEdit={props.setGeneralEdit}
                />
                {new Array(4).fill(
                    <>
                        <PriceSettingsPackageComp
                            isContainerDelivery={isContainerDelivery}
                            setEditRow={props.setEditRow}
                            setDeleteColumn={props.setDeleteColumn}
                        />
                    </>
                ).map((data) => data)}
            </div>
            <AddSizeModal
                style={{
                    marginLeft: "8%",
                    marginTop: '3%'
                }}
                addsize={props.addsize}
                setAddSize={props.setAddSize}
            />
            <EditRowModal
                editRow={props.editRow}
                setEditRow={props.setEditRow}
            />
            <DeleteColumnModal
                style={{
                    marginLeft: "8%",
                    marginTop: '3%'
                }}
                deleteColumn={props.deleteColumn}
                setDeleteColumn={props.setDeleteColumn}
            />
            <AddDistanceModal
                style={{
                    marginLeft: "8%",
                    marginTop: '3%'
                }}
                addDistance={props.addDistance}
                setAddDistance={props.setAddDistance}
            />
            <AddMilesModal
                style={{
                    marginLeft: "8%",
                    marginTop: '3%'
                }}
                addMiles={props.addMiles}
                setAddMiles={props.setAddMiles}
            />
            <AddValueModal
                style={{
                    marginLeft: "8%",
                    marginTop: '3%'
                }}
                addValue={props.addValue}
                setAddValue={props.setAddValue}
            />
            <GeneralEditModal
                generalEdit={props.generalEdit}
                setGeneralEdit={props.setGeneralEdit}
                caption={(isPackages || isDocuments || isBulkDelivery) ?
                    "Edit distance" : (isCarDelivery ||
                        isContainerDelivery) ? "Edit Miles" : undefined}
                firstData={(isPackages || isDocuments || isBulkDelivery)
                    ? "Min (kg)" : undefined}
                secondData={(isPackages || isDocuments || isBulkDelivery)
                    ? "Max (kg)" : undefined}
                thirdData={(isPackages || isDocuments || isBulkDelivery)
                    ? "Available Values:" : undefined}
                forthData={(isPackages || isDocuments || isBulkDelivery)
                    ? "20, 40, 120, 200, 500" : undefined}
                fifthData={(isPackages || isDocuments || isBulkDelivery)
                    ? "Available values:" : undefined}
                sixthData={(isPackages || isDocuments || isBulkDelivery)
                    ? "20, 40, 120, 200" : undefined}
                btnData="Save"
            />
        </>
    )
}