import { useState } from "react";
import CarClearingMessageHeader from "./CarClearingMessageHeader";
import CarClearingMessageSidebar from "./CarClearingMessageSidebar";
import CarClearingMobileHeader from "./CarClearingMobileHeader";
import Media from "@/utils/media";

export default function CarClearingMessageLayout({ children }) {
  const [chat, setChat] = useState(false);
  const { mobile, tabletAndDesktop} = Media();

  return (
    <>
      {mobile && (
        <>
          <CarClearingMobileHeader chat={chat} setChat={setChat} />
        </>
      )}
      {tabletAndDesktop && (
        <div
          style={{
            width: "100vw",
            margin: 0,
            display: "flex",
            overflowX: "hidden",
          }}
        >
          <CarClearingMessageSidebar />
          <div
            style={{
              width: "70%",
              margin: 0,
              display: "flex",
              flexDirection: "column",
              height: "100%",
              background: "white",
              height: "100vh",
            }}
          >
            <div style={{ width: "100%", margin: 0, height: "72px" }}>
              <CarClearingMessageHeader />
            </div>
            <div
              style={{
                width: "100%",
                height: "100%",
                margin: "0",
                padding: "50px 4px",
                background: "white",
              }}
            >
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
