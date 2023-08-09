import Image from "next/image"
import { useRef, useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import GeneralModal from "../../customers/modal"

export default function CreateBlog(props) {
    const [fileName, setFileName] = useState("")
    const hiddenFileInput = useRef(null)

    const fileObj = []
    const fileArray = []

    const handleClick = (event) => {
        hiddenFileInput.current.click()
    }
    const handleFileChange = (event) => {
        fileObj.push(event.target.files)
        for (let i = 0; i < fileObj[0].length; i++) {
            fileArray.push(URL.createObjectURL(fileObj[0][i]))
        }
        props.setBlogData((prevState) => {
            const newState = {
                ...prevState,
                blogDocument: [...prevState.blogDocument, fileArray]
            }
            return newState
        })
        setFileName(event.target.files[0].name)
    }

    const handleOnChange = (event) => {
        props.setBlogData({
            ...props.blogData,
            blogMessage: event.target.value
        })
    }
    return (
        <>
            <GeneralModal
                size="md"
                show={props.createBlog}
                onHide={() => {
                    props.setCreateBlog(false)
                }}
                style={props.style}
            >
                <Modal.Body style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                }}>
                    <div
                        onClick={() => {
                            props.setCreateBlog(false)
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
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: "10px"
                    }}>
                        <Form.Label style={{
                            fontSize: '16px',
                            fontWeight: '600',
                            color: 'black',
                        }}>
                            Blog Upload
                        </Form.Label>
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: "10px"
                    }}>
                        <Form.Label style={{
                            fontSize: '11px',
                            fontWeight: '400',
                            color: 'black',
                        }}>
                            Select the document you want to upload
                        </Form.Label>
                    </div>
                    <Form.Label style={{
                        fontFamily: 'Poppins',
                        fontStyle: "normal",
                        color: "black",
                        fontSize: "12px",
                        marginTop: "10px",
                        fontWeight: "500"
                    }}>
                        Write a blog
                    </Form.Label>
                    <textarea rows={"4"} cols="100%"
                        name="blogMessage"
                        defaultValue={props.blogData.blogMessage}
                        onChange={handleOnChange}
                        style={{
                            border: "1px solid #E7E7E7",
                            borderRadius: '6px',
                            padding: '8px'
                        }} />
                    <Form.Label style={{
                        fontFamily: 'Poppins',
                        fontStyle: "normal",
                        color: "black",
                        fontSize: "12px",
                        marginTop: "20px",
                        fontWeight: "500"
                    }}>
                        Upload a photo
                    </Form.Label>
                    <div style={{
                        display: 'flex',
                        gap: '20px'
                    }}>
                        <Button
                            onClick={handleClick}
                            style={{
                                display: 'flex',
                                gap: '10px',
                                background: 'transparent',
                                border: "1px solid #7CC427",
                                padding: "2px 10px"
                            }} >
                            <Image style={{
                                marginTop: '6px'
                            }} src="/img/blogupload.png" width="10" height="10" alt="close" />
                            <Form.Label style={{
                                fontSize: '12px',
                                color: "#7CC427",
                                fontWeight: 500,
                                marginTop: '2px'
                            }}>
                                Choose file
                            </Form.Label>
                        </Button>
                        <input type="file" ref={hiddenFileInput} onChange={handleFileChange}
                            style={{
                                display: "none"
                            }} />
                        {fileName ? (
                            <Form.Label style={{
                                fontSize: '12px',
                                color: "#A6A6A6",
                                fontWeight: 500,
                                marginTop: '4px'
                            }}>
                                {fileName}
                            </Form.Label>
                        ) : (
                            <Form.Label style={{
                                fontSize: '12px',
                                color: "#A6A6A6",
                                fontWeight: 500,
                                marginTop: '4px'
                            }}>
                                No picture chosen
                            </Form.Label>
                        )}
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',
                        marginTop: "30px"
                    }}>
                        <Button
                            onClick={() => props.handleCreateBlogSuccess()}
                            style={{
                                background: "#00902F",
                                border: "none",
                                padding: "7px",
                                color: "white",
                                width: '80%',
                                fontSize: "10px"
                            }}>
                            Submit Blog
                        </Button>
                    </div>
                </Modal.Body>
            </GeneralModal>
        </>
    )
}