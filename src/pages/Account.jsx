import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const notificationItems = [
  { id: 'toggle1', label: '系統公告與更新', defaultChecked: true },
  { id: 'toggle2', label: '伺服器狀態變更', defaultChecked: false },
];

export default function Account() {
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
                <button
                  onClick={() => navigate('/servers')}
                  className="px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                >
                  伺服器
                </button>
                <button className="px-3 py-2 text-sm font-medium text-white bg-white/5 rounded-md transition-colors">
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
              <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">帳號設定</h1>
              <p className="text-gray-400 text-sm md:text-base">管理您的個人資料、連結帳戶與通知偏好設定</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Username */}
            <SettingsCard title="使用者名稱">
              <div className="w-full bg-[#0F1319] border border-white/10 rounded-lg p-3 flex items-center gap-3">
                <span className="material-symbols-outlined text-gray-400">person</span>
                <span className="text-white font-medium">skyMoonHe</span>
              </div>
              <button className="w-full md:w-auto bg-green-600 hover:bg-green-500 text-white font-medium py-2 px-6 rounded-lg shadow-lg shadow-green-600/20 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-lg">edit</span>
                變更使用者名稱
              </button>
            </SettingsCard>

            {/* Language */}
            <SettingsCard title="語言">
              <div className="relative w-full">
                <select className="w-full bg-[#0F1319] border border-white/10 text-white text-sm rounded-lg focus:ring-primary focus:border-primary block p-3 pr-10 appearance-none outline-none">
                  <option>繁體中文</option>
                  <option>English</option>
                  <option>日本語</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <span className="material-symbols-outlined text-lg">expand_more</span>
                </div>
              </div>
              <button className="w-full md:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium py-2 px-6 rounded-lg transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-lg">public</span>
                幫助翻譯
              </button>
            </SettingsCard>

            {/* Backup */}
            <SettingsCard
              title="備份服務"
              action={
                <button className="text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-2 py-1 rounded text-xs flex items-center gap-1 border border-white/5">
                  <span className="material-symbols-outlined text-sm">list</span>
                  我所有的備份
                </button>
              }
            >
              <p className="text-sm text-gray-400">連結新的備份服務以確保數據安全</p>
              <button className="w-full md:w-auto bg-[#4285F4] hover:bg-[#3367D6] text-white font-medium py-2 px-6 rounded-lg shadow-lg shadow-[#4285F4]/20 transition-all flex items-center justify-center gap-2">
                <i className="fa-brands fa-google-drive text-lg" />
                Google Drive
              </button>
            </SettingsCard>

            {/* Discord */}
            <SettingsCard
              title="Discord 帳號"
              action={
                <span className="material-symbols-outlined text-gray-500 cursor-help text-sm" title="連結 Discord 以獲得更多功能">
                  help
                </span>
              }
            >
              <button className="w-full md:w-auto bg-[#5865F2] hover:bg-[#4752C4] text-white font-medium py-2 px-8 rounded-lg shadow-lg shadow-[#5865F2]/20 transition-all flex items-center justify-center gap-2">
                <i className="fa-brands fa-discord text-xl" />
                連結
              </button>
            </SettingsCard>

            {/* Suggestions */}
            <SettingsCard
              title="建議"
              action={<span className="material-symbols-outlined text-gray-500 cursor-help text-sm">help</span>}
            >
              <button className="w-full md:w-auto bg-[#38bdf8] hover:bg-sky-500 text-white font-medium py-2 px-8 rounded-lg shadow-lg shadow-[#38bdf8]/20 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-xl">lightbulb</span>
                建議
              </button>
            </SettingsCard>

            {/* Unlink Google */}
            <SettingsCard title="解除連結 Google">
              <button className="w-full md:w-auto bg-[#fb923c] hover:bg-orange-500 text-white font-medium py-2 px-6 rounded-lg shadow-lg shadow-[#fb923c]/20 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-xl">link_off</span>
                解除連結
              </button>
            </SettingsCard>

            {/* Email Notifications */}
            <div className="bg-[#161B22] rounded-xl border border-white/5 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3),0_2px_4px_-1px_rgba(0,0,0,0.15)] overflow-hidden md:col-span-2">
              <div className="px-6 py-4 border-b border-white/5 bg-[#21262d]/50 flex justify-between items-center">
                <h3 className="text-lg font-bold text-white">電子郵件通知</h3>
              </div>
              <div className="p-6">
                <div className="flex flex-col gap-4">
                  {notificationItems.map((item) => (
                    <NotificationToggle key={item.id} id={item.id} label={item.label} defaultChecked={item.defaultChecked} />
                  ))}
                </div>
              </div>
            </div>

            {/* Support Code */}
            <div className="md:col-span-2 bg-[#161B22] rounded-xl border border-white/5 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">支援碼</h3>
                <p className="text-sm text-gray-500">除了 Neneneko 官方客服之外，請勿與任何人分享此支援碼。</p>
              </div>
              <div className="flex items-center gap-3 bg-[#0F1319] px-4 py-2 rounded-lg border border-white/10 font-mono text-[#38bdf8] tracking-wider">
                #7f39a2d1
                <button className="text-gray-400 hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-sm">content_copy</span>
                </button>
              </div>
            </div>
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

function SettingsCard({ title, action, children }) {
  return (
    <div className="bg-[#161B22] rounded-xl border border-white/5 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3),0_2px_4px_-1px_rgba(0,0,0,0.15)] overflow-hidden">
      <div className="px-6 py-4 border-b border-white/5 bg-[#21262d]/50 flex justify-between items-center">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        {action}
      </div>
      <div className="p-6 flex flex-col gap-6 items-center justify-center min-h-[160px]">
        {children}
      </div>
    </div>
  );
}

function NotificationToggle({ id, label, defaultChecked }) {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <div className="flex items-center justify-between p-3 bg-[#0F1319]/50 rounded-lg border border-white/5">
      <span className="text-gray-300">{label}</span>
      <button
        role="switch"
        aria-checked={checked}
        onClick={() => setChecked(!checked)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full border transition-colors duration-200 ${
          checked ? 'bg-primary border-primary' : 'bg-gray-700 border-gray-600'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 rounded-full bg-white transition-transform duration-200 ${
            checked ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
}
