import { useState } from "react";
import CircleOfFifths from "@/components/CircleOfFifths";
import ChordsInKey from "../components/ChordsInKey";

export default function ChordsAndKeysPage() {
 const [selectedKey, setSelectedKey] = useState("C");
  return (     
    <div className="min-h-screen p-6 bg-dark text-textlight">
      <h1 className="text-4xl font-bold text-center mb-8 text-accent">
        🎼 Explore Keys
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-start gap-8">
        <div className="bg-lightbg p-6 rounded-lg shadow-lg">
          <CircleOfFifths selectedKey={selectedKey} onKeySelect={setSelectedKey} />
        </div>
        <div className="bg-lightbg p-6 rounded-lg shadow-lg">
          <ChordsInKey keyName={selectedKey} />
        </div>
      </div>
    </div>
  );
}
