import Image from "next/image";
import { Form } from "react-bootstrap";
import BtnComp from "../../common/btnComp";

export default function PriceSettingsCaption(props) {
    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                width: '100%',
            }}>
                <div style={{
                    display: 'flex',
                    gap: "10px",
                    marginTop: "-7px"
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
                            fontWeight: "600",
                            fontSize: "13px",
                            fontFamily: 'Poppins',
                            fontStyle: "normal",
                            // marginTop: '-8px'
                        }}>
                        {props.caption}
                    </Form.Label>
                </div>
                <div style={{
                    display: 'flex',
                    gap: "10px",
                    marginTop: "-7px"
                }}>
                    <BtnComp
                        style={{
                            background: "transparent",
                            border: "1px solid #7CC427",
                            padding: "7px 20px",
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: "center",
                            gap: "10px",
                            height: "40px",
                            cursor: 'pointer'
                        }}>
                        <Image
                            style={{
                                width: "13px",
                                maxWidth: "100%",
                            }}
                            src="/img/addsize.png"
                            width="13"
                            height="13"
                            alt="addsize"
                        />
                        <Form.Label
                            onClick={(props.isPackages
                                || props.isDocuments
                                || props.isBulkDelivery) ? () => props.setAddSize(true)
                                : (props.isCarClearing
                                    || props.isContainerClearing) ?
                                    () => props.setAddValue(true) : undefined}
                            style={{
                                fontSize: "13px",
                                color: "black",
                                marginTop: '4px'
                            }}>
                            {(props.isPackages
                                || props.isDocuments
                                || props.isBulkDelivery) ? "Add size" :
                                (props.isCarClearing
                                    || props.isContainerClearing) ? "Add Value" :
                                    (props.isCarDelivery || props.isContainerDelivery) ?
                                        "Add State" : undefined}
                        </Form.Label>
                    </BtnComp>
                    <BtnComp
                        style={{
                            background: "transparent",
                            border: "1px solid #7CC427",
                            padding: "7px 20px",
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: "center",
                            gap: "10px",
                            height: "40px",
                            cursor: 'pointer'
                        }}>
                        <Image
                            style={{
                                width: "13px",
                                maxWidth: "100%",
                            }}
                            src="/img/adddistance.png"
                            width="13"
                            height="13"
                            alt="addsize"
                        />
                        <Form.Label
                            onClick={(props.isPackages
                                || props.isDocuments
                                || props.isBulkDelivery) ? () => props.setAddDistance(true)
                                : (props.isCarDelivery || props.isContainerDelivery) ?
                                    () => props.setAddMiles(true) : undefined}
                            style={{
                                fontSize: "13px",
                                color: "black",
                                marginTop: '4px'
                            }}>
                            {(props.isPackages
                                || props.isDocuments
                                || props.isBulkDelivery) ? "Add distance" :
                                (props.isCarClearing
                                    || props.isContainerClearing) ? "Add Year" :
                                    (props.isCarDelivery || props.isContainerDelivery) ?
                                        "Add Miles" : undefined}
                        </Form.Label>
                    </BtnComp>
                    {props.isBulkDelivery && (
                        <BtnComp
                            style={{
                                background: "transparent",
                                border: "1px solid #7CC427",
                                padding: "7px 20px",
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: "center",
                                gap: "10px",
                                height: "40px",
                                cursor: 'pointer'
                            }}>
                            <Image
                                style={{
                                    width: "13px",
                                    maxWidth: "100%",
                                }}
                                src="/img/adddistance.png"
                                width="13"
                                height="13"
                                alt="addsize"
                            />
                            <Form.Label style={{
                                fontSize: "13px",
                                color: "black",
                                marginTop: '4px'
                            }}>
                                Add security
                            </Form.Label>
                        </BtnComp>
                    )}
                </div>
            </div>
        </>
    )
}