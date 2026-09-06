import { faChain } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card } from "react-bootstrap";

function GalleryItem({ itm, handleShow }) {
  // console.log("===========", index);
  return (
    <Card
      className=" gallery-item h-100 shadow-sm  overflow-hidden"
      style={{ cursor: "pointer", transition: "transform 0.2s" }}
      onClick={() => handleShow(itm.slug)}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
      <Card.Img
        src={import.meta.env.BASE_URL + "/" + itm.image}
        alt={itm.title}
        style={{ aspectRatio: "16/9", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <>
          <Card.Title className="text-capitalize h5 mb-2">
            {itm.title}
          </Card.Title>
          <Card.Text className="small text-muted mb-0">{itm.desc}</Card.Text>
          <div className="glass-hover capitalize flex">
            {itm.url ? (
              <span>
                <a
                  href={itm.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit-btn">
                  visit website
                  <FontAwesomeIcon icon={<faChain />} />
                </a>
              </span>
            ) : (
              <span className="visit-btn out">Outdated Project</span>
            )}
          </div>
        </>
        {/* <div className="text-primary small mt-3 fw-bold">View Case Study →</div> */}
      </Card.Body>
    </Card>
  );
}

export default GalleryItem;
