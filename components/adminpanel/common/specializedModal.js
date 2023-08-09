import Image from "next/image"
import { useState } from "react"
import { useMediaQuery } from "react-responsive"
import { Button, Form, Modal } from "react-bootstrap"
import GeneralModal from "../../customers/modal"

const ulphosteries = [
    "/img/ulphostery1.png",
    "/img/ulphostery2.jpg",
    "/img/ulphostery3.jpg",
    "/img/ulphostery4.jpg"
]

export default function SpecializedModal(props) {
    const [activeIndex, setActiveIndex] = useState(0)
    const [currentUlphostery, setCurrentUlphostery] = useState(ulphosteries[activeIndex])
    const [next, setNext] = useState(false)
    const [previous, setPrevious] = useState(false)

    const isMobile = useMediaQuery({
        query: "(max-width: 709px)",
    });
    const isTabAndDesktop = useMediaQuery({
        query: "(min-width: 710px)",
    });


    const handleSpecializedAccept = () => {
        props.setSpcializedModal(false)
        props.setGenerateInvoice(true)
    }

    const handleNext = () => {
        if (activeIndex < ulphosteries.length - 1) {
            setActiveIndex(activeIndex + 1)
            setNext(true)
        }
    }

    const handlePrevious = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1)
            setPrevious(true)
        }
    }
    return (
        <>
            <GeneralModal
                size="lg"
                show={props.specializedModal}
                onHide={() => {
                    props.setSpcializedModal(false)
                }}
                style={props.style}
            >
                <Modal.Body style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%'
                }}>
                    <div
                        onClick={() => {
                            props.setSpcializedModal(false)
                        }}
                        style={{
                            position: "absolute",
                            top: "-1rem",
                            right: '-0.8rem',
                            cursor: "pointer"
                        }}>
                        <Image src="/img/close.png" width="14" height="14" alt="close" />
                    </div>
                    {isMobile && (
                        <>
                            <div style={{
                                display: "flex",
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Image
                                    style={{
                                        width: "300px",
                                        maxWidth: "100%"
                                    }}
                                    src={ulphosteries[activeIndex]}
                                    width="300"
                                    height="200"
                                    alt="ulphostery"
                                />
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: "center",
                                alignItems: 'center',
                                marginTop: "30px"
                            }}>
                                <Button
                                    disabled={activeIndex === 0}
                                    onClick={handlePrevious}
                                    style={activeIndex === 0 ? {
                                        background: "transparent",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: 'center',
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        border: "1px solid #E7E7E7",
                                        marginRight: "30px"
                                    } : {
                                        background: "transparent",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: 'center',
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        border: "1px solid #7CC427",
                                        marginRight: "30px"
                                    }}>
                                    <Form.Label style={activeIndex === 0 ? {
                                        fontSize: "19px",
                                        fontWeight: "600",
                                        color: "#E7E7E7",
                                        marginTop: "7px"
                                    } : {
                                        fontSize: "19px",
                                        fontWeight: "600",
                                        color: "black",
                                        marginTop: "7px"
                                    }}>
                                        {"<"}
                                    </Form.Label>
                                </Button>
                                {new Array(ulphosteries.length).fill(
                                    <>
                                        <div style={{
                                            width: '10px',
                                            height: "10px",
                                            background: "#E7E7E7",
                                            borderRadius: '50%',
                                            marginRight: '7px'
                                        }}></div>
                                    </>
                                ).map((dot, idx) => {
                                    let result
                                    if (idx === activeIndex) {
                                        result = (
                                            <div
                                                style={{
                                                    width: '10px',
                                                    height: "10px",
                                                    background: "#00902F",
                                                    borderRadius: '50%',
                                                    marginRight: '7px'
                                                }}></div>
                                        )
                                    } else {
                                        result = dot
                                    }
                                    return result
                                })}
                                <Button
                                    disabled={activeIndex === ulphosteries.length - 1}
                                    onClick={handleNext}
                                    style={activeIndex === ulphosteries.length - 1 ? {
                                        background: "transparent",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: 'center',
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        border: "1px solid #E7E7E7",
                                        marginLeft: "30px"
                                    } : {
                                        background: "transparent",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: 'center',
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        border: "1px solid #7CC427",
                                        marginLeft: "30px"
                                    }}>
                                    <Form.Label style={activeIndex === ulphosteries.length - 1 ? {
                                        fontSize: "19px",
                                        fontWeight: "600",
                                        color: "#E7E7E7",
                                        marginTop: "7px"
                                    } : {
                                        fontSize: "19px",
                                        fontWeight: "600",
                                        color: "black",
                                        marginTop: "7px"
                                    }}>
                                        {">"}
                                    </Form.Label>
                                </Button>
                            </div>
                            <Form.Label style={{
                                fontSize: '13px',
                                fontWeight: '600',
                                marginTop: '20px',
                                color: 'black',
                                // textAlign: "justify"
                            }}>
                                Moving a sofa with backrest and pouffess from point A to point B
                            </Form.Label>
                            <div style={{
                                fontSize: '12px'
                            }}>
                                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '100%',
                                justifyItems: 'center',
                                alignItems: 'center',
                                marginTop: "20px"
                            }}>
                                <Image
                                    style={{
                                        width: "300px",
                                        maxWidth: "100%"
                                    }}
                                    src="/img/specialmap.png"
                                    width="300"
                                    height="240"
                                    alt="ulphostery"
                                />
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '100%',
                                marginTop: '20px',
                                marginLeft: '10px'
                            }}>
                                <div style={{
                                    display: "flex",
                                    gap: '5px'
                                }}>
                                    <Image
                                        style={{
                                            width: "14px",
                                            maxWidth: "100%",
                                            marginTop: '-10px',
                                            marginLeft: '-20px'
                                        }}
                                        src="/img/specpoint.png"
                                        width="14"
                                        height="130"
                                        alt="ulphostery"
                                    />
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}>

                                        <Form.Label style={{
                                            fontSize: '12px',
                                            fontWeight: '400',
                                            color: 'black'
                                        }}>
                                            DELIVERY FROM
                                        </Form.Label>
                                        <Form.Label style={{
                                            fontSize: '12px',
                                            fontWeight: '600',
                                            color: 'black'
                                        }}>
                                            Alex Cotney Cape Town
                                        </Form.Label>
                                        <Form.Label style={{
                                            fontSize: '12px',
                                            fontWeight: '400',
                                            color: 'black'
                                        }}>
                                            Mon Jul 14 | 9-9:30 AM
                                        </Form.Label>
                                        <div style={{
                                            display: 'flex',
                                            gap: '20px'
                                        }}>
                                            <Image
                                                style={{
                                                    width: "33px",
                                                    maxWidth: "100%"
                                                }}
                                                src="/img/phonebtn1.png"
                                                width="33"
                                                height="33"
                                                alt="ulphostery"
                                            />
                                            <Image
                                                style={{
                                                    width: "33px",
                                                    maxWidth: "100%"
                                                }}
                                                src="/img/phonebtn2.png"
                                                width="33"
                                                height="33"
                                                alt="ulphostery"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <Form.Label style={{
                                    fontSize: '12px',
                                    fontWeight: '400',
                                    marginTop: '20px',
                                    color: 'black'
                                }}>
                                    DELIVERY TO
                                </Form.Label>

                                <Form.Label style={{
                                    fontSize: '12px',
                                    fontWeight: '600',
                                    color: 'black'
                                }}>
                                    Alex Cotney Cape Town
                                </Form.Label>
                                <Form.Label style={{
                                    fontSize: '12px',
                                    fontWeight: '400',
                                    color: 'black'
                                }}>
                                    Mon Jul 15 | 10-10:30 AM
                                </Form.Label>
                                <div style={{
                                    display: 'flex',
                                    gap: '20px'
                                }}>
                                    <Image
                                        style={{
                                            width: "33px",
                                            maxWidth: "100%"
                                        }}
                                        src="/img/phonebtn1.png"
                                        width="33"
                                        height="33"
                                        alt="ulphostery"
                                    />
                                    <Image
                                        style={{
                                            width: "33px",
                                            maxWidth: "100%"
                                        }}
                                        src="/img/phonebtn2.png"
                                        width="33"
                                        height="33"
                                        alt="ulphostery"
                                    />
                                </div>
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                marginTop: "20px",
                                gap: '20px',
                                width: '100%',
                                marginTop: '20px'
                            }}>
                                <Button
                                    onClick={handleSpecializedAccept}
                                    style={{
                                        background: "#00902F",
                                        border: "none",
                                        padding: "7px",
                                        color: "white",
                                        width: '45%'
                                    }}>
                                    Accept
                                </Button>
                                <Button
                                    onClick={() => {
                                        props.setRejectModal(true)
                                        props.setSpcializedModal(false)
                                    }}
                                    style={{
                                        background: "transparent",
                                        border: "none",
                                        padding: "7px",
                                        color: "black",
                                        width: '45%',
                                        border: '1px solid #00902F'
                                    }}>
                                    Reject
                                </Button>
                            </div>
                        </>
                    )}
                    {isTabAndDesktop && (
                        <>
                            <div style={{
                                display: "flex",
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Image
                                    style={{
                                        width: "800px",
                                        maxWidth: "100%"
                                    }}
                                    src={ulphosteries[activeIndex]}
                                    width="800"
                                    height="520"
                                    alt="ulphostery"
                                />
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: "center",
                                alignItems: 'center',
                                marginTop: "30px"
                            }}>
                                <Button
                                    disabled={activeIndex === 0}
                                    onClick={handlePrevious}
                                    style={activeIndex === 0 ? {
                                        background: "transparent",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: 'center',
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        border: "1px solid #E7E7E7",
                                        marginRight: "30px"
                                    } : {
                                        background: "transparent",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: 'center',
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        border: "1px solid #7CC427",
                                        marginRight: "30px"
                                    }}>
                                    <Form.Label style={activeIndex === 0 ? {
                                        fontSize: "19px",
                                        fontWeight: "600",
                                        color: "#E7E7E7",
                                        marginTop: "7px"
                                    } : {
                                        fontSize: "19px",
                                        fontWeight: "600",
                                        color: "black",
                                        marginTop: "7px"
                                    }}>
                                        {"<"}
                                    </Form.Label>
                                </Button>
                                {new Array(ulphosteries.length).fill(
                                    <>
                                        <div style={{
                                            width: '10px',
                                            height: "10px",
                                            background: "#E7E7E7",
                                            borderRadius: '50%',
                                            marginRight: '7px'
                                        }}></div>
                                    </>
                                ).map((dot, idx) => {
                                    let result
                                    if (idx === activeIndex) {
                                        result = (
                                            <div
                                                style={{
                                                    width: '10px',
                                                    height: "10px",
                                                    background: "#00902F",
                                                    borderRadius: '50%',
                                                    marginRight: '7px'
                                                }}></div>
                                        )
                                    } else {
                                        result = dot
                                    }
                                    return result
                                })}
                                <Button
                                    disabled={activeIndex === ulphosteries.length - 1}
                                    onClick={handleNext}
                                    style={activeIndex === ulphosteries.length - 1 ? {
                                        background: "transparent",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: 'center',
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        border: "1px solid #E7E7E7",
                                        marginLeft: "30px"
                                    } : {
                                        background: "transparent",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: 'center',
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        border: "1px solid #7CC427",
                                        marginLeft: "30px"
                                    }}>
                                    <Form.Label style={activeIndex === ulphosteries.length - 1 ? {
                                        fontSize: "19px",
                                        fontWeight: "600",
                                        color: "#E7E7E7",
                                        marginTop: "7px"
                                    } : {
                                        fontSize: "19px",
                                        fontWeight: "600",
                                        color: "black",
                                        marginTop: "7px"
                                    }}>
                                        {">"}
                                    </Form.Label>
                                </Button>
                            </div>
                            <Form.Label style={{
                                fontSize: '16px',
                                fontWeight: '600',
                                marginTop: '20px',
                                color: 'black'
                            }}>
                                Moving a sofa with backrest and pouffess from point A to point B
                            </Form.Label>
                            <div style={{
                                fontSize: '12px'
                            }}>
                                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '100%',
                                marginTop: '20px',
                                padding: "0px 30px"
                            }}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '40%',
                                }}>
                                    <div style={{
                                        display: "flex",
                                        gap: '5px'
                                    }}>
                                        <Image
                                            style={{
                                                width: "14px",
                                                maxWidth: "100%",
                                                marginTop: '-10px',
                                                marginLeft: '-20px'
                                            }}
                                            src="/img/specpoint.png"
                                            width="14"
                                            height="130"
                                            alt="ulphostery"
                                        />
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }}>

                                            <Form.Label style={{
                                                fontSize: '12px',
                                                fontWeight: '400',
                                                color: 'black'
                                            }}>
                                                DELIVERY FROM
                                            </Form.Label>
                                            <Form.Label style={{
                                                fontSize: '12px',
                                                fontWeight: '600',
                                                color: 'black'
                                            }}>
                                                Alex Cotney Cape Town
                                            </Form.Label>
                                            <Form.Label style={{
                                                fontSize: '12px',
                                                fontWeight: '400',
                                                color: 'black'
                                            }}>
                                                Mon Jul 14 | 9-9:30 AM
                                            </Form.Label>
                                            <div style={{
                                                display: 'flex',
                                                gap: '20px'
                                            }}>
                                                <Image
                                                    style={{
                                                        width: "33px",
                                                        maxWidth: "100%"
                                                    }}
                                                    src="/img/phonebtn1.png"
                                                    width="33"
                                                    height="33"
                                                    alt="ulphostery"
                                                />
                                                <Image
                                                    style={{
                                                        width: "33px",
                                                        maxWidth: "100%"
                                                    }}
                                                    src="/img/phonebtn2.png"
                                                    width="33"
                                                    height="33"
                                                    alt="ulphostery"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <Form.Label style={{
                                        fontSize: '12px',
                                        fontWeight: '400',
                                        marginTop: '20px',
                                        color: 'black'
                                    }}>
                                        DELIVERY TO
                                    </Form.Label>

                                    <Form.Label style={{
                                        fontSize: '12px',
                                        fontWeight: '600',
                                        color: 'black'
                                    }}>
                                        Alex Cotney Cape Town
                                    </Form.Label>
                                    <Form.Label style={{
                                        fontSize: '12px',
                                        fontWeight: '400',
                                        color: 'black'
                                    }}>
                                        Mon Jul 15 | 10-10:30 AM
                                    </Form.Label>
                                    <div style={{
                                        display: 'flex',
                                        gap: '20px'
                                    }}>
                                        <Image
                                            style={{
                                                width: "33px",
                                                maxWidth: "100%"
                                            }}
                                            src="/img/phonebtn1.png"
                                            width="33"
                                            height="33"
                                            alt="ulphostery"
                                        />
                                        <Image
                                            style={{
                                                width: "33px",
                                                maxWidth: "100%"
                                            }}
                                            src="/img/phonebtn2.png"
                                            width="33"
                                            height="33"
                                            alt="ulphostery"
                                        />
                                    </div>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '60%'
                                }}>
                                    <Image
                                        style={{
                                            width: "370px",
                                            maxWidth: "100%"
                                        }}
                                        src="/img/specialmap.png"
                                        width="370"
                                        height="280"
                                        alt="ulphostery"
                                    />
                                </div>
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                marginTop: "20px",
                                gap: '20px'
                            }}>
                                <Button
                                    onClick={handleSpecializedAccept}
                                    style={{
                                        background: "#00902F",
                                        border: "none",
                                        padding: "7px",
                                        color: "white",
                                        width: '30%'
                                    }}>
                                    Accept
                                </Button>
                                <Button
                                    onClick={() => {
                                        props.setRejectModal(true)
                                        props.setSpcializedModal(false)
                                    }}
                                    style={{
                                        background: "transparent",
                                        border: "none",
                                        padding: "7px",
                                        color: "black",
                                        width: '30%',
                                        border: '1px solid #00902F'
                                    }}>
                                    Reject
                                </Button>
                            </div>
                        </>
                    )}
                </Modal.Body>
            </GeneralModal >
        </>
    )
}