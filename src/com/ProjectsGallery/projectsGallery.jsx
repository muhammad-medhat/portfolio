import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Modal,
  Carousel,
  CardTitle,
  CardText,
} from "react-bootstrap";
import GalleryItem from "./GalleryItem";
import CarouselComponent from "./CarouselComponent";
import Tabs from "./tabs";
import "./gallery.css";

function projectsGallery({ items }) {
  const [show, setShow] = useState(false);

  const [activeSlug, setActiveSlug] = useState(""); // Track by unique slug, not index
  const [filteredItems, setFilteredItems] = useState(items); // Your filtered list state
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {});

  const catsObject = {
    wp: 1,
    js: 2,
    ud: 3,
  };
  const cleanText = (slug) => {
    return slug.replaceAll(" ", "-").replaceAll(".", "-");
  };

  const handleShow = (slug) => {
    setActiveSlug(slug);
    setShow(true);
  };
  // 2. Find the correct index in the CURRENT FILTERED LIST for the carousel
  const activeIndexInFiltered =
    filteredItems && filteredItems.findIndex((itm) => itm.slug === activeSlug);
  const handleSelect = (selectedIndex) => {
    // 3. Update the slug based on what slide the user clicks/swipes to
    setActiveSlug(filteredItems[selectedIndex].slug);
  };
  const handleFilterChange = (categoryCode) => {
    debugger;
    if (categoryCode === "all") {
      setFilteredItems(items); // Reset to full list
    } else {
      // Assuming 'cat' matches category codes like "wp", "js", "ud"
      const filtered = items.filter((itm) => itm.cat === categoryCode);
      setFilteredItems(filtered);
    }
  };
  const showTab = (e) => {
    e.preventDefault();
    const cat = e.target.dataset.cat;
    setActiveCategory(cat);
    //remove class
    const navLinks = document
      .querySelectorAll(".gallery .nav-item.nav-link ")
      .forEach((l) => l.classList.remove("active"));
    e.target.classList.add("active");
    handleFilterChange(catsObject[cat] || "all");
  };
  return (
    <Container className="gallery my-5">
      <Tabs showTab={showTab} />

      {/* Responsive Gallery Grid */}
      <Row className="g-4">
        {filteredItems &&
          filteredItems.map((itm) => (
            <Col key={itm.slug} xs={12} sm={6} md={4}>
              <GalleryItem
                itm={itm}
                handleShow={handleShow} // No longer passing 'index' down
              />
            </Col>
          ))}
      </Row>
      {/* Lightbox Modal Component */}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
        size="lg"
        contentClassName="bg-transparent border-0">
        <Modal.Body className="p-0 position-relative">
          {/* Close Button overlay */}
          <button
            type="button"
            className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
            style={{ zIndex: 1050 }}
            onClick={() => setShow(false)}
            aria-label="Close"></button>

          {/* Carousel component */}
          <CarouselComponent
            items={filteredItems}
            activeIndex={activeIndexInFiltered >= 0 ? activeIndexInFiltered : 0}
            handleSelect={handleSelect}
          />
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default projectsGallery;
