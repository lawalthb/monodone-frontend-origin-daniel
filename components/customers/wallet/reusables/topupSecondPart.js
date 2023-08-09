import Image from "next/image";
import { Button, Form } from "react-bootstrap"
import Media from "@/utils/media";

export default function TopupSecondPart(props) {
    const { mobile, tabletAndDesktop} = Media();

    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: "center",
                alignItems: 'center',
            }}>
                <input style={mobile ? {
                    border: "1px solid #D1D1D1",
                    padding: '15px',
                    width: '100%',
                    marginTop: "10px",
                    fontSize: '12px',
                    borderRadius: '5px',
                    height: '72px'
                } : {
                    border: "1px solid #D1D1D1",
                    padding: '15px',
                    width: '85%',
                    marginTop: "10px",
                    fontSize: '12px',
                    borderRadius: '5px',
                    height: '72px'
                }} type="tex" value="Mono agent" readOnly />
            </div>
            {props.noCash && (
                <>
                    <div style={mobile ? {
                        display: 'flex',
                        justifyContent: "flex-start",
                        alignItems: 'center',
                        width: '100%',
                        background: "rgba(242, 8, 8, 0.15)",
                        height: "40px",
                        gap: "10px",
                        margin: "20px auto 0px auto",
                        padding: "0px 10px"
                    } : {
                        display: 'flex',
                        justifyContent: "flex-start",
                        alignItems: 'center',
                        width: '85%',
                        background: "rgba(242, 8, 8, 0.15)",
                        height: "40px",
                        gap: "10px",
                        margin: "20px auto 0px auto",
                        padding: "0px 10px"
                    }}>
                        <Image src="/img/walletwarning.png" width="14" height="14" alt="close" />
                        <Form.Label style={{
                            fontSize: '10px',
                            color: "black",
                            fontWeight: '400',
                            marginTop: "10px",
                        }}>
                            Sorry! The agent rejected. No cash
                        </Form.Label>
                    </div>
                </>
            )}
            {props.waitingForConfirmation && (
                <>
                    <div style={mobile ? {
                        display: 'flex',
                        justifyContent: "flex-start",
                        alignItems: 'center',
                        width: '100%',
                        background: "rgba(124, 196, 39, 0.15)",
                        height: "40px",
                        gap: "10px",
                        margin: "20px auto 0px auto",
                        padding: "0px 10px"
                    } : {
                        display: 'flex',
                        justifyContent: "flex-start",
                        alignItems: 'center',
                        width: '85%',
                        background: "rgba(124, 196, 39, 0.15)",
                        height: "40px",
                        gap: "10px",
                        margin: "20px auto 0px auto",
                        padding: "0px 10px"
                    }}>
                        <Image src="/img/walletwarning.png" width="14" height="14" alt="close" />
                        <Form.Label style={{
                            fontSize: '10px',
                            color: "black",
                            fontWeight: '400',
                            marginTop: "10px",
                        }}>
                            Wait for confirmation by the agent
                        </Form.Label>
                    </div>
                </>
            )}
            {props.topupConfirmed && (
                <>
                    <div style={mobile ? {
                        display: 'flex',
                        justifyContent: "flex-start",
                        alignItems: 'center',
                        width: '100%',
                        background: "rgba(124, 196, 39, 0.15)",
                        height: "40px",
                        gap: "10px",
                        margin: "20px auto 0px auto",
                        padding: "0px 10px"
                    } : {
                        display: 'flex',
                        justifyContent: "flex-start",
                        alignItems: 'center',
                        width: '85%',
                        background: "rgba(124, 196, 39, 0.15)",
                        height: "40px",
                        gap: "10px",
                        margin: "20px auto 0px auto",
                        padding: "0px 10px"
                    }}>
                        <Image src="/img/confirmcamera.png" width="22" height="14" alt="close" />
                        <Form.Label style={{
                            fontSize: '10px',
                            color: "black",
                            fontWeight: '400',
                            marginTop: "10px",
                        }}>
                            Top up confirmed. Please contact the agent.
                        </Form.Label>
                    </div>
                </>
            )}
            <div style={{
                display: 'flex',
                justifyContent: "center",
                alignItems: 'center',
                marginTop: "30px",
                gap: '10px'
            }}>
                <Button
                    onClick={props.waitingForConfirmation ?
                            () => {
                                props.setTopupConfirmed(true)
                            }
                            : () => {
                                props.setWaitingForConfirmation(true)
                            }}
                    style={mobile ? {
                        display: 'flex',
                        justifyContent: "center",
                        alignItems: 'center',
                        width: '100%',
                        background: "#00902F",
                        border: 'none',
                        argin: '5px auto',
                        fontSize: '13px',
                        height: "40px"
                    } : {
                        display: 'flex',
                        justifyContent: "center",
                        alignItems: 'center',
                        width: '85%',
                        background: "#00902F",
                        border: 'none',
                        argin: '5px auto',
                        fontSize: '13px',
                        height: "40px"
                    }}>
                    TOP UP
                </Button>
            </div>
        </>
    )
}