import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { BiChalkboard } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { GoCommentDiscussion } from "react-icons/go";
import { GiMusicalNotes } from "react-icons/gi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import "../style/submenus.css";

export const accordionData = [
  {
    title: "NOTIFICATION",
    item: <IoIosNotificationsOutline className="notification" />,
    plus: (
      <div
        className="ms-auto"
        style={{
          padding: "0px 5px",
          fontSize: "10px",
          border: "1px solid cyan",
          borderRadius: "10%",
          color: "white",
          pointerEvents: "none",
        }}
      >
        29
      </div>
    ),
    minus: (
      <div
        className="ms-auto"
        style={{
          padding: "0px 5px",
          fontSize: "10px",
          border: "1px solid cyan",
          borderRadius: "10%",
          color: "white",
          pointerEvents: "none",
        }}
      >
        29
      </div>
    ),
  },
  {
    title: "SUMMARY",
    item: <BiChalkboard className="notification" />,
    contents: ["xxx", "yyy"],
    plus: <AiOutlinePlus className="right-icon" />,
    minus: <AiOutlineMinus className="right-icon" />,
  },
  {
    title: "PUBLISH",
    item: <FiEdit className="notification" />,
    contents: ["Compose", "Feed"],
    plus: <AiOutlinePlus className="right-icon" />,
    minus: <AiOutlineMinus className="right-icon" />,
  },
  {
    title: "ENGAGE",
    item: <GoCommentDiscussion className="notification" />,
    contents: ["zzz", "ttt"],
    plus: <AiOutlinePlus className="right-icon" />,
    minus: <AiOutlineMinus className="right-icon" />,
  },
  {
    title: "LISTEN",
    item: <GiMusicalNotes className="notification" />,
    contents: ["qqq", "hhh"],
    plus: <AiOutlinePlus className="right-icon" />,
    minus: <AiOutlineMinus className="right-icon" />,
  },
  {
    title: "REPORT",
    item: <HiOutlineDocumentReport className="notification" />,
    contents: ["aaa", "klhıh"],
    plus: <AiOutlinePlus className="right-icon" />,
    minus: <AiOutlineMinus className="right-icon" />,
  },
];
