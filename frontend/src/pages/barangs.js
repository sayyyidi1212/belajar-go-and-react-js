import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Barang() {
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(null);

    // Ambil data dari API Go
    useEffect(() => {
        fetch("http://localhost:8080/api/message")
            .then(res => res.json())
            .then(data => setMessage(data.message));

        fetch("http://localhost:8080/api/status")
            .then(res => res.json())
            .then(data => setStatus(data));
    }, []);

    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="dashboard-content">
                <h1 className="text-3xl font-bold mb-4">Barang Page</h1>

                {/* API Data */}
                <div className="mb-6 p-4 bg-green-100 rounded-xl shadow">
                    <h2 className="text-lg font-semibold text-green-800">
                        Data dari Go API:
                    </h2>
                    <p className="text-gray-700 mt-2">📢 Pesan: {message}</p>
                    {status && (
                        <div className="mt-2 text-sm text-gray-600">
                            <p>⏰ Server Time: {status.server_time}</p>
                            <p>✅ Status: {status.status}</p>
                        </div>
                    )}
                </div>

                {/* Form Tambah Barang */}
                <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        🛒 Tambah Barang
                    </h2>

                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">
                                Nama Barang
                            </label>
                            <input
                                type="text"
                                placeholder="Masukkan nama barang"
                                className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">
                                Harga
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-2.5 text-gray-400">Rp</span>
                                <input
                                    type="number"
                                    placeholder="0"
                                    className="w-full pl-10 px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-medium px-4 py-2.5 rounded-xl hover:bg-blue-700 shadow-md transition"
                        >
                            + Tambah Barang
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
