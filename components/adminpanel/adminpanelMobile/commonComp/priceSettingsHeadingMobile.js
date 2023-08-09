import { Form } from "react-bootstrap";

export default function PriceSettingsHeadingMobile(props) {
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: '10px',
                gap: '5px'
            }}>
                {(props.isPackages
                    || props.isDocuments
                    || props.isBulkDelivery
                    || props.isCarClearing
                    || props.isContainerClearing
                    || props.isCarDelivery
                    || props.isContainerDelivery) ? (
                    <>
                        <Form.Label
                            style={{
                                color: "black",
                                fontWeight: "500",
                                fontSize: "11px",
                                fontFamily: 'Poppins',
                                fontStyle: "normal",
                                // marginTop: '-8px'
                            }}>
                            {props.header1}
                        </Form.Label>
                        <Form.Label
                            style={{
                                color: "black",
                                fontWeight: "500",
                                fontSize: "11px",
                                fontFamily: 'Poppins',
                                fontStyle: "normal",
                                // marginTop: '-8px'
                            }}>
                            {props.header2}
                        </Form.Label>
                        <Form.Label
                            style={{
                                color: "black",
                                fontWeight: "500",
                                fontSize: "11px",
                                fontFamily: 'Poppins',
                                fontStyle: "normal",
                                // marginTop: '-8px'
                            }}>
                            {props.header3}
                        </Form.Label>
                        {(props.isPackages
                            || props.isDocuments
                            || props.isBulkDelivery
                            || props.isContainerClearing
                            || props.isCarDelivery
                            || props.isContainerDelivery) && (
                                <Form.Label
                                    style={{
                                        color: "black",
                                        fontWeight: "500",
                                        fontSize: "11px",
                                        fontFamily: 'Poppins',
                                        fontStyle: "normal",
                                        // marginTop: '-8px'
                                    }}>
                                    {props.header4}
                                </Form.Label>
                            )}
                        <Form.Label
                            style={{
                                color: "black",
                                fontWeight: "500",
                                fontSize: "11px",
                                fontFamily: 'Poppins',
                                fontStyle: "normal",
                                // marginTop: '-8px'
                            }}>
                            Action
                        </Form.Label>
                    </>
                ) : undefined}
            </div>
        </>
    )
}