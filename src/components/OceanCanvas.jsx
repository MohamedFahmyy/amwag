import React, { useEffect, useRef } from 'react';

export default function OceanCanvas({ burstQueueRef }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animFrameId;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    const isMobile = width < 768;

    const fishPalettes = [
      { body: '#ff8f00', fin: '#ffd54f', stripe: '#ffffff' },
      { body: '#00e5ff', fin: '#1de9b6', stripe: '#0288d1' },
      { body: '#ff5252', fin: '#ffab40', stripe: '#ffd740' },
      { body: '#80d8ff', fin: '#e1f5fe', stripe: '#00b0ff' },
      { body: '#ffd740', fin: '#ff6d00', stripe: '#fff8e1' }
    ];

    const fishCount = isMobile
      ? Math.min(11, Math.max(7, Math.floor(width / 45)))
      : Math.min(24, Math.max(14, Math.floor(width / 80)));

    const fishes = Array.from({ length: fishCount }, (_, idx) => {
      const palette = fishPalettes[idx % fishPalettes.length];
      const dir = Math.random() > 0.5 ? 1 : -1;
      const size = (isMobile ? 11 : 14) + Math.random() * (isMobile ? 14 : 22);
      return {
        x: Math.random() * width,
        y: 60 + Math.random() * Math.max(200, height - 120),
        baseY: 60 + Math.random() * Math.max(200, height - 120),
        size,
        speed: (0.5 + Math.random() * 1.15) * dir,
        dir,
        palette,
        phase: Math.random() * Math.PI * 2,
        wagSpeed: 0.08 + Math.random() * 0.07,
        depthAlpha: 0.35 + (size / 36) * 0.52
      };
    });

    const bubbleCount = isMobile ? 24 : Math.min(52, Math.floor(width / 26));
    const bubbles = Array.from({ length: bubbleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 1.8 + Math.random() * 5,
      speed: 0.4 + Math.random() * 1.1,
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: 0.02 + Math.random() * 0.03
    }));

    const seaweedCount = Math.max(4, Math.floor(width / (isMobile ? 75 : 95)));
    const seaweeds = Array.from({ length: seaweedCount }, (_, i) => ({
      x: (i + 0.5) * (width / seaweedCount) + (Math.random() - 0.5) * 30,
      segments: 6,
      segLen: (isMobile ? 12 : 16) + Math.random() * 12,
      phase: Math.random() * Math.PI * 2,
      color: i % 2 === 0 ? 'rgba(29, 233, 182, 0.15)' : 'rgba(0, 229, 255, 0.12)'
    }));

    const drawFish = (f, time) => {
      ctx.save();
      ctx.translate(f.x, f.y);
      ctx.scale(f.dir, 1);
      ctx.globalAlpha = f.depthAlpha;

      const wag = Math.sin(time * f.wagSpeed + f.phase);
      const s = f.size;

      // Tail fin
      ctx.fillStyle = f.palette.fin;
      ctx.beginPath();
      ctx.moveTo(-s * 0.85, 0);
      ctx.lineTo(-s * 1.45, -s * 0.52 + wag * 3.5);
      ctx.lineTo(-s * 1.22, wag * 1.8);
      ctx.lineTo(-s * 1.45, s * 0.52 + wag * 3.5);
      ctx.closePath();
      ctx.fill();

      // Dorsal fin
      ctx.beginPath();
      ctx.moveTo(-s * 0.2, -s * 0.35);
      ctx.quadraticCurveTo(-s * 0.55, -s * 0.78, -s * 0.7, -s * 0.25);
      ctx.closePath();
      ctx.fill();

      // Fish body
      const grad = ctx.createLinearGradient(-s, -s * 0.5, s, s * 0.5);
      grad.addColorStop(0, f.palette.body);
      grad.addColorStop(1, f.palette.fin);
      ctx.fillStyle = grad;

      ctx.beginPath();
      ctx.ellipse(0, 0, s, s * 0.48, 0, 0, Math.PI * 2);
      ctx.fill();

      // Stripe
      ctx.strokeStyle = f.palette.stripe;
      ctx.lineWidth = Math.max(1.4, s * 0.1);
      ctx.globalAlpha = f.depthAlpha * 0.65;
      ctx.beginPath();
      ctx.arc(-s * 0.1, 0, s * 0.38, -0.9, 0.9);
      ctx.stroke();

      // Eye
      ctx.globalAlpha = f.depthAlpha;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(s * 0.52, -s * 0.1, s * 0.13, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#020b18';
      ctx.beginPath();
      ctx.arc(s * 0.55, -s * 0.1, s * 0.065, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    const drawSeaweed = (sw, time) => {
      ctx.save();
      ctx.strokeStyle = sw.color;
      ctx.lineWidth = isMobile ? 5 : 7;
      ctx.lineCap = 'round';
      ctx.beginPath();
      let cx = sw.x;
      let cy = height;
      ctx.moveTo(cx, cy);
      for (let i = 1; i <= sw.segments; i++) {
        const sway = Math.sin(time * 0.025 + sw.phase + i * 0.45) * (i * 2.8);
        cx = sw.x + sway;
        cy = height - i * sw.segLen;
        ctx.lineTo(cx, cy);
      }
      ctx.stroke();
      ctx.restore();
    };

    let tick = 0;
    const animate = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      for (const sw of seaweeds) {
        drawSeaweed(sw, tick);
      }

      for (const f of fishes) {
        f.x += f.speed;
        f.y = f.baseY + Math.sin(tick * 0.025 + f.phase) * 12;

        if (f.dir === 1 && f.x > width + f.size * 2) {
          f.x = -f.size * 2;
          f.baseY = 60 + Math.random() * Math.max(180, height - 120);
        } else if (f.dir === -1 && f.x < -f.size * 2) {
          f.x = width + f.size * 2;
          f.baseY = 60 + Math.random() * Math.max(180, height - 120);
        }

        drawFish(f, tick);
      }

      for (const b of bubbles) {
        b.y -= b.speed;
        b.wobble += b.wobbleSpeed;
        const bx = b.x + Math.sin(b.wobble) * 7;

        if (b.y < -15) {
          b.y = height + 15;
          b.x = Math.random() * width;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(bx, b.y, b.r, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(180, 245, 255, 0.42)';
        ctx.fillStyle = 'rgba(0, 229, 255, 0.1)';
        ctx.lineWidth = 1;
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(bx - b.r * 0.3, b.y - b.r * 0.3, b.r * 0.25, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
        ctx.fill();
        ctx.restore();
      }

      const extraBubbles = burstQueueRef?.current || [];
      for (let i = extraBubbles.length - 1; i >= 0; i--) {
        const eb = extraBubbles[i];
        eb.x += eb.vx;
        eb.y -= eb.vy;
        eb.alpha -= 0.024;
        if (eb.alpha <= 0) {
          extraBubbles.splice(i, 1);
          continue;
        }
        ctx.save();
        ctx.globalAlpha = eb.alpha;
        ctx.beginPath();
        ctx.arc(eb.x, eb.y, eb.r, 0, Math.PI * 2);
        ctx.strokeStyle = '#00e5ff';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      }

      animFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [burstQueueRef]);

  return (
    <>
      <canvas id="oceanCanvas" ref={canvasRef} aria-hidden="true" />
      <div className="sun-rays" aria-hidden="true" />
      <div className="ocean-ambient-glow" aria-hidden="true" />
    </>
  );
}
