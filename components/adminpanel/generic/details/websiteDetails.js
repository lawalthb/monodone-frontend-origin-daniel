import Image from "next/image";
import { Form } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import WebDivs from "../../adminpanelMobile/commonComp/webDivs";

export default function WebsiteDetails(props) {
    const isMobile = useMediaQuery({
        query: "(max-width: 709px)",
    });
    const isTabAndDesktop = useMediaQuery({
        query: "(min-width: 710px)",
    });

    return (
        <>
            {isMobile &&
                (
                    <>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px',
                                width: "100%",
                                marginTop: '20px'
                            }}>
                            {props.websiteData.map((data, idx) => (
                                <>
                                    <WebDivs
                                        idx={idx}
                                        header="Total Users"
                                        value={data.totalUsers}
                                    />
                                    <WebDivs
                                        idx={idx}
                                        header="Total Agents"
                                        value={data.totalAgents}
                                    />
                                    <WebDivs
                                        idx={idx}
                                        header="Total Drivers"
                                        value={data.totalDrivers}
                                    />
                                    <WebDivs
                                        idx={idx}
                                        header="Total Transport companies"
                                        value={data.totalTransportCompanies}
                                    />
                                    <WebDivs
                                        idx={idx}
                                        header="Total Shipping companies"
                                        value={data.totalShippingCompanies}
                                    />
                                    <WebDivs
                                        idx={idx}
                                        header="Total Brokers"
                                        value={data.totalBrokers}
                                    />
                                    <WebDivs
                                        idx={idx}
                                        header="Total Visitors"
                                        value={data.totaVisitors}
                                    />
                                    <WebDivs
                                        idx={idx}
                                        header="Total Managers"
                                        value={data.totaDriverManagers}
                                    />
                                    <WebDivs
                                        idx={idx}
                                        header="Total Customers"
                                        value={data.totalCustomers}
                                    />
                                </>
                            ))}
                            <Form.Label style={{
                                marginTop: '20px',
                                fontSize: '13px',
                                fontWeight: "600",
                                color: 'black'
                            }}>
                                Countries users logged in from
                            </Form.Label>
                            <div style={{
                                display: 'flex',
                                width: '100%',
                                marginTop: "20px",
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Image
                                    style={{
                                        width: "330px",
                                        maxWidth: "100%",
                                    }}
                                    src="/img/atlas.png"
                                    width="330"
                                    height="160"
                                    alt="profile"
                                />
                            </div>
                            <Form.Label style={{
                                marginTop: '20px',
                                fontSize: '13px',
                                fontWeight: "600",
                                color: 'black'
                            }}>
                                Activities
                            </Form.Label>
                            <div style={{
                                display: 'flex',
                                width: '100%',
                                marginTop: "20px",
                                flexDirection: 'column',
                                gap: '10px',
                                paddingBottom: "30px"
                            }}>
                                <Image
                                    style={{
                                        width: "320px",
                                        maxWidth: "100%",
                                    }}
                                    src="/img/chart1.png"
                                    width="320"
                                    height="367"
                                    alt="profile"
                                />
                                <Image
                                    style={{
                                        width: "320px",
                                        maxWidth: "100%",
                                    }}
                                    src="/img/chart3.png"
                                    width="320"
                                    height="367"
                                    alt="profile"
                                />
                                <Image
                                    style={{
                                        width: "320px",
                                        maxWidth: "100%",
                                    }}
                                    src="/img/chart5.png"
                                    width="320"
                                    height="367"
                                    alt="profile"
                                />
                            </div>
                        </div>
                    </>
                )}
            {isTabAndDesktop && (
                <>
                    {props.websiteData.map((data, idx) => (
                        <div
                            key={idx}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                gap: '10px',
                                width: "100%",
                                marginTop: '20px'
                            }}>
                            <div style={{
                                width: '33.34%',
                                height: "80px",
                                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1)",
                                transition: "0.3s",
                                display: 'flex',
                                justifyContent: "space-between",
                                background: 'white',
                                padding: "12px 30px"
                            }}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>
                                    <Form.Label style={{
                                        fontSize: "9px",
                                        color: "#A6A6A6"
                                    }}>
                                        Total Users
                                    </Form.Label>
                                    <Form.Label style={{
                                        fontSize: "16px",
                                        color: "black",
                                        fontWeight: '600',
                                    }}>
                                        {data.totalUsers}
                                    </Form.Label>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: "7px"
                                }}>
                                    <Image
                                        style={{
                                            width: "40px",
                                            maxWidth: "100%",
                                        }}
                                        src="/img/profile3.png"
                                        width="40"
                                        height="40"
                                        alt="profile"
                                    />
                                </div>
                            </div>
                            <div style={{
                                width: '33.34%',
                                height: "80px",
                                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1)",
                                transition: "0.3s",
                                display: 'flex',
                                justifyContent: "space-between",
                                background: 'white',
                                padding: "12px 30px"
                            }}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>
                                    <Form.Label style={{
                                        fontSize: "9px",
                                        color: "#A6A6A6"
                                    }}>
                                        Total Agents
                                    </Form.Label>
                                    <Form.Label style={{
                                        fontSize: "16px",
                                        color: "black",
                                        fontWeight: '600',
                                    }}>
                                        {data.totalAgents}
                                    </Form.Label>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: "7px"
                                }}>
                                    <Image
                                        style={{
                                            width: "40px",
                                            maxWidth: "100%",
                                        }}
                                        src="/img/profile3.png"
                                        width="40"
                                        height="40"
                                        alt="profile"
                                    />
                                </div>
                            </div>
                            <div style={{
                                width: '33.34%',
                                height: "80px",
                                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1)",
                                transition: "0.3s",
                                display: 'flex',
                                justifyContent: "space-between",
                                background: 'white',
                                padding: "12px 30px"
                            }}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>
                                    <Form.Label style={{
                                        fontSize: "9px",
                                        color: "#A6A6A6"
                                    }}>
                                        Total Drivers
                                    </Form.Label>
                                    <Form.Label style={{
                                        fontSize: "16px",
                                        color: "black",
                                        fontWeight: '600',
                                    }}>
                                        {data.totalDrivers}
                                    </Form.Label>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: "7px"
                                }}>
                                    <Image
                                        style={{
                                            width: "40px",
                                            maxWidth: "100%",
                                        }}
                                        src="/img/profile3.png"
                                        width="40"
                                        height="40"
                                        alt="profile"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                    {props.websiteData.map((data, idx) => (
                        <div
                            key={idx}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                gap: '10px',
                                width: "100%",
                                marginTop: '20px'
                            }}>
                            <div style={{
                                width: '33.34%',
                                height: "80px",
                                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1)",
                                transition: "0.3s",
                                display: 'flex',
                                justifyContent: "space-between",
                                background: 'white',
                                padding: "12px 30px"
                            }}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>
                                    <Form.Label style={{
                                        fontSize: "9px",
                                        color: "#A6A6A6"
                                    }}>
                                        Total Transport companies
                                    </Form.Label>
                                    <Form.Label style={{
                                        fontSize: "16px",
                                        color: "black",
                                        fontWeight: '600',
                                    }}>
                                        {data.totalTransportCompanies}
                                    </Form.Label>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: "7px"
                                }}>
                                    <Image
                                        style={{
                                            width: "40px",
                                            maxWidth: "100%",
                                        }}
                                        src="/img/profile3.png"
                                        width="40"
                                        height="40"
                                        alt="profile"
                                    />
                                </div>
                            </div>
                            <div style={{
                                width: '33.34%',
                                height: "80px",
                                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1)",
                                transition: "0.3s",
                                display: 'flex',
                                justifyContent: "space-between",
                                background: 'white',
                                padding: "12px 30px"
                            }}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>
                                    <Form.Label style={{
                                        fontSize: "9px",
                                        color: "#A6A6A6"
                                    }}>
                                        Total Shipping companies
                                    </Form.Label>
                                    <Form.Label style={{
                                        fontSize: "16px",
                                        color: "black",
                                        fontWeight: '600',
                                    }}>
                                        {data.totalShippingCompanies}
                                    </Form.Label>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: "7px"
                                }}>
                                    <Image
                                        style={{
                                            width: "40px",
                                            maxWidth: "100%",
                                        }}
                                        src="/img/profile3.png"
                                        width="40"
                                        height="40"
                                        alt="profile"
                                    />
                                </div>
                            </div>
                            <div style={{
                                width: '33.34%',
                                height: "80px",
                                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1)",
                                transition: "0.3s",
                                display: 'flex',
                                justifyContent: "space-between",
                                background: 'white',
                                padding: "12px 30px"
                            }}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>
                                    <Form.Label style={{
                                        fontSize: "9px",
                                        color: "#A6A6A6"
                                    }}>
                                        Total Brokers
                                    </Form.Label>
                                    <Form.Label style={{
                                        fontSize: "16px",
                                        color: "black",
                                        fontWeight: '600',
                                    }}>
                                        {data.totalBrokers}
                                    </Form.Label>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: "7px"
                                }}>
                                    <Image
                                        style={{
                                            width: "40px",
                                            maxWidth: "100%",
                                        }}
                                        src="/img/profile3.png"
                                        width="40"
                                        height="40"
                                        alt="profile"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                    {props.websiteData.map((data, idx) => (
                        <div
                            key={idx}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                gap: '10px',
                                width: "100%",
                                marginTop: '20px'
                            }}>
                            <div style={{
                                width: '33.34%',
                                height: "80px",
                                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1)",
                                transition: "0.3s",
                                display: 'flex',
                                justifyContent: "space-between",
                                background: 'white',
                                padding: "12px 30px"
                            }}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>
                                    <Form.Label style={{
                                        fontSize: "9px",
                                        color: "#A6A6A6"
                                    }}>
                                        Total Visitors
                                    </Form.Label>
                                    <Form.Label style={{
                                        fontSize: "16px",
                                        color: "black",
                                        fontWeight: '600',
                                    }}>
                                        {data.totaVisitors}
                                    </Form.Label>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: "7px"
                                }}>
                                    <Image
                                        style={{
                                            width: "40px",
                                            maxWidth: "100%",
                                        }}
                                        src="/img/profile3.png"
                                        width="40"
                                        height="40"
                                        alt="profile"
                                    />
                                </div>
                            </div>
                            <div style={{
                                width: '33.34%',
                                height: "80px",
                                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1)",
                                transition: "0.3s",
                                display: 'flex',
                                justifyContent: "space-between",
                                background: 'white',
                                padding: "12px 30px"
                            }}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>
                                    <Form.Label style={{
                                        fontSize: "9px",
                                        color: "#A6A6A6"
                                    }}>
                                        Total Driver Managers
                                    </Form.Label>
                                    <Form.Label style={{
                                        fontSize: "16px",
                                        color: "black",
                                        fontWeight: '600',
                                    }}>
                                        {data.totaDriverManagers}
                                    </Form.Label>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: "7px"
                                }}>
                                    <Image
                                        style={{
                                            width: "40px",
                                            maxWidth: "100%",
                                        }}
                                        src="/img/profile3.png"
                                        width="40"
                                        height="40"
                                        alt="profile"
                                    />
                                </div>
                            </div>
                            <div style={{
                                width: '33.34%',
                                height: "80px",
                                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1)",
                                transition: "0.3s",
                                display: 'flex',
                                justifyContent: "space-between",
                                background: 'white',
                                padding: "12px 30px"
                            }}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>
                                    <Form.Label style={{
                                        fontSize: "9px",
                                        color: "#A6A6A6"
                                    }}>
                                        Total Customers
                                    </Form.Label>
                                    <Form.Label style={{
                                        fontSize: "16px",
                                        color: "black",
                                        fontWeight: '600',
                                    }}>
                                        {data.totalCustomers}
                                    </Form.Label>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: "7px"
                                }}>
                                    <Image
                                        style={{
                                            width: "40px",
                                            maxWidth: "100%",
                                        }}
                                        src="/img/profile3.png"
                                        width="40"
                                        height="40"
                                        alt="profile"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                    <Form.Label style={{
                        marginTop: '20px',
                        fontSize: '13px',
                        fontWeight: "600",
                        color: 'black'
                    }}>
                        Countries users logged in from
                    </Form.Label>
                    <div style={{
                        display: 'flex',
                        width: '100%',
                        marginTop: "20px",
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image
                            style={{
                                width: "980px",
                                maxWidth: "100%",
                            }}
                            src="/img/atlas.png"
                            width="980"
                            height="480"
                            alt="profile"
                        />
                    </div>
                    <Form.Label style={{
                        marginTop: '20px',
                        fontSize: '13px',
                        fontWeight: "600",
                        color: 'black'
                    }}>
                        Activities
                    </Form.Label>
                    <div style={{
                        display: 'flex',
                        width: '100%',
                        marginTop: "20px",
                        justifyContent: 'space-between',
                        gap: '10px',
                        paddingBottom: "30px"
                    }}>
                        <Image
                            style={{
                                width: "320px",
                                maxWidth: "100%",
                            }}
                            src="/img/chart1.png"
                            width="320"
                            height="367"
                            alt="profile"
                        />
                        <Image
                            style={{
                                width: "320px",
                                maxWidth: "100%",
                            }}
                            src="/img/chart3.png"
                            width="320"
                            height="367"
                            alt="profile"
                        />
                        <Image
                            style={{
                                width: "320px",
                                maxWidth: "100%",
                            }}
                            src="/img/chart5.png"
                            width="320"
                            height="367"
                            alt="profile"
                        />
                    </div>
                </>
            )}
        </>
    )
}