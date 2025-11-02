"use client"
import React from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { day: "Mon", revenue: 400 },
  { day: "Tue", revenue: 300 },
  { day: "Wed", revenue: 500 },
  { day: "Thu", revenue: 700 },
  { day: "Fri", revenue: 600 },
  { day: "Sat", revenue: 800 },
  { day: "Sun", revenue: 900 },
]

export default function RevenueChart() {
  return (
    <div className="p-6 bg-white/70 backdrop-blur-lg border border-white/30 rounded-2xl shadow-md">
      <h3 className="font-semibold text-gray-800 mb-4">Revenue Last 7 Days</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="revenue" stroke="#2563eb" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
