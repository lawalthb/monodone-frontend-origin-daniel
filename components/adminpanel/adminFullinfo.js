import Image from "next/image";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import GeneralModal from "../customers/modal";
import AdminFullInfoMobile from "./adminpanelMobile/adminFullInfoMobile";

export default function AdminFullinfo(props) {
    const isMobile = useMediaQuery({
        query: "(max-width: 709px)",
    });
    const isTabAndDesktop = useMediaQuery({
        query: "(min-width: 710px)",
    });

    return (
        <>
            {isMobile && (
                <GeneralModal
                    size="lg"
                    show={props.adminFullinfo}
                    onHide={() => {
                        props.setAdminFullinfo(false)
                    }}
                    style={props.style}
                >
                    <AdminFullInfoMobile
                        caption={props.caption}
                        agentNo={props.agentNo}
                        dateAdded={props.dateAdded}
                        name={props.name}
                        address={props.address}
                        phoneNo={props.phoneNo}
                        weight={props.weight}
                        dimensions={props.dimensions}
                        guarantorName1={props.guarantorName1}
                        guarantorAddress1={props.guarantorAddress1}
                        guarantorPhone1={props.guarantorPhone1}
                        guarantorName2={props.guarantorName2}
                        guarantorAddress2={props.guarantorAddress2}
                        guarantorPhone2={props.guarantorPhone2}
                        setIsAgentRequest={props.setIsAgentRequest}
                        setIsAgentManagement={props.setIsAgentManagement}
                        setAgentList={props.setAgentList}
                        adminFullinfo={props.adminFullinfo}
                        setAdminFullinfo={props.setAdminFullinfo}
                        isAgentRequest={props.isAgentRequest}
                        editOption={props.editOption}
                        okOption={props.okOption}
                        compName={props.compName}
                        isDriversManagement={props.isDriversManagement}
                        isAgentManagement={props.isAgentManagement}
                        setStatistics={props.setStatistics}
                        setReview={props.setReview}
                        isDriversRequest={props.isDriversRequest}
                        isBrokersRequest={props.isBrokersRequest}
                        isDriverManagersManagement={props.isDriverManagersManagement}
                        isDriverManagersRequest={props.isDriverManagersRequest}
                        isShippingCompaniesRequest={props.isShippingCompaniesRequest}
                        isTransportCompaniesManagement={props.isTransportCompaniesManagement}
                        isTransportCompaniesRequest={props.isTransportCompaniesRequest}
                        isEmployeeManagement={props.isEmployeeManagement}
                        isEmployeeRequest={props.isEmployeeRequest}
                        isClearingManagement={props.isClearingManagement}
                        isClearingRequest={props.isClearingRequest}
                    />
                </GeneralModal>
            )}
            {isTabAndDesktop && (

                (props.isEmployeesManagement || props.isEmployeesRequest) ? (
                    <>
                        <GeneralModal
                            size="md"
                            show={props.adminFullinfo}
                            onHide={() => {
                                props.setAdminFullinfo(false)
                                // props.setBackdrop(false)
                            }}
                            style={props.style}
                        >
                            <Modal.Body style={{
                                display: "flex",
                                flexDirection: 'column'
                            }}>
                                <div
                                    onClick={() => {
                                        props.setAdminFullinfo(false)
                                        // props.setBackdrop(false)
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
                                    Full Information
                                </div>
                                <div style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    gap: "10px",
                                    marginTop: "20px"
                                }}>
                                    <Form.Label style={{
                                        fontSize: "14px",
                                        fontWeight: "600",
                                        color: 'black'
                                    }}>
                                        DRIVER
                                    </Form.Label>
                                    {props.isEmployeesManagement && (
                                        <Button
                                            onClick={() => {
                                                props.setStatistics(true)
                                                props.setAdminFullinfo(false)
                                            }}
                                            style={{
                                                display: 'flex',
                                                width: '45%',
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
                                            <Form.Label style={{
                                                fontSize: "12px",
                                                fontWeight: "400",
                                                color: '#7CC427'
                                            }}>
                                                Watch Statistics
                                            </Form.Label>
                                        </Button>

                                    )}
                                </div>
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
                                    width: "100%",
                                    marginTop: "10px"
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: "10px",
                                        width: '40%'
                                    }}>
                                        <Form.Label style={{
                                            fontSize: "13px",
                                            fontWeight: "400"
                                        }}>
                                            Number
                                        </Form.Label>
                                        <Form.Label style={{
                                            fontSize: "13px",
                                            fontWeight: "400"
                                        }}>
                                            Date added
                                        </Form.Label>
                                        <Form.Label style={{
                                            fontSize: "13px",
                                            fontWeight: "400"
                                        }}>
                                            Name
                                        </Form.Label>
                                        <Form.Label style={{
                                            fontSize: "13px",
                                            fontWeight: "400"
                                        }}>
                                            Address
                                        </Form.Label>
                                        <Form.Label style={{
                                            fontSize: "13px",
                                            fontWeight: "400",
                                            marginTop: '20px'
                                        }}>
                                            Phone number
                                        </Form.Label>
                                        <Form.Label style={{
                                            fontSize: "13px",
                                            fontWeight: "400"
                                        }}>
                                            Weight
                                        </Form.Label>
                                        <Form.Label style={{
                                            fontSize: "13px",
                                            fontWeight: "400"
                                        }}>
                                            Dimensions
                                        </Form.Label>
                                        {props.isEmployeesManagement && (
                                            <Form.Label style={{
                                                fontSize: "13px",
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
                                        width: '58%'
                                    }}>
                                        <Form.Label style={{
                                            fontSize: "13px",
                                            fontWeight: "500",
                                            color: 'black'
                                        }}>
                                            {props.agentNo}
                                        </Form.Label>
                                        <Form.Label style={{
                                            fontSize: "13px",
                                            fontWeight: "500",
                                            color: 'black'
                                        }}>
                                            {props.dateAdded}
                                        </Form.Label>
                                        <Form.Label style={{
                                            fontSize: "13px",
                                            fontWeight: "500",
                                            color: 'black'
                                        }}>
                                            {props.name}
                                        </Form.Label>
                                        <Form.Label style={{
                                            fontSize: "13px",
                                            fontWeight: "500",
                                            color: 'black'
                                        }}>
                                            {props.address}
                                        </Form.Label>
                                        <Form.Label style={{
                                            fontSize: "13px",
                                            fontWeight: "500",
                                            color: 'black'
                                        }}>
                                            {props.phoneNo}
                                        </Form.Label>
                                        <Form.Label style={{
                                            fontSize: "13px",
                                            fontWeight: "500",
                                            color: 'black'
                                        }}>
                                            {props.weight}
                                        </Form.Label>
                                        <Form.Label style={{
                                            fontSize: "13px",
                                            fontWeight: "500",
                                            color: 'black'
                                        }}>
                                            {props.dimensions}
                                        </Form.Label>
                                    </div>
                                </div>
                                {props.isEmployeesManagement && (

                                    <div style={{
                                        display: "flex",
                                        justifyContent: 'space-between'
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
                                                width: '50%',
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
                                {props.isEmployeesRequest && (
                                    <>
                                        <Form.Label style={{
                                            fontSize: "13px",
                                            fontWeight: "400",
                                            marginTop: '10px'
                                        }}>
                                            Uploaded documents:
                                        </Form.Label>
                                        <div style={{
                                            display: "flex",
                                            gap: '10px',
                                            marginTop: '10px',
                                            justifyContent: "center",
                                            alignItems: 'center'
                                        }}>
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
                                        onClick={props.handleAdminFullinfo}
                                        style={{
                                            background: "#00902F",
                                            border: "none",
                                            padding: "7px",
                                            color: "white",
                                            width: '50%'
                                        }}>
                                        Ok
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            props.handleEditOption()
                                        }}
                                        style={{
                                            background: "transparent",
                                            border: "1px solid #00902F",
                                            padding: "7px",
                                            width: '50%',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: "center",
                                            gap: "10px",
                                            height: "40px"
                                        }}>
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

                                        <Form.Label style={{
                                            fontSize: "13px",
                                            color: "black",
                                            marginTop: '4px'
                                        }}>
                                            Edit
                                        </Form.Label>
                                    </Button>
                                </div>
                            </Modal.Body>
                        </GeneralModal>
                    </>
                ) : (
                    <>
                        <GeneralModal
                            size="lg"
                            show={props.adminFullinfo}
                            onHide={() => {
                                props.setAdminFullinfo(false)
                                // props.setBackdrop(false)
                            }}
                            style={props.style}
                        >
                            <Modal.Body style={{
                                display: "flex",
                                flexDirection: 'column'
                            }}>
                                <div
                                    onClick={() => {
                                        props.setAdminFullinfo(false)
                                        // props.setBackdrop(false)
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
                                <div style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    gap: "10px",
                                    marginTop: "20px"
                                }}>
                                    <div style={{
                                        position: "absolute",
                                        borderLeft: "1px solid #E7E7E7",
                                        height: '80%',
                                        left: "47%",
                                        top: "4rem"
                                    }}>

                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        width: "49%",

                                    }}>
                                        {(props.isDriversManagement || props.isDriversManagersManagement
                                            || props.isTransportCompanyManagement
                                            || props.isClearingForwardingManagement) ? (
                                            <div style={{
                                                display: "flex",
                                                justifyContent: 'space-between',
                                                marginBottom: "10px"
                                            }}>
                                                <Form.Label style={{
                                                    fontSize: "14px",
                                                    fontWeight: "600",
                                                    color: 'black'
                                                }}>
                                                    {props.compName}
                                                </Form.Label>
                                                <Button
                                                    onClick={() => {
                                                        props.setStatistics(true)
                                                        props.setAdminFullinfo(false)
                                                    }}
                                                    style={props.isClearingForwardingManagement ? {
                                                        display: 'flex',
                                                        width: '60%',
                                                        background: 'transparent',
                                                        border: '1px solid #7CC427',
                                                        height: '30px',
                                                        marginRight: "20px",
                                                        gap: '10px'
                                                    } : {
                                                        display: 'flex',
                                                        width: '45%',
                                                        background: 'transparent',
                                                        border: '1px solid #7CC427',
                                                        height: '30px',
                                                        marginRight: "20px",
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
                                                    <Form.Label style={{
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
                                                fontSize: "14px",
                                                fontWeight: "600",
                                                color: 'black'
                                            }}>
                                                {props.compName}
                                            </Form.Label>
                                        )}
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
                                        {(props.isLoadBoardManagement
                                            || props.isLoadBoardRequest
                                            || props.isOrders
                                            || props.isTransactions) ? (
                                            <>
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
                                                        width: '35%'
                                                    }}>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400",
                                                            marginTop: '10px'
                                                        }}>
                                                            Status
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400"
                                                        }}>
                                                            Order No
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400"
                                                        }}>
                                                            From
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400"
                                                        }}>
                                                            To
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400"
                                                        }}>
                                                            Sender
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400"
                                                        }}>
                                                            Recipient
                                                        </Form.Label>
                                                    </div>
                                                    <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        gap: "10px",
                                                        width: '63%'
                                                    }}>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "500",
                                                            color: 'black',
                                                            background: "rgba(128, 128, 128, 0.2)",
                                                            borderRadius: '7px',
                                                            width: "fit-content",
                                                            padding: '6px',
                                                            color: "#808080"
                                                        }}>
                                                            Issued
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "500",
                                                            color: 'black',

                                                        }}>
                                                            200393 66363 6636322
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "500",
                                                            color: 'black',

                                                        }}>
                                                            Lagos
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "500",
                                                            color: 'black',

                                                        }}>
                                                            Abuja
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "500",
                                                            color: 'black',

                                                        }}>
                                                            Alex Ekwueme
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "500",
                                                            color: 'black',

                                                        }}>
                                                            Alex Ekwueme
                                                        </Form.Label>
                                                    </div>
                                                </div>
                                                <Form.Label style={{
                                                    fontSize: "14px",
                                                    fontWeight: "600",
                                                    color: 'black',
                                                    marginTop: "20px"
                                                }}>
                                                    OPTIONS OF PARCEL:
                                                </Form.Label>
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
                                                        width: '30%'
                                                    }}>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400",
                                                            marginTop: '10px'
                                                        }}>
                                                            Description
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400",
                                                            marginTop: '10px'
                                                        }}>
                                                            Type of parcel
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400",
                                                            marginTop: '10px'
                                                        }}>
                                                            Weight, lbs
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400",
                                                            marginTop: '10px'
                                                        }}>
                                                            Size, cm
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400",
                                                            marginTop: '10px'
                                                        }}>
                                                            Estimated value
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400",
                                                            marginTop: '10px'
                                                        }}>
                                                            Other
                                                        </Form.Label>
                                                    </div>
                                                    <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        gap: "10px",
                                                        width: '60%',
                                                        paddingLeft: "10px"
                                                    }}>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400",
                                                            marginTop: '10px'
                                                        }}>
                                                            Lego Technic Tractor John
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400",
                                                            marginTop: '10px'
                                                        }}>
                                                            Package
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400",
                                                            marginTop: '10px'
                                                        }}>
                                                            10
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400",
                                                            marginTop: '10px'
                                                        }}>
                                                            22 x 155 x 32
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400",
                                                            marginTop: '10px'
                                                        }}>
                                                            220.00
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400",
                                                            marginTop: '10px'
                                                        }}>
                                                            Fragile product
                                                        </Form.Label>
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <>
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
                                                        width: '35%'
                                                    }}>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400"
                                                        }}>
                                                            Number
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400"
                                                        }}>
                                                            Date added
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400"
                                                        }}>
                                                            Name
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400"
                                                        }}>
                                                            Address
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400",
                                                            marginTop: '20px'
                                                        }}>
                                                            Phone number
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400"
                                                        }}>
                                                            Weight
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400"
                                                        }}>
                                                            Dimensions
                                                        </Form.Label>
                                                        {(props.isDriversManagement || props.isDriversManagersManagement
                                                            || props.isTransportCompanyManagement
                                                            || props.isClearingForwardingManagement) && (
                                                                <Form.Label style={{
                                                                    fontSize: "13px",
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
                                                        width: '63%'
                                                    }}>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "500",
                                                            color: 'black'
                                                        }}>
                                                            {props.agentNo}
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "500",
                                                            color: 'black'
                                                        }}>
                                                            {props.dateAdded}
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "500",
                                                            color: 'black'
                                                        }}>
                                                            {props.name}
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "500",
                                                            color: 'black'
                                                        }}>
                                                            {props.address}
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "500",
                                                            color: 'black'
                                                        }}>
                                                            {props.phoneNo}
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "500",
                                                            color: 'black'
                                                        }}>
                                                            {props.weight}
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "500",
                                                            color: 'black'
                                                        }}>
                                                            {props.dimensions}
                                                        </Form.Label>
                                                        {(props.isDriversManagement || props.isDriversManagersManagement
                                                            || props.isTransportCompanyManagement
                                                            || props.isClearingForwardingManagement) && (
                                                                <div style={{
                                                                    display: "flex",
                                                                    justifyContent: 'space-between'
                                                                }}>
                                                                    <div>
                                                                        {props.isDriversManagement && (
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
                                                                        )}
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
                                                                            width: '50%',
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
                                            </>
                                        )}
                                        {(props.isAgentManagement) && (
                                            <>
                                                <Form.Label style={{
                                                    fontSize: "13px",
                                                    fontWeight: "400",
                                                    marginTop: '10px'
                                                }}>
                                                    The store
                                                </Form.Label>
                                                <div style={{
                                                    display: 'flex',
                                                    gap: '10px'
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
                                        {(props.isDriversManagement || props.isDriversRequest
                                            || props.isBrokersRequest || props.isDriversManagersManagement
                                            || props.isDriversManagersRequest || props.isShippingCompaniesRequest
                                            || props.isTransportCompanyManagement
                                            || props.isTransportCompanyRequest
                                            || props.isClearingForwardingManagement
                                            || props.isClearingForwardingRequest) ? (
                                            <Form.Label style={{
                                                fontSize: "13px",
                                                fontWeight: "400",
                                                marginTop: '10px'
                                            }}>
                                                Uploaded documents:
                                            </Form.Label>
                                        ) : (props.isLoadBoardManagement
                                            || props.isOrders
                                            || props.isTransactions) ? (
                                            ""
                                        ) : (
                                            <Form.Label style={{
                                                fontSize: "13px",
                                                fontWeight: "400",
                                                marginTop: '10px'
                                            }}>
                                                Registration documents:
                                            </Form.Label>
                                        )}
                                        {(props.isDriversManagement || props.isDriversRequest
                                            || props.isBrokersRequest || props.isDriversManagersManagement
                                            || props.isDriversManagersRequest || props.isShippingCompaniesRequest
                                            || props.isTransportCompanyManagement
                                            || props.isTransportCompanyRequest
                                            || props.isClearingForwardingManagement
                                            || props.isClearingForwardingRequest) ? (
                                            <div style={{
                                                display: "flex",
                                                gap: '3px'
                                            }}>
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
                                            </div>
                                        ) : (props.isLoadBoardManagement
                                            || props.isLoadBoardRequest
                                            || props.isOrders
                                            || props.isTransactions) ? (
                                            ""
                                        ) : (
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
                                    </div>
                                    {(props.isLoadBoardManagement
                                        || props.isLoadBoardRequest
                                        || props.isOrders
                                        || props.isTransactions) ? (
                                        <>
                                            <div style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                width: "49%"
                                            }}>
                                                <Form.Label style={{
                                                    fontSize: "14px",
                                                    fontWeight: "600",
                                                    color: 'black'
                                                }}>
                                                    DATE INFORMATION:
                                                </Form.Label>
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
                                                        width: '35%'
                                                    }}>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400",
                                                            marginTop: '10px'
                                                        }}>
                                                            Date:
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400",
                                                        }}>
                                                            Arrived:
                                                        </Form.Label>
                                                    </div>
                                                    <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        gap: "10px",
                                                        width: '35%'
                                                    }}>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400",
                                                            marginTop: '10px',
                                                            color: 'black'
                                                        }}>
                                                            22 Jul 2022
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400",
                                                            color: 'black'
                                                        }}>
                                                            22 Jul 2022
                                                        </Form.Label>
                                                    </div>
                                                </div>
                                                <Form.Label style={{
                                                    fontSize: "14px",
                                                    fontWeight: "600",
                                                    color: 'black',
                                                    marginTop: '20px'
                                                }}>
                                                    PAYMENT INFORMATION:
                                                </Form.Label>
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
                                                        width: '35%'
                                                    }}>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400",
                                                            marginTop: '10px'
                                                        }}>
                                                            Price of parcel:
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400",
                                                        }}>
                                                            Insurance Price:
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400",
                                                        }}>
                                                            Total Price:
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400",
                                                        }}>
                                                            Payment status:
                                                        </Form.Label>
                                                    </div>
                                                    <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        gap: "10px",
                                                        width: '35%'
                                                    }}>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400",
                                                            marginTop: '10px',
                                                            color: 'black'
                                                        }}>
                                                            #120.00
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400",
                                                            color: 'black'
                                                        }}>
                                                            #8.00
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400",
                                                            color: 'black'
                                                        }}>
                                                            #128.00
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400",
                                                            color: 'black',
                                                            borderRadius: '6px',
                                                            width: 'fit-content',
                                                            background: "rgba(124, 196, 39, 0.2)",
                                                            padding: "5px",
                                                            color: "#7CC427"
                                                        }}>
                                                            Paid
                                                        </Form.Label>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                width: "49%"
                                            }}>
                                                <Form.Label style={{
                                                    fontSize: "14px",
                                                    fontWeight: "600",
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
                                                        width: '35%'
                                                    }}>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400",
                                                            marginTop: '10px'
                                                        }}>
                                                            Name
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400",
                                                        }}>
                                                            Address
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
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
                                                            fontSize: "13px",
                                                            fontWeight: "500",
                                                            color: 'black',
                                                            marginTop: '10px'
                                                        }}>
                                                            {props.guarantorName1}
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "500",
                                                            color: 'black',
                                                        }}>
                                                            {props.guarantorAddress1}
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
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
                                                    fontWeight: "600",
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
                                                        width: '35%'
                                                    }}>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400",
                                                            marginTop: '10px'
                                                        }}>
                                                            Name
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "400",
                                                        }}>
                                                            Address
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
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
                                                            fontSize: "13px",
                                                            fontWeight: "500",
                                                            color: 'black',
                                                            marginTop: '10px'
                                                        }}>
                                                            {props.guarantorName2}
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
                                                            fontWeight: "500",
                                                            color: 'black',
                                                        }}>
                                                            {props.guarantorAddress2}
                                                        </Form.Label>
                                                        <Form.Label style={{
                                                            fontSize: "13px",
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
                                </div>
                                <div style={{
                                    display: "flex",
                                    justifyContent: 'center',
                                    alignItems: "center",
                                    marginTop: "20px",
                                    gap: '20px'
                                }}>
                                    <Button
                                        onClick={props.handleAdminFullinfo}
                                        style={{
                                            background: "#00902F",
                                            border: "none",
                                            padding: "7px",
                                            color: "white",
                                            width: '30%'
                                        }}>
                                        {props.okOption}
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            props.handleEditOption()
                                        }}
                                        style={{
                                            background: "transparent",
                                            border: "1px solid #00902F",
                                            padding: "7px",
                                            width: '30%',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: "center",
                                            gap: "10px",
                                            height: "40px"
                                        }}>
                                        {(props.isAgentManagement || props.isDriversManagement
                                            || props.isDriversManagersManagement
                                            || props.isTransportCompanyManagement
                                            || props.isClearingForwardingManagement
                                            || props.isLoadBoardManagement
                                            || props.isOrders
                                            || props.isTransactions) && (
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
                        </GeneralModal>
                    </>
                )

            )}
        </>
    )
}