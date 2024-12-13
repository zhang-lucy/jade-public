import React from "react";
import Image from "next/image";
import GalleryCard from "./GalleryCard";

interface GalleryColumnProps {
  offset?: number; // Offset for styling
  images: string[]; // Array of image URLs
}

const GalleryColumn = ({ offset = 0, images }: GalleryColumnProps) => {
  return (
    <div
      className={`flex flex-col gap-4`}
      style={{
        transform: `translateY(${offset}px)`,
      }}
    >
      {images.map((src, index) => (
        <GalleryCard index={index} image={src} />
      ))}
    </div>
  );
};

export default GalleryColumn;
