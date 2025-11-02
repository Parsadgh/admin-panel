"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Menu, X, Moon, Sun, Home, Users, BarChart, Settings, LogOut } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const menuItems = [
    { name: "Dashboard", icon: <Home size={20} /> },
    { name: "Users", icon: <Users size={20} /> },
    { name: "Analytics", icon: <BarChart size={20} /> },
    { name: "Settings", icon: <Settings size={20} /> },
]

export default function DashboardLayout({ children }) {
    const router = useRouter()
    const handleLogout = () => {
        router.push("/login")
    }

    const [open, setOpen] = useState(true)
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <div className={`flex min-h-screen transition-colors duration-300 ${theme === "dark" ? "bg-gray-950 text-gray-100" : "bg-gray-100 text-gray-900"}`}>

            {/* Sidebar */}
            <motion.aside
                animate={{ width: open ? 220 : 80 }}
                className={`flex flex-col border-r border-gray-800/20 ${theme === "dark" ? "bg-gray-900" : "bg-white"} transition-all fixed top-0 left-0 h-screen z-20`}
            >
                <div className="flex items-center justify-between p-4">
                    <span className={`font-bold text-lg ${!open && "hidden"}`}>Admin</span>
                    <button onClick={() => setOpen(!open)} className="p-2 rounded-lg hover:bg-gray-800/10">
                        {open ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                <nav className="flex flex-col gap-2 mt-4">
                    {menuItems.map((item, i) => (
                        <Link
                            key={i}
                            href={item.name === "Dashboard" ? "/dashboard" : `/dashboard/${item.name.toLowerCase()}`}
                            className={`flex items-center p-3 rounded-lg hover:bg-gray-800/10 transition-all ${open ? "gap-3 justify-start" : "justify-center"
                                }`}
                        >
                            {item.icon}
                            {open && <span>{item.name}</span>}
                        </Link>
                    ))}
                </nav>

                <div className="mt-auto p-4 flex flex-col gap-3">
                    <button
                        onClick={toggleTheme}
                        className={`flex items-center p-2 rounded-lg hover:bg-gray-800/10 w-full ${open ? "gap-2 justify-start" : "justify-start"
                            }`}
                    >
                        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                        {open && <span className="font-medium text-sm ml-2">{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>}
                    </button>

                    <button
                        className={`flex items-center p-2 rounded-lg hover:bg-gray-800/10 w-full ${open ? "gap-2 justify-start" : "justify-start"
                            }`}
                        onClick={handleLogout}
                    >
                        <LogOut size={18} />
                        {open && <span className="font-medium text-sm ml-2">Logout</span>}
                    </button>
                </div>
            </motion.aside>


            {/* Main content */}
            <div className={`flex-1 flex flex-col transition-all ${open ? "ml-[220px]" : "ml-[80px]"}`}>
                <header className="flex items-center justify-between px-6 py-4 border-b border-gray-800/10">
                    <h1 className="font-semibold text-xl">Dashboard</h1>
                </header>

                <main className="flex-1 p-6">{children}</main>
            </div>
        </div>
    )
}
