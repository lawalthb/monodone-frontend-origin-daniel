import Image from "next/image"
import { useState } from "react"
import { useMediaQuery } from "react-responsive"
import { Button, Form, Modal } from "react-bootstrap"
import GeneralModal from "../../customers/modal"
import CustomPagination from "../customPagination"
import AdminMobileAllOrders from "../adminpanelMobile/commonComp/adminMobileAllOrders"

export default function AllOrders(props) {
    const [pageNumbers, setPageNumbers] = useState([])
    const [activePagenumber, setActivePagenumber] = useState(1)
    const [pageNumber, setPageNumber] = useState(1)

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
                    show={props.allOrders}
                    onHide={() => {
                        props.setAllOrders(false)
                    }}
                >
                    <Modal.Body style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        padding: "0px 20px"
                    }}>
                        <div
                            onClick={() => {
                                props.setAllOrders(false)
                            }}
                            style={{
                                position: "absolute",
                                top: "-1rem",
                                right: '-0.8rem',
                                cursor: "pointer"
                            }}>
                            <Image src="/img/close.png" width="14" height="14" alt="close" />
                        </div>
                        <AdminMobileAllOrders
                            caption={props.caption}
                            allOrdersHeading={props.allOrdersHeading}
                            allOrdersName={props.allOrdersName}
                            allOrdersEmail={props.allOrdersEmail}
                            allOrdersPhone={props.allOrdersPhone}
                            allOrdersAddress={props.allOrdersAddress}
                            onChangeAllOrdersDate={props.onChangeAllOrdersDate}
                            allOrdersDates={props.allOrdersDates}
                            allOrdersData={props.allOrdersData}
                            pageNumber={pageNumber}
                        />
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <CustomPagination
                                setPageNumbers={setPageNumbers}
                                adminAgentData={props.adminAgentData}
                                activePagenumber={activePagenumber}
                                pageNumbers={pageNumbers}
                                setActivePagenumber={setActivePagenumber}
                                setPageNumber={setPageNumber}
                            />
                        </div>
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: 'center',
                            marginTop: "20px"
                        }}>
                            <Button
                                onClick={props.handleAllOrders}
                                style={{
                                    background: "#00902F",
                                    border: "none",
                                    padding: "7px",
                                    color: "white",
                                    width: '100%'
                                }}>{props.okOption}</Button>
                        </div>
                    </Modal.Body>
                </GeneralModal>
            )}
            {isTabAndDesktop && (
                <GeneralModal
                    size="lg"
                    show={props.allOrders}
                    onHide={() => {
                        props.setAllOrders(false)
                    }}
                    style={{
                        marginLeft: "5%"
                    }}
                >
                    <Modal.Body style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%'
                    }}>
                        <div
                            onClick={() => {
                                props.setAllOrders(false)
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
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontFamily: 'Poppins',
                            fontStyle: "normal",
                            fontSize: "18px",
                            fontWeight: 600,
                        }}>
                            {props.caption}
                        </div>
                        <Form.Label style={{
                            fontFamily: 'Poppins',
                            fontStyle: "normal",
                            color: "black",
                            fontSize: "13px",
                            fontWeight: 500,
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
                                    fontSize: "14px",
                                    fontWeight: 500,
                                }}>
                                    Name
                                </Form.Label>
                                <Form.Label style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: "normal",
                                    color: "#A6A6A6",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                }}>
                                    E-mail
                                </Form.Label>
                                <Form.Label style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: "normal",
                                    color: "#A6A6A6",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                }}>
                                    Phone number
                                </Form.Label>
                                <Form.Label style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: "normal",
                                    color: "#A6A6A6",
                                    fontSize: "14px",
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
                                    fontSize: "14px",
                                    fontWeight: 500,
                                }}>
                                    {props.allOrdersName}
                                </Form.Label>
                                <Form.Label style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: "normal",
                                    color: "black",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                }}>
                                    {props.allOrdersEmail}
                                </Form.Label>
                                <Form.Label style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: "normal",
                                    color: "black",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                }}>
                                    {props.allOrdersPhone}
                                </Form.Label>
                                <Form.Label style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: "normal",
                                    color: "black",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                }}>
                                    {props.allOrdersAddress}
                                </Form.Label>
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: "space-between",
                            marginTop: '20px'
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
                                    gap: '5px',
                                    width: "48%"
                                }}>
                                {props.allOrdersData.slice((parseInt(pageNumber) * 13) - 13, parseInt(pageNumber) * 13)
                                    .map((data, idx) => (
                                        <div
                                            key={idx}
                                            style={{
                                                display: "flex",
                                                justifyContent: 'flex-start',
                                                gap: '20px'
                                            }}>
                                            <Form.Label style={{
                                                fontFamily: 'Poppins',
                                                fontStyle: "normal",
                                                color: "#A6A6A6",
                                                fontSize: "11px",
                                                fontWeight: 500,
                                            }}>
                                                {data.dateAdded}
                                            </Form.Label>
                                            <Form.Label style={{
                                                fontFamily: 'Poppins',
                                                fontStyle: "normal",
                                                color: "black",
                                                fontSize: "11px",
                                                fontWeight: 500,
                                            }}>
                                                {data.allOrders.desc}
                                            </Form.Label>
                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'flex-end',
                                                marginLeft: 'auto',
                                                marginTop: '-2px'
                                            }}>
                                                <Button style={{
                                                    background: 'transparent',
                                                    border: "1px solid #7CC427",
                                                    color: "#7CC427",
                                                    fontSize: '10px'
                                                }}>
                                                    Watch
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '5px',
                                    width: "48%"
                                }}>
                                {props.allOrdersData.slice((parseInt(pageNumber) + 12), parseInt(pageNumber) + 12 + 13)
                                    .map((data, idx) => (
                                        <div
                                            key={idx}
                                            style={{
                                                display: "flex",
                                                justifyContent: 'flex-start',
                                                gap: '20px'
                                            }}>
                                            <Form.Label style={{
                                                fontFamily: 'Poppins',
                                                fontStyle: "normal",
                                                color: "#A6A6A6",
                                                fontSize: "11px",
                                                fontWeight: 500,
                                            }}>
                                                {data.dateAdded}
                                            </Form.Label>
                                            <Form.Label style={{
                                                fontFamily: 'Poppins',
                                                fontStyle: "normal",
                                                color: "black",
                                                fontSize: "11px",
                                                fontWeight: 500,
                                            }}>
                                                {data.allOrders.desc}
                                            </Form.Label>
                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'flex-end',
                                                marginLeft: 'auto',
                                                marginTop: '-2px'
                                            }}>
                                                <Button style={{
                                                    background: 'transparent',
                                                    border: "1px solid #7CC427",
                                                    color: "#7CC427",
                                                    fontSize: '10px'
                                                }}>
                                                    Watch
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>

                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <CustomPagination
                                setPageNumbers={setPageNumbers}
                                adminAgentData={props.adminAgentData}
                                activePagenumber={activePagenumber}
                                pageNumbers={pageNumbers}
                                setActivePagenumber={setActivePagenumber}
                                setPageNumber={setPageNumber}
                            />
                        </div>
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: 'center',
                            marginTop: "20px"
                        }}>
                            <Button
                                onClick={props.handleAllOrders}
                                style={{
                                    background: "#00902F",
                                    border: "none",
                                    padding: "7px",
                                    color: "white",
                                    width: '30%'
                                }}>{props.okOption}</Button>
                        </div>
                    </Modal.Body>
                </GeneralModal>
            )}
        </>
    )
}