
"use client";
import Link from "next/link";
import Hero from "./Hero";
import React from "react";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <>
      <Hero />

      <div className="min-h-screen bg-white flex items-center justify-center px-4 md:px-8 lg:px-12">
        <section className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 md:p-8">
          <h3 className="text-2xl font-bold text-center mb-6">Sign Up</h3>

          {/* Signup Form */}
          <form className="space-y-4">
            <div>
              <label className="block font-medium">Name</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block font-medium">Email</label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block font-medium">Password</label>
              <input
                type="password"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm">Remember me?</span>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded"
            >
              Sign Up
            </button>

            <p className="text-center mt-4 text-sm">
              <Link href="/forgot-password" className="text-yellow-500">
                Forgot password?
              </Link>
            </p>
          </form>

          {/* OR Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t"></div>
            <span className="mx-4 text-gray-500">or</span>
            <div className="flex-1 border-t"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3">
            <button className="w-full bg-gray-100 border flex items-center justify-center py-2 rounded">
              <Image
                src="/google.png"
                alt="Sign up with Google"
                width={20}
                height={20}
                className="mr-2"
              />
              Sign up with Google
            </button>
            <button className="w-full bg-gray-100 border flex items-center justify-center py-2 rounded">
              <Image
                src="/apple.png"
                alt="Sign up with Apple"
                width={24}
                height={24}
                className="mr-2"
              />
              Sign up with Apple
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
