"use client"

import { signIn } from "next-auth/react";

export default function Login() {
  const handleLogin = () => {
    signIn("spotify", { callbackUrl: "http://localhost:3000" });
  };

  return (
      <div className="flex flex-col items-center justify-center w-screen h-screen gap-20">
        <button
          className="flex px-12 py-2 text-lg tracking-widest uppercase rounded-full text-blue-200 focus:outline-none bg-primary hover:bg-opacity-80"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
  );
}