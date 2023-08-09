import Image from "next/image";
import GeneralModal from "./modal";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

export default function CancelModal(props) {
    return (
        <GeneralModal
            size="474px"
            show={props.cancelModal}
            onHide={() => props.setCancelModal(false)}
        >
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#EB5757",
                padding: "20px",
                color: "white",
                borderRadius: "7px"
            }}>
                Cancel Order
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "54px auto 54px auto",
                background: "#EB5757",
                width: "25%",
                height: "100",
                padding: "35px",
                borderRadius: "50%"
            }}>
                <ReportProblemIcon style={{
                    width: "34",
                    height: "30",
                    color: "white",
                    background: '#EB5757'
                }} />
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

            }}>
                <p style={{ color: "#151515", fontWeight: '700' }}>Are you sure you want to cancel the order?</p>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "30px 0px 54px 0px"

            }}>
                <button
                onClick={() => props.setCancelModal(false)}
                 style={{
                    background: "transparent",
                    color: "#EB5757",
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "500",
                    border: 'none',
                    padding: '10px'
                }}>Yes, cancel order</button>
            </div>

        </GeneralModal>
    )
}