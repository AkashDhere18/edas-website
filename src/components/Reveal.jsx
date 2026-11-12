"use client";
import { useEffect, useRef, useState } from "react";

// Scroll-reveal wrapper (fade + slide up, like Elementor's "fadeInUp").
// <Reveal delay={150}> ... </Reveal>   direction: "up" | "left" | "right"
export default function Reveal({ children, delay = 0, direction = "up", className = "" }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setSeen(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const hidden = direction === "left" ? "-translate-x-10" : direction === "right" ? "translate-x-10" : "translate-y-10";
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${seen ? "translate-x-0 translate-y-0 opacity-100" : `opacity-0 ${hidden}`} ${className}`}>
      {children}
    </div>
  );
}
