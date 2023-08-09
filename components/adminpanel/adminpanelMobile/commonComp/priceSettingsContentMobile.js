import Image from "next/image"
import { Form } from "react-bootstrap"
import ReusableEllipses from "../../common/reusableEllipses"

export default function PriceSettingsContentMobile(props) {
    const distanceData = [
        "to 20km", "20-100km", "20-1000km", "20-10000km",
    ]
    const wData = [
        "< 30kg", "< 30kg", "> 30kg", "> 30kg"
    ]
    const sData = [
        "<20x30x60", "<20x30x60", ">20x30x60", ">20x30x60"
    ]
    const typeData = [
        "A5", "A4", "A3", "A1"
    ]
    const carValueData = [
        "$3.4m", "$3.4-5.8m", "$5.8-10m", "$10-30m"
    ]
    const yearData = [
        "2023", "2022", "2021", "2020"
    ]
    const carDesc = [
        "Older car", "2014-2015", "2015-2016", "2016-newer"
    ]
    const noOfCars = [
        5, 6, 2, 3
    ]
    const cPointData = [
        "East", 'West', "North(C/E)", "South"
    ]
    const states = [
        "Enugu", "Lagos", "Kaduna", "Ogun"
    ]
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: '10px',
                gap: '5px'
            }}>
                {(props.isPackages
                    || props.isDocuments
                    || props.isBulkDelivery) ? (
                    <>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: "25%",
                            gap: "5px"
                        }}>
                            {distanceData.map((data, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        display: "flex",
                                        justifyContent:'space-between',
                                        // gap: "5px"
                                    }}>
                                    <Form.Label
                                        key={idx}
                                        style={{
                                            color: "black",
                                            fontWeight: "500",
                                            fontSize: "11px",
                                            fontFamily: 'Poppins',
                                            fontStyle: "normal",
                                        }}>
                                        {data}
                                    </Form.Label>
                                    <ReusableEllipses
                                        isPackages={props.isPackages}
                                        isDocuments={props.isDocuments}
                                        isBulkDelivery={props.isBulkDelivery}
                                        setGeneralEdit={props.setGeneralEdit}
                                    />
                                </div>
                            ))}
                        </div>
                        {(props.isPackages
                            || props.isBulkDelivery) && (
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: "5px"
                                }}>
                                    {wData.map((data, idx) => (
                                        <Form.Label
                                            key={idx}
                                            style={{
                                                color: "black",
                                                fontWeight: "500",
                                                fontSize: "11px",
                                                fontFamily: 'Poppins',
                                                fontStyle: "normal",
                                            }}>
                                            {data}
                                        </Form.Label>
                                    ))}
                                </div>
                            )}
                        {props.isDocuments && (
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: "5px"
                            }}>
                                {typeData.map((data, idx) => (
                                    <Form.Label
                                        key={idx}
                                        style={{
                                            color: "black",
                                            fontWeight: "500",
                                            fontSize: "11px",
                                            fontFamily: 'Poppins',
                                            fontStyle: "normal",
                                        }}>
                                        {data}
                                    </Form.Label>
                                ))}
                            </div>
                        )}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: "5px"
                        }}>
                            {sData.map((data, idx) => (
                                <Form.Label
                                    key={idx}
                                    style={{
                                        color: "black",
                                        fontWeight: "500",
                                        fontSize: "11px",
                                        fontFamily: 'Poppins',
                                        fontStyle: "normal",
                                    }}>
                                    {data}
                                </Form.Label>
                            ))}
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: "5px"
                        }}>
                            {new Array(4).fill("#120.00").map((data, idx) => (
                                <Form.Label
                                    key={idx}
                                    style={{
                                        color: "black",
                                        fontWeight: "500",
                                        fontSize: "11px",
                                        fontFamily: 'Poppins',
                                        fontStyle: "normal",
                                    }}>
                                    {data}
                                </Form.Label>
                            ))}
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: "5px"
                        }}>
                            {new Array(4).fill(
                                <div style={{
                                    display: 'flex',
                                    gap: "5px",
                                    marginBottom: '5px'
                                }}>
                                    <Image
                                        onClick={() => props.setEditRow(true)}
                                        style={{
                                            width: "18px",
                                            maxWidth: "100%",
                                            cursor: 'pointer'
                                        }}
                                        src="/img/btnedit.png"
                                        width="18"
                                        height="18"
                                        alt="btnedit"
                                    />
                                    <Image
                                        onClick={() => props.setDeleteColumn(true)}
                                        style={{
                                            width: "18px",
                                            maxWidth: "100%",
                                        }}
                                        src="/img/btndelete.png"
                                        width="18"
                                        height="18"
                                        alt="btnblock"
                                    />
                                </div>
                            ).map((data) => data)}
                        </div>
                    </>
                ) : props.isCarClearing ? (
                    <>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: "5px",
                            width: "25%"
                        }}>
                            {carValueData.map((data, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        display: "flex",
                                        justifyContent:'space-between',
                                        // gap: "5px"
                                    }}>
                                    <Form.Label
                                        key={idx}
                                        style={{
                                            color: "black",
                                            fontWeight: "500",
                                            fontSize: "11px",
                                            fontFamily: 'Poppins',
                                            fontStyle: "normal",
                                        }}>
                                        {data}
                                    </Form.Label>
                                    <ReusableEllipses
                                        isCarClearing={props.isCarClearing}
                                        setGeneralEdit={props.setGeneralEdit}
                                    />
                                </div>
                            ))}
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: "5px"
                        }}>
                            {yearData.map((data, idx) => (
                                <Form.Label
                                    key={idx}
                                    style={{
                                        color: "black",
                                        fontWeight: "500",
                                        fontSize: "11px",
                                        fontFamily: 'Poppins',
                                        fontStyle: "normal",
                                    }}>
                                    {data}
                                </Form.Label>
                            ))}
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: "5px"
                        }}>
                            {new Array(4).fill("#120.00").map((data, idx) => (
                                <Form.Label
                                    key={idx}
                                    style={{
                                        color: "black",
                                        fontWeight: "500",
                                        fontSize: "11px",
                                        fontFamily: 'Poppins',
                                        fontStyle: "normal",
                                    }}>
                                    {data}
                                </Form.Label>
                            ))}
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: "5px"
                        }}>
                            {new Array(4).fill(
                                <div style={{
                                    display: 'flex',
                                    gap: "5px",
                                    marginBottom: '5px'
                                }}>
                                    <Image
                                        onClick={() => props.setEditRow(true)}
                                        style={{
                                            width: "18px",
                                            maxWidth: "100%",
                                            cursor: 'pointer'
                                        }}
                                        src="/img/btnedit.png"
                                        width="18"
                                        height="18"
                                        alt="btnedit"
                                    />
                                    <Image
                                        onClick={() => props.setDeleteColumn(true)}
                                        style={{
                                            width: "18px",
                                            maxWidth: "100%",
                                        }}
                                        src="/img/btndelete.png"
                                        width="18"
                                        height="18"
                                        alt="btnblock"
                                    />
                                </div>
                            ).map((data) => data)}
                        </div>
                    </>
                ) : props.isContainerClearing ? (
                    <>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: "5px",
                            width: "25%"
                        }}>
                            {carValueData.map((data, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        display: "flex",
                                        justifyContent:'space-between',
                                        gap: "5px"
                                    }}>
                                    <Form.Label
                                        key={idx}
                                        style={{
                                            color: "black",
                                            fontWeight: "500",
                                            fontSize: "11px",
                                            fontFamily: 'Poppins',
                                            fontStyle: "normal",
                                        }}>
                                        {data}
                                    </Form.Label>
                                    <ReusableEllipses
                                        isContainerClearing={props.isContainerClearing}
                                        setGeneralEdit={props.setGeneralEdit}
                                    />
                                </div>
                            ))}
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: "5px"
                        }}>
                            {carDesc.map((data, idx) => (
                                <Form.Label
                                    key={idx}
                                    style={{
                                        color: "black",
                                        fontWeight: "500",
                                        fontSize: "11px",
                                        fontFamily: 'Poppins',
                                        fontStyle: "normal",
                                    }}>
                                    {data}
                                </Form.Label>
                            ))}
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: "5px"
                        }}>
                            {noOfCars.map((data, idx) => (
                                <Form.Label
                                    key={idx}
                                    style={{
                                        color: "black",
                                        fontWeight: "500",
                                        fontSize: "11px",
                                        fontFamily: 'Poppins',
                                        fontStyle: "normal",
                                    }}>
                                    {data}
                                </Form.Label>
                            ))}
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: "5px"
                        }}>
                            {new Array(4).fill("#120.00").map((data, idx) => (
                                <Form.Label
                                    key={idx}
                                    style={{
                                        color: "black",
                                        fontWeight: "500",
                                        fontSize: "11px",
                                        fontFamily: 'Poppins',
                                        fontStyle: "normal",
                                    }}>
                                    {data}
                                </Form.Label>
                            ))}
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: "5px"
                        }}>
                            {new Array(4).fill(
                                <div style={{
                                    display: 'flex',
                                    gap: "5px",
                                    marginBottom: '5px'
                                }}>
                                    <Image
                                        onClick={() => props.setEditRow(true)}
                                        style={{
                                            width: "18px",
                                            maxWidth: "100%",
                                            cursor: 'pointer'
                                        }}
                                        src="/img/btnedit.png"
                                        width="18"
                                        height="18"
                                        alt="btnedit"
                                    />
                                    <Image
                                        onClick={() => props.setDeleteColumn(true)}
                                        style={{
                                            width: "18px",
                                            maxWidth: "100%",
                                        }}
                                        src="/img/btndelete.png"
                                        width="18"
                                        height="18"
                                        alt="btnblock"
                                    />
                                </div>
                            ).map((data) => data)}
                        </div>
                    </>
                ) : (props.isCarDelivery
                    || props.isContainerDelivery) ? (
                    <>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: "5px",
                            width: "25%"
                        }}>
                            {distanceData.map((data, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        display: "flex",
                                        justifyContent:'space-between',
                                        gap: "5px"
                                    }}>
                                    <Form.Label
                                        key={idx}
                                        style={{
                                            color: "black",
                                            fontWeight: "500",
                                            fontSize: "11px",
                                            fontFamily: 'Poppins',
                                            fontStyle: "normal",
                                        }}>
                                        {data}
                                    </Form.Label>
                                    <ReusableEllipses
                                        isCarDelivery={props.isCarDelivery}
                                        isContainerDelivery={props.isContainerDelivery}
                                        setGeneralEdit={props.setGeneralEdit}
                                    />
                                </div>

                            ))}
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: "5px"
                        }}>
                            {cPointData.map((data, idx) => (
                                <Form.Label
                                    key={idx}
                                    style={{
                                        color: "black",
                                        fontWeight: "500",
                                        fontSize: "11px",
                                        fontFamily: 'Poppins',
                                        fontStyle: "normal",
                                        textAlign: "center"
                                    }}>
                                    {data}
                                </Form.Label>
                            ))}
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: "5px"
                        }}>
                            {states.map((data, idx) => (
                                <Form.Label
                                    key={idx}
                                    style={{
                                        color: "black",
                                        fontWeight: "500",
                                        fontSize: "11px",
                                        fontFamily: 'Poppins',
                                        fontStyle: "normal",
                                        textAlign: "center"
                                    }}>
                                    {data}
                                </Form.Label>
                            ))}
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: "5px"
                        }}>
                            {new Array(4).fill("#120.00").map((data, idx) => (
                                <Form.Label
                                    key={idx}
                                    style={{
                                        color: "black",
                                        fontWeight: "500",
                                        fontSize: "11px",
                                        fontFamily: 'Poppins',
                                        fontStyle: "normal",
                                    }}>
                                    {data}
                                </Form.Label>
                            ))}
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: "5px"
                        }}>
                            {new Array(4).fill(
                                <div style={{
                                    display: 'flex',
                                    gap: "5px",
                                    marginBottom: '5px'
                                }}>
                                    <Image
                                        onClick={() => props.setEditRow(true)}
                                        style={{
                                            width: "18px",
                                            maxWidth: "100%",
                                            cursor: 'pointer'
                                        }}
                                        src="/img/btnedit.png"
                                        width="18"
                                        height="18"
                                        alt="btnedit"
                                    />
                                    <Image
                                        onClick={() => props.setDeleteColumn(true)}
                                        style={{
                                            width: "18px",
                                            maxWidth: "100%",
                                        }}
                                        src="/img/btndelete.png"
                                        width="18"
                                        height="18"
                                        alt="btnblock"
                                    />
                                </div>
                            ).map((data) => data)}
                        </div>
                    </>
                ) : undefined}
            </div >
        </>
    )
}