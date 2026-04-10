import { useNavigate } from 'react-router-dom';

const servers = [
  { id: 'PaoayJQ2BLd4wVe6', name: 'skyMoonHe', version: 'Vanilla 1.21.11', running: false },
  { id: 'YJeMob85DFjL1ezP', name: 'skyMoonHe-qTkB', version: 'Vanilla 1.21.11', running: false },
  { id: 'wb2KT6Ujdb0hh9Gl', name: 'skyMoonHe-YIJT', version: 'Vanilla 1.21.11', running: false },
  { id: 'JmEaQc4o2iogFh1o', name: 'skyRaker803', version: 'Forge 1.20.1', running: false, shared: true },
];

export default function Servers() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative flex flex-col font-sans antialiased selection:bg-primary/30 selection:text-white bg-background-dark text-gray-100">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-background-dark" />
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-60"
        style={{
          backgroundSize: '60px 60px',
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
        }}
      />
      <div
        className="fixed top-0 left-0 right-0 h-[500px] pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle at 50% 0%, rgba(99,102,241,0.15) 0%, rgba(11,14,20,0) 70%)' }}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#0F1319]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-tr from-primary to-secondary p-2 rounded-lg shadow-[0_0_20px_rgba(99,102,241,0.15)]">
                  <span className="material-symbols-outlined text-white text-xl leading-none">grid_view</span>
                </div>
                <span className="text-xl font-bold tracking-tight text-white">Neneneko</span>
              </div>
              <nav className="hidden md:flex items-center gap-1">
                <button className="px-3 py-2 text-sm font-medium text-white bg-white/5 rounded-md transition-colors">
                  伺服器
                </button>
                <button
                  onClick={() => navigate('/account')}
                  className="px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                >
                  帳號
                </button>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <button className="hidden md:flex px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-white border border-white/10 rounded-full transition-colors items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">help</span>
                說明
              </button>
              <div className="h-6 w-px bg-white/10 hidden md:block" />
              <div className="flex items-center gap-3 pl-2">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-medium text-white">skyMoonHe</p>
                </div>
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-gray-300 ring-2 ring-white/5 shadow-lg cursor-pointer hover:ring-primary/50 transition-all">
                  <span className="material-symbols-outlined text-xl">person</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-grow z-10 py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-10">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">伺服器管理</h1>
              <p className="text-gray-400 text-sm md:text-base">管理您的 Neneneko Minecraft 世界與實例</p>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <button
                onClick={() => navigate('/servers/create')}
                className="flex-1 md:flex-none bg-white text-background-dark hover:bg-gray-100 font-semibold py-2.5 px-6 rounded-lg shadow-lg shadow-white/5 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="material-symbols-outlined text-xl">add</span>
                建立新伺服器
              </button>
            </div>
          </div>

          {/* Banner */}
          <div className="relative w-full rounded-2xl overflow-hidden mb-12 border border-white/5 shadow-2xl bg-[#161B22] group">
            <div className="absolute inset-0 bg-[#111] opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-purple-500/10 mix-blend-overlay" />
            <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  系統公告
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">歡迎來到 Neneneko 高級託管</h2>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  體驗極致流暢的 Minecraft 伺服器託管服務。我們已升級底層架構，提供更穩定的連線品質與更強大的運算效能。
                </p>
              </div>
              <div className="flex gap-6">
                <div className="text-center p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">在線率</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-[#38bdf8] mb-1">Low</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">延遲</div>
                </div>
              </div>
            </div>
          </div>

          {/* Server cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {servers.map((server) => (
              <div
                key={server.id}
                className="group relative bg-[#161B22] rounded-xl border border-white/5 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3),0_2px_4px_-1px_rgba(0,0,0,0.15)] hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {server.shared && (
                  <div className="absolute right-0 top-0 p-3">
                    <span className="material-symbols-outlined text-purple-400 opacity-50 group-hover:opacity-100 transition-opacity">share</span>
                  </div>
                )}
                <div className="p-6 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-10 w-10 rounded-lg flex items-center justify-center font-bold text-lg shadow-inner ${
                          server.shared
                            ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/30 text-purple-400'
                            : 'bg-gradient-to-br from-gray-700 to-gray-800 text-white'
                        }`}
                      >
                        {server.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h3
                          className={`text-lg font-bold text-white transition-colors ${
                            server.shared ? 'group-hover:text-purple-400' : 'group-hover:text-primary'
                          }`}
                        >
                          {server.name}
                        </h3>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <p className="text-xs text-gray-500 font-mono tracking-wide">#{server.id}</p>
                          {server.shared && (
                            <span className="text-[10px] bg-purple-500/10 text-purple-400 px-1.5 py-0.5 rounded border border-purple-500/20">
                              Shared
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${
                        server.running
                          ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-500'
                          : 'bg-red-500/10 border border-red-500/20 text-red-500'
                      }`}
                    >
                      {server.running ? 'Online' : 'Offline'}
                    </div>
                  </div>

                  <div className="mt-auto space-y-3">
                    <div className="flex items-center justify-between text-sm text-gray-400 bg-[#0F1319]/50 p-2.5 rounded-lg border border-white/5">
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-base text-gray-500">deployed_code</span>
                        版本
                      </span>
                      <span className="text-gray-200">{server.version}</span>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <button
                        className={`flex-1 text-white text-sm font-medium py-2 rounded-lg transition-colors shadow-lg ${
                          server.shared
                            ? 'bg-purple-600 hover:bg-purple-500 shadow-purple-600/20'
                            : 'bg-primary hover:bg-primary/90 shadow-primary/20'
                        }`}
                      >
                        啟動
                      </button>
                      <button
                        onClick={() => navigate('/dashboard')}
                        className="px-3 py-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/5"
                      >
                        <span className="material-symbols-outlined text-lg">settings</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#0F1319]/80 backdrop-blur-sm mt-auto py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>© 2024 Neneneko.</span>
            <span className="hidden md:inline text-gray-700">|</span>
            <span>Premium Server Hosting</span>
          </div>
          <div className="flex gap-6 text-sm">
            <button className="text-gray-500 hover:text-white transition-colors">Imprint</button>
            <button className="text-gray-500 hover:text-white transition-colors">Privacy Policy</button>
            <button className="text-gray-500 hover:text-white transition-colors">Terms</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
