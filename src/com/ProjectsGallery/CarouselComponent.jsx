import React from "react";
import { Carousel as BootstrapCarousel, Button } from "react-bootstrap";

function CarouselComponent({ items, activeIndex, handleSelect }) {
  return (
    <BootstrapCarousel
      activeIndex={activeIndex}
      onSelect={handleSelect}
      interval={null} // Disables auto-sliding
      indicators={false}
      className="w-100 h-100">
      {items.map((itm) => (
        <BootstrapCarousel.Item key={itm.slug}>
          {/* Main Slide Container */}
          <div className="position-relative bg-black w-100 d-flex justify-content-center align-items-center">
            {/* Image Component */}
            <img
              className="d-block w-100"
              src={import.meta.env.BASE_URL + "/" + itm.image}
              alt={itm.title}
              style={{
                maxHeight: "75vh",
                aspectRatio: "16/10",
                objectFit: "contain",
                paddingBottom: "80px",
              }}
            />

            {/* Custom Styled Carousel Caption Overlay */}
            <BootstrapCarousel.Caption
              className="px-3 py-2 rounded position-absolute bottom-0 start-0 end-0 m-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0) 100%)",
                textAlign: "left",
              }}>
              <div className="container-fluid p-0">
                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3">
                  {/* Left Text Block */}
                  <div>
                    <h5 className="text-capitalize text-white fw-bold mb-1 m-0">
                      {itm.title}
                    </h5>
                    <p className="small text-light text-opacity-75 mb-0 d-none d-md-block">
                      {itm.longDesc}
                    </p>
                  </div>

                  {/* Right Action Button Block */}
                  {itm.url && (
                    <div className="text-nowrap">
                      <Button
                        variant="primary"
                        size="sm"
                        href={itm.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fw-bold px-3 py-2">
                        Visit Project Website ↗
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </BootstrapCarousel.Caption>
          </div>
        </BootstrapCarousel.Item>
      ))}
    </BootstrapCarousel>
  );
}

export default CarouselComponent;
