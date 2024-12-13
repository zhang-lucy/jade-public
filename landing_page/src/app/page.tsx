import GalleryCard from "@/components/GalleryCard";
import GalleryColumn from "@/components/GalleryColumn";

export default function Home() {
  
  const pinkImages = [
    "/images/pink0.png",
    "/images/pink1.png",
    "/images/pink3.png",
    "/images/pink2.png",
  ];

  const redImages = [
    "/images/red0.png",
    "/images/red1.png",
    "/images/red2.png",
    "/images/pink3.png",
  ];

  const blueImages = [
    "/images/blue0.png",
    "/images/blue1.png",
    "/images/blue2.png",
    "/images/blue4.png",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Main Content Block */}
      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Left Content Block */}
        <div className="flex flex-col w-full lg:w-[45%]">
          <div className="p-8 lg:p-12 flex-1 bg-white">
            <header className="text-xl font-bold text-black pb-16 lg:pb-32">
              ltrainventures.
            </header>
            <div className="text-left lg:text-left pr-0 lg:pr-16">
              <h1 className="text-gray-900 text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                Empowering Creators. Redefining Workflows.
              </h1>
              <p className="text-base lg:text-lg text-gray-500 mb-8">
                Cutting-edge AI tools that revolutionize how creators, brands,
                and innovators work. Scale your vision, streamline your process,
                and unlock your full potential with solutions built to push
                boundaries.
              </p>
            </div>
          </div>
        </div>

        {/* Right Content Block */}
        <div className="w-full lg:w-[55%] max-h-screen overflow-hidden">
          {/* Single row of first images when content is pushed to the next row */}
          <div className="flex gap-4 justify-center lg:hidden">
            <GalleryCard index={0} image={pinkImages[0]} />
            <GalleryCard index={0} image={pinkImages[1]} />
            <GalleryCard index={0} image={pinkImages[2]} />
          </div>

          {/* Full gallery with cropped height */}
          <div className="hidden lg:flex flex-nowrap gap-4 overflow-hidden">
            <GalleryColumn offset={-64} images={pinkImages} />
            <GalleryColumn offset={-32} images={blueImages} />
            <GalleryColumn offset={0} images={redImages} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white text-center py-6 text-sm text-gray-400">
        Copyright &copy; 2024 LTrainVentures
      </footer>
    </div>
  );
}
