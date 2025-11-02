"use client"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import Button from "@mui/material/Button"
import { alpha } from "@mui/material/styles"


export default function LoginPage() {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleAutoFill = () => {
        setEmail("admin@example.com")
        setPassword("123456")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email === "admin@example.com" && password === "123456") {
            router.push("/dashboard")
        } else {
            setError("Email or password is wrong")
        }
    }

    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
            <div className="absolute inset-0 backdrop-blur-3xl bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_70%),radial-gradient(circle_at_80%_70%,rgba(14,165,233,0.15),transparent_70%)]"></div>

            <form
                onSubmit={handleSubmit}
                className="relative z-10 w-full max-w-md bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-8"
            >
                <h1 className="text-2xl font-bold text-gray-900 text-center mb-6">
                    Welcome Admin
                </h1>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                />

                {error && <p className="text-red-500 text-sm mb-3 text-center">{error}</p>}

                <div className="flex gap-3">
                    <Button
                        type="button"
                        fullWidth
                        onClick={handleAutoFill}
                        variant="outlined"
                        sx={{
                            py: 1.5,
                            textTransform: "none",
                            fontWeight: 600,
                            color: "#1e3a8a",
                            borderColor: alpha("#3b82f6", 0.4),
                            borderWidth: 2,
                            borderRadius: "0.75rem",
                            backdropFilter: "blur(10px)",
                            background: "rgba(255,255,255,0.5)",
                            "&:hover": {
                                background: alpha("#3b82f6", 0.08),
                                borderColor: alpha("#3b82f6", 0.7),
                            },
                        }}
                    >
                        Auto Fill
                    </Button>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                            py: 1.5,
                            textTransform: "none",
                            fontWeight: 600,
                            borderRadius: "0.75rem",
                            background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
                            boxShadow: "0 4px 15px rgba(37,99,235,0.3)",
                            "&:hover": {
                                background: "linear-gradient(135deg, #1d4ed8, #1e40af)",
                                boxShadow: "0 4px 18px rgba(37,99,235,0.45)",
                            },
                        }}
                    >
                        Login
                    </Button>
                </div>

                <p className="text-center text-sm text-gray-600 mt-4">
                    admin@example.com / 123456
                </p>
            </form>
        </main>
    )
}

