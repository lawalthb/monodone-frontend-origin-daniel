import Image from "next/image";
import { Form } from "react-bootstrap";

export default function CarClearingMessageHeader(props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "10px 90px 10px 10px",
          borderBottom: "1px solid #E7E7E7"
        }}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "#00902F",
            position: "absolute",
            right: "200px"
          }}
        ></div>
        <Image
          src="/img/messenger.png"
          width="40"
          height="42"
          alt="messenger"
        />
        <Form.Label
          style={{
            marginTop: "10px",
            marginLeft: "2px",
          }}
        >
          Nancy Chidinma
        </Form.Label>
      </div>
    </>
  );
}
