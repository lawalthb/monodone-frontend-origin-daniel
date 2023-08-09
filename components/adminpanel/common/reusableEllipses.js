import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";
import { Form, OverlayTrigger, Popover } from "react-bootstrap";

export default function ReusableEllipses(props) {
    const isMobile = useMediaQuery({
        query: "(max-width: 709px)",
    });
    const isTabAndDesktop = useMediaQuery({
        query: "(min-width: 710px)",
    });
    const target = useRef(null)
    return (
        <>
            <div style={{
                width: '20%',
                color: "#A6A6A6",
                fontSize: '12px',
                display: 'flex',
                justifyContent: 'flex-end'
            }}>
                <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    rootClose
                    overlay={
                        <Popover id={`popover-positioned-bottom`}>
                            <Popover.Body style={{
                                width: '161px',
                                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.1)",
                                transition: "0.3s",
                            }}>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '5px',
                                        width: "100%"
                                    }}>
                                    {(props.isDocuments || props.isPackages || props.isBulkDelivery) &&
                                        (
                                            <>
                                                <div
                                                    onClick={() => props.setGeneralEdit(true)}
                                                    style={{
                                                        display: "flex",
                                                        gap: "10px",
                                                        cursor: 'pointer'
                                                    }}>
                                                    <Image
                                                        style={{
                                                            width: "24px",
                                                            maxWidth: "100%",
                                                            cursor: 'pointer'
                                                        }}
                                                        src="/img/btnedit.png"
                                                        width="24"
                                                        height="24"
                                                        alt="btnedit"
                                                    />
                                                    <Form.Label style={{
                                                        fontSize: "10px",
                                                        marginTop: '5px'
                                                    }}>
                                                        Edit Distance
                                                    </Form.Label>
                                                </div>
                                                <div style={{
                                                    display: "flex",
                                                    gap: "10px"
                                                }}>
                                                    <Image
                                                        // onClick={() => props.setDeleteColumn(true)}
                                                        style={{
                                                            width: "24px",
                                                            maxWidth: "100%",
                                                            cursor: 'pointer'
                                                        }}
                                                        src="/img/btndelete.png"
                                                        width="24"
                                                        height="24"
                                                        alt="btnblock"
                                                    />
                                                    <Form.Label style={{
                                                        fontSize: "10px",
                                                        marginTop: '5px'
                                                    }}>
                                                        Delete Distance
                                                    </Form.Label>
                                                </div>
                                            </>
                                        )}
                                    {(props.isCarClearing || props.isContainerClearing) &&
                                        (
                                            <>
                                                <div
                                                    onClick={() => props.setGeneralEdit(true)}
                                                    style={{
                                                        display: "flex",
                                                        gap: "10px"
                                                    }}>
                                                    <Image
                                                        style={{
                                                            width: "24px",
                                                            maxWidth: "100%",
                                                            cursor: 'pointer'
                                                        }}
                                                        src="/img/btnedit.png"
                                                        width="24"
                                                        height="24"
                                                        alt="btnedit"
                                                    />
                                                    <Form.Label style={{
                                                        fontSize: "10px",
                                                        marginTop: '5px'
                                                    }}>
                                                        Edit Value
                                                    </Form.Label>
                                                </div>
                                                <div
                                                    onClick={() => props.setGeneralEdit(true)}
                                                    style={{
                                                        display: "flex",
                                                        gap: "10px"
                                                    }}>
                                                    <Image
                                                        style={{
                                                            width: "24px",
                                                            maxWidth: "100%",
                                                            cursor: 'pointer'
                                                        }}
                                                        src="/img/btnedit.png"
                                                        width="24"
                                                        height="24"
                                                        alt="btnedit"
                                                    />
                                                    <Form.Label style={{
                                                        fontSize: "10px",
                                                        marginTop: '5px'
                                                    }}>
                                                        Edit Year
                                                    </Form.Label>
                                                </div>
                                                <div style={{
                                                    display: "flex",
                                                    gap: "10px"
                                                }}>
                                                    <Image
                                                        // onClick={() => props.setDeleteColumn(true)}
                                                        style={{
                                                            width: "24px",
                                                            maxWidth: "100%",
                                                            cursor: 'pointer'
                                                        }}
                                                        src="/img/btndelete.png"
                                                        width="24"
                                                        height="24"
                                                        alt="btnblock"
                                                    />
                                                    <Form.Label style={{
                                                        fontSize: "10px",
                                                        marginTop: '5px'
                                                    }}>
                                                        Delete Distance
                                                    </Form.Label>
                                                </div>
                                            </>
                                        )}
                                    {(props.isCarDelivery || props.isContainerDelivery) &&
                                        (
                                            <>
                                                <div
                                                    onClick={() => props.setGeneralEdit(true)}
                                                    style={{
                                                        display: "flex",
                                                        gap: "10px"
                                                    }}>
                                                    <Image
                                                        style={{
                                                            width: "24px",
                                                            maxWidth: "100%",
                                                            cursor: 'pointer'
                                                        }}
                                                        src="/img/btnedit.png"
                                                        width="24"
                                                        height="24"
                                                        alt="btnedit"
                                                    />
                                                    <Form.Label style={{
                                                        fontSize: "10px",
                                                        marginTop: '5px'
                                                    }}>
                                                        Edit Miles
                                                    </Form.Label>
                                                </div>
                                                <div style={{
                                                    display: "flex",
                                                    gap: "10px"
                                                }}>
                                                    <Image
                                                        // onClick={() => props.setDeleteColumn(true)}
                                                        style={{
                                                            width: "24px",
                                                            maxWidth: "100%",
                                                            cursor: 'pointer'
                                                        }}
                                                        src="/img/btndelete.png"
                                                        width="24"
                                                        height="24"
                                                        alt="btnblock"
                                                    />
                                                    <Form.Label style={{
                                                        fontSize: "10px",
                                                        marginTop: '5px'
                                                    }}>
                                                        Delete Distance
                                                    </Form.Label>
                                                </div>
                                            </>
                                        )}
                                </div>
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <span ref={target}>
                        <Image
                            style={isMobile ? {
                                width: "2px",
                                maxWidth: "100%",
                                // marginTop: '19px',
                                cursor: 'pointer'
                            } : {
                                width: "2px",
                                maxWidth: "100%",
                                marginTop: '19px',
                                cursor: 'pointer'
                            }}
                            src="/img/vertellipses.png"
                            width="2"
                            height="10"
                            alt="vertellipses"
                        />
                    </span>
                </OverlayTrigger>

            </div>
        </>
    )
}