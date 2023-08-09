import Image from "next/image";
import { Form } from "react-bootstrap";

export default function CommonCashoutComp(props) {
    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: 'center',
                marginTop: "40px",
            }}>
                <Image style={{
                    maxWidth: '100%',
                    width: "100px"
                }} src="/img/walletcamera.png" width="100" height="100" alt="close" />
                <Form.Label style={{
                    fontSize: '14px',
                    color: "black",
                    fontWeight: '600',
                    marginTop: "20px",
                }}>
                    Cash out
                </Form.Label>
                <Form.Label style={{
                    fontSize: '11px',
                    color: "gray",
                    fontWeight: '400',
                }}>
                    26 July 2022 | 11:59 PM
                </Form.Label>
                <div style={{
                    display: 'flex',
                    gap: "5px",
                    marginTop: "10px"
                }}>
                    <Form.Label style={{
                        fontSize: '14px',
                        color: "#00902F",
                        fontWeight: '600',
                        marginTop: "10px"
                    }}>
                        #
                    </Form.Label>
                    <Form.Label style={{
                        fontSize: '14px',
                        color: "black",
                        fontWeight: '600',
                        marginTop: "10px"
                    }}>
                        1 350.00
                    </Form.Label>
                </div>
            </div>
            {(props.enoughCash || props.confirmCashOrder || props.cashoutSuccessful) && (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginTop: "20px",
                        width: '100%',
                        height: '62px',
                        background: '#F9F9F9',
                        border: '1px solid #D1D1D1',
                        borderRadius: '6px',
                        padding: '5px'
                    }}>
                        <div style={{
                            display: 'flex',
                            gap: "5px"
                        }}>
                            <Form.Label style={{
                                fontSize: '11px',
                                color: "#A6A6A6",
                                fontWeight: '400',
                            }}>
                                {props.caption1}
                            </Form.Label>
                        </div>
                        <input style={{
                            border: 'none',
                            padding: "7px",
                            fontSize: "13px",
                            fontWeight: "bold",
                            background: '#F9F9F9'
                        }} type="text"
                            placeholder={props.caption2} />
                    </div>
                </div>
            )}
            {(props.enoughCash || props.confirmCashOrder) && (
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    gap: "10px",
                    width: '100%',
                    padding: '8px',
                    background: 'rgba(124, 196, 39, 0.15)',
                    borderRadius: '5px',
                    height: "48px",
                    marginTop: "30px",
                }}>
                    <Image style={props.style}
                        src={props.imgSrc} width={props.imgWidth} height={props.imgHeight} alt="close" />
                    <Form.Label style={{
                        fontSize: '14px',
                        color: "#00902F",
                        marginTop: "3px"
                    }}>
                        {"|"}
                    </Form.Label>
                    <Form.Label style={{
                        fontSize: '11px',
                        color: "black",
                        marginTop: "3px"
                    }}>
                        {props.msg}
                    </Form.Label>
                </div>
            )}
        </>
    )
}