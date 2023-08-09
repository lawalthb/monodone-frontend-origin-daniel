import Image from "next/image";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import GeneralModal from "../../modal";
import StarRateIcon from "@mui/icons-material/StarRate";
import styles from '../.././customerdashboard.module.css'
import PaginationComp from "./pagination";
import Media from "@/utils/media";

export default function ViewAgentProfile(props) {
    const { mobile, tabletAndDesktop} = Media();
    const [review, setReview] = useState("")

    return (
        <>
            {mobile && (
                <GeneralModal
                    size="sm"
                    show={props.viewAgentProfile}
                    onHide={() => props.setViewAgentProfile(false)}
                >
                    <div
                        style={{
                            margin: "0px",
                            height: "131px",
                            background: "linear-gradient(90deg, #00902F 0%, #7CC427 99.69%)",
                            padding: "20px",
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Image src="/img/icon-logo.png" width="48" height="48" alt="logo" />
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginTop: "17px",
                            }}
                        >
                            <Image
                                style={{
                                    marginTop: "3px",
                                }}
                                src="/img/filter-white.png"
                                width="20"
                                height="12"
                                alt="filter"
                            />
                        </div>
                    </div>
                    <Modal.Body>
                        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                            <div>
                                <Form.Label style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: "normal",
                                    fontWeight: "600",
                                    fontSize: "16px",
                                    lineHeight: "36px",
                                    textAlign: "center",
                                    color: "#303133",
                                    flex: "none",
                                    order: "0",
                                    flexGrow: "0"
                                }}>
                                    Agent Profile
                                </Form.Label>
                            </div>
                            <div style={{ marginTop: '5px' }}>
                                <Image src="/img/agent.png" width="40" height="40" alt="agent" />
                            </div>
                            <div style={{
                                display: 'flex', justifyContent: "space-between", width: '100%',
                                marginTop: "20px"
                            }}>
                                <div style={{
                                    display: "flex", flexDirection: 'column', width: '40%',
                                }}>
                                    <div style={{ width: '100%' }}>
                                        <Form.Label
                                            style={{
                                                fontFamily: 'Poppins',
                                                fontStyle: "normal",
                                                fontWeight: "400",
                                                fontSize: "11px",
                                                lineHeight: "21px",
                                                textAlign: "left",
                                                color: "#303133",
                                                flex: "none",
                                                order: "0",
                                                flexGrow: "0"
                                            }}>Name:
                                        </Form.Label>
                                    </div>
                                    <div>
                                        <Form.Label
                                            style={{
                                                fontFamily: 'Poppins',
                                                fontStyle: "normal",
                                                fontWeight: "400",
                                                fontSize: "11px",
                                                lineHeight: "21px",
                                                textAlign: "left",
                                                color: "#303133",
                                                flex: "none",
                                                order: "0",
                                                flexGrow: "0",
                                                marginTop: "9px"
                                            }}>Address:
                                        </Form.Label>
                                    </div>
                                    <div>
                                        <Form.Label
                                            style={{
                                                fontFamily: 'Poppins',
                                                fontStyle: "normal",
                                                fontWeight: "400",
                                                fontSize: "11px",
                                                lineHeight: "21px",
                                                textAlign: "left",
                                                color: "#303133",
                                                flex: "none",
                                                order: "0",
                                                flexGrow: "0",
                                                marginTop: "9px"
                                            }}>Phone number:
                                        </Form.Label>
                                    </div>
                                    <div>
                                        <Form.Label
                                            style={{
                                                fontFamily: 'Poppins',
                                                fontStyle: "normal",
                                                fontWeight: "400",
                                                fontSize: "11px",
                                                lineHeight: "21px",
                                                textAlign: "left",
                                                color: "#303133",
                                                flex: "none",
                                                order: "0",
                                                flexGrow: "0",
                                                marginTop: "9px"
                                            }}>Department:
                                        </Form.Label>
                                    </div>
                                    <div>
                                        <Form.Label
                                            style={{
                                                fontFamily: 'Poppins',
                                                fontStyle: "normal",
                                                fontWeight: "400",
                                                fontSize: "11px",
                                                lineHeight: "21px",
                                                textAlign: "left",
                                                color: "#303133",
                                                flex: "none",
                                                order: "0",
                                                flexGrow: "0",
                                                marginTop: "9px"
                                            }}>Date added:
                                        </Form.Label>
                                    </div>
                                    <div>
                                        <Form.Label
                                            style={{
                                                fontFamily: 'Poppins',
                                                fontStyle: "normal",
                                                fontWeight: "400",
                                                fontSize: "11px",
                                                lineHeight: "21px",
                                                textAlign: "left",
                                                color: "#303133",
                                                flex: "none",
                                                order: "0",
                                                flexGrow: "0",
                                                marginTop: "9px"
                                            }}>Rating:
                                        </Form.Label>
                                    </div>
                                </div>
                                <div style={{ display: "flex", flexDirection: 'column', width: '55%' }}>
                                    <div>
                                        <Form.Label
                                            style={{
                                                fontFamily: 'Poppins',
                                                fontStyle: "normal",
                                                fontWeight: "400",
                                                fontSize: "11px",
                                                lineHeight: "21px",
                                                textAlign: "left",
                                                color: "#303133",
                                                flex: "none",
                                                order: "0",
                                                flexGrow: "0"
                                            }}>Daniel John
                                        </Form.Label>
                                    </div>
                                    <div>
                                        <Form.Label
                                            style={{
                                                fontFamily: 'Poppins',
                                                fontStyle: "normal",
                                                fontWeight: "400",
                                                fontSize: "11px",
                                                lineHeight: "21px",
                                                textAlign: "left",
                                                color: "#303133",
                                                flex: "none",
                                                order: "0",
                                                flexGrow: "0",
                                                marginLeft: "-2px"
                                            }}>21 Alex Ekwueme Way, Jaabi
                                        </Form.Label>
                                    </div>
                                    <div>
                                        <Form.Label
                                            style={{
                                                fontFamily: 'Poppins',
                                                fontStyle: "normal",
                                                fontWeight: "400",
                                                fontSize: "11px",
                                                lineHeight: "21px",
                                                textAlign: "left",
                                                color: "#303133",
                                                flex: "none",
                                                order: "0",
                                                flexGrow: "0",
                                                marginTop: "10px"
                                            }}>888 466373 6636
                                        </Form.Label>
                                    </div>
                                    <div>
                                        <Form.Label
                                            style={{
                                                fontFamily: 'Poppins',
                                                fontStyle: "normal",
                                                fontWeight: "400",
                                                fontSize: "11px",
                                                lineHeight: "21px",
                                                textAlign: "left",
                                                color: "#303133",
                                                flex: "none",
                                                order: "0",
                                                flexGrow: "0",
                                                marginTop: "9px",
                                            }}>Clearing and Fowarding Agent
                                        </Form.Label>
                                    </div>
                                    <div>
                                        <Form.Label
                                            style={{
                                                fontFamily: 'Poppins',
                                                fontStyle: "normal",
                                                fontWeight: "400",
                                                fontSize: "11px",
                                                lineHeight: "21px",
                                                textAlign: "left",
                                                color: "#303133",
                                                flex: "none",
                                                order: "0",
                                                flexGrow: "0",
                                                marginTop: "9px"
                                            }}>22 July 2022
                                        </Form.Label>
                                    </div>
                                    <div>
                                        <Form.Label
                                            style={{
                                                fontFamily: 'Poppins',
                                                fontStyle: "normal",
                                                fontWeight: "400",
                                                fontSize: "11px",
                                                lineHeight: "21px",
                                                textAlign: "center",
                                                color: "#303133",
                                                flex: "none",
                                                order: "0",
                                                flexGrow: "0",
                                                marginTop: "9px"
                                            }}>
                                            <StarRateIcon style={{
                                                color: "#FFC700",
                                                fontSize: "12px"
                                            }} />
                                            <StarRateIcon style={{
                                                color: "#FFC700",
                                                fontSize: "12px"
                                            }} />
                                            <StarRateIcon style={{
                                                color: "#FFC700",
                                                fontSize: "12px"
                                            }} />
                                            <StarRateIcon style={{
                                                color: "#FFC700",
                                                fontSize: "12px"
                                            }} />
                                            <StarRateIcon style={{
                                                color: "#FFC700",
                                                fontSize: "12px"
                                            }} /> 4.5
                                        </Form.Label>
                                    </div>
                                </div>
                            </div>
                            <div style={{
                                display: 'flex', flexDirection: "column", width: '100%',
                                marginTop: "20px"
                            }}>
                                <div>
                                    <Form.Label style={{
                                        fontFamily: 'Poppins',
                                        fontStyle: "normal",
                                        fontWeight: "500",
                                        fontSize: "14px",
                                        lineHeight: "21px",
                                        textAlign: "center",
                                        color: "#303133",
                                        flex: "none",
                                        order: "0",
                                        flexGrow: "0",
                                        marginTop: "9px"
                                    }}>
                                        Description
                                    </Form.Label>
                                </div>
                                <div>
                                    <Form.Label style={{
                                        fontFamily: 'Poppins',
                                        fontStyle: "normal",
                                        fontWeight: "500",
                                        fontSize: "11px",
                                        textAlign: "justify",
                                        color: "#303133",
                                        flex: "none",
                                        order: "0",
                                        flexGrow: "0",
                                        marginTop: "9px"
                                    }}>
                                        Mr. Daniel John is a Clearing and forwarding agent at module, with
                                        20 years of experience in clearing and forwarding department. He has
                                        worked with different different logistics companies. He gets accolades
                                        from customers for good experience, he always leave them with.
                                        Mr. Daniel John is a Clearing and forwarding agent at module, with
                                        20 years of experience in clearing and forwarding department. He has
                                        worked with different different logistics companies. He gets accolades
                                        from customers for good experience, he always leave them with.
                                        Mr. Daniel John is a Clearing and forwarding agent at module, with
                                        20 years of experience in clearing and forwarding department. He has
                                        worked with different different logistics companies. He gets accolades
                                        from customers for good experience, he always leave them with.
                                    </Form.Label>
                                </div>
                            </div>
                            <div style={{
                                diaplay: "flex", flexDirection: "column",
                                width: "100%"
                            }}>
                                <div style={{ marginTop: "10px" }}>
                                    <Form.Label style={{
                                        fontFamily: 'Poppins',
                                        fontStyle: "normal",
                                        fontWeight: "600",
                                        fontSize: "14px",
                                        lineHeight: "36px",
                                        textAlign: "center",
                                        color: "#303133",
                                        flex: "none",
                                        order: "0",
                                        flexGrow: "0"
                                    }}>
                                        Reviews
                                    </Form.Label>
                                </div>
                            </div>
                            <div style={{
                                border: "1px solid #E7E7E7",
                                padding: '2px 20px',
                                borderRadius: "6px",
                                marginBottom: "10px"
                            }}>
                                <ul style={{ display: "flex", marginLeft: "-50px" }}>
                                    <li>
                                        <Image width={32} height={32} alt="User" src="/img/driver.png" className={styles.image} />
                                    </li>
                                    <ul style={{ marginTop: "6px", marginLeft: "-30px" }}>
                                        <li style={{
                                            fontSize: "13px", marginTop: "5px",
                                            color: "#151515", fontweight: "400"
                                        }}>Alex Ekwueme</li>
                                        <li style={{ fontSize: "8px", marginTop: "2px" }}>
                                            22.02.2022
                                        </li>
                                    </ul>
                                </ul>
                                <ul style={{
                                    display: "flex", marginLeft: "-35px", marginTop: "-25px",
                                    flexDirection: 'column'
                                }}>
                                    <Form.Label style={{
                                        fontFamily: 'Poppins',
                                        fontStyle: "normal",
                                        fontWeight: "500",
                                        fontSize: "9px",
                                        lineHeight: "21px",
                                        textAlign: "justify",
                                        color: "#303133",
                                        flex: "none",
                                        order: "0",
                                        flexGrow: "0",
                                    }}>
                                        <StarRateIcon style={{
                                            color: "#FFC700",
                                            fontSize: "12px"
                                        }} />
                                        <StarRateIcon style={{
                                            color: "#FFC700",
                                            fontSize: "12px"
                                        }} />
                                        <StarRateIcon style={{
                                            color: "#FFC700",
                                            fontSize: "12px"
                                        }} />
                                        <StarRateIcon style={{
                                            color: "#FFC700",
                                            fontSize: "12px"
                                        }} />
                                        <StarRateIcon style={{
                                            color: "#FFC700",
                                            fontSize: "12px"
                                        }} />
                                    </Form.Label>
                                </ul>
                                <ul style={{
                                    display: "flex", marginLeft: "-35px", marginTop: "-25px",
                                    flexDirection: 'column'
                                }}>
                                    <Form.Label style={{
                                        fontFamily: 'Poppins',
                                        fontStyle: "normal",
                                        fontWeight: "500",
                                        fontSize: "9px",
                                        textAlign: "justify",
                                        color: "#303133",
                                        flex: "none",
                                        order: "0",
                                        flexGrow: "0",
                                    }}>
                                        There&apos;s no other program that walks you through exactly what you need to
                                        know to start an online store fast, writtn by someon who has built several
                                        7=figure ecommerce business fom scratch. What&apos;s more, everything has been broken
                                        down in step-bystep detail with real action plans including finding your niche.
                                    </Form.Label>
                                </ul>
                            </div>
                            <div style={{
                                border: "1px solid #E7E7E7",
                                padding: '2px 20px',
                                borderRadius: "6px",
                                marginBottom: "10px"
                            }}>
                                <ul style={{ display: "flex", marginLeft: "-50px" }}>
                                    <li>
                                        <Image width={32} height={32} alt="User" src="/img/driver.png" className={styles.image} />
                                    </li>
                                    <ul style={{ marginTop: "6px", marginLeft: "-30px" }}>
                                        <li style={{
                                            fontSize: "13px", marginTop: "5px",
                                            color: "#151515", fontweight: "400"
                                        }}>Alex Ekwueme</li>
                                        <li style={{ fontSize: "8px", marginTop: "2px" }}>
                                            22.02.2022
                                        </li>
                                    </ul>
                                </ul>
                                <ul style={{
                                    display: "flex", marginLeft: "-35px", marginTop: "-25px",
                                    flexDirection: 'column'
                                }}>
                                    <Form.Label style={{
                                        fontFamily: 'Poppins',
                                        fontStyle: "normal",
                                        fontWeight: "500",
                                        fontSize: "9px",
                                        lineHeight: "21px",
                                        textAlign: "justify",
                                        color: "#303133",
                                        flex: "none",
                                        order: "0",
                                        flexGrow: "0",
                                    }}>
                                        <StarRateIcon style={{
                                            color: "#FFC700",
                                            fontSize: "12px"
                                        }} />
                                        <StarRateIcon style={{
                                            color: "#FFC700",
                                            fontSize: "12px"
                                        }} />
                                        <StarRateIcon style={{
                                            color: "#FFC700",
                                            fontSize: "12px"
                                        }} />
                                        <StarRateIcon style={{
                                            color: "#FFC700",
                                            fontSize: "12px"
                                        }} />
                                        <StarRateIcon style={{
                                            color: "#FFC700",
                                            fontSize: "12px"
                                        }} />
                                    </Form.Label>
                                </ul>
                                <ul style={{
                                    display: "flex", marginLeft: "-35px", marginTop: "-25px",
                                    flexDirection: 'column'
                                }}>
                                    <Form.Label style={{
                                        fontFamily: 'Poppins',
                                        fontStyle: "normal",
                                        fontWeight: "500",
                                        fontSize: "9px",
                                        textAlign: "justify",
                                        color: "#303133",
                                        flex: "none",
                                        order: "0",
                                        flexGrow: "0",
                                    }}>
                                        There&apos;s no other program that walks you through exactly what you need to
                                        know to start an online store fast, writtn by someon who has built several
                                        7=figure ecommerce business fom scratch. What&apos;s more, everything has been broken
                                        down in step-bystep detail with real action plans including finding your niche.
                                    </Form.Label>
                                </ul>
                            </div>
                            <div style={{
                                border: "1px solid #E7E7E7",
                                padding: '2px 20px',
                                borderRadius: "6px",
                                marginBottom: "10px"
                            }}>
                                <ul style={{ display: "flex", marginLeft: "-50px" }}>
                                    <li>
                                        <Image width={32} height={32} alt="User" src="/img/driver.png" className={styles.image} />
                                    </li>
                                    <ul style={{ marginTop: "6px", marginLeft: "-30px" }}>
                                        <li style={{
                                            fontSize: "13px", marginTop: "5px",
                                            color: "#151515", fontweight: "400"
                                        }}>Alex Ekwueme</li>
                                        <li style={{ fontSize: "8px", marginTop: "2px" }}>
                                            22.02.2022
                                        </li>
                                    </ul>
                                </ul>
                                <ul style={{
                                    display: "flex", marginLeft: "-35px", marginTop: "-25px",
                                    flexDirection: 'column'
                                }}>
                                    <Form.Label style={{
                                        fontFamily: 'Poppins',
                                        fontStyle: "normal",
                                        fontWeight: "500",
                                        fontSize: "9px",
                                        lineHeight: "21px",
                                        textAlign: "justify",
                                        color: "#303133",
                                        flex: "none",
                                        order: "0",
                                        flexGrow: "0",
                                    }}>
                                        <StarRateIcon style={{
                                            color: "#FFC700",
                                            fontSize: "12px"
                                        }} />
                                        <StarRateIcon style={{
                                            color: "#FFC700",
                                            fontSize: "12px"
                                        }} />
                                        <StarRateIcon style={{
                                            color: "#FFC700",
                                            fontSize: "12px"
                                        }} />
                                        <StarRateIcon style={{
                                            color: "#FFC700",
                                            fontSize: "12px"
                                        }} />
                                        <StarRateIcon style={{
                                            color: "#FFC700",
                                            fontSize: "12px"
                                        }} />
                                    </Form.Label>
                                </ul>
                                <ul style={{
                                    display: "flex", marginLeft: "-35px", marginTop: "-25px",
                                    flexDirection: 'column'
                                }}>
                                    <Form.Label style={{
                                        fontFamily: 'Poppins',
                                        fontStyle: "normal",
                                        fontWeight: "500",
                                        fontSize: "9px",
                                        textAlign: "justify",
                                        color: "#303133",
                                        flex: "none",
                                        order: "0",
                                        flexGrow: "0",
                                    }}>
                                        There&apos;s no other program that walks you through exactly what you need to
                                        know to start an online store fast, writtn by someon who has built several
                                        7=figure ecommerce business fom scratch. What&apos;s more, everything has been broken
                                        down in step-bystep detail with real action plans including finding your niche.
                                    </Form.Label>
                                </ul>
                            </div>
                            <div style={{
                                border: "1px solid #E7E7E7",
                                padding: '2px 20px',
                                borderRadius: "6px",
                                marginBottom: "10px"
                            }}>
                                <ul style={{ display: "flex", marginLeft: "-50px" }}>
                                    <li>
                                        <Image width={32} height={32} alt="User" src="/img/driver.png" className={styles.image} />
                                    </li>
                                    <ul style={{ marginTop: "6px", marginLeft: "-30px" }}>
                                        <li style={{
                                            fontSize: "13px", marginTop: "5px",
                                            color: "#151515", fontweight: "400"
                                        }}>Alex Ekwueme</li>
                                        <li style={{ fontSize: "8px", marginTop: "2px" }}>
                                            22.02.2022
                                        </li>
                                    </ul>
                                </ul>
                                <ul style={{
                                    display: "flex", marginLeft: "-35px", marginTop: "-25px",
                                    flexDirection: 'column'
                                }}>
                                    <Form.Label style={{
                                        fontFamily: 'Poppins',
                                        fontStyle: "normal",
                                        fontWeight: "500",
                                        fontSize: "9px",
                                        lineHeight: "21px",
                                        textAlign: "justify",
                                        color: "#303133",
                                        flex: "none",
                                        order: "0",
                                        flexGrow: "0",
                                    }}>
                                        <StarRateIcon style={{
                                            color: "#FFC700",
                                            fontSize: "12px"
                                        }} />
                                        <StarRateIcon style={{
                                            color: "#FFC700",
                                            fontSize: "12px"
                                        }} />
                                        <StarRateIcon style={{
                                            color: "#FFC700",
                                            fontSize: "12px"
                                        }} />
                                        <StarRateIcon style={{
                                            color: "#FFC700",
                                            fontSize: "12px"
                                        }} />
                                        <StarRateIcon style={{
                                            color: "#FFC700",
                                            fontSize: "12px"
                                        }} />
                                    </Form.Label>
                                </ul>
                                <ul style={{
                                    display: "flex", marginLeft: "-35px", marginTop: "-25px",
                                    flexDirection: 'column'
                                }}>
                                    <Form.Label style={{
                                        fontFamily: 'Poppins',
                                        fontStyle: "normal",
                                        fontWeight: "500",
                                        fontSize: "9px",
                                        textAlign: "justify",
                                        color: "#303133",
                                        flex: "none",
                                        order: "0",
                                        flexGrow: "0",
                                    }}>
                                        There&apos;s no other program that walks you through exactly what you need to
                                        know to start an online store fast, writtn by someon who has built several
                                        7=figure ecommerce business fom scratch. What&apos;s more, everything has been broken
                                        down in step-bystep detail with real action plans including finding your niche.
                                    </Form.Label>
                                </ul>
                            </div>
                            <div style={{
                                display: "flex", justifyContent: "center",
                                alignItems: 'center', marginTop: "10px"
                            }}>
                                <PaginationComp />

                            </div>
                            <div style={{
                                display: "flex", flexDirection: "column",
                                marginTop: "20px"
                            }}>
                                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                                    <div>
                                        <Form.Label
                                            style={{
                                                fontFamily: 'Poppins',
                                                fontStyle: "normal",
                                                fontWeight: "600",
                                                fontSize: "14px",
                                                lineHeight: "36px",
                                                textAlign: "center",
                                                color: "#303133",
                                                flex: "none",
                                                order: "0",
                                                flexGrow: "0"
                                            }}>Drop your review</Form.Label>
                                    </div>
                                    <div>
                                        <StarRateIcon style={{
                                            color: "#D1D1D1",
                                            fontSize: "16px"
                                        }} />
                                        <StarRateIcon style={{
                                            color: "#D1D1D1",
                                            fontSize: "16px"
                                        }} />
                                        <StarRateIcon style={{
                                            color: "#D1D1D1",
                                            fontSize: "16px"
                                        }} />
                                        <StarRateIcon style={{
                                            color: "#D1D1D1",
                                            fontSize: "16px"
                                        }} />
                                        <StarRateIcon style={{
                                            color: "#D1D1D1",
                                            fontSize: "16px"
                                        }} />
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginTop: "5px" }}>
                                <textarea rows="3" style={{
                                    width: '100%',
                                    padding: "7px"
                                }}
                                    name="review"
                                    value={review}
                                    onChange={(event => setReview(event.target.value))}
                                ></textarea>
                            </div>
                            <div style={{ display: "flex", marginTop: "20px" }}>
                                <Button
                                    disabled={review.length < 1}
                                    onClick={props.handleSubmitReview}
                                    style={{
                                        boxSizing: "border-box",
                                        width: "100%",
                                        height: "40px",
                                        background: "#00902F",
                                        bordeRadius: "6px",
                                        flex: "none",
                                        order: "0",
                                        flexGrow: "0",
                                        border: "none",
                                        fontSize: "12px",
                                    }}>
                                    Submit Review
                                </Button>
                            </div>
                        </div>
                    </Modal.Body>
                </GeneralModal>
            )}
            {tabletAndDesktop && (
                <GeneralModal
                    size="lg"
                    show={props.viewAgentProfile}
                    onHide={() => props.setViewAgentProfile(false)}
                >
                    <Modal.Body>
                        <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                            <div style={{
                                diaplay: "flex", flexDirection: "column",
                                width: "45%"
                            }}>
                                <div>
                                    <Form.Label style={{
                                        fontFamily: 'Poppins',
                                        fontStyle: "normal",
                                        fontWeight: "600",
                                        fontSize: "16px",
                                        lineHeight: "36px",
                                        textAlign: "center",
                                        color: "#303133",
                                        flex: "none",
                                        order: "0",
                                        flexGrow: "0"
                                    }}>
                                        Agent Profile
                                    </Form.Label>
                                </div>
                                <div style={{ marginTop: '20px' }}>
                                    <Image src="/img/agent.png" width="140" height="140" alt="agent" />
                                </div>
                                <div style={{
                                    display: 'flex', justifyContent: "space-between", width: '100%',
                                    marginTop: "20px"
                                }}>
                                    <div style={{
                                        display: "flex", flexDirection: 'column', width: '40%',
                                    }}>
                                        <div style={{ width: '100%' }}>
                                            <Form.Label
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontStyle: "normal",
                                                    fontWeight: "400",
                                                    fontSize: "11px",
                                                    lineHeight: "21px",
                                                    textAlign: "left",
                                                    color: "#303133",
                                                    flex: "none",
                                                    order: "0",
                                                    flexGrow: "0"
                                                }}>Name:
                                            </Form.Label>
                                        </div>
                                        <div>
                                            <Form.Label
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontStyle: "normal",
                                                    fontWeight: "400",
                                                    fontSize: "11px",
                                                    lineHeight: "21px",
                                                    textAlign: "left",
                                                    color: "#303133",
                                                    flex: "none",
                                                    order: "0",
                                                    flexGrow: "0",
                                                    marginTop: "9px"
                                                }}>Address:
                                            </Form.Label>
                                        </div>
                                        <div>
                                            <Form.Label
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontStyle: "normal",
                                                    fontWeight: "400",
                                                    fontSize: "11px",
                                                    lineHeight: "21px",
                                                    textAlign: "left",
                                                    color: "#303133",
                                                    flex: "none",
                                                    order: "0",
                                                    flexGrow: "0",
                                                    marginTop: "9px"
                                                }}>Phone number:
                                            </Form.Label>
                                        </div>
                                        <div>
                                            <Form.Label
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontStyle: "normal",
                                                    fontWeight: "400",
                                                    fontSize: "11px",
                                                    lineHeight: "21px",
                                                    textAlign: "left",
                                                    color: "#303133",
                                                    flex: "none",
                                                    order: "0",
                                                    flexGrow: "0",
                                                    marginTop: "9px"
                                                }}>Department:
                                            </Form.Label>
                                        </div>
                                        <div>
                                            <Form.Label
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontStyle: "normal",
                                                    fontWeight: "400",
                                                    fontSize: "11px",
                                                    lineHeight: "21px",
                                                    textAlign: "left",
                                                    color: "#303133",
                                                    flex: "none",
                                                    order: "0",
                                                    flexGrow: "0",
                                                    marginTop: "9px"
                                                }}>Date added:
                                            </Form.Label>
                                        </div>
                                        <div>
                                            <Form.Label
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontStyle: "normal",
                                                    fontWeight: "400",
                                                    fontSize: "11px",
                                                    lineHeight: "21px",
                                                    textAlign: "left",
                                                    color: "#303133",
                                                    flex: "none",
                                                    order: "0",
                                                    flexGrow: "0",
                                                    marginTop: "9px"
                                                }}>Rating:
                                            </Form.Label>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: 'column', width: '55%' }}>
                                        <div>
                                            <Form.Label
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontStyle: "normal",
                                                    fontWeight: "400",
                                                    fontSize: "11px",
                                                    lineHeight: "21px",
                                                    textAlign: "left",
                                                    color: "#303133",
                                                    flex: "none",
                                                    order: "0",
                                                    flexGrow: "0"
                                                }}>Daniel John
                                            </Form.Label>
                                        </div>
                                        <div>
                                            <Form.Label
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontStyle: "normal",
                                                    fontWeight: "400",
                                                    fontSize: "11px",
                                                    lineHeight: "21px",
                                                    textAlign: "left",
                                                    color: "#303133",
                                                    flex: "none",
                                                    order: "0",
                                                    flexGrow: "0",
                                                    marginLeft: "-2px"
                                                }}>21 Alex Ekwueme Way, Jaabi
                                            </Form.Label>
                                        </div>
                                        <div>
                                            <Form.Label
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontStyle: "normal",
                                                    fontWeight: "400",
                                                    fontSize: "11px",
                                                    lineHeight: "21px",
                                                    textAlign: "left",
                                                    color: "#303133",
                                                    flex: "none",
                                                    order: "0",
                                                    flexGrow: "0",
                                                    marginTop: "10px"
                                                }}>888 466373 6636
                                            </Form.Label>
                                        </div>
                                        <div>
                                            <Form.Label
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontStyle: "normal",
                                                    fontWeight: "400",
                                                    fontSize: "11px",
                                                    lineHeight: "21px",
                                                    textAlign: "left",
                                                    color: "#303133",
                                                    flex: "none",
                                                    order: "0",
                                                    flexGrow: "0",
                                                    marginTop: "9px",
                                                }}>Clearing and Fowarding Agent
                                            </Form.Label>
                                        </div>
                                        <div>
                                            <Form.Label
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontStyle: "normal",
                                                    fontWeight: "400",
                                                    fontSize: "11px",
                                                    lineHeight: "21px",
                                                    textAlign: "left",
                                                    color: "#303133",
                                                    flex: "none",
                                                    order: "0",
                                                    flexGrow: "0",
                                                    marginTop: "9px"
                                                }}>22 July 2022
                                            </Form.Label>
                                        </div>
                                        <div>
                                            <Form.Label
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontStyle: "normal",
                                                    fontWeight: "400",
                                                    fontSize: "11px",
                                                    lineHeight: "21px",
                                                    textAlign: "center",
                                                    color: "#303133",
                                                    flex: "none",
                                                    order: "0",
                                                    flexGrow: "0",
                                                    marginTop: "9px"
                                                }}>
                                                <StarRateIcon style={{
                                                    color: "#FFC700",
                                                    fontSize: "12px"
                                                }} />
                                                <StarRateIcon style={{
                                                    color: "#FFC700",
                                                    fontSize: "12px"
                                                }} />
                                                <StarRateIcon style={{
                                                    color: "#FFC700",
                                                    fontSize: "12px"
                                                }} />
                                                <StarRateIcon style={{
                                                    color: "#FFC700",
                                                    fontSize: "12px"
                                                }} />
                                                <StarRateIcon style={{
                                                    color: "#FFC700",
                                                    fontSize: "12px"
                                                }} /> 4.5
                                            </Form.Label>
                                        </div>
                                    </div>
                                </div>
                                <div style={{
                                    display: 'flex', justifyContent: "space-between", width: '100%',
                                    marginTop: "20px"
                                }}>
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <div>
                                            <Form.Label style={{
                                                fontFamily: 'Poppins',
                                                fontStyle: "normal",
                                                fontWeight: "500",
                                                fontSize: "14px",
                                                lineHeight: "21px",
                                                textAlign: "center",
                                                color: "#303133",
                                                flex: "none",
                                                order: "0",
                                                flexGrow: "0",
                                                marginTop: "9px"
                                            }}>
                                                Description
                                            </Form.Label>
                                        </div>
                                        <div>
                                            <Form.Label style={{
                                                fontFamily: 'Poppins',
                                                fontStyle: "normal",
                                                fontWeight: "500",
                                                fontSize: "9px",
                                                textAlign: "justify",
                                                color: "#303133",
                                                flex: "none",
                                                order: "0",
                                                flexGrow: "0",
                                                marginTop: "9px"
                                            }}>
                                                Mr. Daniel John is a Clearing and forwarding agent at module, with
                                                20 years of experience in clearing and forwarding department. He has
                                                worked with different different logistics companies. He gets accolades
                                                from customers for good experience, he always leave them with.
                                                Mr. Daniel John is a Clearing and forwarding agent at module, with
                                                20 years of experience in clearing and forwarding department. He has
                                                worked with different different logistics companies. He gets accolades
                                                from customers for good experience, he always leave them with.
                                                Mr. Daniel John is a Clearing and forwarding agent at module, with
                                                20 years of experience in clearing and forwarding department. He has
                                                worked with different different logistics companies. He gets accolades
                                                from customers for good experience, he always leave them with.

                                            </Form.Label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{
                                diaplay: "flex", flexDirection: "column",
                                width: "45%"
                            }}>
                                <div style={{ marginTop: "40px" }}>
                                    <Form.Label style={{
                                        fontFamily: 'Poppins',
                                        fontStyle: "normal",
                                        fontWeight: "600",
                                        fontSize: "14px",
                                        lineHeight: "36px",
                                        textAlign: "center",
                                        color: "#303133",
                                        flex: "none",
                                        order: "0",
                                        flexGrow: "0"
                                    }}>
                                        Reviews
                                    </Form.Label>
                                </div>
                                <div style={{
                                    border: "1px solid #E7E7E7",
                                    padding: '2px 10px',
                                    borderRadius: "6px"
                                }}>
                                    <ul style={{ display: "flex", marginLeft: "-50px" }}>
                                        <li>
                                            <Image width={32} height={32} alt="User" src="/img/driver.png" className={styles.image} />
                                        </li>
                                        <ul style={{ marginTop: "6px", marginLeft: "-30px" }}>
                                            <li style={{
                                                fontSize: "13px", marginTop: "5px",
                                                color: "#151515", fontweight: "400"
                                            }}>Alex Ekwueme</li>
                                            <li style={{ fontSize: "8px", marginTop: "2px" }}>
                                                22.02.2022
                                            </li>
                                        </ul>
                                    </ul>
                                    <ul style={{
                                        display: "flex", marginLeft: "-35px", marginTop: "-25px",
                                        flexDirection: 'column'
                                    }}>
                                        <Form.Label style={{
                                            fontFamily: 'Poppins',
                                            fontStyle: "normal",
                                            fontWeight: "500",
                                            fontSize: "9px",
                                            lineHeight: "21px",
                                            textAlign: "justify",
                                            color: "#303133",
                                            flex: "none",
                                            order: "0",
                                            flexGrow: "0",
                                        }}>
                                            <StarRateIcon style={{
                                                color: "#FFC700",
                                                fontSize: "12px"
                                            }} />
                                            <StarRateIcon style={{
                                                color: "#FFC700",
                                                fontSize: "12px"
                                            }} />
                                            <StarRateIcon style={{
                                                color: "#FFC700",
                                                fontSize: "12px"
                                            }} />
                                            <StarRateIcon style={{
                                                color: "#FFC700",
                                                fontSize: "12px"
                                            }} />
                                            <StarRateIcon style={{
                                                color: "#FFC700",
                                                fontSize: "12px"
                                            }} />
                                        </Form.Label>
                                    </ul>
                                    <ul style={{
                                        display: "flex", marginLeft: "-35px", marginTop: "-25px",
                                        flexDirection: 'column'
                                    }}>
                                        <Form.Label style={{
                                            fontFamily: 'Poppins',
                                            fontStyle: "normal",
                                            fontWeight: "500",
                                            fontSize: "9px",
                                            textAlign: "justify",
                                            color: "#303133",
                                            flex: "none",
                                            order: "0",
                                            flexGrow: "0",
                                        }}>
                                            There&apos;s no other program that walks you through exactly what you need to
                                            know to start an online store fast, writtn by someon who has built several
                                            7=figure ecommerce business fom scratch. What&apos;s more, everything has been broken
                                            down in step-bystep detail with real action plans including finding your niche.
                                        </Form.Label>
                                    </ul>
                                </div>
                                <div style={{
                                    border: "1px solid #E7E7E7",
                                    padding: '2px 10px',
                                    borderRadius: "6px",
                                    marginTop: '8px'
                                }}>
                                    <ul style={{ display: "flex", marginLeft: "-50px" }}>
                                        <li>
                                            <Image width={32} height={32} alt="User" src="/img/driver.png" className={styles.image} />
                                        </li>
                                        <ul style={{ marginTop: "6px", marginLeft: "-30px" }}>
                                            <li style={{
                                                fontSize: "13px", marginTop: "5px",
                                                color: "#151515", fontweight: "400"
                                            }}>Alex Ekwueme</li>
                                            <li style={{ fontSize: "8px", marginTop: "2px" }}>
                                                22.02.2022
                                            </li>
                                        </ul>
                                    </ul>
                                    <ul style={{
                                        display: "flex", marginLeft: "-35px", marginTop: "-25px",
                                        flexDirection: 'column'
                                    }}>
                                        <Form.Label style={{
                                            fontFamily: 'Poppins',
                                            fontStyle: "normal",
                                            fontWeight: "500",
                                            fontSize: "9px",
                                            lineHeight: "21px",
                                            textAlign: "justify",
                                            color: "#303133",
                                            flex: "none",
                                            order: "0",
                                            flexGrow: "0",
                                        }}>
                                            <StarRateIcon style={{
                                                color: "#FFC700",
                                                fontSize: "12px"
                                            }} />
                                            <StarRateIcon style={{
                                                color: "#FFC700",
                                                fontSize: "12px"
                                            }} />
                                            <StarRateIcon style={{
                                                color: "#FFC700",
                                                fontSize: "12px"
                                            }} />
                                            <StarRateIcon style={{
                                                color: "#FFC700",
                                                fontSize: "12px"
                                            }} />
                                            <StarRateIcon style={{
                                                color: "#FFC700",
                                                fontSize: "12px"
                                            }} />
                                        </Form.Label>
                                    </ul>
                                    <ul style={{
                                        display: "flex", marginLeft: "-35px", marginTop: "-25px",
                                        flexDirection: 'column'
                                    }}>
                                        <Form.Label style={{
                                            fontFamily: 'Poppins',
                                            fontStyle: "normal",
                                            fontWeight: "500",
                                            fontSize: "9px",
                                            textAlign: "justify",
                                            color: "#303133",
                                            flex: "none",
                                            order: "0",
                                            flexGrow: "0",
                                        }}>
                                            There&apos;s no other program that walks you through exactly what you need to
                                            know to start an online store fast, writtn by someon who has built several
                                            7=figure ecommerce business fom scratch. What&apos;s more, everything has been broken
                                            down in step-bystep detail with real action plans including finding your niche.
                                        </Form.Label>
                                    </ul>
                                </div>
                                <div style={{
                                    border: "1px solid #E7E7E7",
                                    padding: '2px 10px',
                                    borderRadius: "6px",
                                    marginTop: '8px'
                                }}>
                                    <ul style={{ display: "flex", marginLeft: "-50px" }}>
                                        <li>
                                            <Image width={32} height={32} alt="User" src="/img/driver.png" className={styles.image} />
                                        </li>
                                        <ul style={{ marginTop: "6px", marginLeft: "-30px" }}>
                                            <li style={{
                                                fontSize: "13px", marginTop: "5px",
                                                color: "#151515", fontweight: "400"
                                            }}>Alex Ekwueme</li>
                                            <li style={{ fontSize: "8px", marginTop: "2px" }}>
                                                22.02.2022
                                            </li>
                                        </ul>
                                    </ul>
                                    <ul style={{
                                        display: "flex", marginLeft: "-35px", marginTop: "-25px",
                                        flexDirection: 'column'
                                    }}>
                                        <Form.Label style={{
                                            fontFamily: 'Poppins',
                                            fontStyle: "normal",
                                            fontWeight: "500",
                                            fontSize: "9px",
                                            lineHeight: "21px",
                                            textAlign: "justify",
                                            color: "#303133",
                                            flex: "none",
                                            order: "0",
                                            flexGrow: "0",
                                        }}>
                                            <StarRateIcon style={{
                                                color: "#FFC700",
                                                fontSize: "12px"
                                            }} />
                                            <StarRateIcon style={{
                                                color: "#FFC700",
                                                fontSize: "12px"
                                            }} />
                                            <StarRateIcon style={{
                                                color: "#FFC700",
                                                fontSize: "12px"
                                            }} />
                                            <StarRateIcon style={{
                                                color: "#FFC700",
                                                fontSize: "12px"
                                            }} />
                                            <StarRateIcon style={{
                                                color: "#FFC700",
                                                fontSize: "12px"
                                            }} />
                                        </Form.Label>
                                    </ul>
                                    <ul style={{
                                        display: "flex", marginLeft: "-35px", marginTop: "-25px",
                                        flexDirection: 'column'
                                    }}>
                                        <Form.Label style={{
                                            fontFamily: 'Poppins',
                                            fontStyle: "normal",
                                            fontWeight: "500",
                                            fontSize: "9px",
                                            textAlign: "justify",
                                            color: "#303133",
                                            flex: "none",
                                            order: "0",
                                            flexGrow: "0",
                                        }}>
                                            There&apos;s no other program that walks you through exactly what you need to
                                            know to start an online store fast, writtn by someon who has built several
                                            7=figure ecommerce business fom scratch. What&apos;s more, everything has been broken
                                            down in step-bystep detail with real action plans including finding your niche.
                                        </Form.Label>
                                    </ul>
                                </div>
                                <div style={{
                                    border: "1px solid #E7E7E7",
                                    padding: '2px 10px',
                                    borderRadius: "6px",
                                    marginTop: '8px'
                                }}>
                                    <ul style={{ display: "flex", marginLeft: "-50px" }}>
                                        <li>
                                            <Image width={32} height={32} alt="User" src="/img/driver.png" className={styles.image} />
                                        </li>
                                        <ul style={{ marginTop: "6px", marginLeft: "-30px" }}>
                                            <li style={{
                                                fontSize: "13px", marginTop: "5px",
                                                color: "#151515", fontweight: "400"
                                            }}>Alex Ekwueme</li>
                                            <li style={{ fontSize: "8px", marginTop: "2px" }}>
                                                22.02.2022
                                            </li>
                                        </ul>
                                    </ul>
                                    <ul style={{
                                        display: "flex", marginLeft: "-35px", marginTop: "-25px",
                                        flexDirection: 'column'
                                    }}>
                                        <Form.Label style={{
                                            fontFamily: 'Poppins',
                                            fontStyle: "normal",
                                            fontWeight: "500",
                                            fontSize: "9px",
                                            lineHeight: "21px",
                                            textAlign: "justify",
                                            color: "#303133",
                                            flex: "none",
                                            order: "0",
                                            flexGrow: "0",
                                        }}>
                                            <StarRateIcon style={{
                                                color: "#FFC700",
                                                fontSize: "12px"
                                            }} />
                                            <StarRateIcon style={{
                                                color: "#FFC700",
                                                fontSize: "12px"
                                            }} />
                                            <StarRateIcon style={{
                                                color: "#FFC700",
                                                fontSize: "12px"
                                            }} />
                                            <StarRateIcon style={{
                                                color: "#FFC700",
                                                fontSize: "12px"
                                            }} />
                                            <StarRateIcon style={{
                                                color: "#FFC700",
                                                fontSize: "12px"
                                            }} />
                                        </Form.Label>
                                    </ul>
                                    <ul style={{
                                        display: "flex", marginLeft: "-35px", marginTop: "-25px",
                                        flexDirection: 'column'
                                    }}>
                                        <Form.Label style={{
                                            fontFamily: 'Poppins',
                                            fontStyle: "normal",
                                            fontWeight: "500",
                                            fontSize: "9px",
                                            textAlign: "justify",
                                            color: "#303133",
                                            flex: "none",
                                            order: "0",
                                            flexGrow: "0",
                                        }}>
                                            There&apos;s no other program that walks you through exactly what you need to
                                            know to start an online store fast, writtn by someon who has built several
                                            7=figure ecommerce business fom scratch. What&apos;s more, everything has been broken
                                            down in step-bystep detail with real action plans including finding your niche.
                                        </Form.Label>
                                    </ul>
                                </div>
                                <div style={{
                                    display: "flex", justifyContent: "center",
                                    alignItems: 'center', marginTop: "10px"
                                }}>
                                    <PaginationComp />

                                </div>
                                <div style={{
                                    display: "flex", flexDirection: "column",
                                    marginTop: "20px"
                                }}>
                                    <div style={{ display: 'flex', justifyContent: "space-between" }}>
                                        <div>
                                            <Form.Label
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontStyle: "normal",
                                                    fontWeight: "600",
                                                    fontSize: "14px",
                                                    lineHeight: "36px",
                                                    textAlign: "center",
                                                    color: "#303133",
                                                    flex: "none",
                                                    order: "0",
                                                    flexGrow: "0"
                                                }}>Drop your review</Form.Label>
                                        </div>
                                        <div>
                                            <StarRateIcon style={{
                                                color: "#D1D1D1",
                                                fontSize: "16px"
                                            }} />
                                            <StarRateIcon style={{
                                                color: "#D1D1D1",
                                                fontSize: "16px"
                                            }} />
                                            <StarRateIcon style={{
                                                color: "#D1D1D1",
                                                fontSize: "16px"
                                            }} />
                                            <StarRateIcon style={{
                                                color: "#D1D1D1",
                                                fontSize: "16px"
                                            }} />
                                            <StarRateIcon style={{
                                                color: "#D1D1D1",
                                                fontSize: "16px"
                                            }} />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginTop: "5px" }}>
                                    <textarea rows="3" style={{
                                        width: '100%',
                                        padding: "7px"
                                    }}
                                        name="review"
                                        value={review}
                                        onChange={(event => setReview(event.target.value))}
                                    ></textarea>
                                </div>
                                <div style={{ display: "flex", marginTop: "20px" }}>
                                    <Button
                                        disabled={review.length < 1}
                                        onClick={props.handleSubmitReview}
                                        style={{
                                            boxSizing: "border-box",
                                            width: "40%",
                                            height: "40px",
                                            background: "#00902F",
                                            bordeRadius: "6px",
                                            flex: "none",
                                            order: "0",
                                            flexGrow: "0",
                                            border: "none",
                                            fontSize: "12px",
                                        }}>
                                        Submit Review
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </GeneralModal>
            )}
        </>
    )
}