import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Slow scroll function
  const slowScrollToTop = () => {
    const scrollStep = -window.scrollY /50; // Determines step size for scrolling (the higher the divisor, the slower the scroll)
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15); // Step every 15 milliseconds (this determines the smoothness)
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <>
          <div
            className="scroll-top btn btn-lg btn-lg-square"
            style={{ backgroundColor: "#f88f4a", display: "inline-table" }}
            onClick={slowScrollToTop} // Trigger slow scroll
          >
            <i className="bi bi-arrow-up align-center" style={{ color: "white" }}></i>
          </div>
        </>
      )}
    </>
  );
}
