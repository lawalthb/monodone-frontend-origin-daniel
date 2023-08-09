import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { Modal } from "react-bootstrap"
import GeneralModal from "../../customers/modal"
import EditAdminsMobile from "./editAdminsMobile";
import EditAdminsDesktop from "./editAdminsDesktop";

export default function EditAdmins(props) {
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
                    show={props.editAdmins}
                    onHide={() => {
                        props.setEditAdmins(false)
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
                                props.setEditAdmins(false)
                            }}
                            style={{
                                position: "absolute",
                                top: "-1rem",
                                right: '-0.8rem',
                                cursor: "pointer"
                            }}>
                            <Image src="/img/close.png" width="14" height="14" alt="close" />
                        </div>
                        <EditAdminsMobile
                            setEditAdmins={props.setEditAdmins}
                        />
                    </Modal.Body>
                </GeneralModal>
            )}
            {isTabAndDesktop && (
                <GeneralModal
                    size="lg"
                    show={props.editAdmins}
                    onHide={() => {
                        props.setEditAdmins(false)
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
                                props.setEditAdmins(false)
                            }}
                            style={{
                                position: "absolute",
                                top: "-1rem",
                                right: '-0.8rem',
                                cursor: "pointer"
                            }}>
                            <Image src="/img/close.png" width="14" height="14" alt="close" />
                        </div>
                        <EditAdminsDesktop
                            setEditAdmins={props.setEditAdmins}
                        />
                    </Modal.Body>
                </GeneralModal>
            )}
        </>
    )
}