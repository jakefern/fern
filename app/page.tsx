import Image from "next/image";
import { Button } from "@/components/ui/button"; // Import the Button component
import { Dashboard } from "@/components/sign-in"; // Import the Dashboard component

export default function Home() {
  return (
    <div className="relative">
      <Dashboard /> {/* Render the Dashboard component */}
    </div>
  );
}
