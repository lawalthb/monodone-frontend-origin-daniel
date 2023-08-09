import Image from "next/image";
import { Form } from "react-bootstrap";
import styles from "./customer.module.scss";

export default function CarClearingMobileHeader(props) {
  return (
    <>
      {props.chat ? (
        <>
          <div
            style={{
              margin: "0px",
              height: "131px",
              background: "linear-gradient(90deg, #00902F 0%, #7CC427 99.69%)",
              padding: "20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              onClick={() => props.setChat((prevState) => !prevState)}
              style={{
                display: "flex",
                cursor: "pointer",
              }}
            >
              <Image
                src="/img/online.png"
                width="42"
                height="42"
                alt="online"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "-8px",
                }}
              >
                <Form.Label
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 600,
                    color: "#FFFFFF",
                    marginTop: "17px",
                  }}
                >
                  Nancy Chidinma
                </Form.Label>
                <Form.Label
                  style={{
                    color: "white",
                    fontSize: "12px",
                  }}
                >
                  Typing...
                </Form.Label>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "17px",
              }}
            >
              <Image
                style={{
                  marginTop: "3px",
                }}
                src="/img/filter-white.png"
                width="20"
                height="12"
                alt="filter"
              />
            </div>
          </div>
          <div
            style={{
              padding: "10px",
            }}
          >
            <div
              style={{
                margin: "0px",
                padding: "20px",
                background: "gray-light",
              }}
            >
              <Form.Label
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "auto",
                  padding: "7px",
                  background: "white",
                  width: "20%",
                  color: "#151515",
                  fontWeight: "500",
                }}
              >
                Today
              </Form.Label>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                padding: "0 10px",
              }}
            >
              <div
                style={{
                  width: "80%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    width: "80%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "auto",
                    background: "white",
                    padding: "10px",
                    borderTopRightRadius: "6px",
                    borderBottomRightRadius: "6px",
                    borderTopLeftRadius: "6px",
                  }}
                >
                  <Form.Label
                    style={{
                      fontSize: "10px",
                      color: "#151515",
                    }}
                  >
                    Hello Kelvin, <br />
                    This is Nancy, whom you are clearing her car.
                  </Form.Label>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "5px",
                  }}
                >
                  <Image
                    src="/img/messenger.png"
                    width="40"
                    height="42"
                    alt="messenger"
                  />
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <Form.Label>2.30pm</Form.Label>
                  <Image
                    src="/img/thick.png"
                    width="12"
                    height="12"
                    alt="messenger"
                  />
                </div>
              </div>
              <div
                style={{
                  width: "80%",
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "auto",
                }}
              >
                <div
                  style={{
                    width: "80%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#EDEBEB",
                    padding: "10px",
                    borderTopRightRadius: "6px",
                    borderBottomLeftRadius: "6px",
                    borderTopLeftRadius: "6px",
                    background: "#7CC427",
                  }}
                >
                  <Form.Label
                    style={{
                      fontSize: "10px",
                      color: "#FFFFFF",
                    }}
                  >
                    Hello Kelvin, <br />
                    This is Nancy, whom you are clearing her car.
                  </Form.Label>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Image
                    style={{
                      marginTop: "7px",
                    }}
                    src="/img/thick.png"
                    width="12"
                    height="12"
                    alt="messenger"
                  />
                  <Form.Label
                    style={{
                      marginTop: "7px",
                    }}
                  >
                    2.30pm
                  </Form.Label>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <Image
                    src="/img/messenger.png"
                    width="40"
                    height="42"
                    alt="messenger"
                  />
                  <div></div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                padding: "0 10px",
              }}
            >
              <div
                style={{
                  width: "80%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    width: "80%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "auto",
                    background: "white",
                    padding: "10px",
                    borderTopRightRadius: "6px",
                    borderBottomRightRadius: "6px",
                    borderTopLeftRadius: "6px",
                  }}
                >
                  <Form.Label
                    style={{
                      fontSize: "10px",
                      color: "#151515",
                    }}
                  >
                    Hello Kelvin, <br />
                    This is Nancy, whom you are clearing her car.
                  </Form.Label>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "5px",
                  }}
                >
                  <Image
                    src="/img/messenger.png"
                    width="40"
                    height="42"
                    alt="messenger"
                  />
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <Form.Label>2.30pm</Form.Label>
                  <Image
                    src="/img/thick.png"
                    width="12"
                    height="12"
                    alt="messenger"
                  />
                </div>
              </div>
              <div
                style={{
                  width: "80%",
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "auto",
                }}
              >
                <div
                  style={{
                    width: "80%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#EDEBEB",
                    padding: "10px",
                    borderTopRightRadius: "6px",
                    borderBottomLeftRadius: "6px",
                    borderTopLeftRadius: "6px",
                    background: "#7CC427",
                  }}
                >
                  <Form.Label
                    style={{
                      fontSize: "10px",
                      color: "#FFFFFF",
                    }}
                  >
                    Hello Kelvin, <br />
                    This is Nancy, whom you are clearing her car.
                  </Form.Label>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Image
                    style={{
                      marginTop: "7px",
                    }}
                    src="/img/thick.png"
                    width="12"
                    height="12"
                    alt="messenger"
                  />
                  <Form.Label
                    style={{
                      marginTop: "7px",
                    }}
                  >
                    2.30pm
                  </Form.Label>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <Image
                    src="/img/messenger.png"
                    width="40"
                    height="42"
                    alt="messenger"
                  />
                  <div></div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
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
                  width: "86px",
                  height: "32px",
                  display: "flex",
                  background: "white",
                  borderRadius: "12px",
                  marginLeft: "10px",
                  marginTop: "6px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    margin: "auto",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#A6A6A6",
                  }}
                ></div>
                <div
                  style={{
                    display: "flex",
                    margin: "auto",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#A6A6A6",
                  }}
                ></div>
                <div
                  style={{
                    display: "flex",
                    margin: "auto",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#A6A6A6",
                  }}
                ></div>
              </div>
            </div>
            <div
              style={{
                margin: "40px 20px",
                background: "white",
                borderRadius: "7px",
                height: "54px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <input
                className={styles.inputMessage}
                style={{
                  background: "transparent",
                  border: "none",
                  margin: "7px 0px 7px 20px",
                }}
                type="text"
                placeholder="Type your message"
              />
              <Image
                style={{
                  margin: "15px 7px 7px 0px",
                  cursor: "pointer",
                }}
                src="/img/emoji.png"
                width="20"
                height="20"
                alt="emoji"
              />
              <Image
                style={{
                  margin: "15px 7px 7px 0px",
                  cursor: "pointer",
                }}
                src="/img/attach.png"
                width="20"
                height="20"
                alt="emoji"
              />
              <Image
                style={{
                  margin: "15px 25px 7px 5px",
                  cursor: "pointer",
                }}
                src="/img/send1.png"
                width="20"
                height="20"
                alt="emoji"
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              margin: "0px",
              height: "131px",
              background: "linear-gradient(90deg, #00902F 0%, #7CC427 99.69%)",
              padding: "20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Image src="/img/icon-logo.png" width="48" height="48" alt="logo" />
            <Form.Label
              onClick={() => props.setChat((prevState) => !prevState)}
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 600,
                color: "#FFFFFF",
                marginTop: "17px",
                cursor: "pointer",
              }}
            >
              Chats
            </Form.Label>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "17px",
              }}
            >
              <Image
                style={{
                  marginRight: "15px",
                }}
                src="/img/search.png"
                alt="search"
                width="20"
                height="20"
              />
              <Image
                style={{
                  marginTop: "3px",
                }}
                src="/img/filter-white.png"
                width="20"
                height="12"
                alt="filter"
              />
            </div>
          </div>
          {new Array(9)
            .fill(
              <>
                <div
                  style={{
                    margin: "0px",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Image
                      src="/img/online.png"
                      width="42"
                      height="42"
                      alt="online"
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Form.Label
                        style={{
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: 500,
                          color: "#151515",
                          fontSize: "14px",
                        }}
                      >
                        Nancy Chidinma
                      </Form.Label>
                      <Form.Label>Hello, your car is currently...</Form.Label>
                    </div>
                    <Image
                      src="/img/badge.png"
                      width="18"
                      height="18"
                      alt="badge"
                    />
                  </div>
                </div>
              </>
            )
            .map((arr, idx) => arr)}
        </>
      )}
    </>
  );
}
