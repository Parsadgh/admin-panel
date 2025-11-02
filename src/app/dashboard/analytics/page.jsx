"use client"
import React from "react"
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    BarChart, Bar, PieChart, Pie, Cell, Legend
} from "recharts"

import KpiCards from "@/components/KpiCards"
import QuickActions from "@/components/QuickActions"

const revenueData = [
    { day: "Mon", revenue: 400 },
    { day: "Tue", revenue: 300 },
    { day: "Wed", revenue: 500 },
    { day: "Thu", revenue: 700 },
    { day: "Fri", revenue: 600 },
    { day: "Sat", revenue: 800 },
    { day: "Sun", revenue: 900 },
]

const ordersData = [
    { category: "Electronics", orders: 120 },
    { category: "Clothing", orders: 90 },
    { category: "Home", orders: 60 },
    { category: "Books", orders: 30 },
]

const rolesData = [
    { name: "Admin", value: 2 },
    { name: "User", value: 7 },
    { name: "Moderator", value: 1 },
]

const COLORS = ["#2563EB", "#10B981", "#F59E0B"]

export default function AnalyticsPage() {
    return (
            <div className="p-6">
                <KpiCards />
                <QuickActions />

                {/* Charts */}
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                    {/* Line Chart */}
                <div className="p-6 bg-white/70 backdrop-blur-lg border border-white/30 rounded-2xl shadow-md">
                    <h3 className="font-semibold text-gray-800 mb-4">Revenue Last 7 Days</h3>
                    <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={revenueData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                            <XAxis dataKey="day" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="revenue" stroke="#2563EB" strokeWidth={3} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Bar Chart */}
                <div className="p-6 bg-white/70 backdrop-blur-lg border border-white/30 rounded-2xl shadow-md">
                    <h3 className="font-semibold text-gray-800 mb-4">Orders per Category</h3>
                    <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={ordersData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                            <XAxis dataKey="category" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="orders" fill="#10B981" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Pie Chart */}
                <div className="p-6 bg-white/70 backdrop-blur-lg border border-white/30 rounded-2xl shadow-md">
                    <h3 className="font-semibold text-gray-800 mb-4">User Roles</h3>
                    <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                            <Pie
                                data={rolesData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={60}
                                fill="#8884d8"
                                label
                            >
                                {rolesData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                </div>
            </div>
    )
}
