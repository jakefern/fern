"use client"
import SignInPage from "./sign-in/page"; // Import the Dashboard component
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  console.log("User: ", user);
  
  if (!user) {
    return router.push("/sign-in");
  } else {
    return (
      <div className="relative">
        Hello World!
      </div>
    );
  }
}
