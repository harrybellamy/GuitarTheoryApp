import { useState } from "react";

const majorKeys = [
  "C", "G", "D", "A", "E", "B", "F#", "Db", "Ab", "Eb", "Bb", "F"
];

const relativeMinors = {
  "C": "Am", "G": "Em", "D": "Bm", "A": "F#m", "E": "C#m", "B": "G#m",
  "F#": "D#m", "Db": "Bbm", "Ab": "Fm", "Eb": "Cm", "Bb": "Gm", "F": "Dm"
};

const radius = 120;
const cx = 150;
const cy = 150;

type Props = {
  selectedKey: string;
  onKeySelect: (key: string) => void;
};

export default function CircleOfFifths({ selectedKey, onKeySelect }: Props) {

  return (
    <div className="flex flex-col items-center bg-card shadow rounded-2xl p-6 w-full md:w-[350px]">
      <h2 className="text-xl font-bold mb-4 text-accent">🎼 Circle of Fifths</h2>
      <svg viewBox="0 0 300 300" className="mb-4 w-full h-auto max-w-[300px]">
        {majorKeys.map((key, i) => {
          const angle = (i / majorKeys.length) * 2 * Math.PI;
          const x = cx + radius * Math.cos(angle - Math.PI / 2);
          const y = cy + radius * Math.sin(angle - Math.PI / 2);
          const isSelected = selectedKey === key;

          return (
            <g key={key} onClick={() => onKeySelect(key)} className="cursor-pointer">
              <circle
                cx={x}
                cy={y}
                r={20}
                fill={isSelected ? "var(--color-accent)" : "var(--color-light)"}
                stroke="#333"
                strokeWidth={isSelected ? 2 : 1}
              />
              <text
                x={x}
                y={y + 5}
                textAnchor="middle"
                fontSize={14}
                fill={isSelected ? "#fff" : "#111"}
              >
                {key}
              </text>
            </g>
          );
        })}
      </svg>

      {selectedKey && (
        <div className="text-center">
          <p className="text-lg font-medium text-light">Selected Key: <span className="font-bold">{selectedKey}</span></p>
          <p className="text-light">Relative Minor: <span className="italic">{relativeMinors[selectedKey]}</span></p>
        </div>
      )}
    </div>
  );
}
