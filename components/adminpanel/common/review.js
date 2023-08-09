import Image from "next/image"
import { useState, useEffect } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import GeneralModal from "../../customers/modal"

export default function Review(props) {
    const [size, setSize] = useState(50)
    const [pageNumbers, setPageNumbers] = useState([])
    const [activePagenumber, setActivePagenumber] = useState(1)
    const [pageNumber, setPageNumber] = useState(1)

    useEffect(() => {
        function handlePagination() {
            const noOfPages = Math.floor(size / 5)
            const pageNumbers = []
            for (let i = 1; i <= noOfPages; i++) {
                pageNumbers.push(i)
            }
            setPageNumbers(pageNumbers)
            // console.log("page numbers", pageNumbers)
        }
        handlePagination()
    }, [size])
    return (
        <>
            <GeneralModal
                size="lg"
                show={props.review}
                onHide={() => {
                    props.setReview(false)
                }}
                style={props.style}
            >
                <Modal.Body style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: "100%"
                }}>
                    <div
                        onClick={() => {
                            props.setReview(false)
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
                    {new Array(size).fill(
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '10px',
                            width: '100%',
                            border: "1px solid #E7E7E7",
                            marginTop: '20px',
                            borderRadius: '7px'
                        }}>
                            <div style={{
                                display: "flex",
                                gap: '10px'
                            }}>
                                <Image
                                    style={{
                                        width: "40px",
                                        maxWidth: "100%",
                                    }}
                                    src="/img/imgholder.png"
                                    width="40"
                                    height="40"
                                    alt="holder"
                                />
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <Form.Label style={{
                                        fontSize: "16px",
                                        fontWeight: "600",
                                        color: "black"
                                    }}>
                                        {props.reviewName}
                                    </Form.Label>
                                    <Form.Label style={{
                                        fontSize: "11px",
                                        color: "#A6A6A6",
                                        marginTop: "-10px"
                                    }}>
                                        {props.reviewDate}
                                    </Form.Label>
                                </div>
                            </div>
                            <div style={{
                                display: "flex",
                            }}>
                                {new Array(5).fill(
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
                                ))}
                            </div>
                            <p style={{
                                fontSize: "10px",
                                color: "#808080",
                                textAlign: "justify"
                            }}>
                                {props.reviewDescription}
                            </p>
                        </div>
                    ).slice((parseInt(pageNumber) * 3) - 3, parseInt(pageNumber) * 3)
                        .map((data, idx) => (
                            <div key={idx}>
                                {data}
                            </div>
                        ))}
                    <div style={{
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: '20px',
                        gap: '10px'
                    }}>
                        <Button
                            disabled={activePagenumber === 1}
                            style={{
                                color: "#808080",
                                fontSize: '15px',
                                cursor: "pointer",
                                background: "transparent",
                                border: 'none',
                                marginTop: '-7px',
                                marginRight: "-7px"
                            }}>
                            {"<"}
                        </Button>
                        {pageNumbers.map((num, idx) => (
                            <Form.Label
                                onClick={() => {
                                    setPageNumber(num)
                                    setActivePagenumber(idx + 1)
                                }}
                                key={idx}
                                style={activePagenumber === num ? {
                                    color: "#7CC427",
                                    fontSize: '15px',
                                    cursor: "pointer"
                                } : {
                                    color: "#808080",
                                    fontSize: '15px',
                                    cursor: "pointer"
                                }}>
                                {num}
                            </Form.Label>
                        ))}
                        <Button
                            disabled={activePagenumber === Math.floor(size / 5)}
                            style={{
                                color: "#808080",
                                fontSize: '15px',
                                cursor: "pointer",
                                background: "transparent",
                                border: 'none',
                                marginTop: '-9px',
                                marginLeft: "-7px"
                            }}>
                            {">"}
                        </Button>
                    </div>
                </Modal.Body>
            </GeneralModal>
        </>
    )
}