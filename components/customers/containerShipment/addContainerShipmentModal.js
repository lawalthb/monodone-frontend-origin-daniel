import BulkOption from "../bulkOption";
import CarClearing from "../carClearing/carClearingComp";
import GeneralModal from "../modal";
import PackageOption from "../packageOption";
import ShipmentHeaderDesktop from "../shipmentHeaderDesktop";
import ShipmentHeaderMobile from "../shipmentHeaderMobile";
import SpecializedShipmentDesktop from "../specializedShipment/specializedShipmentDesktop";
import SpecializedShipmentMobile from "../specializedShipment/specializedShipmentMobile";
import ContainerShipment from "./containerShipment";
import Media from "@/utils/media";

export default function AddContainerShipmentModal(props) {
    const { mobile, tabletAndDesktop} = Media();

    return (
        <>
            {mobile && (
                <GeneralModal
                    size="sm"
                    show={props.addContainerShipmentModal}
                    onHide={() => props.setAddContainerShipmentModal(false)}
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
                                handleContainerClearingCost={props.handleContainerClearingCost}
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
            )
            }
            {tabletAndDesktop && (
                <GeneralModal
                    size="lg"
                    show={props.addContainerShipmentModal}
                    onHide={() => props.setAddContainerShipmentModal(false)}
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
                            handleContainerClearingCost={props.handleContainerClearingCost}
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
            )
            }
        </>
    )
}