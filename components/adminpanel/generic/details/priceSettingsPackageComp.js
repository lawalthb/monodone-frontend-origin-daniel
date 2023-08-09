import Image from "next/image";
import { Form } from "react-bootstrap";

export default function PriceSettingsPackageComp(props) {
    return (
        <>
            <div style={{
                display: "flex",
                // justifyContent: "space-between",
                gap: "5px",
                width: "100%",
                borderTop: "1px solid #E7E7E7",
            }}>
                <div style={{
                    width: '14%',
                    height: "40px",
                    padding: '7px',
                    borderRight: "1px solid #E7E7E7",
                    borderBottom: "1px solid #E7E7E7",
                    borderLeft: "1px solid #E7E7E7",
                    background: '#F9F9F9'
                }}>
                    <Form.Label style={{
                        fontSize: "13px",
                        color: "black"
                        // marginTop: '14px'
                    }}>
                        {(props.isPackages || props.isBulkDelivery) ? (
                            "< 30kg"
                        ) : props.isDocuments ? (
                            "A5"
                        ) : props.isCarClearing ? "Year" : props.isContainerClearing ?
                            "No of cars" : (props.isCarDelivery
                                || props.isContainerDelivery) ? "States" : undefined}

                    </Form.Label>
                </div>
                <div style={{
                    width: '14%',
                    height: "40px",
                    padding: '7px',
                    borderRight: "1px solid #E7E7E7",
                    borderBottom: "1px solid #E7E7E7",
                    borderLeft: "1px solid #E7E7E7",
                    background: '#F9F9F9',
                    marginLeft: "-5px"
                }}>
                    <Form.Label style={{
                        fontSize: "13px",
                        color: "black"
                        // marginTop: '14px'
                    }}>
                        {props.isPackages ? (
                            "< 20x30x60"
                        ) : (props.isDocuments || props.isBulkDelivery) ? (
                            "20x30x60"
                        ) : props.isCarClearing ? "2023" : props.isContainerClearing ? "5" :
                            (props.isCarDelivery
                                || props.isContainerDelivery) ? "Enugu" : undefined}

                    </Form.Label>
                </div>
                <div style={{
                    width: '14.4%',
                    height: "40px",
                    padding: '7px',
                    borderRight: "1px solid #E7E7E7",
                    borderBottom: "1px solid #E7E7E7",
                    borderLeft: "1px solid #E7E7E7",
                    marginLeft: "-5px"
                }}>
                    <Form.Label style={{
                        fontSize: "13px",
                        color: "black"
                        // marginTop: '14px'
                    }}>
                        {(props.isPackages || props.isDocuments
                            || props.isBulkDelivery || props.isCarClearing
                            || props.isContainerClearing
                            || props.isCarDelivery
                            || props.isContainerDelivery) && (
                                "#120.00"
                            )}
                    </Form.Label>
                </div>
                <div style={{
                    width: '14.4%',
                    height: "40px",
                    padding: '7px',
                    borderRight: "1px solid #E7E7E7",
                    borderBottom: "1px solid #E7E7E7",
                    borderLeft: "1px solid #E7E7E7",
                    marginLeft: "-5px"
                }}>
                    <Form.Label style={{
                        fontSize: "13px",
                        color: "black"
                        // marginTop: '14px'
                    }}>
                        {(props.isPackages || props.isDocuments || props.isBulkDelivery
                            || props.isCarClearing
                            || props.isContainerClearing
                            || props.isCarDelivery
                            || props.isContainerDelivery) && (
                                "#120.00"
                            )}
                    </Form.Label>
                </div>
                <div style={{
                    width: '14.4%',
                    height: "40px",
                    padding: '7px',
                    borderRight: "1px solid #E7E7E7",
                    borderBottom: "1px solid #E7E7E7",
                    borderLeft: "1px solid #E7E7E7",
                    marginLeft: "-5px"
                }}>
                    <Form.Label style={{
                        fontSize: "13px",
                        color: "black"
                        // marginTop: '14px'
                    }}>
                        {(props.isPackages || props.isDocuments || props.isBulkDelivery
                            || props.isCarClearing
                            || props.isContainerClearing
                            || props.isCarDelivery
                            || props.isContainerDelivery) && (
                                "#120.00"
                            )}
                    </Form.Label>
                </div>
                <div style={{
                    width: '14.4%',
                    height: "40px",
                    padding: '7px',
                    borderRight: "1px solid #E7E7E7",
                    borderBottom: "1px solid #E7E7E7",
                    borderLeft: "1px solid #E7E7E7",
                    marginLeft: "-5px"
                }}>
                    <Form.Label style={{
                        fontSize: "13px",
                        color: "black"
                        // marginTop: '14px'
                    }}>
                        {(props.isPackages || props.isDocuments || props.isBulkDelivery
                            || props.isCarClearing
                            || props.isContainerClearing
                            || props.isCarDelivery
                            || props.isContainerDelivery) && (
                                "#120.00"
                            )}
                    </Form.Label>
                </div>
                <div style={{
                    width: '14.4%',
                    height: "40px",
                    padding: '7px',
                    borderBottom: "1px solid #E7E7E7",
                    borderLeft: "1px solid #E7E7E7",
                    marginLeft: "-5px",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px'
                }}>
                    <Image
                        onClick={() => props.setEditRow(true)}
                        style={{
                            width: "24px",
                            maxWidth: "100%",
                            cursor: 'pointer'
                        }}
                        src="/img/btnedit.png"
                        width="24"
                        height="24"
                        alt="btnedit"
                    />
                    <Image
                        onClick={() => props.setDeleteColumn(true)}
                        style={{
                            width: "24px",
                            maxWidth: "100%",
                            cursor: 'pointer'
                        }}
                        src="/img/btndelete.png"
                        width="24"
                        height="24"
                        alt="btnblock"
                    />
                </div>
            </div>
        </>
    )
}