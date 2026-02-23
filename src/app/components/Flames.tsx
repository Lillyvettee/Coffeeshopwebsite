import { useEffect, useRef } from 'react';

export function Flames() {
  const embersContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = embersContainerRef.current;
    if (!container) return;

    // Create embers
    for (let i = 0; i < 60; i++) {
      const ember = document.createElement('div');
      ember.className = 'ember';
      ember.style.setProperty('--x', `${5 + Math.random() * 90}%`);
      ember.style.setProperty('--dur', `6s`); // Same speed for all
      ember.style.setProperty('--delay', `${Math.random() * 3}s`);
      ember.style.setProperty('--drift', `${(Math.random() - 0.5) * 60}px`);
      
      // Randomize ember size
      const s = 1.5 + Math.random() * 3;
      ember.style.width = s + 'px';
      ember.style.height = s + 'px';
      
      // Random orange/red color
      const hue = 10 + Math.random() * 30;
      ember.style.background = `hsl(${hue}, 100%, 55%)`;
      ember.style.boxShadow = `0 0 ${s * 2}px ${s}px hsla(${hue}, 100%, 55%, 0.8)`;
      
      container.appendChild(ember);
    }

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="flame-container">
      <div className="glow"></div>
      <div className="embers" ref={embersContainerRef}></div>
    </div>
  );
}