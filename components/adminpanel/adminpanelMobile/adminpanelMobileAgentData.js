import Image from "next/image";
import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import AdminFullinfo from "../adminFullinfo";
import EditAgentForm from "../editAgentForm";

const fullInformation = {
    agentNo: "",
    dateAdded: "",
    name: "",
    address: '',
    phoneNo: "",
    weight: '',
    dimensions: '',
    store: ["/img/storeimg.png", "/img/storeimg2.png"],
    regDoc: "/img/regdoc.png",
    guarantorName1: "Ufere Goodnews",
    guarantorAddress1: "Greenland Estate, Lekki - Lagos",
    guarantorPhoneNo1: "998 772 26 66",
    guarantorName2: "Ufere Goodnews",
    guarantorAddress2: "Greenland Estate, Lekki - Lagos",
    guarantorPhoneNo2: "998 772 26 66",
}

export default function AdminpanelMobileAgentData(props) {
    const [index, setIndex] = useState()
    const [agentNoEdit, setAgentNoEdit] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [phoneNo, setPhoneNo] = useState("")
    const [weightEdit, setWeightEdit] = useState("")
    const [editAgentForm, setEditAgentForm] = useState(false)
    const [toThirty, setToThirty] = useState(false)
    const [moreThirty, setMoreThirty] = useState(false)
    const [adminFullinfo, setAdminFullinfo] = useState(false)
    const [fullInfo, setFullInfo] = useState(fullInformation)

    const handleFullInfo = () => {
        const filteredData = props.adminAgentData.filter((data) => data.agentNo === agentNoEdit)[0]
        setFullInfo((prevState) => {
            return {
                ...prevState,
                agentNo: filteredData?.agentNo,
                dateAdded: filteredData?.dateAdded,
                name: filteredData?.businessName,
                address: filteredData?.address,
                phoneNo: filteredData?.phoneNumber,
                weight: filteredData?.weight,
                dimensions: filteredData?.dimensions
            }
        })
    }

    const handleSaveEdited = () => {
        const filteredData = props.adminAgentData.filter((data) => data.agentNo === agentNoEdit)[0]
        const index = props.adminAgentData.findIndex((data) => data.agentNo === agentNoEdit)

        filteredData.businessName = firstName + " " + lastName
        filteredData.address = address
        filteredData.phoneNumber = phoneNo
        if (toThirty) {
            filteredData.weight = "to 30 kg"
        }
        if (moreThirty) {
            filteredData.weight = "more 30 kg"
        }

        props.adminAgentData.splice(index, 1, filteredData)
        console.log("saved")
    }

    const handleToThirty = () => {
        setToThirty(true)
        setMoreThirty(false)
    }
    const handleMoreThirty = () => {
        setMoreThirty(true)
        setToThirty(false)
    }

    const onFirstnameChange = (event) => {
        setFirstName(event.target.value)
    }
    const onLastnameChange = (event) => {
        setLastName(event.target.value)
    }
    const onAddressChange = (event) => {
        setAddress(event.target.value)
    }
    const onPhoneNoChange = (event) => {
        setPhoneNo(event.target.value)
    }

    return (
        <>
            <div
                // onClick={() => setIndex(props.idx)}
                key={props.idx} style={{
                    display: 'flex',
                    gap: "10px",
                    width: '100%',
                    marginTop: "10px",
                    padding: '10px'
                }}>
                {props.isAgentManagement && (

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '10%'
                    }}>
                        {index ? (
                            <Image
                                onClick={() => setIndex((prevState) => {
                                    prevState = ""
                                    return prevState
                                })}
                                style={{
                                    width: "24px",
                                    maxWidth: "100%",
                                }}
                                src="/img/up.png"
                                width="24"
                                height="24"
                                alt="badge"
                            />
                        ) : index === 0 ? (
                            <Image
                                onClick={() => setIndex((prevState) => {
                                    prevState = ""
                                    return prevState
                                })}
                                style={{
                                    width: "24px",
                                    maxWidth: "100%",
                                }}
                                src="/img/up.png"
                                width="24"
                                height="24"
                                alt="badge"
                            />
                        ) : (
                            <Image
                                onClick={() => setIndex((prevState) => {
                                    prevState = props.idx
                                    return prevState
                                })}
                                style={{
                                    width: "24px",
                                    maxWidth: "100%",
                                }}
                                src="/img/down.png"
                                width="24"
                                height="24"
                                alt="badge"
                            />
                        )}
                    </div>
                )}
                {props.isAgentManagement && (
                    <>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '35%'
                        }}>
                            <Form.Label style={{
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                marginBottom: "20px"
                                // borderBottom: '1px solid #E7E7E7'
                            }}>
                                Agent no
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                marginBottom: "20px"
                                // borderBottom: '1px solid #E7E7E7'
                            } : {
                                display: 'none'
                            }}>
                                Date added
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: 'block',
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                marginBottom: "20px",
                                // borderBottom: '1px solid #E7E7E7'
                            } : {
                                display: 'none'
                            }}>
                                Business name
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                marginBottom: "10px"
                                // borderBottom: '1px solid #E7E7E7'
                            } : {
                                display: 'none'
                            }}>
                                Address
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                marginBottom: "20px",
                                marginTop: "20px",
                                // borderBottom: '1px solid #E7E7E7'
                            } : {
                                display: "none"
                            }}>
                                Phone number
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                marginBottom: "20px"
                                // borderBottom: '1px solid #E7E7E7'
                            } : {
                                display: 'none'
                            }}>
                                Weight
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                marginBottom: "20px"
                                // borderBottom: '1px solid #E7E7E7'
                            } : {
                                display: "none"
                            }}>
                                Dimensions
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: 'block',
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                marginBottom: "20px"
                                // borderBottom: '1px solid #E7E7E7'
                            } : {
                                display: "none"
                            }}>
                                Actions
                            </Form.Label>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '50%'
                        }}>
                            <Form.Label style={{
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black"
                            }}>
                                {props.data.agentNo}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                marginTop: '10px'
                                // borderBottom: '1px solid #E7E7E7'
                            } : {
                                display: "none"
                            }}>
                                {props.data.dateAdded}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                marginBottom: "20px",
                                marginTop: '10px'
                                // borderBottom: '1px solid #E7E7E7'
                            } : {
                                display: 'none'
                            }}>
                                {props.data.businessName}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: 'block',
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                marginBottom: "20px"
                                // borderBottom: '1px solid #E7E7E7'
                            } : {
                                display: 'none'
                            }}>
                                {props.data.address}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                marginBottom: "20px",
                                // marginTop: '10px'
                                // borderBottom: '1px solid #E7E7E7'
                            } : {
                                display: 'none'
                            }}>
                                {props.data.phoneNumber}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                marginBottom: "20px"
                                // borderBottom: '1px solid #E7E7E7'
                            } : {
                                display: 'none'
                            }}>
                                {props.data.weight}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                marginBottom: "20px"
                                // borderBottom: '1px solid #E7E7E7'
                            } : {
                                display: "none"
                            }}>
                                {props.data.dimensions}
                            </Form.Label>
                            <div style={index === props.idx ? {
                                display: "flex",
                                gap: "10px"
                            } : {
                                display: "none"
                            }}>
                                <Image
                                    onClick={() => {
                                        setAgentNoEdit(props.data.agentNo);
                                        setAdminFullinfo(true)
                                        handleFullInfo()
                                    }}
                                    style={{
                                        width: "24px",
                                        maxWidth: "100%",
                                    }}
                                    src={props.data.action[0]}
                                    width="24"
                                    height="24"
                                    alt="badge"
                                />
                                <Image
                                    onClick={() => {
                                        setAgentNoEdit(props.data.agentNo);
                                        setFirstName(props.data.businessName.split(" ")[0]);
                                        setLastName(props.data.businessName.split(" ")[1]);
                                        setAddress(props.data.address);
                                        setPhoneNo(props.data.phoneNumber);
                                        setWeightEdit(props.data.weight);
                                        setEditAgentForm(true)
                                    }}
                                    style={{
                                        width: "24px",
                                        maxWidth: "100%",
                                    }}
                                    src={props.data.action[1]}
                                    width="24"
                                    height="24"
                                    alt="badge"
                                />
                                <Image
                                    style={{
                                        width: "24px",
                                        maxWidth: "100%",
                                    }}
                                    src={props.data.action[2]}
                                    width="24"
                                    height="24"
                                    alt="badge"
                                />
                            </div>
                        </div>
                    </>
                )}
                {props.isAgentRequest && (

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '10%'
                    }}>
                        {index ? (
                            <Image
                                onClick={() => setIndex((prevState) => {
                                    prevState = ""
                                    return prevState
                                })}
                                style={{
                                    width: "24px",
                                    maxWidth: "100%",
                                }}
                                src="/img/up.png"
                                width="24"
                                height="24"
                                alt="badge"
                            />
                        ) : index === 0 ? (
                            <Image
                                onClick={() => setIndex((prevState) => {
                                    prevState = ""
                                    return prevState
                                })}
                                style={{
                                    width: "24px",
                                    maxWidth: "100%",
                                }}
                                src="/img/up.png"
                                width="24"
                                height="24"
                                alt="badge"
                            />
                        ) : (
                            <Image
                                onClick={() => setIndex((prevState) => {
                                    prevState = props.idx
                                    return prevState
                                })}
                                style={{
                                    width: "24px",
                                    maxWidth: "100%",
                                }}
                                src="/img/down.png"
                                width="24"
                                height="24"
                                alt="badge"
                            />
                        )}
                    </div>
                )}
                {props.isAgentRequest && (
                    <>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '35%'
                        }}>
                            <Form.Label style={{
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                marginBottom: "20px"
                                // borderBottom: '1px solid #E7E7E7'
                            }}>
                                Agent no
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                marginBottom: "20px"
                                // borderBottom: '1px solid #E7E7E7'
                            } : {
                                display: 'none'
                            }}>
                                Date added
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                marginBottom: "20px"
                                // borderBottom: '1px solid #E7E7E7'
                            } : {
                                display: 'none'
                            }}>
                                Name
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: 'block',
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                marginBottom: "20px",
                                // borderBottom: '1px solid #E7E7E7'
                            } : {
                                display: 'none'
                            }}>
                                Status
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: 'block',
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                marginBottom: "20px"
                                // borderBottom: '1px solid #E7E7E7'
                            } : {
                                display: "none"
                            }}>
                                Actions
                            </Form.Label>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '50%'
                        }}>
                            <Form.Label style={{
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black"
                            }}>
                                {props.data.agentNo}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                marginTop: '10px'
                                // borderBottom: '1px solid #E7E7E7'
                            } : {
                                display: "none"
                            }}>
                                {props.data.dateAdded}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? {
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "black",
                                marginBottom: "20px",
                                marginTop: '10px'
                                // borderBottom: '1px solid #E7E7E7'
                            } : {
                                display: 'none'
                            }}>
                                {props.data.businessName}
                            </Form.Label>
                            <Form.Label style={index === props.idx ? props.data.status === "Waiting" ? {
                                fontSize: "12px",
                                fontWeight: '500',
                                width: 'fit-content',
                                color: "#FFC700",
                                background: "rgba(255, 199, 0, 0.2)",
                                borderRadius: '100px',
                                padding: '2px 10px'
                            } : props.data.status === "Confirmed" ? {
                                fontSize: "12px",
                                fontWeight: '500',
                                width: 'fit-content',
                                color: "#7CC427",
                                background: "rgba(124, 196, 39, 0.2)",
                                borderRadius: '100px',
                                padding: '2px 10px'
                            } : props.data.status === "Rejected" ? {
                                fontSize: "12px",
                                fontWeight: '500',
                                width: 'fit-content',
                                color: "#F20808",
                                background: "rgba(242, 8, 8, 0.2)",
                                borderRadius: '100px',
                                padding: '2px 10px'
                            } : {} : {
                                display: 'none'
                            }}>
                                {props.data.status}
                            </Form.Label>
                            <div style={index === props.idx ? {
                                display: "flex",
                                gap: "10px",
                                marginTop: '10px'
                            } : {
                                display: "none"
                            }}>
                                <Image
                                    onClick={() => {
                                        setAgentNoEdit(props.data.agentNo);
                                        setAdminFullinfo(true)
                                        handleFullInfo()
                                    }}
                                    style={{
                                        width: "24px",
                                        maxWidth: "100%",
                                    }}
                                    src={props.data.action[0]}
                                    width="24"
                                    height="24"
                                    alt="badge"
                                />
                            </div>
                        </div>
                    </>
                )}
            </div>
            <EditAgentForm
                style={{
                    marginTop: "5%",
                }}
                editAgentForm={editAgentForm}
                setEditAgentForm={setEditAgentForm}
                setBackdrop={props.setBackdrop}
                agentNoEdit={agentNoEdit}
                firstName={firstName}
                lastName={lastName}
                address={address}
                phoneNo={phoneNo}
                weightEdit={weightEdit}
                onFirstnameChange={onFirstnameChange}
                onLastnameChange={onLastnameChange}
                onAddressChange={onAddressChange}
                onPhoneNoChange={onPhoneNoChange}
                toThirty={toThirty}
                handleToThirty={handleToThirty}
                moreThirty={moreThirty}
                handleMoreThirty={handleMoreThirty}
                setToThirty={setToThirty}
                setMoreThirty={setMoreThirty}
                handleSaveEdited={handleSaveEdited}
                setIsAgentRequest={props.setIsAgentRequest}
                setIsAgentManagement={props.setIsAgentManagement}
                setAgentList={props.setAgentList}
            />
            <AdminFullinfo
                style={{

                }}
                adminFullinfo={adminFullinfo}
                setAdminFullinfo={setAdminFullinfo}
                agentNo={fullInfo.agentNo}
                dateAdded={fullInfo.dateAdded}
                name={fullInfo.name}
                address={fullInfo.address}
                phoneNo={fullInfo.phoneNo}
                weight={fullInfo.weight}
                dimensions={fullInfo.dimensions}
                guarantorName1={fullInfo.guarantorName1}
                guarantorAddress1={fullInfo.guarantorAddress1}
                guarantorPhone1={fullInfo.guarantorPhoneNo1}
                guarantorName2={fullInfo.guarantorName2}
                guarantorAddress2={fullInfo.guarantorAddress2}
                guarantorPhone2={fullInfo.guarantorPhoneNo2}
                setIsAgentRequest={props.setIsAgentRequest}
                setIsAgentManagement={props.setIsAgentManagement}
                setAgentList={props.setAgentList}
                caption={props.isAgentRequest ? "Agent's Request Details" : "Full Information"}
                okOption={props.isAgentRequest ? "Accept" : "Ok"}
                editOption={props.isAgentRequest ? "Reject" : "Edit"}
                isAgentRequest={props.isAgentRequest}
                isAgentManagement={props.isAgentManagement}
                compName={"AGENT"}
            />

        </>
    )
}