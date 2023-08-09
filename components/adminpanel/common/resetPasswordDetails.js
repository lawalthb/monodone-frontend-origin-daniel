import { useMediaQuery } from "react-responsive";
import { Form } from "react-bootstrap";
import BtnComp from "./btnComp";

export default function ResetPasswordDetails(props) {
    const isMobile = useMediaQuery({
        query: "(max-width: 709px)",
    });
    const isTabAndDesktop = useMediaQuery({
        query: "(min-width: 710px)",
    });
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Form.Label style={{
                    fontSize: "16px",
                    color: "black",
                    fontWeight: 600
                }}>
                    Reset Password
                </Form.Label>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Form.Label style={{
                    fontSize: "11px",
                    color: "black",
                    fontWeight: 400,
                    marginTop: '10px'
                }}>
                    Input your new password to reset your password
                </Form.Label>
            </div>
            <Form.Label style={{
                fontSize: "11px",
                color: "black",
                fontWeight: 500,
                marginTop: '10px'
            }}>
                Old password:
            </Form.Label>
            <input
                value={"834 332 443 333"}
                readOnly
                style={{
                    border: "1px solid #E7E7E7",
                    width: "100%",
                    paddingLeft: "10px",
                    fontSize: "11px",
                    marginTop: "-4px"
                }} type="text" placeholder="" />
            <Form.Label style={{
                fontSize: "11px",
                color: "black",
                fontWeight: 500,
                marginTop: '10px'
            }}>
                New password:
            </Form.Label>
            <input
                value={"834 332 443 333"}
                readOnly
                style={{
                    border: "1px solid #E7E7E7",
                    width: "100%",
                    paddingLeft: "10px",
                    fontSize: "11px",
                    marginTop: "-4px"
                }} type="text" placeholder="" />
            <Form.Label style={{
                fontSize: "11px",
                color: "black",
                fontWeight: 500,
                marginTop: '10px'
            }}>
                Verify password:
            </Form.Label>
            <input
                value={"834 332 443 333"}
                readOnly
                style={{
                    border: "1px solid #E7E7E7",
                    width: "100%",
                    paddingLeft: "10px",
                    fontSize: "11px",
                    marginTop: "-4px"
                }} type="text" placeholder="" />
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px'
            }}>
                {isMobile ? (
                    <BtnComp
                        onClick={() => props.setResetPasswword(false)}
                        style={{
                            background: '#00902F',
                            fontSize: '12px',
                            color: 'white',
                            fontWeight: '500',
                            border: "none",
                            width: '100%'
                        }}>
                        Change Password
                    </BtnComp>
                ) : (
                    <BtnComp
                        onClick={() => props.setResetPasswword(false)}
                        style={{
                            background: '#00902F',
                            fontSize: '12px',
                            color: 'white',
                            fontWeight: '500',
                            border: "none",
                            width: '30%'
                        }}>
                        Change Password
                    </BtnComp>
                )}
            </div>
        </>
    )
}