"use client"
import React, { useState } from "react"
import { useTheme } from "next-themes"
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()
  const [name, setName] = useState("Admin")
  const [email, setEmail] = useState("admin@example.com")
  const router = useRouter()

  const handleLogout = () => {
    router.push("/login")
  }

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  return (
    <div className="p-6 max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-semibold">Settings</h1>

      <div className="p-6 bg-white/70 backdrop-blur-lg border border-white/30 rounded-2xl shadow-md space-y-4">
        <h2 className="text-lg font-medium">Profile</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="p-6 bg-white/70 backdrop-blur-lg border border-white/30 rounded-2xl shadow-md space-y-4">
        <h2 className="text-lg font-medium">Appearance</h2>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
          Switch to {theme === "dark" ? "Light" : "Dark"} Mode
        </button>
      </div>

      <div className="p-6 bg-white/70 backdrop-blur-lg border border-white/30 rounded-2xl shadow-md">
        <button
          onClick={handleLogout}
          className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-red-600 text-white hover:bg-red-700"
        >
          <LogOut size={20} /> Logout
        </button>
      </div>
    </div>
  )
}
