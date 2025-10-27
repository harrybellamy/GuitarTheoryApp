import { Outlet } from "react-router-dom";
import TopMenu from "../components/TopMenu";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopMenu />
      <div className="flex-1 w-full bg-background">
        <main className="container max-w-5xl mx-auto px-4 py-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}