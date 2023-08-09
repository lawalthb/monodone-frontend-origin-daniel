import Image from "next/image";
import { Button, Form, Modal } from "react-bootstrap";

export default function AdminFullInfoMobile(props) {
    return (
        <>
            <Modal.Body style={{
                display: "flex",
                flexDirection: 'column'
            }}>
                <div
                    onClick={() => {
                        props.setAdminFullinfo(false)
                    }}
                    style={{
                        position: "absolute",
                        top: "-1rem",
                        right: '-0.8rem',
                        cursor: "pointer"
                    }}>
                    <Image src="/img/close.png" width="14" height="14" alt="close" />
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: "center",
                    alignContent: 'center',
                    fontWeight: '600',
                    fontSize: "16px"
                }}>
                    {props.caption}
                </div>
                {(props.isDriversManagement
                    || props.isBrokersRequest
                    || props.isDriverManagersManagement
                    || props.isDriverManagersRequest
                    || props.isShippingCompaniesRequest
                    || props.isTransportCompaniesManagement
                    || props.isTransportCompaniesRequest
                    || props.isEmployeeManagement
                    || props.isClearingManagement) ? (
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "20px"
                    }}>
                        <Form.Label style={(props.isDriverManagersManagement
                            || props.isDriverManagersRequest
                            || props.isShippingCompaniesRequest
                            || props.isTransportCompaniesManagement
                            || props.isTransportCompaniesRequest) ? {
                            fontSize: "12px",
                            fontWeight: "500",
                            color: 'black'
                        } : props.isClearingManagement ? {
                            fontSize: "10px",
                            fontWeight: "500",
                            color: 'black'
                        } : {
                            fontSize: "14px",
                            fontWeight: "500",
                            color: 'black'
                        }}>
                            {props.compName}
                        </Form.Label>
                        <Button
                            onClick={() => {
                                props.setStatistics(true)
                                props.setAdminFullinfo(false)
                            }}
                            style={{
                                display: 'flex',
                                background: 'transparent',
                                border: '1px solid #7CC427',
                                height: '30px',
                                gap: '10px'
                            }}>
                            <Image
                                style={{
                                    width: "10px",
                                    maxWidth: "100%",
                                    marginTop: '4px'
                                }}
                                src="/img/statistics.png"
                                width="10"
                                height="10"
                                alt="regdoc"
                            />
                            <Form.Label style={(props.isDriverManagersManagement
                                || props.isDriverManagersRequest
                                || props.isShippingCompaniesRequest
                                || props.isTransportCompaniesRequest
                                || props.isClearingManagement) ? {
                                fontSize: "10px",
                                fontWeight: "400",
                                color: '#7CC427'
                            } : {
                                fontSize: "12px",
                                fontWeight: "400",
                                color: '#7CC427'
                            }}>
                                Watch Statistics
                            </Form.Label>
                        </Button>

                    </div>
                ) : (
                    <Form.Label style={{
                        fontSize: "12px",
                        fontWeight: "500",
                        color: 'black',
                        marginTop: '20px'
                    }}>
                        {props.compName}
                    </Form.Label>
                )}
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "20px",
                    marginTop: "20px"
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: "10px",
                        width: '40%'
                    }}>
                        <Form.Label style={{
                            fontSize: "12px",
                            fontWeight: "400"
                        }}>
                            Number
                        </Form.Label>
                        <Form.Label style={{
                            fontSize: "12px",
                            fontWeight: "400"
                        }}>
                            Date added
                        </Form.Label>
                        <Form.Label style={{
                            fontSize: "12px",
                            fontWeight: "400"
                        }}>
                            Name
                        </Form.Label>
                        <Form.Label style={{
                            fontSize: "12px",
                            fontWeight: "400"
                        }}>
                            Address
                        </Form.Label>
                        <Form.Label style={{
                            fontSize: "12px",
                            fontWeight: "400",
                            marginTop: '20px'
                        }}>
                            Phone number
                        </Form.Label>
                        <Form.Label style={{
                            fontSize: "12px",
                            fontWeight: "400"
                        }}>
                            Weight
                        </Form.Label>
                        <Form.Label style={{
                            fontSize: "12px",
                            fontWeight: "400"
                        }}>
                            Dimensions
                        </Form.Label>
                        {(props.isDriversManagement
                            || props.isBrokersRequest
                            || props.isDriverManagersManagement
                            || props.isDriverManagersRequest
                            || props.isShippingCompaniesRequest
                            || props.isTransportCompaniesManagement
                            || props.isTransportCompaniesRequest
                            || props.isEmployeeManagement
                            || props.isClearingManagement) && (
                                <Form.Label style={{
                                    fontSize: "12px",
                                    fontWeight: "400"
                                }}>
                                    Rate
                                </Form.Label>
                            )}
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: "10px",
                        width: '60%'
                    }}>
                        <Form.Label style={{
                            fontSize: "12px",
                            fontWeight: "500",
                            color: 'black'
                        }}>
                            {props.agentNo}
                        </Form.Label>
                        <Form.Label style={{
                            fontSize: "12px",
                            fontWeight: "500",
                            color: 'black'
                        }}>
                            {props.dateAdded}
                        </Form.Label>
                        <Form.Label style={{
                            fontSize: "12px",
                            fontWeight: "500",
                            color: 'black'
                        }}>
                            {props.name}
                        </Form.Label>
                        <Form.Label style={{
                            fontSize: "12px",
                            fontWeight: "500",
                            color: 'black'
                        }}>
                            {props.address}
                        </Form.Label>
                        <Form.Label style={{
                            fontSize: "12px",
                            fontWeight: "500",
                            color: 'black'
                        }}>
                            {props.phoneNo}
                        </Form.Label>
                        <Form.Label style={{
                            fontSize: "12px",
                            fontWeight: "500",
                            color: 'black'
                        }}>
                            {props.weight}
                        </Form.Label>
                        <Form.Label style={{
                            fontSize: "12px",
                            fontWeight: "500",
                            color: 'black'
                        }}>
                            {props.dimensions}
                        </Form.Label>
                        {(props.isDriversManagement
                            || props.isBrokersRequest
                            || props.isDriverManagersManagement
                            || props.isDriverManagersRequest
                            || props.isShippingCompaniesRequest
                            || props.isTransportCompaniesManagement
                            || props.isTransportCompaniesRequest
                            || props.isEmployeeManagement
                            || props.isClearingManagement) && (

                                <div style={{
                                    display: "flex",
                                    flexDirection: 'column'
                                }}>
                                    <div>
                                        {
                                            new Array(5).fill(
                                                <Image
                                                    style={{
                                                        width: "10px",
                                                        maxWidth: "100%",
                                                    }}
                                                    src="/img/rateact.png"
                                                    width="10"
                                                    height="9"
                                                    alt="badge"
                                                />
                                            ).map((data, idx) => (
                                                <span key={idx}>
                                                    {data}
                                                </span>
                                            ))
                                        }
                                        <Form.Label style={{
                                            fontSize: "12px",
                                            fontWeight: "500",
                                            color: 'black',
                                            marginLeft: '7px',
                                            marginTop: "4px"
                                        }}>
                                            4.6
                                        </Form.Label>
                                    </div>
                                    <Button
                                        onClick={() => {
                                            props.setReview(true)
                                            props.setAdminFullinfo(false)
                                        }}
                                        style={{
                                            display: 'flex',
                                            background: 'transparent',
                                            border: '1px solid #7CC427',
                                            height: '30px',
                                            color: '#7CC427',
                                            fontSize: "11px",
                                            marginRight: "20px",
                                            fontWeight: "500"
                                        }}>
                                        Reviews (14)
                                    </Button>
                                </div>
                            )}
                    </div>
                </div>
                {(props.isAgentRequest || props.isAgentManagement) && (
                    <>
                        <Form.Label style={{
                            fontSize: "13px",
                            fontWeight: "400",
                            marginTop: '10px'
                        }}>
                            The store
                        </Form.Label>
                        <div style={{
                            display: "flex",
                            gap: "10px",
                            marginTop: "5px"
                        }}>
                            <Image
                                style={{
                                    width: "130px",
                                    maxWidth: "100%",
                                }}
                                src="/img/storeimg.png"
                                width="130"
                                height="90"
                                alt="store"
                            />
                            <Image
                                style={{
                                    width: "130px",
                                    maxWidth: "100%",
                                }}
                                src="/img/storeimg2.png"
                                width="130"
                                height="90"
                                alt="store"
                            />
                        </div>
                    </>
                )}
                <Form.Label style={{
                    fontSize: "13px",
                    fontWeight: "400",
                    marginTop: '10px'
                }}>
                    {(props.isDriversManagement
                        || props.isDriversRequest
                        || props.isBrokersRequest
                        || props.isDriverManagersManagement
                        || props.isDriverManagersRequest
                        || props.isShippingCompaniesRequest
                        || props.isTransportCompaniesManagement
                        || props.isTransportCompaniesRequest
                        || props.isEmployeeRequest
                        || props.isClearingManagement
                        || props.isClearingRequest) ?
                        "Uploaded documents" : props.isEmployeeManagement ? ""
                            : "Registration documents:"}

                </Form.Label>
                {(props.isDriversManagement
                    || props.isDriversRequest
                    || props.isBrokersRequest
                    || props.isDriverManagersManagement
                    || props.isDriverManagersRequest
                    || props.isShippingCompaniesRequest
                    || props.isTransportCompaniesManagement
                    || props.isTransportCompaniesRequest
                    || props.isEmployeeRequest
                    || props.isClearingManagement
                    || props.isClearingRequest) ? (
                    <>
                        <div style={{
                            display: "flex",
                            gap: "5px"
                        }}>
                            <Image
                                style={{
                                    width: "84px",
                                    maxWidth: "100%",
                                }}
                                src="/img/regdoc.png"
                                width="84"
                                height="140"
                                alt="regdoc"
                            />
                            <Image
                                style={{
                                    width: "84px",
                                    maxWidth: "100%",
                                }}
                                src="/img/regdoc.png"
                                width="84"
                                height="140"
                                alt="regdoc"
                            />
                            <Image
                                style={{
                                    width: "84px",
                                    maxWidth: "100%",
                                }}
                                src="/img/regdoc.png"
                                width="84"
                                height="140"
                                alt="regdoc"
                            />
                        </div>
                    </>
                ) : props.isEmployeeManagement ? undefined
                    : (
                        <Image
                            style={{
                                width: "96px",
                                maxWidth: "100%",
                            }}
                            src="/img/regdoc.png"
                            width="96"
                            height="140"
                            alt="regdoc"
                        />
                    )}
                {(props.isEmployeeManagement
                    || props.isEmployeeRequest) ? undefined : (
                    <>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: "100%"
                        }}>
                            <Form.Label style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                color: 'black'
                            }}>
                                GUARANTOR 1:
                            </Form.Label>
                            <Image
                                style={{
                                    width: "70px",
                                    maxWidth: "100%",
                                    marginTop: '10px'
                                }}
                                src="/img/guarantor1.png"
                                width="70"
                                height="50"
                                alt="regdoc"
                            />
                            <div style={{
                                display: "flex",
                                justifyContent: 'space-between',
                                gap: '10px',
                                width: "100%"
                            }}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: "10px",
                                    width: '40%'
                                }}>
                                    <Form.Label style={{
                                        fontSize: "12px",
                                        fontWeight: "400",
                                        marginTop: '10px'
                                    }}>
                                        Name
                                    </Form.Label>
                                    <Form.Label style={{
                                        fontSize: "12px",
                                        fontWeight: "400",
                                    }}>
                                        Address
                                    </Form.Label>
                                    <Form.Label style={{
                                        fontSize: "12px",
                                        fontWeight: "400",
                                        marginTop: '20px'
                                    }}>
                                        Phone number
                                    </Form.Label>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: "10px",
                                    width: '63%'
                                }}>
                                    <Form.Label style={{
                                        fontSize: "12px",
                                        fontWeight: "500",
                                        color: 'black',
                                        marginTop: '10px'
                                    }}>
                                        {props.guarantorName1}
                                    </Form.Label>
                                    <Form.Label style={{
                                        fontSize: "12px",
                                        fontWeight: "500",
                                        color: 'black',
                                    }}>
                                        {props.guarantorAddress1}
                                    </Form.Label>
                                    <Form.Label style={{
                                        fontSize: "12px",
                                        fontWeight: "500",
                                        color: 'black',
                                        marginTop: '10px'
                                    }}>
                                        {props.guarantorPhone1}
                                    </Form.Label>
                                </div>
                            </div>
                            <Form.Label style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                color: 'black',
                                marginTop: '20px'
                            }}>
                                GUARANTOR 2:
                            </Form.Label>
                            <Image
                                style={{
                                    width: "70px",
                                    maxWidth: "100%",
                                    marginTop: '10px'
                                }}
                                src="/img/guarantor1.png"
                                width="70"
                                height="50"
                                alt="regdoc"
                            />
                            <div style={{
                                display: "flex",
                                justifyContent: 'space-between',
                                gap: '10px',
                                width: "100%"
                            }}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: "10px",
                                    width: '40%'
                                }}>
                                    <Form.Label style={{
                                        fontSize: "12px",
                                        fontWeight: "400",
                                        marginTop: '10px'
                                    }}>
                                        Name
                                    </Form.Label>
                                    <Form.Label style={{
                                        fontSize: "12px",
                                        fontWeight: "400",
                                    }}>
                                        Address
                                    </Form.Label>
                                    <Form.Label style={{
                                        fontSize: "12px",
                                        fontWeight: "400",
                                        marginTop: '10px'
                                    }}>
                                        Phone number
                                    </Form.Label>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: "10px",
                                    width: '63%'
                                }}>
                                    <Form.Label style={{
                                        fontSize: "12px",
                                        fontWeight: "500",
                                        color: 'black',
                                        marginTop: '10px'
                                    }}>
                                        {props.guarantorName2}
                                    </Form.Label>
                                    <Form.Label style={{
                                        fontSize: "12px",
                                        fontWeight: "500",
                                        color: 'black',
                                    }}>
                                        {props.guarantorAddress2}
                                    </Form.Label>
                                    <Form.Label style={{
                                        fontSize: "12px",
                                        fontWeight: "500",
                                        color: 'black',
                                        marginTop: '10px'
                                    }}>
                                        {props.guarantorPhone2}
                                    </Form.Label>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                <div style={{
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: "center",
                    marginTop: "20px",
                    gap: '20px'
                }}>
                    <Button
                        onClick={(props.isDriversManagement
                            || props.isDriversRequest
                            || props.isBrokersRequest
                            || props.isDriverManagersManagement
                            || props.isDriverManagersRequest
                            || props.isShippingCompaniesRequest
                            || props.isTransportCompaniesManagement
                            || props.isTransportCompaniesRequest
                            || props.isEmployeeManagement
                            || props.isEmployeeRequest
                            || props.isClearingManagement
                            || props.isClearingRequest) ?
                            () => props.setAdminFullinfo(false)
                            : () => {
                                props.setIsAgentRequest(false);
                                props.setIsAgentManagement(false);
                                props.setAgentList(true)
                                props.setAdminFullinfo(false)
                            }}
                        style={{
                            background: "#00902F",
                            border: "none",
                            padding: "7px",
                            color: "white",
                            width: '49%'
                        }}>
                        {props.okOption}
                    </Button>
                    <Button
                        onClick={(props.isDriversManagement
                            || props.isDriversRequest
                            || props.isBrokersRequest
                            || props.isDriverManagersManagement
                            || props.isDriverManagersRequest
                            || props.isShippingCompaniesRequest
                            || props.isTransportCompaniesManagement
                            || props.isTransportCompaniesRequest
                            || props.isEmployeeManagement
                            || props.isEmployeeRequest
                            || props.isClearingManagement
                            || props.isClearingRequest) ?
                            () => props.setAdminFullinfo(false)
                            : () => {
                                props.setIsAgentRequest(false);
                                props.setIsAgentManagement(false);
                                props.setAgentList(true)
                                props.setAdminFullinfo(false)
                            }}
                        style={{
                            background: "transparent",
                            border: "1px solid #00902F",
                            padding: "7px",
                            width: '49%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: "center",
                            gap: "10px",
                            height: "40px"
                        }}>
                        {(props.isDriversManagement
                            || props.isBrokersRequest
                            || props.isAgentManagement
                            || props.isDriverManagersManagement
                            || props.isTransportCompaniesManagement
                            || props.isEmployeeManagement
                            || props.isClearingManagement) && (
                                <Image
                                    style={{
                                        width: "13px",
                                        maxWidth: "100%",
                                    }}
                                    src="/img/editadmin.png"
                                    width="13"
                                    height="13"
                                    alt="regdoc"
                                />
                            )}
                        <Form.Label style={{
                            fontSize: "13px",
                            color: "black",
                            marginTop: '4px'
                        }}>
                            {props.editOption}
                        </Form.Label>
                    </Button>
                </div>
            </Modal.Body>
        </>
    )
}