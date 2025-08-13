import { Chord, Key } from "tonal";

type DisplayChord = {
  degree: string;
  chordName: string;
  quality: string;
};

// Helper fallback if key not in the record
const defaultChords: DisplayChord[] = [
  { degree: "I", chordName: "N/A", quality: "" },
  { degree: "ii", chordName: "N/A", quality: "" },
  { degree: "iii", chordName: "N/A", quality: "" },
  { degree: "IV", chordName: "N/A", quality: "" },
  { degree: "V", chordName: "N/A", quality: "" },
  { degree: "vi", chordName: "N/A", quality: "" },
  { degree: "vii°", chordName: "N/A", quality: "" },
];

type Props = {
  keyName: string; // e.g. "C"
};

function* diatonicChordsMajor(keySignature: string): Generator<DisplayChord> {
    const majorKey = Key.majorKey(keySignature);
    const indexes = [0, 1, 2, 3, 4, 5, 6];
    for (const index of indexes) {
        const chordAtIndex = Chord.get(majorKey.triads[index]);
        yield { degree: majorKey.grades[index], chordName: chordAtIndex.name, quality: chordAtIndex.quality };
    } 
}

export default function ChordsInKey({ keyName }: Props) {

  let chords = defaultChords;
  if (keyName !== undefined) {
    chords = [...diatonicChordsMajor(keyName)];
  }

  return (
    <div className="bg-card rounded-lg shadow p-6 w-full md:w-[350px]">
      <h3 className="text-xl font-semibold mb-4 text-center text-accent">
        Chords in the key of {keyName} Major
      </h3>

      <table className="w-full text-left border-collapse text-light">
        <thead>
          <tr className="border-b">
            <th className="py-2">Degree</th>
            <th className="py-2">Chord</th>
            <th className="py-2">Quality</th>
          </tr>
        </thead>
        <tbody>
          {chords.map(({ degree, chordName, quality }) => (
            <tr key={degree} className="border-b hover:bg-gray-50 cursor-default">
              <td className="py-2 font-mono">{degree}</td>
              <td className="py-2 font-semibold">{chordName}</td>
              <td className="py-2 capitalize">{quality}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
