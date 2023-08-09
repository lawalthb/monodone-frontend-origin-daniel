import { Form } from "react-bootstrap";
import styles from './customerdashboard.module.css'

export default function ShipmentHeaderDesktop(props) {
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column"
            }}>
                <div style={{
                    margin: "0px",
                    padding: "0px 5px"
                }}>
                    <Form.Label
                        style={{
                            fontSize: "15px",
                            fontWeight: "400",
                            color: 'black'
                        }}
                    >OPTION OF PARCELS</Form.Label>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between"
                }}
            >
                <div style={{
                    display: 'flex',
                    justifyContent: "space-between"
                }}>
                    <input
                        className={props.packageOption && styles.package}
                        type="radio"
                        name="switchToggle"
                        value={`Package`}
                        id="package"
                        onClick={() => props.handlePackageOption()}
                        checked={props.packageOption}
                    />
                    <Form.Label
                        style={props.packageOption ? {
                            marginRight: "10px",
                            fontSize: "10px",
                            marginLeft: "12px",
                            marginTop: "11px",
                            color: "black",
                            fontWeight: '500'
                        } : {
                            marginRight: "10px",
                            fontSize: "10px",
                            marginLeft: "12px",
                            marginTop: "11px",
                            color: "gray",
                        }}
                        htmlFor="package"
                    >
                        Package
                    </Form.Label>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: "space-between"
                }}>
                    <input
                        className={props.bulkOption && styles.package}
                        type="radio"
                        name="switchToggle"
                        value={`Bulk Delivery`}
                        id="bulk"
                        onClick={() => props.handleBulkOption()}
                        checked={props.bulkOption}
                    />
                    <Form.Label
                        style={props.bulkOption ? {
                            marginRight: "10px",
                            fontSize: "10px",
                            marginLeft: "12px",
                            marginTop: "11px",
                            color: "black",
                            fontWeight: '500'
                        } : {
                            marginRight: "10px",
                            fontSize: "10px",
                            marginLeft: "12px",
                            marginTop: "11px",
                            color: "gray",
                        }}
                        htmlFor="bulk"
                    >
                        Bulk delivery
                    </Form.Label>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: "space-between"
                }}>
                    <input
                        className={props.carClearingOption && styles.package}
                        type="radio"
                        name="switchToggle"
                        value={`Car Clearing`}
                        id="carClearing"
                        onClick={() => props.handleCarClearingOption()}
                        checked={props.carClearingOption}
                    />
                    <Form.Label
                        style={props.carClearingOption ? {
                            marginRight: "10px",
                            fontSize: "10px",
                            marginLeft: "12px",
                            marginTop: "11px",
                            color: "black",
                            fontWeight: '500'
                        } : {
                            marginRight: "10px",
                            fontSize: "10px",
                            marginLeft: "12px",
                            marginTop: "11px",
                            color: "gray",
                        }}
                        htmlFor="bulk"
                    >
                        Car clearing
                    </Form.Label>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: "space-between"
                }}>
                    <input
                        className={props.containerShipment && styles.package}
                        type="radio"
                        name="switchToggle"
                        value={`Container Shipment`}
                        id="containerShipment"
                        onClick={() => props.handleContainerShipment()}
                        checked={props.containerShipment}
                    />
                    <Form.Label
                        style={props.containerShipment ? {
                            marginRight: "10px",
                            fontSize: "10px",
                            marginLeft: "12px",
                            marginTop: "11px",
                            color: "black",
                            fontWeight: '500'
                        } : {
                            marginRight: "10px",
                            fontSize: "10px",
                            marginLeft: "12px",
                            marginTop: "11px",
                            color: "gray",
                        }}
                        htmlFor="bulk"
                    >
                        Container Shipment
                    </Form.Label>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: "space-between"
                }}>
                    <input
                        className={props.specializedShipment && styles.package}
                        type="radio"
                        name="switchToggle"
                        value={`Specialied Shipment`}
                        id="specializedShipment"
                        onClick={() => props.handleSpecializedShipment()}
                        checked={props.specializedShipment}
                    />
                    <Form.Label
                        style={props.specializedShipment ? {
                            marginRight: "10px",
                            fontSize: "10px",
                            marginLeft: "12px",
                            marginTop: "11px",
                            color: "black",
                            fontWeight: '500'
                        } : {
                            marginRight: "10px",
                            fontSize: "10px",
                            marginLeft: "12px",
                            marginTop: "11px",
                            color: "gray",
                        }}
                        htmlFor="bulk"
                    >
                        Specialized Shipment
                    </Form.Label>
                </div>
            </div>
        </>
    )
}