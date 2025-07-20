

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 pointer-events-none select-none opacity-30">
                <svg width="100%" height="100%" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="2" fill="#a5b4fc" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>
            </div>
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl px-8 py-10 w-full max-w-sm flex flex-col items-center">
                {/* Logo/Avatar */}
                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-6 shadow-md">
                    <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Sign in</h1>
                <p className="text-gray-500 mb-6 text-center">Enter your credentials to access your account</p>
                <form className="w-full flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Username"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-gray-50 placeholder-gray-400 shadow-sm"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-gray-50 placeholder-gray-400 shadow-sm"
                    />
                    <button type="submit" className="w-full py-3 mt-2 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 transition">Login</button>
                </form>
                <div className="mt-6 text-sm text-gray-500">
                    Don't have an account?{' '}
                    <a href="#" className="text-indigo-500 hover:underline font-medium">Sign up</a>
                </div>
            </div>
        </div>
    );
}