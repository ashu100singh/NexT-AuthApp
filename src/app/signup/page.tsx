"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import {axios} from "axios";

export default function SignupPage() {

    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: ""
    })

    const onSignup = async () => {
    }



    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-3xl -mt-10 mb-4">SignUp</h1>
            <div className="space-x-4">
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    value={user.username}
                    onChange={(e) => setUser({...user, username: e.target.value})}
                    placeholder="username"
                    className="px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                />
            </div>
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
                onClick={onSignup}
                className="py-1 px-4 border border-gray-300 bg-gray-700 hover:bg-gray-900 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            >
                SignUp
            </button>
            <p>Already have an account? <Link href="/login" className="text-blue-500">Login here</Link></p>
        </div>
    )
}  