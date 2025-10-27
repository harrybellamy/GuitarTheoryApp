import { useRef } from "react";
import ChordBox from "../components/ChordBox";
import * as Midi from "@tonaljs/midi";

const chords = ["Cmaj7", "Dm7", "Em7", "Fmaj7", "G7", "Am7", "Bø"];

export default function Chords() {
  const audioCtxRef = useRef<AudioContext | null>(null);

  const getAudioContext = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext ||
        (window as any).webkitAudioContext)();
    }
    return audioCtxRef.current;
  };

  const playChord = (notes: string[]) => {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // stop previous chords if needed
    // ctx.close() and recreate if you want "one chord only" behavior

    // Normalize the notes to ensure ascending pitch
    let prevMidi = 0;
    let octave = 4;

    // Process notes to ensure ascending pitch
    const processedNotes = notes.map(note => {
      let currentMidi = Midi.toMidi(note + octave) || 60;
      while (currentMidi <= prevMidi) {
        octave++;
        currentMidi = Midi.toMidi(note + octave) || 60;
      }
      prevMidi = currentMidi;
      return note + octave;
    });

    processedNotes.forEach((note, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      const midiNumber = Midi.toMidi(note) || 60;
      console.log("Playing note:", note, midiNumber);
      osc.frequency.value = Midi.midiToFreq(midiNumber);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 2);

      osc.connect(gain).connect(ctx.destination);

      osc.start(now + i * 0.05);
      osc.stop(now + 2);
    });
  };

  return (
    <div className="text-ink">
      <h1 className="text-3xl font-bold text-center mb-8 text-accent">
        🎶 Chords in C Major
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {chords.map((chord) => (
          <ChordBox key={chord} chordName={chord} onPlay={playChord} />
        ))}
      </div>
    </div>
  );
}