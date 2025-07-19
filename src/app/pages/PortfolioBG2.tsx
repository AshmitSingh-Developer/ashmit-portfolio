'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const TOTAL_STARS = 400;

const SpaceBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const SPEED = 0.4;
    const DIRECTION = { x: 0.15, y: 0.15 };

    let stars = Array.from({ length: TOTAL_STARS }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 0.5 + 0.2,
      alpha: Math.random(),
      twinkleSpeed: Math.random() * 0.02 + 0.01,
    }));

    const shootingStars: {
      x: number;
      y: number;
      length: number;
      speed: number;
      life: number;
    }[] = [];

    const spawnShootingStar = () => {
      shootingStars.push({
        x: Math.random() * width * 0.7,
        y: Math.random() * height * 0.4,
        length: 300,
        speed: 5 + Math.random() * 2,
        life: 100,
      });
    };

    const shootingInterval = setInterval(() => {
      if (Math.random() < 0.7) spawnShootingStar();
    }, Math.random() * 3000 + 3000);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'white';

      stars.forEach((star) => {
        star.x += DIRECTION.x * SPEED;
        star.y += DIRECTION.y * SPEED;

        star.alpha += star.twinkleSpeed;
        if (star.alpha > 1 || star.alpha < 0.2) {
          star.twinkleSpeed *= -1;
        }

        if (star.x > width) star.x = 0;
        if (star.y > height) star.y = 0;

        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      shootingStars.forEach((s, i) => {
        ctx.beginPath();
        const grad = ctx.createLinearGradient(s.x, s.y, s.x + s.length, s.y + s.length);
        grad.addColorStop(0, 'white');
        grad.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x + s.length, s.y + s.length);
        ctx.stroke();

        s.x += s.speed;
        s.y += s.speed;
        s.life--;

        if (s.life <= 0) shootingStars.splice(i, 1);
      });

      requestAnimationFrame(animate);
    };

    animate();
    canvas.style.opacity = '1'; // 👈 prevent gradient flash

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      stars = Array.from({ length: TOTAL_STARS }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 0.5 + 0.2,
        alpha: Math.random(),
        twinkleSpeed: Math.random() * 0.02 + 0.01,
      }));
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(shootingInterval);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 z-[-10] overflow-hidden bg-black">
      {/* Canvas with hidden until ready */}
      <canvas
        ref={canvasRef}
        className="top-0 left-0 absolute bg-gradient-to-b from-black via-gray-900 to-black transition-opacity duration-500"
        style={{ opacity: 0 }}
      />

      {/* Moon */}
      <motion.div
        className="absolute z-1 w-[160px] h-[160px] pointer-events-none"
        style={{
          left: mouse.x - 80,
          top: mouse.y - 80,
          position: 'absolute',
        }}
      >
        {/* <Image
          src="/myimg/moon.png"
          fill
          alt="Moon"
          className="w-full h-full object-contain select-none"
          priority
        /> */}
        <motion.div
          className="absolute inset-0 rounded-full z-[-1]"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.12), transparent 80%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
            boxShadow: [
              '0 0 40px rgba(255,255,255,0.2)',
              '0 0 80px rgba(255,255,255,0.3)',
              '0 0 40px rgba(255,255,255,0.2)',
            ],
          }}
          transition={{
            duration: 10,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />
      </motion.div>
    </div>
  );
};

export default SpaceBackground;
