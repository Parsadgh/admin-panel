"use client"
import React from "react"
import { UserPlus, FileText, Activity } from "lucide-react"

const actions = [
  { title: "Add User", icon: <UserPlus size={20} />, onClick: () => alert("Add User Clicked") },
  { title: "Generate Report", icon: <FileText size={20} />, onClick: () => alert("Generate Report Clicked") },
  { title: "View Logs", icon: <Activity size={20} />, onClick: () => alert("View Logs Clicked") },
]

export default function QuickActions() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
      {actions.map((action, i) => (
        <button
          key={i}
          onClick={action.onClick}
          className="flex items-center p-6 bg-white/70 backdrop-blur-lg border border-white/30 rounded-2xl shadow-md hover:scale-105 transform transition"
        >
          <div className="mr-3 text-blue-600">{action.icon}</div>
          <span className="font-medium">{action.title}</span>
        </button>
      ))}
    </div>
  )
}
