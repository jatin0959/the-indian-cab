import React, { useEffect, useRef } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const rafRef = useRef<number | null>(null)
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // 1) Skip Lenis on mobile/touch or reduced motion for better perf
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    const isSmall = window.innerWidth < 768

    if (prefersReduced || isTouch || isSmall) {
      // Native scroll is often smoother/battery-friendlier on these devices
      return
    }

    // 2) Tamer settings: shorter duration + small lerp
    const lenis = new Lenis({
      duration: 0.8,          // was 1.1
      smoothWheel: true,
      smoothTouch: false,
      lerp: 0.08,             // damping (lower = snappier, less CPU)
      wheelMultiplier: 0.9,   // reduce wheel intensity for steadier frames
      touchMultiplier: 1.1,   // not used when smoothTouch: false, but harmless
    } as any)
    lenisRef.current = lenis

    const raf = (time: number) => {
      lenis.raf(time)
      rafRef.current = requestAnimationFrame(raf)
    }

    const start = () => {
      if (rafRef.current == null) rafRef.current = requestAnimationFrame(raf)
    }
    const stop = () => {
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
    }

    // 3) Pause the animation loop when the tab is hidden
    const onVis = () => (document.hidden ? stop() : start())
    document.addEventListener('visibilitychange', onVis)

    start()

    return () => {
      document.removeEventListener('visibilitychange', onVis)
      stop()
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return <>{children}</>
}
