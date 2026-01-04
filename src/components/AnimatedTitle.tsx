import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

interface ButtonProps {
  title: string;
  containerClass?: string;
}

const AnimatedTitle = ({ title, containerClass }: ButtonProps) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: { // end and toggleActions are the configurations of scrolltrigger
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.to(".animated-word", {
        opacity: 1,
        delay: 0.5,
        transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0deg)",
        ease: "power2.inOut",
        stagger: 0.08,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);
  return (
    <div>
      <div
        ref={containerRef}
        className={`animated-title ${containerClass ?? ""}`}
      >
        {title.split("<br />").map((line, idx) => (
          <div
            key={idx}
            className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
          >
            {line.split(" ").map((word, i) => (
              <span
                key={i}
                className="animated-word"
                dangerouslySetInnerHTML={{ __html: word }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedTitle;
