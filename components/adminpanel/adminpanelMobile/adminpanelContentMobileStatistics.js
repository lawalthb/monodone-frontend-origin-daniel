import Image from "next/image";
import { Button, Form } from "react-bootstrap";
import MobileHeader from "./commonComp/header";
import StatDiv from "./commonComp/statDiv";

export default function AdminpanelContentMobileStatistics(props) {
    return (
        <>
            <MobileHeader
                caption={"Statistics"}
                isStatistics={props.isStatistics}
            />
            <div style={{
                display: 'flex',
                justifyContent: "space-between",
                width: '100%',
                marginTop: '20px'
            }}>
                <Button
                    style={{
                        display: 'flex',
                        gap: "20px",
                        background: 'transparent',
                        border: "1px solid #A6A6A6",
                        padding: '3px',
                        width: "44%",
                        height: '34px',
                    }}>
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
                    <Form.Label style={{
                        fontWeight: "400",
                        fontSize: "13px",
                        color: "#151515",
                        marginTop: '3px'
                    }}>
                        Filter here
                    </Form.Label>
                </Button>
                <div style={{
                    display: 'flex'
                }}>
                    <Form.Label style={{
                        color: "#A6A6A6",
                        fontWeight: "400",
                        fontSize: "12px",
                        marginRight: "10px",
                        marginTop: "10px",
                        fontWeight: '500'
                    }}>
                        Sort by:
                    </Form.Label>
                    <select style={{
                        border: "1px solid #A6A6A6",
                        borderRadius: '4px',
                        padding: "7px"
                    }}
                    >
                        <option value="">Aget No</option>
                    </select>
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    width: "100%",
                    marginTop: '20px'
                }}>
                <StatDiv
                    statName="Total Orders"
                    statValue="18 040"
                    statImg="/img/statorder.png"
                />
                <StatDiv
                    statName="Total Users"
                    statValue="247 000"
                    statImg="/img/statuser.png"
                />
                <StatDiv
                    statName="Total Transactions"
                    statValue="312 100 #"
                    statImg="/img/stattransaction.png"
                />
                <StatDiv
                    statName="Total weight"
                    statValue="247 000 kg"
                    statImg="/img/statweight.png"
                />
            </div>
            <div style={{
                width: '100%',
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
                    justifyContent: 'space-between'
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
                width: '100%',
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
                    justifyContent: 'space-between'
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
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: "10px",
                marginTop: '20px'
            }}>
                <Image
                    style={{
                        width: "343px",
                        maxWidth: "100%",
                    }}
                    src="/img/statordergraph.png"
                    width="343"
                    height="347"
                    alt="graph"
                />
                <Image
                    style={{
                        width: "343px",
                        maxWidth: "100%",
                    }}
                    src="/img/statordertransaction.png"
                    width="343"
                    height="347"
                    alt="graph"
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
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
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
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
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
                    alt="graph"
                />
                <Image
                    style={{
                        width: "343px",
                        maxWidth: "100%",
                    }}
                    src="/img/statparcel.png"
                    width="343"
                    height="201"
                    alt="graph"
                />
            </div>
        </>
    )
}