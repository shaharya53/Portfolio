import React, { useEffect, useRef } from "react";

const BackgroundEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    resizeCanvas();

    // Elegant gradient-like palette (purple-blue glow)
    const colors = ["#9333ea", "#a855f7", "#6366f1", "#3b82f6"];

    let time = 0;

    function drawWave(amplitude, frequency, speed, color, yBase) {
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = color;
      ctx.shadowBlur = 25;
      ctx.shadowColor = color;

      for (let x = 0; x <= canvas.width; x += 8) {
        const y =
          yBase +
          Math.sin(frequency * (x + time * speed)) * amplitude;

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }

        // glowing dots
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.shadowBlur = 15;
        ctx.fill();
      }

      ctx.stroke();
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Spread across the section
      drawWave(50, 0.02, 2, colors[0], canvas.height * 0.2);
      drawWave(45, 0.018, 2.2, colors[1], canvas.height * 0.4);
      drawWave(40, 0.025, 1.8, colors[2], canvas.height * 0.6);
      drawWave(35, 0.022, 2.5, colors[3], canvas.height * 0.8);

      time += 2;
      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

export default BackgroundEffect;
