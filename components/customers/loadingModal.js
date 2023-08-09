import Image from "next/image";
import { Modal } from "react-bootstrap";
import GeneralModal from "./modal";

export default function LoadingModal(props) {
    return (
        <GeneralModal
            size="sm"
            show={props.loadingModal}
            onHide={() => props.setLoadingModal(false)}
        >
            <Modal.Body style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto"
            }}>
                <Image
                    src={"/img/loading.png"}
                    width={"300"}
                    height={"300"}
                    alt={"location"}
                />
            </Modal.Body>
        </GeneralModal>
    )
}