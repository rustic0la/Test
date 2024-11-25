import React, { useState, useEffect, useRef } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className = "" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "50px",
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="lazy-image" ref={imgRef}>
      <div
        className={`lazy-image__placeholder ${
          isLoaded ? "lazy-image__placeholder--hidden" : ""
        }`}
      />
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`lazy-image__img ${className} ${
            isLoaded ? "lazy-image__img--loaded" : ""
          }`}
          onLoad={handleLoad}
        />
      )}
    </div>
  );
};

export default LazyImage;
