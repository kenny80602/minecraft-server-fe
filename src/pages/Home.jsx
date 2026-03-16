export default function Home() {
  return (
    <div className="dark bg-[#0a0a0c] font-sans min-h-screen flex flex-col text-[#f0f6fc] relative overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      {/* Background effects */}
      <div className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundSize: '40px 40px',
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
        }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-[#0a0a0c]/80 to-[#0a0a0c] z-0 pointer-events-none" />
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-900/10 blur-[100px] pointer-events-none z-0" />

      {/* Nav */}
      <nav className="w-full p-6 flex items-center justify-between absolute top-0 left-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <span className="material-symbols-outlined text-white" style={{ fontSize: 24 }}>dns</span>
          </div>
          <span className="text-2xl font-bold tracking-wider text-white uppercase drop-shadow-sm">Neneneko</span>
        </div>
      </nav>

      {/* Main */}
      <main className="flex-grow flex items-center justify-center p-4 relative z-10">
        <div className="w-full max-w-lg mt-12 bg-[#161b22] border border-[#30363d] rounded-xl shadow-2xl backdrop-blur-sm p-8 lg:p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-50" />

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">歡迎使用 Neneneko</h1>
            <p className="text-gray-400 text-sm">登入您的控制台以管理高級伺服器</p>
          </div>

          {/* Register button */}
          <div className="mb-8">
            <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-lg font-medium py-3 px-6 rounded-lg shadow-lg shadow-blue-900/30 transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.98] flex items-center justify-center gap-2 border border-white/5">
              <span className="material-symbols-outlined">person_add</span>
              註冊
            </button>
          </div>

          {/* Divider */}
          <div className="relative flex py-4 items-center mb-6">
            <div className="flex-grow border-t border-gray-700" />
            <span className="flex-shrink-0 mx-4 text-gray-500 text-xs font-medium uppercase tracking-widest">或者</span>
            <div className="flex-grow border-t border-gray-700" />
          </div>

          {/* Login form */}
          <form className="space-y-5 mb-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1">
              <label className="block text-xs font-medium text-gray-400 ml-1 mb-1">使用者帳號</label>
              <div className="flex flex-col md:flex-row gap-3">
                <div className="relative flex-grow group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-gray-500 group-focus-within:text-indigo-400 transition-colors text-[20px]">person</span>
                  </div>
                  <input
                    className="w-full pl-10 pr-4 py-3 bg-[#0d1117] border border-[#30363d] rounded-lg text-gray-100 placeholder-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-sm"
                    placeholder="使用者名稱"
                    name="username"
                    required
                    type="text"
                  />
                </div>
                <div className="relative flex-grow group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-gray-500 group-focus-within:text-indigo-400 transition-colors text-[20px]">lock</span>
                  </div>
                  <input
                    className="w-full pl-10 pr-4 py-3 bg-[#0d1117] border border-[#30363d] rounded-lg text-gray-100 placeholder-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-sm"
                    placeholder="••••••••"
                    name="password"
                    required
                    type="password"
                  />
                </div>
                <button
                  className="bg-[#1f6feb] hover:bg-[#388bfd] text-white font-medium py-3 px-5 rounded-lg shadow-md shadow-blue-900/20 transition-all border border-white/5 flex items-center justify-center gap-2 whitespace-nowrap min-w-[90px]"
                  type="submit"
                >
                  <span className="material-symbols-outlined text-[20px]">login</span>
                  登入
                </button>
              </div>
            </div>
            <div className="flex justify-end">
              <a className="text-xs text-gray-500 hover:text-indigo-400 transition-colors" href="#">
                忘記密碼？
              </a>
            </div>
          </form>

          {/* Social login */}
          <div className="space-y-3">
            <button className="w-full bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] hover:border-gray-500 text-white font-medium py-2.5 px-4 rounded-lg shadow-sm flex items-center justify-center gap-3 transition-all duration-200 group" type="button">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-sm">使用 Google 帳號登入</span>
            </button>
            <button className="w-full bg-[#06C755] hover:bg-[#05b34c] text-white font-medium py-2.5 px-4 rounded-lg shadow-sm shadow-green-900/20 flex items-center justify-center gap-3 transition-colors group border border-transparent" type="button">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
              </svg>
              <span className="text-sm">使用 LINE 帳號登入</span>
            </button>
            <button className="w-full bg-[#1877F2] hover:bg-[#166fe5] text-white font-medium py-2.5 px-4 rounded-lg shadow-sm shadow-blue-900/20 flex items-center justify-center gap-3 transition-colors group border border-transparent" type="button">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="text-sm">使用 Facebook 帳號登入</span>
            </button>
          </div>

          {/* Footer links */}
          <div className="mt-8 pt-6 border-t border-gray-800 text-center text-xs text-gray-500 space-x-4">
            <a className="hover:text-gray-300 transition-colors" href="#">服務條款</a>
            <span>•</span>
            <a className="hover:text-gray-300 transition-colors" href="#">隱私政策</a>
            <span>•</span>
            <a className="hover:text-gray-300 transition-colors" href="#">聯絡我們</a>
          </div>
        </div>
      </main>

      <footer className="w-full text-center p-6 relative z-10">
        <p className="text-xs text-gray-600">© 2026 Neneneko. Premium Server Hosting</p>
      </footer>
    </div>
  );
}
