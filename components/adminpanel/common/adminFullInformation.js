import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import GeneralModal from "../../customers/modal";
import { Modal } from "react-bootstrap";
import AdminFullInformationMobile from "./adminFullInformationMobile";
import AdminFullInformationDesktop from "./adminFullInformationDesktop";

export default function AdminFullInformation(props) {
    const isMobile = useMediaQuery({
        query: "(max-width: 709px)",
    });
    const isTabAndDesktop = useMediaQuery({
        query: "(min-width: 710px)",
    });

    return (
        <>
            {isMobile && (
                <GeneralModal
                    size="lg"
                    show={props.adminFullInformation}
                    onHide={() => {
                        props.setAdminFullInformation(false)
                    }}
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
                                props.setAdminFullInformation(false)
                            }}
                            style={{
                                position: "absolute",
                                top: "-1rem",
                                right: '-0.8rem',
                                cursor: "pointer"
                            }}>
                            <Image src="/img/close.png" width="14" height="14" alt="close" />
                        </div>
                        <AdminFullInformationMobile
                            setAdminFullInformation={props.setAdminFullInformation}
                            setEditAdmins={props.setEditAdmins}
                        />
                    </Modal.Body>
                </GeneralModal>
            )}
            {isTabAndDesktop && (
                <GeneralModal
                    size="lg"
                    show={props.adminFullInformation}
                    onHide={() => {
                        props.setAdminFullInformation(false)
                    }}
                    style={{
                        marginLeft: "5%"
                    }}
                >
                    <Modal.Body style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%'
                    }}>
                        <div
                            onClick={() => {
                                props.setAdminFullInformation(false)
                            }}
                            style={{
                                position: "absolute",
                                top: "-1rem",
                                right: '-0.8rem',
                                cursor: "pointer"
                            }}>
                            <Image src="/img/close.png" width="14" height="14" alt="close" />
                        </div>
                        <AdminFullInformationDesktop
                            setAdminFullInformation={props.setAdminFullInformation}
                            setEditAdmins={props.setEditAdmins}
                        />
                    </Modal.Body>
                </GeneralModal>
            )}
        </>
    )
}