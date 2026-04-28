'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import Overlay from './Overlay';

const FRAME_COUNT = 75;
const PRELOAD_CONCURRENCY = 10;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Load an individual image
  const loadImage = (index: number): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const paddedIndex = String(index).padStart(2, '0');
      img.src = `/sequence/frame_${paddedIndex}_delay-0.066s.webp`;
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error(`Failed to load image index ${index}`));
    });
  };

  useEffect(() => {
    const preloadImages = async () => {
      const loadedImages: HTMLImageElement[] = new Array(FRAME_COUNT);
      const loadPromises: Promise<void>[] = [];
      let currentIndex = 0;

      const loadNext = async (): Promise<void> => {
        if (currentIndex >= FRAME_COUNT) return;
        
        const index = currentIndex++;
        
        try {
          const img = await loadImage(index);
          loadedImages[index] = img;
        } catch (error) {
          console.error(error);
        } finally {
          await loadNext();
        }
      };

      // Start initial concurrent loads
      for (let i = 0; i < PRELOAD_CONCURRENCY && i < FRAME_COUNT; i++) {
        loadPromises.push(loadNext());
      }

      await Promise.all(loadPromises);
      setImages(loadedImages);
      setLoaded(true);

      // Draw initial frame if available
      if (loadedImages[0] && canvasRef.current) {
        drawFrame(canvasRef.current, loadedImages[0]);
      }
    };

    preloadImages();
  }, []);

  const drawFrame = (canvas: HTMLCanvasElement, img: HTMLImageElement) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions logic -> cover strategy
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    // Clear and draw image matching 'object-fit: cover' behavior
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.fillStyle = '#121212';
    // ctx.fillRect(0, 0, canvas.width, canvas.height); 
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (!loaded || !canvasRef.current || images.length === 0) return;

    // Map scroll progress (0-1) to frame index
    let frameIndex = Math.floor(latest * (FRAME_COUNT - 1));
    // Fallbacks
    if (frameIndex < 0) frameIndex = 0;
    if (frameIndex >= FRAME_COUNT) frameIndex = FRAME_COUNT - 1;

    const img = images[frameIndex];
    if (img) {
      drawFrame(canvasRef.current, img);
    }
  });

  // Handle window resize for canvas drawing
  useEffect(() => {
    const handleResize = () => {
      const currentProgress = scrollYProgress.get();
      let frameIndex = Math.floor(currentProgress * (FRAME_COUNT - 1));
      if (frameIndex < 0) frameIndex = 0;
      if (frameIndex >= FRAME_COUNT) frameIndex = FRAME_COUNT - 1;
      
      const img = images[frameIndex];
      if (img && canvasRef.current) {
         drawFrame(canvasRef.current, img);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [images, scrollYProgress]);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: '500vh' }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#121212]">
        {!loaded && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#121212] text-white/50 text-sm tracking-widest uppercase">
            Loading Experience...
          </div>
        )}
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
        />
        {/* Render overlay on top of the sticky canvas */}
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}
