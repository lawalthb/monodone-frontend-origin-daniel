import Image from "next/image";
import { Button, Form } from "react-bootstrap";

export default function OrderDetailsMobile(props) {
    return (
        <>
            <div style={{
                height: "100%",
                background: 'white'
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image style={{
                        marginTop: "20px"
                    }} src={props.carImagesMobile[props.activeIndex]} width="343" height="198" alt="car pic" />
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: "space-between",
                    marginTop: '20px',
                    padding: '10px'
                }}>
                    <Button
                        disabled={props.activeIndex === 0}
                        onClick={props.handlePrevious}
                        style={props.activeIndex === 0 ? {
                            background: "transparent",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: 'center',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            border: "1px solid #E7E7E7",
                        } : {
                            background: "transparent",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: 'center',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            border: "1px solid #7CC427",
                        }}>
                        <Form.Label style={props.activeIndex === 0 ? {
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
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    {new Array(props.carImagesMobile.length).fill(
                        <>
                            <div style={{
                                width: '10px',
                                height: "10px",
                                background: "#E7E7E7",
                                borderRadius: '50%',
                                marginTop: "12px"
                            }}></div>
                        </>
                    ).map((dot, idx) => {
                        let result
                        if (idx === props.activeIndex) {
                            result = (
                                <div
                                    style={{
                                        width: '10px',
                                        height: "10px",
                                        background: "#00902F",
                                        borderRadius: '50%',
                                        marginTop: "12px"
                                    }}></div>
                            )
                        } else {
                            result = dot
                        }
                        return result
                    })}
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <Button
                        disabled={props.activeIndex === props.carImagesMobile.length - 1}
                        onClick={props.handleNext}
                        style={props.activeIndex === props.carImagesMobile.length - 1 ? {
                            background: "transparent",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: 'center',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            border: "1px solid #E7E7E7",

                        } : {
                            background: "transparent",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: 'center',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            border: "1px solid #7CC427",
                        }}>
                        <Form.Label style={props.activeIndex === props.carImagesMobile.length - 1 ? {
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
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "10px"
                }}>
                    <Form.Label style={{
                        color: "black",
                        fontWeight: '500',
                        fontSize: "16px",
                        marginTop: "30px",
                        padding: "10px"
                    }}>
                        Red 2020 Gwagon
                    </Form.Label>
                    <Form.Label style={{
                        color: "black",
                        fontSize: "14px",
                        marginTop: '10px',
                        padding: "10px"
                    }}>
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    </Form.Label>
                </div>
                <div style={{
                    display: "grid",
                    columnGap: '10px',
                    gridTemplateColumns: "auto auto auto",
                    width: "100%",
                    padding: "10px"
                }}>
                    {new Array(6).fill(
                        <div>
                            <Image style={{
                                width: "100%",
                                maxWidth: "216px"
                            }} src="/img/cert.png" width="216" height="150" alt="car pic" />
                        </div>
                    ).map((img) => img)}
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '10px',
                    width: "100%"

                }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: 'column'
                        }}>
                        <Form.Label style={{
                            color: "black",
                            fontWeight: '500',
                            fontSize: "16px",
                            marginBottom: "20px"
                        }}>
                            Car Type
                        </Form.Label>
                        <Form.Label style={{
                            color: "black",
                            fontWeight: '500',
                            fontSize: "16px",
                            marginBottom: "20px"
                        }}>
                            Plate Number
                        </Form.Label>
                        <Form.Label style={{
                            color: "black",
                            fontWeight: '500',
                            fontSize: "16px",
                            marginBottom: "20px"
                        }}>
                            Car Model
                        </Form.Label>
                        <Form.Label style={{
                            color: "black",
                            fontWeight: '500',
                            fontSize: "16px",
                            marginBottom: "20px"
                        }}>
                            Car Year
                        </Form.Label>
                        <Form.Label style={{
                            color: "black",
                            fontWeight: '500',
                            fontSize: "16px",
                            marginBottom: "20px"
                        }}>
                            Car Value
                        </Form.Label>
                        <Form.Label style={{
                            color: "black",
                            fontWeight: '500',
                            fontSize: "16px",
                            marginBottom: "20px"
                        }}>
                            Departure Country
                        </Form.Label>
                        <Form.Label style={{
                            color: "black",
                            fontWeight: '500',
                            fontSize: "16px",
                            marginBottom: "20px"
                        }}>
                            Destination Country
                        </Form.Label>
                        <Form.Label style={{
                            color: "black",
                            fontWeight: '500',
                            fontSize: "16px",
                            marginBottom: "20px"
                        }}>
                            Estimated Cost
                        </Form.Label>
                        <Form.Label style={{
                            color: "black",
                            fontWeight: '500',
                            fontSize: "16px",
                            marginBottom: "20px"
                        }}>
                            Customer&apos;s Bid
                        </Form.Label>
                        <Form.Label style={{
                            color: "black",
                            fontWeight: '500',
                            fontSize: "16px",
                            marginBottom: "20px"
                        }}>
                            Amount Paid
                        </Form.Label>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: 'column'
                    }}>
                        <Form.Label style={{
                            color: "black",
                            fontSize: "14px",
                            marginBottom: "24px"
                        }}>
                            Mercedez Benz
                        </Form.Label>
                        <Form.Label style={{
                            color: "black",
                            fontSize: "14px",
                            marginBottom: "24px"
                        }}>
                            PRG-6959
                        </Form.Label>
                        <Form.Label style={{
                            color: "black",
                            fontSize: "14px",
                            marginBottom: "24px"
                        }}>
                            Gwagon
                        </Form.Label>
                        <Form.Label style={{
                            color: "black",
                            fontSize: "14px",
                            marginBottom: "24px"
                        }}>
                            2020 Gwagon
                        </Form.Label>
                        <Form.Label style={{
                            color: "black",
                            fontSize: "14px",
                            marginBottom: "24px"
                        }}>
                            $3.4m
                        </Form.Label>
                        <Form.Label style={{
                            color: "black",
                            fontSize: "14px",
                            marginBottom: "24px"
                        }}>
                            London, UK
                        </Form.Label>
                        <Form.Label style={{
                            color: "black",
                            fontSize: "14px",
                            marginBottom: "24px"
                        }}>
                            Nigeria
                        </Form.Label>
                        <Form.Label style={{
                            color: "#495059",
                            fontWeight: "600",
                            fontSize: "14px",
                            marginBottom: "24px"
                        }}>
                            #145,000
                        </Form.Label>
                        <Form.Label style={{
                            color: "#495059",
                            fontWeight: "600",
                            fontSize: "14px",
                            marginBottom: "24px"
                        }}>
                            #100,000
                        </Form.Label>
                        <Form.Label style={{
                            color: "#495059",
                            fontWeight: "600",
                            fontSize: "14px",
                            marginBottom: "24px"
                        }}>
                            #130,000
                        </Form.Label>
                    </div>
                </div>
                <div style={{
                    marginTop: "20px",
                    padding: "10px",
                    marginBottom: '20px'
                }}>
                    <Button
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
                        Print Document
                    </Button>
                </div>
            </div>
        </>
    )
}