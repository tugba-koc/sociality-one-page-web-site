import React from "react";
import "../style/submenus.css";
import { BsDot } from "react-icons/bs";
import { accordionData } from "./acordionData";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

export default function Part1(props) {
  const styling = (e) => {
    e.target.classList.toggle("active");
    e.target.querySelector("svg").classList.toggle("white");
  };


  return (
    <Accordion allowMultipleExpanded>
      {accordionData.map((item, index) => (
        <div key={index}>
          <AccordionItem>
            <AccordionItemHeading onClick={(e) => styling(e)}>
              <AccordionItemButton>
                {item.item} {item.title}{" "}
                <AccordionItemState>
                  {({ expanded }) => (expanded ? item.minus : item.plus)}
                </AccordionItemState>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {" "}
              {item.contents ? (
                item.contents.map((content, index) => (
                  <div key={index} className="d-flex flex-row dotted-item ">
                    <BsDot style={{ paddingTop: "5px" }} />{" "}
                    <p
                      className="text-center"
                      style={{ marginBottom: "10px", marginLeft: "14px" }}
                      onClick={props.handler}
                      
                      
                    >
                      {content}
                    </p>{" "}
                  </div>
                ))
              ) : (
                <div></div>
              )}
            </AccordionItemPanel>
          </AccordionItem>
        </div>
      ))}
    </Accordion>
  );
}
