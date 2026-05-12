"use client";

import Link from "next/link";
import { ArrowLeft, Home, SearchX } from "lucide-react";
import { MainContent } from "@/components/main-content";

export default function NotFound() {
  return (
    <MainContent>
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        {/* Animated Icon Container */}
        <div className="relative mb-8 group">
          <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full scale-150 animate-pulse" />
          <div className="relative w-24 h-24 bg-slate-100 dark:bg-slate-800/50 rounded-3xl border border-slate-200 dark:border-slate-700/60 backdrop-blur-sm flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform duration-500">
            <SearchX className="w-10 h-10 text-slate-400 dark:text-slate-500" />
          </div>
        </div>

        {/* Text Content */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg mx-auto mb-10 leading-relaxed">
          Oops! It seems you've ventured into the unknown. The page you're looking for has either been moved, deleted, or never existed in the first place.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link 
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 cursor-target"
          >
            <Home size={18} />
            Back to Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium transition-all duration-300 cursor-target"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </div>
    </MainContent>
  );
}
