import Image from "next/image";
import { useState } from 'react'
import { Button, Form } from "react-bootstrap";
import OrderHistoryContent from "./reusables/orderHistoryContent";
import Media from "@/utils/media";

export default function OrderHistory(props) {
    const [filterHere, setFilterHere] = useState(false)
    const { mobile, tabletAndDesktop} = Media();

    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: "column",
                width: '100%',
                marginTop: '20px'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                }}>
                    <div style={(mobile && filterHere) ? {
                        display: "block",
                        position: 'absolute',
                        top: '19rem',
                        right: '2rem',
                        width: "180px",
                        zIndex: 1,
                        background: 'white',
                        padding: "10px"
                    } : (tabletAndDesktop && filterHere) ? {
                        display: "block",
                        position: 'absolute',
                        top: '19rem',
                        right: '4rem',
                        width: "280px",
                        zIndex: 1,
                        background: 'white',
                        padding: "10px"
                    } : {
                        display: 'none'
                    }}>
                        <div style={{
                            display: "flex",
                            justifyContent: 'space-between',
                            width: '100%',
                            gap: "5px"
                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: 'column',
                            }}>
                                <Form.Label style={{
                                    fontWeight: "400",
                                    fontSize: "10px",
                                    color: "black",
                                }}>
                                    Load type
                                </Form.Label>
                                <select style={{
                                    padding: '5px',
                                    color: '#808080',
                                    border: "1px solid #808080",
                                    borderRadius: "3px",
                                }}>
                                    <option>Emeka Offor</option>
                                </select>
                                <Form.Label style={{
                                    fontWeight: "400",
                                    fontSize: "10px",
                                    color: "black",
                                    marginTop: "10px"
                                }}>
                                    Amount
                                </Form.Label>
                                <select style={{
                                    padding: '5px',
                                    color: '#808080',
                                    border: "1px solid #808080",
                                    borderRadius: "3px",
                                }}>
                                    <option>Document</option>
                                </select>
                            </div>
                            <div style={{
                                display: "flex",
                                flexDirection: 'column',
                            }}>
                                <Form.Label style={{
                                    fontWeight: "400",
                                    fontSize: "10px",
                                    color: "black",
                                }}>
                                    Date
                                </Form.Label>
                                <select style={{
                                    padding: '5px',
                                    color: '#808080',
                                    border: "1px solid #808080",
                                    borderRadius: "3px",
                                }}>
                                    <option>Lagos</option>
                                </select>
                                <Form.Label style={{
                                    fontWeight: "400",
                                    fontSize: "10px",
                                    color: "black",
                                    marginTop: "10px"
                                }}>
                                    Location
                                </Form.Label>
                                <select style={{
                                    padding: '5px',
                                    color: '#808080',
                                    border: "1px solid #808080",
                                    borderRadius: "3px",
                                }}>
                                    <option>Document</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <Button
                        onClick={() => setFilterHere((prevState) => !prevState)}
                        style={mobile ? {
                            display: 'flex',
                            gap: "10px",
                            background: 'transparent',
                            border: "1px solid #A6A6A6",
                            padding: '3px',
                            height: '34px',
                        } : {
                            display: 'flex',
                            gap: "20px",
                            background: 'transparent',
                            border: "1px solid #A6A6A6",
                            padding: '3px',
                            height: '34px',
                        }}>
                        {mobile ? (
                            <Image
                                style={{
                                    width: "12px",
                                    maxWidth: "100%",
                                    marginTop: '5px',
                                    marginLeft: "6px"
                                }}
                                src="/img/filteradmin.png"
                                width="12"
                                height="12"
                                alt="badge"
                            />
                        ) : (
                            <Image
                                style={{
                                    width: "18px",
                                    maxWidth: "100%",
                                    marginTop: '5px',
                                    marginLeft: "6px"
                                }}
                                src="/img/filteradmin.png"
                                width="18"
                                height="18"
                                alt="badge"
                            />
                        )}
                        <Form.Label
                            style={mobile ? {
                                fontWeight: "400",
                                fontSize: "10px",
                                color: "#151515",
                                marginTop: '3px'
                            } : {
                                fontWeight: "400",
                                fontSize: "13px",
                                color: "#151515",
                                marginTop: '3px'
                            }}>
                            Filter here
                        </Form.Label>
                    </Button>
                </div>
                <Form.Label style={mobile ? {
                    fontWeight: "400",
                    fontSize: "12px",
                    color: "#808080",
                    fontWeight: '500',
                    marginTop: '10px'
                } : {
                    fontWeight: "400",
                    fontSize: "16px",
                    color: "#808080",
                    fontWeight: '500',
                    marginTop: '10px'
                }}>
                    Order History
                </Form.Label>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '30px 10px',
                    border: '1px solid #E7E7E7',
                    width: '100%'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <Form.Label style={mobile ? {
                            fontWeight: "400",
                            fontSize: "9px",
                            color: "black",
                            fontWeight: '400',
                            marginTop: '10px'
                        } : {
                            fontWeight: "400",
                            fontSize: "12px",
                            color: "black",
                            fontWeight: '400',
                            marginTop: '10px'
                        }}>
                            Load type
                        </Form.Label>
                        <Form.Label style={mobile ? {
                            fontWeight: "400",
                            fontSize: "9px",
                            color: "black",
                            fontWeight: '400',
                            marginTop: '10px'
                        } : {
                            fontWeight: "400",
                            fontSize: "12px",
                            color: "black",
                            fontWeight: '400',
                            marginTop: '10px'
                        }}>
                            Delivery From
                        </Form.Label>
                        <Form.Label style={mobile ? {
                            fontWeight: "400",
                            fontSize: "9px",
                            color: "black",
                            fontWeight: '400',
                            marginTop: '10px'
                        } : {
                            fontWeight: "400",
                            fontSize: "12px",
                            color: "black",
                            fontWeight: '400',
                            marginTop: '10px'
                        }}>
                            Delivery To
                        </Form.Label>
                        <Form.Label style={mobile ? {
                            fontWeight: "400",
                            fontSize: "9px",
                            color: "black",
                            fontWeight: '400',
                            marginTop: '10px'
                        } : {
                            fontWeight: "400",
                            fontSize: "12px",
                            color: "black",
                            fontWeight: '400',
                            marginTop: '10px'
                        }}>
                            Amount
                        </Form.Label>
                        <Form.Label style={mobile ? {
                            fontWeight: "400",
                            fontSize: "9px",
                            color: "black",
                            fontWeight: '400',
                            marginTop: '10px'
                        } : {
                            fontWeight: "400",
                            fontSize: "12px",
                            color: "black",
                            fontWeight: '400',
                            marginTop: '10px'
                        }}>
                            Date
                        </Form.Label>
                    </div>
                    <hr style={{
                        color: "gray"
                    }} />
                    <OrderHistoryContent />
                    <hr style={{
                        color: "gray"
                    }} />
                    <OrderHistoryContent />
                    <hr style={{
                        color: "gray"
                    }} />
                    <OrderHistoryContent />
                    <hr style={{
                        color: "gray"
                    }} />
                    <OrderHistoryContent />
                    <hr style={{
                        color: "gray"
                    }} />
                    <OrderHistoryContent />
                    <hr style={{
                        color: "gray"
                    }} />
                    <OrderHistoryContent />
                    <hr style={{
                        color: "gray"
                    }} />
                    <OrderHistoryContent />
                    <hr style={{
                        color: "gray"
                    }} />
                    <OrderHistoryContent />
                    <hr style={{
                        color: "gray"
                    }} />
                </div>
            </div>
        </>
    )
}