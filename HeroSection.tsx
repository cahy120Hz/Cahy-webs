import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { NeonButton } from '@/components/ui/NeonButton';
import { Rocket, Bot, LayoutDashboard, Mail, ChevronDown } from 'lucide-react';

function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState('');
  const indexRef = useRef(0);
  const started = useRef(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      started.current = true;
      const interval = setInterval(() => {
        if (indexRef.current < text.length) {
          setDisplayed(text.slice(0, indexRef.current + 1));
          indexRef.current++;
        } else {
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [text, delay]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && started.current && (
        <span className="inline-block w-0.5 h-4 bg-cyan-neon ml-0.5 animate-blink" />
      )}
    </span>
  );
}

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    const particleCount = 150;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.fillStyle = 'rgba(5, 5, 7, 0.1)';
      ctx.fillRect(0, 0, w, h);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        const dx = p.x - mousePos.x;
        const dy = p.y - mousePos.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        if (dist < 150) {
          ctx.fillStyle = `rgba(0, 240, 255, ${p.opacity + 0.3})`;
        } else {
          ctx.fillStyle = `rgba(0, 240, 255, ${p.opacity})`;
        }
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.1 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [mousePos]);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const roles = ['Programmer', 'Fullstack Developer', 'UI Designer', 'Creative Developer', 'AI Enthusiast', 'Technology Explorer', 'Astronomy Enthusiast', 'System Architect'];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(135deg, #050507 0%, #0a0a14 50%, #050507 100%)' }}
      />

      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 grid-bg" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono text-cyan-neon border border-cyan-neon/20">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-neon animate-pulse" />
            NEXT GENERATION DIGITAL ECOSYSTEM
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-syncopate font-bold mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-cyan-neon via-silver to-purple-neon bg-clip-text text-transparent">
            CAHY&apos;EDUCATION
          </span>
          <span className="text-cyan-neon text-glow-cyan">`WEBS</span>
        </h1>

        <div className="h-8 mb-8">
          <p className="text-lg md:text-xl font-space text-text-muted">
            <TypingText text="Next Generation Digital Ecosystem" delay={500} />
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {roles.map((role, i) => (
            <span
              key={role}
              className="px-3 py-1 rounded-full text-[10px] font-mono border border-white/10 text-text-muted hover:border-cyan-neon/30 hover:text-cyan-neon transition-all duration-300"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {role}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <Link to="/projects">
            <NeonButton variant="cyan" size="md">
              <Rocket className="w-4 h-4 mr-2" />
              Explore Projects
            </NeonButton>
          </Link>
          <Link to="/ai-tools">
            <NeonButton variant="purple" size="md">
              <Bot className="w-4 h-4 mr-2" />
              Open AI Assistant
            </NeonButton>
          </Link>
          <Link to="/dashboard">
            <NeonButton variant="ghost" size="md">
              <LayoutDashboard className="w-4 h-4 mr-2" />
              Open Dashboard
            </NeonButton>
          </Link>
          <Link to="/contact">
            <NeonButton variant="ghost" size="md">
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </NeonButton>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-8 text-text-muted font-mono text-xs">
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-neon">24+</div>
            <div>Courses</div>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-neon">12</div>
            <div>AI Tools</div>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-neon">20</div>
            <div>Network Sites</div>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-neon">10</div>
            <div>Projects</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-5 h-5 text-cyan-neon/50" />
      </div>

      <div className="absolute top-20 left-8 font-mono text-[10px] text-text-muted/50 hidden lg:block">
        <div>SYS.STATUS: OPTIMAL</div>
        <div>COORD: 0.00, 0.00</div>
        <div className="mt-1 text-cyan-neon/50">{new Date().toLocaleTimeString()}</div>
      </div>
    </section>
  );
}
