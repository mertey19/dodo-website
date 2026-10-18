"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!element || motionPreference.matches || !window.IntersectionObserver || !element.animate) return;
    // Above-the-fold content stays still and visible, including before hydration.
    if (element.getBoundingClientRect().top < window.innerHeight) return;
    let animation: Animation | undefined;
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      observer.disconnect();
      if (!motionPreference.matches) {
        animation = element.animate(
          [{ transform: "translateY(16px)" }, { transform: "translateY(0)" }],
          { duration: 450, delay: delay * 1000, easing: "cubic-bezier(.22,1,.36,1)" },
        );
      }
    }, { threshold: 0.1 });
    const handleMotionChange = () => { if (motionPreference.matches) animation?.cancel(); };
    motionPreference.addEventListener("change", handleMotionChange);
    observer.observe(element);
    return () => {
      observer.disconnect();
      animation?.cancel();
      motionPreference.removeEventListener("change", handleMotionChange);
    };
  }, [delay]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
