import Image from "next/image";
import { Modal } from "react-bootstrap";
import GeneralModal from "../modal";

export default function SuggestLoading(props) {
    return (
        <GeneralModal
            size="sm"
            show={props.suggestLoading}
            onHide={() => props.setSuggestLoading(false)}
        >
            <Modal.Body style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto"
            }}>
                <Image
                    src={"/img/postload.png"}
                    width={"200"}
                    height={"200"}
                    alt={"location"}
                />
            </Modal.Body>
        </GeneralModal>
    )
}