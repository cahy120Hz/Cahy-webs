import { useState, useEffect, useRef, useCallback } from 'react';

interface UseTypingEffectOptions {
  speed?: number;
  delay?: number;
  onComplete?: () => void;
}

export function useTypingEffect(
  text: string,
  { speed = 30, delay = 0, onComplete }: UseTypingEffectOptions = {}
) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const indexRef = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startTyping = useCallback(() => {
    setIsTyping(true);
    setIsComplete(false);
    indexRef.current = 0;
    setDisplayText('');

    const type = () => {
      if (indexRef.current < text.length) {
        setDisplayText(text.slice(0, indexRef.current + 1));
        indexRef.current++;
        timeoutRef.current = setTimeout(type, speed);
      } else {
        setIsTyping(false);
        setIsComplete(true);
        onComplete?.();
      }
    };

    timeoutRef.current = setTimeout(type, delay);
  }, [text, speed, delay, onComplete]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return { displayText, isTyping, isComplete, startTyping };
}
