import { Chord, Interval } from "@tonaljs/tonal";
import { Music } from "lucide-react";

type ChordBoxProps = {
  chordName: string;
  onPlay: (notes: string[]) => void;
};

const getFullChordName = (chordData: ReturnType<typeof Chord.get>) => {
  const chordType = chordData.type === "major" 
    ? "Major"
    : chordData.type === "minor"
    ? "Minor"
    : chordData.type;
    
  const seventh = chordData.intervals.length > 3 && chordData.type.includes("7") ? "7" : "";
  
  return `${chordData.tonic} ${chordType} ${seventh}`.trim();
};

export default function ChordBox({ chordName, onPlay }: ChordBoxProps) {
  const chordData = Chord.get(chordName);

  if (chordData.empty) {
    return (
      <div className="p-4 bg-red-100 text-red-800 rounded-xl w-64">
        <p>❌ Invalid chord: {chordName}</p>
      </div>
    );
  }

  const notes = chordData.notes;
  const degrees = notes.map((note) =>
    Interval.distance(chordData.tonic!, note)
  );

  return (
    <div className="p-4 bg-surface text-ink rounded-xl shadow-md w-64 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h2 
          className="text-xl font-bold text-accent cursor-help"
          title={getFullChordName(chordData)}
        >
          {chordData.symbol}
        </h2>
        <button
          onClick={() => onPlay(notes)}
          className="p-2 rounded-full bg-accent/20 hover:bg-accent/40 transition"
        >
          <Music className="w-5 h-5 text-accent" />
        </button>
      </div>

      <div>
        <span className="font-semibold">Notes: </span>
        <span>{notes.join(", ")}</span>
      </div>

      <div>
        <span className="font-semibold">Degrees: </span>
        <span>{degrees.join(", ")}</span>
      </div>
    </div>
  );
}