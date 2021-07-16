import React from "react";
import Cards from "./Cards";
import "../style/page.css";
import userImg from "../logos/userImage.png";

export default function Page() {
  const status = [
    {
      title: "Published",
      color: "grey",
    },
    {
      title: "Scheduled",
      color: "green",
    },
    {
      title: "Need Approval",
      color: "orange",
    },
    {
      title: "Error",
      color: "red",
    },
    {
      title: "Notes",
      color: "blue",
    },
  ];
  return (
    <div
      style={{
        width: "100%",
        marginLeft: "60px",
        marginTop: "15px",
        marginRight: "60px",
      }}
    >
      <div className="d-flex flex-row status">
        {status.map((item, index) => (
          <div
            key={index}
            className="d-flex flex-row align-items-center element"
          >
            <div
              style={{
                marginTop: "5px",
                width: "15px",
                height: "15px",
                border: "0px solid black",
                borderRadius: "50%",
                backgroundColor: `${item.color}`,
                marginRight: "6px",
              }}
            ></div>
            <a
              href="/"
              style={{
                marginTop: "5px",
                textDecoration: "none",
                color: "black",
              }}
            >
              {item.title}
            </a>
          </div>
        ))}
        <div className="ms-auto">
          <img className="mt-5" height="60px" alt="user-png" src={userImg} />
        </div>
      </div>
      <Cards />
    </div>
  );
}
