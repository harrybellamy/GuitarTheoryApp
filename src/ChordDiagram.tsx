import React from 'react';

type ChordDiagramProps = {
  chordName?: string;
  positions: number[]; // 6 values: low E to high E
  rootIndex?: number;  // 0 = low E, 5 = high E
};

const STRING_COUNT = 6;
const FRET_COUNT = 5;
const WIDTH = 120;
const HEIGHT = 160;
const MARGIN = 20;

const ChordDiagram: React.FC<ChordDiagramProps> = ({
  chordName = 'Chord',
  positions,
  rootIndex,
}) => {
  const stringSpacing = (WIDTH - 2 * MARGIN) / (STRING_COUNT - 1);
  const fretSpacing = (HEIGHT - 2 * MARGIN) / FRET_COUNT;

  const drawStrings = (): JSX.Element[] =>
    Array.from({ length: STRING_COUNT }, (_, i) => {
      const x = MARGIN + i * stringSpacing;
      return (
        <line
          key={`string-${i}`}
          x1={x}
          y1={MARGIN}
          x2={x}
          y2={HEIGHT - MARGIN}
          stroke="black"
        />
      );
    });

  const drawFrets = (): JSX.Element[] =>
    Array.from({ length: FRET_COUNT + 1 }, (_, i) => {
      const y = MARGIN + i * fretSpacing;
      return (
        <line
          key={`fret-${i}`}
          x1={MARGIN}
          y1={y}
          x2={WIDTH - MARGIN}
          y2={y}
          stroke="black"
        />
      );
    });

  const drawFingerDots = (): JSX.Element[] =>
    positions.map((fret, i) => {
      if (fret <= 0) return null;
      const x = MARGIN + i * stringSpacing;
      const y = MARGIN + fret * fretSpacing - fretSpacing / 2;
      const isRoot = rootIndex === i;
      return (
        <circle
          key={`dot-${i}`}
          cx={x}
          cy={y}
          r={7}
          fill={isRoot ? 'red' : 'black'}
        />
      );
    });

  const drawStringLabels = (): JSX.Element[] =>
    positions.map((fret, i) => {
      const x = MARGIN + i * stringSpacing;
      const y = MARGIN - 10;

      if (fret === 0) {
        return (
          <text
            key={`label-open-${i}`}
            x={x}
            y={y}
            textAnchor="middle"
            fontSize="12"
          >
            O
          </text>
        );
      }

      if (fret === -1) {
        return (
          <text
            key={`label-muted-${i}`}
            x={x}
            y={y}
            textAnchor="middle"
            fontSize="12"
          >
            X
          </text>
        );
      }

      return null;
    });

  return (
    <div className="inline-block text-center">
      <h3 className="text-lg font-bold mb-1">{chordName}</h3>
      <svg width={WIDTH} height={HEIGHT}>
        {drawStrings()}
        {drawFrets()}
        {drawFingerDots()}
        {drawStringLabels()}
      </svg>
    </div>
  );
};

export default ChordDiagram;