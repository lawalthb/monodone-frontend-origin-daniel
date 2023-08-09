import Head from "next/head";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import ClearingContentMobile from "../../components/clearingforwarding/clearingContentMobile";
import ClearingFowardingDetails from "../../components/clearingforwarding/clearingForwardingDetails";
import ClearingForwardingSidebar from "../../components/clearingforwarding/clearingForwardingSidebar";
import ClearingUploadDoc from "../../components/clearingforwarding/clearingUploadDoc";
import ClearingUploadSuccess from "../../components/clearingforwarding/clearingUploadSuccess";
import DeleteClearing from "../../components/clearingforwarding/deleteClearing";
import UpdateClearingStatus from "../../components/clearingforwarding/updateClearingStatus";
import ClearingAndForwardingLayout from "../../components/clearingforwarding/layout/ClearingForwardingLayout";
import Media from "@/utils/media";
import Link from "next/link";

const initialUploadData = {
    uploadDoc: "C-waybill",
    containerImage: ""
}

export default function ClearingAndForwarding({ clearingData }) {
    const { mobile, tabletAndDesktop} = Media();

    const [clearingForwardingData, setClearingForwardingData] = useState([])
    const [isBroadcast, setIsBroadcast] = useState(false)
    const [isOrder, setIsOrder] = useState(false)
    const [isWallet, setIsWallet] = useState(false)
    const [isSettings, setIsSettings] = useState(false)
    const [clearingUploadDoc, setClearingUploadDoc] = useState(false)
    const [uploadData, setUploadData] = useState(initialUploadData)
    const [clearingUploadSuccess, setClearingUploadSuccess] = useState(false)
    const [updateClearingStatus, setUpdateClearingStatus] = useState(false)
    const [updateStatus, setUpdateStatus] = useState("I am currently at Ore, the car will be at Enugu by 7:30pm")
    const [deleteClearing, setDeleteClearing] = useState(false)
    const [showFlterContent, setShowFlterContent] = useState(false)

    const ref = useRef()
    useEffect(() => {
        const handler = (event) => {
            if (showFlterContent && ref.current && !ref.current.contains(event.target)) {
                setShowFlterContent(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler);
        };
    }, [showFlterContent, clearingData]);

    const handleDeleteLoad = () => {
        setDeleteClearing(true)
    }

    const handleUpdateClearingStatus = () => {
        setClearingUploadSuccess(true)
        setUpdateClearingStatus(false)
    }

    const handleUpdateStatus = () => {
        setUpdateClearingStatus(true)
    }

    const handleUploadSuccessModal = () => {
        setClearingUploadSuccess(true)
        setClearingUploadDoc(false)
        setDeleteClearing(false)
    }

    const handleUploadDocument = () => {
        setClearingUploadDoc(true)
    }

    const handleIsBroadcast = () => {
        setIsBroadcast(true)
        setIsOrder(false)
        setIsWallet(false)
        setIsSettings(false)
    }
    const handleIsOrder = () => {
        setIsOrder(true)
        setIsBroadcast(false)
        setIsWallet(false)
        setIsSettings(false)
    }
    const handleIsWallet = () => {
        setIsWallet(true)
        setIsBroadcast(false)
        setIsOrder(false)
        setIsSettings(false)
    }
    const handleIsSettings = () => {
        setIsSettings(true)
        setIsBroadcast(false)
        setIsOrder(false)
        setIsWallet(false)
    }


    useEffect(() => {
        setClearingForwardingData(clearingData)
    }, [])

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Clearing and Forwarding</title>
                <meta name="Description" content="Drivers Services." />
                <link rel="manifest" href="manifest.webmanifest" />
            </Head>
            <ClearingAndForwardingLayout>
                {mobile && (
                    <ClearingContentMobile
                        handleUpdateStatus={handleUpdateStatus}
                        handleUploadDocument={handleUploadDocument}
                        handleDeleteLoad={handleDeleteLoad}
                    />
                )}
                {tabletAndDesktop && (
                    <>
                        <div style={{
                            width: "250px",
                            background: "linear-gradient(90deg, #00902F 0%, #7CC427 99.69%)",
                            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.06)",
                            position: "absolute",
                            left: "0px",
                            top: "72px",
                            padding: "20px",
                            height: "1171px"
                        }}>
                            <ClearingForwardingSidebar
                                isBroadcast={isBroadcast}
                                setIsBroadcast={setIsBroadcast}
                                isOrder={isOrder}
                                setIsOrder={setIsOrder}
                                isWallet={isWallet}
                                setIsWallet={setIsWallet}
                                isSettings={isSettings}
                                setIsSettings={setIsSettings}
                                handleIsBroadcast={handleIsBroadcast}
                                handleIsOrder={handleIsOrder}
                                handleIsWallet={handleIsWallet}
                                handleIsSettings={handleIsSettings}
                            />
                        </div>
                        <div style={{
                            padding: '20px 10px',
                            display: "flex",
                            flexDirection: 'column',
                        }}>
                            <div
                                ref={ref}
                                style={{
                                    display: "flex",
                                    position: "absolute",
                                    right: "20px",
                                    display: "flex"
                                }}>
                                <div
                                    style={showFlterContent ? {
                                        display: "block",
                                        position: "absolute",
                                        top: '30px',
                                        right: "110px",
                                        boxShadow: "8px 8px 32px rgba(191, 186, 186, 0.1)",
                                        width: '218px',
                                        height: "344px",
                                        background: 'white',
                                        zIndex: 100
                                    } : {
                                        display: "none",
                                    }}>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        width: "100%",
                                        padding: "20px",
                                    }}>
                                        <Form.Label style={{
                                            fontWeight: '500',
                                            color: 'rgba(21, 21, 21, 0.8)'
                                        }}>
                                            Sender&apos;s name
                                        </Form.Label>
                                        <div style={{
                                            height: '40px',
                                            width: '176px',
                                            padding: "7px 12px",
                                            border: "1px solid #E7E7E7",
                                            borderRadius: '4px'
                                        }}>

                                            <Form.Label style={{
                                                fontWeight: '500',
                                                color: 'rgba(21, 21, 21, 0.5)'
                                            }}>
                                                Emeka Okafor
                                            </Form.Label>
                                        </div>
                                        <Form.Label style={{
                                            fontWeight: '500',
                                            color: 'rgba(21, 21, 21, 0.8)',
                                            marginTop: "10px"
                                        }}>
                                            Load type
                                        </Form.Label>
                                        <select style={{
                                            padding: '7px',
                                            height: "40px",
                                            color: '#808080',
                                            fontWeight: '500',
                                            fontSize: '12px',
                                            borderRadius: '4px',
                                            border: "1px solid #E7E7E7"
                                        }}>
                                            <option>Container shipment</option>
                                        </select>
                                        <Form.Label style={{
                                            fontWeight: '500',
                                            color: 'rgba(21, 21, 21, 0.8)',
                                            marginTop: "10px"
                                        }}>
                                            Departure country
                                        </Form.Label>
                                        <select style={{
                                            padding: '7px',
                                            height: "40px",
                                            color: '#808080',
                                            fontWeight: '500',
                                            fontSize: '12px',
                                            borderRadius: '4px',
                                            border: "1px solid #E7E7E7"
                                        }}>
                                            <option>USA</option>
                                        </select>
                                        <Form.Label style={{
                                            fontWeight: '500',
                                            color: 'rgba(21, 21, 21, 0.8)',
                                            marginTop: "10px"
                                        }}>
                                            Destination country
                                        </Form.Label>
                                        <select style={{
                                            padding: '7px',
                                            height: "40px",
                                            color: '#808080',
                                            fontWeight: '500',
                                            fontSize: '12px',
                                            borderRadius: '4px',
                                            border: "1px solid #E7E7E7"
                                        }}>
                                            <option>Ghana</option>
                                        </select>
                                    </div>
                                </div>
                                <Button
                                    onClick={() => setShowFlterContent((prevState) => !prevState)}
                                    style={{
                                        background: "transparent",
                                        border: "1px solid #E7E7E7",
                                        padding: "2px 10px",

                                    }}>
                                    <Image src="/img/filter1.png" width="14" height='16' alt="shopping" />
                                    <Form.Label style={{
                                        color: 'black',
                                        fontSize: '13px',
                                        marginLeft: "8px"
                                    }}>Filter here</Form.Label>
                                </Button>
                                <Button style={{
                                    background: "transparent",
                                    border: "1px solid gray",
                                    padding: "2px 10px",
                                    marginLeft: "10px",
                                    border: 'none'
                                }}>
                                    <Image src="/img/cart.png" width="20" height='18' alt="shopping" />
                                    <Form.Label style={{
                                        color: 'black',
                                        fontSize: '13px',
                                        marginLeft: "8px",
                                        color: "#00902F"
                                    }}><Link style={{ textDecoration: 'none', color: 'inherit'}} href='/loadboard' target="_blank">View Loadboard</Link></Form.Label>
                                </Button>
                            </div>
                            <div style={{
                                boxSizing: "border-box",
                                position: "absolute",
                                width: "1040px",
                                height: "952px",
                                left: "290px",
                                top: "168px",
                                background: "#FFFFFF",
                                border: "1px solid #E7E7E7",
                                padding: '10px'
                            }}>
                                <ClearingFowardingDetails
                                    clearingForwardingData={clearingForwardingData}
                                    setClearingForwardingData={setClearingForwardingData}
                                    isBroadcast={isBroadcast}
                                    isOrder={isOrder}
                                    isWallet={isWallet}
                                    isSettings={isSettings}
                                    handleUploadDocument={handleUploadDocument}
                                    handleUpdateStatus={handleUpdateStatus}
                                    handleDeleteLoad={handleDeleteLoad}
                                />
                            </div>
                        </div>
                    </>
                )}
            </ClearingAndForwardingLayout>
            <ClearingUploadDoc
                clearingUploadDoc={clearingUploadDoc}
                setClearingUploadDoc={setClearingUploadDoc}
                uploadData={uploadData}
                setUploadData={setUploadData}
                handleUploadSuccessModal={handleUploadSuccessModal}
            />
            <ClearingUploadSuccess
                clearingUploadSuccess={clearingUploadSuccess}
                setClearingUploadSuccess={setClearingUploadSuccess}
                uploadSuccessMessage={`The ${uploadData.uploadDoc} document has been uploaded successfully`}
            />
            <UpdateClearingStatus
                updateClearingStatus={updateClearingStatus}
                setUpdateClearingStatus={setUpdateClearingStatus}
                updateStatus={updateStatus}
                setUpdateStatus={setUpdateStatus}
                handleUpdateClearingStatus={handleUpdateClearingStatus}
            />
            <DeleteClearing
                deleteClearing={deleteClearing}
                setDeleteClearing={setDeleteClearing}
                handleUploadSuccessModal={handleUploadSuccessModal}
            />
        </>
    )
}

export async function getServerSideProps() {
    const { clearing_data } = await import("../../components/clearingforwarding/data/data.json");

    return {
        props: {
            clearingData: clearing_data,
        },
    };
}