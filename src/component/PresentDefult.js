import React from "react";
import Iframe from "react-iframe";

export default function PresentDefult() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div>
        <Iframe
          url="https://thumbs.gfycat.com/AccomplishedFixedBluebottle-max-1mb.gif"
          width="500px"
          height="268px"
          id="gif"
          className="myClassname"
        />
      </div>
      <div
        className="text-center"
        style={{ width: "60%", marginTop: "30px", fontSize: "16px" }}
      >
        <p>
          <i>
            If you would like to find
            <span style={{ color: "red", fontWeight: "600" }}>
              {" "}
              the page of cards{" "}
            </span>
            you previously provided as the draft, you should examine the left
            bar.{" "}
          </i>
        </p>
      </div>
    </div>
  );
}
