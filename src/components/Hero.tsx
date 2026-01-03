import { useRef, useState } from "react";
import Button from "./Button";
import { TiArrowLeft, TiLocationArrow } from "react-icons/ti";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState(1);

  const totalVideo = 3;
  const nextVideoRef = useRef(null);

  const handleMiniVideoClick = () => {
    setHasClicked(true);

    // Rotating the number -> DSA: Rotating array qustion, practical implementation
    // setLoadedVideos((prev) => (totalVideo + 1) % prev)
    // or
    setCurrentIndex(() => (currentIndex % totalVideo) + 1);
  };

  const getVideoSource = (idx: number): string => {
    return `/videos/hero-${idx}.mp4`;
  };

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
              onClick={handleMiniVideoClick}
            >
              <video
                ref={nextVideoRef}
                src={getVideoSource(currentIndex + 1)}
                loop
                muted
                autoPlay
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
              ></video>
            </div>
          </div>

          <video
            id="next-video"
            loop
            muted
            src={getVideoSource(currentIndex)}
            className="absolute-center absolute z-20 invisible size-64 object-center object-cover"
            onLoadedData={handleVideoLoad}
          ></video>

          <video
            src={getVideoSource(
              currentIndex === totalVideo - 1 ? 1 : currentIndex
            )}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          ></video>
        </div>
        <h1 className="hero-heading special-font absolute z-40 right-5 bottom-5 text-blue-75">
          G<b>a</b>ming
        </h1>
        <div className="absolute z-40 top-0 left-0 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              Redefi<b>n</b>e
            </h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the Metegame Layer <br /> Unleash the Play Economy
            </p>
            <Button
              id={"watch-trailer"}
              title={"Watch Trailer"}
              leftIcon={<TiLocationArrow />}
              containerClass={"bg-yellow-300 flex-center gap-1"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
