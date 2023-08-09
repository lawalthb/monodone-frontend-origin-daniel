import Image from "next/image";
import { Form } from "react-bootstrap";
import ReusableEllipses from "../../common/reusableEllipses";

export default function PriceSettingsHeading(props) {
    return (
        <>
            <div style={{
                display: "flex",
                // justifyContent: "space-between",
                gap: "5px",
                width: "100%"
            }}>
                <div style={{
                    width: '14%',
                    height: "40px",
                }}>
                    {" "}
                </div>
                <div style={{
                    width: '14%',
                    height: "40px",
                }}>
                    {" "}
                </div>
                <div style={{
                    width: '14%',
                    height: "40px",
                    display: "flex",
                    justifyContent: "space-between",
                    borderRight: "1px solid #E7E7E7",
                    padding: '8px'
                }}>
                    <Form.Label style={{
                        fontSize: "13px",
                        marginTop: '14px'
                    }}>
                        to 20km
                    </Form.Label>
                    <ReusableEllipses
                        isDocuments={props.isDocuments}
                        isPackages={props.isPackages}
                        isBulkDelivery={props.isBulkDelivery}
                        isCarClearing={props.isCarClearing}
                        isContainerClearing={props.isContainerClearing}
                        setGeneralEdit={props.setGeneralEdit}
                    />
                </div>

                <div style={{
                    width: '14%',
                    height: "40px",
                    display: "flex",
                    justifyContent: "space-between",
                    borderRight: "1px solid #E7E7E7",
                    padding: '8px'
                }}>
                    <Form.Label style={{
                        fontSize: "13px",
                        marginTop: '14px'
                    }}>
                        20 - 100km
                    </Form.Label>
                    <ReusableEllipses
                        isDocuments={props.isDocuments}
                        isPackages={props.isPackages}
                        isBulkDelivery={props.isBulkDelivery}
                        isCarClearing={props.isCarClearing}
                        isContainerClearing={props.isContainerClearing}
                        setGeneralEdit={props.setGeneralEdit}
                    />
                </div>
                <div style={{
                    width: '14%',
                    height: "40px",
                    display: "flex",
                    justifyContent: "space-between",
                    borderRight: "1px solid #E7E7E7",
                    padding: '8px'
                }}>
                    <Form.Label style={{
                        fontSize: "13px",
                        marginTop: '14px'
                    }}>
                        20 - 100km
                    </Form.Label>
                    <ReusableEllipses
                        isDocuments={props.isDocuments}
                        isPackages={props.isPackages}
                        isBulkDelivery={props.isBulkDelivery}
                        isCarClearing={props.isCarClearing}
                        isContainerClearing={props.isContainerClearing}
                        setGeneralEdit={props.setGeneralEdit}
                    />
                </div>
                <div style={{
                    width: '14%',
                    height: "40px",
                    display: "flex",
                    justifyContent: "space-between",
                    borderRight: "1px solid #E7E7E7",
                    padding: '8px'
                }}>
                    <Form.Label style={{
                        fontSize: "13px",
                        marginTop: '14px'
                    }}>
                        20 - 100km
                    </Form.Label>
                    <ReusableEllipses
                        isDocuments={props.isDocuments}
                        isPackages={props.isPackages}
                        isBulkDelivery={props.isBulkDelivery}
                        isCarClearing={props.isCarClearing}
                        isContainerClearing={props.isContainerClearing}
                        setGeneralEdit={props.setGeneralEdit}
                    />
                </div>
                <div style={{
                    width: '14%',
                    height: "40px",
                }}>
                    {" "}
                </div>
            </div>
        </>
    )
}