"use client"
import React from "react"
import { ArrowUp, ArrowDown } from "lucide-react"

export default function StatCard({ title, value, icon, change }) {
  return (
    <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-lg border border-white/30 shadow-md flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">{icon}</div>
        <div className={`text-sm font-medium ${change >= 0 ? "text-green-500" : "text-red-500"} flex items-center gap-1`}>
          {change >= 0 ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
          {Math.abs(change)}%
        </div>
      </div>
      <h3 className="text-gray-800 font-semibold text-lg">{title}</h3>
      <p className="text-3xl font-bold text-blue-600">{value}</p>
    </div>
  )
}
