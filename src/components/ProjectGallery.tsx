import { useEffect, useState } from "react";
import type { ProjectImage } from "../data/projects";

interface ProjectGalleryProps {
  images: ProjectImage[];
}

export default function ProjectGallery({
  images,
}: ProjectGalleryProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent(
        (previous) => (previous + 1) % images.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const next = () => {
    setCurrent(
      (previous) => (previous + 1) % images.length
    );
  };

  const previous = () => {
    setCurrent(
      (previous) =>
        (previous - 1 + images.length) % images.length
    );
  };

  if (!images.length) return null;

  const image = images[current];

  return (
    <div className="project-gallery">

      {/* IMAGE */}
      <div className="gallery-frame">

        <img
          key={image.src}
          src={image.src}
          alt={image.caption}
          className="gallery-image"
        />

        <div className="gallery-overlay" />

        {/* CONTROLS */}
        {images.length > 1 && (
          <>
            <button
              onClick={previous}
              aria-label="Previous image"
              className="gallery-control gallery-control--previous"
            >
              <span>←</span>
            </button>

            <button
              onClick={next}
              aria-label="Next image"
              className="gallery-control gallery-control--next"
            >
              <span>→</span>
            </button>
          </>
        )}

        {/* COUNTER */}
        <div className="gallery-counter">
          <span>
            {String(current + 1).padStart(2, "0")}
          </span>

          <span className="counter-divider">
            /
          </span>

          <span>
            {String(images.length).padStart(2, "0")}
          </span>
        </div>

      </div>

      {/* CAPTION */}
      <div className="gallery-caption-row">
        <p className="gallery-caption">
          {image.caption}
        </p>
      </div>

      {/* DOTS */}
      {images.length > 1 && (
        <div className="gallery-navigation">
          <div className="gallery-progress">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Go to image ${index + 1}`}
                className={`gallery-dot ${
                  index === current
                    ? "gallery-dot--active"
                    : ""
                }`}
              />
            ))}
          </div>

          
        </div>
      )}

    </div>
  );
}