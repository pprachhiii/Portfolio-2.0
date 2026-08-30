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
      setCurrent((previous) => (previous + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [images.length]);

  const next = () => {
    setCurrent((previous) => (previous + 1) % images.length);
  };

  const previous = () => {
    setCurrent(
      (previous) =>
        (previous - 1 + images.length) % images.length
    );
  };

  const image = images[current];

  return (
    <div className="w-full">
      {/* IMAGE */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <img
          key={image.src}
          src={image.src}
          alt={image.caption}
          className="w-full aspect-video object-cover transition-opacity duration-700"
        />

        {/* PREVIOUS */}
        {images.length > 1 && (
          <button
            onClick={previous}
            aria-label="Previous image"
            className="
              absolute left-4 top-1/2 -translate-y-1/2
              h-10 w-10 rounded-full
              border border-white/20
              bg-black/50
              text-white
              backdrop-blur-md
              transition
              hover:bg-black/80
            "
          >
            ←
          </button>
        )}

        {/* NEXT */}
        {images.length > 1 && (
          <button
            onClick={next}
            aria-label="Next image"
            className="
              absolute right-4 top-1/2 -translate-y-1/2
              h-10 w-10 rounded-full
              border border-white/20
              bg-black/50
              text-white
              backdrop-blur-md
              transition
              hover:bg-black/80
            "
          >
            →
          </button>
        )}
      </div>

      {/* CAPTION */}
      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-cyan-500">
            Project View
          </p>

          <p className="max-w-3xl text-sm leading-7 text-white/60">
            {image.caption}
          </p>
        </div>

        <span className="shrink-0 text-xs tracking-[0.2em] text-white/30">
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(images.length).padStart(2, "0")}
        </span>
      </div>

      {/* DOTS */}
      {images.length > 1 && (
        <div className="mt-5 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to image ${index + 1}`}
              className={`h-1 transition-all duration-300 ${
                index === current
                  ? "w-10 bg-cyan-500"
                  : "w-4 bg-white/20"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}