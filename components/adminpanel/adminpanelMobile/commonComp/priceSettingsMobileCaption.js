import Image from "next/image";
import { Form } from "react-bootstrap";

export default function PriceSettingsMobileCaption(props) {
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: '10px'
            }}>
                {(props.isPackages
                    || props.isDocuments
                    || props.isBulkDelivery
                    || props.isCarClearing
                    || props.isContainerClearing
                    || props.isCarDelivery
                    || props.isContainerDelivery) ? (
                    <>
                        <div style={{
                            display: 'flex',
                            gap: '5px'
                        }}>
                            <Image
                                style={{
                                    width: "18px",
                                    maxWidth: "100%",
                                }}
                                src={props.imgSrc}
                                width="18"
                                height="16"
                                alt="packages"
                            />
                            <Form.Label
                                style={{
                                    color: "black",
                                    fontWeight: "500",
                                    fontSize: "11px",
                                    fontFamily: 'Poppins',
                                    fontStyle: "normal",
                                    // marginTop: '-8px'
                                }}>
                                {props.caption}
                            </Form.Label>
                        </div>
                        <div style={{
                            display: 'flex',
                            gap: '5px'
                        }}>
                            <Form.Label
                                onClick={(props.isPackages
                                    || props.isDocuments
                                    || props.isBulkDelivery) ? () => props.setAddSize(true)
                                    : (props.isCarClearing || props.isContainerClearing) ?
                                        () => props.setAddValue(true) : undefined}
                                style={{
                                    color: "#00902F",
                                    fontWeight: "500",
                                    fontSize: "10px",
                                    fontFamily: 'Poppins',
                                    fontStyle: "normal",
                                    cursor: 'pointer'
                                }}>
                                {props.header1}
                            </Form.Label>
                            <Form.Label
                                onClick={(props.isPackages
                                    || props.isDocuments
                                    || props.isBulkDelivery) ? () => props.setAddDistance(true)
                                    : (props.isCarDelivery || props.isContainerDelivery) ?
                                        () => props.setAddMiles(true) : undefined}
                                style={{
                                    color: "#00902F",
                                    fontWeight: "500",
                                    fontSize: "10px",
                                    fontFamily: 'Poppins',
                                    fontStyle: "normal",
                                    cursor: 'pointer'
                                }}>
                                {props.header2}
                            </Form.Label>
                            {props.isBulkDelivery && (
                                <Form.Label
                                    style={{
                                        color: "#00902F",
                                        fontWeight: "500",
                                        fontSize: "10px",
                                        fontFamily: 'Poppins',
                                        fontStyle: "normal",
                                        cursor: 'pointer'
                                    }}>
                                    {props.header3}
                                </Form.Label>
                            )}
                        </div>
                    </>
                ) : undefined}
            </div>
        </>
    )
}