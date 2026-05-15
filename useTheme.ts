import { useState, useEffect, useCallback } from 'react';
import type { ThemeState } from '@/types';

const defaultTheme: ThemeState = {
  mode: 'dark',
  accentColor: 'cyan',
  particles: true,
  sound: false,
};

export function useTheme() {
  const [theme, setTheme] = useState<ThemeState>(() => {
    try {
      const saved = localStorage.getItem('cahy-theme');
      return saved ? { ...defaultTheme, ...JSON.parse(saved) } : defaultTheme;
    } catch {
      return defaultTheme;
    }
  });

  useEffect(() => {
    localStorage.setItem('cahy-theme', JSON.stringify(theme));
    document.documentElement.setAttribute('data-theme', theme.mode);
    document.documentElement.setAttribute('data-accent', theme.accentColor);
  }, [theme]);

  const setMode = useCallback((mode: ThemeState['mode']) => {
    setTheme(prev => ({ ...prev, mode }));
  }, []);

  const setAccentColor = useCallback((accentColor: ThemeState['accentColor']) => {
    setTheme(prev => ({ ...prev, accentColor }));
  }, []);

  const toggleParticles = useCallback(() => {
    setTheme(prev => ({ ...prev, particles: !prev.particles }));
  }, []);

  const toggleSound = useCallback(() => {
    setTheme(prev => ({ ...prev, sound: !prev.sound }));
  }, []);

  return { theme, setMode, setAccentColor, toggleParticles, toggleSound, setTheme };
}
