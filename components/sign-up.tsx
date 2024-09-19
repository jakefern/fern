'use client'
import { useState } from "react";
import Link from "next/link";
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import {auth} from '@/lib/firebase';

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(email, password);
            console.log('User created, Email: ', email, 'Password: ', password);
        } catch (error) {
            console.log('Error: ', error);
        }
    }
    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="flex items-center justify-center min-h-screen"> {/* Center the sign-up box */}
      <Card className="mx-auto max-w-sm bg-background text-foreground"> {/* Ensure these classes are applied */}
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Sign up</CardTitle> {/* Updated font size and weight */}
          <CardDescription className="text-balance text-muted-foreground"> {/* Added styles */}
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignUp}> {/* Added onSubmit to the form */}
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" placeholder="Max" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Robinson" required />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required // Ensure this is set to required
                />
              </div>
              <Button type="submit" className="w-full">
                Create an account
              </Button>
            </div>
          </form> {/* Closing form tag added */}
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/sign-in" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp; 
