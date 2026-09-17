"use client";
import { SignIn, UserProfile, Show } from "@clerk/nextjs";

export default function ProfilePage() {
  return (
    <main className="min-h-screen pt-12 px-12 pb-24 bg-background max-w-4xl mx-auto">
      <h1 className="text-4xl font-serif font-light mb-12">My Profile</h1>
      
      <Show when="signed-out">
        <div className="flex justify-center">
            <SignIn />
        </div>
      </Show>
      
      <Show when="signed-in">
        <UserProfile />
      </Show>
    </main>
  );
}
