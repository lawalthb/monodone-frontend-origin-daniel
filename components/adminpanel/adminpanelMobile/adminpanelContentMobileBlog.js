import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import MobileHeader from "./commonComp/header";
import Image from "next/image";
import FilteringComp from "./commonComp/filteringComp";
import AdminpanelMobileRecords from "./commonComp/adminpanelMobileRecords";
import CreateBlog from "../common/createBlog";
import CreateBlogSuccess from "../common/createBlogSuccess";
import BlogModal from "../common/blogModal";
import MobilePagination from "./commonComp/mobilePagination";

const initialBlogState = {
    blogMessage: "",
    blogDocument: []
}

export default function AdminpanelContentMobileBlog(props) {
    const [isBlogRequest, setIsBlogRequest] = useState(false)
    const [dates, setDates] = useState([])
    const [date, setDate] = useState("")
    const [rates, setRates] = useState([])
    const [rate, setRate] = useState("")
    const [vehicleTypes, setVehicleTypes] = useState([])
    const [vehicleType, setVehicleType] = useState("")
    const [createBlog, setCreateBlog] = useState(false)
    const [blogData, setBlogData] = useState(initialBlogState)
    const [createBlogSuccess, setCreateBlogSuccess] = useState(false)
    const [blogModal, setBlogModal] = useState(false)
    const [multiplesTen, setMultiplesTen] = useState([])
    const [multipleTen, setMultipleTen] = useState("")

    const handleCreateBlogSuccess = () => {
        setCreateBlogSuccess(true)
        setCreateBlog(false)
    }

    const handleIsBlogRequest = () => {
        setIsBlogRequest(true)
    }

    useEffect(() => {
        setIsBlogRequest(true)
    }, [setIsBlogRequest])

    return (
        <>
            <MobileHeader
                caption={"Blog"}
            />
            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <div style={{
                    display: 'flex',
                    gap: '15px'
                }}>
                    <Form.Label
                        onClick={handleIsBlogRequest}
                        style={isBlogRequest ? {
                            color: "#00902F",
                            fontWeight: "500",
                            fontSize: "12px",
                            marginTop: '20px',
                            borderBottom: "2px solid #00902F",
                            padding: "0px 0px 10px 0px"
                        } : {
                            color: "#A6A6A6",
                            fontWeight: "500",
                            fontSize: "12px",
                            marginTop: '20px'
                        }}>
                        Blog Request
                    </Form.Label>
                    <Image
                        style={{
                            width: "18px",
                            maxWidth: "100%",
                            marginTop: '20px',
                            marginLeft: '-10px'
                        }}
                        src="/img/badgeagent.png"
                        width="18"
                        height="18"
                        alt="badge"
                    />
                </div>
                <Image
                    onClick={() => setCreateBlog(true)}
                    style={{
                        width: "24px",
                        maxWidth: "100%",
                        cursor: 'pointer',
                        marginTop: "20px"
                    }}
                    src="/img/btnadd.png"
                    width="24"
                    height="24"
                    alt="badge"
                />
            </div>
            <FilteringComp
                adminAgentData={props.adminAgentData}
                setDates={setDates}
                setDate={setDate}
                dates={dates}
                rates={rates}
                setRates={setRates}
                setRate={setRate}
                vehicleTypes={vehicleTypes}
                setVehicleTypes={setVehicleTypes}
                setVehicleType={setVehicleType}
                isDrivers={props.isDrivers}
            />
            {date ? (
                props.adminAgentData.filter((data) => data.dateAdded === date)
                    .slice(parseInt(multipleTen - 10), parseInt(multipleTen))
                    .map((data, idx) => (
                        <>
                            <div key={idx}>
                                <AdminpanelMobileRecords
                                    data={data}
                                    idx={idx}
                                    isBlogRequest={isBlogRequest}
                                    date={date}
                                    firstHeader={"Date Posted"}
                                    secondHeader="Posted by"
                                    thirdHeader="Status"
                                    headerActions="Actions"
                                    setBlogModal={setBlogModal}
                                />
                            </div>
                        </>
                    ))
            ) : props.adminAgentData
                .slice(parseInt(multipleTen - 10), parseInt(multipleTen))
                .map((data, idx) => (
                    <>
                        <div key={idx}>
                            <AdminpanelMobileRecords
                                data={data}
                                idx={idx}
                                isBlogRequest={isBlogRequest}
                                date={date}
                                firstHeader={"Date posted"}
                                secondHeader="Posted by"
                                thirdHeader="Status"
                                headerActions="Actions"
                                setBlogModal={setBlogModal}
                            />
                        </div>
                    </>
                ))}
            <MobilePagination
                adminAgentData={props.adminAgentData}
                multiplesTen={multiplesTen}
                setMultiplesTen={setMultiplesTen}
                setMultipleTen={setMultipleTen}
                multipleTen={multipleTen}
            />
            <CreateBlog
                createBlog={createBlog}
                setCreateBlog={setCreateBlog}
                blogData={blogData}
                setBlogData={setBlogData}
                handleCreateBlogSuccess={handleCreateBlogSuccess}
            />
            <CreateBlogSuccess
                createBlogSuccess={createBlogSuccess}
                setCreateBlogSuccess={setCreateBlogSuccess}
            />
            <BlogModal
                blogModal={blogModal}
                setBlogModal={setBlogModal}
                blogData={blogData}
            />
        </>
    )
}