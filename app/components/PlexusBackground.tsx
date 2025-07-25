"use client";
import React, { useRef, useEffect, useState } from "react";

export const PlexusBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [primaryColor, setPrimaryColor] =
    useState<string>("hsl(190, 95%, 50%)");

  useEffect(() => {
    const color = getComputedStyle(document.documentElement)
      .getPropertyValue("--primary")
      .trim();

    if (color) {
      const [h, s, l] = color.split(" ").map(parseFloat);
      if (!isNaN(h) && !isNaN(s) && !isNaN(l)) {
        setPrimaryColor(`hsl(${h}, ${s}%, ${l}%)`);
      }
    }
  }, []);

  useEffect(() => {
    if (!primaryColor || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    interface ParticleType {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      update: () => void;
      draw: () => void;
    }

    let particles: ParticleType[] = [];
    const particleCount = Math.floor((width * height) / 25000);
    const maxDistance = 150;

    class Particle implements ParticleType {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 1.5 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = primaryColor;
        ctx.fill();
      }
    }

    function init() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function connect() {
      if (!ctx) return;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);

            const baseColor = getComputedStyle(document.documentElement)
              .getPropertyValue("--primary")
              .trim();

            ctx.strokeStyle = `hsla(${baseColor}, ${
              1 - distance / maxDistance
            })`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      connect();
      animationFrameId = requestAnimationFrame(animate);
    }

    function handleResize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    }

    init();
    animate();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [primaryColor]);

  return (
    <canvas
      ref={canvasRef}
      className="plexus-bg fixed inset-0 w-screen h-screen z-[-1] block"
    />
  );
};
