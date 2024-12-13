import React from "react";
import Image from "next/image";

interface GalleryCardProps {
  index: number;
  image: string;
}

const GalleryCard = ({ index, image }: GalleryCardProps) => {
  return (
    <div
      key={index}
      className={`relative w-48 h-64 rounded-md overflow-hidden ${
        index === 0 ? "block" : "hidden sm:block"
      }`}
    >
      <Image
        src={image}
        alt={`Gallery image ${image}`}
        fill
        style={{
          objectFit: "cover", // Makes the image fill the container
          objectPosition: "center", // Ensures the image is cropped from the center
        }}
      />
    </div>
  );
};

export default GalleryCard;
