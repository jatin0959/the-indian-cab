// src/components/WelcomeSplash.tsx
import { useEffect, useMemo, useRef, useState } from 'react'

type Props = {
  onDone: () => void
  durationMs?: number
}

export default function WelcomeSplash({ onDone, durationMs = 5600 }: Props) {
  // One-at-a-time greetings (fast cycle)
  const greetings = useMemo(
    () => [
      { text: 'Hello', lang: 'en', cursive: true },
      { text: 'नमस्ते', lang: 'hi' },
      { text: 'নমস্তে', lang: 'bn' },
      { text: 'નમસ્તે', lang: 'gu' },
      { text: 'வணக்கம்', lang: 'ta' },
      { text: 'నమస్తే', lang: 'te' },
      { text: 'ನಮಸ್ಕಾರ', lang: 'kn' },
      { text: 'నమస్కారం', lang: 'te2' },
      { text: 'ਨਮਸਤੇ', lang: 'pa' },
      { text: 'নমস্কার', lang: 'bn2' },
      { text: 'Namaskar', lang: 'mr' },
      { text: 'Nomoshkar', lang: 'bn3' },
    ],
    []
  )

  const [i, setI] = useState(0)
  const timerRef = useRef<number | null>(null)
  const endRef = useRef<number | null>(null)

  // Cycle greetings quickly (every ~460ms)
  useEffect(() => {
    const stepMs = 460
    timerRef.current = window.setInterval(() => {
      setI(v => (v + 1) % greetings.length)
    }, stepMs)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [greetings.length])

  // Auto-finish after duration
  useEffect(() => {
    endRef.current = window.setTimeout(onDone, durationMs)
    return () => { if (endRef.current) clearTimeout(endRef.current) }
  }, [onDone, durationMs])

  // Lock scroll while visible (defensive if used standalone)
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [])

  const g = greetings[i]

  return (
    <div className="ic-welcome" role="dialog" aria-modal="true" aria-label="Welcome">
      {/* subtle glow */}
      <div className="ic-welcome__glow" aria-hidden />
      {/* Skip */}
      <button className="ic-welcome__skip" onClick={onDone} aria-label="Skip intro">Skip</button>

      {/* Center block */}
      <div className="ic-welcome__center">
        <img
          src="/assets/logo.png"
          alt="IndianCab"
          className="ic-welcome__logo"
          width={200}
          height={200}
          loading="eager"
          decoding="sync"
        />
        <div className="ic-welcome__sub">Fast, safe & on-time — across India</div>
        <div className="ic-welcome__hello-wrap" aria-live="polite" aria-atomic="true">
          <span
            key={`${g.text}-${i}`}
            className={`ic-welcome__hello ${g.cursive ? 'is-cursive' : ''}`}
          >
            {g.text}
          </span>
        </div>
        
      </div>

      {/* thin progress bar */}
      <div className="ic-welcome__bar">
        <div className="ic-welcome__barfill" style={{ animationDuration: `${durationMs}ms` }} />
      </div>

      {/* styles scoped to component */}
      <style>{`
        .ic-welcome{
          position: fixed; inset: 0; z-index: 9999;
          background: #ffffff;
          display: grid; place-items: center;
          overflow: hidden;
        }
        .ic-welcome__glow{
          position: absolute; inset: -20% -10% -10% -10%;
          background:
            radial-gradient(700px 420px at 50% -10%, rgba(245,180,0,0.18), transparent 60%),
            radial-gradient(520px 280px at 90% 10%, rgba(242,163,0,0.14), transparent 60%),
            radial-gradient(520px 280px at 10% 20%, rgba(255,214,102,0.14), transparent 60%);
          filter: blur(10px);
          pointer-events: none;
        }
        .ic-welcome__skip{
          position: absolute; right: 14px; top: 14px;
          background: #fff; border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          border-radius: 999px; padding: 8px 12px; font-weight: 800; cursor: pointer;
        }
        .ic-welcome__center{
          display: grid; place-items: center; gap: 14px; text-align: center;
          transform: translateZ(0);
        }
        .ic-welcome__logo{
          width: clamp(140px, 22vw, 220px);
          height: auto; display: block;
          filter: drop-shadow(0 18px 36px rgba(0,0,0,.08));
        }
        .ic-welcome__hello-wrap{
          height: 64px; display: grid; place-items: center; min-width: 220px;
        }
        .ic-welcome__hello{
          font-size: clamp(34px, 6vw, 64px);
          font-weight: 800; letter-spacing: -0.02em; color: #0b1220;
          animation: fadeSwap .46s ease both;
          text-rendering: optimizeLegibility;
        }
        .ic-welcome__hello.is-cursive{
          font-family: "Pacifico", cursive;  /* if not loaded, falls back to generic cursive */
          font-weight: 400;
        }
        .ic-welcome__sub{
          color: #4b5563; font-size: clamp(14px, 1.6vw, 16px);
        }
        .ic-welcome__bar{
          position: absolute; left: 0; right: 0; bottom: 0; height: 3px; background: #f3f4f6;
        }
        .ic-welcome__barfill{
          height: 100%; width: 0%;
          background: linear-gradient(90deg, #f5b400, #f2a300);
          animation: load linear forwards;
        }

        @keyframes fadeSwap {
          from { opacity: 0; transform: translateY(8px) scale(.985); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes load { to { width: 100%; } }

        @media (prefers-reduced-motion: reduce){
          .ic-welcome__hello{ animation: none; }
          .ic-welcome__barfill{ animation: none; width: 100%; }
        }
      `}</style>

      {/* Optional: nice cursive font (safe if already in <head>) */}
      <link
        rel="preload"
        as="style"
        href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
        rel="stylesheet"
      />
    </div>
  )
}
