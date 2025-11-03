"use client"
import React, { useState, useEffect } from "react"
import { Edit, Trash2, Plus } from "lucide-react"
import { db } from "@/lib/firebase"
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
} from "firebase/firestore"

export default function UsersPage() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [modalOpen, setModalOpen] = useState(false)
  const [editingUser, setEditingUser] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "User",
    status: "Active"
  })

  const usersCollection = collection(db, "users")

  const fetchUsers = async () => {
    setLoading(true)
    const snapshot = await getDocs(usersCollection)
    const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    setUsers(list)
    setLoading(false)
  }

  useEffect(() => { fetchUsers() }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (editingUser) {
      const userDoc = doc(db, "users", editingUser.id)
      await updateDoc(userDoc, formData)
    } else {
      await addDoc(usersCollection, formData)
    }
    setFormData({ name: "", email: "", role: "User", status: "Active" })
    setEditingUser(null)
    setModalOpen(false)
    fetchUsers()
  }

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "users", id))
    setUsers(users.filter(u => u.id !== id))
  }

  const handleEdit = (user) => {
    setEditingUser(user)
    setFormData({
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status
    })
    setModalOpen(true)
  }

  const filteredUsers = users.filter(
    u =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.role.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Users</h1>
      <p className="mt-6 mb-6 text-sm text-gray-500">
        This table is connected to a real <span className="font-semibold text-blue-600">Firebase Firestore</span> database. (use VPN)
      </p>
      {/* Search & Add */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-64 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => setModalOpen(true)}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2 shadow-md"
        >
          <Plus size={16} /> Add User
        </button>
      </div>

      {/* Table / Loading */}
      <div className="overflow-x-auto bg-white/80 backdrop-blur-lg border border-white/30 rounded-2xl shadow-md min-h-[200px] flex items-center justify-center">
        {loading ? (
          <p className="py-10 text-gray-500 text-center animate-pulse">Loading users...</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredUsers.map(u => (
                <tr key={u.id} className="hover:bg-gray-100 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">{u.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{u.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{u.role}</td>
                  <td className={`px-6 py-4 whitespace-nowrap font-medium ${u.status === "Active" ? "text-green-600" : "text-red-600"}`}>
                    {u.status}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center flex justify-center gap-2">
                    <button onClick={() => handleEdit(u)} className="p-2 rounded-lg hover:bg-gray-200 transition-colors">
                      <Edit size={16} />
                    </button>
                    <button onClick={() => handleDelete(u.id)} className="p-2 rounded-lg hover:bg-red-100 text-red-600 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
              {!loading && filteredUsers.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center py-6 text-gray-500">No users found</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 w-full max-w-md shadow-lg">
            <h2 className="text-xl font-semibold mb-4">{editingUser ? "Edit User" : "Add User"}</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              
              {/* Role Select */}
              <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </select>

              {/* Status Select */}
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>

              <div className="flex justify-end gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => { setModalOpen(false); setEditingUser(null) }}
                  className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {editingUser ? "Save" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="h-20"></div>
    </div>
  )
}

