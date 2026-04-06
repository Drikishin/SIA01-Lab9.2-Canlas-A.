"use client";

import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";

export function Header() {
  return (
    <header className="flex justify-between items-center p-5 bg-white shadow-sm">
      <h1 className="font-bold text-xl text-slate-800">Andrik Canlas | Portfolio</h1>
      <nav>
        <Show when="signed-out">
          <div className="flex gap-4">
            <SignInButton mode="modal">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Sign In</button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md">Sign Up</button>
            </SignUpButton>
          </div>
        </Show>
        <Show when="signed-in">
          <UserButton showName />
        </Show>
      </nav>
    </header>
  );
}
