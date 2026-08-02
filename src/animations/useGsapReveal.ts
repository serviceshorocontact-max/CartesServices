"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface UseGsapRevealOptions {
  delay?: number;
  duration?: number;
  y?: number;
}

export function useGsapReveal<T extends HTMLElement>(
  options: UseGsapRevealOptions = {}
) {
  const ref = useRef<T>(null);
  const { delay = 0, duration = 1, y = 40 } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.fromTo(
      element,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: "power3.out",
      }
    );
  }, [delay, duration, y]);

  return ref;
}

export function useGsapFloat<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const tween = gsap.to(element, {
      y: -12,
      duration: 2.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  return ref;
}
