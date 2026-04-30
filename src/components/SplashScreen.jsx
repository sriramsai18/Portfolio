import { useEffect } from 'react';

export default function SplashScreen() {
  useEffect(() => {
    // Start robot expansion after 2.5s
    const expandTimer = setTimeout(() => {
      const overlay = document.getElementById('reveal-overlay');
      if (overlay) overlay.classList.add('expanding');
    }, 2500);

    // Fade out everything after 4s
    const fadeTimer = setTimeout(() => {
      const overlay = document.getElementById('reveal-overlay');
      if (overlay) {
        overlay.style.opacity = '0';
        setTimeout(() => overlay.remove(), 1000);
      }
    }, 4000);

    return () => {
      clearTimeout(expandTimer);
      clearTimeout(fadeTimer);
    };
  }, []);

  return (
    <div id="reveal-overlay" className="reveal-active">
      <div className="robot-container">
        <svg className="robot-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* Arms */}
          <rect className="arm left-arm" x="20" y="45" width="8" height="20" rx="4" fill="var(--fg)" />
          <rect className="arm right-arm" x="72" y="45" width="8" height="20" rx="4" fill="var(--fg)" />
          {/* Body */}
          <rect x="30" y="40" width="40" height="35" rx="8" fill="var(--fg)" />
          <circle className="chest-led" cx="50" cy="55" r="4" fill="var(--blue-light)" filter="url(#glow)" />
          {/* Head */}
          <rect className="head" x="35" y="20" width="30" height="18" rx="6" fill="var(--fg)" />
          <g className="eyes">
            <circle cx="43" cy="29" r="2" fill="var(--blue-light)" filter="url(#glow)" />
            <circle cx="57" cy="29" r="2" fill="var(--blue-light)" filter="url(#glow)" />
          </g>
        </svg>
      </div>
    </div>
  );
}