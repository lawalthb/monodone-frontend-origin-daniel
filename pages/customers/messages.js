import Head from "next/head";
import Image from "next/image";
import { Form } from "react-bootstrap";
import MessagesComp from "../../components/customers/carClearing/loadDetails/messageDetails";
import styles from "../../components/customers/layout/customer.module.scss"

export default function Messages(props) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Messages</title>
                <meta name="Description" content="Drivers Services." />
                <link rel="manifest" href="manifest.webmanifest" />
            </Head>
            <MessagesComp>
                <>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: "100%",
                        padding: "0 10px"
                    }}>
                        <div style={{
                            width: "50%",
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <div style={{
                                width: "80%",
                                display: "flex",
                                justifyContent: 'center',
                                alignItems: "center",
                                margin: 'auto',
                                background: '#EDEBEB',
                                padding: '10px',
                                borderTopRightRadius: '6px',
                                borderBottomRightRadius: '6px',
                                borderTopLeftRadius: "6px"
                            }}>
                                <Form.Label
                                    style={{
                                        fontSize: "10px",
                                        color: '#151515'
                                    }}>
                                    Hello Kelvin, <br />
                                    This is Nancy, whom you are clearing her car.
                                </Form.Label>
                            </div>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}>
                                <Image
                                    src="/img/messenger.png"
                                    width="40"
                                    height="42"
                                    alt="messenger"
                                />
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <Form.Label>
                                    2.30pm
                                </Form.Label>
                                <Image
                                    src="/img/thick.png"
                                    width="12"
                                    height="12"
                                    alt="messenger"
                                />
                            </div>
                        </div>
                        <div style={{
                            width: "50%",
                            display: 'flex',
                            flexDirection: 'column',
                            marginLeft: '50%',
                        }}>
                            <div style={{
                                width: "80%",
                                display: "flex",
                                justifyContent: 'center',
                                alignItems: "center",
                                background: '#EDEBEB',
                                padding: '10px',
                                borderTopRightRadius: '6px',
                                borderBottomLeftRadius: '6px',
                                borderTopLeftRadius: "6px",
                                background: '#7CC427'
                            }}>
                                <Form.Label
                                    style={{
                                        fontSize: "10px",
                                        color: '#FFFFFF'
                                    }}>
                                    Hello Kelvin, <br />
                                    This is Nancy, whom you are clearing her car.
                                </Form.Label>
                            </div>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}>
                                <Image
                                    style={{
                                        marginTop: '7px'
                                    }}
                                    src="/img/thick.png"
                                    width="12"
                                    height="12"
                                    alt="messenger"
                                />
                                <Form.Label style={{
                                    marginTop: '7px'
                                }}>
                                    2.30pm
                                </Form.Label>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <Image
                                    src="/img/messenger.png"
                                    width="40"
                                    height="42"
                                    alt="messenger"
                                />
                                <div></div>
                            </div>
                        </div>
                        <div style={{
                            width: "50%",
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <div style={{
                                width: "80%",
                                display: "flex",
                                justifyContent: 'center',
                                alignItems: "center",
                                margin: 'auto',
                                background: '#EDEBEB',
                                padding: '10px',
                                borderTopRightRadius: '6px',
                                borderBottomRightRadius: '6px',
                                borderTopLeftRadius: "6px"
                            }}>
                                <Form.Label
                                    style={{
                                        fontSize: "10px",
                                        color: '#151515'
                                    }}>
                                    Hello Kelvin, <br />
                                    This is Nancy, whom you are clearing her car.
                                </Form.Label>
                            </div>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}>
                                <Image
                                    src="/img/messenger.png"
                                    width="40"
                                    height="42"
                                    alt="messenger"
                                />
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <Form.Label>
                                    2.30pm
                                </Form.Label>
                                <Image
                                    src="/img/thick.png"
                                    width="12"
                                    height="12"
                                    alt="messenger"
                                />
                            </div>
                        </div>
                        <div style={{
                            width: "50%",
                            display: 'flex',
                            flexDirection: 'column',
                            marginLeft: '50%',
                        }}>
                            <div style={{
                                width: "80%",
                                display: "flex",
                                justifyContent: 'center',
                                alignItems: "center",
                                background: '#EDEBEB',
                                padding: '10px',
                                borderTopRightRadius: '6px',
                                borderBottomLeftRadius: '6px',
                                borderTopLeftRadius: "6px",
                                background: '#7CC427'
                            }}>
                                <Form.Label
                                    style={{
                                        fontSize: "10px",
                                        color: '#FFFFFF'
                                    }}>
                                    Hello Kelvin, <br />
                                    This is Nancy, whom you are clearing her car.
                                </Form.Label>
                            </div>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}>
                                <Image
                                    style={{
                                        marginTop: '7px'
                                    }}
                                    src="/img/thick.png"
                                    width="12"
                                    height="12"
                                    alt="messenger"
                                />
                                <Form.Label style={{
                                    marginTop: '7px'
                                }}>
                                    2.30pm
                                </Form.Label>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <Image
                                    src="/img/messenger.png"
                                    width="40"
                                    height="42"
                                    alt="messenger"
                                />
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div>
                            <Image
                                src="/img/messenger.png"
                                width="40"
                                height="42"
                                alt="messenger"
                            />
                        </div>
                        <div style={{
                            width: "86px",
                            height: "32px",
                            display: "flex",
                            background: "#EDEBEB",
                            borderRadius: "12px",
                            marginLeft: '10px',
                            marginTop: "6px"
                        }}>
                            <div style={{
                                display: "flex",
                                margin: "auto",
                                width: "12px",
                                height: "12px",
                                borderRadius: "50%",
                                background: "#A6A6A6"
                            }}></div>
                            <div style={{
                                display: "flex",
                                margin: "auto",
                                width: "12px",
                                height: "12px",
                                borderRadius: "50%",
                                background: "#A6A6A6"
                            }}></div>
                            <div style={{
                                display: "flex",
                                margin: "auto",
                                width: "12px",
                                height: "12px",
                                borderRadius: "50%",
                                background: "#A6A6A6"
                            }}></div>
                        </div>
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "5px 12px",
                        width: '90%',
                        height: "65px",
                        background: "#E7E7E7",
                        margin: "40px 0px 40px 0px",
                        borderRadius: '4px'
                    }}>
                        <input
                            className={styles.inputMessage}
                            style={{
                                background: "transparent",
                                border: "none",
                                margin: "7px 0px 7px 20px"
                            }} type="text" placeholder="Type your message"
                        />
                        <div style={{
                            display: "flex",
                            marginLeft: "auto",
                            justifyContent: 'space-between'
                        }}>
                            <Image style={{
                                margin: "15px 25px 7px 0px",
                                cursor: 'pointer'
                            }} src="/img/emoji.png" width="20" height="20" alt='emoji' />
                            <Image style={{
                                margin: "15px 25px 7px 0px",
                                cursor: 'pointer'
                            }} src="/img/attach.png" width="20" height="20" alt='emoji' />
                            <div style={{
                                background: "#7CC427",
                                padding: "2px",
                                borderRadius: "50%",
                                width: "35px",
                                height: "35px",
                                margin: "10px 3px 0px 0px"
                            }}>
                                <Image style={{
                                    margin: "8px 25px 7px 5px",
                                    cursor: 'pointer'
                                }} src="/img/send.png" width="20" height="20" alt='emoji' />
                            </div>
                        </div>
                    </div>
                </>
            </MessagesComp>
        </>
    )
}