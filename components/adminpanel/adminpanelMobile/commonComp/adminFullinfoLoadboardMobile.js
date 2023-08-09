import { Button, Form, Modal } from "react-bootstrap"
import GeneralModal from "../../../customers/modal"
import Image from "next/image"

export default function AdminFullinfoLoadboardMobile(props) {
    return (
        <>
            <GeneralModal
                size="md"
                show={props.adminFullinfoLoadboardMobile}
                onHide={() => {
                    props.setAdminFullinfoLoadboardMobile(false)
                }}
                style={props.style}
            >
                <Modal.Body style={{
                    display: "flex",
                    flexDirection: 'column'
                }}>
                    <div
                        onClick={() => {
                            props.setAdminFullinfoLoadboardMobile(false)

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
                    <Form.Label style={{
                        fontSize: "12px",
                        fontWeight: "400",
                        color: 'black',
                        marginTop: '10px'
                    }}>
                        DELIVERY INFORMATION
                    </Form.Label>
                    <Image
                        style={{
                            width: "70px",
                            maxWidth: "100%",
                            marginTop: '10px'
                        }}
                        src="/img/loadboard.png"
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
                        fontSize: "12px",
                        fontWeight: "400",
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
                                marginTop: '10px',
                                color: 'black',
                            }}>
                                Lego Technic Tractor John
                            </Form.Label>
                            <Form.Label style={{
                                fontSize: "13px",
                                fontWeight: "400",
                                marginTop: '10px',
                                color: 'black',
                            }}>
                                Package
                            </Form.Label>
                            <Form.Label style={{
                                fontSize: "13px",
                                fontWeight: "400",
                                marginTop: '10px',
                                color: 'black',
                            }}>
                                10
                            </Form.Label>
                            <Form.Label style={{
                                fontSize: "13px",
                                fontWeight: "400",
                                marginTop: '10px',
                                color: 'black',
                            }}>
                                22 x 155 x 32
                            </Form.Label>
                            <Form.Label style={{
                                fontSize: "13px",
                                fontWeight: "400",
                                marginTop: '10px',
                                color: 'black',
                            }}>
                                220.00
                            </Form.Label>
                            <Form.Label style={{
                                fontSize: "13px",
                                fontWeight: "400",
                                marginTop: '10px',
                                color: 'black',
                            }}>
                                Fragile product
                            </Form.Label>
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: "100%"
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
                            width: '50%'
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
                            width: '50%'
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
                    <div style={{
                        display: "flex",
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
                            {"Ok"}
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
                                {"Edit"}
                            </Form.Label>
                        </Button>
                    </div>
                </Modal.Body>
            </GeneralModal>
        </>
    )
}