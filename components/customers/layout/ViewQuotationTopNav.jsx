import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import s from "./customer.module.scss";
import { Form } from "react-bootstrap";
import Media from "@/utils/media";

export default function ViewQuotationTopNav(props) {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const { mobile, tabletAndDesktop} = Media();
    return (
        <>
            {mobile && (
                <Container>
                    {mobile && 
                        <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            background: 'white',
                            }}>
                            <div>
                                <Image
                                    style={{
                                    margin: '12px 0px',
                                    marginLeft: '13px',
                                    marginTop: '17px',
                                    }}
                                    src="/img/logoicon.png"
                                    width="36"
                                    height="24"
                                    alt="message"
                                />
                            </div>
                            <div>
                                <Image
                                    style={{
                                        margin: '12px 0px',
                                        marginRight: '13px',
                                        marginTop: '17px',
                                    }}
                                    src="/img/driveronline.png"
                                    width="35"
                                    height="34"
                                    alt="message"
                                />
                                <Form.Label style={{
                                    fontSize: '14px',
                                    marginTop: '23px',
                                    color: 'black',
                                    marginRight: '10px',
                                    fontWeight: 500,
                                }}>
                                    Kelechi Agu
                                </Form.Label>
                                
                                <Image
                                    /* onClick={ () => props.handleNotification()} */
                                    style={{
                                        margin: '12px 0px',
                                        marginRight: '13px',
                                        marginTop: '23px',
                                    }}
                                    src="/img/notification.png"
                                    width="24"
                                    height="24"
                                    alt="message"
                                />
                                <Image style={{
                                    margin: '12px 0px',
                                    cursor: 'pointer',
                                    marginTop: '17px',
                                    marginRight: '13px',
                                }}
                                    src="/img/agentuimessage.png"
                                    width="30"
                                    height="26"
                                    alt="message"
                                />
                                <Image style={{
                                    margin: '12px 0px',
                                    cursor: 'pointer',
                                    marginTop: '17px',
                                    marginRight: "7px"
                                }}
                                    src="/img/bars.png"
                                    width="20"
                                    height="12"
                                    alt="message"
                                />
                            </div>
                        </div>
                        </>
                        }
                </Container>
            )}
            {tabletAndDesktop && (
                <Navbar
                    className={`shadow-sm bg-white ${s.navcomp}`}
                    sticky="top"
                >
                    <div className={`py-3 px-5 ${s.icon}`} id="icon">
                        <Image
                            src="/img/dangote-logo.png"
                            width="80"
                            height="40"
                            alt="logo"
                        />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            gap: '5px',
                            paddingRight: '50px',
                            width: '100%',
                            height: '72px',
                            background: 'white',
                            borderBottom: '1px solid rgba(231, 231, 231, 1)',
                        }}
                    >                     
                        <Image
                            style={{
                                margin: '12px 0px',
                                cursor: 'pointer',
                                marginTop: '17px',
                                marginRight: '13px',
                            }}
                            src="/img/agentuimessage.png"
                            width="39"
                            height="32"
                            alt="message"
                        />
                        <Image
                            /* onClick={ () => props.handleNotification()} */
                            style={{
                                margin: '12px 0px',
                                marginRight: '13px',
                                marginTop: '23px',
                                cursor: 'pointer'
                            }}
                            src="/img/notification.png"
                            width="20"
                            height="20"
                            alt="message"
                        />
                        <Image
                            style={{
                                margin: '12px 0px',
                                marginRight: '13px',
                                marginTop: '17px',
                            }}
                            src="/img/driveronline.png"
                            width="35"
                            height="34"
                            alt="message"
                        />
                        <Form.Label
                            style={{
                            fontSize: '14px',
                            marginTop: '23px',
                            color: 'black',
                            marginRight: '10px',
                            fontWeight: 500,
                            }}
                        >
                            Kelechi Agu
                        </Form.Label>
                        <Form.Label
                            style={{
                                fontSize: '16px',
                                marginTop: '23px',
                                color: 'black',
                                marginRight: '10px',
                            }}
                        >
                            {'|'}
                        </Form.Label>
                        <Form.Label
                            style={{
                                fontSize: '14px',
                                marginTop: '23px',
                                color: 'black',
                                marginRight: '10px',
                                fontWeight: 500,
                            }}
                        >
                            Admin
                        </Form.Label>
                    </div>
                </Navbar>
            )}
        </>
    )
}
