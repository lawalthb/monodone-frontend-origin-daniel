import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button, Form, Pagination, Stack } from "react-bootstrap";
import EditModal from "./common/editModal";
import CustomPagination from "./customPagination";

export default function AdminpanelDriverList(props) {
    const ref = useRef()
    const [vehicleTypes, setVehicleTypes] = useState([])
    const [vehicleType, setVehicleType] = useState("")

    const [editModal, setEditModal] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [address, setAddress] = useState("")
    const [vehicleTypeDriver, setVehicleTypeDriver] = useState("")
    const [vehicleTypesDriver, setVehicleTypesDriver] = useState([])
    const [driverId, setDriverId] = useState()

    function fetchData(id) {
        console.log('id', id)
        const data = props.adminAgentData[id]
        // console.log("the data", data)
        setFirstName(data.businessName.split(" ")[0])
        setLastName(data.businessName.split(" ")[1])
        setPhoneNumber(data.phoneNumber)
        setAddress(data.address)
        setVehicleType(data.vehicleType)

        const newVehicleTypes = []

        const allVehicleTypes = props.adminAgentData.map((dt) => dt.vehicleType)
        const vehicleTypeSet = new Set(allVehicleTypes)
        for (let item of vehicleTypeSet) {
            newVehicleTypes.push(item)
        }
        setVehicleTypesDriver(newVehicleTypes)
    }

    const onChangeFirstName = (event) => {
        setFirstName(event.target.value)
    }
    const onChangeLastName = (event) => {
        setLastName(event.target.value)
    }
    const onChangeAddress = (event) => {
        setAddress(event.target.value)
    }
    const onChangePhoneNumber = (event) => {
        setPhoneNumber(event.target.value)
    }
    const onChangeVehicleType = (event) => {
        setVehicleTypeDriver(event.target.value)
    }

    const handleEdit = () => {
        const data = props.adminAgentData[driverId]
        data.businessName = firstName + " " + lastName
        data.address = address
        data.phoneNumber = phoneNumber
        data.vehicleType = vehicleType

        props.adminAgentData.splice(driverId, 1, data)
        console.log("saved")
        setEditModal(false)
        props.handleDriverList()
    }

    const handleClearData = () => {
        setFirstName("")
        setLastName("")
        setAddress("")
        setPhoneNumber("")
        setVehicleType("")
    }


    useEffect(() => {
        function moderatedVehicleTypes() {
            const newData = []
            const vehicleTypes = props.adminAgentData.map((dt) => dt.vehicleType)
            const vehicleTypesSet = new Set(vehicleTypes)
            for (let item of vehicleTypesSet) {
                newData.push(item)
            }
            setVehicleTypes(newData)
        }
        moderatedVehicleTypes()
    }, [props.adminAgentData])
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: "space-between"
            }}>
                <Form.Label
                    style={{
                        color: "black",
                        fontWeight: "600",
                        fontSize: "18px",
                        fontFamily: 'Poppins',
                        fontStyle: "normal"
                    }}>
                    Drivers
                </Form.Label>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: "column",
                gap: "8px",
                marginTop: "20px"
            }}>
                <input style={{
                    background: "#FFFFFF",
                    padding: '9px 30px 10px',
                    borderRadius: "5px",
                    border: "1px solid #E7E7E7",
                    width: '40%',
                }} type="text" placeholder="search" />
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <div style={{
                        display: 'flex',
                        gap: "10px"
                    }}>
                        <input style={{
                            padding: '5px',
                            width: "120px",
                            border: "1px solid #E7E7E7",
                        }} type="text" placeholder="Date"
                            ref={ref}
                            onFocus={() => (ref.current.type = "date")}
                            onBlur={() => (ref.current.type = "text")}
                        />
                        <select style={{
                            width: '86px',
                            padding: '8px',
                            border: "1px solid #E7E7E7"
                        }}>
                            <option>City</option>
                        </select>
                        <select style={{
                            width: '120px',
                            padding: '8px',
                            border: "1px solid #E7E7E7"
                        }}
                            onChange={(event) => setVehicleType(event.target.value)}
                        >
                            <option value="">Vehicle Type</option>
                            {vehicleTypes.map((data, idx) => (
                                <option key={idx} value={data}>{data}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <select style={{
                            width: '86px',
                            padding: '8px',
                            border: "1px solid #E7E7E7"
                        }}>
                            <option>Alphabet</option>
                        </select>
                    </div>
                </div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                padding: "30px 20px",
                marginTop: "20px",
                width: "100%",
                background: 'white'
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: 'space-between',
                    width: '100%'
                }}>
                    <div style={{
                        width: '10.7%',
                        color: "#A6A6A6",
                        fontSize: '12px'
                    }}>
                        Name
                    </div>
                    <div style={{
                        width: '11.7%',
                        color: "#A6A6A6",
                        fontSize: '12px'
                    }}>
                        Date added
                    </div>
                    <div style={{
                        width: '12.7%',
                        color: "#A6A6A6",
                        fontSize: '12px'
                    }}>
                        Rate
                    </div>
                    <div style={{
                        width: '15%',
                        color: "#A6A6A6",
                        fontSize: '12px'
                    }}>
                        Address
                    </div>
                    <div style={{
                        width: '11.7%',
                        color: "#A6A6A6",
                        fontSize: '12px'
                    }}>
                        Phone number
                    </div>
                    <div style={{
                        width: '11.7%',
                        color: "#A6A6A6",
                        fontSize: '12px'
                    }}>
                        License
                    </div>
                    <div style={{
                        width: '9.7%',
                        color: "#A6A6A6",
                        fontSize: '12px'
                    }}>
                        Vehicle Type
                    </div>
                    <div style={{
                        width: '13.7%',
                        color: "#A6A6A6",
                        fontSize: '12px'
                    }}>
                        {"  "}
                    </div>
                </div>
                <hr />
                {props.rate.length > 0 ? props.adminAgentData.filter((data) => data.rate === props.rate)
                    .slice((parseInt(props.pageNumber) * 10) - 10, parseInt(props.pageNumber) * 10)
                    .map((data, index) => (
                        <>
                            <div
                                key={index}
                                style={{
                                    display: "flex",
                                    justifyContent: 'space-between',
                                    width: '100%'
                                }}>
                                <div style={{
                                    width: '9.7%',
                                    color: "#A6A6A6",
                                    fontSize: '12px',
                                    color: "black"
                                }}>
                                    {data.businessName}
                                </div>
                                <div style={{
                                    width: '11.7%',
                                    color: "#A6A6A6",
                                    fontSize: '12px',
                                    color: "black"
                                }}>
                                    {data.dateAdded}
                                </div>
                                <div style={{
                                    width: '13.7%',
                                    color: "#A6A6A6",
                                    fontSize: '12px',
                                    color: "black"
                                }}>
                                    {new Array(5).fill(
                                        <Image
                                            style={{
                                                width: "10px",
                                                maxWidth: "100%",
                                                marginLeft: '10px'
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
                                    {data.rate}
                                </div>
                                <div style={{
                                    width: '15%',
                                    color: "#A6A6A6",
                                    fontSize: '12px',
                                    color: "black"
                                }}>
                                    {data.address}
                                </div>
                                <div style={{
                                    width: '11.7%',
                                    color: "#A6A6A6",
                                    fontSize: '12px',
                                    color: "black"
                                }}>
                                    {data.phoneNumber}
                                </div>
                                <div style={{
                                    width: '11.7%',
                                    color: "#A6A6A6",
                                    fontSize: '12px',
                                    color: "black"
                                }}>
                                    {data.license}
                                </div>
                                <div style={{
                                    width: '9.7%',
                                    color: "#A6A6A6",
                                    fontSize: '12px',
                                    color: "black"
                                }}>
                                    {data.vehicleType}
                                </div>
                                <div style={{
                                    width: '13.7%',
                                    color: "#A6A6A6",
                                    fontSize: '12px'
                                }}>
                                    <Image
                                        style={{
                                            width: "19px",
                                            maxWidth: "100%",
                                            marginLeft: '10px',
                                            cursor: "pointer"
                                        }}
                                        src={data.action[0]}
                                        width="19"
                                        height="19"
                                        alt="badge"
                                    />
                                    <Image
                                        onClick={() => {
                                            setEditModal(true)
                                        }}
                                        style={{
                                            width: "19px",
                                            maxWidth: "100%",
                                            marginLeft: '10px',
                                            cursor: "pointer"
                                        }}
                                        src={data.action[1]}
                                        width="19"
                                        height="19"
                                        alt="badge"
                                    />
                                    <Image
                                        style={{
                                            width: "19px",
                                            maxWidth: "100%",
                                            marginLeft: '10px',
                                            cursor: "pointer"
                                        }}
                                        src={data.action[4]}
                                        width="19"
                                        height="19"
                                        alt="badge"
                                    />
                                    <Image
                                        style={{
                                            width: "19px",
                                            maxWidth: "100%",
                                            marginLeft: '10px',
                                            cursor: "pointer"
                                        }}
                                        src={data.action[2]}
                                        width="19"
                                        height="19"
                                        alt="badge"
                                    />
                                </div>
                            </div>
                            <hr style={{
                                marginTop: '-0.8px'
                            }} />
                        </>
                    )) :
                    props.date.length > 0 ? props.adminAgentData.filter((data) => data.dateAdded === props.date)
                        .slice((parseInt(props.pageNumber) * 10) - 10, parseInt(props.pageNumber) * 10)
                        .map((data, index) => (
                            <>
                                <div
                                    key={index}
                                    style={{
                                        display: "flex",
                                        justifyContent: 'space-between',
                                        width: '100%'
                                    }}>
                                    <div style={{
                                        width: '9.7%',
                                        color: "#A6A6A6",
                                        fontSize: '12px',
                                        color: "black"
                                    }}>
                                        {data.businessName}
                                    </div>
                                    <div style={{
                                        width: '11.7%',
                                        color: "#A6A6A6",
                                        fontSize: '12px',
                                        color: "black"
                                    }}>
                                        {data.dateAdded}
                                    </div>
                                    <div style={{
                                        width: '13.7%',
                                        color: "#A6A6A6",
                                        fontSize: '12px',
                                        color: "black"
                                    }}>
                                        {new Array(5).fill(
                                            <Image
                                                style={{
                                                    width: "10px",
                                                    maxWidth: "100%",
                                                    marginLeft: '10px'
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
                                        {data.rate}
                                    </div>
                                    <div style={{
                                        width: '15%',
                                        color: "#A6A6A6",
                                        fontSize: '12px',
                                        color: "black"
                                    }}>
                                        {data.address}
                                    </div>
                                    <div style={{
                                        width: '11.7%',
                                        color: "#A6A6A6",
                                        fontSize: '12px',
                                        color: "black"
                                    }}>
                                        {data.phoneNumber}
                                    </div>
                                    <div style={{
                                        width: '11.7%',
                                        color: "#A6A6A6",
                                        fontSize: '12px',
                                        color: "black"
                                    }}>
                                        {data.license}
                                    </div>
                                    <div style={{
                                        width: '9.7%',
                                        color: "#A6A6A6",
                                        fontSize: '12px',
                                        color: "black"
                                    }}>
                                        {data.vehicleType}
                                    </div>
                                    <div style={{
                                        width: '13.7%',
                                        color: "#A6A6A6",
                                        fontSize: '12px'
                                    }}>
                                        <Image
                                            style={{
                                                width: "19px",
                                                maxWidth: "100%",
                                                marginLeft: '10px',
                                                cursor: "pointer"
                                            }}
                                            src={data.action[0]}
                                            width="19"
                                            height="19"
                                            alt="badge"
                                        />
                                        <Image
                                            onClick={() => {
                                                setEditModal(true)
                                            }}
                                            style={{
                                                width: "19px",
                                                maxWidth: "100%",
                                                marginLeft: '10px',
                                                cursor: "pointer"
                                            }}
                                            src={data.action[1]}
                                            width="19"
                                            height="19"
                                            alt="badge"
                                        />
                                        <Image
                                            style={{
                                                width: "19px",
                                                maxWidth: "100%",
                                                marginLeft: '10px',
                                                cursor: "pointer"
                                            }}
                                            src={data.action[4]}
                                            width="19"
                                            height="19"
                                            alt="badge"
                                        />
                                        <Image
                                            style={{
                                                width: "19px",
                                                maxWidth: "100%",
                                                marginLeft: '10px',
                                                cursor: "pointer"
                                            }}
                                            src={data.action[2]}
                                            width="19"
                                            height="19"
                                            alt="badge"
                                        />
                                    </div>
                                </div>
                                <hr style={{
                                    marginTop: '-0.8px'
                                }} />
                            </>
                        )) :
                        props.adminAgentData
                            .slice((parseInt(props.pageNumber) * 10) - 10, parseInt(props.pageNumber) * 10)
                            .map((data, index) => (
                                <>
                                    <div
                                        key={index}
                                        style={{
                                            display: "flex",
                                            justifyContent: 'space-between',
                                            width: '100%'
                                        }}>
                                        <div style={{
                                            width: '9.7%',
                                            color: "#A6A6A6",
                                            fontSize: '12px',
                                            color: "black"
                                        }}>
                                            {data.businessName}
                                        </div>
                                        <div style={{
                                            width: '11.7%',
                                            color: "#A6A6A6",
                                            fontSize: '12px',
                                            color: "black"
                                        }}>
                                            {data.dateAdded}
                                        </div>
                                        <div style={{
                                            width: '13.7%',
                                            color: "#A6A6A6",
                                            fontSize: '12px',
                                            color: "black"
                                        }}>
                                            {new Array(5).fill(
                                                <Image
                                                    style={{
                                                        width: "10px",
                                                        maxWidth: "100%",
                                                        marginLeft: '10px'
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
                                            {data.rate}
                                        </div>
                                        <div style={{
                                            width: '15%',
                                            color: "#A6A6A6",
                                            fontSize: '12px',
                                            color: "black"
                                        }}>
                                            {data.address}
                                        </div>
                                        <div style={{
                                            width: '11.7%',
                                            color: "#A6A6A6",
                                            fontSize: '12px',
                                            color: "black"
                                        }}>
                                            {data.phoneNumber}
                                        </div>
                                        <div style={{
                                            width: '11.7%',
                                            color: "#A6A6A6",
                                            fontSize: '12px',
                                            color: "black"
                                        }}>
                                            {data.license}
                                        </div>
                                        <div style={{
                                            width: '9.7%',
                                            color: "#A6A6A6",
                                            fontSize: '12px',
                                            color: "black"
                                        }}>
                                            {data.vehicleType}
                                        </div>
                                        <div style={{
                                            width: '13.7%',
                                            color: "#A6A6A6",
                                            fontSize: '12px'
                                        }}>
                                            <Image
                                                style={{
                                                    width: "19px",
                                                    maxWidth: "100%",
                                                    marginLeft: '10px',
                                                    cursor: "pointer"
                                                }}
                                                src={data.action[0]}
                                                width="19"
                                                height="19"
                                                alt="badge"
                                            />
                                            <Image
                                                onClick={() => {
                                                    setEditModal(true)
                                                    fetchData(index)
                                                    setDriverId(index)
                                                }}
                                                style={{
                                                    width: "19px",
                                                    maxWidth: "100%",
                                                    marginLeft: '10px',
                                                    cursor: "pointer"
                                                }}
                                                src={data.action[1]}
                                                width="19"
                                                height="19"
                                                alt="badge"
                                            />
                                            <Image
                                                style={{
                                                    width: "19px",
                                                    maxWidth: "100%",
                                                    marginLeft: '10px',
                                                    cursor: "pointer"
                                                }}
                                                src={data.action[4]}
                                                width="19"
                                                height="19"
                                                alt="badge"
                                            />
                                            <Image
                                                style={{
                                                    width: "19px",
                                                    maxWidth: "100%",
                                                    marginLeft: '10px',
                                                    cursor: "pointer"
                                                }}
                                                src={data.action[2]}
                                                width="19"
                                                height="19"
                                                alt="badge"
                                            />
                                        </div>
                                    </div>
                                    <hr style={{
                                        marginTop: '-0.8px'
                                    }} />
                                </>
                            ))}
                <CustomPagination
                    adminAgentData={props.adminAgentData}
                    setPageNumbers={props.setPageNumbers}
                    activePagenumber={props.activePagenumber}
                    pageNumbers={props.pageNumbers}
                    setPageNumber={props.setPageNumber}
                    setActivePagenumber={props.setActivePagenumber}
                />
            </div>
            <EditModal
                editModal={editModal}
                setEditModal={setEditModal}
                isDriversManagement={props.isDriversManagement}
                caption={"Edit Driver"}
                firstName={firstName}
                onChangeFirstName={onChangeFirstName}
                lastName={lastName}
                onChangeLastName={onChangeLastName}
                address={address}
                onChangeAddress={onChangeAddress}
                phoneNumber={phoneNumber}
                onChangePhoneNumber={onChangePhoneNumber}
                onChangeVehicleType={onChangeVehicleType}
                vehicleType={vehicleTypeDriver.length > 0 ? vehicleTypeDriver : "Select"}
                vehicleTypes={vehicleTypesDriver}
                handleEdit={handleEdit}
                handleClearData={handleClearData}
            />
        </>
    )
}