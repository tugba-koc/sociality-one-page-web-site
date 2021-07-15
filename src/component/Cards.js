import fetch from "node-fetch";
import React, { useEffect, useState } from "react";
import "../style/cards.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardSubtitle,
  Row,
  Col,
} from "reactstrap";

import { AiOutlineLike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { FiShare2 } from "react-icons/fi";
import { BsEye } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BiShapeSquare } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import { RiForbid2Line } from "react-icons/ri";
import { VscCheck } from "react-icons/vsc";
import uuid from "react-uuid";

export default function Cards() {
  const [cardsJune, setCardsJune] = useState([]);
  const [cardsJuly, setCardsJuly] = useState([]);

  const onError = (e) => {
    e.target.src = "./no-post-image.png";
  };

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) =>
        setCardsJune(
          data.posts_by_date.June_17_2021.map((card) => ({
            ...card,
            id: uuid(),
          }))
        )
      );
  }, []);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) =>
        setCardsJuly(
          data.posts_by_date.July_01_2021.map((cardJuly) => ({
            ...cardJuly,
            id: uuid(),
          }))
        )
      );
  }, []);

  const deleteHandler = (id) => {
    const June = cardsJune.filter((card) => {
      return card.id !== id;
    });

    setCardsJune(June);
  };

  const deleteHandlerJuly = (id) => {
    const July = cardsJuly.filter((cardJuly) => {
      return cardJuly.id !== id;
    });

    setCardsJuly(July);
  };

  return (
    <div>
      {/* June */}
      <h2 className="head-line">17 June 2021</h2>
      <Row>
        {cardsJune.length <= 0 && <div>There is no posts for today.</div>}
        {cardsJune.length > 0 && (
          <Row style={{paddingLeft:"0", paddingRight:"0"}}>
            {cardsJune.map((card) => (
              <Col style={{paddingRight:"0", paddingLeft:"30px"}}  key={card.id} xs={"4"}>
                <Card className="main-card">
                  <div className="d-flex flex-row">
                    <div className={`style-${card.status}`}>
                      <div>
                        {card.account.channel === "twitter" && (
                          <FaTwitter className="card-post-type" />
                        )}
                      </div>
                      <div>
                        {card.account.channel === "instagrambusiness" && (
                          <FaInstagram className="card-post-type" />
                        )}
                      </div>
                      <div>
                        {card.account.channel === "facebook" && (
                          <FaFacebookF className="card-post-type" />
                        )}
                      </div>
                    </div>
                    <CardBody>
                      <div className="d-flex flex-row">
                        <CardSubtitle tag="h6" className="mb-4 text-muted">
                          {card.published_at}
                        </CardSubtitle>

                        {/* dropdown start */}
                        <div
                          style={{ marginTop: "-8px" }}
                          className="dropdown ms-auto"
                        >
                          <RiDeleteBinLine
                            onClick={() => deleteHandler(card.id)}
                            style={{
                              fontSize: "20px",
                              color: "grey",
                              marginRight: "16px",
                            }}
                          />
                          <a
                            href="/"
                            style={{
                              color: "grey",
                            
                            }}
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <BsThreeDots />
                          </a>
                          <ul
                            style={{ minWidth: "30px" }}
                            className="dropdown-menu dropdown-menu-end "
                            aria-labelledby="dropdownMenuButton1"
                          >
                            <li>
                              <a href="/" className="dropdown-item">
                                aaa
                              </a>
                            </li>
                            <li>
                              <a href="/" className="dropdown-item">
                                bbb
                              </a>
                            </li>
                            <li>
                              <a href="/" className="dropdown-item">
                                ccc
                              </a>
                            </li>
                          </ul>
                        </div>

                        {/* dropdown end */}
                      </div>
                      <CardText>{card.entry.message}</CardText>
                      <CardImg
                        top
                        width="100%"
                        src={card.entry.image}
                        alt="Card-image"
                        onError={(e) => onError(e)}
                      />
                      {/*  image end */}

                      {/* like-comment-share start */}
                      <div className="statistics-line d-flex align-items-center">
                        {card.account.channel !== "twitter" ? (
                          <div>
                            <AiOutlineLike className="like" /> {card.like}
                            <BiComment className="comment" /> {card.comment}
                            <FiShare2 className="share" /> {card.share}
                            <BsEye className="watched" /> {card.watched}
                          </div>
                        ) : (
                          <div>
                            <BsHeart className="like" /> {card.like}
                            <FiShare2 className="share" /> {card.share}
                            <BiShapeSquare className="comment" /> {card.comment}
                            <BsEye className="watched" /> {card.watched}
                          </div>
                        )}
                      </div>
                    </CardBody>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Row>

      {/* July */}
      <h2 className="head-line">01 July 2021</h2>
      <Row>
      {cardsJuly.length <= 0 && <div className="mb-5">There is no posts for today.</div>}
        {cardsJuly.length > 0 && (
          <Row style={{paddingLeft:"0", paddingRight:"0"}}>
        {cardsJuly.map((cardJuly) => (
          <Col style={{paddingRight:"0", paddingLeft:"30px"}} key={cardJuly.id} xs={"4"}>
            <Card className="main-card">
              <div className="d-flex flex-row">
                <div className={`style-${cardJuly.status}`}>
                  <div>
                    {cardJuly.account.channel === "twitter" && (
                      <FaTwitter className="card-post-type" />
                    )}
                  </div>
                  <div>
                    {cardJuly.account.channel === "instagrambusiness" && (
                      <FaInstagram className="card-post-type" />
                    )}
                  </div>
                  <div>
                    {cardJuly.account.channel === "facebook" && (
                      <FaFacebookF className="card-post-type" />
                    )}
                  </div>
                </div>
                <CardBody>
                  <div className="d-flex flex-row">
                    <CardSubtitle tag="h6" className="mb-4 text-muted">
                      {cardJuly.published_at}
                    </CardSubtitle>

                    {/* dropdown start */}
                    <div
                      style={{ marginTop: "-8px" }}
                      className="dropdown ms-auto"
                    >
                      {cardJuly.status === 1 && <RiForbid2Line style={{
                          fontSize: "20px",
                          color: "grey",
                          marginRight: "16px",
                        }}/>}
                        {cardJuly.status === 0 && <VscCheck style={{
                          fontSize: "20px",
                          color: "grey",
                          marginRight: "16px",
                        }}/>}
                      <RiDeleteBinLine
                        onClick={() => deleteHandlerJuly(cardJuly.id)}
                        style={{
                          fontSize: "20px",
                          color: "grey",
                          marginRight: "16px",
                        }}
                      />
                      <a
                        href="/"
                        style={{
                          color: "grey",
                         
                        }}
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <BsThreeDots />
                      </a>
                      <ul
                        style={{ minWidth: "30px" }}
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a href="/" className="dropdown-item">
                            aaa
                          </a>
                        </li>
                        <li>
                          <a href="/" className="dropdown-item">
                            bbb
                          </a>
                        </li>
                        <li>
                          <a href="/" className="dropdown-item">
                            ccc
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* dropdown end */}
                  </div>
                  <CardText>{cardJuly.entry.message}</CardText>
                  <CardImg
                    top
                    width="100%"
                    src={cardJuly.entry.image}
                    alt="Card-image"
                    onError={(e) => onError(e)}
                  />
                  {/*  image end */}

                  {/* like-comment-share start */}
                  <div className="statistics-line d-flex align-items-center">
                    {cardJuly.account.channel !== "twitter" ? (
                      <div>
                        <AiOutlineLike className="like" /> {cardJuly.like}
                        <BiComment className="comment" /> {cardJuly.comment}
                        <FiShare2 className="share" /> {cardJuly.share}
                        <BsEye className="watched" /> {cardJuly.watched}
                      </div>
                    ) : (
                      <div>
                        <BsHeart className="like" /> {cardJuly.like}
                        <FiShare2 className="share" /> {cardJuly.share}
                        <BiShapeSquare className="comment" /> {cardJuly.comment}
                        <BsEye className="watched" /> {cardJuly.watched}
                      </div>
                    )}
                  </div>
                </CardBody>
              </div>
            </Card>
          </Col>
        ))}
      </Row>)}</Row>
    </div>
  );
}
