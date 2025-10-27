import { NavLink } from "react-router-dom";

export default function TopMenu() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-accent border-b-2 border-accent px-3 py-2"
      : "text-ink hover:text-accent px-3 py-2 transition-colors";

  return (
    <nav className="bg-surface shadow">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <div className="text-xl font-semibold text-accent">GuitarTheory</div>
          <div className="flex space-x-2">
            <NavLink to="/" className={linkClass} end>
              Home
            </NavLink>
            <NavLink to="/chords" className={linkClass}>
              Chords
            </NavLink>
            <NavLink to="/scales" className={linkClass}>
              Scales
            </NavLink>
            <NavLink to="/chords-and-keys" className={linkClass}>
              Chords & Keys
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}