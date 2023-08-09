import { Modal } from "react-bootstrap"
import GeneralModal from "../../customers/modal"
import ResetPasswordDetails from "./resetPasswordDetails"
import Image from "next/image"

export default function ResetPassword(props) {
    return (
        <>
            <GeneralModal
                size="lg"
                show={props.resetPassword}
                onHide={() => {
                    props.setResetPasswword(false)
                }}
                style={props.style}
            >
                <Modal.Body style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    paddinLeft: 0,
                    paddingRight: 0
                }}>
                    <div
                        onClick={() => {
                            props.setResetPasswword(false)
                        }}
                        style={{
                            position: "absolute",
                            top: "-1rem",
                            right: '-0.8rem',
                            cursor: "pointer"
                        }}>
                        <Image src="/img/close.png" width="14" height="14" alt="close" />
                    </div>
                    <ResetPasswordDetails
                        setResetPasswword={props.setResetPasswword}
                    />
                </Modal.Body>
            </GeneralModal>
        </>
    )
}