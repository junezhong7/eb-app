import React, { useState } from 'react';

interface ToyQuestionSVGProps {
  selected: number | null;
  showFeedback: boolean;
  onSelect: (idx: number) => void;
}


export default function ToyQuestionSVG({ selected, showFeedback, onSelect }: ToyQuestionSVGProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const highlight = '#3498db';
  const baseStrokes = ['#A4C2F4', '#B6D7A8', '#F4CCCC'];
  const labels = ['Grab', 'Wait/Ask', 'Cry/Adult'];
  const positions = [
    { cx: 90, cy: 80 },    // left
    { cx: 410, cy: 80 },   // right
    { cx: 250, cy: 250 }   // bottom
  ];

  // Blinking animation for hovered
  const blinkStyle = (idx: number) =>
    hovered === idx
      ? { animation: 'blink 0.7s linear infinite alternate' as const }
      : {};

  return (
    <svg width="500" height="300" viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', margin: '0 auto' }}>
      <style>{`
        @keyframes blink {
          0% { filter: brightness(1); }
          100% { filter: brightness(1.7); }
        }
      `}</style>
      <defs>
        <radialGradient id="answer-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fff" stop-opacity="0.8" />
          <stop offset="60%" stop-color="#fff" stop-opacity="0.3" />
          <stop offset="100%" stop-color="#fff" stop-opacity="0" />
        </radialGradient>
      </defs>
      {/* Main body (center, enlarged and moved up) */}
      <circle cx="250" cy="120" r="65" fill="#FFD966" stroke="#333" strokeWidth={5} />
      <text x="250" y="127" textAnchor="middle" fontSize="28" fill="#333" fontFamily="Arial" fontWeight="bold">Toy</text>

      {/* Choices (interactive) */}
      {positions.map((pos, idx) => {
        // Scale up if hovered
        const scale = hovered === idx ? 1.18 : 1;
        return (
          <g
            key={idx}
            style={{ cursor: showFeedback ? 'default' : 'pointer', transition: 'transform 0.18s' }}
            transform={`translate(${pos.cx},${pos.cy}) scale(${scale}) translate(${-pos.cx},${-pos.cy})`}
            onMouseEnter={() => !showFeedback && setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <circle
              cx={pos.cx}
              cy={pos.cy}
              r={35}
              fill={baseStrokes[idx]}
              stroke={selected === idx ? highlight : '#333'}
              strokeWidth={selected === idx ? 5 : 3}
              opacity={showFeedback && selected !== null && selected !== idx ? 0.5 : 1}
              onClick={() => !showFeedback && onSelect(idx)}
              style={hovered === idx ? blinkStyle(idx) : {}}
            />
            <text
              x={pos.cx}
              y={pos.cy + 5}
              textAnchor="middle"
              fontSize={16}
              fill="#333"
              fontFamily="Arial"
              style={{ pointerEvents: 'none', fontWeight: selected === idx ? 'bold' : 'normal' }}
            >
              {labels[idx]}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
