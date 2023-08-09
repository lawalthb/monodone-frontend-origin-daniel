import Image from "next/image";
import { Form } from "react-bootstrap";
import StatDivDesktop from "../../common/statDivDesktop";

export default function StatisticsDetails(props) {
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '10px',
                width: "100%",
            }}>
                <StatDivDesktop
                    statName="Total Orders"
                    statValue="18 040"
                    statImg="/img/statorder.png"
                />
                <StatDivDesktop
                    statName="Total Users"
                    statValue="247 000"
                    statImg="/img/statuser.png"
                />
                <StatDivDesktop
                    statName="Total Transactions"
                    statValue="312 100 #"
                    statImg="/img/stattransaction.png"
                />
                <StatDivDesktop
                    statName="Total weight"
                    statValue="247 000 kg"
                    statImg="/img/statweight.png"
                />
            </div>
            <div style={{
                display: "flex",
                justifyContent: 'space-between'
            }}>

                <div style={{
                    width: '49%',
                    height: "120px",
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1)",
                    transition: "0.3s",
                    display: 'flex',
                    flexDirection: "column",
                    background: 'white',
                    padding: "12px 30px",
                    marginTop: '10px'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <div style={{
                            display: 'flex',
                            gap: "10px"
                        }}>
                            <Image
                                style={{
                                    width: "24px",
                                    maxWidth: "100%",
                                }}
                                src="/img/button-icon-refund.png"
                                width="24"
                                height="24"
                                alt="btn"
                            />
                            <Form.Label style={{
                                fontSize: "12px",
                                marginTop: '5px'
                            }}>
                                Monthly Revenue:
                            </Form.Label>
                        </div>
                        <Form.Label style={{
                            fontSize: "16px",
                            color: "black",
                            fontWeight: '600',
                        }}>
                            24 36000 #
                        </Form.Label>
                    </div>
                    <hr />
                    <div style={{
                        display: 'flex',
                        gap: "10%"
                        // justifyContent: 'space-between'
                    }}>
                        <div style={{
                            display: 'flex',
                            gap: "10px"
                        }}>
                            <Form.Label style={{
                                fontSize: "11px",
                            }}>
                                Paid to Agents
                            </Form.Label>
                            <Form.Label style={{
                                fontSize: "11px",
                                fontWeight: '600',
                                color: 'black'
                            }}>
                                8540 #
                            </Form.Label>
                        </div>
                        <div style={{
                            display: 'flex',
                            gap: "10px"
                        }}>
                            <Form.Label style={{
                                fontSize: "11px",
                            }}>
                                Paid to Drivers
                            </Form.Label>
                            <Form.Label style={{
                                fontSize: "11px",
                                fontWeight: '600',
                                color: 'black'
                            }}>
                                8540 #
                            </Form.Label>
                        </div>
                    </div>
                </div>
                <div style={{
                    width: '49%',
                    height: "120px",
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1)",
                    transition: "0.3s",
                    display: 'flex',
                    flexDirection: "column",
                    background: 'white',
                    padding: "12px 30px",
                    marginTop: '10px',
                    background: '#00902F'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <div style={{
                            display: 'flex',
                            gap: "10px"
                        }}>
                            <Image
                                style={{
                                    width: "24px",
                                    maxWidth: "100%",
                                }}
                                src="/img/btnrefund.png"
                                width="24"
                                height="24"
                                alt="btn"
                            />
                            <Form.Label style={{
                                fontSize: "12px",
                                marginTop: '5px',
                                color: "white"
                            }}>
                                Monthly Revenue:
                            </Form.Label>
                        </div>
                        <Form.Label style={{
                            fontSize: "16px",
                            color: "black",
                            fontWeight: '600',
                            color: "white"
                        }}>
                            315 360,00 #
                        </Form.Label>
                    </div>
                    <hr style={{
                        color: '#FFFFFF'
                    }} />
                    <div style={{
                        display: 'flex',
                        gap: "10%"
                        // justifyContent: 'space-between'
                    }}>
                        <div style={{
                            display: 'flex',
                            gap: "10px"
                        }}>
                            <Form.Label style={{
                                fontSize: "11px",
                                color: "white"
                            }}>
                                Paid to Agents
                            </Form.Label>
                            <Form.Label style={{
                                fontSize: "11px",
                                fontWeight: '600',
                                color: "white"
                            }}>
                                8540 #
                            </Form.Label>
                        </div>
                        <div style={{
                            display: 'flex',
                            gap: "10px"
                        }}>
                            <Form.Label style={{
                                fontSize: "11px",
                                color: "white"
                            }}>
                                Paid to Drivers
                            </Form.Label>
                            <Form.Label style={{
                                fontSize: "11px",
                                fontWeight: '600',
                                color: "white"
                            }}>
                                8540 #
                            </Form.Label>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: "10px",
                marginTop: '20px'
            }}>
                <Image
                    style={{
                        width: "480px",
                        maxWidth: "100%",
                    }}
                    src="/img/statordergraph.png"
                    width="480"
                    height="490"
                    alt="btn"
                />
                <Image
                    style={{
                        width: "480px",
                        maxWidth: "100%",
                    }}
                    src="/img/statordertransaction.png"
                    width="480"
                    height="490"
                    alt="btn"
                />
            </div>
            <Form.Label style={{
                fontSize: "14px",
                fontWeight: '600',
                color: "black",
                marginTop: '20px'
            }}>
                User statistic
            </Form.Label>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: "10px",
                marginTop: '20px'
            }}>
                <Image
                    style={{
                        width: "320px",
                        maxWidth: "100%",
                    }}
                    src="/img/statcustomer.png"
                    width="320"
                    height="360"
                    alt="btn"
                />
                <Image
                    style={{
                        width: "320px",
                        maxWidth: "100%",
                    }}
                    src="/img/statagent.png"
                    width="320"
                    height="360"
                    alt="btn"
                />
                <Image
                    style={{
                        width: "320px",
                        maxWidth: "100%",
                    }}
                    src="/img/statdriver.png"
                    width="320"
                    height="360"
                    alt="btn"
                />
            </div>
            <Form.Label style={{
                fontSize: "14px",
                fontWeight: '600',
                color: "black",
                marginTop: '20px'
            }}>
                Parcel statistic
            </Form.Label>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: "10px",
                marginTop: '20px'
            }}>
                <Image
                    style={{
                        width: "320px",
                        maxWidth: "100%",
                    }}
                    src="/img/statcorrelation.png"
                    width="320"
                    height="450"
                    alt="btn"
                />
                <Image
                    style={{
                        width: "650px",
                        maxWidth: "100%",
                    }}
                    src="/img/statparcel.png"
                    width="650"
                    height="450"
                    alt="btn"
                />
            </div>
        </>
    )
}