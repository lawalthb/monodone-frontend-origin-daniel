import { useMediaQuery } from "react-responsive";
import ClearingAndForwardingTopNav from "./ClearingForwardingTopNav";

export default function ClearingAndForwardingLayout({ children }) {
  return (
    <div
      style={{
        background: "white",
        padding: "0px",
        margin: "0px",
        height: "1171px",
      }}
    >
      <ClearingAndForwardingTopNav />
      <div
        style={{
          margin: 0,
          display: "flex",
          overflow: "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
}
