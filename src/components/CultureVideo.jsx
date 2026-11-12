// import Reveal from "@/components/Reveal";

// // Culture video shown under "Why Join". To use your own video, replace public/videos/culture.mp4
// // (and public/images/culture-poster.jpg, the thumbnail shown before play) keeping the same file names.
// export default function CultureVideo({ src = "/videos/culture.mp4", poster = "/images/culture-poster.jpg" }) {
//   return (
//     <section className="pb-16 md:pb-24">
//       <div className="container-x">
//         <Reveal>
//           <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-brand-navy shadow-2xl ring-1 ring-slate-200">
//             <video className="aspect-video w-full" controls playsInline preload="metadata" poster={poster}>
//               <source src={src} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }

// Rounded video player. To use your own video, replace public/videos/culture.mp4
// (and public/images/culture-poster.jpg, the thumbnail shown before play) keeping the same file names.
// export default function CultureVideo({ src = "/videos/culture.mp4", poster = "/images/culture-poster.jpg", className = "" }) {
//   return (
//     <div className={`overflow-hidden rounded-3xl bg-brand-navy shadow-xl ${className}`}>
//       <video className="aspect-video w-full" controls playsInline preload="metadata" poster={poster}>
//         <source src={src} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// }

"use client";
import { useEffect, useRef } from "react";

// Rounded video player that autoplays (muted, looping) when scrolled into view and pauses when out of view.
// Browsers only allow autoplay for muted videos. Viewers can still unmute / pause with the controls.
// To use your own video, replace public/videos/culture.mp4 (and public/images/culture-poster.jpg,
// the thumbnail shown before play) keeping the same file names.
export default function CultureVideo({ src = "/videos/culture.mp4", poster = "/images/culture-poster.jpg", className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true; // React doesn't always apply the `muted` attribute, so set it directly
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return; // respect reduced-motion: don't autoplay
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) v.play().catch(() => {}); else v.pause(); },
      { threshold: 0.4 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <div className={`overflow-hidden rounded-3xl bg-brand-navy shadow-xl ${className}`}>
      <video ref={ref} className="aspect-video w-full" controls muted loop playsInline preload="metadata" poster={poster}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}