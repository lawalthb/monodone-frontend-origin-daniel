import Image from 'next/image'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import styles from '../driver/manager/manager.module.css'
import ClearingContentDetails from './clearingContentDetails'

export default function ClearingContentMobile(props) {
    const [isClearingContent, setIsClearingContent] = useState(false)
    const [isClearingContent2, setIsClearingContent2] = useState(false)
    const [isClearingContent3, setIsClearingContent3] = useState(false)
    const [isClearingContent4, setIsClearingContent4] = useState(false)
    const [isClearingContent5, setIsClearingContent5] = useState(false)

    return (
        <>
            <div style={{
                height: "100%",
                width: "100%",
                marginLeft: "10px",
                marginRight: "10px",
                padding: "10px",
            }}>

                <div
                    className={styles.walletBackground}
                    style={{
                        height: '164px',
                        padding: "10px",
                        width: "100%",
                        borderRadius: '8px',
                        display: "flex",
                        flexDirection: "column"
                    }}>
                    <Form.Label style={{
                        fontFamily: 'Poppins',
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: "18px",
                        lineHeight: "28px",
                        color: "#FFFFFF",
                        padding: "10px"
                    }}>
                        Nancy
                    </Form.Label>
                    <Form.Label style={{
                        fontFamily: 'Poppins',
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "13px",
                        color: "#FFFFFF",
                        padding: "0px 10px",
                        width: "220px",
                        marginTop: '-10px'
                    }}>
                        Add parcel to your other lists of parcels
                    </Form.Label>
                    <Button style={{
                        background: "white",
                        border: "none",
                        padding: "6px 10px",
                        color: "#00902F",
                        width: "40%",
                        fontSize: '12px',
                        fontWeight: "500",
                        margin: "8px",
                        borderRadius: '8px'
                    }}>
                        View Load board
                    </Button>
                </div>
                <div style={{
                    width: "100%",
                    display: "flex",
                    marginTop: "30px",
                    justifyContent: "space-between"
                }}>
                    <Button style={{
                        background: "white",
                        border: "none",
                        padding: "6px",
                        width: "40%",
                        margin: "8px",
                        borderRadius: '8px',
                        border: "2px solid #E7E7E7",
                        display: 'flex',

                    }}>
                        <Image
                            style={{
                                marginRight: "15px",
                                marginLeft: "10px",
                                marginTop: '4px'
                            }}
                            src="/img/mobilefilter.png"
                            width="16"
                            height="13"
                            alt="filter"
                        />
                        <Form.Label style={{
                            color: "black",
                            fontSize: '11px',
                            fontWeight: "500",
                            marginTop: '2px'
                        }}>Filter here</Form.Label>
                    </Button>
                    <div style={{
                        display: 'flex',
                        justifyContent: "space-between",
                        marginTop: "14px"
                    }}>
                        <Form.Label style={{
                            marginTop: "4px",
                            marginRight: "4px"
                        }}>Sort by</Form.Label>
                        <select style={{
                            height: "30px",
                            width: "100px",
                            borderRadius: '6px',
                            border: "2px solid #E7E7E7",
                            marginLeft: "8px"
                        }}>
                            <option value="Agent No.">Agent No.</option>
                        </select>
                    </div>
                </div>
                <div style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    padding: "10px",
                    marginTop: "30px"
                }}>
                    <div style={{
                        display: "flex",
                        justifyContent: 'space-between',
                        width: "100%",
                        marginBottom: '20px'
                    }}>
                        <div style={{
                            width: "50%",
                            display: "flex"
                        }}>
                            <Image
                                style={{
                                    cursor: "pointer"
                                }}
                                onClick={() => setIsClearingContent((prevState) => !prevState)}
                                src="/img/arrow.png"
                                width="24"
                                height="24"
                                alt="arrow"
                            />
                            <Form.Label style={{
                                marginLeft: "7px",
                                color: "black",
                                fontWeight: 500,
                                marginTop: '3px'
                            }}>Load Type</Form.Label>

                        </div>
                        <div style={{
                            width: "50%",
                            display: "flex"
                        }}>

                            <Form.Label style={{
                                marginLeft: "7px",
                                color: "black",
                                fontWeight: 500,
                                marginTop: '3px'
                            }}>
                                Container Shipment
                            </Form.Label>

                        </div>
                    </div>
                    <ClearingContentDetails
                        handleDeleteLoad={props.handleDeleteLoad}
                        handleUpdateStatus={props.handleUpdateStatus}
                        handleUploadDocument={props.handleUploadDocument}
                        isClearingContent={isClearingContent} />
                    <div style={{
                        display: "flex",
                        justifyContent: 'space-between',
                        width: "100%",
                        marginBottom: '20px'
                    }}>
                        <div style={{
                            width: "50%",
                            display: "flex"
                        }}>
                            <Image
                                style={{
                                    cursor: "pointer"
                                }}
                                onClick={() => setIsClearingContent2((prevState) => !prevState)}
                                src="/img/arrow.png"
                                width="24"
                                height="24"
                                alt="arrow"
                            />
                            <Form.Label style={{
                                marginLeft: "7px",
                                color: "black",
                                fontWeight: 500,
                                marginTop: '3px'
                            }}>Load Type</Form.Label>

                        </div>
                        <div style={{
                            width: "50%",
                            display: "flex"
                        }}>

                            <Form.Label style={{
                                marginLeft: "7px",
                                color: "black",
                                fontWeight: 500,
                                marginTop: '3px'
                            }}>
                                Container Shipment
                            </Form.Label>

                        </div>
                    </div>
                    <ClearingContentDetails
                        handleDeleteLoad={props.handleDeleteLoad}
                        handleUpdateStatus={props.handleUpdateStatus}
                        handleUploadDocument={props.handleUploadDocument}
                        isClearingContent2={isClearingContent2} />
                    <div style={{
                        display: "flex",
                        justifyContent: 'space-between',
                        width: "100%",
                        marginBottom: '20px'
                    }}>
                        <div style={{
                            width: "50%",
                            display: "flex"
                        }}>
                            <Image
                                style={{
                                    cursor: "pointer"
                                }}
                                onClick={() => setIsClearingContent3((prevState) => !prevState)}
                                src="/img/arrow.png"
                                width="24"
                                height="24"
                                alt="arrow"
                            />
                            <Form.Label style={{
                                marginLeft: "7px",
                                color: "black",
                                fontWeight: 500,
                                marginTop: '3px'
                            }}>Load Type</Form.Label>

                        </div>
                        <div style={{
                            width: "50%",
                            display: "flex"
                        }}>

                            <Form.Label style={{
                                marginLeft: "7px",
                                color: "black",
                                fontWeight: 500,
                                marginTop: '3px'
                            }}>
                                Container Shipment
                            </Form.Label>

                        </div>
                    </div>
                    <ClearingContentDetails
                        handleDeleteLoad={props.handleDeleteLoad}
                        handleUpdateStatus={props.handleUpdateStatus}
                        handleUploadDocument={props.handleUploadDocument}
                        isClearingContent3={isClearingContent3} />
                    <div style={{
                        display: "flex",
                        justifyContent: 'space-between',
                        width: "100%",
                        marginBottom: '20px'
                    }}>
                        <div style={{
                            width: "50%",
                            display: "flex"
                        }}>
                            <Image
                                style={{
                                    cursor: "pointer"
                                }}
                                onClick={() => setIsClearingContent4((prevState) => !prevState)}
                                src="/img/arrow.png"
                                width="24"
                                height="24"
                                alt="arrow"
                            />
                            <Form.Label style={{
                                marginLeft: "7px",
                                color: "black",
                                fontWeight: 500,
                                marginTop: '3px'
                            }}>Load Type</Form.Label>

                        </div>
                        <div style={{
                            width: "50%",
                            display: "flex"
                        }}>

                            <Form.Label style={{
                                marginLeft: "7px",
                                color: "black",
                                fontWeight: 500,
                                marginTop: '3px'
                            }}>
                                Container Shipment
                            </Form.Label>

                        </div>
                    </div>
                    <ClearingContentDetails
                        handleDeleteLoad={props.handleDeleteLoad}
                        handleUpdateStatus={props.handleUpdateStatus}
                        handleUploadDocument={props.handleUploadDocument}
                        isClearingContent4={isClearingContent4} />
                    <div style={{
                        display: "flex",
                        justifyContent: 'space-between',
                        width: "100%",
                        marginBottom: '20px'
                    }}>
                        <div style={{
                            width: "50%",
                            display: "flex"
                        }}>
                            <Image
                                style={{
                                    cursor: "pointer"
                                }}
                                onClick={() => setIsClearingContent5((prevState) => !prevState)}
                                src="/img/arrow.png"
                                width="24"
                                height="24"
                                alt="arrow"
                            />
                            <Form.Label style={{
                                marginLeft: "7px",
                                color: "black",
                                fontWeight: 500,
                                marginTop: '3px'
                            }}>Load Type</Form.Label>

                        </div>
                        <div style={{
                            width: "50%",
                            display: "flex"
                        }}>

                            <Form.Label style={{
                                marginLeft: "7px",
                                color: "black",
                                fontWeight: 500,
                                marginTop: '3px'
                            }}>
                                Container Shipment
                            </Form.Label>

                        </div>
                    </div>
                    <ClearingContentDetails
                        handleDeleteLoad={props.handleDeleteLoad}
                        handleUpdateStatus={props.handleUpdateStatus}
                        handleUploadDocument={props.handleUploadDocument}
                        isClearingContent5={isClearingContent5} />
                </div>

                <div style={{
                    display: "flex",
                    justifyContent: 'space-between',
                    marginTop: "20px"
                }}>
                    <select style={{
                        padding: "6px",
                        border: "none",
                    }}>
                        <option value="10">Showing 10</option>
                        <option value="20">Showing 20</option>
                        <option value="30">Showing 30</option>
                        <option value="40">Showing 40</option>
                        <option value="50">Showing 50</option>
                    </select>
                    <Form.Label style={{
                        color: 'black',
                        marginTop: "10px",
                        fontWeight: "500",
                        fontSize: "11px"
                    }}>of 100 entries</Form.Label>
                    <Button
                        style={{
                            background: "transparent",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: 'center',
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            border: "1px solid #7CC427",
                        }}>
                        <Form.Label style={{
                            fontSize: "19px",
                            fontWeight: "600",
                            color: "#7CC427",
                            marginTop: "7px"
                        }}>
                            {"<"}
                        </Form.Label>
                    </Button>
                    <Button
                        style={{
                            background: "#7CC427",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: 'center',
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            border: "1px solid #7CC427",
                        }}>
                        <Form.Label style={{
                            fontSize: "19px",
                            fontWeight: "600",
                            color: "white",
                            marginTop: "7px"
                        }}>
                            {">"}
                        </Form.Label>
                    </Button>
                </div>
            </div>
        </>
    )
}