import { Link } from "react-router-dom";
import { Music, Guitar, BookOpenCheck, Circle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">🎸 Guitar Theory</h1>
      
      <p className="mb-6 text-gray-600">Explore chords, scales, key signatures, and more.</p>

      <div className="grid grid-cols-2 gap-4">
        <Tile title="Scales" icon={<Music />} link="/scales" />
        <Tile title="Chords and Key Signatures" icon={<Circle />} link="/chordsAndKeys" />
        <Tile title="Triads" icon={<BookOpenCheck />} link="/triads" />
      </div>
    </div>
  );
}

function Tile({ title, icon, link }: { title: string; icon: React.ReactNode; link: string }) {
  return (
    <Link
      to={link}
      className="bg-white rounded-2xl shadow p-4 flex flex-col items-center justify-center hover:bg-blue-100 transition"
    >
      <div className="text-blue-500 mb-2">{icon}</div>
      <div className="text-lg font-semibold text-gray-700">{title}</div>
    </Link>
  );
}
