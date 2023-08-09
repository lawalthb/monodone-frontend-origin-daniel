import Image from "next/image";
import { Col } from "react-bootstrap";

export default function NoactiveParcel(props) {
    return (
        <div
            className="row mt-1 mb-5"
            style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "30px"
            }}
        >
            <Col
                style={{
                    width: "290px",
                    height: "290px",
                    border: "1px solid lightgreen",
                    borderRadius: "5px",
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "20px",
                }}
                xs={12}
                md={4}
            >
                <Image
                    src="/img/addparcel.png"
                    alt="upload"
                    width="300"
                    height="200"
                />

            </Col>
            <p style={{ textAlign: "center", fontSize: "14px", marginTop: "20px" }}>
                No active parcel have been <br />
                found at the moment
            </p>

            <button
                onClick={() => props.handleAddParcel()}
                style={{
                    background: "#D1D1D1",
                    color: "black",
                    width: "343px",
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                className="btn btn-success  bg-gray col-lg-5 col-sm-12"
            >
                Add parcel
            </button>
        </div>
    )
}