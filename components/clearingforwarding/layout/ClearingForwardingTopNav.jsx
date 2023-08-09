import Image from "next/image";
import { useRouter } from "next/router";
import { Form } from "react-bootstrap";
import ClearingTopMobile from "./clearingTopMobile";
import Media from "@/utils/media";

export default function ClearingAndForwardingTopNav(props) {
  const router = useRouter();
  const { mobile, tabletAndDesktop} = Media();

  return (
    <>
    {mobile && (
      <ClearingTopMobile />
    )}
      {tabletAndDesktop && (
        <div
          style={{
            margin: "0",
            padding: "0",
            display: "flex",
            height: "72px",
            boxShadow:
              "0 10px 15px -3px rgb(46 41 51 / 8%), 0 4px 6px -2px rgb(71 63 79 / 16%)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              height: "100%",
              width: "12%",
              margin: "0px",
            }}
          >
            <Image
              style={{
                position: "absolute",
                left: 0,
                right: "75.14%",
                top: 0,
                bottom: 0,
              }}
              src="/img/Logo.png"
              width="250"
              height="72"
              alt="logo"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              height: "100%",
              width: "80%",
              margin: "0px -20px 0px 0px",
              gap: "15px",
            }}
          >
            <Image
              onClick={() => router.push("/customers/messages")}
              style={{
                margin: "12px 0px",
                cursor: "pointer",
              }}
              src="/img/message1.png"
              width="39"
              height="32"
              alt="message"
            />
            <Image
              style={{
                margin: "14px 0px",
              }}
              src="/img/notification.png"
              width="30"
              height="27"
              alt="notification"
            />
            <Image
              style={{
                margin: "12px 0px",
              }}
              src="/img/agent-online.png"
              width="40"
              height="40"
              alt="message"
            />
            <Form.Label
              style={{
                fontSize: "11px",
                marginTop: "23px",
                color: "black",
              }}
            >
              Kelechi Agu
            </Form.Label>
            <Form.Label
              style={{
                fontSize: "11px",
                marginTop: "23px",
                color: "black",
              }}
            >
              {"|"}
            </Form.Label>
            <Form.Label
              style={{
                fontSize: "11px",
                marginTop: "23px",
                color: "black",
                marginRight: "-35px",
              }}
            >
              Clearing and Forwarding Agent
            </Form.Label>
          </div>
        </div>
      )}
    </>
  );
}
