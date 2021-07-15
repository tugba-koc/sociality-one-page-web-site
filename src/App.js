import React, { useState } from "react";
import Nav from "./component/Nav";
import Page from "./component/Page";
import "./App.css";
import PresentDefult from "./component/PresentDefult";
import alertify from "alertifyjs";
import resimm from "./component/logos/sherlock.png";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const resim = `<img alt="lh" width="50px" src=${resimm}/>`;

  const clickHandler = (e) => {
    if (e.target.innerText === "Feed") {
      setIsOpen(true);
      alertify.set("notifier", "position", "bottom-right");
      alertify.success(resim + " Yeah, you found it !", 3);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <div className="d-flex flex-row App">
      <Nav handler={(e) => clickHandler(e)} />
      {isOpen ? <Page /> : <PresentDefult />}
    </div>
  );
}
