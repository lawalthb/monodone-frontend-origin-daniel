import Image from "next/image";
import { useRef, useState } from "react";
import { Form, OverlayTrigger, Popover } from "react-bootstrap";
import BlogModal from "../../common/blogModal";
import CreateBlog from "../../common/createBlog";
import CreateBlogSuccess from "../../common/createBlogSuccess";
import CustomPagination from "../../customPagination";

export default function BlogDetails(props) {
    const target = useRef(null)
    const [createBlogSuccess, setCreateBlogSuccess] = useState(false)
    const [blogModal, setBlogModal] = useState(false)

    const handleCreateBlogSuccess = () => {
        setCreateBlogSuccess(true)
        props.setCreateBlog(false)
    }

    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: "100%",
            }}>
                <div style={{
                    width: '20%',
                    color: "#A6A6A6",
                    fontSize: '12px'
                }}>
                    Date posted
                </div>
                <div style={{
                    width: '40%',
                    color: "#A6A6A6",
                    fontSize: '12px'
                }}>
                    Posted by
                </div>
                <div style={{
                    width: '20%',
                    color: "#A6A6A6",
                    fontSize: '12px'
                }}>
                    status
                </div>
                <div style={{
                    width: '20%',
                    color: "#A6A6A6",
                    fontSize: '12px'
                }}>
                    {" "}
                </div>
            </div>
            <hr />
            {props.date?.length > 0 ? props.adminAgentData.filter((data) => data.dateAdded === props.date)
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
                                width: '20%',
                                color: "black",
                                fontSize: '12px',
                                color: "black"
                            }}>
                                {data.dateAdded}
                            </div>
                            <div style={{
                                width: '40%',
                                color: "#A6A6A6",
                                fontSize: '12px',
                                color: "black"
                            }}>
                                {data.businessName}
                            </div>
                            <div style={{
                                width: '20%',
                                color: "#A6A6A6",
                                fontSize: '12px',
                                color: "black"
                            }}>
                                <Form.Label style={data.status === "Waiting" ? {
                                    fontSize: "12px",
                                    fontWeight: '500',
                                    width: 'fit-content',
                                    color: "#FFC700",
                                    background: "rgba(255, 199, 0, 0.2)",
                                    borderRadius: '100px',
                                    padding: '2px 10px'
                                } : data.status === "Confirmed" ? {
                                    fontSize: "12px",
                                    fontWeight: '500',
                                    width: 'fit-content',
                                    color: "#7CC427",
                                    background: "rgba(124, 196, 39, 0.2)",
                                    borderRadius: '100px',
                                    padding: '2px 10px'
                                } : data.status === "Rejected" ? {
                                    fontSize: "12px",
                                    fontWeight: '500',
                                    width: 'fit-content',
                                    color: "#F20808",
                                    background: "rgba(242, 8, 8, 0.2)",
                                    borderRadius: '100px',
                                    padding: '2px 10px'
                                } : {
                                }}>
                                    {data.status}
                                </Form.Label>
                            </div>
                            <div style={{
                                width: '20%',
                                color: "#A6A6A6",
                                fontSize: '12px'
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
                                                transition: "0.3s"
                                            }}>
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        gap: '10px',
                                                        width: "100%"
                                                    }}>
                                                    <Form.Label style={{
                                                        fontSize: "12px",
                                                        color: "#151515"
                                                    }}>
                                                        View driver&apos;s request
                                                    </Form.Label>
                                                </div>
                                            </Popover.Body>
                                        </Popover>
                                    }
                                >
                                    <span ref={target}>
                                        <Image
                                            style={{
                                                width: "19px",
                                                maxWidth: "100%",
                                                marginLeft: '10px'
                                            }}
                                            src={data.action[0]}
                                            width="19"
                                            height="19"
                                            alt="badge"
                                        />
                                    </span>
                                </OverlayTrigger>
                            </div>
                        </div>
                        <hr style={{
                            marginTop: '-0.8px'
                        }} />
                    </>
                )) : props.adminAgentData
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
                                    width: '20%',
                                    color: "black",
                                    fontSize: '12px',
                                    color: "black"
                                }}>
                                    {data.dateAdded}
                                </div>
                                <div style={{
                                    width: '40%',
                                    color: "#A6A6A6",
                                    fontSize: '12px',
                                    color: "black"
                                }}>
                                    {data.businessName}
                                </div>
                                <div style={{
                                    width: '20%',
                                    color: "#A6A6A6",
                                    fontSize: '12px',
                                    color: "black"
                                }}>
                                    <Form.Label style={data.status === "Waiting" ? {
                                        fontSize: "12px",
                                        fontWeight: '500',
                                        width: 'fit-content',
                                        color: "#FFC700",
                                        background: "rgba(255, 199, 0, 0.2)",
                                        borderRadius: '100px',
                                        padding: '2px 10px'
                                    } : data.status === "Confirmed" ? {
                                        fontSize: "12px",
                                        fontWeight: '500',
                                        width: 'fit-content',
                                        color: "#7CC427",
                                        background: "rgba(124, 196, 39, 0.2)",
                                        borderRadius: '100px',
                                        padding: '2px 10px'
                                    } : data.status === "Rejected" ? {
                                        fontSize: "12px",
                                        fontWeight: '500',
                                        width: 'fit-content',
                                        color: "#F20808",
                                        background: "rgba(242, 8, 8, 0.2)",
                                        borderRadius: '100px',
                                        padding: '2px 10px'
                                    } : {
                                    }}>
                                        {data.status}
                                    </Form.Label>
                                </div>
                                <div style={{
                                    width: '20%',
                                    color: "#A6A6A6",
                                    fontSize: '12px',
                                    display: 'flex',
                                    justifyContent: "flex-end"
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
                                                    transition: "0.3s"
                                                }}>
                                                    <div
                                                        style={{
                                                            display: 'flex',
                                                            gap: '10px',
                                                            width: "100%"
                                                        }}>
                                                        <Form.Label
                                                            onClick={() => setBlogModal(true)}
                                                            style={{
                                                                fontSize: "12px",
                                                                color: "#151515",
                                                                cursor: "pointer"
                                                            }}>
                                                            View driver&apos;s request
                                                        </Form.Label>
                                                    </div>
                                                </Popover.Body>
                                            </Popover>
                                        }
                                    >
                                        <span ref={target}>
                                            <Image
                                                style={{
                                                    width: "19px",
                                                    maxWidth: "100%",
                                                    marginLeft: '10px',
                                                    cursor: 'pointer'
                                                }}
                                                src={data.action[0]}
                                                width="19"
                                                height="19"
                                                alt="badge"
                                            />
                                        </span>
                                    </OverlayTrigger>
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
            <CreateBlog
                style={{ marginLeft: '5%' }}
                createBlog={props.createBlog}
                setCreateBlog={props.setCreateBlog}
                blogData={props.blogData}
                setBlogData={props.setBlogData}
                handleCreateBlogSuccess={handleCreateBlogSuccess}
            />
            <CreateBlogSuccess
                style={{
                    marginTop: "5%",
                    marginLeft: "5%"
                }}
                createBlogSuccess={createBlogSuccess}
                setCreateBlogSuccess={setCreateBlogSuccess}
            />
            <BlogModal
                style={{
                    marginTop: "5%",
                    marginLeft: "5%"
                }}
                blogModal={blogModal}
                setBlogModal={setBlogModal}
                blogData={props.blogData}
            />
        </>
    )
}