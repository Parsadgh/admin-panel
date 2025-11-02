"use client"
import React, { useEffect } from "react"
import StatCard from "../../components/StatCard"
import RevenueChart from "../../components/LineChaer"
import { Users, DollarSign, ShoppingCart, Activity } from "lucide-react"


export default function DashboardPage() {

    return (
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                <StatCard title="Users" value={1245} change={5} icon={<Users size={24} className="text-blue-600" />} />
                <StatCard title="Revenue" value="$23.4k" change={8} icon={<DollarSign size={24} className="text-green-600" />} />
                <StatCard title="Orders" value={312} change={-2} icon={<ShoppingCart size={24} className="text-orange-600" />} />
                <StatCard title="Active Sessions" value={312} change={3} icon={<Activity size={24} className="text-purple-600" />} />

                <div className="md:col-span-2 xl:col-span-3">
                    <RevenueChart />
                </div>
            </div>
    )
}
