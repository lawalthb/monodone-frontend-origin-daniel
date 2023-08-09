import Image from "next/image";
import { Form } from "react-bootstrap";
import Media from "@/utils/media";
import styles from '@/styles/wallet.module.css'

export default function ReusableLinks(props) {
    const { mobile, tabletAndDesktop} = Media();

    return (
        <>
            {props.caption === "Transfer" ? (
                <>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            gap: '20px',
                            // cursor: "pointer",
                            padding: '9px 16px',
                        }}>
                        <div style={{
                            display: 'flex',
                            gap: "16px"
                        }}>
                            <Image
                                style={props.imgStyle}
                                src={props.imgSrc}
                                width={props.imgWidth}
                                height={props.imgHeight}
                                alt={props.alt}
                            />
                            <Form.Label style={props.linkState ? {
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                fontWeight: 600,
                                fontSize: '14px',
                                lineHeight: '21px',
                                color: '#FFFFFF',
                                // cursor: "pointer"
                            } : {
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                fontSize: '14px',
                                lineHeight: '21px',
                                color: '#FFFFFF',
                                // cursor: "pointer"
                            }}>
                                {props.caption}
                            </Form.Label>
                        </div>
                        <div style={{
                            display: 'flex',
                            gap: '10px'
                        }}>

                            {mobile ? (
                                <Image
                                    onClick={props.handleFn}
                                    style={{
                                        maxWidth: '100%',
                                        width: "12px",
                                        cursor: 'pointer',
                                        marginTop: "4px"
                                    }} src="/img/arrowup.png" width="12" height="9" alt="arrow" />
                            ) :
                                <Form.Label
                                    onClick={props.handleFn}
                                    style={{
                                        fontSize: '18px',
                                        color: "white",
                                        fontWeight: '500',
                                        marginTop: '-3px',
                                        cursor: 'pointer',
                                    }}>
                                    {">"}
                                </Form.Label>
                            }
                            {tabletAndDesktop && (
                                <>
                                    <div style={props.isTransferMenu ? {
                                        display: 'flex',
                                        position: "absolute",
                                        flexDirection: 'column',                                                                   
                                        zIndex: 100,
                                        background: 'white',
                                        paddingTop: '10px',
                                        marginLeft: '20px',
                                        borderRadius: '8px'
                                    } : {
                                        display: "none"
                                    }}>
                                        <Form.Label
                                            onClick={() => {
                                                props.setSendToYourCard(true)
                                                props.setIsTransferMenu(false)
                                            }}
                                            className={styles.transferLinks}
                                            style={{
                                                fontSize: '10px',
                                                color: "black",
                                                fontWeight: '500',                                                
                                                padding: "5px 20px 5px",
                                                cursor: 'pointer',                                            
                                            }}>
                                            To your card
                                        </Form.Label>
                                        <Form.Label
                                            onClick={() => {
                                                props.setSendMoneyModal(true)
                                                props.setIsTransferMenu(false)
                                            }}
                                            className={styles.transferLinks}
                                            style={{
                                                fontSize: '10px',
                                                color: "black",
                                                fontWeight: '500',                                                
                                                padding: "5px 20px 5px",
                                                cursor: 'pointer'
                                            }}>
                                            To another user
                                        </Form.Label>
                                        <Form.Label
                                            onClick={() => {
                                                props.setCashout(true)
                                                props.setIsTransferMenu(false)
                                            }}
                                            className={styles.transferLinks}
                                            style={{
                                                fontSize: '10px',
                                                color: "black",
                                                fontWeight: '500',                                                
                                                padding: "5px 20px 5px",
                                                cursor: 'pointer'
                                            }}>
                                            Cash out
                                        </Form.Label>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div
                        onClick={props.handleFn}
                        style={props.linkState ? {
                            display: 'flex',
                            background: "rgba(255, 255, 255, 0.2)",
                            padding: '9px 16px',
                            gap: '16px',
                            borderRadius: '6px'
                        } : {
                            display: 'flex',
                            gap: '20px',
                            cursor: "pointer",
                            padding: '9px 16px',
                        }}>
                        <Image
                            style={props.imgStyle}
                            src={props.imgSrc}
                            width={props.imgWidth}
                            height={props.imgHeight}
                            alt={props.alt}
                        />
                        <Form.Label style={props.linkState ? {
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            fontSize: '14px',
                            lineHeight: '21px',
                            color: '#FFFFFF',
                            cursor: "pointer"
                        } : {
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '14px',
                            lineHeight: '21px',
                            color: '#FFFFFF',
                            cursor: "pointer"
                        }}>
                            {props.caption}
                        </Form.Label>
                    </div>
                </>
            )}
        </>
    )
}