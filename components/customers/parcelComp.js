import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import styles from './customerdashboard.module.css'
import BulkOption from "./bulkOption";
import PackageOption from "./packageOption";

export default function ParcelComp(props) {
    useEffect(() => {
        props.setPackageOption(true)
    }, [props])

    return (
        <Modal.Body style={{ marginLeft: "-20px" }}>
            <div className={`p-3`}>
                <div className="row mt-1 mb-5">
                    <span
                        style={{ color: "#151515", fontSize: "12px" }}
                        className="text-dark text-uppercase"
                    >
                        Options of parcel:
                    </span>

                    <div className="mt-2" style={{ display: "flex", marginLeft: "-30px" }}>
                        <ul style={{ display: "flex" }}>
                            <li style={{ marginTop: "-8px" }}><input
                                className={props.packageOption && styles.package}
                                type="radio"
                                name="switchToggle"
                                value={`Package`}
                                id="package"
                                onClick={() => props.handlePackageOption()}
                                checked={props.packageOption}
                            /></li>
                            <li><label
                                style={props.packageOption ? {
                                    marginRight: "10px",
                                    fontSize: "10px",
                                    marginLeft: "12px",
                                    marginTop: "3px",
                                    color: "black",
                                } : {
                                    marginRight: "10px",
                                    fontSize: "10px",
                                    marginLeft: "12px",
                                    marginTop: "3px",
                                    color: "gray",
                                }}
                                htmlFor="package"
                            >
                                Package
                            </label></li>
                        </ul>
                        <ul style={{ display: "flex", marginLeft: "-20px" }}>
                            <li style={{ marginTop: "-8px" }}><input
                                className={props.bulkOption && styles.package}
                                type="radio"
                                name="switchToggle"
                                value={`Bulk Delivery`}
                                id="bulk"
                                onClick={() => props.handleBulkOption()}
                                checked={props.bulkOption}

                            /></li>
                            <li><label
                                htmlFor="bulk"
                                style={props.bulkOption ? {
                                    marginRight: "10px",
                                    fontSize: "10px",
                                    marginLeft: "12px",
                                    marginTop: "3px",
                                    color: "black",
                                } : {
                                    marginRight: "10px",
                                    fontSize: "10px",
                                    marginLeft: "12px",
                                    marginTop: "3px",
                                    color: "gray",
                                }}
                            >
                                Bulk Delivery
                            </label></li>
                        </ul>
                        <ul style={{ display: "flex", marginLeft: "-20px" }}>
                            <li style={{ marginTop: "-8px" }}><input
                                type="radio"
                                name="switchToggle"
                                value={`Car Clearing`}
                                id="bulk"
                            /></li>
                            <li><label
                                htmlFor="bulk"
                                style={{
                                    marginRight: "10px",
                                    fontSize: "10px",
                                    marginLeft: "12px",
                                    marginTop: "3px",
                                    color: "gray"
                                }}
                            >
                                Car Clearing
                            </label></li>
                        </ul>
                        <ul style={{ display: "flex", marginLeft: "-20px" }}>
                            <li style={{ marginTop: "-8px" }}><input
                                type="radio"
                                name="switchToggle"
                                value={`Container Shipment`}
                                id="bulk"
                            /></li>
                            <li><label
                                htmlFor="bulk"
                                style={{
                                    marginRight: "10px",
                                    fontSize: "10px",
                                    marginLeft: "12px",
                                    marginTop: "3px",
                                    color: "gray"
                                }}
                            >
                                Container Shipment
                            </label></li>
                        </ul>
                        <ul style={{ display: "flex", marginLeft: "-20px" }}>
                            <li style={{ marginTop: "-8px" }}><input
                                type="radio"
                                name="switchToggle"
                                value={`Specialied Shipment`}
                                id="bulk"
                            /></li>
                            <li><label
                                htmlFor="bulk"
                                style={{
                                    marginRight: "10px",
                                    fontSize: "10px",
                                    marginLeft: "12px",
                                    marginTop: "3px",
                                    color: "gray"
                                }}
                            >
                                Specialied Shipment
                            </label></li>
                        </ul>
                    </div>
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
                </div>
            </div>
        </Modal.Body>
    )
}