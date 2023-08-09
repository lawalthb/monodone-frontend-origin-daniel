import { useState } from "react";
import GeneralModal from "./modal";
import { Button, Form } from "react-bootstrap";
import styles from './customerdashboard.module.css'

export default function BulkDriverRiseUpBid(props) {
  return (
    <GeneralModal
      size="769px"
      show={props.riseUpBid}
      onHide={() => props.setRiseUpBid(false)}
    >
      <Form className={styles.modal}>
        <Form.Group
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Form.Label style={{ fontWeight: "bold", textAlign: "center" }}>
            Make another bid
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label
            style={{
              textAlign: "center",
              fontSize: "12px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#808080",
            }}
          >
            Offer a bid that suits you
          </Form.Label>
        </Form.Group>

        <Form.Group
          className="mt-5"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#D1D1D1",
          }}
        >
          <textarea
            style={{
              fontSize: "10px",
              padding: "15px",
              width: "300px",
              border: "1px solid #D1D1D1",
              color: "#151515",
            }}
            type="text"
            placeholder=" Rise up Price"
            value={props.buttonValue}
          >
            +35
          </textarea>
        </Form.Group>
        <Form.Group
          className="mt-5"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#D1D1D1",
            margin: "auto",
          }}
        >
          <button
            onClick={props.handleButtonClick}
            style={props.selected === "+20" ? {
              width: "50px",
              padding: "6px",
              borderRadius: "6px",
              fontSize: "12px",
              textAlign: "center",
              border: "2px solid green",
              marginRight: "20px",
            } : {
              width: "50px",
              padding: "6px",
              borderRadius: "6px",
              fontSize: "12px",
              textAlign: "center",
              border: "1px solid gray",
              marginRight: "20px",
            }}
            type="text"

          >+20</button>
          <button
            onClick={props.handleButtonClick}
            style={props.selected === "+25" ? {
              width: "50px",
              padding: "6px",
              borderRadius: "6px",
              fontSize: "12px",
              textAlign: "center",
              border: "2px solid green",
              marginRight: "20px",
            } : {
              width: "50px",
              padding: "6px",
              borderRadius: "6px",
              fontSize: "12px",
              textAlign: "center",
              border: "1px solid gray",
              marginRight: "20px",
            }}
            type="text"

          >+25</button>
          <button
            onClick={props.handleButtonClick}
            style={props.selected === "+30" ? {
              width: "50px",
              padding: "6px",
              borderRadius: "6px",
              fontSize: "12px",
              textAlign: "center",
              border: "2px solid green",
              marginRight: "20px",
            } : {
              width: "50px",
              padding: "6px",
              borderRadius: "6px",
              fontSize: "12px",
              textAlign: "center",
              border: "1px solid gray",
              marginRight: "20px",
            }}
            type="text"
            value="+30"
          >+30</button>
          <button
            onClick={props.handleButtonClick}
            style={props.selected === "+35" ? {
              width: "50px",
              padding: "6px",
              borderRadius: "6px",
              fontSize: "12px",
              textAlign: "center",
              border: "2px solid green",
              marginRight: "20px",
            } : {
              width: "50px",
              padding: "6px",
              borderRadius: "6px",
              fontSize: "12px",
              textAlign: "center",
              border: "1px solid gray",
              marginRight: "20px",
            }}
            type="text"
          >+35</button>
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
              onClick={props.handleAgreeBtn}
              disabled={props.buttonValue.length === 0}
              style={{
                width: "300px",
                fontSize: "14px",
                background: props.buttonValue.length > 0 ? "#00902F" : "gray",
                border: "1px solid gray",
                color: "white",
                fontSize: "14px",
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