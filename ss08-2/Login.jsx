import React from 'react'

export default function Login() {
  return (
    <div className="w-full h-[100vh] bg-gray-200 flex justify-center items-center">
            <div className="w-[350px] h-[350px] bg-white rounded-lg shadow px-8">
                <h1 className="text-center font-sans font-bold text-xl mt-8">
                    Login account
                </h1>
                <div className="flex flex-col gap-2 mt-2">
                    <label htmlFor="email">Your email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="name@company.com"
                        className="border-[1px] border-gray-400 p-2 rounded-md"
                    />
                </div>
                <div className="flex flex-col gap-2 mt-2">
                    <label htmlFor="email">Password</label>
                    <input
                        type="password"
                        id="email"
                        placeholder="********"
                        className="border-[1px] border-gray-400 p-2 rounded-md"
                    />
                </div>
                <button className="w-full mt-7 bg-blue-500 text-white py-2 rounded-md cursor-pointer">
                    Login an account
                </button>
                <div className="text-xs text-center mt-5 opacity-50">
                    Already have an account?{" "}
                    <span className="font-bold">Register here</span>
                </div>
            </div>
        </div>
  )
}
