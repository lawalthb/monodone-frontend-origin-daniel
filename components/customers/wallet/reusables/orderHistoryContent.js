import Media from "@/utils/media";
import Image from "next/image";
import { Form } from "react-bootstrap";

export default function OrderHistoryContent(props) {
    const { mobile, tabletAndDesktop} = Media();

    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <div style={{
                    display: 'flex',
                    gap: '5px'
                }}>
                    {mobile ? (
                        <Image
                            style={{
                                width: "20px",
                                maxWidth: "100%",
                                marginTop: '7px'
                            }}
                            src="/img/walletdocument.png"
                            width="20"
                            height="20"
                            alt="document"
                        />
                    ) : (
                        <Image
                            style={{
                                width: "40px",
                                maxWidth: "100%"
                            }}
                            src="/img/walletdocument.png"
                            width="40"
                            height="40"
                            alt="document"
                        />
                    )}
                    <Form.Label style={mobile ? {
                        fontWeight: "400",
                        fontSize: "9px",
                        color: "black",
                        fontWeight: '400',
                        marginTop: '10px'
                    } : {
                        fontWeight: "400",
                        fontSize: "12px",
                        color: "black",
                        fontWeight: '400',
                        marginTop: '10px'
                    }}>
                        Document
                    </Form.Label>
                </div>
                <Form.Label style={mobile ? {
                    fontWeight: "400",
                    fontSize: "9px",
                    color: "black",
                    fontWeight: '400',
                    marginTop: '10px'
                } : {
                    fontWeight: "400",
                    fontSize: "12px",
                    color: "black",
                    fontWeight: '400',
                    marginTop: '10px'
                }}>
                    Port Harcourt
                </Form.Label>
                <Form.Label style={mobile ? {
                    fontWeight: "400",
                    fontSize: "9px",
                    color: "black",
                    fontWeight: '400',
                    marginTop: '10px'
                } : {
                    fontWeight: "400",
                    fontSize: "12px",
                    color: "black",
                    fontWeight: '400',
                    marginTop: '10px'
                }}>
                    Lagos
                </Form.Label>
                <Form.Label style={mobile ? {
                    fontWeight: "400",
                    fontSize: "9px",
                    color: "black",
                    fontWeight: '400',
                    marginTop: '10px'
                } : {
                    fontWeight: "400",
                    fontSize: "12px",
                    color: "black",
                    fontWeight: '400',
                    marginTop: '10px'
                }}>
                    # 7829
                </Form.Label>
                <Form.Label style={mobile ? {
                    fontWeight: "400",
                    fontSize: "9px",
                    color: "black",
                    fontWeight: '400',
                    marginTop: '10px'
                } : {
                    fontWeight: "400",
                    fontSize: "12px",
                    color: "black",
                    fontWeight: '400',
                    marginTop: '10px'
                }}>
                    24-01-2023
                </Form.Label>
            </div>
        </>
    )
}