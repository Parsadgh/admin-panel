"use client"
import React from "react"
import { Users, CheckCircle, ShoppingCart, DollarSign } from "lucide-react"

const kpis = [
  { title: "Total Users", value: 120, icon: <Users size={24} className="text-blue-600" /> },
  { title: "Active Users", value: 95, icon: <CheckCircle size={24} className="text-green-600" /> },
  { title: "New Orders", value: 57, icon: <ShoppingCart size={24} className="text-yellow-500" /> },
  { title: "Revenue Today", value: "$3,450", icon: <DollarSign size={24} className="text-purple-600" /> },
]

export default function KpiCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
      {kpis.map((kpi, i) => (
        <div key={i} className="flex items-center p-6 bg-white/70 backdrop-blur-lg border border-white/30 rounded-2xl shadow-md">
          <div className="mr-4">{kpi.icon}</div>
          <div>
            <p className="text-gray-500 text-sm">{kpi.title}</p>
            <p className="text-gray-900 font-semibold text-lg">{kpi.value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
