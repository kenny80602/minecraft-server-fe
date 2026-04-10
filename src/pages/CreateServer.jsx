import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const editions = [
  { id: 'java', icon: 'terminal', label: 'Minecraft: Java Edition' },
  { id: 'bedrock', icon: 'book', label: 'Minecraft: Bedrock Edition' },
  { id: 'hytale', icon: 'auto_awesome', label: 'Hytale' },
];

export default function CreateServer() {
  const navigate = useNavigate();
  const [selectedEdition, setSelectedEdition] = useState('java');
  const [address, setAddress] = useState('skyMoonHe');
  const [motd, setMotd] = useState(
    '§bNeneneko §7High Performance Server§r\n§eJoin us for a unique survival experience!'
  );

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
                <button
                  onClick={() => navigate('/servers')}
                  className="px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                >
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
          {/* Header Section */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-4xl font-bold text-white tracking-tight">建立伺服器</h1>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold tracking-widest text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">
                  ENTERPRISE TIER
                </span>
                <span className="text-[10px] font-bold tracking-widest text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded">
                  ONLINE
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-base">部署一個高效能的 Minecraft 實體，幾秒鐘內即可完成設定。</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Edition & Config */}
            <div className="lg:col-span-2 space-y-8">
              {/* Edition Selection */}
              <div
                className="p-1.5 rounded-2xl flex items-center gap-1.5"
                style={{
                  background: 'rgba(22, 27, 34, 0.7)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                {editions.map((ed) => (
                  <button
                    key={ed.id}
                    onClick={() => setSelectedEdition(ed.id)}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl transition-all ${
                      selectedEdition === ed.id
                        ? 'bg-primary text-white font-semibold shadow-[0_0_20px_rgba(99,102,241,0.15)]'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="material-symbols-outlined text-lg">{ed.icon}</span>
                    {ed.label}
                  </button>
                ))}
              </div>

              {/* Server Preview Card */}
              <div
                className="rounded-2xl overflow-hidden border border-white/10"
                style={{
                  background: 'rgba(22, 27, 34, 0.7)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div className="h-32 bg-gradient-to-r from-indigo-900/40 via-purple-900/20 to-indigo-900/40 relative">
                  <div className="absolute -bottom-6 left-8 h-20 w-20 rounded-xl bg-[#1a1c23] border-4 border-[#0F1319] overflow-hidden shadow-2xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-gray-500 text-4xl">dns</span>
                  </div>
                </div>
                <div className="p-8 pt-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                        伺服器地址 (ADDRESS)
                      </label>
                      <div className="flex items-center">
                        <input
                          className="bg-[#0F1319]/50 border border-white/5 rounded-l-lg px-4 py-2.5 text-sm text-white w-full focus:ring-1 focus:ring-primary focus:border-primary outline-none"
                          type="text"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                        <span className="bg-[#0F1319] border border-l-0 border-white/5 rounded-r-lg px-4 py-2.5 text-sm text-gray-500">
                          .neneneko.tw
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                        實體位置 (NODE)
                      </label>
                      <div className="flex items-center gap-3 bg-[#0F1319]/50 border border-white/5 rounded-lg px-4 py-2.5 text-sm text-white">
                        <span className="material-symbols-outlined text-primary text-lg">location_on</span>
                        Taiwan - Taipei-01
                        <div className="ml-auto w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                      伺服器簡介 (MOTD)
                    </label>
                    <textarea
                      className="w-full bg-[#0F1319]/50 border border-white/5 rounded-lg px-4 py-3 text-sm text-white font-mono focus:ring-1 focus:ring-primary focus:border-primary outline-none resize-none"
                      rows={3}
                      value={motd}
                      onChange={(e) => setMotd(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Blueprints Section */}
              <div
                className="rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors cursor-pointer group"
                style={{
                  background: 'rgba(22, 27, 34, 0.7)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/5">
                      <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">
                        architecture
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">伺服器藍圖 (Blueprints)</h4>
                      <p className="text-xs text-gray-500">預設安裝特定的插件包、模組包或地圖。</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-gray-600">info</span>
                    <span className="material-symbols-outlined text-gray-500 group-hover:translate-y-0.5 transition-transform">
                      expand_more
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Specs & Deploy */}
            <div className="space-y-6">
              {/* Hardware Card */}
              <div
                className="rounded-2xl overflow-hidden border border-white/10 p-1"
                style={{
                  background: 'rgba(22, 27, 34, 0.7)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div className="bg-[#0F1319]/40 p-6 rounded-[calc(1rem-4px)]">
                  <h3 className="text-sm font-bold text-white mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg text-primary">memory</span>
                    實體規格 (HARDWARE)
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">CPU 核心</span>
                      <div className="text-right">
                        <span className="text-white font-medium">AMD Ryzen 9 7950X</span>
                        <span className="text-gray-500 block text-xs">(2 vCores)</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">記憶體 (RAM)</span>
                      <span className="text-white font-medium">8.0 GB DDR5</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">儲存空間 (SSD)</span>
                      <span className="text-white font-medium">40 GB NVMe Gen4</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-gradient-to-r from-primary to-[#38bdf8] rounded-full shadow-[0_0_20px_rgba(99,102,241,0.15)]" />
                    </div>
                    <p className="text-[10px] text-gray-600 mt-3 italic">這些資源將從您的訂閱方案中扣除。</p>
                  </div>
                </div>
              </div>

              {/* Visual Preview */}
              <div className="relative rounded-2xl overflow-hidden aspect-video border border-white/5 shadow-2xl bg-gradient-to-br from-indigo-900/30 to-purple-900/20 group">
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider drop-shadow-md">
                    OPTIMIZED FOR PAPER/SPIGOT
                  </span>
                </div>
              </div>

              {/* Deploy Button */}
              <div className="space-y-4">
                <button className="w-full py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 active:translate-y-0">
                  <span className="material-symbols-outlined">add_circle</span>
                  建立伺服器
                </button>
                <p className="text-[10px] text-gray-600 text-center leading-relaxed">
                  點擊建立即代表您同意 Neneneko 的{' '}
                  <span className="text-gray-500 hover:text-primary underline cursor-pointer">服務條款</span> 與{' '}
                  <span className="text-gray-500 hover:text-primary underline cursor-pointer">隱私權政策</span>。
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#0F1319]/80 backdrop-blur-sm mt-auto py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>© 2024 Neneneko SaaS. All rights reserved.</span>
            <span className="hidden md:inline text-gray-700">|</span>
            <div className="flex gap-4">
              <button className="hover:text-white transition-colors">Documentation</button>
              <button className="hover:text-white transition-colors">API Reference</button>
              <button className="hover:text-white transition-colors">Status</button>
            </div>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <span className="material-symbols-outlined text-base">terminal</span>
            <span className="material-symbols-outlined text-base">security</span>
            <span className="material-symbols-outlined text-base">support_agent</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
