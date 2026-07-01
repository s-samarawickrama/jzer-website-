import { useEffect } from 'react';

export function useMouseEffects() {
  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      const cursor = document.getElementById('cursor');
      if (cursor) {
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
      }
      if (Math.random() < 0.25) {
        const s = document.createElement('div');
        s.className = 'cursor-spark';
        s.style.left = (mouseX + (Math.random() * 10 - 5)) + 'px';
        s.style.top = (mouseY + (Math.random() * 10 - 5)) + 'px';
        document.body.appendChild(s);
        setTimeout(() => s.remove(), 700);
      }
    };
    
    const handleMouseDown = () => {
      const cursor = document.getElementById('cursor');
      if (cursor) cursor.style.transform = 'translate(-50%,-50%) scale(0.8) rotate(20deg)';
    };
    
    const handleMouseUp = () => {
      const cursor = document.getElementById('cursor');
      if (cursor) cursor.style.transform = 'translate(-50%,-50%) scale(1) rotate(0deg)';
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    const hoverEls = document.querySelectorAll('button,a,.card,.t-card,.stat,.pill');
    const handleMouseEnter = () => document.body.classList.add('ch');
    const handleMouseLeave = () => document.body.classList.remove('ch');
    
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Saber expand (if element exists)
    const saberTimeout = setTimeout(() => {
      const saber = document.getElementById('saber');
      if (saber) saber.classList.add('on');
    }, 800);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      hoverEls.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      clearTimeout(saberTimeout);
    };
  }, []);
}
