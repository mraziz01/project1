import { useEffect, useRef } from "react";

const HeroSection = () => {
  const shoeImageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (shoeImageRef.current) {
        const scrollY = window.scrollY;
        shoeImageRef.current.style.transform = `translateY(${scrollY * 0.5}px)`; // Adjust the multiplier for speed
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="flex flex-col lg:flex-row items-center justify-between container mx-auto max-w-7xl min-h-screen px-6 relative overflow-hidden">
      {/* Left Content */}
      <div className="flex flex-col justify-center gap-8 max-w-2xl h-full py-12 lg:py-0 z-10">
        <h1 className="font-raleway font-semibold text-5xl lg:text-6xl xl:text-7xl leading-[1.1]">
          STEP INTO STYLE WITH NIKE
        </h1>
        <p className="font-raleway font-medium text-gray-700 text-lg">
          Elevate your game with the latest Nike shoes. Designed for performance, comfort, and style, Nike shoes are the perfect choice for athletes and trendsetters alike. Step into the future of footwear today.
        </p>

        {/* Buttons */}
        <div className="flex gap-6">
          <button className="bg-red-600 text-white font-medium px-8 py-3 text-lg hover:bg-red-700 transition-colors">
            Shop Now
          </button>
          <button className="bg-transparent text-gray-700 border border-gray-700 px-8 py-3 text-lg hover:bg-gray-100 transition-colors">
            Explore Collection
          </button>
        </div>
      </div>

      <div
        ref={shoeImageRef}
        className="hidden lg:flex flex-1 justify-end items-center h-full z-10"
      >
        <img
          src="/images/hero-image.png"
          alt="hero-image"
          className="w-full max-w-[400px] h-auto object-contain"
        />
      </div>
      <div className="lg:hidden absolute inset-0 z-0">
        <img
          src="/images/hero-image.png"
          alt="hero-image"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
    </main>
  );
};

export default HeroSection;