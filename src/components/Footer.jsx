"use client"
import { Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-3xl px-4 py-2 bg-white/60 dark:bg-gray-900/50 backdrop-blur-md border border-white/30 dark:border-gray-700/30 rounded-full shadow-sm z-50 text-center text-sm text-gray-700 dark:text-gray-200">
      <div className="flex items-center justify-center gap-2">
        <span>Built with ❤️ by</span>
        <a
          href="https://github.com/Parsadgh"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-blue-600 hover:underline flex items-center gap-1"
        >
          Parsa Sadegh <Github size={16} className="opacity-80" />
        </a>
      </div>
    </footer>
  )
}
