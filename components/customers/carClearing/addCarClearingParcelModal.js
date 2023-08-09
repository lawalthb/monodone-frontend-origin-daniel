import { useState, useEffect } from "react";
import GeneralModal from "../modal";
import PackageOption from "../packageOption";
import BulkOption from "../bulkOption";
import CarClearing from "./carClearingComp";
import ShipmentHeaderDesktop from "../shipmentHeaderDesktop";
import ShipmentHeaderMobile from "../shipmentHeaderMobile";
import ContainerShipment from "../containerShipment/containerShipment";
import SpecializedShipmentDesktop from "../specializedShipment/specializedShipmentDesktop";
import SpecializedShipmentMobile from "../specializedShipment/specializedShipmentMobile";
import Media from "@/utils/media";

const initialState = {
    departureCountry: "",
    destinationCountry: "",
    carType: "",
    carModel: "",
    uploadDoc: "",
    carValue: "",
    yearOfCar: "",
    comment: "",
    fullName: "",
    phoneNumber: "",
    zipCode: "",
    city: "",
    street: ""
}

export default function AddCarClearingParcelModal(props) {
    const { mobile, tabletAndDesktop} = Media();
    return (
        <>
            {mobile && (
                <GeneralModal
                    size="sm"
                    show={props.addCarClearingParcelModal}
                    onHide={() => props.setCarClearingParcelModal(false)}
                >
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <ShipmentHeaderMobile
                            packageOption={props.packageOption}
                            handlePackageOption={props.handlePackageOption}
                            bulkOption={props.bulkOption}
                            handleBulkOption={props.handleBulkOption}
                            specializedShipment={props.specializedShipment}
                            handleSpecializedShipment={props.handleSpecializedShipment}
                            carClearingOption={props.carClearingOption}
                            handleCarClearingOption={props.handleCarClearingOption}
                            containerShipment={props.containerShipment}
                            handleContainerShipment={props.handleContainerShipment}
                        />
                        {props.packageOption && (
                            <PackageOption
                                setPackageData={props.setPackageData}
                                setBulkOption={props.setBulkOption}
                                setPackageOption={props.setPackageOption}
                            />
                        )}
                        {props.bulkOption && (
                            <BulkOption
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
                        )}
                        {props.carClearingOption && (
                            <CarClearing
                                handleClearingCost={props.handleClearingCost}
                                carClearingDetails={props.carClearingDetails}
                                setCarClearingDetails={props.setCarClearingDetails}
                                carClearingError={props.carClearingError}
                                setCarClearingParcelModal={props.setCarClearingParcelModal}
                                uploadDocument={props.uploadDocument}
                                setUploadDocument={props.setUploadDocument}
                                isChecked={props.isChecked}
                                setIsChecked={props.setIsChecked}
                                handleOnClick={props.handleOnClick}
                                handleUploadContainerShipment={props.handleUploadContainerShipment}
                            />
                        )}
                        {props.containerShipment && (
                            <ContainerShipment
                                containerShipmentData={props.containerShipmentData}
                                setContainerShipmentData={props.setContainerShipmentData}
                                handleOnClick={props.handleOnClick}
                                isChecked={props.isChecked}
                                handleUploadContainerShipment={props.handleUploadContainerShipment}
                                setIsContainerShipmentUpload={props.setIsContainerShipmentUpload}
                            />
                        )}
                        {props.specializedShipment && (
                            <SpecializedShipmentMobile
                                specializedData={props.specializedData}
                                setSpecializedData={props.setSpecializedData}
                                handleSpecializedShipRequest={props.handleSpecializedShipRequest}
                            />
                        )}
                    </div>
                </GeneralModal>
            )}
            {tabletAndDesktop && (
                <GeneralModal
                    size="lg"
                    show={props.addCarClearingParcelModal}
                    onHide={() => props.setCarClearingParcelModal(false)}
                >
                    <ShipmentHeaderDesktop
                        packageOption={props.packageOption}
                        handlePackageOption={props.handlePackageOption}
                        bulkOption={props.bulkOption}
                        handleBulkOption={props.handleBulkOption}
                        carClearingOption={props.carClearingOption}
                        handleCarClearingOption={props.handleCarClearingOption}
                        containerShipment={props.containerShipment}
                        handleContainerShipment={props.handleContainerShipment}
                        specializedShipment={props.specializedShipment}
                        handleSpecializedShipment={props.handleSpecializedShipment}
                    />
                    {props.packageOption && (
                        <PackageOption
                            setPackageData={props.setPackageData}
                            setBulkOption={props.setBulkOption}
                            setPackageOption={props.setPackageOption}
                        />
                    )}
                    {props.bulkOption && (
                        <BulkOption
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
                    )}
                    {props.carClearingOption && (
                        <CarClearing
                            handleClearingCost={props.handleClearingCost}
                            carClearingDetails={props.carClearingDetails}
                            setCarClearingDetails={props.setCarClearingDetails}
                            carClearingError={props.carClearingError}
                            setCarClearingParcelModal={props.setCarClearingParcelModal}
                            uploadDocument={props.uploadDocument}
                            setUploadDocument={props.setUploadDocument}
                            isChecked={props.isChecked}
                            setIsChecked={props.setIsChecked}
                            handleOnClick={props.handleOnClick}
                            handleUploadContainerShipment={props.handleUploadContainerShipment}
                            setIsCarClearingParcel={props.setIsCarClearingParcel}
                        />
                    )}
                    {props.containerShipment && (
                        <ContainerShipment
                            containerShipmentData={props.containerShipmentData}
                            setContainerShipmentData={props.setContainerShipmentData}
                            handleOnClick={props.handleOnClick}
                            isChecked={props.isChecked}
                            handleUploadContainerShipment={props.handleUploadContainerShipment}
                            setIsContainerShipmentUpload={props.setIsContainerShipmentUpload}
                        />
                    )}
                    {props.specializedShipment && (
                        <SpecializedShipmentDesktop
                            specializedData={props.specializedData}
                            setSpecializedData={props.setSpecializedData}
                            handleSpecializedShipRequest={props.handleSpecializedShipRequest}
                        />
                    )}
                </GeneralModal>
            )}
        </>
    )
}