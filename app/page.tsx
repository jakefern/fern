import Image from "next/image";
import { Button } from "@/components/ui/button"; // Import the Button component
import { Dashboard } from "@/components/authentication-04"; // Import the Dashboard component

export default function Home() {
  return (
    <div className="relative">
      <Dashboard /> {/* Render the Dashboard component */}
    </div>
  );
}
