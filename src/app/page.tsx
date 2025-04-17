'use client'

import Link from "next/link"

export default function Home() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
                <h1 className="text-2xl font-bold text-center text-gray-800">
                    Sistema de Usuários
                </h1>

                <nav className="flex flex-col gap-4">
                    <Link
                        href="/users"
                        className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                    >
                        Lista de Usuários
                    </Link>

                    <Link
                        href="/users/new"
                        className="w-full text-center border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-2 px-4 rounded-lg transition-colors"
                    >
                        Cadastro de Usuários
                    </Link>
                </nav>
            </div>
        </main>
    )
}