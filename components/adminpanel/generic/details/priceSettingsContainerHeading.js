import Image from "next/image";
import { Form } from "react-bootstrap";
import ReusableEllipses from "../../common/reusableEllipses";

export default function PriceSettingsContainerHeadings(props) {
    return (
        <>
            <div style={{
                display: "flex",
                gap: "5px",
                width: "100%"
            }}>
                <div style={{
                    width: '14%',
                    height: "40px",
                    marginTop: '12px'
                }}>
                    {props.firstHeader}
                </div>
                <div style={{
                    width: '14%',
                    height: "40px",
                }}>
                    {props.secondHeader}
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
                        {props.thirdHeader}
                    </Form.Label>
                    <ReusableEllipses
                        isCarDelivery={props.isCarDelivery}
                        isContainerDelivery={props.isContainerDelivery}
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
                        {props.fourthHeader}
                    </Form.Label>
                    <ReusableEllipses
                        isCarDelivery={props.isCarDelivery}
                        isContainerDelivery={props.isContainerDelivery}
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
                        {props.fifthHeader}
                    </Form.Label>
                    <ReusableEllipses
                        isCarDelivery={props.isCarDelivery}
                        isContainerDelivery={props.isContainerDelivery}
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
                        {props.sixthHeader}
                    </Form.Label>
                    <ReusableEllipses
                        isCarDelivery={props.isCarDelivery}
                        isContainerDelivery={props.isContainerDelivery}
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
            <div style={{
                display: "flex",
                gap: "5px",
                width: "100%",
                borderTop: "1px solid #E7E7E7",
            }}>
                <div style={{
                    width: '14%',
                    height: "40px",
                    marginTop: '14px'
                }}>
                    {props.seventHeader}
                </div>
                <div style={{
                    width: '14%',
                    height: "40px",
                }}>
                    {props.eightHeader}
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
                        {props.ninthHeader}
                    </Form.Label>
                    <ReusableEllipses
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
                        {props.tenthHeader}
                    </Form.Label>
                    <ReusableEllipses
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
                        {props.eleventhHeader}
                    </Form.Label>
                    <ReusableEllipses
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
                        {props.twelftHeader}
                    </Form.Label>
                    <ReusableEllipses
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