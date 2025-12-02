"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import {axios} from "axios";

export default function LoginPage() {

    const [user, setUser] = React.useState({
        email: "",
        password: ""
    })

    const onLogin = async () => {
    }



    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-3xl -mt-10 mb-4">Login</h1>
            <div className="space-x-4">
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    value={user.email}
                    onChange={(e) => setUser({...user, email: e.target.value})}
                    placeholder="email"
                    className="px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                />
            </div>
            <div className="space-x-4">
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    value={user.password}
                    onChange={(e) => setUser({...user, password: e.target.value})}
                    placeholder="password"
                    className="px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                />
            </div> 
            <button 
                onClick={onLogin}
                className="py-1 px-4 border border-gray-300 bg-gray-700 hover:bg-gray-900 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            >
                Login
            </button>
            <p>Doesn't have an account? <Link href="/signup" className="text-blue-500">Create one</Link></p>
        </div>
    )
}  