import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import GeneralModal from "../../customers/modal";
import { Modal } from "react-bootstrap";
import AddAdminsMobile from "./addAdminsMobile";
import AddAdminsDesktop from "./addAdminsDesktop";

export default function AddAdminsComp(props) {
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
                    show={props.addAdmins}
                    onHide={() => {
                        props.setAddAdmins(false)
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
                                props.setAddAdmins(false)
                            }}
                            style={{
                                position: "absolute",
                                top: "-1rem",
                                right: '-0.8rem',
                                cursor: "pointer"
                            }}>
                            <Image src="/img/close.png" width="14" height="14" alt="close" />
                        </div>
                        <AddAdminsMobile
                            caption={props.caption}
                            btnName={props.btnName}
                            setAddAdmins={props.setAddAdmins}
                        />
                    </Modal.Body>
                </GeneralModal>
            )}
            {isTabAndDesktop && (
                <GeneralModal
                    size="lg"
                    show={props.addAdmins}
                    onHide={() => {
                        props.setAddAdmins(false)
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
                                props.setAddAdmins(false)
                            }}
                            style={{
                                position: "absolute",
                                top: "-1rem",
                                right: '-0.8rem',
                                cursor: "pointer"
                            }}>
                            <Image src="/img/close.png" width="14" height="14" alt="close" />
                        </div>
                        <AddAdminsDesktop
                            caption={props.caption}
                            btnName={props.btnName}
                            setAddAdmins={props.setAddAdmins}
                        />
                    </Modal.Body>
                </GeneralModal>
            )}
        </>
    )
}