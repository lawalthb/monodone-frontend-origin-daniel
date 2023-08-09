import Image from "next/image";
import { Form } from "react-bootstrap";
import styles from "./customer.module.scss";

export default function CarClearingMessageSidebar(props) {
  return (
    <>
      <div
        style={{
          width: "30%",
          margin: 0,
          height: "100%",
          background: "linear-gradient(90deg, #00902F 0%, #7CC427 99.69%)",
          padding: "15px 40px 15px 20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ fontWeight: "700", fontSize: "25px", color: "white" }}>
        <Image
            
            src="/img/Logo1.png"
            alt="search"
            width="140"
            height="20"
          />
        </div>
        <div style={{ marginTop: "12px", width: "100%" }}>
          <Image
            style={{
              position: "absolute",
              top: "11.8%",
              left: "2%",
            }}
            src="/img/search.png"
            alt="search"
            width="16"
            height="16"
          />
          <input
            className={styles.clearingMessageInput}
            type="text"
            style={{
              width: "100%",
              background: "rgba(255, 255, 255, 0.2)",
              border: "none",
              padding: "7px 30px",
            }}
            placeholder="search here..."
          />
        </div>
        <div
          style={{
            marginTop: "7px",
            marginLeft: "13px",
          }}
        >
          <Image src="/img/refresh.png" width="16" height="12" alt="refresh" />
        </div>
        <div
          className={styles.messegeDiv}
          style={{
            marginTop: "12px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "7px 10px",
            cursor: "pointer",
            background: "rgba(255, 255, 255, 0.2)",
          }}
        >
          <div>
            <Image
              src="/img/messenger.png"
              width="40"
              height="42"
              alt="messenger"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Form.Label
              style={{
                fontSize: "11px",
                fontWeight: "500",
                color: "#FFFFFF",
              }}
            >
              Nancy Chidinma
            </Form.Label>
            <Form.Label
              style={{
                fontSize: "9px",
                color: "#FFFFFF",
              }}
            >
              Hello, your car is currently...
            </Form.Label>
          </div>
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              background: "#FFFFFF",
              marginTop: "13px",
            }}
          >
            <Form.Label
              style={{
                fontSize: "9px",
                color: "#00902F",
                marginLeft: "7px",
                fontWeight: "bold",
                marginTop: "-.01%",
                position: "absolute",
              }}
            >
              3
            </Form.Label>
          </div>
        </div>
        <div
          className={styles.messegeDiv}
          style={{
            marginTop: "12px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "7px 10px",
            cursor: "pointer",
          }}
        >
          <div>
            <Image
              src="/img/messenger.png"
              width="40"
              height="42"
              alt="messenger"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Form.Label
              style={{
                fontSize: "11px",
                fontWeight: "500",
                color: "#FFFFFF",
              }}
            >
              Nancy Chidinma
            </Form.Label>
            <Form.Label
              style={{
                fontSize: "9px",
                color: "#FFFFFF",
              }}
            >
              Hello, your car is currently...
            </Form.Label>
          </div>
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              background: "#FFFFFF",
              marginTop: "13px",
            }}
          >
            <Form.Label
              style={{
                fontSize: "9px",
                color: "#00902F",
                marginLeft: "7px",
                fontWeight: "bold",
                marginTop: "-.01%",
                position: "absolute",
              }}
            >
              3
            </Form.Label>
          </div>
        </div>
        <div
          className={styles.messegeDiv}
          style={{
            marginTop: "12px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "7px 10px",
            cursor: "pointer",
          }}
        >
          <div>
            <Image
              src="/img/messenger.png"
              width="40"
              height="42"
              alt="messenger"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Form.Label
              style={{
                fontSize: "11px",
                fontWeight: "500",
                color: "#FFFFFF",
              }}
            >
              Nancy Chidinma
            </Form.Label>
            <Form.Label
              style={{
                fontSize: "9px",
                color: "#FFFFFF",
              }}
            >
              Hello, your car is currently...
            </Form.Label>
          </div>
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              background: "#FFFFFF",
              marginTop: "13px",
            }}
          >
            <Form.Label
              style={{
                fontSize: "9px",
                color: "#00902F",
                marginLeft: "7px",
                fontWeight: "bold",
                marginTop: "-.01%",
                position: "absolute",
              }}
            >
              3
            </Form.Label>
          </div>
        </div>
        <div
          className={styles.messegeDiv}
          style={{
            marginTop: "12px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "7px 10px",
            cursor: "pointer",
          }}
        >
          <div>
            <Image
              src="/img/messenger.png"
              width="40"
              height="42"
              alt="messenger"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Form.Label
              style={{
                fontSize: "11px",
                fontWeight: "500",
                color: "#FFFFFF",
              }}
            >
              Nancy Chidinma
            </Form.Label>
            <Form.Label
              style={{
                fontSize: "9px",
                color: "#FFFFFF",
              }}
            >
              Hello, your car is currently...
            </Form.Label>
          </div>
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              background: "#FFFFFF",
              marginTop: "13px",
            }}
          >
            <Form.Label
              style={{
                fontSize: "9px",
                color: "#00902F",
                marginLeft: "7px",
                fontWeight: "bold",
                marginTop: "-.01%",
                position: "absolute",
              }}
            >
              3
            </Form.Label>
          </div>
        </div>
        <div
          className={styles.messegeDiv}
          style={{
            marginTop: "12px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "7px 10px",
            cursor: "pointer",
          }}
        >
          <div>
            <Image
              src="/img/messenger.png"
              width="40"
              height="42"
              alt="messenger"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Form.Label
              style={{
                fontSize: "11px",
                fontWeight: "500",
                color: "#FFFFFF",
              }}
            >
              Nancy Chidinma
            </Form.Label>
            <Form.Label
              style={{
                fontSize: "9px",
                color: "#FFFFFF",
              }}
            >
              Hello, your car is currently...
            </Form.Label>
          </div>
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              background: "#FFFFFF",
              marginTop: "13px",
            }}
          >
            <Form.Label
              style={{
                fontSize: "9px",
                color: "#00902F",
                marginLeft: "7px",
                fontWeight: "bold",
                marginTop: "-.01%",
                position: "absolute",
              }}
            >
              3
            </Form.Label>
          </div>
        </div>
        <div
          className={styles.messegeDiv}
          style={{
            marginTop: "12px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "7px 10px",
            cursor: "pointer",
          }}
        >
          <div>
            <Image
              src="/img/messenger.png"
              width="40"
              height="42"
              alt="messenger"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Form.Label
              style={{
                fontSize: "11px",
                fontWeight: "500",
                color: "#FFFFFF",
              }}
            >
              Nancy Chidinma
            </Form.Label>
            <Form.Label
              style={{
                fontSize: "9px",
                color: "#FFFFFF",
              }}
            >
              Hello, your car is currently...
            </Form.Label>
          </div>
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              background: "#FFFFFF",
              marginTop: "13px",
            }}
          >
            <Form.Label
              style={{
                fontSize: "9px",
                color: "#00902F",
                marginLeft: "7px",
                fontWeight: "bold",
                marginTop: "-.01%",
                position: "absolute",
              }}
            >
              3
            </Form.Label>
          </div>
        </div>
        <div
          className={styles.messegeDiv}
          style={{
            marginTop: "12px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "7px 10px",
            cursor: "pointer",
          }}
        >
          <div>
            <Image
              src="/img/messenger.png"
              width="40"
              height="42"
              alt="messenger"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Form.Label
              style={{
                fontSize: "11px",
                fontWeight: "500",
                color: "#FFFFFF",
              }}
            >
              Nancy Chidinma
            </Form.Label>
            <Form.Label
              style={{
                fontSize: "9px",
                color: "#FFFFFF",
              }}
            >
              Hello, your car is currently...
            </Form.Label>
          </div>
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              background: "#FFFFFF",
              marginTop: "13px",
            }}
          >
            <Form.Label
              style={{
                fontSize: "9px",
                color: "#00902F",
                marginLeft: "7px",
                fontWeight: "bold",
                marginTop: "-.01%",
                position: "absolute",
              }}
            >
              3
            </Form.Label>
          </div>
        </div>
        <div
          className={styles.messegeDiv}
          style={{
            marginTop: "12px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "7px 10px",
            cursor: "pointer",
          }}
        >
          <div>
            <Image
              src="/img/messenger.png"
              width="40"
              height="42"
              alt="messenger"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Form.Label
              style={{
                fontSize: "11px",
                fontWeight: "500",
                color: "#FFFFFF",
              }}
            >
              Nancy Chidinma
            </Form.Label>
            <Form.Label
              style={{
                fontSize: "9px",
                color: "#FFFFFF",
              }}
            >
              Hello, your car is currently...
            </Form.Label>
          </div>
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              background: "#FFFFFF",
              marginTop: "13px",
            }}
          >
            <Form.Label
              style={{
                fontSize: "9px",
                color: "#00902F",
                marginLeft: "7px",
                fontWeight: "bold",
                marginTop: "-.01%",
                position: "absolute",
              }}
            >
              3
            </Form.Label>
          </div>
        </div>
      </div>
    </>
  );
}
