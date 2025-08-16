import React from "react";
import Sidebar from "../components/Sidebar";

export default function Settings() {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="dashboard-content">
                <h1>Barang Page </h1>
                <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    {/* Header */}
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        🛒 Tambah Barang
                    </h2>

                    {/* Form */}
                    <form className="space-y-5">
                        {/* Nama Barang */}
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

                        {/* Harga */}
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

                        {/* Tombol */}
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
