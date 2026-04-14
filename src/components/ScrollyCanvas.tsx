"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { ScrollContext } from "./ScrollContext";

export const FRAME_COUNT = 65;
export const MAX_SCROLL_HEIGHT = "500vh";

function padZero(num: number) {
  return num.toString().padStart(3, "0");
}

export default function ScrollyCanvas({
  children,
}: {
  children?: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  // Use Scroll hooks
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform scroll progress to a frame index (0 to FRAME_COUNT - 1)
  const currentFrame = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    let _loadedCount = 0;
    const loadImages = async () => {
      const promises = [];
      for (let i = 1; i <= FRAME_COUNT; i++) {
        promises.push(
          new Promise<HTMLImageElement>((resolve) => {
            const img = new Image();
            img.onload = () => {
              _loadedCount++;
              setProgress(Math.round((_loadedCount / FRAME_COUNT) * 100));
              resolve(img);
            };
            // e.g. /sequence/ezgif-frame-001.png
            img.src = `/sequence/ezgif-frame-${padZero(i)}.png`;
          })
        );
      }
      const loadedImages = await Promise.all(promises);
      imagesRef.current = loadedImages;
      setLoaded(true);
    };

    loadImages();
  }, []);

  const drawFrame = (frameIndex: number) => {
    if (!canvasRef.current || imagesRef.current.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[Math.round(frameIndex)];
    if (!img) return;

    // object-fit: cover logic
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;
    
    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      // Canvas is wider than image (e.g. standard landscape monitor)
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      // Canvas is taller than image (e.g. mobile screen)
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    // Draw synchronously to avoid race conditions with framer-motion's internal rAF
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useMotionValueEvent(currentFrame, "change", (latestVal) => {
    if (loaded) {
      drawFrame(latestVal);
    }
  });

  // Re-draw and handle resize
  useEffect(() => {
    const resizeCanvas = () => {
      if (!canvasRef.current) return;
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      if (loaded) {
        drawFrame(currentFrame.get());
      }
    };
    
    // Initial size
    resizeCanvas();
    
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);

  return (
    <ScrollContext.Provider value={scrollYProgress}>
      <div
        ref={containerRef}
        style={{ height: MAX_SCROLL_HEIGHT }}
        className="relative w-full bg-[#121212]"
      >
        <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
          {!loaded && (
            <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#121212]">
              <div className="text-white/50 animate-pulse text-sm uppercase tracking-widest">
                Loading Sequence ({progress}%)
              </div>
            </div>
          )}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 h-full w-full object-cover z-0"
          />
          {/* Render overlay children here */}
          <div className="absolute inset-0 z-10">{children}</div>
        </div>
      </div>
    </ScrollContext.Provider>
  );
}
