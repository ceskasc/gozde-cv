import { useRef, useState } from 'react';

const chars = '-_~`!@#$%^&*()+=[]{}|;:,.<>?/';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText = ({ text, className }: GlitchTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<any>(null);

  const onMouseOver = () => {
    let iteration = 0;

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(() =>
        text
          .split('')
          .map((_, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }

      iteration += 1 / 3;
    }, 30);
  };

  const onMouseOut = () => {
    clearInterval(intervalRef.current);
    setDisplayText(text);
  };

  return (
    <span
      className={className}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      style={{ display: 'inline-block' }}
    >
      {displayText}
    </span>
  );
};

export default GlitchText;
