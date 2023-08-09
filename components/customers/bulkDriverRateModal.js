import { useState } from "react";
import GeneralModal from "./modal";
import { Button, Form } from "react-bootstrap";
import { StepConnector } from "@mui/material";
import GradeIcon from "@mui/icons-material/Grade";
import styles from './customerdashboard.module.css'
import Image from "next/image";


export default function BulkDriverRateModal(props) {
    const [rateDriver, setRateDriver] = useState("")
    return (
        <GeneralModal
            size="769px"
            show={props.rateBulkDriver}
            onHide={() => props.setRateBulkDriver(false)}
        >
            <Form className={styles.modal}>
        <Form.Group
          className="mb-3"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Form.Label style={{ fontWeight: "bold", textAlign: "center" }}>
            Please rate the driver
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3">
          <Image
            src="/img/driver.png"
            width={50}
            height={50}
            alt="driver"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              borderRadius: "50%"
            }}
          />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label
            style={{
              fontSize: "13px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
            }}
          >
            Stephan
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label
            style={{
              fontSize: "13px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              color: "#808080",
            }}
          >
            Mon, Jul 26, 9:30 AM
          </Form.Label>
        </Form.Group>

        <Form.Group className="mt-2">
          <Form.Label
            style={{
              fontSize: "13px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
              color: "#FFC700",
            }}
          >
            <GradeIcon />
            <GradeIcon />
            <GradeIcon />
            <GradeIcon />
            <GradeIcon />{" "}
            <Form.Label style={{ color: "black", marginTop: "7px" }}>
              {" "}
              5.0
            </Form.Label>
          </Form.Label>
        </Form.Group>
        <Form.Group
          className="mt-4"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#D1D1D1",
          }}
        >
          <StepConnector />
        </Form.Group>
        <Form.Group className="mt-4">
          <Form.Label style={{ fontSize: "12px", color: "black" }}>
            Stepham offers to deliver your cargo for
          </Form.Label>
          <Form.Label
            style={{
              fontSize: "12px",
              color: "black",
              float: "right",
              marginTop: "8px",
            }}
          >
            <span
              style={{
                background:
                  "linear-gradient(90deg, #00902F 0%, #7CC427 99.69%)",
                color: "white",
                padding: "7px",
                borderRadius: "5px",
              }}
            >
              + #36
            </span>{" "}
            # 163.00
          </Form.Label>
          <StepConnector style={{ marginTop: "20px", color: "#E7E7E7" }} />
        </Form.Group>
        <Form.Group className="mb-1 mt-5">
          <Form.Label
            style={{
              fontSize: "13px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
            }}
          >
            <Button
            onClick={props.handleBulkRiseUpBid}
              style={{
                width: "300px",
                fontSize: "14px",
                background: "white",
                border: "1px solid green",
                color: "#151515",
                fontSize: "14px",
              }}
            >
              MAKE ANOTHER BID
            </Button>
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-1 mt-3">
          <Form.Label
            style={{
              fontSize: "13px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
            }}
          >
            <Button
              style={{
                width: "300px",
                fontSize: "14px",
                background: "white",
                border: "1px solid green",
                color: "white",
                fontSize: "14px",
                background: "#00902F",
              }}
            >
              AGREE # 163.00
            </Button>
          </Form.Label>
        </Form.Group>
      </Form>
        </GeneralModal>
    )
}