import { Button, Form } from "react-bootstrap";
import CustomPagination from "../../customPagination";

export default function AdminMobileAllOrders(props) {
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'Poppins',
                fontStyle: "normal",
                fontSize: "16px",
                fontWeight: 600,
            }}>
                {props.caption}
            </div>
            <Form.Label style={{
                fontFamily: 'Poppins',
                fontStyle: "normal",
                color: "black",
                fontSize: "12px",
                fontWeight: 500,
                marginTop: '20px'
            }}>
                {props.allOrdersHeading}:
            </Form.Label>
            <div style={{
                display: "flex",
                marginTop: "10px",
                gap: '30px'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <Form.Label style={{
                        fontFamily: 'Poppins',
                        fontStyle: "normal",
                        color: "#A6A6A6",
                        fontSize: "12px",
                        fontWeight: 500,
                    }}>
                        Name
                    </Form.Label>
                    <Form.Label style={{
                        fontFamily: 'Poppins',
                        fontStyle: "normal",
                        color: "#A6A6A6",
                        fontSize: "12px",
                        fontWeight: 500,
                    }}>
                        E-mail
                    </Form.Label>
                    <Form.Label style={{
                        fontFamily: 'Poppins',
                        fontStyle: "normal",
                        color: "#A6A6A6",
                        fontSize: "12px",
                        fontWeight: 500,
                    }}>
                        Phone number
                    </Form.Label>
                    <Form.Label style={{
                        fontFamily: 'Poppins',
                        fontStyle: "normal",
                        color: "#A6A6A6",
                        fontSize: "12px",
                        fontWeight: 500,
                    }}>
                        Address
                    </Form.Label>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <Form.Label style={{
                        fontFamily: 'Poppins',
                        fontStyle: "normal",
                        color: "black",
                        fontSize: "12px",
                        fontWeight: 500,
                    }}>
                        {props.allOrdersName}
                    </Form.Label>
                    <Form.Label style={{
                        fontFamily: 'Poppins',
                        fontStyle: "normal",
                        color: "black",
                        fontSize: "12px",
                        fontWeight: 500,
                    }}>
                        {props.allOrdersEmail}
                    </Form.Label>
                    <Form.Label style={{
                        fontFamily: 'Poppins',
                        fontStyle: "normal",
                        color: "black",
                        fontSize: "12px",
                        fontWeight: 500,
                    }}>
                        {props.allOrdersPhone}
                    </Form.Label>
                    <Form.Label style={{
                        fontFamily: 'Poppins',
                        fontStyle: "normal",
                        color: "black",
                        fontSize: "12px",
                        fontWeight: 500,
                    }}>
                        {props.allOrdersAddress}
                    </Form.Label>
                </div>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: "space-between",
                marginTop: '5px'
            }}>
                <Form.Label style={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    color: "black",
                    fontSize: "13px",
                    fontWeight: 500,
                }}>
                    ALL ORDERS
                </Form.Label>
                <select style={{
                    padding: '8px',
                    border: "1px solid #E7E7E7"
                }}
                    onChange={props.onChangeAllOrdersDate}
                >
                    <option defaultValue={""}>Filter by date</option>
                    {props.allOrdersDates.map((dt, idx) => (
                        <option key={idx} value={dt}>{dt}</option>
                    ))}
                </select>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
                width: "100%",
                gap: "2%"
            }}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        width: '40%',
                    }}>
                    {props.allOrdersData.slice((parseInt(props.pageNumber) * 24) - 24, parseInt(props.pageNumber) * 24)
                        .map((data, idx) => (

                            <Form.Label
                                key={idx}
                                style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: "normal",
                                    color: "#A6A6A6",
                                    fontSize: "11px",
                                    fontWeight: 500,
                                    marginBottom: "13px"
                                }}>
                                {data.dateAdded}
                            </Form.Label>

                        ))}
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        width: '57%'
                    }}>
                    {props.allOrdersData.slice((parseInt(props.pageNumber) * 24) - 24, parseInt(props.pageNumber) * 24)
                        .map((data, idx) => (

                            <Form.Label
                                key={idx}
                                style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: "normal",
                                    color: "black",
                                    fontSize: "11px",
                                    fontWeight: 500,
                                    marginBottom: "13px"
                                }}>
                                {data.allOrders.desc.slice(0, 14) + "..."}
                            </Form.Label>

                        ))}
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '5px',
                        width: '40%'
                    }}>
                    {props.allOrdersData.slice((parseInt(props.pageNumber) * 24) - 24, parseInt(props.pageNumber) * 24)
                        .map((data, idx) => (
                            <Button
                                key={idx}
                                style={{
                                    background: 'transparent',
                                    border: "1px solid #7CC427",
                                    color: "#7CC427",
                                    fontSize: '10px',
                                    height: "30px",
                                    padding: "2px"
                                }}>
                                Watch
                            </Button>
                        ))}
                </div>
            </div>
        </>
    )
}